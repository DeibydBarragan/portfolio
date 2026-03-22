import { Route } from "./interfaces";
import { Language } from "@/context/LanguageContext";

export const getRoutes = (language: Language): Route[] => {
  if (language === 'en') {
    return [
      {
        path: 'about',
        name: 'About',
      },
      {
        path: 'skills',
        name: 'Skills',
      },
      {
        path: 'projects',
        name: 'Projects',
      },
      {
        path: 'experience',
        name: 'Experience',
      },
      {
        path: 'education',
        name: 'Education',
      }
    ]
  }

  return [
    {
      path: 'about',
      name: 'Sobre mi',
    },
    {
      path: 'skills',
      name: 'Habilidades',
    },
    {
      path: 'projects',
      name: 'Proyectos',
    },
    {
      path: 'experience',
      name: 'Experiencia',
    },
    {
      path: 'education',
      name: 'Educacion',
    }
  ]
}