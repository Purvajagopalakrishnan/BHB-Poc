import { Injectable } from '@angular/core';




@Injectable()
export class OnboardingService {

  constructor() {}
}

var module = angular.module('onboardingServiceMod', []);
module.factory('onboardingService', ['$http',
     ($http) => {
        var service: any;

        service.createDataset = function (datasetName, speciesId, refGenomeId, privateDataset) {
            return $http.get('/Onboard/CreateDataset/?datasetName=' + datasetName + '&speciesId=' + speciesId + '&refGenomeId=' + refGenomeId + '&privateDataset=' + privateDataset);
        };

        service.renameDataset = function (datasetId, newDatasetName) {
            return $http.get('/Onboard/RenameDataset/?datasetId=' + datasetId + '&newDatasetName=' + newDatasetName);
        };

        service.getOnboardingProject = function (id) {
            return $http.get('/Onboard/GetOnboardingProject/' + id);
        };
        service.getPartner = function () {
            return $http.get('/Onboard/GetCurrentPartner');
        };

        service.getAllPartnersForCurrentUser = function () {
            return $http.get('/Onboard/GetPartnersForCurrentUser');
        };

        service.getDatasets = function () {
            return $http.get('/Onboard/GetDatasets');
        };

        service.getSpecies = function () {
            return $http.get('/Onboard/GetReferenceSpecies');
        };

        service.getReferenceGenomes = function (speciesId) {
            return $http.get('/Onboard/GetReferenceGenomesForSpecies/?speciesId=' + speciesId);
        };

        service.getDataset = function (id) {
            return $http.get('/Onboard/GetDataset/?id=' + id);
        };

        service.getOnboardingEvents = function (id) {
            return $http.get('/Onboard/GetOnboardingEvents/?datasetId=' + id);
        };

        service.downloadTemplate = function (type) {
            var url = "/Onboard/DownloadTemplate?type=" + type;
            window.location = url;
        };

        service.downloadOnboardingFile = function (eventId) {
            return $http.get("/Onboard/DownloadOnboardingFile/?eventId=" + eventId);
        };

        service.processFile = function (params) {
            return $http({
                url: "/Onboard/ProcessFile",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: params
            });
        };

        service.getCompletedOnboardingProjects = function () {
            return $http.get('/Onboard/GetCompletedOnboardingProjects/');
        };

        service.getCompletedOnboardingProjects = function () {
            return $http.get('/Onboard/GetCompletedOnboardingProjects/');
        };

        service.getUploadCredentials = function (fileName, datasetId) {
            return $http.get('/Onboard/UploadCredentials?fileName=' + fileName + "&datasetId=" + datasetId);
        };

        service.importFile = function (datasetId) {
            return $http({
                url: "/Onboard/GetImportUrlsAsync",
                method: "GET",
                params: { datasetId: datasetId }
            });
        };

        service.isFileImportAvailable = function () {
            return $http.get('/Onboard/IsFileImportAvailable');
        };

        service.IsGWASTriggerEnabled = function (datasetId) {
            return $http({
                url: "/Onboard/IsGWASTriggerEnabled",
                method: "GET",
                params: { datasetId: datasetId }
            });
        };

        service.GWASButtonClicked = function (datasetId, partnerId, speciesId) {
            return $http({
                url: "/Onboard/TriggerGWAS",
                method: "POST",
                params: { datasetId: datasetId, partnerId: partnerId, speciesId: speciesId }
            });
        };

        service.upload = function (datasetId, filePaths) {
            return $http({
                url: "/Onboard/Upload?datasetId=" + datasetId,
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: filePaths
            });
        };

        return service;
    }
]);