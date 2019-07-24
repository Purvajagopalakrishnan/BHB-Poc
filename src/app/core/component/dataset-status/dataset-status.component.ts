import { Component, OnInit } from '@angular/core';
import { DatasetStatusService } from 'src/app/_services/dataset-status.service';
import { Router } from '@angular/router';
import { IDatasetStatus } from 'src/app/Class & Interfaces/dataset-status';

@Component({
  selector: 'app-dataset-status',
  templateUrl: './dataset-status.component.html',
  styleUrls: ['./dataset-status.component.css']
})
export class DatasetStatusComponent implements OnInit {

  inProgressTitle: string = 'Onboardings';
  showOnboardingProjects: boolean;
  showOnboaringEvents = false;
  datasetList: any;
  selectedRow = null;
  selectedTab = {
    'Name': "There was no data present for the given process",
    'Complete': false,
    'ErrorCount': 0
  };

  constructor(private service: DatasetStatusService, private router: Router) { }

  ngOnInit() {
    this.showOnboardingProjects = true;
    this.service.getDatasets().subscribe(
      datasets => {
        this.datasetList = datasets
        console.log(this.datasetList)
      },
      error => {}
    )
  }

  showEvents() {
    this.showOnboardingProjects = false;
    this.showOnboaringEvents = true;
  }

  backToOnboardings() {
    this.showOnboaringEvents = false;
    this.showOnboardingProjects = true;
  }

  onClickContinue(dataset:IDatasetStatus) {
    this.router.navigate([`populatedataset/${dataset.name}`]);
  }

}
