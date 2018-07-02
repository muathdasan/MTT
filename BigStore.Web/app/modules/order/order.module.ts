import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { orderService } from './order.service';
import { orders, trackorder} from './index';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
    imports: [FormsModule, CommonModule, SharedModule,
    RouterModule.forChild([
        { path: 'orders', component: orders }
  
    ])
  ],
  declarations: [
      orders, trackorder
  ],
  providers: [
      orderService,
     
  ],
  exports: [orders ]
})
export class OrderModule {}
