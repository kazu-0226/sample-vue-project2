<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{number}}</h2>
    <!-- キャメルケース -->
    <LikeNumber :totalNumber="number"></LikeNumber>
    <!-- ケバブケース(推奨) -->
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data(){
    return{
      number: 10
    }
  },
  components: {
    LikeHeader
  }
};
</script>

<style  scoped>
 div {
   border: 3px solid blue;
 }
</style>

