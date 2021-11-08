import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  betFrequencyLabel: any;
  betFreqData: any = [
    { id: 1, name: '0.25', value: 2.5 },
    { id: 2, name: '0.5', value: 5 },
    { id: 3, name: 'Normal', value: 1 },
    { id: 4, name: '1.25', value: 12.5 },
    { id: 5, name: '1.5', value: 15 }
  ];

  public ngOnInit() {
    this.clickBetFreqBox(this.betFreqData[2]);
  }

  public clickBetFreqBox(data: any) {
    this.betFrequencyLabel = data.name;
  }
}
