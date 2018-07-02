
import { Component, OnInit } from '@angular/core';
import { adminService } from "../../admin/admin.service";
import { categoryService } from "../../category/category.service";



@Component({
    selector: 'category-add',
    templateUrl: 'app/modules/category/views/categoryadd.html',
    styleUrls: ['app/modules/admin/admin.component.css']


})



export class categoryadd implements OnInit
{

    categories: any;
    errorMessage: string;



    constructor(private _adminService: adminService) { }


    ngOnInit(): void
    { 
        console.log("dashboard")
    }

}