
import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { productService } from '../product.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
    selector: 'product-list',
    templateUrl: 'app/modules/product/views/productlist.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => productList),
            multi: true
        }
    ]
})


export class productList implements ControlValueAccessor
{

    products: any;
    @Output() onProductAdd: EventEmitter<any> = new EventEmitter<any>();
 
 
    selectedCatId: string;
    errorMessage: string;

    constructor(private _productService: productService) { }
   

    ngOnInit(): void
    {

        //FillData

        //this._productService.getCategories()
        //    .subscribe((categordata: any) =>
        //    {
        //        this.categories = categordata;
        //    },
        //    error => this.errorMessage = <any>error);

    }




    clickOnProductAdd(product: any): void
    {

        this.onProductAdd.emit(product);

        //if (product)
        //{
         
 
        //    this.cartProducts.push({
        //        Id: product.Id,
        //        nameEn: product.nameEn,
        //        //summary: product.summary,
        //        price: product.price,
        //        quantity: product.quantity,
        //        imageUrl: product.imageUrl
        //    });


        //    this.setAllProducts(this.cartProducts);
        //}

        //this.getTotalQuantity();
    }


    //setAllProducts(products: any): void
    //{
    //    localStorage.setItem('products', JSON.stringify(products));
    //}


    private getsizetype(type: number): string
    {
        switch (type) 
        {

            case 1:
                return 'pc';
            case 2:
                return 'g';
            case 3:
                return 'kg';
        }
    }

    public Getproducts(categoryId: string): void
    {
        this._productService.findbycategoryid(categoryId)
            .subscribe((productdata: any) =>
            {
                this.products = productdata;
            },
            error => this.errorMessage = <any>error);
    }



    private propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    writeValue(value: any)
    {
        //if (value != null)
        //{
        this.products = value;
        //}
    }

    registerOnChange(fn: any)
    {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any)
    {
    }
}