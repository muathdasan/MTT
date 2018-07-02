import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, URLSearchParams, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './product';

@Injectable()
export class productService
{
    private _productUrl = 'api/product';

    //api/product/Getproducts
    constructor(private _http: Http) { }



    getProducts(page: number, pageSize: number): Observable<Response>
    {

        let RequestOpt: RequestOptionsArgs = new RequestOptions();
        let Parameter: URLSearchParams = new URLSearchParams();


        if (page)
        { Parameter.set("page", page.toString()); }

        if (pageSize)
        {   Parameter.set("pageSize", pageSize.toString()); }
        RequestOpt.search = Parameter;


        return this._http.get("http://localhost/BigStore.Rest/api/product/getallproducts", RequestOpt)
            //this._http.get(`${this._productUrl}getallproducts`)
            // .map((response: Response) => <Response>response.json())
            .map((response: Response) =>
            {
                let pageResponse: any = {};
                pageResponse.data = <Response>response.json();
                if (response.headers.get('X-Pagination') != null)
                {
                    pageResponse.pager = JSON.parse(response.headers.get('X-Pagination'));
                }
                return pageResponse;
            })
            

            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

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



    findbycategoryid(id: string): Observable<Response>
    {


        let RequestOpt: RequestOptionsArgs = new RequestOptions();
        let Par: URLSearchParams = new URLSearchParams();

        Par.set("id", id);
        RequestOpt.search = Par;

        return this._http.get('http://localhost/BigStore.Rest/api/product/findbycategoryid', RequestOpt)
            .map((response: Response) => <Response>response.json())
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //});

            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    AddProduct(Product:any): Observable<Response>
    {
        return this._http.post('http://localhost/BigStore.Rest/api/product/AddProduct', Product);
    }

    private getCategories(): Observable<Response>
    {
        return this._http.get("http://localhost/BigStore.Rest/api/category/getallcategories")
            .map((response: Response) => <Response>response.json())
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //}); 
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    //getProduct(id: number): Observable<IProduct> {
    //    return this.getProducts()
    //        .map((products: IProduct[]) => products.find(p => p.productId === id));
    //}

    private handleError(error: Response)
    {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
