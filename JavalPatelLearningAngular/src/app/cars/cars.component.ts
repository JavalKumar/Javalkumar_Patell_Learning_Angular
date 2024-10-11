import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../Shared/Modules/user';
import { CarsListComponent } from "../cars-list/cars-list.component";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgForOf, CarsListComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  tableColumn : string[]=['Id', 'Company', 'Modle', 'Price', 'isPertol'];

  carList: User[] = [
    { id: 1, companyName: "Lamborghini", model: "Huracan", price: 200000, isPetrol: true },
    { id: 2, companyName: "Lamborghini", model: "Aventador", price: 235000, isPetrol: true },
    { id: 3, companyName: "Lamborghini", model: "Gallardo", price: 155000, isPetrol: false },
    { id: 4, companyName: "Lamborghini", model: "Diablo", price: 120000, isPetrol: true },
    { id: 5, companyName: "Lamborghini", model: "Urus", price: 190000, isPetrol: false },
    { id: 6, companyName: "Lamborghini", model: "Countach", price: 1200000, isPetrol: true }
  ];

  carSelected?: User;

  carSelect(carList: User):void{
    this.carSelected = carList;
  }

}
