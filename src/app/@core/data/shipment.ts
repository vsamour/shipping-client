export interface IShipment {
  // Shipment id
  id: number,

  // Shipment name
  name: string
}

export abstract class ShipmentData {
  // Get list user's shipments
  abstract getAll();

  // Create new shipment
  abstract createOne(data: IShipment);

  // Get one shipment
  abstract getOne(id: number);

  // Update shipment
  abstract updateOne(id: number)

  // Delete shipment
  abstract deleteOne(id: number);

  // Send item's list from shipment
  abstract send(id: number);
}
