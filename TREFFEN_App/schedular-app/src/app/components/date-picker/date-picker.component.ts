import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
 })

export class DatePickerComponent  implements OnInit {
   value: Date = new Date(2019, 5, 1, 22);
   format = 'dd/MM/yyyy HH:mm';

   content =
   `<div class="example-wrapper">
   <p>Select date and time:</p>
   <kendo-datetimepicker [format]="format" [(value)]="value">
   </kendo-datetimepicker>
 </div>
   `;
  ngOnInit(): void {}


}
