import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule  ,ReactiveFormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';   
import { LoginComponent, RegisterComponent , registrationService } from './index'

import { LoggedInGuard } from './loggedIn.guard';

@NgModule({

    declarations: [LoginComponent, RegisterComponent],
    imports: [FormsModule, CommonModule,
        RouterModule.forChild([
            {
                path: 'login', component: LoginComponent
            },
            { path: 'register', component: RegisterComponent }
        ])
    ], 
    providers: [registrationService ],
    exports: [LoginComponent, RegisterComponent]
})
export class RegistrationModule { }
