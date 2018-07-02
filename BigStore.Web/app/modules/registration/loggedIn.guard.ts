import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { registrationService } from './registration.service';

@Injectable()
export class LoggedInGuard implements CanActivate
{
    constructor(private authService: registrationService) { }

    canActivate(): boolean
    {
        return this.authService.isLoggedIn();

    }

}