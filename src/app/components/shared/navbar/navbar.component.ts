import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "../../search/search.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}
  async searchHeroe(search: string) {
    this.router.navigate(["/search", search]);
  }
}
