// ============================= KNOWLEDGE GRAPH =============================
// Renders the force-directed graph into #knowledgeGraph. Expects a global
// `knowledgeGraphData` object (nodes + links) to already exist — that data
// lives in data/knowledge-graph-data.js, loaded before this file, and is
// regenerated from a Logseq export by tools/convert_logseq_export.py.
  (function initKnowledgeGraph(data){
    const svg = document.getElementById('knowledgeGraph');
    const panel = document.getElementById('graphPanel');
    if (!svg || !panel) return;

    if (typeof d3 === 'undefined') {
      panel.innerHTML = '<p class="graph-panel-empty">The interactive graph needs an internet connection to load.</p>';
      return;
    }

    const nodes = data.nodes.map(d => ({ ...d }));
    const links = data.links.map(([source, target]) => ({ source, target }));
    const nodeById = new Map(nodes.map(d => [d.id, d]));

    function neighboursOf(id){
      const ids = new Set([id]);
      links.forEach(l => {
        const s = l.source.id || l.source, t = l.target.id || l.target;
        if (s === id) ids.add(t);
        if (t === id) ids.add(s);
      });
      return ids;
    }

    let width = svg.clientWidth || 800;
    let height = svg.clientHeight || 520;

    const root = d3.select(svg).attr('viewBox', [0, 0, width, height]);
    const zoomLayer = root.append('g').attr('class', 'gzoom-layer');
    const linkSel = zoomLayer.append('g').attr('class', 'glink-layer')
      .selectAll('line').data(links).join('line').attr('class', 'glink');

    const nodeSel = zoomLayer.append('g').attr('class', 'gnode-layer')
      .selectAll('g').data(nodes).join('g')
      .attr('class', d => `gnode type-${d.type}`);

    nodeSel.append('circle').attr('r', d => d.type === 'hub' ? 11 : d.type === 'tag' ? 6 : 8);
    nodeSel.append('text')
      .attr('x', d => d.type === 'hub' ? 16 : 12)
      .attr('y', 4)
      .text(d => d.label);

    const zoom = d3.zoom()
      .scaleExtent([0.4, 4])
      .on('zoom', (event) => zoomLayer.attr('transform', event.transform));

    root.call(zoom);
    // the default d3.zoom dblclick behaviour zooms in further — repurpose it to reset the view instead
    root.on('dblclick.zoom', null).on('dblclick', () => {
      root.transition().duration(400).call(zoom.transform, d3.zoomIdentity);
    });

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(85).strength(0.55))
      .force('charge', d3.forceManyBody().strength(-190))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide(26))
      .on('tick', () => {
        linkSel
          .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
        nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
      });

    nodeSel.call(
      d3.drag()
        .on('start', (event, d) => { if (!event.active) simulation.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
    );

    function setActive(id){
      if (!id) {
        nodeSel.classed('is-dim', false);
        linkSel.classed('is-dim', false).classed('is-active', false);
        return;
      }
      const neighbours = neighboursOf(id);
      nodeSel.classed('is-dim', d => !neighbours.has(d.id));
      linkSel
        .classed('is-dim', l => (l.source.id || l.source) !== id && (l.target.id || l.target) !== id)
        .classed('is-active', l => (l.source.id || l.source) === id || (l.target.id || l.target) === id);
    }

    function showPanel(d){
      const linked = [...neighboursOf(d.id)]
        .filter(id => id !== d.id)
        .map(id => nodeById.get(id)?.label)
        .filter(Boolean);
      panel.innerHTML = `
        <p class="graph-panel-kicker">Preview</p>
        <p class="graph-panel-type">${d.type}</p>
        <p class="graph-panel-title">${d.label}</p>
        <ul class="graph-panel-body">${d.body.map(line => `<li>${line}</li>`).join('')}</ul>
        ${linked.length ? `<p class="graph-panel-links">Linked: ${linked.join(', ')}</p>` : ''}
      `;
    }

    nodeSel
      .on('mouseenter', (event, d) => { setActive(d.id); showPanel(d); })
      .on('mouseleave', () => setActive(null))
      .on('click', (event, d) => { setActive(d.id); showPanel(d); })
      .on('focus', (event, d) => { setActive(d.id); showPanel(d); });

    // ---- search ----
    const searchInput = document.getElementById('graphSearch');
    const resultsList = document.getElementById('graphSearchResults');

    function focusNode(d){
      setActive(d.id);
      showPanel(d);
      const k = 1.6;
      const transform = d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(k)
        .translate(-d.x, -d.y);
      root.transition().duration(500).call(zoom.transform, transform);
    }

    if (searchInput && resultsList) {
      let activeIndex = -1;

      function renderResults(matches){
        resultsList.innerHTML = '';
        if (!matches.length) {
          resultsList.innerHTML = '<li class="no-match">No matching nodes</li>';
          resultsList.hidden = false;
          return;
        }
        matches.slice(0, 8).forEach(d => {
          const li = document.createElement('li');
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = d.label;
          btn.dataset.id = d.id;
          li.appendChild(btn);
          resultsList.appendChild(li);
        });
        resultsList.hidden = false;
      }

      function updateActiveItem(items){
        items.forEach((it, i) => it.classList.toggle('is-active', i === activeIndex));
        items[activeIndex]?.scrollIntoView({ block: 'nearest' });
      }

      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        activeIndex = -1;
        if (!q) {
          resultsList.hidden = true;
          resultsList.innerHTML = '';
          setActive(null);
          return;
        }
        const matches = nodes.filter(d => d.label.toLowerCase().includes(q));
        renderResults(matches);
        // dim everything except live matches, without pulling in their neighbours yet
        const matchIds = new Set(matches.map(d => d.id));
        nodeSel.classed('is-dim', d => !matchIds.has(d.id));
        linkSel.classed('is-dim', true).classed('is-active', false);
      });

      searchInput.addEventListener('keydown', (event) => {
        const items = [...resultsList.querySelectorAll('button[data-id]')];
        if (!items.length) return;
        if (event.key === 'ArrowDown') { event.preventDefault(); activeIndex = (activeIndex + 1) % items.length; updateActiveItem(items); }
        else if (event.key === 'ArrowUp') { event.preventDefault(); activeIndex = (activeIndex - 1 + items.length) % items.length; updateActiveItem(items); }
        else if (event.key === 'Enter') { event.preventDefault(); (items[activeIndex] || items[0]).click(); }
        else if (event.key === 'Escape') { resultsList.hidden = true; searchInput.blur(); }
      });

      resultsList.addEventListener('click', (event) => {
        const btn = event.target.closest('button[data-id]');
        if (!btn) return;
        const d = nodeById.get(btn.dataset.id);
        resultsList.hidden = true;
        if (d) {
          searchInput.value = d.label;
          focusNode(d);
        }
      });

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.graph-search')) resultsList.hidden = true;
      });
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = svg.clientWidth || width;
        height = svg.clientHeight || height;
        root.attr('viewBox', [0, 0, width, height]);
        simulation.force('center', d3.forceCenter(width / 2, height / 2));
        simulation.alpha(0.3).restart();
      }, 200);
    });
  })(knowledgeGraphData);
