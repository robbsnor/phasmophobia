import { Component } from '@angular/core';
import { Evidence } from './models/evidence.model';
import { Ghost } from './models/ghost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private allEvidences: Evidence[] = [
    {
      name: 'EMF Level 5',
      status: 'unknown',
    },
    {
      name: 'D.O.T.S. Projector',
      status: 'unknown',
    },
    {
      name: 'Ultra Violet',
      status: 'unknown',
    },
    {
      name: 'Ghost Orb',
      status: 'unknown',
    },
    {
      name: 'Ghost Writing',
      status: 'unknown',
    },
    {
      name: 'Spirit Box',
      status: 'unknown',
    },
    {
      name: 'Freezing Temperatures',
      status: 'unknown',
    },
  ];
  private allGhosts: Ghost[] = [
    {
      name: 'Spirit',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ultra Violet'],
    },
    {
      name: 'Wraith',
      evidences: ['Freezing Temperatures', 'Spirit Box', 'Ultra Violet'],
    },
    {
      name: 'Phantom',
      evidences: ['EMF Level 5', 'Ghost Orb', 'Freezing Temperatures'],
    },
    {
      name: 'Poltergeist',
      evidences: ['Spirit Box', 'Ultra Violet', 'Ghost Orb'],
    },
    {
      name: 'Banshee',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Ghost Orb'],
    },
    {
      name: 'Jinn',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ghost Orb'],
    },
    {
      name: 'Mare',
      evidences: ['Spirit Box', 'Ghost Orb', 'Freezing Temperatures'],
    },
    {
      name: 'Revenant',
      evidences: ['EMF Level 5', 'Ultra Violet', 'Freezing Temperatures'],
    },
    {
      name: 'Shade',
      evidences: ['EMF Level 5', 'Ghost Orb', 'Ghost Writing'],
    },
    {
      name: 'Demon',
      evidences: ['Spirit Box', 'Ghost Writing', 'Freezing Temperatures'],
    },
    {
      name: 'Yurei',
      evidences: ['Ghost Orb', 'Ghost Writing', 'Freezing Temperatures'],
    },
    {
      name: 'Oni',
      evidences: ['EMF Level 5', 'Spirit Box', 'Ghost Writing'],
    },
  ];

  public posibleEvidences = this.allEvidences;
  public posibleGhosts = this.allGhosts;

  public changeEvidenceStatus(evidence: Evidence) {
    const evidenceToChange = this.posibleEvidences.find(
      (posibleEvidence) => evidence.name === posibleEvidence.name
    );

    if (!evidenceToChange) return;

    if (evidenceToChange.status === 'unknown') {
      evidenceToChange.status = 'it';
      return;
    }

    if (evidenceToChange.status === 'it') {
      evidenceToChange.status = 'not-it';
      return;
    }

    if (evidenceToChange.status === 'not-it') {
      evidenceToChange.status = 'unknown';
      return;
    }
  }
}
