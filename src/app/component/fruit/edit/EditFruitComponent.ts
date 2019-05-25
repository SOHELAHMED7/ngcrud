import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FruitService } from 'src/app/service/fruit/fruit';
import { Location } from '@angular/common';
import { AddFruitComponent } from '../add/AddFruitComponent';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-editfruit',
    templateUrl: '../add/addfruit.html'
})
export class EditFruitComponent extends AddFruitComponent implements OnInit {

    public operation = 'edit';

    constructor(
        public fruitservice: FruitService,
        public location: Location,
        private route: ActivatedRoute

    ) {
        // super(fruitservice, location);
        super(fruitservice, location);
        // const r = [...args, route];
    }

    // todo get api load in friut object for GET edit/fruit/1
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        // console.log('444' + id);
        this.fruitservice.aFruit(id).subscribe(frt => {
            this.fruit = frt;
            // console.log(this.fruit);
        });
    }

    public formSubmitted(fruit: Fruit): void {
        // console.log(fruit);
        // console.log('545544554545454');
        this.fruitservice.edit(fruit).subscribe((fruitinc) => {
            console.log(`${fruitinc} added`);
            // this.addSuccMsg = `hooray, added ${fruitinc.name} with success`;
            // this.msgEvent.emit(this.addSuccMsg);
            this.location.back();
        });
    }
}
