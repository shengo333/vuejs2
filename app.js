new Vue ({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        subtract(dec){
            this.age-= dec;
        },
        add(inc){
            this.age+= inc;
        },
        // addTen(){
        //     this.age+=10
        // },
        // subtractTen(){
        //     this.age-=10
        // }
        updateXY(event){
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click(){
            alert('you clicked me')
        }
    }
});