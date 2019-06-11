import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FruitService } from 'src/app/service/fruit/fruit';
import { Fruit } from 'src/app/model/fruit';
import { ActivatedRoute } from '@angular/router';
import { AddFruitComponent } from '../add/AddFruitComponent';

@Component({
    selector: 'app-fruitlist',
    templateUrl: 'fruitlist.html'
})
export class FruitlistComponent implements OnInit {
    public allFruit: Fruit[];
    public fruit: Fruit;
    public flashMsg = '';

    // @ViewChild(AddFruitComponent) vc: AddFruitComponent;

    @Output() messageEvent = new EventEmitter<string>();

    constructor(
        private fruitService: FruitService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getAllFruit();
    }

    public getAllFruit() {
        // if (this.vc) {
        //     console.log(this.vc.addSuccMsg);
        // }
        this.fruitService.allFruit().subscribe(allFruit => this.allFruit = allFruit);
    }

    public deleteFrt(fruitvar: Fruit): void {
        // const id = +this.route.snapshot.paramMap.get('id');
        // console.log('444' + id);
        this.fruitService.delFruit(fruitvar).subscribe(data => {
            this.ngOnInit();
            this.messageEvent.emit('deleted successfully');
        });
    }
}
