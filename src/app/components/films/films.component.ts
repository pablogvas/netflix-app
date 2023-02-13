import { MediaInterface } from './../../models/mediaInterface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input () media: MediaInterface = {
    category: "",
    movies: [
    {
      tittle: "",
      src: ""
    }]
  }
}
