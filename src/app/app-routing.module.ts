import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {Composant1Component} from './composant1/composant1.component';
import {Composant2Component} from './composant2/composant2.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: Composant1Component,
      },
      {
        path: 'composant2/:id',
        component: Composant2Component,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
