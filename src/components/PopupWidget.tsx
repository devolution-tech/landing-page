import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoWhatsApp from '/public/img/logo-whatsApp.svg';

export const PopupWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-600 shadow-lg hover:bg-green-700 focus:bg-green-700 focus:outline-none">
      <Link href="https://wa.me/628127548833" target="_blank">
        <Image src={logoWhatsApp} alt="logo-whatsapp" width={38} height={38} />
      </Link>
    </div>
  );
};
