import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
 

@Injectable()
export class categoryService {
    private _categoryUrl = 'api/category';

    constructor(private _http: Http) { }


    getcategories(): Observable<Response>
    {

        return this._http.get("http://localhost/BigStore.Rest/api/category/getallcategories")
            //this._http.get(`${this._productUrl}getallproducts`)
            .map((response: Response) => <Response>response.json())
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //});

            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }



    //getProducts(): Observable<IProduct[]> {
    //    return this._http.get(this._productUrl)
    //        .map((response: Response) => <IProduct[]> response.json())
    //        .do(data => console.log('All: ' +  JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    //getProduct(id: number): Observable<IProduct> {
    //    return this.getProducts()
    //        .map((products: IProduct[]) => products.find(p => p.productId === id));
    //}

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
