import './input-form.styles.scss'
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div>
            {
                label && (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
            <input className="input-form" {...otherProps} />
        </div>
    )
}

export default FormInput;