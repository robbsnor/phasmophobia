import { EvidenceName } from './evidence-name.model';
import { GhostName } from './ghost-name.model';

export interface Ghost {
  name: GhostName;
  status: 'faded' | 'shown' | 'selected';
  evidences: EvidenceName[];
  forcedEvidence?: EvidenceName;
  bulitPoints: string[];
  resources: {
    title: string;
    url: string;
  }[];
}
