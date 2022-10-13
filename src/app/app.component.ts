import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-http-interceptor-kimhab';
  name: String | undefined;
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts1').subscribe(res => console.log(res))
  }

  constructor(
   private http: HttpClient
  ) {
  }
}
