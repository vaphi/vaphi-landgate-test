import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PersonModel } from "../models/person-model";
import { map } from "lodash";

@Injectable({
  providedIn: "root",
})
export class PeopleService {
  constructor() {}

  private mockPeopleList = [
    {
      firstName: "John",
      lastName: "Doe",
      age: "21",
      workTitle: "Wanna be Signer",
    },
    { firstName: "Jane", lastName: "Doe", age: "22", workTitle: "Signer" },
    { firstName: "Bob", lastName: "Barker", age: "80", workTitle: "TV Host" },
    {
      firstName: "John",
      lastName: "Doe",
      age: "21",
      workTitle: "Wanna be Signer",
    },
  ];

  getPeoples(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    const peoples = map(this.mockPeopleList, (people: any) => {
      return {
        firstName: people.firstName,
        lastName: people.lastName,
        age: Number(people.age),
        jobTitle: people.workTitle,
      };
    });

    const people = of(peoples);
    return people;
  }
}
