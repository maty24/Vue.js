
const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // `
    
    data() {
        return {
            quote: "mesi le gana",
            author: 'messi'
        }
    },
    methods: {
        changeQuote() {
            console.log( 'Hola Mundo' )
            this.author = 'Maty G'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
    
})


app.mount('#myApp')



