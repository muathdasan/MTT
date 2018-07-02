
import { Component, OnInit, OnChanges } from '@angular/core';
import { productService } from "../../product/product.service";


@Component({
    selector: 'products-block',
    templateUrl: 'app/modules/product/views/products.html',
    styleUrls: ['app/views/storeManager.css']

})



export class products implements OnChanges, OnInit
{


    private products: any;
    private pager: any;
    private page: number;
    private totalPages: number;
    private pageSize: number;

    private errorMessage: string;

    constructor(private _productService: productService)
    {
        //  this.getProduct();
    }

    ngOnChanges()
    {
        ;
    }

    ngOnInit(): void
    {
        this.page = 1;
        this.totalPages = 2;
        this.pageSize = 3;
        this.getProduct();

    }

    onSelectPageGetProduct(evt)
    {
        this.page = evt;
        this.getProduct();

    }



    getProduct()
    {

        this._productService.getProducts(this.page, this.pageSize)
            .subscribe((result: any) =>
            {
                this.products = result.data;
                this.pager = result.pager;

                if (this.pager)
                {
                    this.totalPages = this.pager.totalPages;
                }



            },
            error => this.errorMessage = <any>error);
    }

}