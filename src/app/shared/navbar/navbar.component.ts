import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { Router, NavigationEnd } from "@angular/router";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isMyProfile: boolean = true;

  constructor(private modalService: ModalService) {
    
  }
  
  public openUserModal() {
    this.modalService.isModalAddActive.next(true)
  }

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", function() {
      var sideNav = document.querySelectorAll(".sidenav");
      var tabs = document.querySelectorAll(".tabs");

      var instances = M.Sidenav.init(sideNav);
      var instance = M.Tabs.init(tabs);
    });
  }

  
}
