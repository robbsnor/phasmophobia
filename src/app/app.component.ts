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
      status: 'faded',
    },
    {
      name: 'D.O.T.S. Projector',
      status: 'faded',
    },
    {
      name: 'Ultra Violet',
      status: 'faded',
    },
    {
      name: 'Ghost Orb',
      status: 'faded',
    },
    {
      name: 'Ghost Writing',
      status: 'faded',
    },
    {
      name: 'Spirit Box',
      status: 'faded',
    },
    {
      name: 'Freezing Temperatures',
      status: 'faded',
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
    {
      name: 'Yokai',
      evidences: ['Spirit Box', 'Ghost Orb', 'D.O.T.S. Projector'],
      status: 'shown',
    },
    {
      name: 'Hantu',
      evidences: ['Ultra Violet', 'Ghost Orb', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Goryo',
      evidences: ['EMF Level 5', 'Ultra Violet', 'D.O.T.S. Projector'],
      status: 'shown',
    },
    {
      name: 'Myling',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Writing'],
      status: 'shown',
    },
    {
      name: 'Onryo',
      evidences: ['Spirit Box', 'Ghost Orb', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'The Twins',
      evidences: ['EMF Level 5', 'Spirit Box', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Raiju',
      evidences: ['EMF Level 5', 'Ghost Orb', 'D.O.T.S. Projector'],
      status: 'shown',
    },
    {
      name: 'Obake',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Orb'],
      status: 'shown',
    },
    {
      name: 'The Mimic',
      evidences: ['Spirit Box', 'Ultra Violet', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Moroi',
      evidences: ['Spirit Box', 'Ghost Writing', 'Freezing Temperatures'],
      status: 'shown',
    },
    {
      name: 'Deogen',
      evidences: ['Spirit Box', 'Ghost Writing', 'D.O.T.S. Projector'],
      status: 'shown',
    },
    {
      name: 'Thaye',
      evidences: ['Ghost Orb', 'Ghost Writing', 'D.O.T.S. Projector'],
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
      .filter((evidence) => evidence.status === 'shown')
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
