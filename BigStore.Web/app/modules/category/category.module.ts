import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { categoryService } from './category.service';
import { categories, categorySidebar, categoryedit, categoryadd} from './index';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
    imports: [FormsModule, CommonModule, SharedModule,
    RouterModule.forChild([
          { path: 'category', component: categorySidebar }
  
    ])
  ],
  declarations: [
      categorySidebar,
      categoryadd,
      categoryedit,
      categories 
  ],
  providers: [
    categoryService,
     
  ],
  exports: [categorySidebar, categoryadd, categoryedit, categories ]
})
export class CategoryModule {}
