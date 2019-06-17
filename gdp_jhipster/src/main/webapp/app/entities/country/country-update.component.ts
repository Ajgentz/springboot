import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry, Country } from 'app/shared/model/country.model';
import { CountryService } from './country.service';

@Component({
  selector: 'jhi-country-update',
  templateUrl: './country-update.component.html'
})
export class CountryUpdateComponent implements OnInit {
  country: ICountry;
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required, Validators.maxLength(3)]],
    name: [null, [Validators.required, Validators.maxLength(52)]],
    continent: [null, [Validators.required]],
    region: [null, [Validators.required, Validators.maxLength(26)]],
    surfaceArea: [null, [Validators.required]],
    population: [null, [Validators.required]],
    lifeExpectancy: [],
    localName: [null, [Validators.required, Validators.maxLength(45)]],
    governmentForm: [null, [Validators.required, Validators.maxLength(45)]]
  });

  constructor(protected countryService: CountryService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ country }) => {
      this.updateForm(country);
      this.country = country;
    });
  }

  updateForm(country: ICountry) {
    this.editForm.patchValue({
      id: country.id,
      code: country.code,
      name: country.name,
      continent: country.continent,
      region: country.region,
      surfaceArea: country.surfaceArea,
      population: country.population,
      lifeExpectancy: country.lifeExpectancy,
      localName: country.localName,
      governmentForm: country.governmentForm
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const country = this.createFromForm();
    if (country.id !== undefined) {
      this.subscribeToSaveResponse(this.countryService.update(country));
    } else {
      this.subscribeToSaveResponse(this.countryService.create(country));
    }
  }

  private createFromForm(): ICountry {
    const entity = {
      ...new Country(),
      id: this.editForm.get(['id']).value,
      code: this.editForm.get(['code']).value,
      name: this.editForm.get(['name']).value,
      continent: this.editForm.get(['continent']).value,
      region: this.editForm.get(['region']).value,
      surfaceArea: this.editForm.get(['surfaceArea']).value,
      population: this.editForm.get(['population']).value,
      lifeExpectancy: this.editForm.get(['lifeExpectancy']).value,
      localName: this.editForm.get(['localName']).value,
      governmentForm: this.editForm.get(['governmentForm']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICountry>>) {
    result.subscribe((res: HttpResponse<ICountry>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
