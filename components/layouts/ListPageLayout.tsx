import { Box, Container } from '@mui/system'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from 'components/Header'

export default function ListPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <>
      <Header />

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
