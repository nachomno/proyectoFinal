function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let producto = {
        nombre: n,
        descripcion: d
    }
    let url = "http://localhost:5000/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado");
            alert("Grabado");
            window.location.href = "index.html";  //NUEVO
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" );
            console.error(err);
        })
        
    
}

