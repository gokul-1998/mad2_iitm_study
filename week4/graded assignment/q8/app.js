const comp1 = {
    template: '<h4> This is {{name}}</h4>',
    data: function(){
        return{
            name:'component 1',
        }
    },
}

const app = new Vue({
    el:'#app',
    components:{
        comp1,
    },
})