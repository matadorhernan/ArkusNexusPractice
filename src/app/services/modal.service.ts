import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isModalAddActive:BehaviorSubject<boolean> = new BehaviorSubject(false);

  public isModalEditActive:BehaviorSubject<boolean> = new BehaviorSubject(false);

  public UserData;

  constructor() { }
}
