import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public user;

  constructor(private usersService:UsersService,
    private activatedRoute:ActivatedRoute) {
     activatedRoute.params.subscribe(params=>{
      return this.usersService.getOneFromUsers(params['id']).subscribe((document:any)=>{      
        this.user = document.data;
      })
    })
  }

  ngOnInit() {

  }

}
