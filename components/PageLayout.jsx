import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto max-w-4xl min-h-screen ">
      <Head>
        <title>Sudip Kundu</title>
        <meta name="description" content="Sudip Kundu portfolio website" />
        <meta
          name="keywords"
          content="Sudip Kundu, sudipkundu, portfolio website, web developer, frontend, html, css, javascript, react, react context, react router, redux toolkit, tailwind, firebase"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="px-4 py-8 min-h-main">{children}</main>

      <Footer />
    </div>
  );
};
