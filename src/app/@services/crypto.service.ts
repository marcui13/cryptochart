import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private coincapBaseUrl = 'https://api.coincap.io/v2';

  constructor(private http: HttpClient) { }

  getCoincapCryptoAssets(): Observable<any> {
    return this.http.get<any>(`${this.coincapBaseUrl}/assets`, {});
  }
}
