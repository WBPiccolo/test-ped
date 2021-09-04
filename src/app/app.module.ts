import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCalendar as fasCalendar,
  faClock as faClock,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHome as faHome,
  faBell as faBell,
  faUser as faUser,
  faChevronRight as faChevronRight,
  faArrowRight as faArrowRight,
  faArrowLeft as faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ActivityContainerComponent } from './activity-container/activity-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingComponent,
    ActivityContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHome,
      fasCalendar,
      faBell,
      faUser,
      faClock,
      faChevronRight,
      faArrowRight,
      faArrowLeft
    );
  }
}
