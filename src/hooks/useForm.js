import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [formState, setFormState] = useState(initialValues);

  const onInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return {
    ...formState,
    onInputChange
  };
};

export default useForm;
