
import { LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import { NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
import { DashboardLayoutComponent } from "./shared/components/layouts/dashboard-layout/dashboard-layout.component";



const routes: Routes = [
  { 
    path: '',
    component: LandingLayoutComponent,
     children: [
       {
         path: '',
         loadChildren: './views/landing/landing.module#LandingModule'
      }
     ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () =>
          import('./views/sessions/sessions.module').then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () =>
          import('./views/landing/landing.module').then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
