// import { Injectable } from '@angular/core';




// @Injectable()
// export class ModalDialogService {

//   constructor() {}
// }

// var module = angular.module('modalDialogServiceMod', []);

// module.service('modalDialogService', ['dialogRef', 'rootScope',(dialogRef, rootScope) => {
//     var service: any;
//     service.openModalDialog = function (ev, template, modalData) {
//         this.rootScope.modalData = modalData;
//         this.dialogRef.show({
//             templateUrl: template,
//             parent: angular.element(document.body),
//             targetEvent: ev,
//             clickOutsideToClose: false,
//             escapeToClose: false
//         })
//         .then((success) => {

//         }, (error) => {
//             console.log("Error: " + error);
//         });
//     }
//     return service;
// }]);