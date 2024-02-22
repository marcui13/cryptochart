import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CryptoService } from 'src/app/@services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  @ViewChild('dt') dataTable!: Table;

  public coinCryptoAssetsArray: Array<any> = [];
  public searchText: string = '';
  public filteredCoins: any[] = [];

  /*************************************/
  /************constructor**************/
  /*************************************/
  constructor(private cryptoService: CryptoService) { }

  /*************************************/
  /************ngOnInit*****************/
  /*************************************/
  ngOnInit(): void {
    this.getMarkets();
  }

  private getMarkets(): void {
    this.cryptoService.getCoincapCryptoAssets().subscribe(
      (resp) => {
        if (Array.isArray(resp.data)) {
          this.coinCryptoAssetsArray = resp.data;
          console.log(this.coinCryptoAssetsArray);
        } else {
          console.error('Los datos recibidos no son un arreglo:', resp.data);
        }
      },
      (error) => {
        console.error('Error al obtener CoincapCryptoAssets:', error);
      }
    );
  }

  getSeverity(changePercent24Hr: number): string {
    if (changePercent24Hr > 0) {
      return 'success';
    } else if (changePercent24Hr < 0) {
      return 'danger';
    } else if (changePercent24Hr === 0) {
      return 'info';
    } else {
      return 'info';
    }
  }

  filterTable() {
    this.dataTable.filter(this.searchText, 'name', 'contains');
    this.filteredCoins = this.dataTable.filteredValue || [];
    console.log(this.filteredCoins);
  }

  convertToTwoDecimalString(input: string): string {
    const numberValue = parseFloat(input);
    if (!isNaN(numberValue)) {
      const roundedNumber = Math.round(numberValue * 100) / 100;
      const roundedString = roundedNumber.toFixed(2);
      var roundedNumberSign = roundedNumber > 0 ? '+' : '';
      return roundedNumberSign + roundedString + ' %';
    } else {
      return 'Invalid number';
    }
  }
}
