import { NgModule, Injector, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { pagination, modal} from './index';

///* Feature Modules */

import { APP_BASE_HREF } from "@angular/common";


const routes: Routes = [
    { path: 'pagination', component: pagination }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        pagination,
        modal
    ],
    providers: [

    ],
    exports: [pagination, modal]
})

@Injectable()
export class SharedModule
{


    constructor()
    {
    }

}


