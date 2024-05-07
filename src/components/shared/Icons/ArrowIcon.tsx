import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/arrow.svg';

const ArrowIcon: React.FC = () => {
  return <Image src={logo} width={50} height={50} alt="github" />;
};

export { ArrowIcon };
