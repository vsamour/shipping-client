import {Observable} from 'rxjs';

export interface IShipmentInput {
  // Shipment id
  id: number,

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
  abstract getOne(id: number);

  // Update shipment
  abstract updateOne(data: IShipmentInput)

  // Delete shipment
  abstract deleteOne(id: number);

  // Send item's list from shipment
  abstract send(id: number);
}
