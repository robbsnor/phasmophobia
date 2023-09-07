import { Component } from '@angular/core';
import { Evidence } from './models/evidence.model';
import { Ghost } from './models/ghost.model';
import { DEFAULT_GHOSTS } from './data/default-ghosts';
import { DEFAULT_EVIDENCES } from './data/default-evidences';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public evidences = DEFAULT_EVIDENCES;
  public ghosts = DEFAULT_GHOSTS;

  public changeEvidenceStatus(evidence: Evidence) {
    const evidenceToChange = this.evidences.find(
      (posibleEvidence) => evidence.name === posibleEvidence.name
    );
    if (evidenceToChange) {
      if (evidenceToChange.status === 'shown') {
        evidenceToChange.status = 'faded';
      } else if (evidenceToChange.status === 'faded') {
        evidenceToChange.status = 'shown';
      }
    }

    this.updatePosibleGhosts();
  }

  public updatePosibleGhosts() {
    const selectedEvidenceNames = this.evidences
      .filter((evidence) => evidence.status === 'shown')
      .map((evidence) => evidence.name);

    // spirit:    ['EMF Level 5', 'Spirit Box', 'Ultra Violet']
    // shade:     ['EMF Level 5', 'Ghost Orb', 'Ghost Writing']
    const posibleGhostNames = DEFAULT_GHOSTS.filter((ghost) =>
      selectedEvidenceNames.every((evidenceName) =>
        ghost.evidences.includes(evidenceName)
      )
    ).map((ghost) => ghost.name);

    this.ghosts = this.ghosts.map((ghost) => {
      if (posibleGhostNames.includes(ghost.name)) {
        ghost.status = 'shown';
        return ghost;
      }

      ghost.status = 'faded';
      return ghost;
    });
  }
}
