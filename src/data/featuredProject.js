export const featuredProject = {
  title: "Serverless Data Platform",
  subtitle: "Scalable ingestion, transformation, and visualization on AWS",

  overview:
    "A production-ready serverless platform designed to ingest, process, and visualize structured data at scale without managing infrastructure.",

  problem: [
    "Traditional servers introduced unnecessary maintenance overhead.",
    "Scaling ingestion pipelines was costly and slow.",
    "Data access latency impacted the frontend experience.",
  ],

  solution: [
    "Designed a fully serverless architecture using AWS managed services.",
    "Decoupled ingestion, processing, and delivery for independent scaling.",
    "Optimized read paths to keep frontend interactions fast.",
  ],

  architecture: [
    "Frontend hosted on S3 and distributed via CloudFront.",
    "API Gateway exposing Lambda-based ingestion endpoints.",
    "DynamoDB for low-latency structured storage.",
    "Event-driven processing with AWS Lambda.",
  ],

  results: [
    "Zero server maintenance.",
    "Automatic scaling with usage.",
    "Consistent sub-200ms API responses.",
  ],

  tech: [
    "Vue",
    "Vite",
    "Tailwind",
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "S3",
    "CloudFront",
  ],
}
