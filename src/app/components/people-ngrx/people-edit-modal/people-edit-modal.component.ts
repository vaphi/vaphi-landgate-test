import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { PersonModel } from "src/app/models/person-model";
import { PeopleState } from "../ngrx/reducers/people.reducer";
import { selectFeaturePeople } from "../ngrx/selectors/people.selectors";
import { editPeople } from "../ngrx/actions/people.actions";
import { take } from "rxjs/operators";

@Component({
  selector: "edit-people-component",
  templateUrl: "./people-edit-modal.component.html",
  styleUrls: ["./people-edit-modal.component.scss"],
})
export class PeopleEditModal implements OnInit {
  person: any;
  personForm: FormGroup;
  peoples$: Observable<PersonModel[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<PeopleState>
  ) {
    this.person = data.people;
  }

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      age: new FormControl(""),
      jobTitle: new FormControl(""),
    });

    this.formInit();
  }

  updatePerson(): void {

    let peoples = [];
    const updatePersonData: PersonModel = this.getUpdatedPersonData();
    this.peoples$ = this.store.pipe(select(selectFeaturePeople));
    this.peoples$.pipe(take(1)).subscribe((value) => (peoples = value));

    const peoplesClone = [...peoples];
    peoplesClone[this.data.index] = updatePersonData;
    this.store.dispatch(editPeople(peoplesClone));
  }

  private getUpdatedPersonData() {
    const personControls = this.personForm.controls;

    const updatePersonData: PersonModel = {
      firstName: personControls.firstName.value,
      lastName: personControls.lastName.value,
      age: personControls.age.value,
      jobTitle: personControls.jobTitle.value,
    };
    return updatePersonData;
  }

  private formInit(): void {
    const personControls = this.personForm.controls;
    personControls.firstName.setValue(this.person.firstName);
    personControls.lastName.patchValue(this.person.lastName);
    personControls.age.patchValue(this.person.age);
    personControls.jobTitle.patchValue(this.person.jobTitle);

    this.personForm.updateValueAndValidity();
  }
}
