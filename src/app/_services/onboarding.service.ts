import { Injectable } from "@angular/core";
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OnboardingService {
    constructor() {}

    getReport() {

    }

    // datasets: IDatasets[] = [
    //     {
    //         Name: Test
    //     },
    //     {
    //         Name: 
    //     },
    //     {
    //         Name: ,
    //         species: Pisum sativum,
    //         referenceGenome: ,
    //     },
    //     {
    //         Name: ,
    //         species: Solanum lycoperiscum ,
    //         referenceGenome: ,
    //     },

    // ]

    // createNewDataset(name: string, species: string, referenceGenome: string) {
    //     this.datasets.push({Name: name,species: species, referenceGenome: referenceGenome});
    //     return of(this.datasets);
    // }
}