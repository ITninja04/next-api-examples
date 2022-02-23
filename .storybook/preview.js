import '../src/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image';
import { Provider } from 'react-redux'
import {store} from '../src/store';
const OriginalNextImage = NextImage.default;


Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage { ...props } unoptimized />
})

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  }
}




export const decorators = [(StoryFn) => (
    <Provider store={store}>
      <ChakraProvider>
        <StoryFn />
      </ChakraProvider>
    </Provider>
  ),
];


