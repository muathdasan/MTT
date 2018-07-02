
import { Component, OnInit } from '@angular/core';
import { orderService } from "../../order/order.service";

@Component({
    selector: 'orders-block',
    templateUrl: 'app/modules/order/views/orders.html',
    styleUrls: ['app/views/storeManager.css']

})



export class orders implements OnInit
{

    private orders: any;
    private pager: any;
    private page: number;
    private totalPages: number;
    private pageSize: number;
    errorMessage: string;

    constructor(private _orderService: orderService) { }


    ngOnInit(): void
    {
        this.page = 1;
        this.totalPages = 2;
        this.pageSize = 1;
        this.getorders();
    }

     
    getorders()
    {

        this._orderService.getorders(this.page, this.pageSize)
            .subscribe((result: any) =>
            {
                this.orders = result.data;
                this.pager = result.pager;

                if (this.pager)
                {
                    this.totalPages = this.pager.totalPages;
                }



            },
            error => this.errorMessage = <any>error);
    }



    onSelectPageGetOrder(evt)
    {
        this.page = evt;
        this.getorders();

    }

    private getStatus(type: number): string
    {
        switch (type) 
        {

            case 1:
                return 'New';
            case 2:
                return 'Pending';
            case 3:
                return 'Delivered';
        }
    }

}