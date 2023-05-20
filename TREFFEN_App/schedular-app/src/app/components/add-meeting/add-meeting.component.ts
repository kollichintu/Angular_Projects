import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Treffen } from 'src/app/models/treffen.model';
import { TreffensService } from 'src/app/services/treffens.service';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms'
import * as _moment from 'moment';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AddMeetingComponent  implements  OnInit, AfterViewInit {

  meetingoptions:string[] = ['Jupiter', 'Mars', 'Mercury', 'Earth', 'Pluto', 'Venus'];
  selectedOption = '';
  meeting_Id = 0;

  value: Date = new Date(2019, 5, 1, 22);
   format = 'dd/MM/yyyy HH:mm';

   dateClass: MatCalendarCellClassFunction<Date> = (cellDate: { getDate: () => any; }, view: string) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

//    content =
//    `<div class="example-wrapper">
//    <p>Select date and time:</p>
//    <kendo-datetimepicker [format]="format" [(value)]="value">
//    </kendo-datetimepicker>
//  </div>
//    `;

  addMeetingRequest:Treffen = {
    Meeting_Id: 0,
    Meeting_Agenda: '',
    Meeting_Duration: 0,
    Meeting_Room: '',
    Created_Timestamp: new Date(),
  }

  constructor(private treffenService:TreffensService, private router:Router) {

   }

  ngOnInit(): void {
    this.selectedOption = this.meetingoptions[1];
  }


  ngAfterViewInit(): void {
    this.addMeetingRequest.Meeting_Id = Math.floor(1000 + Math.random() * 9000);
  }

  addMeeting(){
    this.treffenService.add_meeting(this.addMeetingRequest)
    .subscribe({
      next: ( treffen) => {
        this.router.navigate(['meetings'])
      }
    })

  }
  date = new FormControl(moment());
}
