import './ErrorPassword.css'

const ErrorPassword = ({message}) => {
  return (
    <div className="ErrorPass">
        <p>{message}</p>
    </div>
  )
}

export default ErrorPassword