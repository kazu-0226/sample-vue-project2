<template>
  <div>
    <h2>{{ title | upperCase}}</h2>
    <!-- フィルタを連結する場合は、記述順に処理される -->
    <p>{{ subTitle | upperCase  | lowerCase }}</p>
    <p>{{title | lowerCase}}</p>
    <p>{{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    // mixinとオプションが重複する場合はコンポーネント優先
    data(){
        return{
            title: "welcom to USA"
        };
    },
    created(){
        console.log("created in component")
    }
};
</script>