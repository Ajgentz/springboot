import { NgModule } from '@angular/core';

import { GdpJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GdpJhipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GdpJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GdpJhipsterSharedCommonModule {}
