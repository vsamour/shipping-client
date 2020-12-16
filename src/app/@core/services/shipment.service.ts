import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IShipment, ShipmentData} from '@core/data';
import {IShipmentInput, IShipmentResponse} from '@core/data/shipment';
import {environment} from '@env/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ShipmentService extends ShipmentData {
  private _dataSubject: BehaviorSubject<IShipment[]>;
  data$: Observable<IShipment[]>;
  endpoint: string;

  constructor(private _http: HttpClient) {
    super();
    this.endpoint = `${environment.url}/shipment`;
    this._dataSubject = new BehaviorSubject<IShipment[]>([]);
    this.data$ = this._dataSubject.asObservable();
  }

  async createOne(data: IShipmentInput) {
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
    let result = await this._http.get<IShipmentResponse>(this.endpoint).pipe(
      map(
        ({data: {shipments}}) => {
          this._dataSubject.next(shipments);
          return shipments;
        }
      )
    ).toPromise();
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

  async updateOne(data: IShipmentInput) {
    let result = await this._http.put(`${this.endpoint}/${data.id}`, {
      id: data.id,
      name: data.name
    }).toPromise();
    return result;
  }
}