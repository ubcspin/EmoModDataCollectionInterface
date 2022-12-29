import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavBarComponent } from './header-bar/nav-bar/nav-bar.component';
import { SessionTimerComponent } from './header-bar/session-timer/session-timer.component';
import { OverviewComponent } from './overview/overview.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { LabellingComponent } from './labelling/labelling.component';
import { TracingComponent } from './tracing/tracing.component';
import { MainComponent } from './main/main.component';
import { RoutingModule } from './routing.module';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    NavBarComponent,
    SessionTimerComponent,
    OverviewComponent,
    DataCollectionComponent,
    CalibrationComponent,
    LabellingComponent,
    TracingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule, 
    NgbCollapseModule, NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
