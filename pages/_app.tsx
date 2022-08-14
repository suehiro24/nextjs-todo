import 'styles/globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { AppProps } from 'next/app'
import { TasksProvider } from 'components/TodosContext'
import 'styles/all-pages-style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  )
}

export default MyApp
