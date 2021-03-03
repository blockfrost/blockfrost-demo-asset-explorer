import React, { FunctionComponent } from "react";
import { Header, Footer } from "components";
import Head from "next/head";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  title: string;
}

const MainLayout: FunctionComponent<Props> = ({
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
