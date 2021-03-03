import React, { FunctionComponent } from "react";
import { Header, Footer } from "components";
import Head from "next/head";

const MainLayout: FunctionComponent<LayoutProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { MainLayout };
