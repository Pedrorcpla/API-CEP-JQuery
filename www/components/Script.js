$(document).on("click","#buscar", function(){
  $.ajax({
    type: "get", //como vou enviar
    url: "https://viacep.com.br/ws/"+$("#cep").val()+"/json/", //para onde enviar
    success: function(data){//executar caso dê certo
      var conteudo;
      conteudo = "<h4><strong>Logradouro:</strong> "+data.logradouro+"</h4>";
      conteudo += "<h4><strong>Bairro:</strong> "+data.bairro+"</h4>";
      conteudo += "<h4><strong>Cidade:</strong> "+data.localidade+"</h4>";
      conteudo += "<h4><strong>Estado:</strong> "+data.uf+"</h4>";

      $("#dados").html(conteudo);
    },
    error: function(){//executar caso dê errado
      alert("Deu erro");
    }
  })
});
