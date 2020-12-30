import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pharmacyFilter' })
export class PharmacyFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
   if (!items) {
      return [];
    }
    return items.filter(it => {
   
        return it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());

    });
  }
}