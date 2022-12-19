var args = location.search.substring(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtDescripcion").value = decodeURIComponent(parts[2][1])


 
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    
    let producto = {
        nombre: n,
        descripcion: d
    }
    let url = "http://localhost:5000/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado");
            alert("Registro modificado");
            window.location.href = "index.html";  //NUEVO 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
    
 
}
var args = location.search.substring(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
