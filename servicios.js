document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "0";
});


function displayTreatmentInfo(treatment) {
    const treatmentInfo = document.getElementById("treatmentInfo");
    let info = "";
    let imageUrl = "";

    
    switch (treatment) {
        case "blefaroplastia":
            info = `
                <h2>✨Blefaroplastia - $19,000</h2>
                <p>Transforme su mirada con nuestra avanzada cirugía de párpados. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Anestesia Local</li>
                    <li>Incisiones en los pliegues naturales del párpado</li>
                    <li>Remoción de Exceso de Piel y Grasa</li>
                    <li>Suturas finas</li>
                    <li>Recuperación con seguimiento postoperatorio</li>
                </ul>
                <p>✨ Beneficios: Mejora la apariencia de los ojos, reduce signos de envejecimiento, y da una mirada más fresca y descansada.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/1.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "armonizacionFacial":
            info = `
                <h2>✨Armonización Facial - $12,000</h2>
                <p>Equilibre y resalte su belleza natural con nuestro tratamiento de armonización facial. Este procedimiento redefine los contornos faciales para un aspecto más equilibrado y estético.</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Ácido Hialurónico de Alta Calidad</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Inmediatos</li>
                    <li>Recuperación Rápida</li>
                </ul>
                <p>✨ Beneficios: Mejora la armonía facial, resalta los rasgos naturales, y brinda una apariencia más atractiva y juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/2.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "bioestimulantes":
            info = `
                <h2>✨Bioestimulantes - $4,700</h2>
                <p>Estimule la producción de colágeno en su piel con nuestros bioestimulantes de neocolágeno. Este tratamiento mejora la firmeza y elasticidad de la piel, reduciendo las arrugas y líneas finas. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Bioestimulantes</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Mejora la calidad de la piel, estimula la producción de colágeno, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/3.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "acidoHialuronico":
            info = `
                <h2>✨Ácido Hialurónico</h2>
                <p>Hidrate y rellene su piel con ácido hialurónico para obtener un aspecto más joven y radiante. Este tratamiento es ideal para suavizar las arrugas y aumentar el volumen en áreas específicas del rostro. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Ácido Hialurónico de Alta Calidad</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Inmediatos</li>
                    <li>Recuperación Rápida</li>
                </ul>
                <p>✨ Beneficios: Aumenta el volumen facial, hidrata la piel, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/4.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "rinomodelacion":
            info = `
                <h2>✨Rinomodelación - $4,700</h2>
                <p>Mejore la forma y perfil de su nariz sin necesidad de cirugía con nuestra rinomodelación. Utilizando rellenos dérmicos, logramos un perfil nasal más armonioso y estético. Nuestro tratamiento de rinomodelación incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Ácido Hialurónico de Alta Calidad</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Inmediatos</li>
                    <li>Recuperación Rápida</li>
                </ul>
                <p>✨ Beneficios: Corrige imperfecciones nasales, mejora la armonía facial, y resalta la belleza natural de la nariz.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/5.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "botox":
            info = `
                <h2>✨Toxina Botulínica (Botox) - $1,000 por zona (retoque gratis)</h2>
                <p>Elimine arrugas y líneas de expresión con nuestro tratamiento de Botox. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Toxina Botulínica</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Reduce arrugas y líneas de expresión, rejuvenece la piel, y brinda una apariencia más fresca y juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/6.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "levantamientoGluteo":
            info = `
                <h2>✨Levantamiento de Glúteos - $2,100</h2>
                <p>Obtenga unos glúteos más firmes y elevados con nuestro procedimiento de levantamiento de glúteo. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Procedimiento Quirúrgico</li>
                    <li>Levantamiento de Glúteos</li>
                    <li>Recuperación con seguimiento postoperatorio</li>
                </ul>
                <p>✨ Beneficios: Levanta y tonifica los glúteos, mejora la forma y proyección de los glúteos, y brinda una apariencia más atractiva y juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/7.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "lipoenzimas":
            info = `
                <h2>✨Lipoenzimas de Primera y Segunda generación - $1,900</h2>
                <p>Reduzca la grasa localizada de manera efectiva con nuestras lipoenzimas de primera y segunda generación. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Lipoenzimas</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Reduce grasa localizada, moldea la figura, y mejora la apariencia corporal.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/8.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "pbserum":
            info = `
                <h2>✨Tratamiento PB Serum - $4,900</h2>
                <p>Rejuvenezca su piel con el tratamiento avanzado de Pbserum, mejorando la textura y firmeza. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de PB Serum</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Mejora la calidad de la piel, hidrata y revitaliza, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/9.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "dermapen":
            info = `
                <h2>✨Dermapen DMAE - $900 | Dermapen NCPR - $1,000 💫</h2>
                <p>Estimule la regeneración de la piel con nuestro tratamiento de Dermapen, mejorando la textura y luminosidad de la piel. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Dermapen</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Estimula la regeneración de la piel, mejora la textura y luminosidad, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/10.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "hidropoclasia":
            info = `
                <h2>✨Hidropoclasia - $1,900 💫</h2>
                <p>Reduzca la grasa localizada con hidropoclasia, un procedimiento no invasivo para mejorar su contorno corporal. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Solución Hipertónica</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Reduce grasa localizada, moldea la figura, y mejora la apariencia corporal.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/11.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "peelingQuimico":
            info = `
                <h2>✨Peeling Químico Superficial - $1,500 | Medio-Profundo - $1,800 💫</h2>
                <p>Renueve su piel con nuestros peelings químicos, eliminando imperfecciones y mejorando la textura. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Peeling Químico</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Renueva la piel, mejora la textura y luminosidad, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/12.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "despigmentanteIntimo":
            info = `
                <h2>✨Despigmentante Íntimo - $1,500</h2>
                <p>Mejore la apariencia de la piel en zonas íntimas con nuestro tratamiento despigmentante. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Despigmentante</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Mejora la apariencia de la piel, reduce manchas y pigmentación, y brinda una piel más uniforme y estética.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/13.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "prpDermapen":
            info = `
                <h2>✨PRP, PRF, y CGF con Dermapen - $900 💫</h2>
                <p>Revitalice su piel con factores de crecimiento, mejorando la textura y apariencia general. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de PRP y Dermapen</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Estimula la regeneración de la piel, mejora la textura y luminosidad, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/14.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "radiofrecuencia":
            info = `
                <h2>✨Radiofrecuencia - 10 sesiones por $3,200 💫</h2>
                <p>Mejore la firmeza de su piel con nuestro tratamiento de radiofrecuencia, ideal para rejuvenecer el rostro y cuerpo. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Radiofrecuencia</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Reafirma y tonifica la piel, mejora la firmeza y elasticidad, y reduce signos de envejecimiento para un aspecto más juvenil.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/15.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "vacuum":
            info = `
                <h2>✨Vacuum - 10 sesiones por $3,200 💫</h2>
                <p>Reduzca la celulitis y mejore la textura de su piel con nuestro tratamiento de vacuum o radiofrecuencia. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Vacuum</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Reduce celulitis, remodela la figura corporal, y mejora la apariencia de la piel para un aspecto más estético.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/16.jpg"; // Reemplaza con la URL de la imagen
            break;
        case "gimnasioPasivo":
            info = `
                <h2>✨Gimnasio Pasivo - 10 sesiones por $3,200 💫</h2>
                <p>Mejore la tonificación muscular y reduzca la grasa corporal con nuestro tratamiento de gimnasio pasivo. Este procedimiento incluye:</p>
                <ul>
                    <li>Consulta Inicial</li>
                    <li>Aplicación de Gimnasio Pasivo</li>
                    <li>Procedimiento sin Dolor</li>
                    <li>Resultados Duraderos</li>
                    <li>Recuperación Inmediata</li>
                </ul>
                <p>✨ Beneficios: Tonifica y fortalece los músculos, reduce grasa corporal, y mejora la apariencia corporal para un aspecto más estético.</p>
                <div class="social-icons">
                    <a href="https://wa.link/ai2gmt" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
                    <a href="https://m.me/dr0scaribarra" target="_blank"><i class="fa-brands fa-facebook-messenger fa-xl"></i></a>
                </div>
            `;
            imageUrl = "./assets/Foto/Servicios Flyers no cargados/19.jpg"; // Reemplaza con la URL de la imagen
            break;
        default:
            info = `<p>Seleccione un tratamiento para ver más detalles.</p>`;
    }

    treatmentInfo.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="${treatment}">` : ""}
        ${info}
    `;
}


