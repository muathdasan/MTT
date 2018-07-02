

import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, URLSearchParams, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';




@Injectable()
export class registrationService
{

    constructor(private _http: Http) { }


    /*login(user: string, password: string): boolean {
     if (user === 'user' && password === 'password') {
     localStorage.setItem('username', user);
     return true;
     }
    
    return false;
     }*/



    //login(user: any): boolean
    //{
    //    localStorage.setItem('username', user);
    //    return true;
    //}
     
    //logout(): any
    //{
    //    localStorage.removeItem('username');
    //}
     

    getUser(): any
    {
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean
    {
        return this.getUser() !== null;
    }




    authenticate(username: string, password: string): boolean
    {
        //if (username === 'mshabib' && password === 'Passw0rd')
        //{
        //    localStorage.setItem('username', 'mshabib');
        //     return true;
        //}

        // return false;

        let RequestOpt: RequestOptionsArgs = new RequestOptions();
        let Par: URLSearchParams = new URLSearchParams();

        Par.set("username", username);
        Par.set("password", password);
        RequestOpt.search = Par;

        this._http.get('http://localhost/BigStore.Rest/api/user/authenticate', RequestOpt)
            .map((response: Response) => <Response>response.json())
            .subscribe((result: any) =>
            {
                let token = result;//token
                if (token)
                {
                    localStorage.setItem('username', username);
                    localStorage.setItem('currentUser', token);

                    return true;
                } else
                {
                    return false;
                }
            }
            , err => console.log(err)
            );



        //  .catch(this.handleError);

        /*  .map((response: Response) =>
          {
              let token = response.json() && response.json();//token
              if (token)
              {
                  localStorage.setItem('username', username);
                  localStorage.setItem('currentUser', token);

                  return true;
              } else
              {
                  return false;
              }
          })
          .catch(this.handleError);*/

        return null;
        /*    localStorage.setItem(JSON.stringify({ "currentUser": username, "user": token }));*/


        // .catch(this.handleError);
    }


    /* public runLoginProcess(username: String, password: String): Observable<boolean> {
 
         let body = { "username": username, "password": password };
         let head = new Headers();
         head.append("Content-Type", "application/json");
         head.append("Accept", "application/json");
 
         // RUN THE HTTP CALL AN IF IT WORKS, SEND TRUE AND ERROR IN CASE OF AN ERROR BACK
         return this.http.post("<PATH TO MY SERVICE>", body)
             .map(response => {
                 let token = response.json() && response.json().token;
                 if (token) {
                     localStorage.setItem('currentUser', JSON.stringify({ "username": username, "token": token }))
                     return true;
                 } else {
                     return false;
                 }
             }
             )
             .catch(err => Observable.of(false)); //this line isn't needed, but just if you don't want to error handle at the caller's subscription, you can intercept them here and map to a false value.
     }
 
 */



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






    private handleError(error: Response)
    {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
