const Message = props => {
  const {isTrue} = props
  if (isTrue) {
    return <h1>Please Login</h1>
  }
  return <h1>Welcome User</h1>
}

export default Message
