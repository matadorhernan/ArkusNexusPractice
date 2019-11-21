import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private modal;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalInitializer().then((modalInstance:any)=>{
      
      if(modalInstance){
        this.modal = modalInstance
        this.modalService.isModalAddActive.subscribe(val=>{
          (val)? this.modal.open() : this.modal.close()
        })
      }
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

}
