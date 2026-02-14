import { useState } from "react";

export default function BookFotos({ slides }) {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="insta-wrapper">
      
      <div className="insta-container">
        <img
          src={slides[index].src}
          alt="Foto"
          className="insta-img"
        />

        <button className="flecha izquierda" onClick={anterior}>
          ‹
        </button>

        <button className="flecha derecha" onClick={siguiente}>
          ›
        </button>
      </div>

      <p className="descripcion">
        {slides[index].texto}
      </p>

    </div>
  );
}
