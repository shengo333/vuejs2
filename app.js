new Vue ({
    el: '#vue-app',
    data: {
        inputvalue: ''
    },
    methods: {
        readRefs(){
            console.log(this.$refs.test.innerText);
            this.inputvalue = this.$refs.input.value
        }
    }
});
