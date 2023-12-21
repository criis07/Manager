import { Component, inject, OnInit  } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { SharedDataServiceService } from '../services/shared-data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  SelectedBank : any;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Formulario de gestor', cols: 1, rows: 2 },
          { title: 'Consulte catálogos', cols: 1, rows: 2 },
          { title: 'Creación de gestor', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Formulario de gestor', cols: 1, rows: 2 },
        { title: 'Consulte catalogos', cols: 1, rows: 2 },
        { title: 'Creación de gestor', cols: 2, rows: 1 }
      ];
    })
  );
}
