
function cambiarTrack(track) {
   var value =  track.getAttribute("value")
   viejo_audio = document.getElementById("reproductor")
   audio_padre = viejo_audio.parentNode
   audio_padre.removeChild(viejo_audio)
   nuevo_audio = document.createElement("audio")
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")
  // nuevo_audio.setAttribute("autoplay", "autoplay")
   source = document.createElement("source")
   source.setAttribute("src", value)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source)
   audio_padre.appendChild(nuevo_audio)}
function cargarReproductor() {
         var select = document.getElementById("selectTrack")
         var value = select.options[0].getAttribute("value")
   nuevo_audio = document.createElement("audio")
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")       
   source = document.createElement("source")
   source.setAttribute("src", value)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source)
   padre = document.getElementById("reproductorBox")
   padre.appendChild(nuevo_audio)
}
function mensaje ()
        {
            nombre= document.form1.txtnombre.value;
            apellido=document.form1.txtapellido.value;
          

            if (nombre == false)
          {
            window.alert("debe colocar un nombre")
          }
          else
          {
            const guardarArchivoDeTexto = (contenido, nombre) => {
              const a = document.createElement("a");
              const archivo = new Blob([contenido], { type: 'text/plain' });
              const url = URL.createObjectURL(archivo);
              a.href = url;
              a.download = nombre;
              a.click();
              URL.revokeObjectURL(url);
          }
          
              guardarArchivoDeTexto(nombre +" "+ apellido, "archivo.txt");
          
          window.alert("Formulario enviado, correctamente")
          }
            
        }

