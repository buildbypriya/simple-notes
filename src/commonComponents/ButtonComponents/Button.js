import { Link } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {
  const { buttonText, onClick, variant, pathName, iconSrc, iconAltText } =
    props;

  // variant defines the type of button
  // we have 3 button variants: default,secondary,link

  // to use dafault variant, we need onClick, buttonText
  let buttonVariant = (
    <button className="default" onClick={onClick}>
      {buttonText}
    </button>
  );

  // to use secondary variant, we need onClick, buttonText
  if (variant === "secondary") {
    buttonVariant = (
      <button className="secondary" onClick={onClick}>
        {buttonText}
      </button>
    );
  }

  // to use icon variant, we need : iconSrc, iconAltText, onCLick
  if (variant === "icon") {
    buttonVariant = (
      <button className="icon" onClick={onClick}>
        <img src={iconSrc} alt={iconAltText} />
      </button>
    );
  }

  // to use link variant, we need pathName, buttonText
  if (variant === "link") {
    buttonVariant = (
      <Link className="link" to={pathName}>
        {buttonText}
      </Link>
    );
  }

  return <div className="buttonComponent">{buttonVariant}</div>;
};

export default Button;
