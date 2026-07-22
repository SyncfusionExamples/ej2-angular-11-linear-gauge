import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LinearGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    BrowserModule, LinearGaugeModule
  ],
  template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`,
  providers: [GaugeTooltipService],
})
export class AppComponent implements OnInit {
  title = 'angular11Linear-gauge';
  public Title: string;
ngOnInit(): void {
    // Title for linear gauge
    this.Title = 'linear gauge';
}
}
