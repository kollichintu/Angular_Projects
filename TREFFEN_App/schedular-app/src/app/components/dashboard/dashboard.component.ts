import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Treffen } from 'src/app/models/treffen.model';
import { TreffensService } from 'src/app/services/treffens.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

currentDate = new Date();

 treffens: Treffen[] = [];

constructor(private treffenService: TreffensService, private router:Router) { }

addMeeting( ){
  this.router.navigateByUrl('/meetings/addMeeting');
}

ngOnInit(): void {
    this.treffenService.get_AllMeetings()
    .subscribe({
     next: ( treffens) => {
       this.treffens = treffens;
       console.log(treffens)
     },
     error: ( response ) => {
       console.log(response);
     }
    })
   }
}
