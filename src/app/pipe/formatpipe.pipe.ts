import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatpipe'
})
export class FormatpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(0,args)+'...';
  }

}
