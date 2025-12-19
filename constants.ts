
import { Project, SkillItem, CareerDoc, ExperienceItem, EducationItem, Reference } from './types';

export const PERSONAL_INFO = {
  name: "Basetsana Zulu",
  title: "AI/ML Engineer & Data Scientist",
  tagline: "Building real-world AI solutions from data.",
  bio: "I am an AI/ML Engineer and Data Scientist trained at the Capaciti AI Bootcamp. I have gained hands-on experience in Python, Natural Language Processing, and Generative AI by building and deploying projects every week. I combine networking skills with a passion for problem-solving to create ethical and scalable AI solutions. I am eager to use my technical skills to drive innovation.",
  cvSummary: "I am an AI/ML Engineer and Data Scientist trained at the Capaciti AI Bootcamp. I have gained hands-on experience in Python, Natural Language Processing, and Generative AI by building and deploying projects every week. I combine networking skills with a passion for problem-solving to create ethical and scalable AI solutions. I am eager to use my technical skills to drive innovation.",
  email: "basetsanazulu07@gmail.com",
  phone: "+27 65 872 0531", 
  address: "Pretoria, Gauteng",
  languages: ["English", "Sepedi", "IsiZulu"],
  driversLicense: "No",
  resumeUrl: "https://github.com/MaZulu07/portfolio/raw/main/Basetsana_Zulu_CV%20(1).docx", 
  socials: {
    github: "https://github.com/MaZulu07",
    linkedin: "https://www.linkedin.com/in/basetsana-zulu-500012256",
    kaggle: "https://kaggle.com"
  },
  profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQGxn36zAduuKw/profile-displayphoto-scale_200_200/B4DZpYZDzWJUAg-/0/1762419556637?e=1767830400&v=beta&t=i1F-CRVc-cXFUV01gS6GIov5MttVTzvmDIOwpAgcb5E"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'AI Bootcamp Candidate',
    company: 'Capaciti',
    period: 'October 2025 - present', 
    description: [
      'Engaged in an intensive AI training program focusing on end-to-end Machine Learning pipelines and Generative AI integration.',
      'Completed over 10 specialized AI certifications from IBM, Google Cloud, and DeepLearning.AI, maintaining a consistent weekly project deployment schedule.',
      'Developed and optimized NLP models using Python and spaCy for automated text classification and sentiment analysis.',
      'Designed conversational AI agents using Voiceflow and IBM watsonx, focusing on user intent recognition and dynamic response generation.',
      'Collaborated in agile teams to build full-stack AI applications, utilizing React for frontend and Streamlit for rapid ML prototyping.',
      'Refined professional communication skills through weekly technical presentations and peer-review sessions.'
    ]
  },
  {
    id: 'exp2',
    role: 'IT Intern',
    company: 'The Document Warehouse',
    period: 'November 2024 – June 2025', 
    description: [
      'Managed enterprise-level information security by implementing BitLocker encryption on company devices, ensuring 100% compliance with data protection policies.',
      'Administered the MFiles Electronic Document Management System (EDMS), optimizing data retrieval workflows and organizational metadata structures.',
      'Supervised the deployment and configuration of high-performance workstations, including OS upgrades (Windows 10 to 11) and hardware optimization (HDD to SSD migrations).',
      'Monitored and maintained corporate network integrity using Cisco Meraki, analyzing traffic patterns to minimize latency and packet loss.',
      'Enforced robust endpoint security protocols utilizing Mobile Device Management (MDM) and ESET Endpoint Encryption across a diverse hardware fleet.',
      'Provided advanced technical support and troubleshooting for both local and remote users, improving overall internal system uptime.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'Diploma in Information Technology',
    institution: 'Tshwane University of Technology',
    year: 'April 2025' 
  }
];

export const ACHIEVEMENTS = [
  "AWS Academy Graduate: AWC Academy Cloud Foundations",
  "Cisco: Introduction to Cybersecurity"
];

export const REFERENCES: Reference[] = [
  {
    name: "Kefiloe Mphye",
    role: "Talent Development Coach",
    company: "Capaciti",
    contact: "kefiloe.mphye@capaciti.org.za"
  },
  {
    name: "Emile Setowski",
    role: "IT Manager",
    company: "The Document Warehouse",
    contact: "EmileS@tdw.co.za"
  }
];

export const INTERESTS = ["Reading novels"];

export const SOFT_SKILLS = [
  "Strong time management skill",
  "Great communication skill",
  "Problem solving skill",
  "Ability to work independently and as part of a team."
];

export const SKILLS: SkillItem[] = [
  // Languages
  { name: 'Python for Data Science', level: 98, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },
  { name: 'C#', level: 80, category: 'Languages' },
  { name: 'HTML', level: 90, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },

  // ML/AI Specializations
  { name: 'NLP', level: 95, category: 'ML/AI' },
  { name: 'Computer Vision', level: 88, category: 'ML/AI' },
  { name: 'Generative AI & LLMs', level: 92, category: 'ML/AI' },
  { name: 'Ethical AI & Fairness', level: 90, category: 'ML/AI' },
  { name: 'Prompt Engineering', level: 94, category: 'ML/AI' },

  // Frameworks & Libraries
  { name: 'Pandas', level: 95, category: 'Frameworks' },
  { name: 'Scikit-learn', level: 88, category: 'Frameworks' },
  { name: 'React', level: 78, category: 'Frameworks' },
  { name: 'Next.js', level: 75, category: 'Frameworks' },

  // Tools & Platforms
  { name: 'OpenAI API', level: 95, category: 'Tools' },
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'Google Maps API', level: 82, category: 'Tools' },
  { name: 'Figma', level: 85, category: 'Tools' },
  { name: 'Vercel', level: 90, category: 'Tools' },

  // Personal Skills (for chart compatibility)
  { name: 'Communication', level: 100, category: 'Personal' },
  { name: 'Team Work', level: 100, category: 'Personal' },
  { name: 'Time Management', level: 100, category: 'Personal' },
  { name: 'Problem Solving', level: 100, category: 'Personal' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'TechTitans AI Chatbot',
    description: 'A conversational learning application built to educate users on AI concepts. Designed using Voiceflow, it utilizes intent recognition to guide users from basic to complex AI topics.',
    techStack: ['Voiceflow', 'NLP', 'Conversational AI'],
    thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    category: 'Bootcamp',
    repoUrl: 'https://github.com/tech-titans-projects/ai-chatbot',
    demoUrl: 'https://creator.voiceflow.com/share/68e8ee76929ec0030f475bb3/production',
    fullDocumentation: `
# TechTitans AI Chatbot

## Project Overview
A conversational learning application built to educate users on AI concepts. Designed using Voiceflow, it utilizes intent recognition to guide users from basic to complex AI topics.

The TechTitans AI Chatbot is an educational conversational agent designed to democratize knowledge about Artificial Intelligence. By using a no-code approach with Voiceflow, the project demonstrates how complex domain knowledge can be structured into accessible, interactive dialogues for beginners.

## Key Features
- **Structured Learning Paths**: Users can choose from predefined modules like "Intro to AI," "Machine Learning vs. Deep Learning," and "Ethics in AI."
- **Intent Recognition**: The bot understands natural language queries to jump to relevant topics, bypassing linear navigation.
- **Knowledge Base Integration**: Fallback mechanisms that query a document store when specific intents are not matched.
- **Multi-modal Responses**: Utilizes images, cards, and quick replies to explain visual concepts effectively.

## Design & Architecture
- **Voiceflow**: Used as the primary conversation design platform, allowing for visual flow management and logic prototyping.
- **NLU Logic**: Custom entity extraction was set up to identify technical terms within user queries to provide precise definitions.
- **Deployment**: The chatbot is deployed as a web widget, easily embeddable into any educational portal or learning management system.
    `
  },
  {
    id: 'p2',
    title: 'Areyeng Bus Track Prototype',
    description: 'Real-time bus tracking and delay detection system for Tshwane CBD. Integrates GPS telemetry with predictive analytics to forecast arrival times.',
    techStack: ['Python', 'Google Maps API', 'Scikit-learn', 'Predictive Modeling'],
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    repoUrl: 'https://github.com/tech-titans-projects/areyeng-bus-track',
    demoUrl: 'https://veto-repo-12732681.figma.site/',
    fullDocumentation: `
# Areyeng Bus Track Prototype

## Project Overview
Real-time bus tracking and delay detection system for Tshwane CBD. Integrates GPS telemetry with predictive analytics to forecast arrival times.

Public transportation in the Tshwane CBD often suffers from unpredictability. The Areyeng Bus Track Prototype addresses this by providing a real-time tracking and prediction system, improving the commuter experience through data-driven insights.

## System Architecture
The solution integrates three core components:
1.  **Telemetry Ingestion**: Simulates GPS data streams from bus units to track location updates.
2.  **Predictive Engine**: A Python-based backend that uses historical transit logs and current traffic APIs to estimate Arrival Times (ETA).
3.  **Frontend Visualization**: A dashboard interface that overlays bus positions on Google Maps for users to view in real-time.

## Technical Details
- **Data Processing**: **Pandas** is used to clean and structure raw telemetry data, handling missing timestamps and erratic GPS signals.
- **Prediction Model**: A **Random Forest Regressor** (Scikit-learn) was trained on historical delay patterns relative to time-of-day, weather conditions, and traffic density.
- **API Integration**: Utilizes the Google Maps Direction API to calculate baseline travel times, which are then adjusted by the ML model for higher accuracy.
    `
  },
  {
    id: 'p6',
    title: 'AI Resume Analyzer',
    description: 'An intelligent tool that uses NLP to parse resumes and match them against job descriptions, providing actionable feedback to improve candidate success rates.',
    techStack: ['Python', 'NLP', 'Spacy', 'Data Parsing'],
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    category: 'Bootcamp',
    repoUrl: 'https://github.com/tech-titans-projects/resume_project',
    demoUrl: 'https://resumeproject-five.vercel.app/',
    fullDocumentation: `
# AI Resume Analyzer

## Project Overview
An intelligent tool that uses NLP to parse resumes and match them against job descriptions, providing actionable feedback to improve candidate success rates.

In the competitive job market, applicants often struggle to tailor their resumes effectively for Applicant Tracking Systems (ATS). This project is an intelligent NLP-powered tool designed to parse resumes and match them against specific job descriptions, providing actionable feedback to candidates.

## Key Features
- **Resume Parsing**: Automatically extracts key information such as Name, Contact Details, Skills, and Education from PDF and DOCX files.
- **Job Description Matching**: Compares the resume content against a provided job description to calculate a compatibility score.
- **Keyword Analysis**: Identifies missing keywords that are critical for the specific role.
- **Skill Gap Analysis**: Visualizes the overlap between candidate skills and job requirements.

## Technical Implementation
The core of the application utilizes **spaCy** for Natural Language Processing tasks.
1.  **Named Entity Recognition (NER)**: Custom pipelines were trained to identify entities specific to resumes (e.g., University Names, Degrees, Certifications).
2.  **Vectorization**: Both the resume and job description are converted into vector embeddings.
3.  **Similarity Scoring**: Cosine similarity is computed between the vectors to determine the 'match percentage', helping users understand how well they fit a role.
    `
  },
  {
    id: 'p7',
    title: 'Bias Audit',
    description: 'A comprehensive auditing tool designed to detect and mitigate bias in machine learning datasets and models, ensuring fair and ethical AI deployment.',
    techStack: ['Python', 'Fairlearn', 'Pandas', 'Ethical AI'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    repoUrl: 'https://github.com/tech-titans-projects/bias_audit',
    demoUrl: 'https://colab.research.google.com/drive/1-FjgNEWwGMeVjOTL9z-eLaLEfEQwZzYG?usp=sharing',
    fullDocumentation: `
# Bias Audit

## Overview
A comprehensive auditing tool designed to detect and mitigate bias in machine learning datasets and models, ensuring fair and ethical AI deployment.

As machine learning models are increasingly deployed in sensitive areas like hiring and lending, ensuring fairness is paramount. This project implements a comprehensive auditing framework to detect, visualize, and mitigate algorithmic bias in tabular datasets and classification models.

## Methodology
The audit process follows a three-stage pipeline:
1.  **Detection**: Utilizing **Fairlearn** to calculate metrics such as *Demographic Parity Difference* and *Equalized Odds Difference* across protected groups (e.g., gender, race).
2.  **Visualization**: Generating heatmaps and discrepancy plots to make bias tangible for stakeholders.
3.  **Mitigation**: Applying post-processing techniques like Threshold Optimization to adjust predictions without retraining the underlying model, ensuring a fairer outcome distribution.

## Tools & Libraries
- **Fairlearn**: For bias metric calculation and mitigation algorithms.
- **Pandas**: For data manipulation and preprocessing of sensitive attributes.
- **Scikit-learn**: For training the baseline classifiers (Logistic Regression, Random Forest).
- **Matplotlib/Seaborn**: For visualizing disparity metrics and creating report-ready figures.
    `
  },
  {
    id: 'p8',
    title: 'Marketing Content Generator',
    description: 'Generative AI application that automates the creation of engaging marketing posts across various social media platforms using Large Language Models.',
    techStack: ['Python', 'OpenAI API', 'Streamlit', 'GenAI'],
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    category: 'Bootcamp',
    repoUrl: 'https://github.com/tech-titans-projects/marketing_post_generate',
    demoUrl: 'https://marketingpostgenerate.vercel.app/',
    fullDocumentation: `
# Marketing Content Generator

## Overview
Generative AI application that automates the creation of engaging marketing posts across various social media platforms using Large Language Models.

Content creation is often a bottleneck for social media teams. This application leverages Generative AI to automate the creation of engaging marketing posts tailored for different platforms (LinkedIn, Twitter/X, Instagram), significantly reducing the time-to-publish.

## Application Workflow
The application is built with a **Streamlit** frontend that connects to the **OpenAI API**.
1.  **User Input**: The user provides a topic, target audience, and desired tone (e.g., Professional, Witty, Urgent).
2.  **Prompt Engineering**: The backend constructs sophisticated prompts using few-shot prompting techniques to guide the LLM's generation process, ensuring adherence to platform specific constraints (e.g., character limits).
3.  **Platform Customization**:
    *   *LinkedIn*: Generates longer-form professional content with structured paragraphs and calls-to-action.
    *   *Twitter*: Generates concise threads with high-impact hooks and trending hashtags.
    *   *Instagram*: Generates visual descriptions and caption clusters.

## Architecture
- **Frontend**: Streamlit for rapid prototyping and interactive UI.
- **LLM Integration**: OpenAI GPT-3.5/4 models for text generation.
- **Parameterization**: Dynamic adjustment of parameters like \`temperature\` and \`max_tokens\` based on the selected platform to control creativity vs. conciseness.
    `
  },
  {
    id: 'p9',
    title: 'Areyeng',
    description: 'A dedicated web platform for the Tshwane Areyeng bus service, featuring route maps, schedules, and commuter resources.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps API'],
    thumbnail: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
    category: 'Capstone',
    repoUrl: 'https://github.com/tech-titans-projects/areyeng',
    demoUrl: 'https://areyeng.vercel.app/',
    videoUrl: 'https://capeitinitiative-my.sharepoint.com/:v:/g/personal/basetsana_zulu_capaciti_org_za/IQDfI5mfFBXzQ7TduM3oKweEAX5sN2AfHBocLbn5eTIYlvs?e=5UaIgY',
    fullDocumentation: `
# 🚌 Areyeng Bus Tracker

A modern web application that helps commuters in Tshwane track Areyeng bus routes in real time.
Built with scalability, clean design, and user-friendly authentication in mind.

## ✨ Features
- **Authentication**: Secure sign-in and registration system (email + password).
- **Bus Tracking**: Real-time updates on Areyeng bus locations and routes.
- **Modern UI**: Minimalist, pastel-inspired interface for a clean commuter experience.
- **Fast Deployment**: Hosted on Vercel for speed and reliability.
- **AI-powered predictions**: Smarter route and timing estimates (future enhancement).

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React / Next.js |
| Backend | Node.js / Express |
| Database | Firebase / SQL (planned integration) |
| Hosting | Vercel |
| Versioning | Git + GitHub |

## 📂 Project Structure
\`\`\`text
areyeng-bus-tracker/  
 ├── public/              # Static assets  
 ├── src/  
 │   ├── components/      # Reusable UI components  
 │   │    └── Navbar.js  
 │   ├── pages/           # Next.js pages  
 │   │    ├── index.js    # Landing page (login/register)  
 │   │    ├── login.js  
 │   │    ├── register.js   
 │   │    └── dashboard.js  
 │   ├── services/        # API + Firebase integration  
 │   │    └── auth.js
 │   └── styles/          # CSS modules  
 │        └── globals.css  
 ├── .gitignore  
 ├── package.json  
 ├── README.md  
 └── next.config.js  
\`\`\`
    `
  },
  {
    id: 'p10',
    title: 'Analytics Dashboard',
    description: 'An interactive data visualization platform designed to analyze and present complex datasets through dynamic charts and real-time filtering.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Recharts'],
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    repoUrl: 'https://github.com/tech-titans-projects/analyze_dashboard',
    demoUrl: 'https://analyzedashborad.vercel.app/',
    fullDocumentation: `
# Analytics Dashboard

## Project Overview
An interactive data visualization platform designed to analyze and present complex datasets through dynamic charts and real-time filtering.

This dashboard provides users with actionable insights by transforming raw data into intuitive visual representations. It focuses on performance, responsiveness, and user experience.

## Key Features
- **Dynamic Visualization**: Interactive charts (line, bar, pie) that update based on user interaction.
- **Data Filtering**: robust filtering options to drill down into specific data segments.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.
- **Dark/Light Mode**: User preference support for visual comfort.

## Technical Stack
- **Frontend**: Built with **Next.js** and **React** for server-side rendering and swift page transitions.
- **Styling**: **Tailwind CSS** for rapid, utility-first styling.
- **Charts**: Integrated **Recharts** (or Chart.js) for rendering complex data points smoothly.
- **Deployment**: Hosted on **Vercel** for continuous deployment and edge network benefits.
    `
  }
];

export const DOCUMENTS: CareerDoc[] = [
  {
    id: 'c2',
    title: 'Generative AI for Everyone',
    type: 'Certificate',
    date: 'Nov 27, 2025',
    content: 'Issued by DeepLearning.AI',
    url: 'https://coursera.org/verify/5WZT06GQXRLX'
  },
  {
    id: 'c4',
    title: 'Artificial Intelligence on Microsoft Azure',
    type: 'Certificate',
    date: 'Nov 27, 2025',
    content: 'Issued by Microsoft',
    url: 'https://coursera.org/verify/CMZL1FVTN5BH'
  },
  {
    id: 'c6',
    title: 'Introduction to Responsible AI',
    type: 'Certificate',
    date: 'Nov 24, 2025',
    content: 'Issued by Google Cloud',
    url: 'https://coursera.org/verify/D9L0HB0X5138'
  },
  {
    id: 'c9',
    title: 'Building AI Powered Chatbots Without Programming',
    type: 'Certificate',
    date: 'Nov 24, 2025',
    content: 'Issued by IBM',
    url: 'https://coursera.org/verify/SV0YEXJZOVXE'
  },
  {
    id: 'c14',
    title: 'Chatbot Building Essentials with IBM watsonx Assistant (V2)',
    type: 'Badge',
    date: 'Nov 24, 2025',
    content: 'Issued by IBM',
    url: 'https://www.credly.com/go/maIvM3R8'
  },
  {
    id: 'c10',
    title: 'Trustworthy AI: Managing Bias, Ethics, and Accountability',
    type: 'Certificate',
    date: 'Nov 20, 2025',
    content: 'Issued by Johns Hopkins University',
    url: 'https://coursera.org/verify/KULXWNJLFKXZ'
  },
  {
    id: 'c7',
    title: 'Python for Data Science, AI & Development',
    type: 'Certificate',
    date: 'Nov 13, 2025',
    content: 'Issued by IBM',
    url: 'https://coursera.org/verify/DD4BCSP70LP9'
  },
  {
    id: 'c15',
    title: 'Python for Data Science and AI',
    type: 'Badge',
    date: 'Nov 13, 2025',
    content: 'Issued by IBM',
    url: 'https://www.credly.com/badges/90a63bbd-de80-4d2c-8739-a557b8957f0d'
  },
  {
    id: 'c3',
    title: 'AI Foundations: Prompt Engineering with ChatGPT',
    type: 'Certificate',
    date: 'Oct 30, 2025',
    content: 'Issued by Arizona State University',
    url: 'https://coursera.org/verify/BP2H69MG6HQ7'
  },
  {
    id: 'c1',
    title: 'Generative AI with Large Language Models',
    type: 'Certificate',
    date: 'Oct 24, 2025',
    content: 'Issued by DeepLearning.AI & AWS',
    url: 'https://coursera.org/verify/P9D1423CD1WA'
  },
  {
    id: 'c11',
    title: 'AI Essentials',
    type: 'Certificate',
    date: 'Oct 16, 2025',
    content: 'Issued by Intel',
    url: 'https://coursera.org/verify/J9T6O2I1ENR8'
  },
  {
    id: 'c5',
    title: 'Introduction to Generative AI',
    type: 'Certificate',
    date: 'Oct 15, 2025',
    content: 'Issued by Google Cloud',
    url: 'https://coursera.org/verify/SYORWK5N8B85'
  },
  {
    id: 'c8',
    title: 'Introduction to Artificial Intelligence (AI)',
    type: 'Certificate',
    date: 'Oct 15, 2025',
    content: 'Issued by IBM',
    url: 'https://coursera.org/verify/NQ5K165QOLOY'
  },
  {
    id: 'c13',
    title: 'Artificial Intelligence Essentials V2',
    type: 'Badge',
    date: 'Oct 15, 2025',
    content: 'Issued by IBM Developer Skills Network',
    url: 'https://www.credly.com/badges/251e57d5-7e8c-4bae-a8b8-e35eac8549a0'
  },
  {
    id: 'c12',
    title: 'AI For Everyone',
    type: 'Certificate',
    date: 'Oct 13, 2025',
    content: 'Issued by DeepLearning.AI',
    url: 'https://coursera.org/verify/0RNXMER3RDGH'
  }
];
