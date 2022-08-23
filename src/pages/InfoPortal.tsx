// #region Global Imports
import React from 'react'
import { useNavigate } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { Template } from '@/templates/SplitContentTemplate'
import { InfoPortalTemplate } from '@/templates/InfoPortalTemplate'
import { TitleBar } from '@/molecules/TitleBar'
import { ListGroup } from '@/organisms/ListGroup'
import { ListGroupItem } from '@/molecules/ListGroupItem'

import Cog from '../assets/svg/Icons/cog.svg'
import QuestionMarkCircle from '../assets/svg/Icons/question-mark-circle.svg'
import Speakerphone from '../assets/svg/Icons/speakerphone.svg'
// #endregion Local Imports

interface InfoPortalProps {}

const InfoPortalMainTitles = [
  { default: 'Make a positive habit', dark: 'Break a negative habit' },
]

export const InfoPortal: React.FC<InfoPortalProps> = () => {
  const navigate = useNavigate()

  return (
    <>
      <TitleBar
        titles={InfoPortalMainTitles[0]}
        backAction={() => navigate(`/`)}
      />
      <Template
        illustration={1}
        sidebar={true}
        sidebarComponent={
          <ListGroup>
            <ListGroupItem
              iconUrl={Speakerphone}
              primaryText="What"
              secondaryText="Learn about the functions of HabitFract"
            />
            <ListGroupItem
              iconUrl={QuestionMarkCircle}
              primaryText="Why"
              secondaryText="Learn about our reasoning and motivation"
            />
            <ListGroupItem
              iconUrl={Cog}
              primaryText="How"
              secondaryText="Learn about the technology that powers us"
            />
          </ListGroup>
        }
      >
        <InfoPortalTemplate>
          <section className="relative z-20 w-full py-8 bg-white h-1/2 dark:bg-gray-900 lg:py-0">
            <div className="lg:flex">
              <div className="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
                <div className="w-full">
                  <div className="flex items-center justify-center mb-8 space-x-4 lg:hidden">
                    <a
                      href="#"
                      className="flex items-center text-2xl font-semibold"
                    >
                      <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                      />
                      <span className="text-gray-900 dark:text-white">
                        Flowbite
                      </span>
                    </a>
                  </div>
                  <ol className="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base">
                    <li className="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                        <div className="mr-2 sm:mb-2 sm:mx-auto">1</div>
                        Personal{' '}
                        <span className="hidden sm:inline-flex">Info</span>
                      </div>
                    </li>
                    <li className="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                        <div className="mr-2 sm:mb-2 sm:mx-auto">2</div>
                        Account{' '}
                        <span className="hidden sm:inline-flex">Info</span>
                      </div>
                    </li>
                    <li className="flex items-center sm:block">
                      <div className="mr-2 sm:mb-2 sm:mx-auto">3</div>
                      Confirmation
                    </li>
                  </ol>
                  <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mb-6 dark:text-white">
                    Tell us about yourself
                  </h1>
                  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                    What is your profession?
                  </p>
                  <ul className="mb-6 space-y-4 sm:space-y-6">
                    <li>
                      <input
                        type="radio"
                        id="designer"
                        name="profession"
                        value="designer"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="designer"
                        className="inline-flex items-center justify-center w-full p-5 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-6 h-6 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="w-full">I’m a Designer</span>
                        <svg
                          className="w-6 h-6 ml-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="developer"
                        name="profession"
                        value="developer"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="developer"
                        className="inline-flex items-center justify-center w-full p-5 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-6 h-6 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="w-full">I’m a Developer</span>
                        <svg
                          className="w-6 h-6 ml-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </label>
                    </li>
                  </ul>
                  <button className="w-full px-5 py-2.5 sm:py-3.5 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Next: Account Info
                  </button>
                  <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </InfoPortalTemplate>
      </Template>
    </>
  )
}
