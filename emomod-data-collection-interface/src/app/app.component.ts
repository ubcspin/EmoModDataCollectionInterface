import { Component } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = myGlobals.APP_NAME;
}
