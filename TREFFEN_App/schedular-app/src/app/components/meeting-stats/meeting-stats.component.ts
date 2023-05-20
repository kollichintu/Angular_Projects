import { Component } from '@angular/core';
import { Treffen } from 'src/app/models/treffen.model';
import { TreffensService } from 'src/app/services/treffens.service';
import {Chart} from 'chart.js'


@Component({
  selector: 'app-meeting-stats',
  templateUrl: './meeting-stats.component.html',
  styleUrls: ['./meeting-stats.component.css']
})
export class MeetingStatsComponent {

  treffens: Treffen[] = [];
  chart: any;
  meeting_room : string[] = [];
  meeting_duration : number[] = [];
  pieChartPlugins = [];

  constructor(private treffenService: TreffensService){ }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: this.meeting_room,
	       datasets: [
          {
            label: "Meeting Duration(Mins)",
            data: this.meeting_duration,
            //[20,30,40,25,10,50],
            backgroundColor: ["#f9584b","#ff1dce","#649681","#4d65a4", "#113826"],
          }
        ]
      },
      options: {

        maintainAspectRatio: false,
        responsive: true,
        plugins :{

        },


      }

    });
  }

  ngOnInit(): void {

    this.treffenService.get_AllMeetings()
    .subscribe({
     next: ( treffens) => {
      //console.log(treffens)
     treffens.forEach(element => {
      this.meeting_duration.push(element.Meeting_Duration)
      this.meeting_room.push(element.Meeting_Room)
     }

     );
     this.createChart();

     },
     error: ( response ) => {
       console.log(response);
     }
    })
   }

}
