import Image from 'next/image'

const Logo = ({ ...props }) => (
  <Image
    src="/logoprobie.png"
    alt="Logo"
    width={64}
    height={64}
    {...props}
  />
);

export default Logo;
