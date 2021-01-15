// write your custom hook here to control your checkout form
import { useState } from 'react';

function useForm(initialValues){
    const [values, setValues] = useState(initialValues);
    const handleChanges = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleChanges]
}
export default useForm