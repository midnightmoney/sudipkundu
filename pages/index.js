import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sudip Kundu</title>
        <meta name="description" content="Sudip Kundu's portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-screen h-screen flex justify-center items-center">
        <div className="text-8xl">Sudip Kundu</div>
      </main>

      <footer></footer>
    </div>
  );
}
