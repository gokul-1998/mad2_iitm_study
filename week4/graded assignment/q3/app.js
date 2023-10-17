const app = new Vue({
    el: '#app',
    data: {
      principal: 0,
      annualInterestRate: 0,
      duration: 0,
      totalPayableAmount: 0
    },
    computed: {
      simpleInterest() {
        return (this.principal * this.annualInterestRate * this.duration )/ 100
      },
    },
})

appData = [
    [2000,10,2],
    [3000,20,3],
    [5000,30,4],
]
let handler = setInterval(() => {
    data = appData.pop()
    app.principal = data[0]
    app.annualInterestRate=data[1]
    app.duration=data[2]
    app.totalPayableAmount+=app.simpleInterest
},1000

)
  