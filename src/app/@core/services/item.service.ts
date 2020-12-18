import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IItem, ItemData} from '@core/data';
import {IItemResponse} from '@core/data/item';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class ItemService extends ItemData{
  endpoint: string;
  constructor(private _http: HttpClient) {
    super();
    this.endpoint = `${environment.url}/item`
  }

  async createOne(data: IItem) {
    let result = await this._http.post(`${this.endpoint}`, {
      id: data.id,
      shipment_id: data.shipment_id,
      name: data.name,
      code: data.code
    }).toPromise();
    return result;
  }

  async deleteOne(id: string) {
    let result = await this._http.delete(`${this.endpoint}/${id}`).toPromise();
    return result;
  }

  async getOne(id: string) {
    let result = await this._http.get<IItemResponse>(`${this.endpoint}/${id}`).pipe(
      map(({data}) => data)
    ).toPromise();
    return result;
  }

  async updateOne(data: IItem) {
    let result = await this._http.put(`${this.endpoint}/${data.id}`, {
      id: data.id,
      shipment_id: data.shipment_id,
      name: data.name,
      code: data.code
    }).toPromise();
    return result;
  }
}
