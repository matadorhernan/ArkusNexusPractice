import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import * as M from 'materialize-css/dist/js/materialize';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private modal;
  public user:FormGroup;

  constructor(private modalService: ModalService,
    private userService:UsersService) {}

  ngOnInit() {
    this.modalInitializer().then((modalInstance:any)=>{
      
      if(modalInstance){
        this.modal = modalInstance
        this.modalService.isModalAddActive.subscribe(val=>{
          (val)? this.modal.open() : this.modal.close()
        })
      }
    })    

    this.user = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'avatar': new FormControl('https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg', Validators.required),
    })

  }

  private modalInitializer() {
    return new Promise((resolve, reject) => {
      document.addEventListener("DOMContentLoaded", function() {
        var Modalelem = document.querySelector(".a-modal");
        resolve (M.Modal.init(Modalelem))
        reject(false)
      });
    });
  }

  public saveUser(){
    
    this.userService.createOneInUsers(this.user.value).subscribe(response=>{
      console.log(response);
    })
  }

}
