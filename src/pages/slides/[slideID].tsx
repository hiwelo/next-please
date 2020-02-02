import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { KeyboardActions } from '../../components';

/**
 * This component renders the content of the request slide, provided a parameter
 * in the URL
 */
const Slide: FunctionComponent = () => {
  const router = useRouter();
  const slideID = router.query.slideID || 0;
  const nextSlideID = Number(slideID) + 1;
  const previousSlideID = Number(slideID) - 1;
  const actions = {
    next: `/slides/${nextSlideID}`,
    previous: `/slides/${previousSlideID}`,
  };

  return (
    <>
      <KeyboardActions actions={actions} />
      <div>Slide {slideID}</div>
    </>
  );
};

export default Slide;
