import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';

const NextPleaseApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => <Component {...pageProps} />;

export default NextPleaseApp;
