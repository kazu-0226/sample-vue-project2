<template>
  <div>
    <LikeHeader>
      <!-- slotに送る -->
      <!-- slotが複数ある場合は template v-slot:引数 -->
      <!-- v-slotで定義されていない物は、全てまとめてテンプレート（name:"defualt"）で渡される -->
      <!-- 
        <template v-slot:defualt >
          <h2>{{ number }}</h2>
        </template>
       -->
      <p>これもデフォルトslot</p>
      <template v-slot:title>
        <h1>トータルのいいね！数</h1>
      </template>
      <!-- 名前付きtemplate意外に記載するとデフォルトとなる -->
      <h3>デフォルトslot</h3>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
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

