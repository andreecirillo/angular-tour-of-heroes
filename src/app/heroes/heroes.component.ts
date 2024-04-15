import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [    
    FormsModule,
    UpperCasePipe,
    NgFor,
    NgIf
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
