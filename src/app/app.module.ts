import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [
    AppComponent,
    SyncfusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateTimePickerAllModule,
    DatePickerAllModule,
    DatePickerModule,
    ScheduleAllModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
