<template>
  <h1>
    Pokmeon: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    //extrae el id de laspro
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((r) => r.json());
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/"); //esto hara que lo saque de la pagina y lo redireccione a la ruta especificada
        console.log("no hay nada que hacer aqui");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style></style>
