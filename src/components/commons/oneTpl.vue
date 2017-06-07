<template>
  <div class="one-content">
    {{$route.params.id}}
    <p>{{oneMessage}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        oneMessage: 'oneMessage'
      }
    }
  }  
</script>