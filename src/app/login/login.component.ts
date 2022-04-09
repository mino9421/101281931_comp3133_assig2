import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private LOGIN_POST = gql`
  query Query(
    $username: String!,
    $password: String!
    ) {
      login(
        username: $username,
        password: $password
      )
    }
  `

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let tempUsername = this.loginForm.get('username')?.value;
    let tempPassword = this.loginForm.get('password')?.value;

    console.log(tempUsername, tempPassword);

    this.apollo.mutate({
      mutation: this.LOGIN_POST,
      variables: {
        username: tempUsername,
        password: tempPassword
      }
    }).subscribe((res: any) => {
      if (res.data.login === null || res.data.login === undefined) {
        alert(new Error('username and password do not match, or does not exist'));
      } else {
        this.router.navigate(['']);
      }
    }, (err) => {
      alert(err.message);
    })


  }

}
