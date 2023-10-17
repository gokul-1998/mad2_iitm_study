const dataObj = {
    message: 'Welcome',
}

const optObject = {
    el:'#app',
    data: dataObj,
}

const app = new Vue(optObject)
app.message = 'Welcome to iitm online degree'