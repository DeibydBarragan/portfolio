import React from "react";

export interface Categorie {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}
export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  version?: string;
}