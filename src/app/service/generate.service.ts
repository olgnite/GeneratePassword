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
    },
    {
        id: 'symdols',
        label: '!-?',
        library: "!@#$%^&*-_=+\\|:;',.\<>/?~",
    },
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

    public generatePassword(): string {
        this.newPassword = '';
        for (let i = 0; i < symbols.length; i++) {
            if (this.selectBoxValue === symbols[i].id) {
                this.selectBoxArray = symbols[i].library.split('');
                for (let i = 0; i < this.lengthPassword; i++) {
                    this.newPassword += this.selectBoxArray[Math.floor(Math.random() * this.selectBoxArray.length)];
                }
            }
        }
        return this.newPassword;
    }

    public selectBoxValueId(value: string): void {
        this.selectBoxValue = value;
    }
}
