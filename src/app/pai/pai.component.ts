import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  user = {
    name: 'Ana Camila',
    dateOfBirth: '04/07/1992',
    role: 'Front-end Developer'
  };

  message: string = '';

  constructor() { }

  ngOnInit(): void { }

  returnMessage(value: any) {
    this.message = value;
  }
}
