import { useFetchGeo } from '~/composables/useFetchGeo';
import type { ILocation, ILocationMapCoordinates } from '~/model';


const { getCoordsByGeo, getGeoByCoords } = useFetchGeo();

const query = ref('');
const location = ref<ILocation>({
  city: '',
  street: '',
  house: '',
  longitude: 50.11040339030646,
  latitude: 53.20352658032205,
});

const fetchTextLocation = async () : Promise<void> => {
  if (!query.value) return;

  const result = await getCoordsByGeo(query.value);

  query.value = result.query;
  location.value = result.address;
};

const fetchMapLocation = async (coordinates: ILocationMapCoordinates): Promise<void> => {
  const result = await getGeoByCoords(coordinates);

  query.value = result.query || '';
  location.value = result.address;
};

export const useGeo = () => ({
  query,
  location,
  fetchTextLocation,
  fetchMapLocation,
});
