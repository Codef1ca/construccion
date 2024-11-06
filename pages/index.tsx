import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="fotos">
       <Image src="/assets/fica.png" alt="Descripción de la imagen" width={88} height={27} /> 
       <Image src="/assets/stop.png" alt="Descripción de la imagen" width={87.82} height={86} /> 
       </div>
       <div className="grande">
       <h1 className="titulo-404">ERROR 404</h1>
       <h2 className="subt-404">se vienen cositas...</h2>
       </div>

       <div className="chico">
       <p className="txt-1">Estamos  <Image src="/assets/Emoji.png" alt="Descripción de la imagen" width={13.54} height={13.95} />   tuneando <Image src="/assets/Emoji.png" alt="Descripción de la imagen" width={13.54} height={13.95} />   nuestra página</p>
       <p className="txt-2">Si necesitás contactarte con nosotros escribinos por cualquiera de estos medios que vamos a estar encantados de ayudarte</p>
       <hr className="linea"></hr>
       </div>
      
       <div className="redes">
      <a href="https://www.instagram.com/fica.team/" target="_blank">
      <Image src="/assets/insta-fica.png" alt="Descripción de la imagen" width={34} height={34} /> 
      </a>

      <a href="https://wa.me/+5493364260609" target="_blank">
      <Image src="/assets/wpp-fica.png" alt="Descripción de la imagen" width={34} height={34} /> 
      </a>

      <a href="mailto:guillermina@ficateam.com">
      <Image src="/assets/mail-fica.png" alt="Descripción de la imagen" width={34} height={34} /> 
      </a>
      </div>
    </main>
  );
}