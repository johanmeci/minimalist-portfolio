import { cvSchema } from './cvSchema';
import rawData from '../../cv.json';

// Validate and export the data, this will throw an error at build time if the JSON is malformed
export const cvData = cvSchema.parse(rawData);

export const {
  basics,
  work,
  education,
  certificates,
  skills,
  languages,
  projects
} = cvData;
