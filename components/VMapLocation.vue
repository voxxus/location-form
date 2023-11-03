<script setup lang="ts">
import * as Vue from 'vue/dist/vue.esm-bundler.js';
import { Location } from '@element-plus/icons-vue';
import type { ILocation, ILocationMap, ILocationMapCoordinates, MapLocationCoordinates } from '~/model';

const ymaps3Vue = await ymaps3.import('@yandex/ymaps3-vuefy');
const vuefy = ymaps3Vue.vuefy.bindTo(Vue);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = vuefy.module(ymaps3);

const props = defineProps<{
  location: ILocation,
}>();

const emit = defineEmits(['get-location']);

const mapSettings = computed<ILocationMap>(() => {
  return {
    center: [props.location.longitude, props.location.latitude],
    zoom: 17,
  };
});

const showMarker = computed(() => {
  return !(props.location.longitude === null || props.location.latitude === null);

});

const getMapLocation = (coordinatesArr: MapLocationCoordinates) => {
  const [lon, lat] = coordinatesArr;
  const coordinates = { lon, lat };

  emit('get-location', coordinates);
};

</script>

<template>
  <div id="map">
    <YMap :location="mapSettings">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapMarker
          :coordinates="mapSettings.center"
          :onDragEnd="getMapLocation"
          draggable
          mapFollowsOnDrag
      >
        <el-icon size="30px">
          <Location color="#000" class="location-icon" />
        </el-icon>
      </YMapMarker>
    </YMap>
  </div>
</template>


<style scoped>
.location-icon {
  transform: translate(-50%, -90%);
}

#map {
  width: 80vw;
  height: 550px;
}
</style>
