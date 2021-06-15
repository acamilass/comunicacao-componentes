import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() userName: string = '';
  @Output() welcomeMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  show() {
    this.welcomeMessage.emit('Seja bem vindo!');
  }
}
