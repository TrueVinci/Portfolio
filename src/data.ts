import { Project, Experience, Skill, BlogPosts } from './types';

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

export const blogPosts: BlogPosts = {
  'introduction-to-data-science': {
    title: "Getting Started with Data Visualization: A Beginner's Guide",
    date: "March 1, 2024",
    readTime: 5,
    excerpt: "An introduction to the fundamental concepts of data visualization and how to begin your journey.",
    content: [
      {
        type: 'paragraph',
        content: "As I continue my journey into data science, I've discovered that creating effective visualizations is both an art and a science. In this post, I'll share what I've learned about turning raw data into meaningful visual stories that can help drive decisions and insights."
      },
      {
        type: 'heading',
        content: "Why Data Visualization Matters"
      },
      {
        type: 'paragraph',
        content: "Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, mathematics, programming, and domain expertise to analyze complex data problems."
      },
      {
        type: 'heading',
        content: "Essential Skills for Data Scientists"
      },
      {
        type: 'paragraph',
        content: "To become a successful data scientist, you need to develop skills in several key areas: Programming (Python, R), Statistics, Machine Learning, Data Visualization, and Domain Knowledge."
      },
      {
        type: 'code',
        content: `# Simple example of data analysis in Python
import pandas as pd
import matplotlib.pyplot as plt

# Load and analyze data
data = pd.read_csv('dataset.csv')
plt.plot(data['x'], data['y'])
plt.show()`
      }
    ]
  },
  'machine-learning-basics': {
    title: "Understanding Machine Learning Algorithms",
    date: "March 5, 2024",
    readTime: 7,
    excerpt: "A comprehensive overview of basic machine learning algorithms and their applications.",
    content: [
      {
        type: 'paragraph',
        content: "Machine Learning is a subset of artificial intelligence that focuses on building systems that learn from and adapt to data. Let's explore the fundamental concepts and algorithms."
      },
      {
        type: 'heading',
        content: "Types of Machine Learning"
      },
      {
        type: 'paragraph',
        content: "Machine Learning can be broadly categorized into three types: Supervised Learning, Unsupervised Learning, and Reinforcement Learning. Each type serves different purposes and has its own set of algorithms."
      },
      {
        type: 'code',
        content: `# Example of a simple classification model
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Split data and train model
X_train, X_test, y_train, y_test = train_test_split(X, y)
model = LogisticRegression()
model.fit(X_train, y_train)`
      }
    ]
  }
};