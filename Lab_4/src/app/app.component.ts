import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    private _arr : Array<number>;
    private _arrSize : number;
    
    get arr() : Array<number> {
        return this._arr;
    }

    get arrSize() : number {
        return this._arrSize
    }

    set arrSize(size : number) {
        this._arrSize = size == null ? 0 : size;
        for(let i : number = this._arr.length; i < this._arrSize; i++){
            this._arr.push(0);
        }
        while(this._arrSize < this._arr.length) {
            this._arr.pop();
        }
    }

    constructor(){
        this._arr = new Array<number>();
        this._arrSize = 0;
    }

    trackByFn(index : number){
        return index;
    }

    findMin() : number {
        return Math.min(...this._arr);
    }

    findMax() : number {
        return Math.max(...this._arr);
    }
}
