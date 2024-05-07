import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/error.svg';

const Error404Icon: React.FC = () => {
  return <Image src={logo} width={100} height={100} alt="menu" />;
};

export { Error404Icon };
