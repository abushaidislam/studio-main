"use client";

import React from "react";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import StylizedImage from "@/components/StylizedImage";
import Button from "@/components/Button";
import clsx from "clsx";
import imageMeeting from "@/images/meeting.jpg";

const project = {
  id: "PRJ-004",
  title: "AI-Powered Enterprise Analytics Suite",
  subtitle: "Transforming Supply Chain Intelligence Through Machine Learning",
  client: "GlobalTrade Solutions",
  category: "Enterprise Software",
  status: "completed",
  duration: "16 months",
  year: "2024",
  team: [
    { role: "AI/ML Lead", name: "Dr. Sarah Chen", count: 1 },
    { role: "Data Engineer", name: "Michael Rodriguez", count: 2 },
    { role: "Product Manager", name: "Alex Thompson", count: 1 },
    { role: "UX Designer", name: "Jessica Williams", count: 2 },
    { role: "Backend Architect", name: "David Kumar", count: 1 },
    { role: "Data Scientist", name: "Emily Johnson", count: 3 },
    { role: "Frontend Developer", name: "James Park", count: 2 },
    { role: "DevOps Engineer", name: "Maria Garcia", count: 1 }
  ],
  description: "A comprehensive supply chain analytics platform processing 2.5TB of data daily to provide real-time insights for a Fortune 500 logistics company. The AI system predicts demand with 94% accuracy, optimizes routes, and identifies risks before they impact operations.",
  shortDescription: "AI-powered supply chain analytics processing 2.5TB daily data",
  
  executiveSummary: "GlobalTrade Solutions, a Fortune 500 logistics company managing $12B in annual shipments, faced critical challenges in supply chain visibility and predictive analytics. Our team delivered an enterprise-grade AI platform that unified 40+ disparate data sources, implemented state-of-the-art machine learning models, and created intuitive dashboards for 300+ stakeholders across 15 countries. The result: $45M in annual savings, 94% demand forecast accuracy, and a 340% first-year ROI.",
  
  challenge: "GlobalTrade was drowning in data but starving for insights. They had data scattered across 40+ systems, manual reporting processes that took weeks, and no way to predict disruptions. Supply chain inefficiencies were costing them $50M annually in excess inventory and expedited shipping.",
  
  challengeDetails: [
    {
      title: "Data Fragmentation Crisis",
      description: "Critical business data was siloed across 40+ legacy systems including 15 different ERP platforms, warehouse management systems, transportation management systems, and customer databases. No unified view existed.",
      impact: "Decision-makers lacked real-time visibility into operations, leading to reactive rather than proactive management.",
      metrics: ["40+ disconnected systems", "15 ERP platforms", "0% data integration"]
    },
    {
      title: "Manual Processing Bottleneck",
      description: "Reports required manual data extraction, Excel-based analysis, and email distribution. Critical insights arrived weeks after the relevant business events, rendering them nearly useless for decision-making.",
      impact: "Missed opportunities, inability to respond to market changes, and frustrated stakeholders.",
      metrics: ["3-4 weeks report lag", "200+ hours/month manual work", "68% outdated insights"]
    },
    {
      title: "Zero Predictive Capability",
      description: "The company operated entirely on historical data with no forecasting models. Demand planning was based on intuition and seasonal patterns, leading to chronic inventory imbalances.",
      impact: "$50M annual losses from excess inventory, stockouts, and expedited shipping costs.",
      metrics: ["$50M annual losses", "0% forecast accuracy", "42% inventory mismatch"]
    },
    {
      title: "Risk Blindness",
      description: "Supply chain disruptions—from supplier delays to transportation issues—were only discovered after they impacted customers. No early warning system existed.",
      impact: "Customer satisfaction scores dropped 23% year-over-year due to delivery failures.",
      metrics: ["23% satisfaction drop", "0 early warnings", "156 major disruptions/year"]
    }
  ],
  
  solution: "We built a centralized data platform that aggregates data from all sources, applies machine learning models for demand forecasting and route optimization, and presents actionable insights through intuitive dashboards. The system automatically alerts stakeholders to potential issues and recommends corrective actions.",
  
  solutionDetails: [
    {
      title: "Unified Data Platform",
      description: "We architected a cloud-native data lake on AWS that ingests, cleanses, and normalizes data from all 40+ source systems in real-time. Using Apache Spark for distributed processing, the platform handles 2.5TB of data daily with sub-second query performance.",
      technologies: ["AWS S3", "Apache Spark", "Snowflake", "Kafka", "Airflow"],
      outcomes: ["Real-time data sync", "99.97% uptime", "Sub-second queries"]
    },
    {
      title: "Advanced ML Models",
      description: "Developed custom machine learning models using TensorFlow and scikit-learn for demand forecasting, route optimization, and anomaly detection. Models are continuously retrained on fresh data to maintain accuracy.",
      technologies: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "MLflow"],
      outcomes: ["94% forecast accuracy", "30% faster routes", "92% anomaly detection"]
    },
    {
      title: "Intelligent Dashboards",
      description: "Created role-based dashboards using React and D3.js that provide executives, managers, and analysts with the exact insights they need. Interactive visualizations allow users to drill down from high-level KPIs to individual transactions.",
      technologies: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS"],
      outcomes: ["300+ active users", "8 role-based views", "4.8/5 user satisfaction"]
    },
    {
      title: "Proactive Alert System",
      description: "Implemented an AI-powered alert engine that monitors 200+ business rules and ML model outputs, sending notifications via email, SMS, and Slack when risks are detected. The system includes automated remediation suggestions.",
      technologies: ["Node.js", "Redis", "SendGrid", "Twilio", "Slack API"],
      outcomes: ["24/7 monitoring", "15-min alert latency", "78% auto-resolved"]
    }
  ],
  
  process: [
    { 
      phase: "Discovery & Data Audit", 
      duration: "8 weeks", 
      details: "Mapped 40+ data sources, assessed data quality, identified integration patterns, created data governance framework",
      activities: [
        "Conducted 50+ stakeholder interviews across 6 departments",
        "Performed comprehensive data quality assessment on all systems",
        "Created data lineage documentation for critical business metrics",
        "Established data governance policies and GDPR compliance framework",
        "Defined KPIs and success metrics with C-suite executives"
      ],
      deliverables: ["Data landscape map", "Quality assessment report", "Governance framework", "Technical requirements doc"]
    },
    { 
      phase: "Architecture & Planning", 
      duration: "6 weeks", 
      details: "Designed data pipeline architecture, selected ML models, defined API contracts, established security protocols",
      activities: [
        "Architected cloud infrastructure on AWS with multi-region redundancy",
        "Selected and validated ML algorithms through proof-of-concept testing",
        "Designed RESTful and GraphQL API specifications",
        "Implemented zero-trust security model with encryption at rest and in transit",
        "Created detailed technical specifications and project roadmap"
      ],
      deliverables: ["Architecture diagrams", "API specifications", "Security protocols", "ML model selection report"]
    },
    { 
      phase: "Core Development", 
      duration: "48 weeks", 
      details: "Built data pipelines, implemented ML models, created analytics dashboards, developed alert system, integrated with 15 ERPs",
      activities: [
        "Developed ETL pipelines using Apache Spark for 40+ data sources",
        "Implemented and trained ML models with 2 years of historical data",
        "Built responsive React dashboards with real-time data updates",
        "Created automated testing suite with 92% code coverage",
        "Integrated with 15 ERP systems using custom connectors and APIs",
        "Deployed Kubernetes clusters for containerized microservices",
        "Implemented CI/CD pipelines for automated deployment"
      ],
      deliverables: ["Production platform", "ML models", "Dashboard suite", "API integrations", "Test automation"]
    },
    { 
      phase: "Training & Deployment", 
      duration: "8 weeks", 
      details: "Trained 300+ employees, created documentation, established support processes, configured custom alerts",
      activities: [
        "Conducted 24 training sessions for different user groups",
        "Created comprehensive documentation and video tutorials",
        "Established 24/7 support team with SLA commitments",
        "Configured role-based access controls for all users",
        "Set up custom alert rules for each department"
      ],
      deliverables: ["Training materials", "User documentation", "Support playbooks", "Access controls"]
    },
    { 
      phase: "Optimization & Scaling", 
      duration: "12 weeks", 
      details: "Continuous monitoring, model refinement, performance optimization, and feature enhancements based on user feedback",
      activities: [
        "Optimized ML models based on production performance data",
        "Enhanced dashboard features based on 200+ user feedback items",
        "Scaled infrastructure to handle 3x data volume growth",
        "Implemented advanced features: predictive alerts, what-if scenarios",
        "Achieved 99.97% uptime SLA"
      ],
      deliverables: ["Optimized models", "Enhanced features", "Performance reports", "Scaling documentation"]
    }
  ],
  
  results: [
    { 
      title: "$45M Annual Cost Savings", 
      description: "Achieved through optimized inventory levels, reduced expedited shipping, and better supplier negotiations enabled by data insights.",
      breakdown: ["$18M inventory optimization", "$15M shipping cost reduction", "$12M supplier negotiation gains"]
    },
    { 
      title: "94% Demand Forecasting Accuracy", 
      description: "ML models predict demand with unprecedented accuracy, up from 66% with previous methods, enabling proactive inventory management.",
      breakdown: ["66% → 94% accuracy improvement", "28 percentage point gain", "Validated across 500+ SKUs"]
    },
    { 
      title: "30% Reduction in Delivery Times", 
      description: "AI-optimized routing and predictive logistics reduced average delivery time from 7.2 to 5.0 days.",
      breakdown: ["7.2 → 5.0 days average delivery", "2.2 days improvement", "99.2% on-time delivery rate"]
    },
    { 
      title: "25% Decrease in Inventory Costs", 
      description: "Better demand forecasting enabled just-in-time inventory practices, reducing warehousing costs and capital tied up in stock.",
      breakdown: ["$72M → $54M inventory value", "$18M capital freed up", "40% reduction in stockouts"]
    },
    { 
      title: "2.5TB Data Processed Daily", 
      description: "Platform efficiently processes massive data volumes in real-time, providing up-to-the-minute insights for decision-makers.",
      breakdown: ["2.5TB daily ingestion", "40+ source systems", "Sub-second query response"]
    },
    { 
      title: "ROI of 340% in First Year", 
      description: "Project investment of $13.2M delivered $44.9M in net benefits during year one, with ongoing annual benefits projected at $45M+.",
      breakdown: ["$13.2M total investment", "$44.9M year-1 benefits", "3.4:1 return ratio"]
    }
  ],
  
  keyMetrics: [
    { label: "Forecast Accuracy", value: "94%", change: "+28%", trend: "up", icon: "chart" },
    { label: "Cost Savings", value: "$45M", change: "Year 1", trend: "positive", icon: "dollar" },
    { label: "Delivery Time", value: "-30%", change: "Faster", trend: "down", icon: "clock" },
    { label: "Data Volume", value: "2.5TB", change: "Daily", trend: "neutral", icon: "database" },
    { label: "User Adoption", value: "98%", change: "+92%", trend: "up", icon: "users" },
    { label: "System Uptime", value: "99.97%", change: "SLA Met", trend: "positive", icon: "shield" },
    { label: "ROI", value: "340%", change: "Year 1", trend: "positive", icon: "trending" },
    { label: "Customer NPS", value: "+35", change: "+58 pts", trend: "up", icon: "smile" }
  ],
  
  testimonial: {
    quote: "The ROI has been incredible. We are making decisions in minutes that used to take weeks. The AI predictions have transformed how we manage inventory and logistics. This is not just software—it is a competitive advantage.",
    author: "James Park",
    role: "Chief Supply Chain Officer",
    company: "GlobalTrade Solutions",
    additionalQuotes: [
      {
        quote: "The platform has revolutionized our operations. We can now see problems before they happen and take proactive action. It's like having a crystal ball for supply chain management.",
        author: "Rebecca Martinez",
        role: "VP of Operations"
      },
      {
        quote: "Data that used to take us 3 weeks to compile is now available instantly. The dashboards are intuitive, and the insights are actionable. Our team's productivity has tripled.",
        author: "David Chen",
        role: "Director of Analytics"
      }
    ]
  },
  
  technologies: [
    { name: "Python", category: "Backend" },
    { name: "TensorFlow", category: "ML/AI" },
    { name: "PyTorch", category: "ML/AI" },
    { name: "Apache Spark", category: "Data Processing" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "AWS", category: "Cloud" },
    { name: "Kubernetes", category: "Infrastructure" },
    { name: "Docker", category: "Infrastructure" },
    { name: "Kafka", category: "Streaming" },
    { name: "Redis", category: "Caching" },
    { name: "PostgreSQL", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "D3.js", category: "Visualization" }
  ],
  
  technicalHighlights: [
    {
      title: "Scalable Microservices Architecture",
      description: "Designed with 15 independent microservices running on Kubernetes, enabling independent scaling and zero-downtime deployments.",
      details: ["15 containerized services", "Auto-scaling policies", "Blue-green deployments", "Service mesh with Istio"]
    },
    {
      title: "Real-Time Data Streaming",
      description: "Apache Kafka processes 50,000 events per second, providing real-time data updates to dashboards and ML models.",
      details: ["50K events/second", "3-node Kafka cluster", "<100ms latency", "Guaranteed message delivery"]
    },
    {
      title: "Advanced ML Pipeline",
      description: "MLOps pipeline automates model training, validation, and deployment with A/B testing and gradual rollouts.",
      details: ["Automated retraining", "A/B testing framework", "Model versioning", "Performance monitoring"]
    },
    {
      title: "Enterprise Security",
      description: "Implemented zero-trust security with role-based access control, encryption, and comprehensive audit logging.",
      details: ["256-bit AES encryption", "OAuth 2.0 + SAML", "SOC 2 compliant", "Complete audit trails"]
    }
  ],
  
  tags: ["AI/ML", "Analytics", "Enterprise", "Big Data", "Supply Chain"],
  image: imageMeeting,
  awards: [
    { name: "Best Enterprise AI Solution 2024", organization: "TechCrunch Disrupt" },
    { name: "Innovation Excellence Award", organization: "Supply Chain Digital" },
    { name: "Data Analytics Leader", organization: "Gartner" }
  ],
  
  relatedCaseStudies: [
    { id: "streamflix-platform", title: "StreamFlix Platform", category: "Streaming" },
    { id: "medicare-patient-platform", title: "Medicare Patient Platform", category: "Healthcare" }
  ]
};

export const metadata = {
  title: `${project.title} | Case Study`,
  description: project.shortDescription,
};

// Component Definitions
const StatusBadge = ({ status }) => {
  const styles = {
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
    planning: "bg-amber-100 text-amber-700 border-amber-200",
  };
  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planning: "Planning"
  };
  return (
    <span className={clsx("px-3 py-1.5 rounded-full text-xs font-semibold border", styles[status])}>
      {labels[status]}
    </span>
  );
};

const MetricCard = ({ label, value, change, trend, icon }) => {
  const icons = {
    chart: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    dollar: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    clock: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    database: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    users: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    trending: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    smile: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className="bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-colors duration-300">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-neutral-500">{label}</p>
        <div className="text-neutral-400">
          {icons[icon]}
        </div>
      </div>
      <p className="text-3xl font-display font-semibold text-neutral-950 mb-2">{value}</p>
      {change && (
        <p className={clsx(
          "text-sm font-medium",
          trend === "up" && "text-emerald-600",
          trend === "down" && "text-blue-600",
          trend === "positive" && "text-emerald-600",
          trend === "neutral" && "text-neutral-600"
        )}>
          {change}
        </p>
      )}
    </div>
  );
};

const ProcessPhase = ({ phase, duration, details, activities, deliverables, index }) => (
  <div className="relative pl-8 pb-12 border-l-2 border-neutral-200 last:border-l-0 last:pb-0">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-neutral-950 flex items-center justify-center text-white text-xs font-bold">
      {index + 1}
    </div>
    <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-100 transition-colors duration-300">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Phase {index + 1}</span>
        <span className="text-xs px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full font-semibold">{duration}</span>
      </div>
      <h4 className="text-xl font-display font-semibold text-neutral-950 mb-3">{phase}</h4>
      <p className="text-neutral-600 mb-6 leading-relaxed">{details}</p>
      
      {activities && activities.length > 0 && (
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wide">Key Activities</h5>
          <ul className="space-y-2">
            {activities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {deliverables && deliverables.length > 0 && (
        <div className="pt-4 border-t border-neutral-200">
          <h5 className="text-sm font-semibold text-neutral-700 mb-2 uppercase tracking-wide">Deliverables</h5>
          <div className="flex flex-wrap gap-2">
            {deliverables.map((item, idx) => (
              <span key={idx} className="px-3 py-1 bg-white text-neutral-600 rounded-full text-xs font-medium border border-neutral-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const ChallengeCard = ({ title, description, impact, metrics, index }) => (
  <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-100 transition-colors duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
        <span className="text-neutral-700 font-bold">{index + 1}</span>
      </div>
      <div>
        <h3 className="text-xl font-display font-semibold text-neutral-950 mb-2">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-100">
      <p className="text-sm font-semibold text-neutral-700 mb-1">Business Impact</p>
      <p className="text-sm text-neutral-600 leading-relaxed">{impact}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {metrics.map((metric, idx) => (
        <span key={idx} className="px-3 py-1.5 bg-neutral-200 text-neutral-700 rounded-full text-xs font-medium">
          {metric}
        </span>
      ))}
    </div>
  </div>
);

const SolutionCard = ({ title, description, technologies, outcomes, index }) => (
  <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-100 transition-colors duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-display font-semibold text-neutral-950 mb-2">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-100">
      <p className="text-sm font-semibold text-neutral-700 mb-2">Technologies</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span key={idx} className="px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-sm font-semibold text-neutral-700">Key Outcomes</p>
      {outcomes.map((outcome, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
          <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{outcome}</span>
        </div>
      ))}
    </div>
  </div>
);

const ResultCard = ({ title, description, breakdown }) => (
  <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 hover:bg-neutral-100 transition-colors duration-300">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-display font-semibold text-neutral-950 mb-2">{title}</h4>
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">{description}</p>
        {breakdown && breakdown.length > 0 && (
          <div className="space-y-1.5">
            {breakdown.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const TechnicalHighlightCard = ({ title, description, details }) => (
  <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:bg-neutral-100 transition-colors duration-300">
    <h4 className="text-lg font-display font-semibold text-neutral-950 mb-3">{title}</h4>
    <p className="text-sm text-neutral-600 leading-relaxed mb-4">{description}</p>
    <div className="grid grid-cols-2 gap-2">
      {details.map((detail, idx) => (
        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 bg-white rounded-lg px-3 py-2 border border-neutral-100">
          <svg className="w-3 h-3 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{detail}</span>
        </div>
      ))}
    </div>
  </div>
);

const GlobalTradeAIAnalyticsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <PageIntro eyebrow="Case Study" title={project.title}>
        <p className="text-lg text-neutral-600">
          {project.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium">{project.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <StatusBadge status={project.status} />
          </div>
        </div>
      </PageIntro>

      {/* Hero Image */}
      <Container className="mt-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/9]">
            <StylizedImage
              src={project.image}
              sizes="100vw"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
          </div>
        </FadeIn>
      </Container>

      {/* Executive Summary */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Executive Summary
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {project.executiveSummary}
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Key Metrics Grid */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-neutral-950 mb-8 text-center">
            Impact at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.keyMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* The Challenge */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-neutral-950 mb-4">
              The Challenge
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Understanding the complexity of the problems we needed to solve
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.challengeDetails.map((challenge, index) => (
              <ChallengeCard key={challenge.title} {...challenge} index={index} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* The Solution */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-neutral-950 mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive platform built with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.solutionDetails.map((solution, index) => (
              <SolutionCard key={solution.title} {...solution} index={index} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Process Timeline */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-neutral-950 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {project.process.map((phase, index) => (
              <ProcessPhase key={phase.phase} {...phase} index={index} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Results */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-neutral-950 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Quantifiable impact across all key business metrics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result) => (
              <ResultCard key={result.title} {...result} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Technical Highlights */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-neutral-950 mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Engineering innovation that powers business transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.technicalHighlights.map((highlight) => (
              <TechnicalHighlightCard key={highlight.title} {...highlight} />
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Technologies */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold text-neutral-950 mb-8 text-center">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="bg-white rounded-xl p-4 text-center border border-neutral-100 hover:border-neutral-300 transition-colors duration-300">
                  <p className="font-semibold text-neutral-950 text-sm">{tech.name}</p>
                  <p className="text-xs text-neutral-500">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Testimonials */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <svg className="w-10 h-10 text-neutral-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-neutral-800">
              <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-xl font-semibold">
                {project.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-lg">{project.testimonial.author}</p>
                <p className="text-neutral-400">{project.testimonial.role}</p>
                <p className="text-sm text-neutral-500">{project.testimonial.company}</p>
              </div>
            </div>

            {/* Additional Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.testimonial.additionalQuotes.map((quote, idx) => (
                <div key={idx} className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
                  <p className="text-neutral-300 mb-4 leading-relaxed italic">
                    &ldquo;{quote.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white">{quote.author}</p>
                    <p className="text-sm text-neutral-400">{quote.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Project Info Grid */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Details */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <h3 className="font-display text-xl font-semibold text-neutral-950 mb-6">
                Project Details
              </h3>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Client</dt>
                  <dd className="font-semibold text-neutral-950">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Industry</dt>
                  <dd className="font-semibold text-neutral-950">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Status</dt>
                  <dd>
                    <StatusBadge status={project.status} />
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Duration</dt>
                  <dd className="font-semibold text-neutral-950">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Year</dt>
                  <dd className="font-semibold text-neutral-950">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Project ID</dt>
                  <dd className="font-mono text-sm font-medium text-neutral-600 bg-white px-3 py-1 rounded-md inline-block border border-neutral-200">{project.id}</dd>
                </div>
              </dl>
            </div>

            {/* Team */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <h3 className="font-display text-xl font-semibold text-neutral-950 mb-6">
                Project Team
              </h3>
              <div className="space-y-3">
                {project.team.map((member) => (
                  <div key={member.role} className="bg-white rounded-lg p-3 border border-neutral-100">
                    <p className="font-semibold text-neutral-950 text-sm">{member.role}</p>
                    {member.count > 1 && (
                      <p className="text-xs text-neutral-500 mt-1">{member.count} members</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-600">
                  <span className="font-semibold text-2xl text-neutral-950">{project.team.reduce((acc, m) => acc + m.count, 0)}</span> total team members
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <h3 className="font-display text-xl font-semibold text-neutral-950 mb-6">
                Recognition
              </h3>
              <div className="space-y-4">
                {project.awards.map((award) => (
                  <div key={award.name} className="bg-white rounded-lg p-4 border border-neutral-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-neutral-950 text-sm">{award.name}</p>
                        <p className="text-xs text-neutral-500">{award.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Navigation */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-4 py-12 border-t border-neutral-200">
            <Link
              href="/work/streamflix-platform"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-700 rounded-full font-medium hover:bg-neutral-200 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous Project</span>
            </Link>
            <Button href="/work" invert>
              View All Projects
            </Button>
            <Link
              href="/work/medicare-patient-platform"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors duration-300"
            >
              <span>Next Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default GlobalTradeAIAnalyticsPage;