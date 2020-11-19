<template>
    <div>
        <!-- slotはHTMLのtemplateを受け取ることができる -->
        <!-- name属性を追加して受け取る箇所を指定 -->
        <slot name="title">
            <!-- slotに渡されるテンプレートが定義されていない場合は、表示されるオールバックコンテンツ -->
            <h2>デフォルトのタイトル</h2>
        </slot>
        <!-- デフォルトスロット -->
        <!-- v-slotで定義されていない物は、新しいテンプレート（name:"defualt"）で渡される -->
        <!-- 
          <slot name="defualt"></slot>
         -->
        <slot></slot>
        <hr>
        <p>いいねの数</p>
        <slot name="number">
        </slot>
    </div>
</template>

<script>
export default {
// propsはデータやstring
  props: ["headerText"]
}
</script>

<style  scoped>
h1 {
    color:blueviolet;
}
</style>