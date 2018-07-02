
import { Component, OnInit, ViewChild } from '@angular/core';
import { modal } from '../modules/shared/index'
import { Cart } from '../index'

import { Router } from '@angular/router'; //CanActivate


@Component({
    selector: 'header-block',
    templateUrl: 'app/views/header.html'
})



export class Header implements OnInit
{
    selectedMenu: any;
    products: any = {};
    productInCart: number = 0;
    @ViewChild('cartModal') private cartModal: modal;
    @ViewChild('cartblock') private cartblock: Cart;

    constructor(private router: Router) { } 

    canActivate()
    {
        //// Check to see if a user has a valid JWT
        //if (tokenNotExpired())
        //{
        //    // If they do, return true and allow the user to load the home component
        //    return true;
        //}
        //// If not, they redirect them to the login page
        //this.router.navigate(['/login']);
        //return false;
    }


    ngOnInit(): void
    {
        console.log("Method not implemented.");
    }

    private onSelectedMenu(selecteMenu: string): void
    {
        this.selectedMenu = selecteMenu;
    }


    private onModuleShow(): void 
    {

        var items = localStorage.getItem('products')

        if (items == "")
        {
            this.cartblock.products = [];
            this.productInCart = 0;
            this.cartModal.show();
        } else
        {
            this.cartblock.products = JSON.parse(localStorage.getItem('products'));
            this.productInCart = this.cartblock.products.length;
            this.cartModal.show();
        }
    }


    private getUser(): any
    {
        return localStorage.getItem('username');
    }

    private logout(): any
    {

        this.router.navigate(['/home']);
        return localStorage.removeItem('username');

    }

}