import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/model/Agency-model';
import { AgencyService } from 'src/service/agency.service';


@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

 
  myAgency : Agency = {
  
    name:'',
    adress:''
  }
  agencys : Agency[] = [];

  constructor(private agencyService: AgencyService) {
   
   }
  ngOnInit()
  {
    this.getTasks();
  }
  getTasks()
  {  
    this.agencyService.findAll().subscribe( agencys=> this.agencys=agencys.__ENTITIES)
   // this.taskService.findAll().subscribe(tasks => this.tasks = tasks)
  }
 
  persisteTask()
  {
    console.log("Hello")
    this.agencyService.persiste([this.myAgency]).subscribe((agency) => {
      //this.agencys = [agency, ...this.agencys];
      this.resetTask();
    }
    )
  }

  resetTask()
  {
    this.myAgency = 
    {
      name : '',
      adress:''
    }
  }



  updateTask()
  {
    this.agencyService.update([this.myAgency])
    .subscribe(() => {
        this.resetTask();
   
    })
  }

}
