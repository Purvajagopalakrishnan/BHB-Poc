import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-dataset',
  templateUrl: './new-dataset.component.html',
  styleUrls: ['./new-dataset.component.css']
})
export class NewDatasetComponent implements OnInit {
createNewDatasetForm: FormGroup;
submitted = false;
onboardingTitle: string = "Create Dataset";

get newDatasetform() {
  return this.createNewDatasetForm.controls;
}
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createNewDatasetForm = this.formBuilder.group({
      name: ['',Validators.required],
      species_name: ['',Validators.required],
      reference_genome: ['',Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
