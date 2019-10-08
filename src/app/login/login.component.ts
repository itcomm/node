import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId: String = null;
  public password: String = null;
  public isLoading: Boolean = false;
  public error: String = null;
  returnUrl: string;
  constructor(private http: HttpClient, private router: Router,) { }

  ngOnInit() {
  }

  sendLogin(form: NgForm)
  {
    alert('loginId' + this.loginId + this.password);
    this.router.navigateByUrl('/home');
    // this.http.post(
    //   `membership/action/login`, 
    //       {
    //         id: this.loginId,
    //         password: this.password,
    //        }
    // )
    // .pipe(
    //   tap(
    //     response => {
    //       if (response['error']) {
    //         throwError(response['error']);
    //       }
    //     }
    //   )
    // )
    // .subscribe(
    //   _ => {
    //     this.isLoading = false;
    //     this.router.navigate(['/'], {queryParams: {} });
    //   },
    //   _ => {
    //     this.error = '에러';
    //     this.isLoading = false;
    //   }
    // )
  }

}
