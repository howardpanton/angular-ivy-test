export interface IEventSchedule {
  currentTime: Date;
  channelIds: IChannelID[];
  events: Event[];
}

export interface IChannelID {
  id: number;
  name: string;
}

export interface IEvent {
  name: string;
  start: Date;
  end: Date;
  tags: string[];
  channelIds: number[];
}
