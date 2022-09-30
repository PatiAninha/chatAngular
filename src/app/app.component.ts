import { Component } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { MyAdapter } from './services/myAdapter/myAdapter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  title = 'testeFluid';
  userId = 999;

  

  public adapter: ChatAdapter = new MyAdapter();
}
