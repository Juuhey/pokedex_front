import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  getBackgroundClass(): string {
    if (
      this.pokemon?.default_variety?.types &&
      this.pokemon.default_variety.types.length > 0
    ) {
      const primaryType =
        this.pokemon.default_variety.types[0].name.toLowerCase();
      const className = `bg-${primaryType}-light`;
      console.log(className);
      return className;
    }
    console.log('SALUT');
    return '';
  }
}
