import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jjb-app';


  @ViewChild('sidenav', { static: true })
  public sidenav!: MatSidenav;

  constructor(public media: MediaObserver) { }

  public displaySidenavMenu(): void {
    this.sidenav.open();
  }

  public goToSettings(): void {
    console.log('go to settings');
  }
}
