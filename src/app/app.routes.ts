import { Routes } from '@angular/router';
import { CmsDrivenComponent } from './cms-driven.component';

export const routes: Routes = [
  {
    path: '**',
    component: CmsDrivenComponent,
  },
];
