import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * This component renders the content of the request slide, provided a parameter
 * in the URL
 */
const Slide: FunctionComponent = () => {
  const router = useRouter();
  const slideID = router.query.slideID || 0;
  const nextSlideID = Number(slideID) + 1;

  return (
    <>
      <div>Slide {slideID}</div>
      <Link
        href={{ pathname: '/slides/[id]', query: { slideID: nextSlideID } }}
        as={`/slides/${nextSlideID}`}
      >
        Next slide
      </Link>
    </>
  );
};

export default Slide;
