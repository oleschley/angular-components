import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.scss']
})
export class ModulesHomeComponent implements OnInit {

  showModal = false

  items = [
    { title: 'Why is the sky blue?', content: 'It is what it is.' },
    { title: 'What does orange taste like?', content: 'It tastes green.' },
    { title: 'What color is that flower?', content: 'The flower is purple.' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showModal = !this.showModal
  }

}
