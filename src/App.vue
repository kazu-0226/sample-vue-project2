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
    
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <p>動的にコンポーネントを切り替える</p>
    <!-- <component>にv-bind:is＝""-->
    <!-- 動的コンポーネントはコンポーネントを切り替えるとdestroyされ新しいインスタンスとなる
         keep-alliveタグで保持できる
     -->
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    
    <p>ifの場合</p>
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home>

    <div>
      <h2>イベントフォーム</h2>
      <label for="title">タイトル</label>
      <!-- v-model.lazy修飾子は入力してフォーカスを外した時（changeのdomイベントで発火する -->
      <input 
        id="title"
        type="text"
        v-model.lazy="eventData.title">
        <p>{{eventData.title}}</p>

      <label for="maxNumber">最大人数</label>
      <!-- typeがnumberであっても、プルダウンで初期値を変更するとstringになるが
           v-model.number修飾子でnumberに固定される -->
      <input 
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber">
        <!-- typeofで値の型がわかる -->
        <p>{{ eventData.maxNumber}}</p>

      <label for="host">主催者</label>
      <!-- v-model.trim修飾子で入力した値の最初と最後にスペースがあった場合はカットされる -->
      <input 
        id="host"
        type="text"
        v-model.trim="eventData.host">
        <p>{{  eventData.host  }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import About from "./components/About.vue"
import Home from "./components/Home.vue"

export default {
  data(){
    return{
      number: 10,
      message: "こんにちは",
      currentComponent: "Home",
      eventData:{
        title: "タイトル",
        maxNumber: 0 ,
        host: "主催者"
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home
  }
};
</script>

<style  scoped>
 /* div {
   border: 3px solid blue;
 } */

</style>

