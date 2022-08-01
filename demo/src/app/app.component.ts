import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];
  paragraph = 'new paragraph value';
  visible = false;
  id = 1;

  buttonClick() {
    this.visible = !this.visible;
    this.logs.push('button clicked wtih id='+this.id++);
  }

}
