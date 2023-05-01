import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import {
  catchError,
  concatMap,
  map,
  mergeMap,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as PeopleActions from "../actions/people.actions";
import { loadedPeople, updateIsLoaded } from "../actions/people.actions";
import { PeopleService } from "src/app/services/people.service";
import { selectFeaturePeople } from "../selectors/people.selectors";
import { Store, select } from "@ngrx/store";
import { PeopleState } from "../reducers/people.reducer";

@Injectable()
export class PeopleEffects {
  loadPeoples$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      withLatestFrom(this.store.pipe(select(selectFeaturePeople))),
      switchMap(() =>
        this.peopleService.getPeoples().pipe(
          map((peoples) => loadedPeople(peoples)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService,
    private store: Store<PeopleState>
  ) {}
}
