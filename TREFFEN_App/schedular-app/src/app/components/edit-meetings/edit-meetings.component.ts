import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treffen } from 'src/app/models/treffen.model';
import { TreffensService } from 'src/app/services/treffens.service';

@Component({
  selector: 'app-edit-meetings',
  templateUrl: './edit-meetings.component.html',
  styleUrls: ['./edit-meetings.component.css']
})
export class EditMeetingsComponent implements OnInit {

  meetingoptions:string[] = ['Jupiter', 'Mars', 'Mercury', 'Earth', 'Pluto', 'Venus'];

  meetingRequest:Treffen = {
    Meeting_Id: 0,
    Meeting_Agenda: '',
    Meeting_Duration: 0,
    Meeting_Room: '',
    Created_Timestamp: new Date(Date.now()),
  }

  constructor(private route: ActivatedRoute, private router: Router, private treffenService: TreffensService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          // call api based on id
          this.treffenService.get_meeting(id)
          .subscribe({
            next: (response) => {
              this.meetingRequest = response;
            }
          });

        }
      }
    })
  }

  updateMeeting(id: number){
    this.treffenService.update_meeting(this.meetingRequest.Meeting_Id, this.meetingRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['meetings']);
      }
    })
  }

  deleteMeeting(id: number) {
    this.treffenService.delete_meeting(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['scheduleMeetings']);

      }
    })
  }

}
