<template>
    <div>
      <label for="title">タイトル</label>
      <!-- v-model.lazy修飾子は入力してフォーカスを外した時（changeのdomイベントで発火する -->
      <!-- <input 
        id="title"
        type="text"
        v-model.lazy="eventData.title"> -->

        <!-- v-modelを分解してみると...
           lazy修飾子は@changeになるなどdomイベントによって異なる"
         -->
        <!-- <input 
          type="text"
          id="title"
          :value="eventData.title"
          @input="eventData.title = $event.target.value">
        <p>{{eventData.title}}</p> -->
         <input 
          type="text"
          id="title"
          :value="value"
          @input="eventData.title = $emit('input', $event.target.value)">
        <p>{{ value }}</p>
    </div>
</template>

<script>
export default {
    props: ["value"]
}
</script>