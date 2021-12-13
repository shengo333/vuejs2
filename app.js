Vue.component('greeting', {
    template: '<p> Hey, i am reusable {{name}} component. <button @click="changeName">change name</button> </p>',
    data(){
        return{
            name: 'Yoshi'
        }
    },
    methods: {
        changeName(){
            this.name = 'shengo';
        }
    }
});

new Vue ({
    el: '#vue-app-one'
});

new Vue ({
    el: '#vue-app-two'
});