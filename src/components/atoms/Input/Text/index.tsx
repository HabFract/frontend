// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

// #region Interface Imports
import { ITextInput } from './types'
// #endregion Interface Imports

export const TextInput: React.FC<ITextInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  return (
    <input
      aria-label={field.name}
      className="block w-3/4 px-2 pt-4 mx-auto text-base text-gray-900 border border-gray-300 rounded-lg xl:w-96 lg:w-3/4 md:w-1/2 bg-gray-50 focus:ring-primary-200 focus:border-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-blue-500"
      type="text"
      {...field}
      {...props}
    />
  )
}
