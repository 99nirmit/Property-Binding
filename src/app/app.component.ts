import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'propertyBinding';

  dynamic:string="Nirmit";

  enable:boolean = false;

  appstatus:boolean = true;
  status1:string = "Online";
  status2:string = "Offline";
}
