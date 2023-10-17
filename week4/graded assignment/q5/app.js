const app = new Vue({
    el: '#app',
    data:{
        x:20,
        y:40,
    },
    beforeCreate(){
        console.log(this.x)
    },
})