import { Component } from '@angular/core';
import { ManagersService } from '../../services/managers.service';
import { HttpHeaders } from '@angular/common/http';
import { Manager } from 'src/app/interfaces/manager';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent {
  identification : string = '';
  data : any ;
  public formData?: any;
  constructor(private ManagersService : ManagersService){}

  ngOnInit() : void{
    
  }

  getBeneficiaryAsync () {
    this.ManagersService.getManager(this.identification).subscribe(data => {
    this.data = data;
    this.formData = data;
    console.log(this.formData)
  });
}
}