import { NgModule, Injector, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, HomeComponent, ContactComponent, Advertising, Header, Footer, ContentTop, storeManager, Cart } from './index';

///* Feature Modules */
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/Category/Category.module';
import { OrderModule } from './modules/order/order.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { AdminModule } from './modules/admin/admin.module';
import { SharedModule } from './modules/shared/shared.module';
import { APP_BASE_HREF } from "@angular/common";
import { LoggedInGuard } from './modules/registration/loggedIn.guard';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'storeManager', component: storeManager,
        children: [
            { path: 'dashboard', component: HomeComponent }
            ///:mode
        ],
        canActivate: [LoggedInGuard]

        //{ path: 'dashboard', component: dashboard, outlet: "test" }
    }

    //{ path: 'about', component: AboutComponent },
    //{ path: 'contact', component: ContactComponent },
    //{ path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        ProductModule,
        CategoryModule,
        OrderModule,
        RegistrationModule,
        AdminModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        storeManager,
        Header,
        Advertising,
        Footer,
        ContentTop,
        Cart
    ],
    bootstrap: [AppComponent ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/BigStore.Web/' }
        , LoggedInGuard,
    ]
})

@Injectable()
export class AppModule
{

    static injector: Injector;
    constructor(private injector: Injector)
    {
        AppModule.injector = injector;
    }

}


