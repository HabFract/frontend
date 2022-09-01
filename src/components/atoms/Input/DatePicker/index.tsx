// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

// #region Interface Imports
import { IDatePickerInput } from './types'
// #endregion Interface Imports

const todayDateInputValue = function () {
  const local = new Date()
  local.setMinutes(0)
  return local.toJSON().slice(0, 10)
}

export const DatePickerInput: React.FC<IDatePickerInput.IProps> = ({
  field,
  form,
  defaultValue = todayDateInputValue(),
  ...props
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        name={field.name}
        type="text"
        value={defaultValue}
        aria-label={field.name}
        {...field}
        {...props}
        onChange={(e) => {
          form.setFieldValue(field.name, (e) => e.currentTarget.value)
          form.setFieldTouched(field.name, true)
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  )
}
