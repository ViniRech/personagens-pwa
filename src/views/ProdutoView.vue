<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { usarDadosProdutos } from '../stores/produtos';

  const props = defineProps(['id']);
  const dado = ref({});
  const router = useRouter();
  const dadosProdutos = usarDadosProdutos();

  onMounted(() => {
    dadosProdutos.carregarProdutos();
    dado.value = dadosProdutos.pegarProdutoPorId(props.id)
  });

  function visualizar() {
    router.push(`/`) //template string
  };

  const carrinho = ref(0)
  // const addCarrinho = () => {
  //   carrinho.value++
  // }
  const posicaoImagem = ref(0);
  // const mudarImagem = (i) => {
  //   posicaoImagem.value = i
  // }
  // const imageUrl = (img) => new URL(`@/assets/img/${img}`, import.meta.url).href;
</script>

<template>
  <section class="secao-dados">

    <div class="secao-dados-menu">
      <img @click="visualizar" class="botao-voltar" src="../assets/img/down-arrow.png">
      <div><img src="../assets/img/shopping-cart.png" alt="Carrinho:"> {{ carrinho }}</div>
    </div>

    <section class="secao-dados-imagem">
      {{ dado.imgs[posicaoImagem] }}
      <!-- <img :src="imageUrl(dado.imgs[posicaoImagem])"> -->
      <!-- <div><img v-for="(img, index) in dado.imgs" :key="index" :src="imageUrl(img)" @mouseover="mudarImagem(index)"></div> -->
    </section>

    <!-- <section class="secao-dados-informacao">

                      <h1>{{ dado.nome }}</h1>

                      <p>R$ {{ dado.preco.toFixed(2).replace('.', ',') }}</p>

                      <p v-if="carrinho >= 30" style="color: crimson;">Limite máximo de compra atingido</p>

                      <button
                          @click="addCarrinho"
                          class="botao-carrinho"
                          :class="{ botaoDesativado : carrinho >= 30 }"
                          :disabled="carrinho >= 30"
                      >
                          Adicionar ao carrinho
                      </button>

                  </section>-->

              </section>
</template>

<style scoped>
  .secao-dados {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0 5rem;
  }

  .secao-dados-menu {
    display: flex;
    grid-column: 2/3;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .secao-dados-menu > div {
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-right: 10px;
  }

  .secao-dados-imagem {
    display: grid;
    justify-items: center;
  }

  .secao-dados-imagem img {
    width: 80%;
  }

  .secao-dados-imagem > div {
    display: flex;
    padding: 0 1rem;
    gap: 10px;
  }

  .secao-dados-imagem > div > img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 5px;
  }

  .secao-dados-informacao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 1rem;
  }

  .secao-dados-informacao h1 {
    font-size: 2rem;
  }

  .secao-dados-informacao p {
    font-size: 1.5rem;
  }

  .botao-voltar {
    width: 40px;
    background-color: #FFD639;
    border-radius: 50%;
    cursor: pointer;
  }

  .botao-voltar:hover {
    background-color: #FBAF00;
  }

  .secao-dados-informacao > div {
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .botao-carrinho {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #FFD639;
    cursor: pointer;
    font-size: 1rem;
  }

  .botao-carrinho:active {
    background-color: #FBAF00;
  }

  .botaoDesativado {
    background-color: #342E37;
    color: #F0F3F5;
    cursor: not-allowed;
  }

  @media (max-width: 750px) {
    .secao-dados {
        grid-template-columns: 1fr;
    }

    .secao-dados-menu {
        grid-column: 1 / 2;
    }
  }
</style>
