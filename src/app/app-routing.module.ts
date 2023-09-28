import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDashboardComponent } from './pages/bank-dashboard/bank-dashboard.component';
import { TransferLogComponent } from './pages/transfer-log/transfer-log.component';

const routes: Routes = [
  {path: 'bankDashboard', component: BankDashboardComponent},
  {path: 'transferLog', component: TransferLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
