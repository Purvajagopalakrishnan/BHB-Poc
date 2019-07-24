import { Injectable } from "@angular/core";
import { IDatasetStatus } from '../Class & Interfaces/dataset-status';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DatasetStatusService {
datasets: IDatasetStatus[] = [
    {
        name: "AutoGermDataset_2592",
        species: "Solanum lycopersicum",
        imports_completed: "Genomic,Germplasm",
    },
    {
        name: "Ricetest",
        species: "Pisum sativum",
        imports_completed: "Phenotype,Germplasm"
    },
    {
        name: "Peatest",
        species: "Oryza sativa",
        imports_completed: "Custom marker,phenotype"
    }
]

    getDatasets() {
        return of(this.datasets);
    }
}