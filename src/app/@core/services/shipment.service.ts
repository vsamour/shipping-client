import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IShipment, ShipmentData} from '@core/data';
import {environment} from '@env/environment';

@Injectable()
export class ShipmentService extends ShipmentData {
  endpoint: string;

  constructor(private _http: HttpClient) {
    super();
    this.endpoint = `${environment.url}/shipment`
  }

  async createOne(data: IShipment) {
    let result = await this._http.post(this.endpoint, {
      id: data.id,
      name: data.name
    }).toPromise();
    return result;
  }

  async deleteOne(id: number) {
    let result = await this._http.delete(`${this.endpoint}/${id}`).toPromise();
    return result;
  }

  async getAll() {
    let result = await this._http.get(this.endpoint).toPromise();
    return result;
  }

  async getOne(id: number) {
    let result = await this._http.get(`${this.endpoint}/${id}`).toPromise();
    return result;
  }

  async send(id: number) {
    let result = await this._http.post(`${this.endpoint}/${id}/send`, {
      id: id
    }).toPromise();
    return result;
  }

  async updateOne(data: IShipment) {
    let result = await this._http.put(`${this.endpoint}/${data.id}`, {
      id: data.id,
      name: data.name
    }).toPromise();
    return result;
  }
}
