import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import {DataModel} from '../data-model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public data1: DataModel[];
  public data2: DataModel[] = [];
  private datas: string;
  constructor() { }

  ngOnInit() {
    // this.datas = new Data().getdata();
    this.data1 = JSON.parse(this.datas = new Data().getdata());

  }

  public copy1(){
    this.data1.forEach(a => {
      this.data2.push(a);
    });
  }
  public copy2() {
      this.data2 = this.data1;
    }
    public copy3() {
      this.data1.forEach(a => {
        this.data2.push(Object.assign(a));
      });
    }

  public copy4() {
    this.data2 = Object.assign(this.data1);
  }
  public copy5(){
    this.data1.forEach(a => {
      const aa = new DataModel();
      aa.title = a.title;
      aa.index = a.index;
      this.data2.push(aa);
    });
  }
  public clear(){
    this.data1 = JSON.parse(this.datas);
    this.data2 = [];
  }
  public change(){
    if(this.data2){
      const d2 = this.data2;
      d2[0].title = "change " + this.data1[0].title;
    }
  }

}
