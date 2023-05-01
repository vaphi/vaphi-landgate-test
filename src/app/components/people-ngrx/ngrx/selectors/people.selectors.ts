import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromPeople from "../reducers/people.reducer";

export const selectPeopleState = createFeatureSelector<fromPeople.PeopleState>(
  fromPeople.peopleFeatureKey
);

// TODO: need to add a selector for people.
export const selectFeaturePeople = createSelector(
  selectPeopleState,
  (PeopleState: fromPeople.PeopleState) => PeopleState.peoples
);

export const getHasLoaded = createSelector(
  selectPeopleState,
  (PeopleState: fromPeople.PeopleState) => PeopleState.hasLoaded
);
