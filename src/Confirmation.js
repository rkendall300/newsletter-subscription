import iconSuccess from "./images/icon-success.svg";

const Confirmation = ({ email, toggleClick }) => {
  return (
    <div id="success-container">
      <div id="success-image-container">
        <img src={iconSuccess} alt="iconSuccess" />
      </div>
      <h2 id="thanks">Thanks for subscribing!</h2>
      <p id="confirm-text">
        A confirmation email has been sent to <p id="pmail">{email}</p>. Please
        open it and click the button inside to confirm your subscription
      </p>
      <button id="dismiss" className="subscribe" onClick={toggleClick}>Dismiss Message</button>
    </div>
  );
};

export default Confirmation;
