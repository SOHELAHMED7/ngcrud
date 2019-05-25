import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fruit } from 'src/app/model/fruit';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpHeaderOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class FruitService {
    private uri = 'api/fruitapi';
    constructor(private http: HttpClient) {}

    public allFruit(): Observable<Fruit[]> {
        return this.http.get<Fruit[]>(this.uri).pipe(
            tap(_ => console.log('success')),
            catchError(this.handleError<Fruit[]>('all fruit'))
        );
    }

    public aFruit(id: number): Observable<Fruit> {
        const url = `${this.uri}/${id}`;
        return this.http.get<Fruit>(url).pipe(
            tap(_ => console.log('success a get')),
            catchError(this.handleError<Fruit>('a fruit'))
        );
    }

    private handleError<T>(opn: string = 'operation', result?: T): (error: any) => Observable<T> {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    public add(fruitvar: Fruit): Observable<Fruit> {
        return this.http.post<Fruit>(this.uri, fruitvar, httpHeaderOptions).pipe(
            tap((fruit2: Fruit) => {console.log(`${fruit2} added successfully`); }),
            catchError(this.handleError<Fruit>('add'))
        );
    }

    public edit(fruitvar: Fruit): Observable<Fruit> {
        return this.http.put<Fruit>(this.uri, fruitvar, httpHeaderOptions).pipe(
            tap((fruit2: Fruit) => { console.log(`${fruit2} updated successfully`); }),
            catchError(this.handleError<Fruit>('edit'))
        );
    }

    public delFruit(fruitvar: Fruit | number): Observable<Fruit> {
        const id = typeof fruitvar === 'number' ? fruitvar : fruitvar.id;
        const url = `${this.uri}/${id}`;
        return this.http.delete<Fruit>(url, httpHeaderOptions).pipe(
            tap(_ => console.log(`deleted here id=${id}`)),
            catchError(this.handleError<Fruit>('edit'))
        );
    }

    public sk(term: string): Observable<Fruit[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Fruit[]>(`${this.uri}/?name=${term}`).pipe(
            tap(_ => console.log('got response')),
            catchError(this.handleError<Fruit[]>('search', []))
        );
    }
}
