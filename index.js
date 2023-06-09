
'use strict';
const limparFormulario = (endereco) => {
  document.getElementById("estado").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("rua").value = "";
}


const preencherFormulario = (endereco) => {

  document.getElementById("estado").value = endereco.uf;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("rua").value = endereco.logradouro;
}
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  limparFormulario();
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')) {
      document.getElementById("rua").value = 'Cep não  encontrado!';
    } else {
      preencherFormulario(endereco);
    }

  } else {
    document.getElementById("rua").value = 'Cep incorreto!';
  }


}


document.getElementById("cep").addEventListener("focusout", pesquisarCep);




