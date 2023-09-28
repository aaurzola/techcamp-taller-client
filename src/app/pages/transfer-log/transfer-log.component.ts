import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/models/Cols';
import { Transfer } from 'src/app/models/transfer';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer-log',
  templateUrl: './transfer-log.component.html',
  styleUrls: ['./transfer-log.component.scss']
})
export class TransferLogComponent implements OnInit{

  cols!: Column[];
  transferHistory: Transfer[] = [];

  constructor(private transferService: TransferService) {}


  ngOnInit(): void {
    this.transferService.getAlltransferLog().subscribe(
      transferList => this.transferHistory = transferList
    );

    this.cols = [
            { field: 'transferId', header: 'Id' },
            { field: 'transferDate', header: 'Date' },
            { field: 'source', header: 'Source Account' },
            { field: 'destination', header: 'Destination account' },
            {field: 'amount', header: 'Amount'}
        ];
  }



}
