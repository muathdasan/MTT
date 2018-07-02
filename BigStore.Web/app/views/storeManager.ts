
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'store-Manager',
    templateUrl: 'app/views/storeManager.html',
    styleUrls: ['app/views/storeManager.css']

})



export class storeManager implements OnInit
{

    private block: any;
    private blockTitle: any;


    ngOnInit(): void
    {
        this.block = 0; //dashbord as defult
        this.blockTitle = "Dashboard";

        console.log("Method not implemented.");
    }



    onsidebarchange(sidebar: number): void
    {
        this.block = sidebar;

        switch (sidebar)
        {
            case 0:
                this.blockTitle = "Dashboard";
                break;
            case 1:
                this.blockTitle = "All Products";
                break;
            case 2:
                this.blockTitle = "Add Product";
                break;
            case 3:
                this.blockTitle = "Edit Product";
            case 4:
                this.blockTitle = "All Orders";
                break;
            case 5:
                this.blockTitle = "Track Orders";
                break;
            case 6:
                this.blockTitle = "Add Orde";
                break;
            case 7:
                this.blockTitle = "Edit Order";
                break;
            case 8:
                this.blockTitle = "All Categories";
                break;
            case 9:
                this.blockTitle = "Add Category";
                break;
            case 10:
                this.blockTitle = "Edit Category";
                break;
            default:
                this.blockTitle = "Dashboard";
                break;
        }
    }
}