import { Component, OnInit } from '@angular/core';
import {ITile} from '../interfaces/itile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
tiles:Array<ITile>=[{
  image:'aa.jpg',
    name:'mahesh',
    model:'developer',
    price:100,
    rating:3,
    status:1
},
{
  image:'aa.jpg',
    name:'dhoni',
    model:'cricketer',
    price:200,
    rating:1,
    status:0
},
{
  image:'aa.jpg',
    name:'kohli',
    model:'batter',
    price:500,
    rating:4,
    status:1
},
{
  image:'aa.jpg',
    name:'virat',
    model:'bowl',
    price:5500,
    rating:4,
    status:0
},
{
  image:'aa.jpg',
    name:'raj',
    model:'batter',
    price:5000,
    rating:4,
    status:1
},]
  constructor() { }

  ngOnInit() {
  }

}
