import { ReactNode } from 'react';

export interface Technologies {
  name: string;
  icon: ReactNode;
  version?: string;
  color: string;
}
export interface Project {
  name: string;
  icon: ReactNode;
  repository: string;
  live: string;
  shortDescription: string;
  longDescription: string;
  technologies: Technologies[];
  languages: Technologies[];
  learned: string;
  mainLibraries: string[];
  images: string[];
}