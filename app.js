new Vue ({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0

    },
    methods: {
        // addToA(){
        //     console.log('add to a')
        //     return this.a + this.age;
        // },
        // addToB(){
        //     console.log('add to b')
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA(){
            console.log('add to a')
            return this.a + this.age;
        },
        addToB(){
            console.log('add to b')
            return this.b + this.age;
        }  
    }
});