import { Component } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { HttpClient } from '@angular/common/http';
import { MyAdapter } from 'src/app/services/myAdapter/myAdapter.service';

@Component({
  selector: 'app-my-adapter',
  templateUrl: './my-adapter.component.html',
  styleUrls: ['./my-adapter.component.scss']
})
export class MyAdapterComponent {
  constructor(private http: HttpClient) { }
  style='../styles.css'
  title = 'app';
  currentTheme = 'dark-theme';
  triggeredEvents = [];
  titleList = 'Fluid';

  userId: string = "offline-myAdapter";
  username: string | undefined;

  adapter: ChatAdapter = new MyAdapter();
  

  switchTheme(theme: string): void {
    this.currentTheme = theme;
  }

  onEventTriggered(event: string): void {
    this.triggeredEvents.push(event as never);
  }

  joinSignalRChatRoom(): void {
    const userName = prompt('Please enter a user name:');

  }
}






