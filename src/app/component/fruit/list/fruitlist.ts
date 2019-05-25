import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/service/fruit/fruit';
import { Fruit } from 'src/app/model/fruit';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fruitlist',
    templateUrl: 'fruitlist.html'
})
export class FruitlistComponent implements OnInit {
    public allFruit: Fruit[];
    public fruit: Fruit;

    constructor(
        private fruitService: FruitService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getAllFruit();
    }

    public getAllFruit() {
        this.fruitService.allFruit().subscribe(allFruit => this.allFruit = allFruit);
    }

    public deleteFrt(fruitvar: Fruit): void {
        // const id = +this.route.snapshot.paramMap.get('id');
        // console.log('444' + id);
        this.fruitService.delFruit(fruitvar).subscribe(data => this.ngOnInit());
    }
}
