export interface ILocation {
  city: string,
  street: string,
  house: string,
  longitude: number | null,
  latitude: number | null,
}

export interface ILocationFullAddress {
  query: string,
  address: ILocation,
}

export type MapLocationCoordinates = [number | null, number | null];

export interface ILocationMapCoordinates {
  lon: number | null,
  lat: number | null,
}

export interface ILocationMap {
  center: MapLocationCoordinates,
  zoom: number,
}
