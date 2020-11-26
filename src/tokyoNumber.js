export const tokyoNumber = {
    data(){
        return{
            // オプションがかぶっている場合はコンポーネント優先
            title: "Welcome to Tokyo",
            subTitle: "Tokyo is a great city",
            number: 0
        };
    },
    filters: {
        lowerCase(value){
            // thisは利用できない
            return value.toLowerCase();
        }
    },
    methods: {
        increment(){
            this.number += 1;
        }
    },
    // ライフサイクルフックはmixinとコンポーネント両方発火する。（mixin→componentの順）
    created(){
        console.log("created in mixin")
    }
}