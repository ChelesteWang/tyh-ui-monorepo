<template>
  <a
    :class="isClass"
    :style="{ textDecoration: underline ? 'none' : 'underline' }"
    :href="prohibit ? null : url"
    :target="target"
  >
    <i v-if="icon" :class="['tyh-icon', `tyh-icon-${type}`, icon]" />
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })
const isClass = computed((): (string | object)[] => {
  return [
    'tyh-link',
    `tyh-link-${props.type}`,
    { 'tyh-link-prohibit': props.prohibit }
  ]
})
</script>
