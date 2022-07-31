import Head from 'next/head'
import { Box, Container } from '@mui/system'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode
  home?: boolean
  title?: string
}) {
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

      <Container maxWidth="xl">
        <Box sx={{ m: 5 }}>
          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <>
              <Link href={'/'}>
                <Button disabled={router.pathname === '/'}>ALL</Button>
              </Link>
              <Link href={'/wip'}>
                <Button disabled={router.pathname === '/wip'}>WIP</Button>
              </Link>
            </>
          </Box>

          <main>{children}</main>
        </Box>
      </Container>
    </>
  )
}
