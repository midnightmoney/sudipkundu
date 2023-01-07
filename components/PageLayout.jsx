import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }) => {
  const router = useRouter();
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const today = `${currentDay}-${currentMonth}-${currentYear}`;
  return (
    <div className='w-full mx-auto max-w-4xl min-h-screen '>
      <Head>
        <title>Sudip Kundu</title>
        <meta name='description' content='Sudip Kundu portfolio website' />
        <meta
          name='keywords'
          content='Sudip Kundu, sudipkundu, Sudip, Kundu,sudipkundu.com , sudip-kundu, sudip kundu, sudip, kundu'
        />
        <meta property='og:title' content='Sudip Kundu' />
        <meta
          property='og:description'
          content='Sudip Kundu portfolio website'
        />
        <meta property='og:URL' content='https://www.sudipkundu.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/ddvxuu7ml/image/upload/v1672327859/sudipkundu-og-image_bap4sr.png'
        />
        <link
          rel='canonical'
          href={`https://www.sudipkundu.com` + router.pathname}
        />
        <link rel='icon' href='/favicon.png' />
        <meta property='release-date' content={today} />
      </Head>

      <Header />

      <main className='font-montserrat px-4 py-8 min-h-main'>{children}</main>

      <Footer />
    </div>
  );
};
