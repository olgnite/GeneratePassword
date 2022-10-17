import {Inject, Injectable} from "@angular/core";
import {ISymbolCheckBox} from "../interface/checkboxSymbol.interface";
import {DEFAULT_LENGTH_PASSWORD} from "../tokens/length.token";
import {DEFAULT_SYMBOLS} from "../tokens/symdols.token";

@Injectable()
export class GenerateService {
	public newPassword: string | null = '';
	public selectBoxArray: string[] = [];
	public selectBoxValue: string | null = '';

	constructor(
		@Inject(DEFAULT_LENGTH_PASSWORD) protected readonly lengthPassword: number,
		@Inject(DEFAULT_SYMBOLS) protected readonly symbols: ISymbolCheckBox[]
	) {
	}

	public generatePassword(): string {
		this.newPassword = '';
		for (let i = 0; i < this.symbols.length; i++) {
			if (this.selectBoxValue === this.symbols[i].id) {
				this.selectBoxArray = this.symbols[i].library.split('');
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
