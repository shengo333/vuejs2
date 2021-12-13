var one =new Vue ({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {
      
    },
    computed: {
        greet(){
            return 'Hello from app one :)'
        }
    }
});

var two =new Vue ({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle(){
            one.title = "title has been changed from app vue two"
        }
    },
    computed: {
        greet(){

            return 'Hello from app two :)'
        }
    }
});


two.title= "change came from outside"