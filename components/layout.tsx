import Head from 'next/head'
import { Box, Container } from '@mui/system'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode
  home?: boolean
  title?: string
}) {
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
      <Container maxWidth="xl">
        <Box sx={{ m: 5 }}>
          <Typography variant="subtitle1" component="h2">
            {title}
          </Typography>

          <main>{children}</main>
        </Box>
      </Container>
    </>
  )
}
