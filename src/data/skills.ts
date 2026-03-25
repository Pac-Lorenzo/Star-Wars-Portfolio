import type { IconType } from "react-icons";
import {
  SiAmazoncognito,
  SiAmazondynamodb,
  SiAmazons3,
  SiAmazonwebservices,
  SiArm,
  SiC,
  SiCss3,
  SiCplusplus,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiHtml5,
  SiIntel,
  SiJavascript,
  SiMongodb,
  SiNewrelic,
  SiNodedotjs,
  SiOpenjdk,
  SiOracle,
  SiPostman,
  SiPython,
  SiReact,
  SiSplunk,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  label: string;
  percentage: number;
  color: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { label: "C", percentage: 70, color: "#A8B9CC", icon: SiC },
      { label: "C++", percentage: 70, color: "#00599C", icon: SiCplusplus },
      { label: "Java", percentage: 65, color: "#f89820", icon: SiOpenjdk },
      { label: "Python", percentage: 80, color: "#3776ab", icon: SiPython },
      { label: "TypeScript", percentage: 70, color: "#3178c6", icon: SiTypescript },
      { label: "JavaScript", percentage: 80, color: "#f7df1e", icon: SiJavascript },
      { label: "ARM Assembly", percentage: 85, color: "#0091bd", icon: SiArm },
      { label: "VHDL", percentage: 75, color: "#0071c5", icon: SiIntel },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { label: "React", percentage: 90, color: "#61dafb", icon: SiReact },
      { label: "React Native", percentage: 85, color: "#61dafb", icon: SiReact },
      { label: "HTML5", percentage: 95, color: "#e34f26", icon: SiHtml5 },
      { label: "CSS3", percentage: 90, color: "#264de4", icon: SiCss3 },
      { label: "Tailwind CSS", percentage: 85, color: "#38bdf8", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { label: "Node.js", percentage: 80, color: "#339933", icon: SiNodedotjs },
      { label: "Express", percentage: 60, color: "#9ca3af", icon: SiExpress },
      { label: "Spring Boot", percentage: 60, color: "#6db33f", icon: SiSpringboot },
      { label: "AWS", percentage: 70, color: "#ff9900", icon: SiAmazonwebservices },
      { label: "Cognito", percentage: 75, color: "#ff9900", icon: SiAmazoncognito },
      { label: "DynamoDB", percentage: 75, color: "#4053d6", icon: SiAmazondynamodb },
      { label: "S3", percentage: 75, color: "#569a31", icon: SiAmazons3 },
      { label: "Firebase", percentage: 75, color: "#ffca28", icon: SiFirebase },
      { label: "Supabase", percentage: 65, color: "#3ecf8e", icon: SiSupabase },
      { label: "MongoDB", percentage: 90, color: "#4db33d", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { label: "Docker", percentage: 50, color: "#0db7ed", icon: SiDocker },
      { label: "Git", percentage: 90, color: "#f1502f", icon: SiGit },
      { label: "GitHub", percentage: 85, color: "#c9d1d9", icon: SiGithub },
      { label: "GitHub Actions", percentage: 35, color: "#2088ff", icon: SiGithubactions },
      { label: "GitLab", percentage: 85, color: "#fc6d26", icon: SiGitlab },
      { label: "Postman", percentage: 90, color: "#ff6c37", icon: SiPostman },
      { label: "Expo Go", percentage: 85, color: "#d1d5db", icon: SiExpo },
    ],
  },
  {
    title: "Observability",
    skills: [
      { label: "Splunk", percentage: 65, color: "#65a637", icon: SiSplunk },
      { label: "New Relic", percentage: 65, color: "#008c99", icon: SiNewrelic },
    ],
  },
  {
    title: "Databases & Certifications",
    skills: [
      { label: "Oracle SQL", percentage: 85, color: "#f80000", icon: SiOracle },
      { label: "AWS CLF-C02", percentage: 100, color: "#ff9900", icon: SiAmazonwebservices },
    ],
  },
];
