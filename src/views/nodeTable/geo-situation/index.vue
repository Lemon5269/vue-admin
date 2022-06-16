<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      链路推荐
    </div>
    <fixed-thead />

    <!--    <div style="margin:30px 0 5px 20px">-->
    <!--      Not fixed header, sorted by click order-->
    <!--    </div>-->
    <!--    <unfixed-thead />-->
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'

export default {
  name: 'GeoSituation',
  components: { FixedThead, UnfixedThead }
}
</script>

