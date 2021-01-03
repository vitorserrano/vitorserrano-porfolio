import Link from 'next/link';

import Icon from '../Icon';

interface ButtonProps {
  icon: string;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ icon, title }) => {
  return (
    <Link href="/">
      <div
        className="
          bg-primary w-60 h-14 shadow-xl flex justify-center items-center mt-10 hover:opacity-90 transition cursor-pointer
          md:w-64 md:h-16
        "
      >
        <Icon name={icon} />

        <a className="ml-4 text-sm md:text-lg font-bold uppercase rounded-sm transition">
          {title}
        </a>
      </div>
    </Link>
  );
};

export default Button;
