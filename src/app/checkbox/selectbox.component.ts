import { Component } from '@angular/core';
import { GenerateService, symbols } from '../service/generate.service';

@Component({
    selector: 'app-selectbox',
    templateUrl: './selectbox.component.html',
    styleUrls: ['./selectbox.component.scss'],
})
export class SelectBoxComponent {
    public selectBoxId = symbols;

    constructor(private _generateService: GenerateService) { }

    public selectBoxNumberOrLowerCase(event: any): void {
        this._generateService.selectBoxValueId(event.target.value);
    }
}
