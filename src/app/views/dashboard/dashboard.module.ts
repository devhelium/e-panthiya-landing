import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WINDOW_PROVIDERS } from '../landing/helpers/window.helpers';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
      CommonModule,
      DashboardRoutingModule,
      NguCarouselModule,
      NgbModule,
  
      FormsModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SideNavComponent,
        FooterComponent,
    ],
    providers: [WINDOW_PROVIDERS]
  
    // exports: ScrollToDirective
  })
  export class DashboardModule {}
  