import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { APP_ROUTING } from './app.routing';

// Import Components Below
import { HomeComponent } from './route/home/home.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}