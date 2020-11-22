<template>
    <div>
        <!-- slotはHTMLのtemplateを受け取ることができる -->
        <!-- name属性を追加して受け取る箇所を指定 -->
        <!-- 子コンポーネントのslotにv-bindでデータを指定 -->
        <slot name="title" v-bind:user="user" text="text">
            <!-- slotに渡されるテンプレートが定義されていない場合は、表示されるオールバックコンテンツ -->
            <h2>デフォルトのタイトル</h2>
        </slot>
        <!-- デフォルトスロット -->
        <!-- v-slotで定義されていない物は、新しいテンプレート（name:"defualt"）で渡される -->
        <!-- 
          <slot name="defualt"></slot>
         -->
         <hr>
        <slot name="message"></slot>
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
// props: ["headerText"]
data(){
    return{
        user: {
            firstName: 'Jack',
            lastName: 'John'
        }
    }
}
}
</script>

<style  scoped>
/* h1 {
    color:blueviolet;
} */
</style>