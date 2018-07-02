
import { Component, OnInit } from '@angular/core';
import { adminService } from "../../admin/admin.service";
import { categoryService } from "../../category/category.service";
import { productService } from "../../product/product.service";


@Component({
    selector: 'product-add',
    templateUrl: 'app/modules/product/views/productadd.html',
    styleUrls: ['app/modules/admin/admin.component.css']
})



export class productadd implements OnInit
{

    product: any;
    isAddProduct: boolean;
    selectedCategoryId: number;
    categories: any;
    errorMessage: string;



    constructor(private _adminService: adminService, private _productService: productService) { }


    ngOnInit(): void
    {


        this._adminService.getcategories()
            .subscribe((categorydata: any) =>
            {
                this.categories = categorydata;
            },
            error => this.errorMessage = <any>error);


        console.log("dashboard")
    }


    public AddRequest(): void
    {

        //if (!this.isValidRequest())
        //    return;

        this._productService.AddProduct(this.product).subscribe((result: any) =>
        {
            this.isAddProduct = true;
        });

    }

    private uploadImage(event: any): void
    {




    }
}