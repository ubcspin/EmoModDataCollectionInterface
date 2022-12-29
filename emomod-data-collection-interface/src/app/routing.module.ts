import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalibrationComponent } from './calibration/calibration.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { LabellingComponent } from './labelling/labelling.component';
import { TracingComponent } from './tracing/tracing.component';
import { OverviewComponent } from './overview/overview.component';
import * as myGlobals from '../globals';

const routes: Routes = [
  { path: myGlobals.TAB_LINKS[0], component: OverviewComponent },
  { path: myGlobals.TAB_LINKS[1], component: DataCollectionComponent },
  { path: myGlobals.TAB_LINKS[2], component: CalibrationComponent },
  { path: myGlobals.TAB_LINKS[3], component: LabellingComponent },
  { path: myGlobals.TAB_LINKS[4], component: TracingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
