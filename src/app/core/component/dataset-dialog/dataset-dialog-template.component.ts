import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnboardingService } from 'src/app/_services/onboarding.service';
import { DatasetStatusService } from 'src/app/_services/dataset-status.service';
import { IDatasetStatus } from 'src/app/Class & Interfaces/dataset-status';

@Component({
  selector: 'app-dataset-dialog',
  templateUrl: './dataset-dialog-template.component.html',
  styleUrls: ['./dataset-dialog-template.component.scss']
})
export class DatasetDialogTemplateComponent implements OnInit {
  onBoardingTitle: string = 'BensonHill';
  buttonDisabled: boolean;
  datasets: IDatasetStatus[];
  datasetName: string;
  requiredName: IDatasetStatus;
  viewDatasets: boolean;
  // renameForm: FormGroup;

  // get feedbackform() {
  //   return this.renameForm.controls;
  // }


  constructor(private router: Router, private service: DatasetStatusService, private route: ActivatedRoute, private onboardingService: OnboardingService, ) { }
  ngOnInit() {
    if (this.viewDatasets = false) {
      this.service.getDatasets().subscribe(
        (response) => {
          this.datasets = response
        },
        error => { }
      )
    }
    else {
      this.viewDatasets = true;
      this.service.getDatasets().subscribe(
        (response) => {
          this.datasets = response
          this.route.params.subscribe(params => {
            this.datasetName = params['name'];
            if (this.datasetName != null) {
              for (let dataset of this.datasets) {
                if (dataset.name == this.datasetName) {
                  this.requiredName = dataset;
                }
              }
            }
          })
        }
      )
    }
  }

  backToDashboard() {
    this.router.navigate([''])
  }

  onChange(event) {
    this.buttonDisabled = true;
  }

  create() {
    this.router.navigate(['/new-dataset'])
  }

  // rename() {
  //   this.onboardingService.renameDataset(this.renameForm.)
  // }
}
