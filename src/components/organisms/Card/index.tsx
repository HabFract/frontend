// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { CardContainer } from './styled'
import { P, Heading } from '@/atoms/.'
// #endregion Local Imports

// #region Interface Imports
import { ICard } from './types'
// #endregion Interface Imports

export const Card: React.FunctionComponent<ICard.IProps> = ({
  title,
  subTitle,
  bodyText,
  readMoreAction,
}: ICard.IProps) => {
  return (
    <CardContainer>
      <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-base font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-50">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Tutorial
          </span>
          <span className="text-sm">14 days ago</span>
        </div>
        <Heading caps={false} level={3}>
          <a href="#">{title}</a>
        </Heading>
        <Heading caps={false} level={4}>
          {subTitle}
        </Heading>
        <P level={3} copyText={bodyText as string} />

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between space-x-4">
            <img
              className="rounded-full w-7 h-7"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <span className="font-medium dark:text-white">Jese Leos</span>
          </div>
          <a
            href="#"
            onClick={readMoreAction}
            className="inline-flex items-center font-bold text-primary-500 dark:text-primary-500 hover:underline"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
    </CardContainer>
  )
}
