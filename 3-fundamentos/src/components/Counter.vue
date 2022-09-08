<template>

<h2>{{customTitle}}</h2>0
<p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>
<div>
    <button @click="increase">+1</button> <!--@click para escuchar eventos -->
    <button @click="decrese">-1</button>
</div>
</template>

<script>
export default {
    //properties de entrada para rescatar el valor 
    //props: ['title','start'], //pongo el nombre que puesieron el componente
    props:{
        title: String,
        start: {
            type: Number,
            default: 100,
            //required: true
            validator(value){ //esto para validar la prop y poser pasar
                return value > 10
            }
        }
    },

    data(){ //va ser reactivo, vue va a estar pendiente de los cambios que se le hacen
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        },
        increase(){
            this.counter++
        },
        decrese(){
            this.counter--
        }
    },
    computed:{ //se guardan en el cache
        squareCounter(){
           console.log('computed saquareCounter'); //solo se van a llamar una sola vez y cada vez que se cambia se renderiza de nuevo
           return this.counter * this.counter
        },
        customTitle(){
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>