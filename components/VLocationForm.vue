<script setup lang="ts">
import VLocationInput from '~/components/VLocationInput.vue';
import VMapLocation from '~/components/VMapLocation.vue';
import { useGeo } from "~/composables/useGeo";

const { query, location, fetchTextLocation, fetchMapLocation } = useGeo();

</script>

<template>
  <div class="location-form">
    <client-only>
      <VLocationInput
          v-model:query="query"
          @getLocation="fetchTextLocation"
      />

      <VMapLocation
          :location="location"
          @getLocation="fetchMapLocation"
      />
    </client-only>
  </div>
</template>

<style scoped>
.location-form {
  width: 50vw;
  margin: 10vh auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
