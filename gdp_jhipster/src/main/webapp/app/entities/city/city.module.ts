import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GdpJhipsterSharedModule } from 'app/shared';
import {
  CityComponent,
  CityDetailComponent,
  CityUpdateComponent,
  CityDeletePopupComponent,
  CityDeleteDialogComponent,
  cityRoute,
  cityPopupRoute
} from './';

const ENTITY_STATES = [...cityRoute, ...cityPopupRoute];

@NgModule({
  imports: [GdpJhipsterSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [CityComponent, CityDetailComponent, CityUpdateComponent, CityDeleteDialogComponent, CityDeletePopupComponent],
  entryComponents: [CityComponent, CityUpdateComponent, CityDeleteDialogComponent, CityDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GdpJhipsterCityModule {}
