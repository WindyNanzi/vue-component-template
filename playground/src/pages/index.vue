<script setup lang="ts">
</script>

<template>
  <div px6 py-2 flex>
    <div flex-1>
      <p mb-10>
        这个组件的文字不可以被复制
      </p>
      <HelloWorld flex-1 />
    </div>

    <div flex-1>
      <p mb-10>
        这个组件的文字可以被复制
      </p>
      <HelloWorld flex-1 :select-able="true" suffix="wooo~" />
    </div>
  </div>
</template>
