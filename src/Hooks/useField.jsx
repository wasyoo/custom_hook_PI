import React, { useState } from 'react'

function useField(type) {
  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange,
    type
  }
}

export default useField
