const compA = Vue.component('comp-a',{
    template:'<h4> Hello: {{message}}</h4>',
    data:function(){
        return{
            message:'Welcome to IITM',
        }
    },
})

const app = new Vue({
    el:'#app'
})