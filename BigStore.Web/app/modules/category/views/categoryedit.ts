
import { Component, OnInit } from '@angular/core';
import { adminService } from "../../admin/admin.service";
import { categoryService } from "../../category/category.service";



@Component({
    selector: 'category-edit',
    templateUrl: 'app/modules/category/views/categoryedit.html',
    styleUrls: ['app/modules/admin/admin.component.css']


})



export class categoryedit implements OnInit
{

     
    constructor(private _adminService: adminService) { }


    ngOnInit(): void
    { 
        console.log("dashboard")
    }

}