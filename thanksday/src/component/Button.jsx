const Button = ({ title, eventType }) => {
  return (
    <button
      onClick={() => {
        eventType()
      }}
    >
      {title}
    </button>
  )
}

export default Button
