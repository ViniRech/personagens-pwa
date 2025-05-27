<script setup>
  import { useRouter } from 'vue-router';
  import { usarDadosProdutos } from '../stores/produtos';

  const dadosProdutos = usarDadosProdutos();
  const router = useRouter();

  const imageUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;

  function visualizar(id) {
    router.push(`/produto/${id}`) //template string
  };
</script>

<template>
    <section class="secao-produtos">

      <h1>Nossos Produtos</h1>

      <div @click="visualizar(produto.id)" class="item-produto" v-for="produto in dadosProdutos.produtos" :key="produto.id">
        <img :src="imageUrl(produto.imgs[0])">
        <p>{{ produto.nome }}</p>
      </div>

    </section>
</template>

<style>
  .secao-produtos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    max-width: 80vw;
    justify-self: center;
    margin: 0 auto 5rem;
  }

  .secao-produtos h1 {
    display: grid;
    grid-column: 1 / 4;
    font-size: 2rem;
    text-align: center;
    margin: 5rem 0 2rem;
  }

  .item-produto {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .item-produto:hover {
    box-shadow: 5px 5px 5px #FFD639;
    transition: .2s;
  }

  .item-produto img {
    width: 70%;
    cursor: pointer;
  }

  .item-produto p:hover {
    cursor: pointer;
    color: #FBAF00;
  }

  @media (max-width: 900px) {
    .secao-produtos h1 {
        grid-column: 1 / 4;
    }

    .secao-produtos {
        grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 750px) {
    .secao-produtos h1 {
        grid-column: 1 / 3;
    }

    .secao-produtos {
        grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    .secao-produtos h1 {
        grid-column: 1 / 2;
    }

    .secao-produtos {
        grid-template-columns: 1fr;
        max-width: 100vw;
    }
  }
</style>
