import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Shared/Modules/user';
import { JsonPipe,NgForOf } from '@angular/common';
import { CarsComponent } from "./cars/cars.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Automobile';
  // user1 : User = {id: 1, companyName: "Lamborghini", model: "Huracane",price: 200000, isPetrol: true }
  // user2 : User = {id: 2, companyName: "Lamborghini", model: "Avantador",price: 235000, isPetrol: true }
  // user3 : User = {id: 3, companyName: "Lamborghini", model: "Gallardo",price: 155000, isPetrol: false }
  // user4 : User = {id: 4, companyName: "Lamborghini", model: "Diablo",price: 120000, isPetrol: true }
  // user5 : User = {id: 5, companyName: "Lamborghini", model: "Urus",price: 190000, isPetrol: false }
  // user6 : User = {id: 6, companyName: "Lamborghini", model: "Countach",price: 1200000, isPetrol: true }

  // carList: User[] = [this.user1,this.user2,this.user3,this.user4,this.user5,this.user6];


}

