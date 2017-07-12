import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(sample, args: string[]): any {
    const keys = [];
    for (const key in sample) {
      if (sample.hasOwnProperty(key)) {
        keys.push({
          key: key,
          value: sample[key]
        });
      }
      return keys;
    }
  }
  
}
