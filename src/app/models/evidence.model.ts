import { EvidenceName } from './evidence-name.model';

export interface Evidence {
  name: EvidenceName;
  status: 'faded' | 'shown' | 'selected';
}
