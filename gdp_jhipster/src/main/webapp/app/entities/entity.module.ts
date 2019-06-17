import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'country',
        loadChildren: './country/country.module#GdpJhipsterCountryModule'
      },
      {
        path: 'city',
        loadChildren: './city/city.module#GdpJhipsterCityModule'
      },
      {
        path: 'country-language',
        loadChildren: './country-language/country-language.module#GdpJhipsterCountryLanguageModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GdpJhipsterEntityModule {}
