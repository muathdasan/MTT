
import { Component, OnInit } from '@angular/core';
import { adminService } from "../../admin/admin.service";
import { categoryService } from "../../category/category.service";



@Component({
    selector: 'product-edit',
    templateUrl: 'app/modules/product/views/productedit.html',
    styleUrls: ['app/modules/admin/admin.component.css']


})

 

export class productedit implements OnInit
{

    products: any;
    categories: any;
    errorMessage: string;



    constructor(private _adminService: adminService) { }


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

}