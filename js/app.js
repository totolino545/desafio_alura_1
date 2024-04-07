let claves = [
    {
        "letra": "e",
        "clave": "enter"
    },
    {
        "letra": "i",
        "clave": "imes"
    },
    {
        "letra": "a",
        "clave": "ai"
    },
    {
        "letra": "o",
        "clave": "ober"
    },
    {
        "letra": "u",
        "clave": "ufat"
    }
    ];
    
    // Definicion de variables 
    
    let aCodificar = document.getElementById("codificador");
    let textoDeco = document.getElementById("textodeco");
    let textoDivDeco = document.getElementById("contenedor_decodificador");
    let codificado = document.getElementById("decodificador");
    let textoCodificado = document.getElementById("texto_codificado")
    
    // Funcion separadora del texto en letras o palabras
    
    function procesarTexto (separador){
         if(aCodificar.value) {
            let arrayObtenido = []
            const textoAProcesar = aCodificar.value.toLowerCase().split(separador);
            const textoProcesado = textoAProcesar.map((item) => {
                let valorObtenido = (separador === "") ? codificador(item) : decodificador(item); 
                arrayObtenido.push(valorObtenido);           
            });
            formatodecodificador();
            return arrayObtenido;  
        }else{
            alert('Debes ingresar un texto');
            return[];            
        }              
    }
    // Función botonera
    
    function codificartexto() {    
            let textoProcesado = procesarTexto(separador = "");                     
            textoCodificado.innerHTML = textoProcesado.join("");
    }
    
    function decodificartexto() {
            let textoProcesado = procesarTexto(separador = " ");              
            textoCodificado.innerHTML = textoProcesado.join(" ");
    }
    
    // Función codificadora
    function codificador(valor) {    
        const listaDeClaves = claves.map((clave) => {     
        if (valor === clave.letra) {
            valor = clave.clave;                      
        }          
        });
        aCodificar.value="";    
        return valor;
    }
    
    // Función decodificadora
    function decodificador(valor) {
        let textoReemplazado = valor;
        const listaDeClaves = claves.map((clave) => {     
            if (valor.includes(clave.clave)) {
                textoReemplazado = textoReemplazado.replaceAll(clave.clave, clave.letra);             
            }        
        });      
        return textoReemplazado;
    }
    // Función copia texto de div a textarea
    function copiartexto (){
        if(textoCodificado.innerHTML){
            aCodificar.value = textoCodificado.innerHTML;
            textoCodificado.innerHTML = " ";
        }else{
            alert('No hay nada que copiar!!!');
        }
    }
    // Formatea section y botones
    function formatodecodificador (){
        textoDivDeco.querySelector("div.textodeco").style.display = "none";
        textoDivDeco.style.justifyContent = "space-between";
        textoDeco.style.textAlign="left";    
    }
    
    