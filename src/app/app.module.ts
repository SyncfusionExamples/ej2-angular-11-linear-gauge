import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LinearGaugeModule
  ],
  providers: [GaugeTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
