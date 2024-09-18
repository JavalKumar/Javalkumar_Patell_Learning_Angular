import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Shared/Modules/user';
import { JsonPipe,NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavalPatelLearningAngular';
}

export interface class AppComponent{
  Title : "Automobile";
  User1: User={id:1, companyName:"Lamborghini", model:"Huracane"};

}