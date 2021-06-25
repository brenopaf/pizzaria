import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '', icon: 'home' },
    { title: 'Pizzas', url: 'lista', icon: 'pizza' }
    ];    
  
  constructor() {}
}
