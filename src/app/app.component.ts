import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  codeTypescript: string = 
  `  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
  }`;

  codeHtml: string = 
  `  <div *appLet="letItem as data">
    Data: {{ data }}
  </div>
  <div *appLet="letItem; let data">
    Data: {{ data }}
  </div>`;

  codeCss: string = 
  `  @import url('https://fonts.googleapis.com/css?family=Spectral+SC:700');

  body {
    background-color: #f9f9f9;
    h1 {
      color: dodgerblue;
    }
  }`;

  codeJavascript: string = 
  `  function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }`;

  codeJson: string = 
  `  {
    "name": "ngx-highlightjs",
    "version": "0.0.0",
    "private": true,
    "dependencies": { },
    "scripts": {
      "start": "ng serve",
    }
  }`;
}
