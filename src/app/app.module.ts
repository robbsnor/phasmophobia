import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { GhostDescriptionComponent } from './components/ghost-description/ghost-description.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemComponent,
    GhostDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
