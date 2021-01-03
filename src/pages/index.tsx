import Link from 'next/link';

import Icon from '../components/Icon';
import Button from '../components/Button';

const Home: React.FC = () => {
  const socialMedia = [
    {
      key: String(Math.random()),
      href: 'https://www.linkedin.com/in/vitor-serrano/',
      icon: 'FiLinkedin',
      color: '#e1e1e6',
    },
    {
      key: String(Math.random()),
      href: 'https://twitter.com/virtuzera',
      icon: 'FiTwitter',
      color: '#8257e6',
    },
    {
      key: String(Math.random()),
      href: 'https://instagram.com/virtuzera',
      icon: 'FiInstagram',
      color: '#05D361',
    },
  ];

  return (
    <div className="w-full h-screen bg-background">
      <div className="max-w-7xl h-screen mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-row gap-6">
            {socialMedia.map(({ key, href, icon, color }) => (
              <Link key={key} href={href}>
                <a className="cursor-pointer hover:opacity-75">
                  <Icon name={icon} color={color} />
                </a>
              </Link>
            ))}
          </div>

          <h1 className="text-lg px-4 md:px-0 md:text-4xl mt-10">
            E aí? meu nome é <strong>Vitor Serrano,</strong> <br />
            sou <b>desenvolvedor mobile</b> <br />
            apaixonado pelo ecosistema Javascript
            <b>.</b>
          </h1>

          <Button icon="FiGithub" title="Meu GitHub" />
        </div>
        <div className="mt-24 md:mt-0">
          <img className="w-full h-60 md:h-80 lg:h-100" src="/img/dev.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
