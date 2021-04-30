import { Injectable } from '@angular/core';

import {
  CalendarSchedulerEvent,
  CalendarSchedulerEventStatus,
  CalendarSchedulerEventAction
} from 'angular-calendar-scheduler';
import {
  addDays,
  startOfHour,
  addHours,
  subHours,
  setHours,
  subMinutes,
  addMinutes
} from 'date-fns';

export class Data {
    text: string;
    startDate: string;
    endDate: string;
	recurrenceRule?: string;
}

export class Location {
    id: string;
    offset: number;
    title: string;
}

export const data:Data[] = [{
    text: "Stand-up meeting",
    startDate: "2021-05-24T15:30:00.000Z",
    endDate: "2021-05-24T15:45:00.000Z",
    recurrenceRule: "FREQ=DAILY"
}, {
    text: "Book Flights to San Fran for Sales Trip",
    startDate: "2021-05-26T18:00:00.000Z",
    endDate: "2021-05-26T19:00:00.000Z"
}, {
    text: "New Brochures",
    startDate: "2021-05-28T18:30:00.000Z",
    endDate: "2021-05-28T18:45:00.000Z"
}, {
    text: "Website Re-Design Plan",
    startDate: "2021-05-25T12:30:00.000Z",
    endDate: "2021-05-25T13:30:00.000Z"
}, {
    text: "Book Flights to San Fran for Sales Trip",
    startDate: "2021-05-26T16:00:00.000Z",
    endDate: "2021-05-26T15:00:00.000Z"
}, {
    text: "Prepare 2021 Marketing Plan",
    startDate: "2021-05-24T07:00:00.000Z",
    endDate: "2021-05-24T09:30:00.000Z"
}, {
    text: "Launch New Website",
    startDate: "2021-05-26T08:00:00.000Z",
    endDate: "2021-05-26T10:00:00.000Z"
}, {
    text: "Submit New Website Design",
    startDate: "2021-05-27T09:30:00.000Z",
    endDate: "2021-05-27T11:00:00.000Z"
}, {
    text: "Upgrade Server Hardware",
    startDate: "2021-05-28T06:30:00.000Z",
    endDate: "2021-05-28T08:00:00.000Z"
}, {
    text: "Approve New Online Marketing Strategy",
    startDate: "2021-05-28T11:00:00.000Z",
    endDate: "2021-05-28T12:30:00.000Z"
}, {
    text: "Final Budget Review",
    startDate: "2021-05-25T09:00:00.000Z",
    endDate: "2021-05-25T10:35:00.000Z"
}];

export const locations = ['Europe/London', 'Europe/Berlin', 'Europe/Helsinki'];

@Injectable()
export class Service {
	getLocations() {
		return locations;
	}
    getData() {
        return data;
    }


    getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
      const events = [
          <CalendarSchedulerEvent>{
              id: '1',
              start: addDays(startOfHour(new Date()), 1),
              end: addDays(addHours(startOfHour(new Date()), 1), 1),
              title: 'Event 1',
              content: 'IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'danger' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false,
              draggable: true,
              resizable: {
                  beforeStart: true,
                  afterEnd: true
              }
          },
          <CalendarSchedulerEvent>{
              id: '12',
              start: subHours(addDays(startOfHour(new Date()), 1), 1),
              end: subHours(addDays(addHours(startOfHour(new Date()), 1), 1), 1),
              title: 'Event 12',
              content: 'IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'danger' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false,
              draggable: true,
              resizable: {
                  beforeStart: true,
                  afterEnd: true
              }
          },
          <CalendarSchedulerEvent>{
              id: '2',
              start: addDays(startOfHour(new Date()), 2),
              end: subMinutes(addDays(addHours(startOfHour(new Date()), 2), 2), 15),
              title: 'Event 2',
              content: 'LESS IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'warning' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '22',
              start: subHours(addDays(startOfHour(new Date()), 2), 1),
              end: subHours(addDays(addHours(startOfHour(new Date()), 1), 2), 1),
              title: 'Event 22',
              content: 'LESS IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'warning' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '3',
              start: addDays(startOfHour(new Date()), 3),
              end: addDays(addHours(startOfHour(new Date()), 3), 3),
              title: 'Event 3',
              content: 'NOT IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '32',
              start: subHours(addDays(startOfHour(new Date()), 3), 1),
              end: subHours(addDays(addHours(startOfHour(new Date()), 1), 3), 1),
              title: 'Event 32',
              content: 'NOT IMPORTANT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '4',
              start: startOfHour(addHours(new Date(), 2)),
              end: addHours(startOfHour(addHours(new Date(), 2)), 2),
              title: 'Event 4',
              content: 'TODAY EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '5',
              start: addDays(startOfHour(setHours(new Date(), 6)), 2),
              end: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 1),
              title: 'Event 5',
              content: 'EARLY EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '51',
              start: addDays(startOfHour(setHours(new Date(), 6)), 2),
              end: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 1),
              title: 'Event 51',
              content: 'EARLY EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '52',
              start: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 1),
              end: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 2),
              title: 'Event 52',
              content: 'EARLY EVENT WITH LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG DESCRIPTION',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '53',
              start: addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 2),
              end: addMinutes(addHours(addDays(startOfHour(setHours(new Date(), 6)), 2), 2), 30),
              title: 'Event 53',
              content: 'EARLY EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '6',
              start: startOfHour(setHours(new Date(), 22)),
              end: addHours(startOfHour(setHours(new Date(), 22)), 10),
              title: 'Event 6',
              content: 'TWO DAYS EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '7',
              start: addDays(startOfHour(setHours(new Date(), 14)), 4),
              end: addDays(addDays(startOfHour(setHours(new Date(), 14)), 4), 2),
              title: 'Event 7',
              content: 'THREE DAYS EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          },
          <CalendarSchedulerEvent>{
              id: '8',
              start: startOfHour(addHours(new Date(), 2)),
              end: addHours(startOfHour(addHours(new Date(), 2)), 3),
              title: 'Event 8',
              content: 'CONCURRENT EVENT',
              color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
              actions: actions,
              status: 'ok' as CalendarSchedulerEventStatus,
              isClickable: true,
              isDisabled: false
          }
      ];

      return new Promise(resolve => setTimeout(() => resolve(events), 3000));
  }
}
