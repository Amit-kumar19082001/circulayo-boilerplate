import { Injectable } from '@angular/core';
import { SiteUsers } from '../Models/site-users';

let demosite_user:SiteUsers[] = [
  {"ID":1, name: "Rahul kumar",Description:'An engineer at Google'},
  {"ID":2, name: "Rohit Singh",Description:' Student at NNIT'},
  {"ID":3, name: "Alok Rathod",Description:'An engineer at M3'},
  {"ID":4, name: "Anamika Singh",Description:'An engineer at Yahoo'}
] 


@Injectable({
  providedIn: 'root'
})


export class SiteUserService {
  constructor() { }
  getSiteUser(){
    return demosite_user;
  }
}
