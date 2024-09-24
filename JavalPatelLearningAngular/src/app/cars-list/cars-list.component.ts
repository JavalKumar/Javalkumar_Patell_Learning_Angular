import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { User } from '../Shared/Modules/user';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
  @Input() carList?:User;
}
