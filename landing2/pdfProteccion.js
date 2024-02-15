// document.addEventListener('DOMContentLoaded', function() {
//     const pdfFrame = document.getElementById('pdfFrame');
    
//     pdfFrame.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     });

//     pdfFrame.contentWindow.document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     });

//     pdfFrame.addEventListener('mousedown', function(e) {
//         e.preventDefault();
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const pdfFrame = document.getElementById('pdfFrame');
    
    pdfFrame.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    pdfFrame.contentWindow.document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    pdfFrame.addEventListener('mousedown', function(e) {
        e.preventDefault();
    });

    // Añade la siguiente línea para hacer que el contenido del PDF sea responsive
    pdfFrame.contentWindow.document.querySelector('body').style.width = '100%';
});

