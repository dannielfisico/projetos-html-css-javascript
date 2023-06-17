const btnWhatsapp = document.querySelector(".btnWhatsapp")

function mostarbtnWhatsapp(){
    setInterval(() => {
        btnWhatsapp.style.display = "block" 
    }, 5000);
}
mostarbtnWhatsapp()