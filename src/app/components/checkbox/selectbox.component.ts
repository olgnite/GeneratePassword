import {Component, Inject} from '@angular/core';
import { GenerateService } from '../../service/generate.service';
import {DEFAULT_SYMBOLS} from "../../tokens/symdols.token";
import {ISymbolCheckBox} from "../../interface/checkboxSymbol.interface";

@Component({
    selector: 'app-selectbox',
    templateUrl: './selectbox.component.html',
    styleUrls: ['./selectbox.component.scss'],
})
export class SelectBoxComponent {
    public selectBoxId: ISymbolCheckBox[] = this.symdols;

    constructor(
		@Inject(DEFAULT_SYMBOLS) protected readonly symdols: ISymbolCheckBox[],
		private _generateService: GenerateService
    ) { }

    public selectBoxNumberOrLowerCase(event: any): void {
        this._generateService.selectBoxValueId(event.target.value);
    }
}
