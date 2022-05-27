import React from 'react';
import Head from 'next/head';
import { ReactNode } from "react";

const SITE_TITLE = 'Next.js + Tailwindcss Test';

const Layout = ({ children }:Props ) => {
  return (
  <>
    <Head>
      <title>{SITE_TITLE}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Head>
    <div>
        <main>
          <p>&nbsp;</p>
          <div className="main-content">
            {children}
          </div>
          <p>&nbsp;</p>
        </main>
    </div>
  </>
  );
}

type Props = {
  children?: ReactNode;
};

export default Layout
