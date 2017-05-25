<template>
  <div v-if="$route.params.id=='one'">
    <p>one</p>
  </div> 
  <div v-else-if="$route.params.id=='read'">
    <p>read </p>
  </div>
  <div v-else-if="$route.params.id=='music'">
    <p>music</p>
  </div>
  <div v-else-if="$route.params.id=='movie'">
    <p>movie</p>
  </div>
  <div v-else-if="$route.params.id=='download'">
    <p>download</p>
  </div>
  <div v-else-if="$route.params.id=='about'">
    <p>about</p>
  </div>
</template>

<style>
  p {
    text-align: right;
  }
</style>