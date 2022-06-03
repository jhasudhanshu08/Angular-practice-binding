import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = [{
    type: "server",
    name: "TestServer",
    content: "Just a Test"
  }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlurPrintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
