import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../app/components/home/home.component";
import { HeroesComponent } from "../app/components/heroes/heroes.component";
import { AboutComponent } from "../app/components/about/about.component";
import { HeroeComponent } from "../app/components/heroe/heroe.component";
import { SearchComponent } from "./components/search/search.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "about", component: AboutComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "search/:term", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
