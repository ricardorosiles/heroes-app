import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  term: string;
  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly heroresServices: HeroesService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      this.term = params["term"];
      this.heroes = this.heroresServices.searchHeroes(params["term"]);
      console.log(this.heroes);
    });
  }
  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}
