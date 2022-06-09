import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sudip Kundu</title>
        <meta name="description" content="Sudip Kundu portfolio website" />
        <meta
          name="keywords"
          content="Sudip Kundu, sudipkundu, portfolio website, web developer, frontend, html, css, javascript, react, react context, react router, redux toolkit, tailwind, firebase"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-screen h-screen flex justify-center items-center bg-black text-white">
        <div className="text-8xl text-center">Sudip Kundu</div>
      </main>

      <footer></footer>
    </div>
  );
}
