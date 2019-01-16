import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any, args: {currentPage: number, perPage: number}): any {
    if (!args || !args.perPage || !args.currentPage) {
      return value;
    }
    const location = (args.perPage * (args.currentPage - 1)) || 0 ;
    return value.slice(location, location + args.perPage);

  }

}
