import { FormInputLabel, Input, Group } from "./input-form.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;