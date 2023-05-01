import { NgModule } from "@angular/core";
import { PeopleNgrxComponent } from "./people-ngrx.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromPeople from "./ngrx/reducers/people.reducer";
import { PeopleEffects } from "./ngrx/effects/people.effects";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [PeopleNgrxComponent],
  exports: [PeopleNgrxComponent],
  imports: [
    StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer),
    EffectsModule.forFeature([PeopleEffects]),
    CommonModule,
    BrowserModule
  ],
})
export class PeopleNgrxModule {}
