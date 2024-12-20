import { Component, Inject, Input, Type } from '@angular/core';
import { Pokemon } from "../../shared/interfaces/pokemon";
import { ApiService } from "../../shared/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { PokemonTypeService } from '../../shared/services/pokemon-type.service';
import { Stat } from '../../shared/interfaces/stat';

type ColorIntensity = 'light' | 'default' | 'dark' | 'darker';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;
  
  activeTab: string = 'info';

  readonly tabs = [
    { id: 'info', label: 'Informations' },
    { id: 'stats', label: 'Statistiques' },
    { id: 'moves', label: 'Attaques' },
    { id: 'forms', label: 'Formes' }
  ];

  readonly stats = [
    { name: 'hp', label: 'PV' , max: 255},
    { name: 'attack', label: 'ATK' , max: 190},
    { name: 'defense', label: 'DEF' , max: 250},
    { name: 'special_attack', label: 'A.SPE' , max: 194},
    { name: 'special_defense', label: 'D.SPE' , max: 250},
    { name: 'speed', label: 'VIT' , max: 200}
  ];

  constructor(

    private pokemonTypeService: PokemonTypeService,
    private apiService: ApiService,
    private route: ActivatedRoute

  ) {
    this.route.params.subscribe(params => {
      if (params['pokemon_id']) {
        this.apiService.requestApi(`/pokemon/${params['pokemon_id']}`)
          .then((response: Pokemon) => {
            this.pokemon = response;

            if (
              this.pokemon?.default_variety?.types &&
              this.pokemon.default_variety.types.length > 0
            ) {
              const typeName = this.pokemon.default_variety.types[0]
            }

            response.default_variety.types?.forEach(type => {
              console.log(type.custom_sprite_url);
            });

          });
      }
    });
  }

  getPrimaryTypeName() : string {
    if (
      this.pokemon?.default_variety?.types &&
      this.pokemon.default_variety.types.length > 0
    ) {
      return this.pokemon.default_variety.types[0].name
    }
    return '';
  }

  setActiveTab(event: Event, tabId: string): void {
    event?.preventDefault();
    this.activeTab = tabId;
  }

  getStat(statName: string): number {
    const statKey = `base_stat_${statName}` as keyof typeof this.pokemon.default_variety;
    return this.pokemon.default_variety[statKey] as number;
  }

  getBackgroundClass(): string {
    return this.pokemonTypeService.getBackgroundClass(this.pokemon);
  }

  getTypeColorClass(typeName: string, intensity: ColorIntensity, prefix: 'bg' | 'text' | 'border' = 'bg'): string {
    const normalizedType = typeName.toLowerCase() === 'psy' ? 'psychic' : typeName.toLowerCase();
    console.log("Vous voulez affiché un ${prefix}");
    return `${prefix}-${normalizedType}-${intensity}`;
  }

  calculateStatPercentage(stat: Stat): number {
    const statValue = this.getStat(stat.name);
    return (statValue / stat.max) * 100;
  }

  // Tabs behavior
  getIndicatorWidth(): string {
    return `${100 / this.tabs.length}%`;
  }
  
  getIndicatorPosition(): string {
    const index = this.tabs.findIndex(tab => tab.id === this.activeTab);
    return `${index * (100 / this.tabs.length)}%`;
  }
  
}