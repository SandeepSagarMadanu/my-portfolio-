export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  skillsUsed: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string[];
  metrics: string;
  techStack: string[];
  category: "ML/DL" | "LLMs & Agentic AI" | "Computer Vision" | "XAI";
  githubUrl?: string;
  demoUrl?: string;
  architecture?: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; confidence: number; experienceYears: number; tools: string[] }[];
}

export const RESUME_DATA = {
  personal: {
    name: "Sandeep Sagar Madanu",
    title: "AI Engineer & Data Scientist",
    email: "sandeepmadanu8@gmail.com",
    phone: "+91-9515235158",
    github: "github.com/SandeepSagarMadanu",
    linkedin: "linkedin.com/in/madanusandeep-sagar",
    portfolio: "sandeepmadanu.netlify.app",
    location: "Hyderabad, Telangana, India",
    about: "Data Scientist & AI/ML Engineer specializing in predictive modeling, statistical inference, deep learning, and LLM-powered applications. Proficient in building end-to-end analytics pipelines, orchestrating multi-agent systems, and conducting cutting-edge independent research in Explainable AI (XAI) and Vision Transformers for medical imaging. Passionate about engineering production-grade intelligent systems that augment clinical decision-making and operational automation."
  },
  skills: [
    {
      category: "Deep Learning & Computer Vision",
      skills: [
        { name: "PyTorch", confidence: 95, experienceYears: 3, tools: ["Tensors", "Autograd", "TorchVision"] },
        { name: "TensorFlow", confidence: 90, experienceYears: 3, tools: ["Keras", "TensorBoard", "TF Data Pipeline"] },
        { name: "OpenCV", confidence: 92, experienceYears: 2.5, tools: ["Haar Cascades", "YOLO", "Image Processing"] },
        { name: "MediaPipe", confidence: 88, experienceYears: 2, tools: ["FaceMesh", "Pose Tracking", "Hand Tracking"] },
        { name: "Vision Transformers (ViT)", confidence: 85, experienceYears: 1.5, tools: ["Patch Projection", "Self-Attention", "Multi-Modal Transformers"] },
        { name: "CNNs", confidence: 94, experienceYears: 3, tools: ["ResNet", "VGG", "EfficientNet"] }
      ]
    },
    {
      category: "NLP & LLM Engineering",
      skills: [
        { name: "LangChain", confidence: 90, experienceYears: 2, tools: ["Chains", "Memory", "Retrieval QA"] },
        { name: "LangGraph", confidence: 88, experienceYears: 1.5, tools: ["State Graphs", "Multi-Agent Networks", "Human-in-the-Loop"] },
        { name: "LLaMA & HuggingFace", confidence: 92, experienceYears: 2, tools: ["Transformers Library", "PEFT", "QLoRA Tuning"] },
        { name: "RAG Systems", confidence: 94, experienceYears: 2, tools: ["Vector Stores (Pinecone, Chroma)", "Embedding Models", "Re-ranking"] },
        { name: "GROQ API & Fast Inference", confidence: 90, experienceYears: 1.5, tools: ["JSON Mode", "Function Calling", "Tool Use Orchestration"] }
      ]
    },
    {
      category: "Explainable AI (XAI) & Analytics",
      skills: [
        { name: "Grad-CAM", confidence: 90, experienceYears: 1.5, tools: ["Heatmap Superimposition", "Convolutional Visualizations"] },
        { name: "SHAP / LIME", confidence: 88, experienceYears: 1.5, tools: ["KernelSHAP", "TreeSHAP", "Local Feature Interpretability"] },
        { name: "Pandas & NumPy", confidence: 95, experienceYears: 3, tools: ["Data Wrangling", "Vectorized Array Math", "Feature Engineering"] },
        { name: "Statistical Analysis", confidence: 88, experienceYears: 3, tools: ["Hypothesis Testing", "A/B Testing", "Regression Modeling"] }
      ]
    },
    {
      category: "Infrastructure & Deployment",
      skills: [
        { name: "FastAPI", confidence: 88, experienceYears: 2, tools: ["Async Routes", "Pydantic Validation", "REST Endpoints"] },
        { name: "SQL & Databases", confidence: 85, experienceYears: 3, tools: ["PostgreSQL", "Query Optimization", "Schema Design"] },
        { name: "Git & Docker", confidence: 90, experienceYears: 3, tools: ["CI/CD Pipelines", "Containerization", "Version Control"] },
        { name: "Streamlit", confidence: 92, experienceYears: 2, tools: ["Rapid UI Prototyping", "Interactive Dashboards"] }
      ]
    }
  ] as SkillGroup[],
  experience: [
    {
      role: "AI Researcher — Vision Transformers & Medical Imaging",
      company: "Self-Employed (Independent Research)",
      location: "Hyderabad, India",
      period: "Dec 2025 – Present",
      points: [
        "Directed investigation of hybrid CNN–Vision Transformer architectures for MRI-based MGMT promoter methylation prediction on 500+ patient scans, targeting a Scopus-indexed publication in Medical AI / XAI.",
        "Constructed multi-modal data ingestion frameworks unifying 3 distinct streams (MRI scan sequences, radiomics descriptors, and clinical health records) utilizing 5-fold cross-validation and rigorous feature extraction suites.",
        "Benchmarked diagnostic explainability using Grad-CAM and SHAP over 5 hold-out folds, validating neural attention heatmap alignments with actual clinical tumor boundaries under medical expert parameters."
      ],
      skillsUsed: ["PyTorch", "Vision Transformers", "CNNs", "Grad-CAM", "SHAP", "Radiomics", "Scikit-learn"]
    },
    {
      role: "Data Science Intern",
      company: "Brainovision Solutions India Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Apr 2025 – Jun 2025",
      points: [
        "Produced 3+ Python machine learning workflows spanning end-to-end ETL processing, model fitting, and performance audits on production datasets exceeding 10,000 rows across diverse industry sectors.",
        "Collaborated on 2 forecasting analytics engagements in 2-week Agile cycles, generating detailed exploratory analyses and candidate model leaderboard comparisons that lifted baseline macro-F1 score by 8% to 12%."
      ],
      skillsUsed: ["Python", "Pandas", "Scikit-learn", "EDA", "F1 Optimization", "Statistical Forecasting"]
    },
    {
      role: "Project Intern — AI & Autonomous Systems",
      company: "Aigen Labs (Aeroforge Labs)",
      location: "Hyderabad, India",
      period: "May 2024 – Sep 2024",
      points: [
        "Parsed high-frequency sensor and telemetry streams from 2 UAV and autonomous-vehicle prototypes, fueling automated guidance logic and vision-based proof-of-concept navigation.",
        "Built low-latency computer vision subsystems for robotic pick-and-place manipulation, sustaining stable 25+ FPS throughput on embedded hardware platforms."
      ],
      skillsUsed: ["OpenCV", "MediaPipe", "Python", "Telemetry Streaming", "Embedded AI", "Sensor Integration"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: "medical-xai",
      title: "Medical Image Classification & Explainable AI (XAI)",
      subtitle: "Brain Tumor & Pneumonia Diagnostic System",
      problem: "Deep learning models are notoriously black boxes, making doctors hesitant to trust neural predictions in high-stakes clinical diagnostic environments.",
      solution: "Engineered high-accuracy CNN classifiers fine-tuned on 3,000+ brain MRI scans and thoracic X-rays, then integrated Grad-CAM overlays to visually highlight the pathological regions driving the classification decision.",
      features: [
        "Fine-tuned ResNet-based CNN models to 92%+ validation accuracy and 0.89 macro-F1 score.",
        "Interactive Grad-CAM heatmap visualization revealing attention activation on tumor bounding margins.",
        "Dual-pipeline diagnostics: Brain tumor detection & Pneumonia classification from a single interface."
      ],
      metrics: "92%+ Validation Accuracy | 0.89 Macro-F1 | 250ms diagnostic latency",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Grad-CAM", "Streamlit"],
      category: "XAI",
      githubUrl: "https://github.com/SandeepSagarMadanu",
      architecture: "MRI/X-Ray Input -> Image Normalization -> Feature Extraction (ResNet/CNN) -> Classification Head -> Backpropagation Gradients -> Grad-CAM Heatmap Layer"
    },
    {
      id: "multimodal-query",
      title: "Multimodal Image Query System",
      subtitle: "Semantic Vision-Language Retrieval Engine",
      problem: "Standard text search cannot search through dense visual assets, and traditional CV classifiers cannot handle arbitrary conversational search queries.",
      solution: "Developed a vision-language retrieval engine leveraging LLaMA models accessed via GROQ API to parse semantic images, exposing 10+ REST API endpoints via FastAPI for real-time document search.",
      features: [
        "Zero-shot image labeling and visual semantic matching based on prompt directives.",
        "Orchestrated GROQ API integrations delivering 30ms latency responses.",
        "Modular prompt-template optimizer to dynamically reframe user queries into structured LLM tokens."
      ],
      metrics: "<150ms Response Latency | 94% Search Relevance | 10+ FastAPI Routes",
      techStack: ["Python", "LLaMA", "GROQ API", "FastAPI", "Vector Search", "Prompt Engineering"],
      category: "LLMs & Agentic AI",
      githubUrl: "https://github.com/SandeepSagarMadanu"
    },
    {
      id: "agentic-chatbot",
      title: "Agentic AI Chatbot with LangGraph",
      subtitle: "Persistent Multi-Agent Orchestrator",
      problem: "Simple conversational chatbots struggle with complex tasks requiring sequential tool-use, looping, and state persistence.",
      solution: "Created a conversational agent using LangGraph and LangChain that dynamically routes user messages, invokes tools, stores conversation state, and performs cyclical task checks.",
      features: [
        "Complex tool routing allowing up to 5+ chained operations per single chat turn.",
        "State graph tracking to maintain agent context across prolonged interactions.",
        "Integrated SQL search and API fetch nodes in the agent execution graph."
      ],
      metrics: "5+ Chained Tool Invocations | 100% State Consistency | 0% Memory Leakage",
      techStack: ["Python", "LangGraph", "LangChain", "FastAPI", "SQLite"],
      category: "LLMs & Agentic AI",
      githubUrl: "https://github.com/SandeepSagarMadanu"
    },
    {
      id: "driver-drowsiness",
      title: "Autonomous Safety: Drowsiness & Sign Tracker",
      subtitle: "Embedded Real-Time Driver Assistance Subsystem",
      problem: "Distracted driving and driver exhaustion are leading causes of traffic accidents, requiring real-time, low-latency edge-capable detection.",
      solution: "Designed a real-time driver fatigue monitor capturing facial landmarks at 30 FPS, coupled with a 43-class German Traffic Sign Recognition (GTSRB) CNN classifier.",
      features: [
        "Real-time Eye Aspect Ratio (EAR) mapping for drowsiness triggers via MediaPipe landmarks.",
        "Traffic Sign recognition running at 96% test accuracy on 43 classes.",
        "Optimized models for edge devices to sustain high frame rates without frame buffering."
      ],
      metrics: "30 FPS Real-time Tracker | 96% Sign Test Accuracy | 43 Sign Classes",
      techStack: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "CNN"],
      category: "Computer Vision",
      githubUrl: "https://github.com/SandeepSagarMadanu"
    }
  ] as ProjectItem[],
  education: [
    {
      degree: "PGDM in Artificial Intelligence & Data Science",
      institution: "ASB — Ashoka School of Business",
      location: "Hyderabad, India",
      period: "2023 – 2025"
    },
    {
      degree: "B.Com in Commerce & Computer Applications",
      institution: "Andhra Loyola College",
      location: "Vijayawada, India",
      period: "2020 – 2023"
    }
  ],
  certifications: [
    "Python Using AI Workshop",
    "Python Machine Learning 5-Day Bootcamp",
    "AI and Data Scientist Certification"
  ]
};

// Local semantic search / QA helper (mock vector RAG)
export function searchKnowledgeBase(query: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("tumor") || q.includes("medical") || q.includes("imaging") || q.includes("pneumonia") || q.includes("brain")) {
    const item = RESUME_DATA.projects.find(p => p.id === "medical-xai")!;
    return `Medical Image Classification Project: Sandeep built a system for Brain Tumor & Pneumonia detection. He fine-tuned 2 CNN classifiers on 3,000+ MRI/X-ray images, reaching 92%+ validation accuracy and 0.89 macro-F1 score. He integrated Grad-CAM overlays for explainability, letting clinicians see the model's focal attention area.`;
  }
  
  if (q.includes("langgraph") || q.includes("agent") || q.includes("chatbot") || q.includes("conversational")) {
    const item = RESUME_DATA.projects.find(p => p.id === "agentic-chatbot")!;
    return `Agentic Chatbot Project: Sandeep created an agent using LangGraph and LangChain. It uses a state graph to persist variables across loops and is capable of running 5+ chained tool invocations per user dialog turn.`;
  }
  
  if (q.includes("vit") || q.includes("transformer") || q.includes("attention") || q.includes("mri") || q.includes("mgmt")) {
    return `Vision Transformer Research: As an Independent AI Researcher, Sandeep investigated hybrid CNN-Vision Transformer models for MRI-based MGMT promoter methylation prediction on 500+ brain scans, aiming for 1 Scopus-indexed paper. He built multi-modal ingestion (MRI, clinical files, radiomics) with 5-fold cross validation and evaluated explanation heatmaps using Grad-CAM & SHAP.`;
  }
  
  if (q.includes("drowsiness") || q.includes("drowsy") || q.includes("sign") || q.includes("opencv") || q.includes("mediapipe")) {
    return `Driver Drowsiness & Sign Recognition: Sandeep built an ADAS utility that runs facial landmark monitoring at 30 FPS via MediaPipe to detect driver tiredness (Eye Aspect Ratio). It also includes a 43-class roadway sign recognition CNN model scoring 96% accuracy on testing sets.`;
  }

  if (q.includes("experience") || q.includes("work") || q.includes("jobs") || q.includes("intern")) {
    return `Work Experience: 
    1. Independent AI Researcher (Dec 2025 - Present) on Vision Transformers and Medical Imaging MRI analysis.
    2. Data Science Intern at Brainovision Solutions (Apr 2025 - Jun 2025), building ETL ML workflows (>10k dataset rows) and macro-F1 forecasting benchmarks.
    3. Project Intern at Aigen Labs (May 2024 - Sep 2024), tracking UAV/autonomous car sensors and 25+ FPS pick-and-place vision models.`;
  }

  if (q.includes("skills") || q.includes("languages") || q.includes("libraries")) {
    return `Technical Skills:
    - Deep Learning: PyTorch, TensorFlow, Keras, CNN, Vision Transformers (ViT)
    - LLMs: LangChain, LangGraph, LLaMA, GROQ API, Vector databases, RAG
    - CV / XAI: OpenCV, MediaPipe, Grad-CAM, SHAP
    - Analytics: Python, SQL, Pandas, NumPy, Stats, Streamlit, FastAPI`;
  }

  if (q.includes("education") || q.includes("school") || q.includes("college")) {
    return `Education: Sandeep holds a PGDM in AI & Data Science (2023 - 2025) from Ashoka School of Business, and a B.Com in Computer Applications (2020 - 2023) from Andhra Loyola College.`;
  }

  // Default response compiles a quick elevator pitch
  return `Sandeep Sagar Madanu is an AI Engineer and Data Scientist specializing in deep learning, explainable AI, and agentic LLM systems. He has built automated medical imaging tools (92% accuracy, Grad-CAM overlays), agent workflows using LangGraph, and low-latency computer vision pipelines for drones/robotics. He is trained in AI & Data Science (PGDM, 2023-2025).`;
}
