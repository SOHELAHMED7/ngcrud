import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Fruit } from 'src/app/model/fruit';
import { FruitService } from 'src/app/service/fruit/fruit';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.html'
})

export class SearchComponent implements OnInit {
    // public addSuccMsgHere: string;

    public allFruit$: Observable<Fruit[]>;

    public st = new Subject<string>();

    constructor(private frtService: FruitService) {
    }

    ngOnInit() {
        this.allFruit$ = this.st.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(term => this.frtService.sk(term))
        );
    }

    public searchFunc(term: string) {
        console.log(term);
        this.st.next(term);
    }
}
