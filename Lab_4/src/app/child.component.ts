import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent{
	private _min : number;
	private _max : number;
	private _arithmeticMean : number;
	private _geometricMean : number;

	get min() : number {
		return this._min;
	}

	get max() : number {
		return this._max;
	}

	@Input()
	set min(min : number) {
		this._min = min;
		this._arithmeticMean = (this._min**3 + this._max**3)/2;
		this._geometricMean = Math.sqrt(Math.abs(this._min) * Math.abs(this._max));
	}

	@Input()
	set max(max : number) {
		this._max = max;
		this._arithmeticMean = (this._min**3 + this._max**3)/2;
		this._geometricMean = Math.sqrt(Math.abs(this._min) * Math.abs(this._max));
	}

	get arithmeticMean() : number {
		return this._arithmeticMean;
	}

	get geometricMean() : number {
		return this._geometricMean;
	}

	constructor() {
		this._max = 0;
		this._min = 0;
		this._arithmeticMean = 0;
		this._geometricMean = 0;
	}
}
