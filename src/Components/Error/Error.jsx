import "./Error.css";

//El mensaje de error lo paso dinamicamente desde Register
const Error = ({message}) => {
  return (
    <div className="errorForm">
      <p>{message}</p>
    </div>
  );
};

export default Error;
