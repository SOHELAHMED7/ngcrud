import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MockapiService implements InMemoryDbService {
    constructor() {

    }

    public createDb(): object {
        // return {
        //     [
        //         25
        // { id: 1, name: 'mango', color: 'yellow' },
        //     ]
        // }
        const fruitapi = [
            { id: 1, name: 'mango', color: 'yellow' },
            { id: 2, name: 'apple', color: 'red' },
            { id: 3, name: 'watermelon', color: 'green' },
            { id: 4, name: 'banana', color: 'yellow' },
            { id: 5, name: 'grape', color: 'green' }
        ];
        return { fruitapi };
    }
}
