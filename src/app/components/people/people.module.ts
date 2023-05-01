import { NgModule } from "@angular/core";
import { PeopleComponent } from "./people.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PeopleComponent],
  exports: [PeopleComponent],
  imports: [BrowserModule, CommonModule],
})
export class PeopleModule {}
