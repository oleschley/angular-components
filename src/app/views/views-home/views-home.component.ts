import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { label: '# of users', value: 22 },
    { label: 'Revenue', value: 900 },
    { label: 'Reviews', value: 50 }
  ]

  items = [
    { image: '/assets/images/radio.jpg', title: 'Radio', description: 'This is a radio'},
    { image: '/assets/images/tv.jpg', title: 'TV', description: 'This was a TV'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
