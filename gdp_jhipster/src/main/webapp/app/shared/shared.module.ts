import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GdpJhipsterSharedLibsModule, GdpJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GdpJhipsterSharedLibsModule, GdpJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GdpJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GdpJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: GdpJhipsterSharedModule
    };
  }
}
