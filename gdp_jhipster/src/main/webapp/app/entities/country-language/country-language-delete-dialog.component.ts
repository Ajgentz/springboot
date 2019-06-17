import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICountryLanguage } from 'app/shared/model/country-language.model';
import { CountryLanguageService } from './country-language.service';

@Component({
  selector: 'jhi-country-language-delete-dialog',
  templateUrl: './country-language-delete-dialog.component.html'
})
export class CountryLanguageDeleteDialogComponent {
  countryLanguage: ICountryLanguage;

  constructor(
    protected countryLanguageService: CountryLanguageService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.countryLanguageService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'countryLanguageListModification',
        content: 'Deleted an countryLanguage'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-country-language-delete-popup',
  template: ''
})
export class CountryLanguageDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ countryLanguage }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(CountryLanguageDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.countryLanguage = countryLanguage;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/country-language', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/country-language', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
