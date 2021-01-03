import Link from 'next/link';

import Icon from '../Icon';

interface SocialMediaProps {
  href: string;
  icon: string;
  color: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ href, icon, color }) => {
  return (
    <Link href={href}>
      <div className="w-14 h-14 bg-foreground shadow-xl rounded-full flex justify-center items-center cursor-pointer hover:opacity-75 transition">
        <Icon name={icon} color={color} />
      </div>
    </Link>
  );
};

export default SocialMedia;
