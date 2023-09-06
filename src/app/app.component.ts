import { Component } from '@angular/core';
import { Evidence } from './models/evidence.model';
import { Ghost } from './models/ghost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private defaultEvidences: Evidence[] = [
    {
      name: 'EMF Level 5',
      status: 'shown',
    },
    {
      name: 'D.O.T.S. Projector',
      status: 'shown',
    },
    {
      name: 'Ultra Violet',
      status: 'shown',
    },
    {
      name: 'Ghost Orb',
      status: 'shown',
    },
    {
      name: 'Ghost Writing',
      status: 'shown',
    },
    {
      name: 'Spirit Box',
      status: 'shown',
    },
    {
      name: 'Freezing Temperatures',
      status: 'shown',
    },
  ];
  private defaultGhosts: Ghost[] = [
    {
      name: 'Spirit',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ultra Violet'],
      status: 'shown',
    },
    {
      name: 'Wraith',
      evidences: ['Freezing Temperatures', 'Spirit Box', 'Ultra Violet'],
      status: 'shown',
    },
    {
      name: 'Phantom',
      evidences: ['EMF Level 5', 'Ghost Orb', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Poltergeist',
      evidences: ['Spirit Box', 'Ultra Violet', 'Ghost Orb'],
      status: 'shown',
    },
    {
      name: 'Banshee',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Orb'],
      status: 'shown',
    },
    {
      name: 'Jinn',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ghost Orb'],
      status: 'shown',
    },
    {
      name: 'Mare',
      evidences: ['Spirit Box', 'Ghost Orb', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Revenant',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Shade',
      evidences: ['EMF Level 5', 'Ghost Orb', 'Ghost Writing'],
      status: 'shown',
    },
    {
      name: 'Demon',
      evidences: ['Spirit Box', 'Ghost Writing', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Yurei',
      evidences: ['Ghost Orb', 'Ghost Writing', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Oni',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ghost Writing'],
      status: 'shown',
    },
  ];

  public evidences = this.defaultEvidences;
  public ghosts = this.defaultGhosts;

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
      .filter((evidence) => evidence.status === 'faded')
      .map((evidence) => evidence.name);

    // spirit:    ['EMF Level 5', 'Spirit Box', 'Ultra Violet']
    // shade:     ['EMF Level 5', 'Ghost Orb', 'Ghost Writing']
    const posibleGhostNames = this.defaultGhosts
      .filter((ghost) =>
        selectedEvidenceNames.every((evidenceName) =>
          ghost.evidences.includes(evidenceName)
        )
      )
      .map((ghost) => ghost.name);

    this.ghosts = this.ghosts.map((ghost) => {
      if (posibleGhostNames.includes(ghost.name)) {
        console.log(ghost);
        ghost.status = 'shown';
        return ghost;
      }

      ghost.status = 'faded';
      return ghost;
    });
  }
}
