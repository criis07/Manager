import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  private selectedBankSubject = new BehaviorSubject<string>('BLNI'); // Inicializado con un valor predeterminado
  selectBank= this.selectedBankSubject.asObservable();

  actualizarBankSeleccionado(Bank: string) {
    this.selectedBankSubject.next(Bank);
  }

  getBankSelected(): string {
    return this.selectedBankSubject.value;
  }
}
