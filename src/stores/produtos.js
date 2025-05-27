import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usarDadosProdutos = defineStore('produto', () => {

  const produtos = ref([
    {id: 1, nome: 'Boneco do Bob Esponja e Gary', preco: 99.99, imgs: ['boneco_bob_esponja_e_gary_1.webp', 'boneco_bob_esponja_e_gary_2.webp', 'boneco_bob_esponja_e_gary_3.webp']},
    {id: 2, nome: 'Caneca Bob Esponja, Patrick e Gary', preco: 15, imgs: ['caneca_1.webp', 'caneca_2.webp', 'caneca_3.webp']},
    {id: 3, nome: 'Garrafa térmica do Patrick', preco: 30, imgs: ['garrafinha_1.webp', 'garrafinha_2.webp']},
    {id: 4, nome: 'Penal do Bob e da Srta. Puff', preco: 25, imgs: ['penal-bob-puff.jpg', 'penal-bob-puff-2.jpg', 'penal-bob-puff-3.jpg']},
    {id: 5, nome: 'Boneca da Sandy', preco: 99.99, imgs: ['boneca-sandy-2.webp', 'boneca-sandy.webp']},
    {id: 6, nome: 'Boneco do Plankton', preco: 119.99, imgs: ['boneco-plankton-2.webp', 'boneco-plankton.webp']},
    {id: 7, nome: 'Boneco do Seu Sirigueijo', preco: 79.99, imgs: ['boneco-siriguejo.webp', 'boneco-siriguejo-2.webp']},
    {id: 8, nome: 'Decoração casa do Bob', preco: 49.99, imgs: ['casa-do-bob.webp', 'casa-do-bob-2.webp']},
    {id: 9, nome: 'Funko Pop Homem Sereia', preco: 39.99, imgs: ['mermaid-man-2.webp', 'mermaid-man.webp']},
    {id: 10, nome: 'Pelúcia do Lula Molusco', preco: 59.99, imgs: ['pelucia-lula-molusco.webp', 'pelucia-lula-molusco-2.webp']},
    {id: 11, nome: 'Pelúcia do Seu Sirigueijo', preco: 59.99, imgs: ['pelucia-sr-siriguejo.webp', 'pelucia-sr-siriguejo-2.webp', 'pelucia-sr-siriguejo-3.webp']},
    {id: 12, nome: 'Funko Pop Mexilhãozinho', preco: 39.99, imgs: ['barnacle-boy.jpg']},
    {id: 13, nome: 'Carteira do Plankton', preco: 47.73, imgs: ['carteira-plankton.jpg', 'carteira-plankton-2.jpg', 'carteira-plankton-3.jpg']},
    {id: 14, nome: 'Chaveiro do Patrick', preco: 9.99, imgs: ['chaveiro-patrick.jpg']},
  ]);

  function carregarProdutos() {
    const dadosSalvos = localStorage.getItem('produtos');
    if (dadosSalvos) {
      this.produtos = JSON.parse(dadosSalvos);
    }
  };

  function salvarProdutos() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  };

  function adicionarProduto(produto) {
    this.produtos.push(produto);
    this.salvarProdutos();
  };

  function pegarProdutoPorId(id) {
    // Modelo universal
    for (let produto of produtos.value) {
      if (produto.id == id) {
        return produto
      }
    }
    return {}
  }

  return {produtos, pegarProdutoPorId, carregarProdutos, salvarProdutos, adicionarProduto}
})
