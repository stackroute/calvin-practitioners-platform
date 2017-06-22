import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'keys'
})
export class KeysPipe implements PipeTransform {
 transform(value, args: string[]): any {
  const keys = [];
  for (let key; key < value; key++) {
   keys.push({
    key: key,
    value: value[key]
   });
  }
  return keys;
 }
}
