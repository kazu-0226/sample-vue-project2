import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

// , function(el, binding)で省略記法
// ディレクティブフック引数(el, binding, vnode, oldVnode)
// Vue.directive("border", function(el, binding){
//   // カスタムディレクティブが紐づくHTML要素(el = p)
//   // el.style.border = "solid black 1px";
//   // bindingはvalueやnameなどプロパティを含んでいるオブジェクト
//   //  el.style.borderWidthに value: ディレクティブに渡される5pxを導入
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   // ディレクティブに渡される引数。arg = dotted
//   el.style.borderStyle = binding.arg;
//   // 修飾子 (modifier) を含んでいるオブジェクト。
//   // v-border:solid.roundの場合は{round: true, shadow: true}
//   if (binding.modifiers.round){
//     el.style.borderRadius = "0.5rem";
//   }
//   if (binding.modifiers.shadow){
//     el.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.26)";
//   }
// });

  // // フック関数
  // // 多く利用されるのがbindとupdate
  // bind(el, binding, vnode) {
  //   // ディレクティブが初めて対象の要素に紐づいた時
  //   // Home.vueのpタグにv-borderが紐づいた時（一度のみ）
  // },
  // inserted(el, binding, vnode) {
  //   // 親Nodeに挿入された時
  //   // DOMに実際に（v-boderが）挿入された時（コンポーネントのmounted）
  // },
  // update(el, binding, vnode, oldVnode) {
  //   // コンポーネントだ更新される度。子コンポーネントが更新される前
  //   // Home.vueが変わると実行される
  //   // 親から子にprppsなどでデータを受取、子コンポーネントのv-nodeが実行される前に実行
  // },
  // componentUpdated(el, binding, vnode, oldVnode) {
  //   // コンポーネントが更新される度。子コンポーネントが更新された後
  //   // 親から子にprppsなどでデータを受取、子コンポーネントのv-nodeが実行された後に実行
  // },
  // unbind(el, binding, vnode) {
  //   // ディレクティブが紐づいている要素から取り除かれた時

new Vue({
  render: h => h(App),
}).$mount('#app')
