import { Top10Interface } from './../../models/top10-interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input () top: Top10Interface = {
    category: "",
    movies: [
    {
      number: "",
      tittle: "",
      src: ""
    }]
  }
}
