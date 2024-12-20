// Dans votre composant
import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonTypeService } from '../../services/pokemon-type.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private pokemonTypeService: PokemonTypeService) {}

  getBackgroundClass(): string {
    return this.pokemonTypeService.getBackgroundClass(this.pokemon);
  }
}