import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`
})
export class AppComponent implements OnInit {
  title = 'angular11Linear-gauge';
  public Title: string;
ngOnInit(): void {
    // Title for linear gauge
    this.Title = 'linear gauge';
}
}
