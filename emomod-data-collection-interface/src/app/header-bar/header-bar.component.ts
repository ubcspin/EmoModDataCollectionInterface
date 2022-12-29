import { Component, Inject, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';
import { Router } from '@angular/router';
import {Location, LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  public isCollapsed = true;

  public appName = myGlobals.APP_NAME;

  public tabs = myGlobals.TABS;

  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy
    ) {}

  ngOnInit(): void {
    
  }

  activeTab() {
    return this.router.url.substring(this.locationStrategy.getBaseHref().length);
  }
}
