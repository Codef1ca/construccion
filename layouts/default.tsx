import { Link } from "@nextui-org/link";

import { Head } from "./head";
import {Image} from "@nextui-org/react";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
      
          <span className="text-default-600">Diseñado por</span>
   
            <Image
              width={41}
              height={13}
              alt="NextUI hero Image with delay"
              src="/assets/fica.png"
              className="fica"
            />
    
      </footer>
    </div>
  );
}
