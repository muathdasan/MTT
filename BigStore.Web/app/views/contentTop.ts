
import { Component, OnInit, ViewChild } from '@angular/core';
import { productService } from '../modules/product/product.service';
import { productList } from '../modules/product/views/productlist'; 
@Component({
    selector: 'content-top',
    templateUrl: 'app/views/contentTop.html',
    providers: [productService]
})


export class ContentTop implements OnInit
{
    categories: any;
    products: any;
    cartProducts: any = {};

    selectedCatId: string;
    errorMessage: string;

    @ViewChild('product') public productList: productList;

    constructor(private _productService: productService) { }


    ngOnInit(): void
    { 

        this.cartProducts = [];
        //FillData

        this._productService.getcategories()
            .subscribe((categordata: any) =>
            {
                this.categories = categordata;

                let currentRequestIndex: number = this.categories.findIndex((i: any) => i.Id);

                if (currentRequestIndex != -1)
                {
                    let categoryId = this.categories[currentRequestIndex].Id

                    this.selectedCatId = categoryId;

                    this.productList.Getproducts(categoryId);

                }

            },
            error => this.errorMessage = <any>error);





    }

    private addProductToCart(product: any): void
    { 
        if (product)
        { 
            this.cartProducts.push({
                Id: product.Id,
                nameEn: product.nameEn,
                //summary: product.summary,
                price: product.price,
                quantity: product.quantity,
                imageUrl: product.imageUrl
            });

             this.setAllProducts(this.cartProducts);
        } 
        //this.getTotalQuantity();
    }


    private setAllProducts(products: any): void
    {
        localStorage.setItem('products', JSON.stringify(products));
    }

    private selectedCategorychange(selectedCatId: string)
    {
        this.selectedCatId = selectedCatId;
        this.productList.Getproducts(selectedCatId);

    }


}