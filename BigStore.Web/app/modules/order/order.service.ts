import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, URLSearchParams, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
 

@Injectable()
export class orderService {
    private _categoryUrl = 'api/order';

    constructor(private _http: Http) { }


    getorders(page: number, pageSize: number): Observable<Response>
    {

        let RequestOpt: RequestOptionsArgs = new RequestOptions();
        let Parameter: URLSearchParams = new URLSearchParams();


        if (page)
        { Parameter.set("page", page.toString()); }

        if (pageSize)
        { Parameter.set("pageSize", pageSize.toString()); }
        RequestOpt.search = Parameter;


        return this._http.get("http://localhost/BigStore.Rest/api/order/getallorders", RequestOpt)
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



    getallordersnotCompleted(page: number, pageSize: number): Observable<Response>
    {

        let RequestOpt: RequestOptionsArgs = new RequestOptions();
        let Parameter: URLSearchParams = new URLSearchParams();


        if (page)
        { Parameter.set("page", page.toString()); }

        if (pageSize)
        { Parameter.set("pageSize", pageSize.toString()); }
        RequestOpt.search = Parameter;


        return this._http.get("http://localhost/BigStore.Rest/api/order/getallordersnotCompleted", RequestOpt)
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


    getrecentorders(): Observable<Response>
    {

        return this._http.get("http://localhost/BigStore.Rest/api/order/getrecentorders")
            .map((response: Response) => <Response>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
