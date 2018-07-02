
import { Component, OnInit } from '@angular/core';
import { adminService } from "../../admin/admin.service";
import { orderService } from "../../order/order.service";


@Component({
    selector: 'dashboard-block',
    templateUrl: 'app/modules/admin/views/dashboard.html',
    styleUrls: ['app/views/storeManager.css']

})



export class dashboard implements OnInit
{
    totalOfOrders: string;
    totalOfProduct: string;
    totalOfCustomer: string;
    orders: any;
    errorMessage: string;


    constructor(private _adminService: adminService, private _orderService: orderService)
    {
        //  this.getProduct();
    }

    ngOnInit(): void
    {
        this.getrecentorders();
        this.getTotalOforders();
        this.getTotalOfProduct();
        this.getTotalOfCustomer();

        console.log("dashboard")
    }



    getTotalOforders()
    {
        this._adminService.totaloforders()
            .subscribe((data: any) =>
            {
                this.totalOfOrders = data;
            },
            error => this.errorMessage = <any>error);
        
    }



    getTotalOfProduct()
    {
        this._adminService.totalofproduct()
            .subscribe((data: any) =>
            {
                this.totalOfProduct = data;
            },
            error => this.errorMessage = <any>error);

    }


    getTotalOfCustomer()
    {
        this._adminService.totalofcustomer()
            .subscribe((data: any) =>
            {
                this.totalOfCustomer = data;
            },
            error => this.errorMessage = <any>error);

    }



    getrecentorders()
    {

        this._orderService.getrecentorders()
            .subscribe((data: any) =>
            {
                this.orders = data;
            },
            error => this.errorMessage = <any>error);


       
    }

}