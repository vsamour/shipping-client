import {Observable} from 'rxjs';

export interface IShipmentInput {
  // Shipment id
  id: string,

  // Shipment name
  name: string
}

export interface IShipment extends IShipmentInput {
  created_at: string;
  updated_at: string;
  is_send: boolean;
  items: any[];
  last_sended_at: string;
}

export interface IShipmentResponse {
  data: IShipment
}

export interface IShipmentsResponse {
  data: {
    shipments: IShipment[]
  }
}

export abstract class ShipmentData {
  data$: Observable<IShipment[]>;

  // Get list user's shipments
  abstract getAll(): Promise<any>;

  // Create new shipment
  abstract createOne(data: IShipmentInput);

  // Get one shipment
  abstract getOne(id: string);

  // Update shipment
  abstract updateOne(data: IShipmentInput)

  // Delete shipment
  abstract deleteOne(id: string);

  // Send item's list from shipment
  abstract send(id: string);
}
