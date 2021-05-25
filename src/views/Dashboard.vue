<template>
  <div class="dashboard">
    <h1>Ruta protegida</h1>
    <p>{{token}}</p>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['token'])
  }
}
</script>
