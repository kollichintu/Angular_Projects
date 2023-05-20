import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingStatsComponent } from './components/meeting-stats/meeting-stats.component';
import { ScheduledMeetingsComponent } from './components/scheduled-meetings/scheduled-meetings.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { TreffenStatusComponent } from './components/treffen-status/treffen-status.component';
import { TreffenComponent } from './components/treffen/treffen.component';
import { EditMeetingsComponent } from './components/edit-meetings/edit-meetings.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
   path: 'signup',
   component: SignupFormComponent
  },
  {
    path: 'meetings',
    component: DashboardComponent
   },
   {
    path: 'meetings/addMeeting',
    component: AddMeetingComponent
   },
   {
    path: 'home',
    component: TreffenComponent
   },
   {
    path: 'scheduleMeetings',
    component: ScheduledMeetingsComponent
   },
   {
    path: 'treffenStatus',
    component: TreffenStatusComponent
   },
   {
    path: 'meetingStats',
    component: MeetingStatsComponent
   },
   {
    path: 'editMeeting/edit/:id',
    component: EditMeetingsComponent
   },
   {
    path: 'date-picker',
    component: DatePickerComponent
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
