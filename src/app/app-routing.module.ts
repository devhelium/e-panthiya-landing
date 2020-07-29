
import { LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import { NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";



const routes: Routes = [
  { 
    path: '',
    // comment out this 2 line to make any landing demo as your root .
    // redirectTo: "landing/demos",

    // pathMatch: "full",

    /** 
      uncomment this to make root url as one of landing page .
      and open landing-routing.module.ts to select which demo version 
      you want as your root

      like : 
      in landing-routing.module.ts**/
    // {
      // path: "v3",
      // component: LandingV3Component
    // },
    
    

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
