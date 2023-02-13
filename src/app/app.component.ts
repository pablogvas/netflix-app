import { Top10Interface } from './models/top10-interface';
import { MediaInterface } from './models/mediaInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  public actionMovies: MediaInterface = {
    category: "Acción",
    movies: [
    {
      tittle: "Ejército de los muertos",
      src: "assets/images/Accion/ejercitomuertos.jpg"
    },
    {
      tittle: "Kill Bill 2",
      src: "assets/images/Accion/killbill2.webp"
    },
    {
      tittle: "El Renacido",
      src: "assets/images/Accion/equalizer2.webp"
    },
    {
      tittle: "Heat",
      src: "assets/images/Accion/heat.webp"
    }
  ]
  };
  public terrorMovies: MediaInterface = {
    category: "Terror",
    movies: [
      {
        tittle: "El Apóstol",
        src: "assets/images/Terror/apostol.jpg"
      },
      {
        tittle: "La Calle del Terror",
        src: "assets/images/Terror/calleterror.jpg"
      },
      {
        tittle: "Múltiple",
        src: "assets/images/Terror/multiple.webp"
      },
      {
        tittle: "Reflejos",
        src: "assets/images/Terror/reflejos.webp"
      }
    ]
  };
  public comedyMovies: MediaInterface = {
    category: "Comedia",
    movies: [
      {
        tittle: "Casi 300",
        src: "assets/images/Comedia/casi300.webp"
      },
      {
        tittle: "Los Cazafantasmas",
        src: "assets/images/Comedia/cazafantasmas.webp"
      },
      {
        tittle: "El Dictador",
        src: "assets/images/Comedia/dictador.webp"
      },
      {
        tittle: "Ted 2",
        src: "assets/images/Comedia/ted2.webp"
      }
    ]
  };
  public dramaMovies: MediaInterface = {
    category: "Drama",
    movies: [
      {
        tittle: "1917",
        src: "assets/images/Drama/1917.webp"
      },
      {
        tittle: "Salvar al Soldado Ryan",
        src: "assets/images/Drama/salvaralsoldado.webp"
      },
      {
        tittle: "Corazones de Acero",
        src: "assets/images/Drama/corazones.webp"
      },
      {
        tittle: "El Único Superviviente",
        src: "assets/images/Drama/unicosuperviviente.webp"
      }
    ]
  };
  public topMovies: Top10Interface = {
    category: "Top 10",
    movies: [
      {
        number: "10",
        tittle: "The Good Doctor",
        src: "assets/images/Top10/10-gooddoctor.webp"
      },
      {
        number: "9",
        tittle: "El Poder del Perro",
        src: "assets/images/Top10/9-poder.webp"
      },
      {
        number: "8",
        tittle: "Ricos y Mimados",
        src: "assets/images/Top10/8-ricos.webp"
      },
      {
        number: "7",
        tittle: "The Black List",
        src: "assets/images/Top10/7-blacklist.webp"
      },
      {
        number: "6",
        tittle: "Aquí no hay quien viva",
        src: "assets/images/Top10/6-aquinohay.webp"
      },
      {
        number: "5",
        tittle: "Donde caben dos",
        src: "assets/images/Top10/5-dondecaben.webp"
      },
      {
        number: "4",
        tittle: "Lost in Space",
        src: "assets/images/Top10/4-lostinspace.webp"
      },
      {
        number: "3",
        tittle: "Titanes",
        src: "assets/images/Top10/3-titanes.webp"
      },
      {
        number: "2",
        tittle: "La Reina del Flow",
        src: "assets/images/Top10/2-reina.webp"
      },
      {
        number: "1",
        tittle: "La Casa de Papel",
        src: "assets/images/Top10/1-papel.webp"
      },
    ]
  };
}
