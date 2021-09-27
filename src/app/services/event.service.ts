import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IEventSchedule } from '../models/events';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventsUrl =
    'https://run.mocky.io/v3/82416402-1fb2-4b2b-adae-a21661b4c31a';

  constructor(private http: HttpClient) {}

  /**
   * Get TV Event Data
   */
  getEvents(): Observable<IEventSchedule> {
    return this.http.get<any>(this.eventsUrl);
  }
}
