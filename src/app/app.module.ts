


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})



export class AppModule { };


