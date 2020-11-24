<template>
    <!-- カスタムディレクティブ  -->
<p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
</template>

<script>
export default {
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