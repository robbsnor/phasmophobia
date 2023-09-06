import { EvidenceName } from './evidence-name.model';
import { GhostName } from './ghost-name.model';

export interface Ghost {
  name: GhostName;
  evidences: EvidenceName[];
  status: 'faded' | 'shown' | 'selected';
}
