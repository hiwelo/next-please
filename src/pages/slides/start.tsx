import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const StartSlide: FunctionComponent = () => {
  return (
    <>
      <div>Start slide</div>
      <Link href={{ pathname: '/slides', query: { slideID: 1 } }}>
        First slide
      </Link>
    </>
  );
};

export default StartSlide;
