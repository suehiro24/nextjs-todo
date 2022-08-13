import Head from 'next/head'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Todo App with Next.js" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            {'Todo App'}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
