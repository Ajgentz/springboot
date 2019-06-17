import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICountryLanguage, CountryLanguage } from 'app/shared/model/country-language.model';
import { CountryLanguageService } from './country-language.service';
import { ICountry } from 'app/shared/model/country.model';
import { CountryService } from 'app/entities/country';

@Component({
  selector: 'jhi-country-language-update',
  templateUrl: './country-language-update.component.html'
})
export class CountryLanguageUpdateComponent implements OnInit {
  countryLanguage: ICountryLanguage;
  isSaving: boolean;

  countries: ICountry[];

  editForm = this.fb.group({
    id: [],
    language: [null, [Validators.required]],
    isOfficial: [null, [Validators.required]],
    percentage: [null, [Validators.required]],
    countryId: [null, Validators.required]
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected countryLanguageService: CountryLanguageService,
    protected countryService: CountryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ countryLanguage }) => {
      this.updateForm(countryLanguage);
      this.countryLanguage = countryLanguage;
    });
    this.countryService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICountry[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICountry[]>) => response.body)
      )
      .subscribe((res: ICountry[]) => (this.countries = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(countryLanguage: ICountryLanguage) {
    this.editForm.patchValue({
      id: countryLanguage.id,
      language: countryLanguage.language,
      isOfficial: countryLanguage.isOfficial,
      percentage: countryLanguage.percentage,
      countryId: countryLanguage.countryId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const countryLanguage = this.createFromForm();
    if (countryLanguage.id !== undefined) {
      this.subscribeToSaveResponse(this.countryLanguageService.update(countryLanguage));
    } else {
      this.subscribeToSaveResponse(this.countryLanguageService.create(countryLanguage));
    }
  }

  private createFromForm(): ICountryLanguage {
    const entity = {
      ...new CountryLanguage(),
      id: this.editForm.get(['id']).value,
      language: this.editForm.get(['language']).value,
      isOfficial: this.editForm.get(['isOfficial']).value,
      percentage: this.editForm.get(['percentage']).value,
      countryId: this.editForm.get(['countryId']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICountryLanguage>>) {
    result.subscribe((res: HttpResponse<ICountryLanguage>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackCountryById(index: number, item: ICountry) {
    return item.id;
  }
}
