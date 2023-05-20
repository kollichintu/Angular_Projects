import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgChartsModule} from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { TreffenComponent } from './components/treffen/treffen.component';
import { ScheduledMeetingsComponent } from './components/scheduled-meetings/scheduled-meetings.component';
import { TreffenStatusComponent } from './components/treffen-status/treffen-status.component';
import { MeetingStatsComponent } from './components/meeting-stats/meeting-stats.component';
import { EditMeetingsComponent } from './components/edit-meetings/edit-meetings.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { IntlModule } from '@progress/kendo-angular-intl';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent,
    DashboardComponent,
    AddMeetingComponent,
    TreffenComponent,
    ScheduledMeetingsComponent,
    TreffenStatusComponent,
    MeetingStatsComponent,
    EditMeetingsComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    LabelModule,
    ButtonsModule,
    ReactiveFormsModule,
    IntlModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
