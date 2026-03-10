import { z } from 'zod';

export const basicSchema = z.object({
  name: z.string(),
  label: z.string(),
  image: z.string().url(),
  email: z.string().email(),
  phone: z.string(),
  url: z.string().url().optional(),
  summary: z.string(),
  location: z.object({
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string(),
    countryCode: z.string(),
    region: z.string()
  }),
  profiles: z.array(z.object({
    network: z.string(),
    username: z.string(),
    url: z.string()
  }))
});

export const workSchema = z.object({
  name: z.string(),
  position: z.string(),
  url: z.string().url().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  summary: z.string().optional()
});

export const educationSchema = z.object({
  institution: z.string(),
  url: z.string().url().optional(),
  area: z.string(),
  studyType: z.string(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  score: z.string().optional()
});

export const certificateSchema = z.object({
  name: z.string(),
  date: z.string(),
  issuer: z.string(),
  url: z.string().url().optional()
});

export const skillSchema = z.object({
  name: z.string(),
  level: z.string().optional(),
  keywords: z.array(z.string()).optional()
});

export const languageSchema = z.object({
  language: z.string(),
  fluency: z.string()
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  links: z.array(z.object({
    label: z.string(),
    url: z.string().url()
  })).optional(),
  url: z.string().url().optional(),
  image: z.string().optional(),
  status: z.string().optional(),
  technologies: z.array(z.string()).optional()
});

export const cvSchema = z.object({
  basics: basicSchema,
  work: z.array(workSchema).optional(),
  education: z.array(educationSchema).optional(),
  certificates: z.array(certificateSchema).optional(),
  skills: z.array(skillSchema).optional(),
  languages: z.array(languageSchema).optional(),
  projects: z.array(projectSchema).optional()
});

export type CV = z.infer<typeof cvSchema>;
