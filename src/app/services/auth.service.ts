import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(username:string, password:string){

    if(username === "username" && password === "123"){
      localStorage.setItem("username", username);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("username");
  }

  getUser(){
    return localStorage.getItem("username");
  }

  isLoggedIn():boolean {
    return this.getUser() !== null
  }

  constructor() { }

}
