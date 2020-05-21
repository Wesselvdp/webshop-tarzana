import React, { useState } from 'react';

const useInput = (initialValue: string) => {
   const [value, setValue] = useState(initialValue);

  const handleChange = (e: any) =>   {
        setValue(e.target.value);
    }

   return [value, handleChange];
}

export default useInput