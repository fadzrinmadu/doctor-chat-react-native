import { useState } from 'react';

export const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType: string, params: any) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({ ...values, [formType]: params });
    },
  ];
};
