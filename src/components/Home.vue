<template>
  <div>
    <!-- カスタムディレクティブ  -->
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | upperCase}}</h2>
    <!-- フィルタを連結する場合は、記述順に処理される -->
    <p>{{ subTitle | upperCase  | lowerCase }}</p>
    <p>{{title | lowerCase}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: "Welcome to Tokyo",
            subTitle: "Tokyo is a great city"
        };
    },
    filters: {
        lowerCase(value){
            // thisは利用できない
            return value.toLowerCase();
        }
    },
    // computed: {
    //     upperCasetitle(){
    //         return this.title.toUpperCase();
    //     }
    // },
    // ローカルに登録する場合（this)は使えない
    directives: {
        border(el, binding) {
             // カスタムディレクティブが紐づくHTML要素(el = p)
            // el.style.border = "solid black 1px";
            // bindingはvalueやnameなどプロパティを含んでいるオブジェクト
            //  el.style.borderWidthに value: ディレクティブに渡される5pxを導入
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            // ディレクティブに渡される引数。arg = dotted
            el.style.borderStyle = binding.arg;
            // 修飾子 (modifier) を含んでいるオブジェクト。
            // v-border:solid.roundの場合は{round: true, shadow: true}
            if (binding.modifiers.round){
                el.style.borderRadius = "0.5rem";
            }
            if (binding.modifiers.shadow){
                el.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.26)";
  }
        }
    }
}
</script>