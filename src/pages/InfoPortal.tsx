// #region Global Imports
import React, { useEffect, useMemo, useState } from 'react'
// #endregion Global Imports

// #region Local Imports
import { Template } from '@/templates/CentredContentTemplate'
import { InfoPortalTemplate } from '@/templates/InfoPortalTemplate'
// #endregion Local Imports

interface InfoPortalProps {}

// const InfoPortalMainTitles = [
//   { default: 'Make a positive habit', dark: 'Break a negative habit' },
// ]
// const InfoPortalStageTitles = [
//   'Create a profile',
//   'Start a Burner',
//   'Create a habit',
// ]
// const InfoPortalStageCopy = [
//   'It looks like you are new here. Fill in some details to join the network',
// ]

export const InfoPortal: React.FC<InfoPortalProps> = () => {
  return (
    <>
      <Template illustration={1} sidebar={true}>
        <InfoPortalTemplate>
          <div className="flex flex-col mt-2">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow">
                  <div className="flex items-start justify-start px-4 mb-6 space-x-4">
                    <div className="min-w-kanban">
                      <div className="py-4 text-base font-semibold text-gray-900">
                        Add another group
                      </div>
                      <button
                        type="button"
                        data-modal-toggle="new-card-modal"
                        className="flex items-center justify-center w-full h-32 py-2 m-0 font-semibold text-gray-500 border-2 border-gray-200 border-dashed rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow">
                  <div className="flex items-start justify-start px-4 mb-6 space-x-4">
                    <div className="min-w-kanban">
                      <div className="py-4 text-base font-semibold text-gray-900">
                        Add another group
                      </div>
                      <button
                        type="button"
                        data-modal-toggle="new-card-modal"
                        className="flex items-center justify-center w-full h-32 py-2 m-0 font-semibold text-gray-500 border-2 border-gray-200 border-dashed rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow">
                  <div className="flex items-start justify-start px-4 mb-6 space-x-4">
                    <div className="min-w-kanban">
                      <div className="py-4 text-base font-semibold text-gray-900">
                        Add another group
                      </div>
                      <button
                        type="button"
                        data-modal-toggle="new-card-modal"
                        className="flex items-center justify-center w-full h-32 py-2 m-0 font-semibold text-gray-500 border-2 border-gray-200 border-dashed rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InfoPortalTemplate>
      </Template>
    </>
  )
}