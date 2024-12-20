// pokemon-type.service.ts
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {
  getBackgroundClass(pokemon: Pokemon): string {
    if (
      pokemon?.default_variety?.types &&
      pokemon.default_variety.types.length > 0
    ) {
      const primaryType =
        pokemon.default_variety.types[0].name.toLowerCase();
     
      const secondType = pokemon.default_variety.types.length > 1
        ? pokemon.default_variety.types[1].name.toLowerCase()
        : null;
     
      if (secondType) {
        return `bg-gradient-to-b from-${primaryType}-light to-${secondType}-light`;
      } else {
        return `bg-${primaryType}-light`;
      }
    }
    return '';
  }
}