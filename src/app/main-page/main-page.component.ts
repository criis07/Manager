import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedDataServiceService} from '../services/shared-data-service.service';

interface BankID {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  logoImageUrl = 'http://apl-02/LAFITask/LAFISE%20logo.png';

  Banks: BankID[] = [
    {value: 'BLNI', viewValue: 'Banco Lafise Nicaragua'},
    {value: 'BLCR', viewValue: 'Banco Lafise Costa Rica'},
    {value: 'BLHN', viewValue: 'Banco Lafise Honduras'},
    {value: 'BLPA', viewValue: 'Banco Lafise Panamá'},
    {value: 'BLRD', viewValue: 'Banco Lafise República Dominicana'}
  ];
  selectedBank = this.Banks[0].value;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private SharedDataServiceService: SharedDataServiceService) {}
    onPaisSeleccionado() {
      console.log(this.selectedBank);
      this.SharedDataServiceService.actualizarBankSeleccionado(this.selectedBank);
    }

}
