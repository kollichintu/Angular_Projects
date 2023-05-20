import { Component } from '@angular/core';
import { Treffen } from 'src/app/models/treffen.model';
import { TreffensService } from 'src/app/services/treffens.service';

@Component({
  selector: 'app-scheduled-meetings',
  templateUrl: './scheduled-meetings.component.html',
  styleUrls: ['./scheduled-meetings.component.css']
})
export class ScheduledMeetingsComponent {

  treffens: Treffen[] = [];

  currentDate = new Date();

  constructor(private treffenService: TreffensService) { }

  ngOnInit(): void {
    this.treffenService.get_AllMeetings()
    .subscribe({
     next: ( treffens) => {
       this.treffens = treffens;
     },
     error: ( response ) => {
       console.log(response);
     }
    })
   }

   isAfterToday(date: Date) {
    return new Date(date).valueOf() >= this.currentDate.valueOf();
  }
}
