import { InjectionToken } from "@angular/core";

export const DEFAULT_LENGTH_PASSWORD: InjectionToken<number> = new InjectionToken<number>('длина пароля по умолчанию', {
    factory: () => 8
})
