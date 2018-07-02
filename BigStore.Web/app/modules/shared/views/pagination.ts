
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pagination',
    templateUrl: 'app/modules/shared/views/pagination.html',
    styleUrls: ['app/views/storeManager.css']


})



export class pagination implements OnInit
{


    pages: any[];
    @Input() numpages: number;
    @Input() currentpage: number;
    @Output() onSelectPage: EventEmitter<any> = new EventEmitter();


 
    errorMessage: string;


  
    constructor() { }


    ngOnInit(): void
    {



        this.pages = [];
        for (var i = 1; i <= this.numpages; i++)
        {
            this.pages.push(i);
        }
        if (this.currentpage > this.numpages)
        {
            this.selectPage(this.numpages);
        }
    }
      
    noPrevious(): boolean
    {
        return this.currentpage === 1;
    }

    noNext(): boolean 
    {
        return this.currentpage === this.numpages;
    };

    isActive(page: any): boolean  
    {
        return this.currentpage === page;
    };

    selectPage(page: any): void
    {
        if (!this.isActive(page))
        {
            this.currentpage = page;
            this.onSelectPage.emit(page );

            //this.onSelectPage({ page: page });
        }
    };

    selectPrevious(): void
    {
        if (!this.noPrevious())
        {
            this.selectPage(this.currentpage - 1);
        }
    };

    selectNext(): void
    {
        if (!this.noNext())
        {
            this.selectPage(this.currentpage + 1);
        }
    };

}