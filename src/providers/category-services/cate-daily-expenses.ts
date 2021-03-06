import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the CateCraditCardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CateDailyExpensesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CateDailyExpensesProvider Provider');
  }

  getCateDailyExpenses(){
    let host = sessionStorage.getItem("host");

    return new Promise(resolve=>{
        this.http.get(host+'/services/category/getCateDailyExpensesAll')
        .subscribe(data=>{
        resolve(data);      
        console.log('CateDailyExpenses++++++'+data);
        
      }, err =>{
        console.error(err);      
        });
      });
    
    // return this.http.get('http://localhost/AppManagement/services/category/getCateCraditCard').subscribe(data=>{
    //   console.log(data);      
    
  }

}
