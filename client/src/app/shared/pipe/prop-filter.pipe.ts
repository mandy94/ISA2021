import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'propFilter' })
export class PropFilterPipe implements PipeTransform {
 
  transform(items: any[], searchText: string, prop:string): any[] {
   if (!items) {
      return [];
    }
    return items.filter(it => {
        if(!it[prop])
          return false;

        return it[prop].toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
        

    });
  }
}