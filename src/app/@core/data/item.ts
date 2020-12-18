export interface IItem {
  id: string;
  shipment_id: string;
  name: string;
  code: string;
}
export interface IItemResponse {
  data: IItem;
}
export abstract class ItemData {
  abstract getOne(id: string);
  abstract createOne(data: IItem);
  abstract updateOne(data: IItem);
  abstract deleteOne(id: string);
}
