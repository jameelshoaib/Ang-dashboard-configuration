import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiEndpoint: string = "https://demos.devexpress.com/services/dashboard/api";

  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<any> {
    return this.httpClient.get(this.apiEndpoint);
  }
}