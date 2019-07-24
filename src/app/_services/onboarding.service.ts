import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class OnboardingService {
    

    // renameDataset(datasets: IDatasets[]) {
    //     return this.http.put(this.baseUrl + datasets.id, name);
    // }

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