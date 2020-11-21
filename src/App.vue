<template>
  <div>
    <!-- 
      デフォルトスロットのみの場合はコンポーネントにv-slotを記載できる
      <LikeHeader v-slot:defualt="slotPlops">  
      <LikeHeader #defualt="slotPlops">  
    -->
    <LikeHeader>
      <!-- slotに送る -->
      <!-- slotが複数ある場合は template v-slot:引数 -->
      <!-- v-slotで定義されていない物は、全てまとめてテンプレート（name:"defualt"）で渡される -->
      <!-- 
        <template v-slot:defualt="slotPlops" >
          <h2>{{ number }}</h2>
        </template>
       -->
      <p>これもデフォルトslot</p>
      <!-- 子コンポーネントのデータをv-slotディレクティブで受取、利用できる -->
      <template v-slot:title="slotProps">
        <h1>トータルのいいね！数</h1>
        <h2>{{ slotProps }}</h2>
        <h2>{{ slotProps.user.lastName}}</h2>
      </template>
      <!-- 名前付きtemplate意外に記載するとデフォルトとなる -->
      <h3>デフォルトslot</h3>
      <!-- 名前付きslot（v-slot:number）の場合は必ずtemplateを利用する -->
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <!-- 名前付きスロットの省略記法 -->
      <template #message>
        <h2>{{ message }}</h2>
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
      number: 10,
      message: "こんにちは"
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

