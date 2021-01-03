import Head from 'next/head';

import Banner from '../Banner';
import About from '../About';

const Layout: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Vitor Serrano</title>
      </Head>

      <Banner />
      <About />
    </div>
  );
};

export default Layout;
