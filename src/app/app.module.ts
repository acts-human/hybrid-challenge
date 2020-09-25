import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UpgradeModule, setAngularJSGlobal, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import * as angular from 'angular';
import { NameInputComponent } from './name-input/name-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameOutputComponent } from './name-output/name-output.component';
import { LegacyAppModule } from '../app-ajs/app.module.ajs';
import { LegacyNameOutputComponentWrapper } from './legacy-name-output/legacy-name-output.component';

// Downgrade AppComponent to allow AngularJS components inside Angular Components
const AJSShared = angular
  .module('AJSShared', [LegacyAppModule])
  .directive('appRoot', downgradeComponent({ component: AppComponent }))
  .name;

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LegacyNameOutputComponentWrapper,
    NameInputComponent,
    NameOutputComponent,
  ],
  providers: [
    {
      provide: '$scope',
      useExisting: '$rootScope'
    }
  ],
  // remove bootstrap and add entry components
  entryComponents: [ AppComponent ],
})
export class AppModule implements DoBootstrap {

  constructor(private upgrade: UpgradeModule) { }

  // manually bootstrap here after setting angular global
  public ngDoBootstrap(app: any): void {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [AJSShared], { strictDi: false });
    app.bootstrap(AppComponent);
  }

}
