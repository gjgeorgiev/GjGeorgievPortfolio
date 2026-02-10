export const projects = [
  {
    title: "Energy Management System",
    description:
      "Worked on building an MVP for the current iteration of an Energy Management platfrom. Was mostly tasked with doing the graphs in D3.js, building backend services with Python and API endpoints with Flask.",
    tech: ["Vue","Python", "D3.js"],
    closed: "#",
    type: "closed-source"
  },
  {
    title: "Personal Portfolio",
    description:
      "My portfolio website showcasing projects, architecture, and design decisions. The website is ever expanding and any future projects will be put in here as a separate card.",
    tech: ["Vue", "Vite", "TailwindCSS"],
    repo: "https://github.com/gjgeorgiev/GjGeorgievPortfolio",
    type: "open-source"
  },
  {
    title: "Google Docs Gym Tracker",
    description:
      "A scalable data ingestion and visualization pipeline built on AWS using serverless services. The app uses Google Docs API to ingest data from a Google Docs Table using a Lambda function then sends the data to S3 using an EventBridge scheduler to do it every day after I put in the data from my gym session.  It is visualised using D3.js graphs.",
    tech: ["Vue", "AWS", "Lambda", "EventBridge", "S3", "D3.js"],
    link: "#",
    repo: "#",
    type: "open-source"
  },
]
