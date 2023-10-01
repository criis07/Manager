import { Component } from '@angular/core';
import { ManagersService } from '../../services/managers.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent {

  data : any ;
  constructor(private ManagersService : ManagersService){}

  ngOnInit() : void{
    this.getBeneficiaryAsync();
  }

  getBeneficiaryAsync () {
    console.log('hola');
    this.ManagersService.getManager().subscribe(data => {
      this.data = data;
    console.log(this.data);
  });
}
}