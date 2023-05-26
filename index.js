
'use strict';



const preencherFormulario = (endereco) => {

  document.getElementById("estado").value = endereco.uf;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("rua").value = endereco.logradouro;
}


const pesquisarCep = async () => {

  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json();

  preencherFormulario(endereco);


}


document.getElementById("cep").addEventListener("focusout", pesquisarCep);





