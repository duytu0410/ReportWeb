import { Injectable } from '@angular/core';
import{Variable} from './../model/Variable.class';
import {Subscription} from 'rxjs';
import { Http,RequestOptions,Headers} from '@angular/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public API1:string='https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/GetAllNhomSp' ;

  public API3:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/PlanRevenue/GetSumWithTitle";

  public types:Variable;
  public subscription:Subscription;
  constructor(public http:Http) { }
  getTypes(){
   
    this.subscription=this.get(this.API1).subscribe(data=>{

      this.types=JSON.parse(data._body);
    },error=>{
      console.log(error)
    })
  }

  post(url:string,body):Observable<any>{
   return this.http.post(url,body)
  }
  get(url):Observable<any>{
    return this.http.get(url)
  }
    // get(url:string,onFinish){
  //  this.http.get(url).subscribe(
  //    (data)=>{
  //     onFinish(true,data)
  //  },(err)=>{
  //    onFinish(false,err)
  //  }
  //  )
  // }
  handlePercent(value1:number,value2:number):number{
    return  Math.round(( (value2/value1))  * 100 + Number.EPSILON )
  }
  PS(value1:number,value2:number){
    if(value1>value2){
     return Math.round((  1-(value2/value1))  * 100 + Number.EPSILON ) 
    }
    if(value2>value1){
      return Math.round((  1-(value1/value2))  * 100 + Number.EPSILON ) 
    }
    else{
      return 0
    }
  }
}