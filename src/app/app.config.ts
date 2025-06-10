import { ApplicationConfig, importProvidersFrom, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StatementLandingComponent } from './accountManagement/accountStatement/statement-landing/statement-landing.component';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(StatementLandingComponent)
  ]
};
