import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { getMatFormFieldPlaceholderConflictError, MatDialogRef } from '@angular/material';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

import { OnboardingService } from 'src/app/_services/onboarding.service';
// import { ModalDialogService } from 'src/app/_services/modal-dialog.service';
// import { OnboardingService } from 'src/app/_services/onboarding.service';

@Component({
  selector: 'app-dataset-dialog',
  templateUrl: './dataset-dialog-template.component.html',
  styleUrls: ['./dataset-dialog-template.component.scss']
})
export class DatasetDialogTemplateComponent implements OnInit {
  onBoardingTitle: string = 'BensonHill';
  buttonDisabled: boolean;



  constructor(private router: Router, private onboardingService: OnboardingService) {}
  ngOnInit() {}

  backToDashboard() {
    this.router.navigate([''])
  }
  onChange(event){
    this.buttonDisabled = true
  }

  // downloadTemplate() {
  //   this.onboardingService.getReport().subscribe(data =>
  //     this.downloadFile(data)),
  //   error => console.log('Error downloading the file'),
  //   () => console.log('ok')
  // }

  // downloadFile(data: Response) {
  //   const blob = new Blob(data[''], { type: 'text/csv' });
  //   const url= window.URL.createObjectURL(blob);
  //   window.open(url);
  // }

}
//   partner = null;
//   partnerName = '';
//   species = null;
//   datasets = null;
//   completedGermplasmUpload = false;
//   isUploading = false;
//   currentDataSet = null;
//   isFileImportAvailable = false;
//   IsFileImporting = false;
//   IsDataSetLoading = true;
//   isGWASButtonVisible = false;
//   customMarkerFileName = null;
//   onBoardingTitle = '';
//   project: any;
//   completedFileTypeUploads: any;
//   currentFileType: any;
//   currentFileTypeName: any;
//   importFileInProgress: any;
  
//   uploader = this.uploader = new FileUploader({
//     url: '/onboard/uploadfile'
// });
  

  
  
//   constructor(private onboardingService: OnboardingService, private modalDialogService: ModalDialogService, private toast:ToastrService, private dialogRef: MatDialogRef<DatasetDialogTemplateComponent>) { 
   
//   }

//   ngOnInit() {
//   }
//   fileImportAvailable() {
//     this.onboardingService.isFileImportAvailable().then((result) => {
//       console.log(result);
//       this.isFileImportAvailable = result.data;
//       return true;
//   }, function (error) {
//       console.log(error);
//       this.isFileImportAvailable = false;
//   });
//   this.isFileImportAvailable = false;
// };

// GWASButtonVisible(datasetId) {
//   this.onboardingService.isGWASTriggerEnabled(datasetId).then((result) => {
//     this.isGWASButtonVisible = result.data;
//   },
//   (error) => {
//     this.isGWASButtonVisible = false;
//   });
// };

// GWASbuttonClicked() {
//   this.onboardingService.GWASbuttonClicked(this.currentDataSet.Id,
//     this.currentDataSet.owningPartnerId,
//     this.currentDataSet.speciesId).then((result) => 
//     {
//         this.toast.info( result.data);
          
//     },
//     (error) => {
//         this.toast.error('Insufficient data to execute GWAS');
//     });
// };

// getDatasets() {
 
//     this.toast.warning('Please wait while Datasets are being loaded');

//     this.onboardingService.getDatasets().then (
//       (result) => {
//         this.IsDataSetLoading = false;
//         this.datasets = result.data;

//         if( !== 0) {
//           this.datasets.selected = this.datasets[1];
//           var position = this.datasets.map( (e) => {
//             return e.Id;
//           }).indexOf();
//           this.datasets.selected = this.datasets[position];
//           this.getDatasets();
//         }
//       },

//       (error) => {
//         this.IsDataSetLoading = false;
//         console.log('datasets error');
//       }
//       );
// };

// // this.getDatasets();

// getDataset() {
//   this.uploader.queue = [];
//   this.uploader.progree = 0;

//   if(this.datasets && this.datasets.selected) {
//     this.project = this.datasets.selected;
//     this.currentDataSet = this.datasets.selected;
//     if(this.datasets.selected.completedGermplasmUpload) {
//       this.completedGermplasmUpload = this.datasets.selected.completedGermplasmUpload;
//     } else {
//       this.completedGermplasmUpload = false;
//     }
//     this.onBoardingTitle = this.partnerName + "Dataset : " + this.datasets.selected.Name;
//     this.GWASButtonVisible(this.currentDataSet.Id);
//     } else {
//       this.project = null;
//       this.currentDataSet = null;
//       this.completedGermplasmUpload = false ; 
//       this.onBoardingTitle = this.partnerName;
//     }
   
//   };

//   // this.completedFileTypeUploads = [];
//   // this.watch('project', ()=> {
//   //   this.completedFileTypeUploads = [];
//   //   if(this.project) {
//   //     angular.forEach(this.project.completedUploads, (fileType, key) => {
//   //       this.completedFileTypeUploads.push(fileType.Id);
//   //     });
//   //     }
//   //   });

//     getPartner() {
//       this.onboardingService.getPartner().then (
//         (result) => {
//           this.partner = result.data;
//           this.partnerName = this.partner.Name;
//           this.onBoardingTitle = this.partnerName;
//         },
//         (error) => {
//           console.log('partner error' + error);
//         }
//       );
//     };
//     // this.getPartner();

//     openModalDialog(ev, template, modalData) {
//       this.modalDialogService.openModalDialog(ev, template, modalData);
//     };

//     removeItemFromGrid(item) {
//       for(var i = 0; i< this.uploader.queue.length; i++) {
//         if(this.uploader.queue[i].file === isNgTemplate.file) {
//           this.uploader.queue.splice(i,1);
//         }
//       }
//     };

//     cancelItemFromGrid(item) {
//        console.log(item);
//     };

//     disableUpload(fileTypeId) {
//       if(this.datasets === null) {
//         return true;
//       }

//       if(this.datasets.selected) {
//         if(fileTypeId === 1) {
//           return false;
//         } else {
//           if(this.completedGermplasmUpload) {
//             return false;
//           } else {
//             return true; 
//           }
//         }
//       } else {
//         return true;
//       }
      
//     };

    

//     openFileSelector(fileType, fileTypeName) {
//       this.currentFileType = 0;
//       this.isUploading = true;
//       this.currentFileType = fileType;
//       this.currentFileTypeName = fileTypeName;
//       if (fileType === 4) {
//         angular.element('#customMarkerSetName').trigger('click');
//         this.customMarkerFileName = '';
//         angular.element('#datasetDialog').css('opacity', '0.4');
//       }
//       else {
//         angular.element('#inputUpload').trigger('click');
//       }
//       this.isUploading = false;
//     };

//     openFileDialog() {
//       angular.element('#datasetDialog').css('opacity', '1');
//       angular.element('#inputUpload').trigger('click');
//       angular.element('#customMarkerSetName').trigger('click');
//     }

//     cancelModal() {
//       angular.element('#datasetDialog').css('opacity', '1');
//       angular.element('#customMarkerSetName').trigger('click');
//     }

//     importedFile(fileName, eventId, fileType, datasetId) {
//       var data = {
//         eventId: eventId,
//         fileType: fileType,
//         fileName: fileName,
//         datasetId: datasetId
//     };
    
//     this.onboardingService.processFile(data).then(
//       (processFileResult) => {
//         if(processFileResult.data.success == false) {
//           this.uploader.queue.forEach( (fileItem, key) => {

//             if (fileItem.file.name === processFileResult.data.FileName) {
//                 fileItem.processingComplete = true;
//                 fileItem.isSuccess = false;
//                 fileItem.isError = true;
//                 fileItem.showSpinner = false;
//                 fileItem.IsFileProcessing = false;
//                 fileItem.errorMessage = processFileResult.data.Message;

              
//                   this.toast.error('An error was encountered processing the ' + fileItem.file.fileTypeName + ' file. ' + fileItem.errorMessage);
//         }
//       });
//     }
//     else {
//       this.uploader.queue.forEach( (fileItem, key) => {
//         if (fileItem.file.name === processFileResult.data.FileName) {
//             this.project = processFileResult.data.Dataset;
//             fileItem.isSuccess = true;
//             fileItem.isError = false;
//             fileItem.showSpinner = false;
//             fileItem.IsFileProcessing = false;
//             fileItem.errorMessage = processFileResult.data.Message;
//             fileItem.successMessage = processFileResult.data.Message;
//             this.completedGermplasmUpload = true;

            
//               this.toast.success(fileItem.file.fileTypeName + ' file processed successfully');
//               }
//     });
//   }
//   this.isUploading = false;
// }, 

// (error) => {
//   this.uploader.queue.forEach( (fileItem, key) => {
//     if (fileItem.file.name === error.data.FileName) {

//           this.toast.error('An Error occured while processing the file. ' + fileItem.errorMessage);
//             }

//         fileItem.processingComplete = true;
//         fileItem.isSuccess = false;
//         fileItem.isError = true;
//         fileItem.showSpinner = false;
//         fileItem.errorMessage = "An error was encountered processing the file.";
//     }
// );

// this.isUploading = false;
// console.log('ProcessFileError');
// console.log(error);
// });
// };

// importFile() {
// if (this.currentDataSet === null) {

//   this.toast.warning('Please select a Dataset to proceed.');
// return false;
// } else {
//     this.toast.info('Import will begin shortly. Please wait...');
//     };

// this.IsFileImporting = true;

// this.onboardingService.importFile(this.currentDataSet.Id).then( (result) => {
//   if (result.data.Germplasm !== null) {
//       var params = {
//           Germplasm: result.data.Germplasm,
//           Phenotype: result.data.Phenotype
//       };

//          this.toast.success('File import Successful. Please wait while the files are getting uploaded.');

//       this.onboardingService.upload(this.currentDataSet.Id, params).then((uploadResult) => {
//           this.importFileInProgress = false;
//           this.IsFileImporting = false;

//           if (uploadResult.data.IsValid === false) {
//                  this.toast.error('Something went wrong while trying to upload files.' + uploadResult.data.Message) 


//             } else {
//               Object.keys(uploadResult.data).forEach( (key) => {

//                   var fileType = key;
//                   var currentFileItem = uploadResult.data[key];

//                   var fileItem = {
//                       file: {
//                           name: currentFileItem.FileName,
//                           fileTypeName: fileType
//                       },
//                       size: '',
//                       successMessage: currentFileItem.Message,
//                       progress: 100,
//                       isSuccess: true,
//                       isError: false,
//                       isCancel: false,
//                       IsFileProcessing: true,
//                       processingComplete: true,
//                       showSpinner: true,
//                       eventId: currentFileItem.EventId
//                   };

//                   console.log(fileItem);
//                   this.uploader.queue.push(fileItem);

//                   this.importedFile(fileItem.file.name, currentFileItem.EventId, fileItem.file.fileTypeName, currentFileItem.DatasetId);
//               });
//           }
//       },
//         (error) => {
//               console.log(error);
//           });
//   } else {
//             this.toast.info('No files to import');
//          }
//       this.IsFileImporting = false;
//   },

// (error) => {

//       this.toast.error('No files to import');
//   this.IsFileImporting = false;
//   console.log('Import File error' + error);
// });
// }

// this.$route = $route;
// this.$location = $location;
// this.$routeParams = $routeParams;

// this.signalRservice = SignalRService;

// closeModal() {
//   this.dialogRef.hide();
// };

// openToast (text) {
// if (text) {
// this.currentStatus = text;
// this.toast.show(this.toast.simple(text));
// }
// };

// $scope.$on('NewOnboarding', () => {
// this.openToast("Status: " + this.signalRservice.Message);
// });

// $scope.$on('inprocess', () => {
// this.openToast(this.signalRservice.Message);
// });

// downloadTemplate (type) {
// this.onboardingService.downloadTemplate(type);
// };



// downloadOnboardingFile (eventId) {
//   this.onboardingService.downloadOnboardingFile(eventId).then( (result) => {
//       if (result.data) {
//           var a = document.createElement("a");
//           a.href = result.data;
//           document.body.appendChild(a);
//           a.click();
//           document.body.removeChild(a);
//       }
//       else {
//           this.toast.show(this.toast.simple({
//               position: 'toast-bottom-left',
//               content: 'Error while downloading file',
//               toastClass: 'toast-error',
//               hideDelay: 5000
//           }));
//       }
//   });
// };

// // FILTERS
// // a sync filter
// this.uploader.filters.push({
//   name: 'syncFilter',
//   fn: (item, options) => {
//       return this.queue.length < 10;
//   }
// });

// // an async filter
// this.uploader.filters.push({
//   name: 'asyncFilter',
//   fn: (item, options, deferred) => {
//       setTimeout(deferred.resolve, 1e3);
//   }
// });

// // CALLBACKS
// this.uploader.onWhenAddingFileFailed = function (item, filter, options) {
//   console.info('onWhenAddingFileFailed', item, filter, options);
// };

// this.uploader.onAfterAddingFile = function (fileItem) {
//   fileItem.file.fileTypeName = this.currentFileTypeName;    
//   fileItem.file.fileType = this.currentFileType;
//   fileItem.file.species = this.datasets.selected.SpeciesName;

//   if (this.currentFileType === 4) {
//       fileItem.file.Name = this.customMarkerFileName;
//       fileItem.upload();
//   }
//   else {
//       fileItem.upload();
//   }
// };

// this.uploader.onAfterAddingAll = function (addedFileItems) {
// };

// this.uploader.onBeforeUploadItem = function (item) {

//   this.isUploading = true;
//   item.headers = {
//       fileType: this.currentFileType,
//       species: item.file.species,
//       partner_id: this.Partner.Id,
//       datasetId: this.datasets.selected.Id,
//       name: item.file.Name
//   };
//   item.showSpinner = true;
// };

// // this.uploader.onProgressItem(fileItem, progress) {
// // };

// // this.uploader.onProgressAll = function (progress) {
// // // };

// this.uploader.onSuccessItem = function (fileItem, response, status, headers) {
//   fileItem.eventId = response.EventId;

//   if (response.IsValid === false) {
//       fileItem.isSuccess = false;
//       fileItem.isError = true;
//       fileItem.errorMessage = response.Message;
//       fileItem.showSpinner = false;
//       this.isUploading = false;
//   } else {
//       fileItem.isSuccess = true;
//       fileItem.isError = false;
//       fileItem.successMessage = response.Message;
//       response.FileName = response.FileName.substring(0, response.FileName.indexOf("."));

//       //create data object that will be passed to file processing routine
//       var data = {
//           eventId: response.EventId,
//           fileType: fileItem.file.fileType,
//           fileName: response.FileName,
//           datasetId: this.datasets.selected.Id,
//           name: fileItem.file.Name
//       };

//       //call the File Processing method on the api
//       this.onboardingService.processFile(data).then( (result) => {
//           fileItem.processingComplete = true;
//           fileItem.fileName = result.data.FileName;//set name of file
//           fileItem.fileType = result.data.FileType;
//           fileItem.fileTypeName = result.data.FileTypeName;
//           if (result.data.Success === false) {
//               fileItem.isSuccess = false;
//               fileItem.isError = true;
//               fileItem.errorMessage = result.data.Message;
//           } else {
//               //reset project scope data
//               this.project = result.data.Dataset;
//               fileItem.isSuccess = true;
//               fileItem.isError = false;
//               fileItem.successMessage = result.data.Message;
//               this.completedGermplasmUpload = true;
//           }
//           fileItem.showSpinner = false;
//           this.isUploading = false;
//       },  (error) => {
//           fileItem.processingComplete = true;
//           fileItem.isSuccess = false;
//           fileItem.isError = true;
//           fileItem.errorMessage = "An error was encountered processing the file.";
//           console.log(error);
//           fileItem.showSpinner = false;
//           this.isUploading = false;
//       });
//   }
// };

// // this.uploader.onErrorItem (fileItem, response, status, headers) {
// //   //console.info('onErrorItem', fileItem, response, status, headers);
// // };

//   this.uploader.onCancelItem (fileItem, response, status, headers) {
//     fileItem.showSpinner = false;
//     this.isUploading = false;
//   };


// // this.uploader.onCompleteItem  (fileItem, response, status, headers) {
// //   //console.info('onCompleteItem', fileItem, response, status, headers);
// // };

// // this.uploader.onCompleteAll () {
// // };



