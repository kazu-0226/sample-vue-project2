<template>
    <div>
        <!-- slotはHTMLのtemplateを送る -->
        <slot></slot>
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