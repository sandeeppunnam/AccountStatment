import { Routes } from '@angular/router';
import { AccountManagementModule } from './accountManagement/account-management.module';

export const routes: Routes = [
    {
        path:'AccountManagementModule',
        loadChildren:() => import("./accountManagement/account-management.module").then(m=>m.AccountManagementModule)
    }
];
