import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
// import { AddFruitComponent } from '../add/AddFruitComponent';

@Component({
    selector: 'app-maincrudpage',
    templateUrl: './maincrudpage.html'
})
export class MaincrudpageComponent {
    public addSuccMsgHere: string;

    // @ViewChild(AddFruitComponent) addFruitC;
    // ngAfterViewInit() {
    //     this.addSuccMsgHere = this.addFruitC.addSuccMsg;
    // }

    // recMsg($event: any) {
    //     this.addSuccMsgHere = $event;
    // }
}
