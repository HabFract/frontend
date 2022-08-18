// #region Global Imports
// #endregion Global Imports
// #region Local Imports
// #endregion Local Imports
// #region Interface Imports
import { ISwitchInput } from './types'
import Switch from 'antd/lib/switch'
import React, { useState } from 'react'

// #endregion Interface Imports

export const SwitchInput: React.FC<ISwitchInput.IProps> = ({
  field,
  form,
  defaultChecked,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  return (
    <Switch
      {...props}
      onChange={(e) => {
        setIsChecked(!isChecked)
        form.setFieldValue(field.name, isChecked)
        form.setFieldTouched(field.name, true)
      }}
    />
  )
}
