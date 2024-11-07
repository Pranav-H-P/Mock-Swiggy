import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { HttpserviceService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  currUser: string = "";
  currAddress: string = "";
  loginText: string = "Log In!";
  typedUserName: string = "";
  typedPassword: string = "";
  typedAddress: string = "";

  validInpCSS: string = "z-40 p-3 rounded-lg bg-slate-100";
  invalidInpCSS: string = "z-40 p-3 rounded-lg bg-red-100";

  validInput: boolean = true;

  usernameCSS: string = this.validInpCSS;
  passwordCSS: string = this.validInpCSS;
  addressCSS: string = this.validInpCSS;

  constructor(private dataService: DataServiceService, private httpService: HttpserviceService,
    private router: Router
  ){
    
    this.currUser = dataService.currUser();
    this.currAddress = dataService.currAddress();

  }

  login(){
    this.validInput = true;


    this.typedUserName = this.typedUserName.trimStart().trimEnd();
    this.typedPassword = this.typedPassword.trimStart().trimEnd();
    this.typedAddress = this.typedAddress.trimStart().trimEnd();

    if (this.typedUserName === ""){
      this.usernameCSS = this.invalidInpCSS;
      this.validInput = false;
    }else{
      this.usernameCSS = this.validInpCSS;
    }
    if (this.typedPassword === ""){
      this.passwordCSS = this.invalidInpCSS;
      this.validInput = false;
    }else{
      this.passwordCSS = this.validInpCSS;
    }
    if (this.typedAddress=== ""){
      this.addressCSS = this.invalidInpCSS;
      this.validInput = false;
    }else{
      this.addressCSS = this.validInpCSS;
    }

    if (this.validInput){

      this.httpService.login(this.typedUserName,this.typedPassword).subscribe({
        next: response => {
          
          if (response){
            this.dataService.setUser(this.typedUserName, this.typedAddress);
            window.location.reload()
          }else{
            this.loginText = "Login details incorrect! Try again"
          }
        
        },
        error: error => {
          
          this.loginText = "Server Error! Please try again"
        }
      });
    }
  }

  goToFavorites(){
    this.router.navigate(['favorites']);
  }

  logOut(){
    this.dataService.clearUser();
    window.location.reload()
  }
}
