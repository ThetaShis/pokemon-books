import { Pipe, PipeTransform } from '@angular/core';
import { type } from 'os';
import { typeSourceSpan } from '@angular/compiler';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: '草',
    Poison: 'どく',
  }

  transform(types: any, ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);

}
