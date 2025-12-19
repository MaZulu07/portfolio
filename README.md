
# AI/ML Engineer Portfolio

A professional, interactive portfolio website designed for AI/ML Engineers and Data Scientists. This project showcases technical skills, projects, and certifications.

## 🚀 Features

- **Interactive Project Showcase**: Detailed modal views for projects with descriptions, tech stacks, and links to demos/repositories.
- **PDF Resume Generation**: Client-side PDF generation using `jspdf` that dynamically creates a printable CV from the portfolio data.
- **Data Visualization**: Interactive radar charts using `recharts` to visualize technical competencies.
- **Responsive Design**: Mobile-first architecture using Tailwind CSS.
- **Categorized Content**: Sections for Experience, Skills, Capstone Projects, and Certifications.

## 🛠️ Technical Stack

- **Framework**: React 19 (via ES Modules)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (CDN + Configuration)
- **Icons**: Lucide React
- **Charts**: Recharts
- **PDF Generation**: jsPDF
- **Build Tool**: (Implicitly ESBuild/Vite via online sandbox or standard React setup)

## 📂 Project Structure

```
├── index.html              # Entry point with Import Maps and Tailwind config
├── index.tsx               # React root mounting
├── App.tsx                 # Main application layout and logic
├── types.ts                # TypeScript interfaces (Project, SkillItem, etc.)
├── constants.ts            # Centralized content (Bio, Projects, Experience data)
├── metadata.json           # Sandbox configuration
└── components/
    ├── CVModal.tsx         # Printable CV preview and generation modal
    ├── ProjectCard.tsx     # Reusable project display card
    └── SkillsChart.tsx     # Radar chart for skills
```

## ⚙️ Configuration

### 1. Customization
All personal information is separated from the UI logic. To customize this portfolio:

1.  Open `constants.ts`.
2.  Update the `PERSONAL_INFO` object (Name, Bio, Social Links).
3.  Modify arrays for `EXPERIENCE`, `EDUCATION`, `PROJECTS`, and `SKILLS`.
4.  The `App.tsx` and PDF generator will automatically reflect these changes.

## 🎨 Styling System

- **Tailwind CSS**: Used for all styling.
- **Theme**: Defined in `index.html`.
  - Primary Color: Purple (`#a855f7`)
  - Background: Light Purple/White mix
  - Font: 'Nunito' (Sans) and 'Fira Code' (Mono)

## 📄 License

This project is open source and available for personal use and modification.
