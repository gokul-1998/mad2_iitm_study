const app = new Vue({
    el: "#app",
    data: {
      items: []
    },
    methods: {
        // add item here
        //options
        //addItem() {
        //    items.push('New item')
        // },
       
       //addItem() {
       //    this.items.push('New item')
       //  },
       
       //addItem() {
       //     this.items = 'New item'
       //  },
       //ans
       addItem() {
           this.items.push('New item')
          },
      }
  })