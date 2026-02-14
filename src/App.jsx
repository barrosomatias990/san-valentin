import BookFotos from "./BookFotos";
import Corazones from "./Corazones";

function App() {
  return (
    <>
      <main className="container">
        <Corazones />
        <h1 className="fade-title title-with-heart">
          <span className="title-text">Feliz San Valentín</span>
          <span className="heart-white">🤍</span>
        </h1>

        
        <h2 className="fade-subtitle">
          Algunos momentos 
          <br />hermosos con vos <span className="emoji">💞</span>
        </h2>

        <div className="zoom-photo">
          <BookFotos
            slides={[
              { src: "/fotos/IMG_1836.jpg", texto: "El dia que te pedi que fueramos novios, un dia muy importante para los dos." },
              { src: "/fotos/IMG_0674.jpg", texto: "El egreso de mi hermano, la pasamos super lindo" },
              { src: "/fotos/FullSizeRender_Original.JPG", texto: "Foto gym, es la primer foto que subimos estando en el gym" },
              { src: "/fotos/IMG_0292.jpg", texto: "Primer verano juntos, fue muy lindo y estuvimos en varios lugares, me encanto ese verano con vos" },
              { src: "/fotos/IMG_0554_Original.jpg", texto: "Salida al cine, me invitaste vos amor de mi vida, me gusto mucho la película" },
              { src: "/fotos/IMG_0624.jpg", texto: "Amor de mi vida mostrando su cara hermosa, me encantaaa" },
              { src: "/fotos/IMG_1149.jpg", texto: "Primer San Valentin juntos, fuimos a potrerooo" },
              { src: "/fotos/IMG_1256.jpg", texto: "Hermosa de mi vida, contenta cenando" },
              { src: "/fotos/IMG_1675.jpg", texto: "Primer foto en el gym (quiero volver a esos momentos super lindos)" },
              { src: "/fotos/IMG_1683.jpg", texto: "Hermosa de mi vida" },
              { src: "/fotos/IMG_1712.jpg", texto: "Cumple de xv de mi prima, estuvo super lindo" },
              { src: "/fotos/IMG_1837.jpg", texto: "Esta foto me encanta, muy felices a nada de convertirnos en novios💞" },
              { src: "/fotos/IMG_1960.jpg", texto: "El amor de mi vida me hizo milanesas napolitanas con puré" },
              { src: "/fotos/IMG_2176.jpg", texto: "Nuestro lugar para vernos siempre" },
              { src: "/fotos/IMG_2373.jpg", texto: "Hermosa de mi corazón, siempre acompañandome en cada partido" },
              { src: "/fotos/IMG_2995.jpg", texto: "Un dia lindo en tu casa que sacamos muchas fotossss" },
              { src: "/fotos/IMG_0009.jpg", texto: "Sabias venir a casa a estar conmigo, super felices y contentos" },
              { src: "/fotos/IMG_0285.jpg", texto: "Cumple de mi mami, hermosa de mi corazonnn" }
            ]}
          />
        </div>

        <div className="card">
          <h2>Feliz San Valentín, mi amorrr 💘</h2>
          <p>Hoy es nuestro segundo San Valentín juntos.</p>
          <p>
          Un año más a tu lado, lleno de momentos hermosos, de abrazos, de risas y de mucho amor.
          Gracias por aparecer en mi vida y hacerme tan feliz cada día.
          </p>
          <p>
          No te das una idea de lo feliz que soy con vos.
          Sos mi vida entera, mi lugar seguro, mi lugar favorito y la razón de tantas sonrisas.
          </p>
          <p>
          Amo cada momento a tu lado, cada charla, cada abrazo y cada pequeño detalle.
          </p>
          <p>
          Por muchos 14 de febrero juntos, por más recuerdos, por más amor y por toda una vida compartida.
          </p>
          <p>
          Te amo para toda la vida.
          </p>
          <p class="firma">Matias Barroso</p>
        </div>
      </main>
    </>
  );
}

export default App;
