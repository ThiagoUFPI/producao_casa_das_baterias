// Google Tag Ads
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// Configuração do Google Ads
gtag('config', 'AW-16450953508');

// Função para registrar a conversão do WhatsApp
function gtag_report_conversionWhatsApp(url) {
    // console.log("whatsapp direcionado")
    var callback = function () {
        if (typeof (url) !== 'undefined') {
            // window.location = url;
             window.open(url, '_blank'); // Abre o link em uma nova guia
        }
    };
    gtag('event', 'conversion', {
        send_to: 'AW-16450953508/AEKMCOvS5N0ZEKTCtqQ9', // ID da conversão
        event_callback: callback
    });
    return false;
}

// Adiciona o evento de clique apenas para o link do WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links do documento
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        // Verifica se o link contém "api.whatsapp.com"
        if (link.href.includes('api.whatsapp.com')) {
            link.addEventListener('click', function (event) {
                const url = this.href; // Captura a URL do WhatsApp
                event.preventDefault(); // Evita redirecionamento imediato
                console.log("whatsapp direcionado")
                gtag_report_conversionWhatsApp(url); // Chama a função de conversão
            });
        } /* else if (link.href.includes('tel:')) {
                link.addEventListener('click', function (event) {
                    const url = this.href; // Captura a URL do WhatsApp
                    event.preventDefault(); // Evita redirecionamento imediato
                    console.log("link telefone")
                    //gtag_report_conversion(url); // Chama a função de conversão
                });

            }*/
    });
});

