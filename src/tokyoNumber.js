export const tokyoNumber = {
    data(){
        return{
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
    }
}