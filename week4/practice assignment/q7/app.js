const comp ={
    template: '<li> {{ message.message }}</li>',
    props:['message'],
}

const app = new Vue({
    el:'#app',
    data:{
        messages:[
            {message: 'This is message1'},
            {message: 'This is message2'},
            {message: 'This is message3'},
        ],
    },
    components:{
        comp,
    },
})