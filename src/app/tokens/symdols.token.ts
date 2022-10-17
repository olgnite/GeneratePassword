import {InjectionToken} from "@angular/core";
import {ISymbolCheckBox} from "../interface/checkboxSymbol.interface";

export const DEFAULT_SYMBOLS: InjectionToken<ISymbolCheckBox[]> = new InjectionToken<ISymbolCheckBox[]>('Значение символов по умолчанию', {
	factory: () => ([
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
	])
});

