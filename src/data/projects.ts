export interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "AtlasLog",
    description:
      "Serverless full-stack workout tracking platform with AI-driven insights.",
    tech: ["React Native", "AWS Lambda", "DynamoDB", "Cognito", "Bedrock"],
    highlights: [
      "Designed DynamoDB schemas around access patterns",
      "Implemented stateless JWT authentication",
      "Integrated AI-generated workout insights",
    ],
  },
  {
    title: "Peak Summit Capital Platform",
    description:
      "Portfolio analytics dashboard with daily financial metric computation.",
    tech: ["React", "TypeScript", "Python", "Redis", "yfinance"],
    highlights: [
      "Built daily pipeline computing Sharpe ratio, beta, volatility",
      "Implemented Redis caching to reduce recomputation",
    ],
  },
  {
    title: "FPGA Secure Memory Architecture",
    description:
      "Multi-tenant secure on-chip memory design for DE10 board.",
    tech: ["Quartus", "VHDL", "Hardware Security"],
    highlights: [
      "Built centralized user table",
      "Prototyped drop-in Auth-Gateway IP",
    ],
  },
  {
    title: "Tennis Scorekeeping System",
    description:
      "IoT-enabled Raspberry Pi scoring system with mobile sync.",
    tech: ["Python", "Raspberry Pi", "React Native", "Firebase"],
    highlights: [
      "Built Bluetooth sync system",
      "Implemented GPIO-based hardware control",
    ],
  },
];
