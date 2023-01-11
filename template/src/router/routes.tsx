import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';

import { Loader } from 'components';

import { Path } from './path';

const Home = loadable(() => import('pages/Home/Home'), { fallback: <Loader /> });
const About = loadable(() => import('pages/About/About'), { fallback: <Loader /> });

export const routes: RouteObject[] = [
  {
    path: Path.Root,
    index: true,
    element: <Home />,
  },
  {
    path: Path.About,
    element: <About />,
  },
];
