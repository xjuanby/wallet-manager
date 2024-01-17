import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { MyWalletComponent } from './components/my-wallet/my-wallet.component';

export const routes: Routes = [
    { path: '', redirectTo:'/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path: 'my-wallet', component: MyWalletComponent}
];
