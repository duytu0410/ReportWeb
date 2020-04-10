import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(products2: any[],id:string,name:string,price:string): any {
    if(!id&&!name&&!price){
      return products2;
    }
    else{
      if(id){
        products2=products2.filter(x=>{
          return x.id.toString().indexOf(id)!=-1;
        })
      }
      if(name){
        products2=products2.filter(x=>{
          return x.name.indexOf(name)!=-1;
        })
      }
      if(price){
        products2=products2.filter(x=>{
          return x.price.indexOf(price)!=-1;
        })
      }
      return products2;
    }
  }

}
