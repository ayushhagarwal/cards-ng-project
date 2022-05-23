import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this beautiful tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'I saw this mountain today',
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking122',
      content: 'I saw this beautiful bike today',
    },
  ];
}
