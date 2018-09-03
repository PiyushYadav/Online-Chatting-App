import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class IoDataProvider {

  constructor(private afAuth: AngularFireAuth) {
    //this.updateData();
  }

  data=[
  {
    name: 'Charlie',
    status:'Hey there!',
    
    chatData:[
    {
      by:'me',
      date:20,
      month:6,
      year:18,
      timeHour:1,
      timeMin:15,
      TimeStamp:8600000000000000,//for js time in ms
      msg:"Hello! What are you doing. How are you?",
      seen:true,
    },
    {
      by:'you',
      date:20,
      month:6,
      year:18,
      timeHour:1,
      timeMin:15,
      TimeStamp:8600000000000000,//for js time in ms
      msg:"Hi",
      seen:true
    }
    ],
    notSeen: 0,
    lastDate:20,
    lastMonth:6,
    lastYear:18,
    lastHour:3,
    lastMin:45,
    lastAMPM: 'AM',
    LastTimeStamp:8600000000000000,//for js time in ms
    active:true
  },

  {
    name: 'Foxtrot',
    status:'Hey there!',
    chatData:[
    {
      by:'me',
      date:20,
      month:6,
      year:18,
      timeHour:1,
      timeMin:15,
      TimeStamp:8600000000000000,//for js time in ms
      msg:"Hi",
      seen:false
    },
    {
      by:'you',
      date:20,
      month:6,
      year:18,
      timeHour:12,
      timeMin:15,
      TimeStamp:8600000000000000,//for js time in ms
      msg:"Hello!",
      seen:true
    }
    ],

    notSeen: 1,
    lastDate:20,
    lastMonth:6,
    lastYear:18,
    lastHour:5,
    lastMin:50,
    lastAMPM: 'PM',
    TimeStamp:8600000000000000,//for js time in ms
    active:false
  }
  ];

  getData(){
  	return this.data;
  }

//   getData(){
//     let a = this.afAuth.authState;
//     a.subscribe((data:any)=>{
//     })
//   	return a;
//   }

//   updateData(){
//   	console.log("Data Updated");
//   }
}
