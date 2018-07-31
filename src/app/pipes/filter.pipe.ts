import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(item => {
      item.technology.forEach(keyword => {
        if (
          keyword.toLowerCase().indexOf(filterString.toLowerCase()) > -1 &&
          !resultArray.includes(item)
        ) {
          resultArray.push(item);
        }
      });
    });
    return resultArray;
  }
}
