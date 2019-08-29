import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from '../data';




@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.scss'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class SyncfusionComponent  {
 CKEDITOR: any;
  public selectedDate: Date = new Date(2019, 0, 10);
    public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData) };
  constructor() { }

}
