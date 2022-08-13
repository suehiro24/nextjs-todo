import { IconButton, IconButtonProps, styled } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled(
  (
    props: IconButtonProps & {
      expand: boolean
      roteteBefore?: number
      roteteAfter?: number
    }
  ) => {
    const { expand, ...other } = props
    return (
      <IconButton {...other}>
        <ExpandMoreIcon />
      </IconButton>
    )
  }
)(({ theme, expand, roteteBefore = -90, roteteAfter = 0 }) => ({
  transform: !expand
    ? `rotate(${roteteBefore}deg)`
    : `rotate(${roteteAfter}deg)`,
  marginLeft: 'auto',
  transition: theme?.transitions?.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default ExpandMore
