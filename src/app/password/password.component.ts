import { Component } from '@angular/core';
import { GenerateService } from '../service/generate.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent  {
    public password: string = '';

    constructor(private _generateService: GenerateService,) { }

    public generate(): void {
        this.password = this._generateService.generatePassword();
    }
}
