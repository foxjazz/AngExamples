import {DataModel} from './data-model';

export class Data {
  public data: string;
  private d: DataModel[] = [];
  constructor(){
    let a = new DataModel();
    a.title = "first line";
    a.index = 0;
    this.d.push(a);

    a = new DataModel();
    a.title = "second line";
    a.index = 1;
    this.d.push(a);

    a = new DataModel();
    a.title = "third line";
    a.index = 2;
    this.d.push(a);

  }
  public getdata(): string {
    return JSON.stringify(this.d);
  }
}
