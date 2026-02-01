import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/om-oss',
  AI_ANALYSIS = '/tjanster/ai-analys',
}