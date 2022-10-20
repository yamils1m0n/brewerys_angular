import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../interfaces/brewery.interface';

@Component({
  selector: 'app-cerveza',
  templateUrl: './cerveza.component.html',
  styleUrls: ['./cerveza.component.css']
})
export class CervezaComponent implements OnInit {

  @Input() brewery!: Brewery

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
  }

}
