import { createAction } from "@ngrx/store";
import { PersonModel } from "../../../../models/person-model";

export enum PeopleActionsEnum {
  loadPeople = "[People] Load Peoples",
  loadedPeople = "[People] Loaded",
  editPeople = "[People] Edit",
  updateIsLoaded = "[People Updated isLoaded]",
}

// This is a request
export const loadPeoples = createAction(PeopleActionsEnum.loadPeople);
// This is a load success
export const loadedPeople = createAction(
  PeopleActionsEnum.loadedPeople,
  (peoples: PersonModel[]) => ({ peoples })
);

export const updateIsLoaded = createAction(
  PeopleActionsEnum.updateIsLoaded,
  (isLoaded: boolean) => ({ isLoaded })
);
//update
export const editPeople = createAction(
  PeopleActionsEnum.editPeople,
  (peoples: PersonModel[]) => ({ peoples })
);
