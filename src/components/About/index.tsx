import Container from '../Container';

import Icon from '../Icon';

const About: React.FC = () => {
  return (
    <Container color="foreground">
      <div className="flex flex-col justify-center items-center xl:items-start">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-primary shadow-xl rounded-sm flex justify-center items-center">
          <Icon name="FiUser" color="#e1e1e6" size={36} />
        </div>

        <h1
          className="
              text-lg text-center font-bold mt-10
              md:text-2xl
              lg:text-4xl
              xl:px-0 xl:text-left
            "
        >
          Um pouco sobre mim<b>.</b>
        </h1>

        <div
          className="
            mt-4 max-w-lg text-sm px-8 text-center
            md:max-w-2xl md:text-lg
            xl:max-w-xl xl:px-0 xl:text-left
          "
        >
          <p>Eu sou o Vitor e moro em Cianorte, Paraná. </p>
          <p>Comecei na programação em 2018 na faculdade com Java. </p>
          <p className="mt-2">
            Em 2019 consegui meu primeiro emprego como Desenvolvedor Web júnior,
            na época eu utilizava AngularJS, PHP e JS.{' '}
          </p>
          <p className="mt-2">
            Desde então, me apaixonei por desenvolvimento mobile e sigo carreira
            como Dev Mobile até o momento.
          </p>
        </div>
      </div>

      <div
        className="
          flex justify-center items-center mt-24 w-60
          md:mt-40 md:w-2/4
          xl:mt-0 xl:justify-end xl:items-end xl:w-5/12
        "
      >
        <img className="w-full h-full" src="/img/about.svg" />
      </div>
    </Container>
  );
};

export default About;
