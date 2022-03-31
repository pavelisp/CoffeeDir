import './Input.scss';

function Input({ label, name, type, value, handleInputChange }) {
  return (
    <div className="field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <input onChange={handleInputChange} type={type} id={name} name={name} className="field__input" defaultValue={value}/>
    </div>
  );
}

export default Input;
