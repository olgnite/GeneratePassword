import { Inject, Injectable } from "@angular/core";
import { ISymbolCheckBox } from "../interface/checkboxSymbol.interface";
import { DEFAULT_LENGTH_PASSWORD } from "../tokens/length.token";

export const symbols: ISymbolCheckBox[] = [
    {
        id: 'numbers',
        label: '0-9',
        library: '0123456789',
    },
    {
        id: 'lowercase',
        label: 'a-z',
        library: 'abcdefghijklmnopqrstuvwxyz',
    }
];

@Injectable()
export class GenerateService {
    public newPassword: string | null = '';
    public selectBoxArray: string[] = [];
    public selectBoxValue: string | null = '';

    constructor(
        @Inject(DEFAULT_LENGTH_PASSWORD) protected readonly lengthPassword: number,
    ) {
    }

    public createNewPassword(): void {
        for (let i = 0; i < this.lengthPassword; i++) {
            this.newPassword += this.selectBoxArray[Math.floor(Math.random() * this.selectBoxArray.length)];
        }
    }

    public generatePassword(): string {
        this.newPassword = '';
        if (this.selectBoxValue === 'numbers') {
            this.selectBoxArray = symbols[0].library.split('');
            this.createNewPassword();
        } else {
            if (this.selectBoxValue !== '') {
                this.selectBoxArray = symbols[1].library.split('');
                this.createNewPassword();
            }
        }
        return this.newPassword;
    }

    public selectBoxValueId(value: string): void {
        this.selectBoxValue = value;
    }
}
