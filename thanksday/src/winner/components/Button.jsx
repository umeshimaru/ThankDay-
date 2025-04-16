import Button from '@mui/material/Button'
const Btn = ({ title, eventType, color }) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={() => {
        eventType()
      }}
    >
      {title}
    </Button>
  )
}

export default Btn
