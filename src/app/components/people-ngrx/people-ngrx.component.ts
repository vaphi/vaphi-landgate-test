import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { PersonModel } from "src/app/models/person-model";
import { updateIsLoaded, loadPeoples } from "./ngrx/actions/people.actions";
import {
  getHasLoaded,
  selectFeaturePeople,
} from "./ngrx/selectors/people.selectors";
import { PeopleState } from "./ngrx/reducers/people.reducer";
import { MatDialog } from "@angular/material/dialog";
import { PeopleEditModal } from "./people-edit-modal/people-edit-modal.component";

@Component({
  selector: "app-people-component",
  templateUrl: "./people-ngrx.component.html",
  styleUrls: ["./people-ngrx.component.scss"],
})
export class PeopleNgrxComponent implements OnInit {
  // TODO: Include the Store and get the data from the NgrxStore
  peoples$: Observable<PersonModel[]>;
  constructor(private store: Store<PeopleState>, public dialog: MatDialog) {
    this.peoples$ = this.store.pipe(select(selectFeaturePeople));

    this.store.pipe(select(getHasLoaded)).subscribe((hasLoaded) => {
      if (!hasLoaded) {
        this.store.dispatch(loadPeoples());
        this.store.dispatch(updateIsLoaded(true));
      }
    });
  }

  ngOnInit() {}

  openDialog(people: PersonModel, index: number) {
    this.dialog.open(PeopleEditModal, {
      data: {
        people,
        index,
      },
    });
  }
}
