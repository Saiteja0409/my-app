import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';

const routes: Routes = [
  {path:'upi-payment', component:UpiPaymentComponent},
  {path:'card-payment', component:CardPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
