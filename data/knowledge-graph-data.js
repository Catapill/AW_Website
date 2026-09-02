
const knowledgeGraphData = {
  "nodes": [
    {
      "id": "agentic-red-teaming",
      "label": "Agentic Red-teaming",
      "type": "hub",
      "body": [
        "Adversarially testing multi-agent AI systems for risks that only emerge from agents interacting."
      ]
    },
    {
      "id": "ai-safety",
      "label": "AI Safety",
      "type": "hub",
      "body": [
        "Research and practice around identifying, testing for, and mitigating unsafe AI behaviour."
      ]
    },
    {
      "id": "attack-success-rate-metrics",
      "label": "Attack Success Rate",
      "type": "page",
      "body": [
        "Quantifying red-teaming results as the share of attempts that successfully elicited unsafe behaviour."
      ]
    },
    {
      "id": "attention-mechanism",
      "label": "Attention Mechanism",
      "type": "page",
      "body": [
        "The mechanism that lets a model weigh which parts of its input matter most for each token it produces."
      ]
    },
    {
      "id": "automated-red-team-detection",
      "label": "Automated Red-Team",
      "type": "page",
      "body": [
        "Using a secondary model or classifier to flag likely attack attempts in real time."
      ]
    },
    {
      "id": "automatic-prompt-engineer",
      "label": "Automatic Prompt Engineer",
      "type": "page",
      "body": [
        "An approach that uses an LLM itself to generate and rank candidate prompts for a task."
      ]
    },
    {
      "id": "beyond-the-tip-of-efficiency-uncovering-the-submerged-threats-of-jailbreak-attacks-in-small-language-models",
      "label": "Beyond the Tip of Efficiency",
      "type": "page",
      "body": [
        "Examines safety vulnerabilities in small language models across multiple jailbreak methods and datasets."
      ]
    },
    {
      "id": "bloch-sphere",
      "label": "Bloch Sphere",
      "type": "page",
      "body": [
        "A geometric way of visualising a single qubit's state as a point on a sphere's surface."
      ]
    },
    {
      "id": "bluecodeagent-a-blue-teaming-agent-enabled-by-automated-red-teaming-for-codegen-ai",
      "label": "BlueCodeAgent",
      "type": "page",
      "body": [
        "A defensive agent that learns from automatically generated attacks to catch unsafe code generation."
      ]
    },
    {
      "id": "bose-einstein-condensate-qubits",
      "label": "Bose–Einstein Condensate Qubits",
      "type": "page",
      "body": [
        "An experimental platform using ultra-cold atoms condensed into a single quantum state."
      ]
    },
    {
      "id": "can-small-language-models-reliably-resist-jailbreak-attacks-a-comprehensive-evaluation",
      "label": "SLM Jailbreaking Review",
      "type": "page",
      "body": [
        "A broad evaluation finding small language models are generally more vulnerable to jailbreaks than larger ones."
      ]
    },
    {
      "id": "chain-of-draft-thinking-faster-by-writing-less",
      "label": "Chain of Draft",
      "type": "page",
      "body": [
        "Prompting a model to reason in short drafts instead of full chains-of-thought cuts cost with little accuracy loss."
      ]
    },
    {
      "id": "clifford-gates",
      "label": "Clifford Gates",
      "type": "page",
      "body": [
        "A set of gates that can be efficiently simulated classically, forming the backbone of error correction."
      ]
    },
    {
      "id": "code-red-teaming",
      "label": "Code Red-teaming",
      "type": "hub",
      "body": [
        "Testing whether a model can be manipulated into generating malicious or insecure code."
      ]
    },
    {
      "id": "compositional-red-teaming",
      "label": "Compositional Red-teaming",
      "type": "page",
      "body": [
        "Evaluating whether combinations of individually benign agent actions can produce an unsafe outcome."
      ]
    },
    {
      "id": "compressing-context-to-enhance-inference-efficiency-of-large-language-models",
      "label": "Compression Efficiency In LLMs",
      "type": "page",
      "body": [
        "A method for shortening long input contexts to cut inference cost while retaining what a task needs."
      ]
    },
    {
      "id": "content-filtering",
      "label": "Content Filtering",
      "type": "page",
      "body": [
        "Screening model inputs and outputs against content policy before they reach a user."
      ]
    },
    {
      "id": "context-compression",
      "label": "Context Compression",
      "type": "page",
      "body": [
        "Compressing retrieved or long-context input specifically, rather than the instruction prompt itself."
      ]
    },
    {
      "id": "controlled-not-gate",
      "label": "Controlled NOT Gate",
      "type": "page",
      "body": [
        "A two-qubit gate that flips a target qubit only if a control qubit is 1 — the standard way to entangle qubits."
      ]
    },
    {
      "id": "controlled-z",
      "label": "Controlled Z",
      "type": "page",
      "body": [
        "A two-qubit gate that applies a phase flip only when both qubits are 1."
      ]
    },
    {
      "id": "data-engineering",
      "label": "Data Engineering",
      "type": "hub",
      "body": [
        "Building the pipelines and automation that keep ML systems fed with reliable data."
      ]
    },
    {
      "id": "data-exfiltration",
      "label": "Data Exfiltration",
      "type": "hub",
      "body": [
        "The risk that an AI system leaks sensitive information through its outputs, tool calls, or retrieved context."
      ]
    },
    {
      "id": "data-pipeline-orchestration",
      "label": "Data Pipeline",
      "type": "page",
      "body": [
        "Scheduling and monitoring the steps of a data pipeline so they run reliably in order."
      ]
    },
    {
      "id": "decoherence",
      "label": "Decoherence",
      "type": "page",
      "body": [
        "The loss of a qubit's quantum behaviour through unwanted interaction with its environment."
      ]
    },
    {
      "id": "defeating-nondeterminism-in-llm-inference",
      "label": "LLM Inference Determinism",
      "type": "page",
      "body": [
        "Investigates why LLM outputs vary between identical calls, and how to make inference more deterministic."
      ]
    },
    {
      "id": "defensive-prompt-design",
      "label": "Defensive Prompt Design",
      "type": "page",
      "body": [
        "Structuring system prompts and instructions to make a model more resistant to manipulation."
      ]
    },
    {
      "id": "dspy",
      "label": "DSPy",
      "type": "page",
      "body": [
        "A framework that treats prompts as programmable, optimisable modules rather than hand-written strings."
      ]
    },
    {
      "id": "ease-practical-and-efficient-safety-alignment-for-small-language-models",
      "label": "EASE",
      "type": "page",
      "body": [
        "Proposes a lightweight safety alignment method designed for the limited capacity of small language models."
      ]
    },
    {
      "id": "embeddings",
      "label": "Embeddings",
      "type": "page",
      "body": [
        "Dense vector representations of text that place semantically similar content close together."
      ]
    },
    {
      "id": "emergent-behaviour-testing",
      "label": "Emergent Behaviour",
      "type": "page",
      "body": [
        "Observing agents in open-ended scenarios to catch unplanned behaviour from agent-to-agent interaction."
      ]
    },
    {
      "id": "entanglement",
      "label": "Entanglement",
      "type": "page",
      "body": [
        "A correlation between qubits so strong that measuring one instantly determines the other's state."
      ]
    },
    {
      "id": "etl-pipelines",
      "label": "ETL Pipelines",
      "type": "page",
      "body": [
        "The extract-transform-load process that moves raw data into a clean, usable form."
      ]
    },
    {
      "id": "evidence-for-the-utility-of-quantum-computing-before-fault-tolerance",
      "label": "Quantum Fault Tolerance",
      "type": "page",
      "body": [
        "Argues useful quantum computation is possible on noisy, pre-fault-tolerant hardware for the right problems."
      ]
    },
    {
      "id": "exoplanet-projects",
      "label": "Exoplanet Projects",
      "type": "hub",
      "body": [
        "Detecting exoplanets by analysing the light patterns of distant stars."
      ]
    },
    {
      "id": "experimental-demonstration-of-logical-magic-state-distillation",
      "label": "Magic States",
      "type": "page",
      "body": [
        "Reports an experimental demonstration of distilling clean logical qubit states for fault-tolerant computing."
      ]
    },
    {
      "id": "fine-tuning",
      "label": "Fine-Tuning",
      "type": "page",
      "body": [
        "Further training a pretrained model on a narrower dataset to specialise it for a specific task."
      ]
    },
    {
      "id": "fine-tuning-aligned-language-models-compromises-safety-even-when-users-do-not-intend-to",
      "label": "Safety-Aligned Models",
      "type": "page",
      "body": [
        "Finds that ordinary fine-tuning, even on benign data, can quietly erode a model's safety alignment."
      ]
    },
    {
      "id": "from-explicit-cot-to-implicit-cot-learning-to-internalize-cot-step-by-step",
      "label": "Implicit CoT",
      "type": "page",
      "body": [
        "Trains models to internalise step-by-step reasoning so they no longer need to write it all out."
      ]
    },
    {
      "id": "generative-ai",
      "label": "Generative AI",
      "type": "hub",
      "body": [
        "The models and techniques behind modern text, code and content generation."
      ]
    },
    {
      "id": "grover-s-algorithm",
      "label": "Grover's Algorithm",
      "type": "page",
      "body": [
        "A quantum search algorithm that finds an item in an unsorted list quadratically faster than any classical approach."
      ]
    },
    {
      "id": "guardrail-development",
      "label": "LLM Guardrails",
      "type": "page",
      "body": [
        "Designing rules, classifiers, or filters that sit around a model to catch unsafe inputs or outputs."
      ]
    },
    {
      "id": "hallucination",
      "label": "Hallucination",
      "type": "page",
      "body": [
        "When a model generates plausible-sounding but factually incorrect or unsupported content."
      ]
    },
    {
      "id": "how-to-factor-2048-bit-rsa-integers-in-8-hours-using-20-million-noisy-qubits",
      "label": "RSA Decoding",
      "type": "page",
      "body": [
        "Estimates the real-world qubit resources Shor's algorithm would need to break RSA-2048 encryption."
      ]
    },
    {
      "id": "human-vs-automated-evaluation",
      "label": "Human-Aligned Evaluation",
      "type": "page",
      "body": [
        "Comparing human judgement against LLM-based judges for scoring whether a response was actually unsafe."
      ]
    },
    {
      "id": "indirect-prompt-injection",
      "label": "Indirect Prompt Injection",
      "type": "page",
      "body": [
        "Prompt injection delivered through a third-party source the model reads, like a webpage, rather than the user directly."
      ]
    },
    {
      "id": "jailbreak-resistance-testing",
      "label": "Jailbreak Resistance",
      "type": "page",
      "body": [
        "Systematically probing a model's defences against prompts designed to bypass its safety training."
      ]
    },
    {
      "id": "kaleidoscopic-teaming-in-multi-agent-simulations",
      "label": "Kaleidoscopic Teaming",
      "type": "page",
      "body": [
        "Studies emergent behaviour in multi-agent simulations, distinct from red-teaming since there's no explicit attacker."
      ]
    },
    {
      "id": "knapsack-problem",
      "label": "Knapsack Problem",
      "type": "page",
      "body": [
        "A classic NP-hard optimisation problem that QAOA and Grover's algorithm can speed up."
      ]
    },
    {
      "id": "light-curve-search",
      "label": "Light Curve Search",
      "type": "page",
      "body": [
        "Automated methods for scanning large numbers of light curves to flag likely planetary transits."
      ]
    },
    {
      "id": "light-curves",
      "label": "Light Curves",
      "type": "page",
      "body": [
        "A record of a star's brightness over time — the key raw data used to detect an orbiting planet."
      ]
    },
    {
      "id": "llm-blueteaming",
      "label": "LLM Blueteaming",
      "type": "hub",
      "body": [
        "The defensive counterpart to red-teaming — building and testing the guardrails that catch unsafe behaviour."
      ]
    },
    {
      "id": "llmlingua-2-data-distillation-for-efficient-and-faithful-task-agnostic-prompt-compression",
      "label": "LLMLingua-2",
      "type": "page",
      "body": [
        "A faster, task-agnostic successor to LLMLingua trained via data distillation."
      ]
    },
    {
      "id": "llmlingua-compressing-prompts-for-accelerated-inference-of-large-language-models",
      "label": "LLMLingua",
      "type": "page",
      "body": [
        "Introduces compressing prompts by removing low-information tokens while preserving task performance."
      ]
    },
    {
      "id": "longllmlingua-accelerating-and-enhancing-llms-in-long-context-scenarios-via-prompt-compression",
      "label": "LongLLMLingua",
      "type": "page",
      "body": [
        "Extends prompt compression to long-context scenarios, improving both speed and answer quality."
      ]
    },
    {
      "id": "lost-in-the-middle-how-language-models-use-long-contexts",
      "label": "Lost in the Middle",
      "type": "page",
      "body": [
        "Shows LLMs use information at the start or end of a long context better than information buried in the middle."
      ]
    },
    {
      "id": "machine-learning",
      "label": "Machine Learning",
      "type": "hub",
      "body": [
        "Applied ML work spanning classification projects, data engineering, and generative AI."
      ]
    },
    {
      "id": "magic-state-distillation",
      "label": "Magic State Distillation",
      "type": "page",
      "body": [
        "A process for purifying noisy quantum states into ones clean enough for fault-tolerant computation."
      ]
    },
    {
      "id": "malicious-code-generation-risks",
      "label": "Malicious Code Generation",
      "type": "page",
      "body": [
        "Ways models can be prompted toward producing functional malware or other harmful code."
      ]
    },
    {
      "id": "molecular-based-qubits",
      "label": "Molecular-Based Qubits",
      "type": "page",
      "body": [
        "Qubits built from the spin states of engineered molecules, offering high chemical tunability."
      ]
    },
    {
      "id": "multi-agent-attack-scenarios",
      "label": "Multi-Agent Attacks",
      "type": "page",
      "body": [
        "Test setups involving multiple interacting agents, designed to reveal risks a single-agent test would miss."
      ]
    },
    {
      "id": "no-cloning-theorem",
      "label": "No-Cloning Theorem",
      "type": "page",
      "body": [
        "A proof that an unknown quantum state can't be copied exactly — a foundation of quantum cryptography."
      ]
    },
    {
      "id": "nuclear-magnetic-resonance-qubits",
      "label": "Nuclear Magnetic Resonance",
      "type": "page",
      "body": [
        "One of the earliest qubit platforms, using nuclear spins manipulated with radio-frequency pulses."
      ]
    },
    {
      "id": "optimisation-frameworks",
      "label": "Optimisation Frameworks",
      "type": "hub",
      "body": [
        "Tools and frameworks that automate the search for better-performing prompts."
      ]
    },
    {
      "id": "output-moderation",
      "label": "Output Moderation",
      "type": "page",
      "body": [
        "Automated review of generated text for policy violations or safety issues before it's shown to a user."
      ]
    },
    {
      "id": "pauli-gates",
      "label": "Pauli Gates",
      "type": "page",
      "body": [
        "Three single-qubit gates (X, Y, Z) that rotate a qubit's state around each axis of the Bloch sphere."
      ]
    },
    {
      "id": "payment-classification",
      "label": "Payment Classification",
      "type": "page",
      "body": [
        "A classification model predicting whether a customer is likely to pay, used to prioritise collections outreach."
      ]
    },
    {
      "id": "perplexity",
      "label": "Perplexity",
      "type": "page",
      "body": [
        "A standard metric for how well a language model predicts text, based on average token probability."
      ]
    },
    {
      "id": "phase-gates",
      "label": "Phase Gates",
      "type": "page",
      "body": [
        "Gates that shift a qubit's relative phase without changing its measurement probabilities."
      ]
    },
    {
      "id": "photonic-qubits",
      "label": "Photonic Qubits",
      "type": "page",
      "body": [
        "Qubits encoded in properties of individual photons — easy to move, harder to make interact."
      ]
    },
    {
      "id": "prompt-compression",
      "label": "Prompt Compression",
      "type": "page",
      "body": [
        "Removing redundant tokens from a prompt while preserving what the model needs to perform the task."
      ]
    },
    {
      "id": "prompt-injection-attacks",
      "label": "Prompt Injection Attacks",
      "type": "page",
      "body": [
        "Malicious instructions hidden in input data that attempt to hijack a model's behaviour."
      ]
    },
    {
      "id": "prompt-optimisation",
      "label": "Prompt Optimisation",
      "type": "hub",
      "body": [
        "Systematically improving prompts and their token usage for better, cheaper, more reliable outputs."
      ]
    },
    {
      "id": "quantum-algorithms",
      "label": "Quantum Algorithms",
      "type": "hub",
      "body": [
        "Algorithms designed to exploit superposition and interference for speedups classical computers can't match."
      ]
    },
    {
      "id": "quantum-approximate-optimisation-algorithm",
      "label": "Quantum Approximate",
      "type": "page",
      "body": [
        "A hybrid quantum-classical algorithm (QAOA) for approximating solutions to combinatorial optimisation problems."
      ]
    },
    {
      "id": "quantum-architectures",
      "label": "Quantum Architectures",
      "type": "hub",
      "body": [
        "The physical hardware platforms competing to build stable, scalable qubits."
      ]
    },
    {
      "id": "quantum-computing",
      "label": "Quantum Computing",
      "type": "hub",
      "body": [
        "How quantum systems use superposition and entanglement to process information differently from classical computers."
      ]
    },
    {
      "id": "quantum-error-correction",
      "label": "Quantum Error Correction",
      "type": "hub",
      "body": [
        "Protecting fragile quantum information from noise long enough to compute reliably."
      ]
    },
    {
      "id": "quantum-error-correction-codes",
      "label": "Quantum Error Correction Codes",
      "type": "page",
      "body": [
        "Schemes that spread one logical qubit across many physical qubits so errors can be caught and fixed."
      ]
    },
    {
      "id": "quantum-fourier-transform",
      "label": "Quantum Fourier Transform",
      "type": "page",
      "body": [
        "The quantum analogue of the discrete Fourier transform, and a key subroutine inside Shor's algorithm."
      ]
    },
    {
      "id": "quantum-fundamentals",
      "label": "Quantum Fundamentals",
      "type": "hub",
      "body": [
        "The core physical principles everything else in quantum computing builds on."
      ]
    },
    {
      "id": "quantum-gates",
      "label": "Quantum Gates",
      "type": "hub",
      "body": [
        "The building blocks of quantum circuits — operations that rotate or entangle qubits."
      ]
    },
    {
      "id": "quantum-machine-learning",
      "label": "Quantum ML",
      "type": "page",
      "body": [
        "The intersection of quantum computing and ML, exploring whether quantum circuits can speed up training or inference."
      ]
    },
    {
      "id": "quantum-measurement",
      "label": "Quantum Measurement",
      "type": "page",
      "body": [
        "The act of observing a qubit, which collapses its superposition into one classical outcome."
      ]
    },
    {
      "id": "qubits",
      "label": "Qubits",
      "type": "page",
      "body": [
        "The basic unit of quantum information, able to exist in a superposition of 0 and 1 at once."
      ]
    },
    {
      "id": "rag-exfiltration-risks",
      "label": "RAG Exfiltration",
      "type": "page",
      "body": [
        "Ways a retrieval-augmented system can be manipulated into surfacing documents it shouldn't."
      ]
    },
    {
      "id": "recomp-improving-retrieval-augmented-lms-with-compression-and-selective-augmentation",
      "label": "RECOMP",
      "type": "page",
      "body": [
        "Compresses retrieved documents into short summaries before feeding them to a retrieval-augmented model."
      ]
    },
    {
      "id": "redteaming-evaluation",
      "label": "Redteaming Evaluation",
      "type": "hub",
      "body": [
        "Methods for scoring how well a model resisted an attack, and how reliable that scoring is."
      ]
    },
    {
      "id": "report-automation",
      "label": "Report Automation",
      "type": "page",
      "body": [
        "Automating recurring report generation directly from a data pipeline."
      ]
    },
    {
      "id": "research-paper-reviews",
      "label": "Research Papers",
      "type": "hub",
      "body": [
        "Notes on papers worth remembering, organised by the topic they belong to."
      ]
    },
    {
      "id": "resource-constrained-guardrails",
      "label": "Constrained Guardrails",
      "type": "page",
      "body": [
        "Lightweight safety mechanisms designed to run alongside small models without heavy compute overhead."
      ]
    },
    {
      "id": "retrieval-augmented-generation",
      "label": "RAG",
      "type": "page",
      "body": [
        "Grounding a model's output in documents retrieved at query time, rather than only what it learned in training."
      ]
    },
    {
      "id": "robust-quantum-computational-advantage-with-programmable-3050-photon-gaussian-boson-sampling",
      "label": "Gaussian Boson Sampling",
      "type": "page",
      "body": [
        "Demonstrates a photonic quantum advantage experiment using boson sampling at unprecedented scale."
      ]
    },
    {
      "id": "rubric-based-scoring",
      "label": "Rubric Scoring",
      "type": "page",
      "body": [
        "Using a structured set of defined criteria to make red-teaming evaluation more consistent."
      ]
    },
    {
      "id": "safety-alignment-for-small-models",
      "label": "SLM Safety Alignment",
      "type": "page",
      "body": [
        "Techniques for instilling safety behaviour in small models without a large capacity budget."
      ]
    },
    {
      "id": "sammo",
      "label": "SAMMO",
      "type": "page",
      "body": [
        "A framework that mutates and evaluates prompt variations automatically to find higher-performing versions."
      ]
    },
    {
      "id": "securing-elliptic-curve-cryptocurrencies-against-quantum-vulnerabilities-resource-estimates-and-mitigations",
      "label": "Elliptic Curve securities",
      "type": "page",
      "body": [
        "Estimates the quantum resources needed to break elliptic-curve cryptocurrency keys, and proposes mitigations."
      ]
    },
    {
      "id": "self-information",
      "label": "Self-Information",
      "type": "page",
      "body": [
        "A measure of how surprising a token is, calculated from the negative log of its probability."
      ]
    },
    {
      "id": "shor-s-algorithm",
      "label": "Shor's Algorithm",
      "type": "page",
      "body": [
        "Factors large integers exponentially faster than the best known classical methods, threatening RSA."
      ]
    },
    {
      "id": "simple-probes-can-catch-sleeper-agents",
      "label": "Probed Sleeper Agents",
      "type": "page",
      "body": [
        "Shows lightweight internal probes can detect deceptive 'sleeper agent' behaviour without triggering it."
      ]
    },
    {
      "id": "sleeper-agents-training-deceptive-llms-that-persist-through-safety-training",
      "label": "Sleeper Agents",
      "type": "page",
      "body": [
        "Demonstrates that models can be trained to hide malicious behaviour that survives standard safety fine-tuning."
      ]
    },
    {
      "id": "slm-safety",
      "label": "SLM Safety",
      "type": "hub",
      "body": [
        "Safety alignment for small language models, which have less capacity to absorb safety training than frontier models."
      ]
    },
    {
      "id": "softmax-and-logits",
      "label": "Softmax and Logits",
      "type": "page",
      "body": [
        "How a model's raw output scores (logits) are converted into a probability distribution over the vocabulary."
      ]
    },
    {
      "id": "solid-state-qubits",
      "label": "Solid State Qubits",
      "type": "page",
      "body": [
        "Qubits built directly into solid materials, such as defects in diamond."
      ]
    },
    {
      "id": "spin-chains-and-magnetic-qubits",
      "label": "Spin Chains and Magnetic Qubits",
      "type": "page",
      "body": [
        "Qubits encoded in electron or nuclear spins within magnetic materials."
      ]
    },
    {
      "id": "superconducting-qubits",
      "label": "Superconducting Qubits",
      "type": "page",
      "body": [
        "Qubits built from superconducting circuits near absolute zero — the leading platform from IBM and Google."
      ]
    },
    {
      "id": "superposition",
      "label": "Superposition",
      "type": "page",
      "body": [
        "A quantum system existing in multiple basis states simultaneously until measured."
      ]
    },
    {
      "id": "swap-gate",
      "label": "Swap Gate",
      "type": "page",
      "body": [
        "A gate that exchanges the states of two qubits, useful for routing information through a circuit."
      ]
    },
    {
      "id": "toffoli-gate",
      "label": "Toffoli Gate",
      "type": "page",
      "body": [
        "A three-qubit generalisation of CNOT, reversible enough to implement classical logic."
      ]
    },
    {
      "id": "token-efficiency",
      "label": "Token Efficiency",
      "type": "hub",
      "body": [
        "Reducing the number of tokens a prompt or context uses without sacrificing performance."
      ]
    },
    {
      "id": "token-probability",
      "label": "Token Probability",
      "type": "page",
      "body": [
        "The probability a language model assigns to each possible next token."
      ]
    },
    {
      "id": "token-reduction",
      "label": "Token Reduction",
      "type": "page",
      "body": [
        "Broader strategies for cutting prompt and context length to reduce cost and latency."
      ]
    },
    {
      "id": "token-safeguarding",
      "label": "Token Safeguarding",
      "type": "hub",
      "body": [
        "Monitoring and filtering a model's inputs and outputs at the token level."
      ]
    },
    {
      "id": "topological-qubits",
      "label": "Topological Qubits",
      "type": "page",
      "body": [
        "A theoretical design encoding information in a system's topology, aiming for built-in error resistance."
      ]
    },
    {
      "id": "transformer-architecture",
      "label": "Transformer Architecture",
      "type": "page",
      "body": [
        "The attention-based neural network architecture underlying virtually all modern LLMs."
      ]
    },
    {
      "id": "transit-detection",
      "label": "Transit Detection",
      "type": "page",
      "body": [
        "Identifying the periodic dip in a star's brightness caused by a planet passing in front of it."
      ]
    },
    {
      "id": "trapped-particle-qubits",
      "label": "Trapped Particle Qubits",
      "type": "page",
      "body": [
        "Qubits formed from individual ions or atoms held by electromagnetic fields, known for high fidelity."
      ]
    },
    {
      "id": "traveling-salesperson-problem",
      "label": "Traveling Salesperson Problem",
      "type": "page",
      "body": [
        "A famous NP-hard routing problem where quantum search offers a quadratic speedup."
      ]
    },
    {
      "id": "walsh-hadamard-gates",
      "label": "Walsh Hadamard Gates",
      "type": "page",
      "body": [
        "A gate that puts a qubit into equal superposition — the usual first step in a quantum algorithm."
      ]
    }
  ],
  "links": [
    [
      "agentic-red-teaming",
      "ai-safety"
    ],
    [
      "agentic-red-teaming",
      "compositional-red-teaming"
    ],
    [
      "agentic-red-teaming",
      "emergent-behaviour-testing"
    ],
    [
      "agentic-red-teaming",
      "kaleidoscopic-teaming-in-multi-agent-simulations"
    ],
    [
      "agentic-red-teaming",
      "multi-agent-attack-scenarios"
    ],
    [
      "ai-safety",
      "code-red-teaming"
    ],
    [
      "ai-safety",
      "data-exfiltration"
    ],
    [
      "ai-safety",
      "generative-ai"
    ],
    [
      "ai-safety",
      "llm-blueteaming"
    ],
    [
      "ai-safety",
      "redteaming-evaluation"
    ],
    [
      "ai-safety",
      "slm-safety"
    ],
    [
      "ai-safety",
      "token-safeguarding"
    ],
    [
      "attack-success-rate-metrics",
      "redteaming-evaluation"
    ],
    [
      "attention-mechanism",
      "generative-ai"
    ],
    [
      "attention-mechanism",
      "transformer-architecture"
    ],
    [
      "automated-red-team-detection",
      "llm-blueteaming"
    ],
    [
      "automatic-prompt-engineer",
      "optimisation-frameworks"
    ],
    [
      "beyond-the-tip-of-efficiency-uncovering-the-submerged-threats-of-jailbreak-attacks-in-small-language-models",
      "research-paper-reviews"
    ],
    [
      "beyond-the-tip-of-efficiency-uncovering-the-submerged-threats-of-jailbreak-attacks-in-small-language-models",
      "slm-safety"
    ],
    [
      "bloch-sphere",
      "quantum-fundamentals"
    ],
    [
      "bluecodeagent-a-blue-teaming-agent-enabled-by-automated-red-teaming-for-codegen-ai",
      "code-red-teaming"
    ],
    [
      "bluecodeagent-a-blue-teaming-agent-enabled-by-automated-red-teaming-for-codegen-ai",
      "research-paper-reviews"
    ],
    [
      "bose-einstein-condensate-qubits",
      "quantum-architectures"
    ],
    [
      "can-small-language-models-reliably-resist-jailbreak-attacks-a-comprehensive-evaluation",
      "research-paper-reviews"
    ],
    [
      "can-small-language-models-reliably-resist-jailbreak-attacks-a-comprehensive-evaluation",
      "slm-safety"
    ],
    [
      "chain-of-draft-thinking-faster-by-writing-less",
      "research-paper-reviews"
    ],
    [
      "chain-of-draft-thinking-faster-by-writing-less",
      "token-efficiency"
    ],
    [
      "clifford-gates",
      "pauli-gates"
    ],
    [
      "clifford-gates",
      "quantum-gates"
    ],
    [
      "code-red-teaming",
      "jailbreak-resistance-testing"
    ],
    [
      "code-red-teaming",
      "malicious-code-generation-risks"
    ],
    [
      "compressing-context-to-enhance-inference-efficiency-of-large-language-models",
      "research-paper-reviews"
    ],
    [
      "compressing-context-to-enhance-inference-efficiency-of-large-language-models",
      "token-efficiency"
    ],
    [
      "content-filtering",
      "token-safeguarding"
    ],
    [
      "context-compression",
      "token-efficiency"
    ],
    [
      "controlled-not-gate",
      "entanglement"
    ],
    [
      "controlled-not-gate",
      "quantum-gates"
    ],
    [
      "controlled-not-gate",
      "toffoli-gate"
    ],
    [
      "controlled-z",
      "quantum-gates"
    ],
    [
      "data-engineering",
      "data-pipeline-orchestration"
    ],
    [
      "data-engineering",
      "etl-pipelines"
    ],
    [
      "data-engineering",
      "machine-learning"
    ],
    [
      "data-engineering",
      "report-automation"
    ],
    [
      "data-exfiltration",
      "indirect-prompt-injection"
    ],
    [
      "data-exfiltration",
      "prompt-injection-attacks"
    ],
    [
      "data-exfiltration",
      "rag-exfiltration-risks"
    ],
    [
      "decoherence",
      "quantum-error-correction-codes"
    ],
    [
      "decoherence",
      "quantum-fundamentals"
    ],
    [
      "defeating-nondeterminism-in-llm-inference",
      "generative-ai"
    ],
    [
      "defeating-nondeterminism-in-llm-inference",
      "research-paper-reviews"
    ],
    [
      "defensive-prompt-design",
      "llm-blueteaming"
    ],
    [
      "dspy",
      "optimisation-frameworks"
    ],
    [
      "ease-practical-and-efficient-safety-alignment-for-small-language-models",
      "research-paper-reviews"
    ],
    [
      "ease-practical-and-efficient-safety-alignment-for-small-language-models",
      "slm-safety"
    ],
    [
      "embeddings",
      "generative-ai"
    ],
    [
      "entanglement",
      "quantum-fundamentals"
    ],
    [
      "evidence-for-the-utility-of-quantum-computing-before-fault-tolerance",
      "quantum-architectures"
    ],
    [
      "evidence-for-the-utility-of-quantum-computing-before-fault-tolerance",
      "research-paper-reviews"
    ],
    [
      "exoplanet-projects",
      "light-curve-search"
    ],
    [
      "exoplanet-projects",
      "light-curves"
    ],
    [
      "exoplanet-projects",
      "machine-learning"
    ],
    [
      "exoplanet-projects",
      "transit-detection"
    ],
    [
      "experimental-demonstration-of-logical-magic-state-distillation",
      "magic-state-distillation"
    ],
    [
      "experimental-demonstration-of-logical-magic-state-distillation",
      "research-paper-reviews"
    ],
    [
      "fine-tuning",
      "generative-ai"
    ],
    [
      "fine-tuning-aligned-language-models-compromises-safety-even-when-users-do-not-intend-to",
      "llm-blueteaming"
    ],
    [
      "fine-tuning-aligned-language-models-compromises-safety-even-when-users-do-not-intend-to",
      "research-paper-reviews"
    ],
    [
      "from-explicit-cot-to-implicit-cot-learning-to-internalize-cot-step-by-step",
      "research-paper-reviews"
    ],
    [
      "from-explicit-cot-to-implicit-cot-learning-to-internalize-cot-step-by-step",
      "token-efficiency"
    ],
    [
      "generative-ai",
      "hallucination"
    ],
    [
      "generative-ai",
      "machine-learning"
    ],
    [
      "generative-ai",
      "perplexity"
    ],
    [
      "generative-ai",
      "prompt-optimisation"
    ],
    [
      "generative-ai",
      "retrieval-augmented-generation"
    ],
    [
      "generative-ai",
      "self-information"
    ],
    [
      "generative-ai",
      "softmax-and-logits"
    ],
    [
      "generative-ai",
      "token-probability"
    ],
    [
      "generative-ai",
      "transformer-architecture"
    ],
    [
      "grover-s-algorithm",
      "quantum-algorithms"
    ],
    [
      "guardrail-development",
      "llm-blueteaming"
    ],
    [
      "guardrail-development",
      "prompt-injection-attacks"
    ],
    [
      "how-to-factor-2048-bit-rsa-integers-in-8-hours-using-20-million-noisy-qubits",
      "research-paper-reviews"
    ],
    [
      "how-to-factor-2048-bit-rsa-integers-in-8-hours-using-20-million-noisy-qubits",
      "shor-s-algorithm"
    ],
    [
      "human-vs-automated-evaluation",
      "redteaming-evaluation"
    ],
    [
      "jailbreak-resistance-testing",
      "slm-safety"
    ],
    [
      "kaleidoscopic-teaming-in-multi-agent-simulations",
      "research-paper-reviews"
    ],
    [
      "knapsack-problem",
      "quantum-algorithms"
    ],
    [
      "llm-blueteaming",
      "simple-probes-can-catch-sleeper-agents"
    ],
    [
      "llm-blueteaming",
      "sleeper-agents-training-deceptive-llms-that-persist-through-safety-training"
    ],
    [
      "llmlingua-2-data-distillation-for-efficient-and-faithful-task-agnostic-prompt-compression",
      "research-paper-reviews"
    ],
    [
      "llmlingua-2-data-distillation-for-efficient-and-faithful-task-agnostic-prompt-compression",
      "token-efficiency"
    ],
    [
      "llmlingua-compressing-prompts-for-accelerated-inference-of-large-language-models",
      "research-paper-reviews"
    ],
    [
      "llmlingua-compressing-prompts-for-accelerated-inference-of-large-language-models",
      "token-efficiency"
    ],
    [
      "longllmlingua-accelerating-and-enhancing-llms-in-long-context-scenarios-via-prompt-compression",
      "research-paper-reviews"
    ],
    [
      "longllmlingua-accelerating-and-enhancing-llms-in-long-context-scenarios-via-prompt-compression",
      "token-efficiency"
    ],
    [
      "lost-in-the-middle-how-language-models-use-long-contexts",
      "research-paper-reviews"
    ],
    [
      "lost-in-the-middle-how-language-models-use-long-contexts",
      "token-efficiency"
    ],
    [
      "machine-learning",
      "payment-classification"
    ],
    [
      "machine-learning",
      "quantum-machine-learning"
    ],
    [
      "machine-learning",
      "research-paper-reviews"
    ],
    [
      "magic-state-distillation",
      "quantum-error-correction"
    ],
    [
      "molecular-based-qubits",
      "quantum-architectures"
    ],
    [
      "no-cloning-theorem",
      "quantum-fundamentals"
    ],
    [
      "nuclear-magnetic-resonance-qubits",
      "quantum-architectures"
    ],
    [
      "optimisation-frameworks",
      "prompt-optimisation"
    ],
    [
      "optimisation-frameworks",
      "sammo"
    ],
    [
      "output-moderation",
      "token-safeguarding"
    ],
    [
      "pauli-gates",
      "quantum-gates"
    ],
    [
      "perplexity",
      "token-probability"
    ],
    [
      "phase-gates",
      "quantum-gates"
    ],
    [
      "photonic-qubits",
      "quantum-architectures"
    ],
    [
      "photonic-qubits",
      "robust-quantum-computational-advantage-with-programmable-3050-photon-gaussian-boson-sampling"
    ],
    [
      "prompt-compression",
      "token-efficiency"
    ],
    [
      "prompt-compression",
      "token-reduction"
    ],
    [
      "prompt-optimisation",
      "token-efficiency"
    ],
    [
      "quantum-algorithms",
      "quantum-approximate-optimisation-algorithm"
    ],
    [
      "quantum-algorithms",
      "quantum-computing"
    ],
    [
      "quantum-algorithms",
      "quantum-fourier-transform"
    ],
    [
      "quantum-algorithms",
      "quantum-machine-learning"
    ],
    [
      "quantum-algorithms",
      "shor-s-algorithm"
    ],
    [
      "quantum-algorithms",
      "traveling-salesperson-problem"
    ],
    [
      "quantum-architectures",
      "quantum-computing"
    ],
    [
      "quantum-architectures",
      "solid-state-qubits"
    ],
    [
      "quantum-architectures",
      "spin-chains-and-magnetic-qubits"
    ],
    [
      "quantum-architectures",
      "superconducting-qubits"
    ],
    [
      "quantum-architectures",
      "topological-qubits"
    ],
    [
      "quantum-architectures",
      "trapped-particle-qubits"
    ],
    [
      "quantum-computing",
      "quantum-error-correction"
    ],
    [
      "quantum-computing",
      "quantum-fundamentals"
    ],
    [
      "quantum-computing",
      "quantum-gates"
    ],
    [
      "quantum-error-correction",
      "quantum-error-correction-codes"
    ],
    [
      "quantum-fourier-transform",
      "shor-s-algorithm"
    ],
    [
      "quantum-fundamentals",
      "quantum-measurement"
    ],
    [
      "quantum-fundamentals",
      "qubits"
    ],
    [
      "quantum-fundamentals",
      "superposition"
    ],
    [
      "quantum-gates",
      "swap-gate"
    ],
    [
      "quantum-gates",
      "toffoli-gate"
    ],
    [
      "quantum-gates",
      "walsh-hadamard-gates"
    ],
    [
      "qubits",
      "superposition"
    ],
    [
      "recomp-improving-retrieval-augmented-lms-with-compression-and-selective-augmentation",
      "research-paper-reviews"
    ],
    [
      "recomp-improving-retrieval-augmented-lms-with-compression-and-selective-augmentation",
      "token-efficiency"
    ],
    [
      "redteaming-evaluation",
      "rubric-based-scoring"
    ],
    [
      "research-paper-reviews",
      "robust-quantum-computational-advantage-with-programmable-3050-photon-gaussian-boson-sampling"
    ],
    [
      "research-paper-reviews",
      "securing-elliptic-curve-cryptocurrencies-against-quantum-vulnerabilities-resource-estimates-and-mitigations"
    ],
    [
      "research-paper-reviews",
      "simple-probes-can-catch-sleeper-agents"
    ],
    [
      "research-paper-reviews",
      "sleeper-agents-training-deceptive-llms-that-persist-through-safety-training"
    ],
    [
      "resource-constrained-guardrails",
      "slm-safety"
    ],
    [
      "safety-alignment-for-small-models",
      "slm-safety"
    ],
    [
      "securing-elliptic-curve-cryptocurrencies-against-quantum-vulnerabilities-resource-estimates-and-mitigations",
      "shor-s-algorithm"
    ],
    [
      "token-efficiency",
      "token-reduction"
    ]
  ]
};
