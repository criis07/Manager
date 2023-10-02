import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geoLocationFilterPipe'
})
export class GeoLocationFilterPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Personaliza la lógica de filtrado aquí.
      return (
        item.bank_id.toLowerCase().includes(searchText) ||
        item.code.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
      );
    });
  }
}