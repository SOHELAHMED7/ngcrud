import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FruitService } from 'src/app/service/fruit/fruit';
import { Location } from '@angular/common';
import { AddFruitComponent } from '../add/AddFruitComponent';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-viewfruit',
    templateUrl: './viewfruit.html'
})
export class ViewFruitComponent implements OnInit {
    public fruit: Fruit = {id: 2, name: 'd', color: 'ss'};
    public operation = 'view';

    constructor(
        public fruitservice: FruitService,
        public location: Location,
        private route: ActivatedRoute

    ) {
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
}
