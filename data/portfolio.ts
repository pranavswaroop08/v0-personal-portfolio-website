import {
  Dumbbell,
  MessageSquare,
  TrendingUp,
  Briefcase,
  Award,
  GraduationCap,
  Shield,
  AlertTriangle,
  Brain,
  Lock,
  Search,
  Target,
  Code2,
  Cpu,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import data from "./portfolio.json";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  MessageSquare,
  TrendingUp,
  Briefcase,
  Award,
  GraduationCap,
  Shield,
  AlertTriangle,
  Brain,
  Lock,
  Search,
  Target,
  Code2,
  Cpu,
  Wrench,
};

type WithIcon = { icon?: string };

function withIcons<T extends WithIcon>(items: T[]): (Omit<T, "icon"> & { icon: LucideIcon })[] {
  return items.map((item) => ({
    ...item,
    icon: item.icon ? iconMap[item.icon] ?? Dumbbell : Dumbbell,
  }));
}

export const featuredProjects = data.featuredProjects;
export const additionalProjects = withIcons(data.additionalProjects);
export const researchAreas = withIcons(data.research.areas);
export const researchGoals = withIcons(data.research.goals);
export const researchTimeline = data.research.timeline;
export const researchTechnologies = data.research.technologies;
export const researchTitle = data.research.title;
export const researchDescription = data.research.description;
export const experiences = withIcons(data.experiences);
export const achievements = withIcons(data.achievements);
export const skillCategories = withIcons(data.skills);
