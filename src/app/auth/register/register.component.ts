import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  c:boolean=false;
  a!: any;
  b: any[]= ['`'];
  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit(): void {

  }
  register(form: NgForm) {
    ((user: any) => {
      this.a = user;
      this.a.forEach((e: any) => this.b += e.email)
      console.log(this.b)
      if (this.b.includes(form.value.email)) {
        this.c=true
      }
      else {
        this.authSrv.signUp(form.value).toPromise()
        this.router.navigate(['/login'])
      }
    })

  }

  toLogin() {
    this.router.navigate(['/login'])
  }
}

