import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/models/Cols';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer-service.service';



@Component({
  selector: 'app-bank-dashboard',
  templateUrl: './bank-dashboard.component.html',
  styleUrls: ['./bank-dashboard.component.scss']
})
export class BankDashboardComponent implements OnInit{



  customerList: Customer[] = [];
  cols!: Column[];


  constructor(private customerService: CustomerService) {}



  ngOnInit(): void {
    this.customerService.getClient().subscribe(
      backCustomerList => this.customerList = backCustomerList
    );
    this.cols = [
            { field: 'customerId', header: 'Customer Id' },
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'E-mail' },
            { field: 'address', header: 'Address' },
            { field: 'phoneNumber', header: 'Phone Number' }
        ];
  }



}
