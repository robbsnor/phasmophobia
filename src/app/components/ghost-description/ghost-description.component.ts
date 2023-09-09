import { Component, Input } from '@angular/core';
import { Ghost } from 'src/app/models/ghost.model';

@Component({
  selector: 'app-ghost-description',
  templateUrl: './ghost-description.component.html',
  styleUrls: ['./ghost-description.component.scss'],
})
export class GhostDescriptionComponent {
  @Input() ghost!: Ghost;
}
