// Esconde o menu da navegação quando a página é rolada para baixo
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      document.querySelector("nav").style.top = "-60px";
    } else {
      document.querySelector("nav").style.top = "0";
    }
  });
  
  // Faz com que os links da navegação levem o usuário para a seção correspondente da página
  document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(event.target.hash).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Valida o formulário de contato antes de enviar
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var mensagem = document.querySelector("#mensagem").value;
    if (nome.length == 0 || email.length == 0 || mensagem.length == 0) {
      alert("Por favor, preencha todos os campos do formulário.");
    } else {
      alert("Obrigado pelo seu contato! Responderemos em breve.");
    }
  });
  