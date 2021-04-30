import { User } from './user';

export class Agenda {

  constructor() {} ;

  Id: number ;
  Subject: string = "";
  Location: string = "";
  Description: string = "";
  StartTime: Date;
  EndTime: Date;
  IsAllDay: boolean;
  user: User = new User();
}
