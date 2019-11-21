import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as M from "materialize-css/dist/js/materialize";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  private modal;
  public user: FormGroup;

  constructor(
    private modalService: ModalService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.modalInitializer().then((modalInstance: any) => {
      if (modalInstance) {
        this.modal = modalInstance;
        this.modalService.isModalEditActive.subscribe(val => {
          val ? this.modal.open() : this.modal.close();
          if (val) {
            this.user.patchValue(this.modalService.UserData);
          }
        });
      }
    });

    this.user = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      avatar: new FormControl("", Validators.required)
    });
  }

  private modalInitializer() {
    return new Promise((resolve, reject) => {
      document.addEventListener("DOMContentLoaded", function() {
        var Modalelem = document.querySelector(".b-modal");
        resolve(M.Modal.init(Modalelem));
        reject(false);
      });
    });
  }

  public saveChangesUser() {
    let id = this.modalService.UserData.id
    this.usersService.updateOne(id, this.user.value).subscribe(document=>{
      console.log(document);
    })
  }
}
