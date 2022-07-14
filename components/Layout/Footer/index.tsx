import React from "react";
import Image from "next/image";
import "./Footer.styles.css";
export const Footer: React.FC = () => {
  return (
    <footer className={"footer"}>
      <a
        href="https://www.prototypenext.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};
