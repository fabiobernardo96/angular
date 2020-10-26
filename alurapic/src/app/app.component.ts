import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:'https://portal.eumedicoresidente.com.br/wp-content/uploads/2020/07/Thumbnail-curso-624x351.jpg',
      description: 'Emr'
    },
    {
      url:'https://portal.eumedicoresidente.com.br/wp-content/uploads/2020/07/Thumbnail-curso-624x351.jpg',
      description: 'Emr'
    }
  ]
}
