import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import * as _ from "lodash";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  public users;

  constructor(
    private usersService: UsersService,
    private modalService: ModalService
  ) {
    usersService.getAllFromUsers().subscribe((document: any) => {
      this.users = document.data;
    });
  }

  public openUserModal(user) {
    this.modalService.UserData = Object.assign({},user);    
    this.modalService.isModalEditActive.next(true);
  }

  ngOnInit() {}

  public searchAllByEmail(evt: any) {
    var email = evt.target.value;

    this.usersService.getAllFromUsers().subscribe((document: any) => {
      this.users = _.filter(document.data, user => {
        return user.email.indexOf(email) != -1;
      });
    });
  }
}
