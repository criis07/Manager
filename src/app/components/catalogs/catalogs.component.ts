import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs.service';
import { GeograficLocations } from 'src/app/interfaces/catalogs/geograficLocations';
import { Observable } from 'rxjs';
import { GeoLocationFilterPipePipe } from 'src/app/pipes/geo-location-filter-pipe.pipe';
import {NgForm} from '@angular/forms';
@Component({
  
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  providers: [GeoLocationFilterPipePipe]
})

export class CatalogsComponent implements OnInit{

  public searchText = '';
  catalogos : GeograficLocations[]= [];
  constructor(private CatalogsService : CatalogsService, private GeoLocationFilterPipe: GeoLocationFilterPipePipe){}

  ngOnInit() {
    this.getGeoCatalogsAsync();
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
