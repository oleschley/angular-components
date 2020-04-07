import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer', isEmployed: true },
    { name: 'Jill', age: 26, job: 'Engineer', isEmployed: false },
    { name: 'Jack', age: 25, job: 'Engineer', isEmployed: true }
  ]

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
    { key: 'isEmployed', label: 'Is Employed'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
