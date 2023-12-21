import { Component, OnInit  } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';
import { GeograficLocations } from 'src/app/interfaces/catalogs/geograficLocations';
import { Observable } from 'rxjs';
import { GeoLocationFilterPipePipe } from 'src/app/pipes/geo-location-filter-pipe.pipe';
import {NgForm} from '@angular/forms';
import { SharedDataServiceService } from '../../services/shared-data-service.service';
@Component({
  
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  providers: [GeoLocationFilterPipePipe]
})

export class CatalogsComponent implements OnInit{
  public searchText = '';
  Bank :string = '';
  catalogos : GeograficLocations[]= [];
  constructor(private CatalogsService : CatalogsService, private GeoLocationFilterPipe: GeoLocationFilterPipePipe,
    private SharedDataServiceService : SharedDataServiceService){}

  ngOnInit() {
    this.getGeoCatalogsAsync();
    this.SharedDataServiceService.selectBank.subscribe((response) => {
      this.Bank = response;
      console.log(response);
    });
    
  }

  getGeoCatalogsAsync () {
    this.CatalogsService.getGeograficLocations().subscribe((response)=>{
    this.catalogos = response;
    });
  }
  applyFilter(): GeograficLocations[] {
    return this.GeoLocationFilterPipe.transform(this.catalogos, this.searchText);
  }
  onChange(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  
}
