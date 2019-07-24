import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  closeResult: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPopulateDataset() {
    this.router.navigate(['/populatedataset']);
  }

  openDatasetStatus() {
    this.router.navigate(['/datasetstatus']);
  }
}
