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
    
    <!-- <p>ifの場合</p>
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->

    <div style="padding: 10rem">
      <h2>イベントフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- コンポーネントにv-modelを追加した場合 -->
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      >
      </EventTitle> -->

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
        <pre>{{  eventData.host  }}</pre>

        <label for="datail">イベントの内容</label>
        <textarea name="" id="detail" cols="30" rows="10" v-model="eventData.datail"></textarea>
        <p style="white-space: pre">{{ eventData.datail }}</p>

        <input 
        type="checkbox" 
        id="isPrivate"
        v-model="eventData.isPrivate">
        <label for="isPrivate">非公開</label>
        <p>{{ eventData.isPrivate }}</p>

        <!-- 複数のcheckboxのように回答を選択できる場合はdataを配列にする -->
        <p>参加条件</p>
        <input 
          type="checkbox" 
          name="" 
          id="10"
          value="10代"
          v-model="eventData.target"
        >
        <label for="10">10代</label>

        <input 
          type="checkbox" 
          name="" 
          id="20"
          value="20代"
          v-model="eventData.target"
        >
        <label for="20">20代</label>

        <input 
          type="checkbox" 
          name="" 
          id="30"
          value="30代"
          v-model="eventData.target"
        >
        <label for="30">30代</label>
        <p>{{eventData.target}}</p>

        <p>参加費</p>
        <input 
        type="radio" 
        id="free"
        value="無料"
        v-model="eventData.price">
        <label for="free">無料</label>

        <input 
        type="radio" 
        id="paid"
        value="有料"
        v-model="eventData.price">
        <label for="paid">有料</label>
        <p>{{eventData.price}}</p>

        <!-- selectで複数の選択肢を作成する場合、v-for="一つずつ取り出す引数 in 選択肢の集合"でそれぞれの選択肢を作成。
             :keyで必ずインデックスを取得する
         -->
        <p>開催地</p>
        <select v-model="eventData.location" multiple>
          <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"

export default {
  data(){
    return{
      number: 10,
      message: "こんにちは",
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData:{
        title: "",
        maxNumber: 0 ,
        host: "",
        detail: "",
        isPrivate: false,
        target:[],
        price: "無料",
        location: []
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  }
};
</script>

<style  scoped>
 /* div {
   border: 3px solid blue;
 } */

</style>

