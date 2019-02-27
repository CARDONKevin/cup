import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/sensor/temperature').valueChanges();
    this.items.subscribe(items =>  document.getElementById('temperature').innerHTML = items.toString() + ' °C');
  }
}
