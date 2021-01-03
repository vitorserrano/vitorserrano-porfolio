import Container from '../Container';
import Button from '../Button';
import List from '../List';
import SocialMedia from '../SocialMedia';

const Banner: React.FC = () => {
  return (
    <Container color="background">
      <div className="flex flex-col justify-center items-center xl:items-start">
        <div className="flex flex-row gap-6">
          <List
            elements={[
              <SocialMedia
                key="first"
                href="https://www.linkedin.com/in/vitor-serrano/"
                icon="FiLinkedin"
                color="#e1e1e6"
              />,
              <SocialMedia
                key="second"
                href="https://twitter.com/virtuzera"
                icon="FiTwitter"
                color="#8257e6"
              />,
              <SocialMedia
                key="third"
                href="https://instagram.com/virtuzera"
                icon="FiInstagram"
                color="#05D361"
              />,
            ]}
          />
        </div>

        <h1
          className="
            text-lg px-12 mt-10 text-center
            md:text-2xl
            lg:text-4xl
            xl:px-0 xl:text-left
          "
        >
          E aí? meu nome é <strong>Vitor Serrano,</strong> <br />
          sou <b>desenvolvedor mobile</b> <br />
          apaixonado pelo ecosistema Javascript
          <b>.</b>
        </h1>

        <Button icon="FiGithub" title="Meu GitHub" />
      </div>

      <div
        className="
        flex justify-center items-center mt-24 w-60
        md:mt-40 md:w-2/4
        xl:mt-0 xl:justify-end xl:items-end xl:w-2/6
      "
      >
        <img className="w-full h-full" src="/img/dev.svg" />
      </div>
    </Container>
  );
};

export default Banner;
