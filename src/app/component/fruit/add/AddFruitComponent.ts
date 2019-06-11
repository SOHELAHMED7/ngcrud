import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FruitService } from 'src/app/service/fruit/fruit';
import { Location } from '@angular/common';

@Component({
    selector: 'app-addfruit',
    templateUrl: './addfruit.html'
})
export class AddFruitComponent implements OnInit {
    public fruit: Fruit;
    public operation = 'add';
    public addSuccMsg: string;

    // @Output() msgEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        public fruitservice: FruitService,
        public location: Location
    ) {}

    ngOnInit() {
        this.fruit = new Fruit();
    }

    public formSubmitted(fruit: Fruit): void {
        // console.log(fruit);
        // console.log('545544554545454');
        this.fruitservice.add(fruit).subscribe((fruitinc) => {
            console.log(`${fruitinc} added`);
            this.addSuccMsg = `hooray, added ${fruitinc.name} with success`;
            // this.msgEvent.emit(this.addSuccMsg);
            this.location.back();
        });
    }
}
