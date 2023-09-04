import { EvidenceName } from './evidence-name.model';

export interface Evidence {
  name: EvidenceName;
  status: 'unknown' | 'it' | 'not-it';
}
