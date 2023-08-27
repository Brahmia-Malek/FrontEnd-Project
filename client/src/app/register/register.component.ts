import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirm:'',

  }

  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
   
  }
  register(){
    let fd =new FormData()
    fd.append('firstName',this.user.firstName)
    fd.append('lastName',this.user.lastName)
    fd.append('email',this.user.email)
    fd.append('password',this.user.password)
    fd.append('confirm',this.user.confirm)

    this._auth.register(fd)
    .subscribe(
      res=>{
        this.router.navigate(['/login']);
      }
    );
        
  }

}



