  // ==== CONFIGURAÇÃO: troque pelo número real da oficina (DDI+DDD+número, só dígitos) ====
  const WHATSAPP_NUMBER = "5546999999999"; // <-- SUBSTITUA pelo número real da Mecânica Copini

  function openWhatsApp(message){
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const defaultMsg = "Olá! Vim pelo site da Mecânica Copini e gostaria de falar sobre meu carro.";
  ["waHero","waNav","waNavDesktop","waFooter","waFloat"].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.addEventListener("click", e=>{
        e.preventDefault();
        openWhatsApp(defaultMsg);
      });
    }
  });

  // Formulário de orçamento rápido
  document.getElementById("quoteForm").addEventListener("submit", function(e){
    e.preventDefault();
    const servico = document.getElementById("servico").value;
    const modelo = document.getElementById("modelo").value.trim();
    const detalhe = document.getElementById("detalhe").value.trim();

    let msg = `Olá! Gostaria de solicitar um orçamento.\n\nServiço: ${servico}\nModelo do carro: ${modelo}`;
    if(detalhe){ msg += `\nDetalhe: ${detalhe}`; }

    openWhatsApp(msg);
  });

  // Menu mobile
  const burger = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> navLinks.classList.remove("open"));
  });

  document.getElementById("year").textContent = new Date().getFullYear();