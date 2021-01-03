import * as Feather from 'react-icons/fi';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const TagName = Feather[name];

  return <TagName color={color || '#e1e1e6'} size={size || 28} />;
};

export default Icon;
