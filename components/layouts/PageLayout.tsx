import { Box, Container } from '@mui/system'
import { useRouter } from 'next/router'
import Header from 'components/Header'

export default function PageLayout({
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
          <main>{children}</main>
        </Box>
      </Container>
    </>
  )
}
