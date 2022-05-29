import ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';

import Contexts from './contexts';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Contexts>
    <ColorModeScript />
    <Routes />
  </Contexts>,
);
