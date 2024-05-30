<template>
  <div class="home">
    <input id="file" type="file" @input="fileChange">
  </div>
</template>

<script lang="ts" setup>
import ref from 'vue';
const fileChange:any = function (e:File) {
  console.log(e);
}
</script>
