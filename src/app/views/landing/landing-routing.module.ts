import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { LandingV4Component } from './landing-v4/landing-v4.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';

import { Routes, RouterModule } from '@angular/router';
import { LandingV5Component } from './landing-v5/landing-v5.component';
import { LandingV6Component } from './landing-v6/landing-v6.component';
import { LandingV7Component } from './landing-v7/landing-v7.component';
import { LandingV8Component } from './landing-v8/landing-v8.component';
import { LandingV9Component } from './landing-v9/landing-v9.component';
import { LandingV10Component } from './landing-v10/landing-v10.component';
import { DemosComponent } from './components/demos/demos.component';
import { LandingV11Component } from "./landing-v11/landing-v11.component";

const routes: Routes = [
  
  {
    path: "",
    component: LandingV10Component
  },
  {
    path: "v4",
    component: LandingV4Component
  },
  {
    path: "v5",
    component: LandingV5Component
  },
  {
    path: "v6",
    component: LandingV6Component
  }
  ,
  {
    path: "v7",
    component: LandingV7Component
  },

   {
    path: "v8",
    component: LandingV8Component
  },

  {
    path: "v9",
    component: LandingV9Component
  },

  {
    path: "v10",
    component: LandingV10Component
  },
  {
    path: "v11",
    component: LandingV11Component
  },
  {
    path: "blog-details",
    component: BlogDetailsPageComponent
  },
  {
    path: "demos",
    component: DemosComponent
  },
  {
    path: "all-courses",
    component : AllCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
