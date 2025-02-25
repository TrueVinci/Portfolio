import { Project, Experience, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Mobile Phone Prices Analysis",
    description: "Data analysis and machine learning project using Python, Pandas, and Scikit-learn to predict mobile phone prices with 83% accuracy",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    tags: ["Python", "Pandas", "Scikit-learn", "PowerBI", "Machine Learning"],
    link: "/projects/mobile-phone-prices"
  },
  {
    id: 2,
    title: "New York Housing Prices Analysis",
    description: "Statistical analysis and predictive modeling of housing prices using R and Tableau, achieving 85% accuracy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["R", "Tableau", "Statistics", "Linear Regression"],
    link: "/projects/housing-prices"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Genpact India Private Limited",
    position: "SAP Analyst",
    duration: "June 2022 - July 2023",
    description: [
      "Developed 5 file-to-file interfaces for automated Gmail notifications",
      "Designed 4 IDoc to SOAP interfaces for order confirmation messages",
      "Implemented User Defined Functions in Java for complex data transformations",
      "Deployed real-time alerts reducing error identification time by 66%"
    ]
  },
  {
    id: 2,
    company: "Nuclusmind Technologies",
    position: "SAP PI Consultant",
    duration: "June 2018 - April 2022",
    description: [
      "Diagnosed and resolved 10+ PI issues per month",
      "Resolved 50+ Service now tickets monthly within SLA",
      "Supported UAT through test case preparation",
      "Compiled weekly and monthly error reports for system optimization"
    ]
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Python", level: 90, category: "frontend" },
  { id: 2, name: "R Programming", level: 85, category: "frontend" },
  { id: 3, name: "Power BI", level: 88, category: "frontend" },
  { id: 4, name: "Tableau", level: 85, category: "frontend" },
  { id: 5, name: "SAP PI/PO", level: 90, category: "backend" },
  { id: 6, name: "SQL", level: 85, category: "backend" },
  { id: 7, name: "Statistical Analysis", level: 80, category: "backend" },
  { id: 8, name: "Machine Learning", level: 75, category: "backend" },
  { id: 9, name: "Excel", level: 90, category: "tools" },
  { id: 10, name: "Google Analytics", level: 80, category: "tools" },
  { id: 11, name: "Postman", level: 75, category: "tools" },
  { id: 12, name: "Git", level: 70, category: "tools" }
];

export const projectDetails = {
  'mobile-phone-prices': {
    title: "Mobile Phone Prices Analysis",
    description: "Data analysis and machine learning project using Python, Pandas, and Scikit-learn to predict mobile phone prices with 83% accuracy",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    overview: `A comprehensive analysis of mobile phone prices using machine learning techniques to predict price ranges based on phone specifications.`,
    methodology: [
      "Performed missing data handling and standardization of features",
      "Category encoding and feature scaling using Python Pandas and Scikit-learn",
      "Correlation analysis on 21 variables using heatmaps (Seaborn)",
      "Feature importance analysis using Random Forest Regressor",
      "Feature reduction through combination of 5 features",
      "Data partitioning using hold-out method",
      "Model comparison between Linear Regression and Decision Trees"
    ],
    results: [
      "Achieved 83% prediction accuracy using Decision Tree model",
      "Created interactive PowerBI dashboards for price prediction",
      "Identified key features influencing mobile phone prices",
      "Developed a reusable model for future price predictions"
    ],
    datasetUrl: "https://www.kaggle.com/datasets/mobile-phone-prices",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Seaborn",
      "PowerBI"
    ]
  },
  'housing-prices': {
    title: "New York Housing Prices Analysis",
    description: "Statistical analysis and predictive modeling of housing prices using R and Tableau",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    overview: `Analysis of housing prices in New York using statistical methods and machine learning to predict property values.`,
    methodology: [
      "Data preprocessing and exploratory analysis using Excel",
      "Statistical testing including chi-square, t-tests, ANOVA, and F-tests",
      "Feature engineering with log transformations and polynomial terms",
      "Interaction effects analysis for complex feature relationships",
      "Linear Regression model development with R"
    ],
    results: [
      "Achieved 85% R² score in price prediction",
      "Created 6+ visualizations in Tableau",
      "Identified key price influencing factors",
      "Developed actionable insights for stakeholders"
    ],
    datasetUrl: "https://www.kaggle.com/datasets/new-york-housing",
    technologies: [
      "R",
      "Excel",
      "Tableau",
      "Statistical Analysis",
      "Linear Regression"
    ]
  }
};