import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private eventsService: EventService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe((data) => {
      console.log(data, 'sdata');
    });
  }
}
