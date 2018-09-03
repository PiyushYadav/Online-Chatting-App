var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var IoDataProvider = /** @class */ (function () {
    function IoDataProvider() {
        this.data = [
            {
                name: 'Charlie',
                status: 'Hey there! I am using Hey!',
                chatData: [
                    {
                        by: 'me',
                        date: 20,
                        month: 6,
                        year: 18,
                        timeHour: 1,
                        timeMin: 15,
                        TimeStamp: 8600000000000000,
                        msg: "Hello! What are you doing. How are you?",
                        seen: true,
                    },
                    {
                        by: 'you',
                        date: 20,
                        month: 6,
                        year: 18,
                        timeHour: 1,
                        timeMin: 15,
                        TimeStamp: 8600000000000000,
                        msg: "Hi",
                        seen: true
                    }
                ],
                notSeen: 0,
                lastDate: 20,
                lastMonth: 6,
                lastYear: 18,
                lastHour: 3,
                lastMin: 45,
                lastAMPM: 'AM',
                LastTimeStamp: 8600000000000000,
                active: true
            },
            {
                name: 'Foxtrot',
                status: 'Hey there! I am using Hey!',
                chatData: [
                    {
                        by: 'me',
                        date: 20,
                        month: 6,
                        year: 18,
                        timeHour: 1,
                        timeMin: 15,
                        TimeStamp: 8600000000000000,
                        msg: "Hi",
                        seen: false
                    },
                    {
                        by: 'you',
                        date: 20,
                        month: 6,
                        year: 18,
                        timeHour: 12,
                        timeMin: 15,
                        TimeStamp: 8600000000000000,
                        msg: "Hello!",
                        seen: true
                    }
                ],
                notSeen: 1,
                lastDate: 20,
                lastMonth: 6,
                lastYear: 18,
                lastHour: 5,
                lastMin: 50,
                lastAMPM: 'PM',
                TimeStamp: 8600000000000000,
                active: false
            }
        ];
        this.Username = "Makoda";
        this.updateData();
    }
    IoDataProvider.prototype.getUserName = function () {
        return this.Username;
    };
    IoDataProvider.prototype.getData = function () {
        return this.data;
    };
    IoDataProvider.prototype.updateData = function () {
        console.log("Data Updated");
    };
    IoDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], IoDataProvider);
    return IoDataProvider;
}());
export { IoDataProvider };
//# sourceMappingURL=io-data.js.map