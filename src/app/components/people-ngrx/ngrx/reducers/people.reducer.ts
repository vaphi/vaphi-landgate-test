import { Action, createReducer, on } from "@ngrx/store";
import * as PeopleActions from "../actions/people.actions";
import { PersonModel } from "src/app/models/person-model";

export const peopleFeatureKey = "people";

// TODO: Need to add People to the store and initialize it.
export interface PeopleState {
  peoples: PersonModel[];
  hasLoaded: boolean;
}

export const initialState: PeopleState = {
  peoples: [],
  hasLoaded: false
};

export const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.loadPeoples, (state) => state),
  on(PeopleActions.loadedPeople, (state, result) => ({
    ...state,
    peoples: result.peoples,
  })),
  on(PeopleActions.editPeople, (state, result) => ({
    ...state,
    peoples: result.peoples,
  })),
  on(PeopleActions.updateIsLoaded, (state, result) => ({
    ...state,
    hasLoaded: result.isLoaded
  }))
);

export function reducer(state: PeopleState, action: Action): any {
  return peopleReducer(state, action);
}
