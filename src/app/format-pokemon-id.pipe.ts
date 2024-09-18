import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPokemonId'
})
export class FormatPokemonIdPipe implements PipeTransform {

  transform(value: number, length: number = 4): string {
    let formattedValue = value.toString();
    while (formattedValue.length < length) {
      formattedValue = '0' + formattedValue;
    }
    return formattedValue;
  }

}
