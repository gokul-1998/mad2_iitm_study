const players = [
    {name :'Rohit Sharma',role:'Batsman',team:'MI'},
    {name :'Virat Kohli',role:'Batsman',team:'RCB'},
    {name :'Jaspreet Bumrah',role:'Bowler',team:'MI'}
]

const app = new Vue({
    el: '#app',
    data:{
        players:players,
    },
})