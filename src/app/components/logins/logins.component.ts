import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LoginQL } from 'src/app/graphql/graphql.queries';
@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  lists: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: LoginQL,
    })
    .valueChanges.subscribe((result: any) => {
      this.lists = result?.data?.lists;
      this.loading = result.loading;
      this.error = result.error;
    })
  }

}
