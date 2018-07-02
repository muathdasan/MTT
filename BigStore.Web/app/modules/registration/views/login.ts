
import { Component, OnInit } from '@angular/core';
import { registrationService } from "../../registration/registration.service";

import { Router } from '@angular/router';


@Component({
    selector: 'login-component',
    templateUrl: 'app/modules/registration/views/login.html',
})



export class LoginComponent  
{


    message: string;

    constructor(public _registrationService: registrationService, private router: Router)
    {
        this.message = '';
    }

    login(username: string, password: string): boolean
    {
        this.message = '';
        if (!this._registrationService.authenticate(username, password))
        {
            this.router.navigate(['/home']);

            return true;
        }
        else
        {
            // this.router.navigate(['./login']);
            // this.message = 'Username or password is incorrect.';
            setTimeout(function ()
            {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    }



    canActivate(): boolean
    {
        if (localStorage.getItem('auth_token'))
        {
            return true;
        }

        return false;
    }


    //logout(): boolean
    //{
    //    this._registrationService.logout();
    //    return false;
    //}


}