import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-empresas',
  standalone: true,
  templateUrl: './empresas.html',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class Empresas implements OnInit {

  form!: FormGroup;

  allSetores: any[] = [];
  filteredSetores: any[] = [];

  constructor(private fb: FormBuilder, private ds: DataService) { }

  ngOnInit() {
    this.form = this.fb.group({
      q: [''],
      minQuantidade: [null],
      maxQuantidade: [null],
      minPercentual: [null],
      maxPercentual: [null]
    });

    this.ds.getEmpresas().subscribe(
      data => {
        this.allSetores = data.empresasPorSetor;
        this.filteredSetores = [...this.allSetores];
      },
      error => {
        console.error('Error fetching empresas:', error);
      }
    );

    this.form.valueChanges.pipe(debounceTime(200)).subscribe(() => {
      this.applyFilters();
    });
  }

  private normalizar(valor: string = ''): string {
    // Remove acentos e normaliza para comparação case-insensitive
    return valor.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  }

  applyFilters() {
    const { q, minQuantidade, maxQuantidade, minPercentual, maxPercentual } = this.form.value;
    const qNorm = this.normalizar(q || '');

    this.filteredSetores = this.allSetores.filter(item => {

      const setorNorm = this.normalizar(item.setor);

      if (q && !setorNorm.includes(qNorm)) return false;

      if (minQuantidade !== null && item.quantidade < minQuantidade) return false;
      if (maxQuantidade !== null && item.quantidade > maxQuantidade) return false;

      if (minPercentual !== null && item.percentual < minPercentual) return false;
      if (maxPercentual !== null && item.percentual > maxPercentual) return false;

      return true;
    });
  }

  limpar() {
    this.form.reset({
      q: '',
      minQuantidade: null,
      maxQuantidade: null,
      minPercentual: null,
      maxPercentual: null
    });
  }
}
