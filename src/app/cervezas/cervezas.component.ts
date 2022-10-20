import { Component, OnInit } from '@angular/core';
import { BrewerysService } from '../services/brewerys.service';
import { Brewery } from '../interfaces/brewery.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Select } from '../interfaces/select.interface';

@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})
export class CervezasComponent implements OnInit {

  myForm = new FormGroup({
    city: new FormControl('',Validators.required)
  })

  constructor( private brewerysService: BrewerysService ) {

    //Escuchando cambios 'input' ciudad
    this.myForm.get('city')?.valueChanges
    .pipe(debounceTime(200))
    .subscribe( value =>{
      value? this.isDisabledBtn = false : this.isDisabledBtn = true
    })

  }

  isEmpyBrewerys: boolean = true 
  isDisabledBtn: boolean = true
  listBrewerys:Brewery[] = [] 
  listTypeBrewerys:Select[] = []
  listNameBrewerys:Select[] = []
  listPrintBrewerys:Brewery[] = []  // Impresión

  getBrewerys(){
    //Obtengo brewerys
    let size = 50
    this.brewerysService.getRandomSizeBrewerys(size).subscribe(brewerys =>{
      this.listBrewerys = brewerys
    })
  }

  getTypeBrewerys(){
    //Obtengo tipos
    let types: string[] = [] 
    this.listBrewerys.forEach(item => {    
      types.push(item.brewery_type)       
    }) 
    //Elimino duplicados
    let uniqsTypes = types.filter(function(item, index, array) { 
      return array.indexOf(item) === index;                         
    }) 
    //Lleno listado 
    uniqsTypes.forEach((item, index) => {  
      let type: Select = {
        value: index,
        viewValue: item
      }
      this.listTypeBrewerys.push(type)        
    }) 
  }

  getNameBrewerys(){
    //Obtengo nombres
    let names: string[] = [] 
    this.listBrewerys.forEach(item => {    
      names.push(item.name)       
    })
    //Elimino duplicados
    let uniqsNames = names.filter(function(item, index, array) { 
      return array.indexOf(item) === index;                         
    })
    //Lleno listado 
    uniqsNames.forEach((item, index) => {  
      let name: Select = {
        value: index,
        viewValue: item
      }
      this.listNameBrewerys.push(name)        
    })   
  }

  getCityBrewerys(city: string){
    //Obtengo por ciudad y lleno lista
    this.brewerysService.getByCityBrewerys(city).subscribe(brewerys =>{
      brewerys.length? this.isEmpyBrewerys = false : this.isEmpyBrewerys = true
      this.listPrintBrewerys = brewerys
    })
  }

  search(event: Event){
    //Buscar por ciudad
    event.preventDefault()
    let city = this.myForm.get('city')?.value
    this.getCityBrewerys(city!)
  }


  /****************** HOOKS ********************/

  ngOnInit(): void {
    //Lleno lista Brewerys
    this.getBrewerys()
  }

  ngAfterViewChecked(): void {
  
    if(this.listBrewerys.length === 0){
      console.log('Esperando la carga de Brewerys..')
    }
    else if(this.listTypeBrewerys.length === 0){
      //Lleno lista Tipos
      this.getTypeBrewerys() 
    }
    else if(this.listNameBrewerys.length === 0){
      //Lleno lista Nombres
      this.getNameBrewerys() 
    }
    
  }

}
