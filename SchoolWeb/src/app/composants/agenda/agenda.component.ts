import { SchoolService } from 'src/app/services/school.service';
import { Agenda } from './../../models/agenda';
import { Location } from './../../app.service';
import { ActiveSlides } from './../carousel/carousel.component';
import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {



  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
  }];

  public data1: Object[] = [

      {
          Id: 1,
          Subject: 'RUSSIA vs SAUDI ARABIA',
          Description: 'Group A',
          StartTime: new Date(2020, 1, 24, 15, 0),
          EndTime: new Date(2020, 1, 24, 17, 0),
          StartTimezone: 'Europe/Moscow',
          EndTimezone: 'Europe/Moscow',
          nom:"test",
          City: 'Moscow',
          //CategoryColor: '#1aaa5',
          GroupId: 1
      }, {
          Id: 2,
          Subject: 'EGYPT vs URUGUAY',
          Description: 'Group A',
          StartTime: new Date(2020, 1, 25, 12, 0),
          EndTime: new Date(2020, 1, 25, 14, 0),
          StartTimezone: 'Asia/Yekaterinburg',
          EndTimezone: 'Asia/Yekaterinburg',
          nom:"test",
          City: 'Ekaterinburg',
          //CategoryColor: '#1aaa55',
          GroupId: 1
      }
  ] ;

  data3= [
    {

      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2018, 1, 11, 9, 30),
      EndTime: new Date(2018, 1, 11, 11, 0),
      //CategoryColor: '#40A497',
      Description: 'nom:  tel:',
      IsAllDay: true
  }, {
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
      Location: 'Moscow',
      //CategoryColor: '#357cd2'
  }, {
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
      //CategoryColor: '#7fa900'
  }, {
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
      //CategoryColor: '#ea7a57'
  }, {
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      //CategoryColor: '#00bdae'
  }, {
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
      //CategoryColor: '#f57f17'
  }, {
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2018, 1, 16, 11, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      //CategoryColor: '#1aaa55'
  }, {
      Subject: 'Life on Mars',
      StartTime: new Date(2018, 1, 17, 9, 0),
      EndTime: new Date(2018, 1, 17, 10, 0),
      //CategoryColor: '#357cd2'
  }, {
      Subject: 'Alien Civilization',
      StartTime: new Date(2018, 1, 19, 11, 0),
      EndTime: new Date(2018, 1, 19, 13, 0),
      //CategoryColor: '#7fa900'
  }, {
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2018, 1, 21, 11, 0),
      EndTime: new Date(2018, 1, 21, 13, 0),
      //CategoryColor: '#ea7a57'
  }, {
      Subject: 'Best Photography 2018',
      StartTime: new Date(2018, 1, 22, 9, 30),
      EndTime: new Date(2018, 1, 22, 11, 0),
      //CategoryColor: '#00bdae'
  }, {
      Subject: 'Smarter Puppies',
      StartTime: new Date(2018, 1, 9, 10, 0),
      EndTime: new Date(2018, 1, 9, 11, 30),
      //CategoryColor: '#f57f17'
  }, {
      Subject: 'Myths of Andromeda Galaxy',
      StartTime: new Date(2018, 1, 7, 10, 30),
      EndTime: new Date(2018, 1, 7, 12, 30),
      //CategoryColor: '#1aaa55'
  }, {
      Subject: 'Aliens vs Humans',
      StartTime: new Date(2018, 1, 5, 10, 0),
      EndTime: new Date(2018, 1, 5, 11, 30),
      //CategoryColor: '#357cd2'
  }, {
      Subject: 'Facts of Humming Birds',
      StartTime: new Date(2018, 1, 20, 9, 30),
      EndTime: new Date(2018, 1, 20, 11, 0),
      //CategoryColor: '#7fa900'
  }, {
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 23, 11, 0),
      EndTime: new Date(2018, 1, 23, 13, 0),
      //CategoryColor: '#ea7a57'
  }, {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      StartTime: new Date(2018, 1, 12, 5, 30),
      EndTime: new Date(2018, 1, 12, 7, 30),
      //CategoryColor: '#00bdae'
  }, {
      Subject: 'Space Galaxies and Planets',
      StartTime: new Date(2018, 1, 12, 17, 0),
      EndTime: new Date(2018, 1, 12, 18, 30),
      //CategoryColor: '#f57f17'
  }, {
      Subject: 'Lifecycle of Bumblebee',
      StartTime: new Date(2018, 1, 15, 6, 0),
      EndTime: new Date(2018, 1, 15, 7, 30),
      //CategoryColor: '#7fa900'
  }, {
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 15, 16, 0),
      EndTime: new Date(2018, 1, 15, 18, 0),
      //CategoryColor: '#ea7a57'
  }];

  public selectedDate: Date = new Date(2018, 1, 11);
  public currentView: View = 'Month';



  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData,

   /*    fields: {
      id: 'Id',
      subject: { name: 'EventName' },
      isAllDay: { name: 'IsAllDay' },
      startTime: { name: 'StartTime' },
      endTime: { name: 'EndTime' },
      description: { name: 'Description'},

     } */

  }


  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
   // console.log("test "+JSON.stringify(this.data3));
    for(let d of this.data3){
      const formData = new FormData() ;
      formData.append('agenda', JSON.stringify(d));
      this.schoolService.postAgenda(formData)
      .subscribe(data =>{

      },err=>{
        console.log(err);
      });
    }

  }


}

export let scheduleData: Object[] = [
  {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2018, 1, 11, 9, 30),
      EndTime: new Date(2018, 1, 11, 11, 0),
      //CategoryColor: '#40A497',
      Description: 'nom:  tel:',
      IsAllDay: true
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
      Location: 'Moscow',
      //CategoryColor: '#357cd2'
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
      //CategoryColor: '#7fa900'
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
      //CategoryColor: '#ea7a57'
  }, {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      //CategoryColor: '#00bdae'
  }, {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
      //CategoryColor: '#f57f17'
  }, {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2018, 1, 16, 11, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      //CategoryColor: '#1aaa55'
  }, {
      Id: 8,
      Subject: 'Life on Mars',
      StartTime: new Date(2018, 1, 17, 9, 0),
      EndTime: new Date(2018, 1, 17, 10, 0),
      //CategoryColor: '#357cd2'
  }, {
      Id: 9,
      Subject: 'Alien Civilization',
      StartTime: new Date(2018, 1, 19, 11, 0),
      EndTime: new Date(2018, 1, 19, 13, 0),
      //CategoryColor: '#7fa900'
  }, {
      Id: 10,
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2018, 1, 21, 11, 0),
      EndTime: new Date(2018, 1, 21, 13, 0),
      //CategoryColor: '#ea7a57'
  }, {
      Id: 11,
      Subject: 'Best Photography 2018',
      StartTime: new Date(2018, 1, 22, 9, 30),
      EndTime: new Date(2018, 1, 22, 11, 0),
      //CategoryColor: '#00bdae'
  }, {
      Id: 12,
      Subject: 'Smarter Puppies',
      StartTime: new Date(2018, 1, 9, 10, 0),
      EndTime: new Date(2018, 1, 9, 11, 30),
      //CategoryColor: '#f57f17'
  }, {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      StartTime: new Date(2018, 1, 7, 10, 30),
      EndTime: new Date(2018, 1, 7, 12, 30),
      //CategoryColor: '#1aaa55'
  }, {
      Id: 14,
      Subject: 'Aliens vs Humans',
      StartTime: new Date(2018, 1, 5, 10, 0),
      EndTime: new Date(2018, 1, 5, 11, 30),
      //CategoryColor: '#357cd2'
  }, {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      StartTime: new Date(2018, 1, 20, 9, 30),
      EndTime: new Date(2018, 1, 20, 11, 0),
      //CategoryColor: '#7fa900'
  }, {
      Id: 16,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 23, 11, 0),
      EndTime: new Date(2018, 1, 23, 13, 0),
      //CategoryColor: '#ea7a57'
  }, {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      StartTime: new Date(2018, 1, 12, 5, 30),
      EndTime: new Date(2018, 1, 12, 7, 30),
      //CategoryColor: '#00bdae'
  }, {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      StartTime: new Date(2018, 1, 12, 17, 0),
      EndTime: new Date(2018, 1, 12, 18, 30),
      //CategoryColor: '#f57f17'
  }, {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      StartTime: new Date(2018, 1, 15, 6, 0),
      EndTime: new Date(2018, 1, 15, 7, 30),
      //CategoryColor: '#7fa900'
  }, {
      Id: 20,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 15, 16, 0),
      EndTime: new Date(2018, 1, 15, 18, 0),
      //CategoryColor: '#ea7a57'
  }
];

