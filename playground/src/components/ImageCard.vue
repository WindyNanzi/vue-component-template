<script setup lang='ts'>
import type { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  mode: {
    type: String as PropType<'post' | 'gallery'>,
    default: 'post',
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', { ...props })
}
</script>

<template>
  <div class="gallery-card" @click="handleClick">
    <div
      :style="{ backgroundImage: `url(${src})` }"
      class=" hover:scale-120 transition-500"
    />
  </div>
</template>

<style scoped>
.gallery-card {
  width: 100%;
  padding-bottom: 60%;
}
.gallery-card:hover .gallery-text {
  opacity: 1;
}
</style>
