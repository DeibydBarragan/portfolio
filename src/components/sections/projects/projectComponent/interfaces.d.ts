import { ReactNode } from 'react';

export interface Technologies {
  name: string;
  icon: ReactNode;
  version?: string;
}
export interface Project {
  name: string;
  repository?: string;
  live?: string;
  imagesLocation: string;
  imagesNumber: number;
}

export interface DetailedProject extends Project {
  icon: ReactNode;
  shortDescription: string;
  longDescription: string;
  technologies: Technologies[];
  languages: Technologies[];
  learned: string;
  mainLibraries?: string[];
}