import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectBoxComponent } from './checkbox/selectbox.component';
import { PasswordComponent } from './password/password.component';
import { GenerateService } from './service/generate.service';

@NgModule({
    declarations: [
        AppComponent,
        PasswordComponent,
        SelectBoxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [GenerateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
