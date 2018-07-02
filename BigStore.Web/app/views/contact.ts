
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'contact-component',
    templateUrl: 'app/views/contact.html' 
})



export class ContactComponent implements OnInit
{

    private block: any;

    ngOnInit(): void
    {
        console.log("Method not implemented.");
    }



    onsidebarchange(sidebar: number): void
    {
        this.block = sidebar;
    }
}