import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasComponent } from './comp/das/das.component';
import { LoginComponent } from './comp/login/login.component';
import { RegistComponent } from './comp/regist/regist.component';
import { P1Component } from './comp/p1/p1.component';
import { P2Component } from './comp/p2/p2.component';
import { P3Component } from './comp/p3/p3.component';

const routes: Routes = [
  {
    path: '',
    component: DasComponent,
    children: [
      {
        path: '',
        redirectTo: 'p1',
        pathMatch: 'full',
      },
      {
        path: 'p1',
        component: P1Component,
      },
      {
        path: 'p1/:id',
        component: P1Component,
      },
      {
        path: 'p2',
        component: P2Component,
      },
      {
        path: 'p3',
        component: P3Component,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
