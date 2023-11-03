import { useAxiosInstance } from '~/composables/useAxiosInstance';
import type {ILocationFullAddress, ILocationMapCoordinates} from '~/model';

const axios = useAxiosInstance();

export const useFetchGeo = () : any => {
  const getCoordsByGeo = async (query: string) : Promise<ILocationFullAddress> => {
    const result = await axios.post('api/v1/clean/address', [query]);

    const locationData = result.data[0];
    return {
      query: locationData.result || query,
      address: {
        city: locationData.city,
        street: locationData.street,
        house: locationData.house,
        longitude: +locationData.geo_lon || null,
        latitude: +locationData.geo_lat || null,
      },
    };
  };

  const getGeoByCoords = async (payload: ILocationMapCoordinates): Promise<ILocationFullAddress> => {
    const result = await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address', payload);

    const { lon, lat } = payload;

    const locationData = result.data.suggestions[0];
    return {
      query: locationData?.value,
      address: {
        city: locationData?.data?.city,
        street: locationData?.data?.street,
        house: locationData?.data?.house,
        longitude: lon,
        latitude: lat,
      },
    };
  };

  return {
    getCoordsByGeo,
    getGeoByCoords,
  };
};
