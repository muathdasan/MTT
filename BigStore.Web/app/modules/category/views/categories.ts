
import { Component, OnInit } from '@angular/core';
import { productService } from "../../product/product.service";
import { adminService } from "../../admin/admin.service";

@Component({
    selector: 'categories-block',
    templateUrl: 'app/modules/category/views/categories.html',
    styleUrls: ['app/views/storeManager.css']


})



export class categories implements OnInit
{
      
    categories: any;
    errorMessage: string;



    constructor(private _adminService: adminService) { }


    ngOnInit(): void
    {

      
        this._adminService.getcategories()
                .subscribe((data: any) =>
                {
                    this.categories = data;
                },
            error => this.errorMessage = <any>error);


        console.log("dashboard")
    }


 

 

}