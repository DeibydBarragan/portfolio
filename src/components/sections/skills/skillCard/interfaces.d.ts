import React from "react";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  version?: string;
}