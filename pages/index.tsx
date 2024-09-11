import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/react";
import Wpp from "@/components/wpp";

export default function IndexPage() {
    return (
      <DefaultLayout>
        <section className="section-container">
          <Image
            width={87}
            height={88}
            alt="NextUI hero Image with delay"
            src="/assets/Emoji.png"
            className="no-rounded"
          />
          <div className="inline-block max-w-xl text-center justify-center">
            <br />
            <h1 className={title()}>WEB EN CONSTRUCCIÓN</h1>
            <div className="container-img">
            <Image
              width={239}
              height={100}
              alt="NextUI hero Image with delay"
              src="/assets/Modo_de_aislamiento.png"
              className="no-rounded2"
            />
            </div>
            <h4 className={subtitle({ class: "mt-4" })}>
              Estamos remodelando nuestra página
            </h4>
            <h4 className={subtitle({ class: "mt-4 font-thin" })}>
              Si necesitás contactarte con nosotros escribinos por cualquiera de estos medios que vamos a estar encantados de ayudarte
            </h4>
          </div>
          
     
          <div className="redes">
  <Link isExternal href="https://www.instagram.com/abra.chica/">
    <Image
      width={23}
      height={23}
      alt="NextUI hero Image with delay"
      src="/assets/ig.png"
      className="no-rounded"
    />
  </Link>
  <Link isExternal href="mailto:contacto@abradesol.com.ar">
    <Image
      width={25}
      height={23}
      alt="NextUI hero Image with delay"
      src="/assets/mail.png"
      className="no-rounded"
    />
  </Link>
</div>

        </section>
        <Wpp/>
      </DefaultLayout>
  );
}
