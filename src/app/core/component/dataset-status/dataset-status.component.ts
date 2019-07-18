import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-status',
  templateUrl: './dataset-status.component.html',
  styleUrls: ['./dataset-status.component.css']
})
export class DatasetStatusComponent implements OnInit {

  inProgressTitle: string = 'Onboardings';
  showOnboardingProjects: boolean;
  showOnboaringEvents = false;
  selectedRow = null;
  selectedTab = {
    'Name': "There was no data present for the given process",
    'Complete': false,
    'ErrorCount': 0
  };

  constructor() { }

  ngOnInit() {
    this.showOnboardingProjects = true;
  }

}
