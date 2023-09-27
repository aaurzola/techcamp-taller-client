import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankDashboardComponent } from './pages/bank-dashboard/bank-dashboard.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TransferLogComponent } from './pages/transfer-log/transfer-log.component';

@NgModule({
  declarations: [
    AppComponent,
    BankDashboardComponent,
    CustomerDashboardComponent,
    FooterComponent,
    TransferLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
