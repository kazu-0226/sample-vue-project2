import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", {
  // フック関数
  // 多く利用されるのがbindとupdate
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいた時
    // Home.vueのpタグにv-borderが紐づいた時（一度のみ）
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時
    // DOMに実際に（v-boderが）挿入された時（コンポーネントのmounted）
  },
  update(el, binding, vnode, oldVnode) {
    // コンポーネントだ更新される度。子コンポーネントが更新される前
    // Home.vueが変わると実行される
    // 親から子にprppsなどでデータを受取、子コンポーネントのv-nodeが実行される前に実行
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新された後
    // 親から子にprppsなどでデータを受取、子コンポーネントのv-nodeが実行された後に実行
  },
  unbind(el, binding, vnode) {
    // ディレクティブが紐づいている要素から取り除かれた時
    // 
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
