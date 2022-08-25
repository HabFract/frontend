// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { CardContainer } from './styled'
import { P } from '@/atoms/Typo/Copy/P'
import { Heading } from '@/atoms/Typo/Title/Heading'
// #endregion Local Imports

// #region Interface Imports
import { ICard } from './types'
// #endregion Interface Imports

export const Card: React.FunctionComponent<ICard.IProps> = ({
  children,
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
          <a href="#">How to quickly deploy a static website</a>
        </Heading>
        <Heading caps={false} level={4}>
          How to quickly deploy a static website
        </Heading>
        <P
          level={3}
          copyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, diam sit amet faucibus scelerisque, diam arcu lacinia felis, eget varius ligula quam ut quam. Nullam suscipit libero libero, non fermentum ipsum consequat sit amet. Nam elementum, nibh ac sollicitudin pretium, diam nisi ornare arcu, sit amet malesuada neque erat at augue. Nam suscipit nulla eu nulla malesuada, at finibus nunc maximus. Suspendisse eu accumsan elit. Donec ante eros, consequat eu consectetur ut, fermentum sed dolor. Aenean iaculis ante nisl, et pellentesque erat vestibulum vel. Vivamus varius eu ex eu sagittis. Nulla et varius diam. Nulla varius finibus risus, vel tempus dui interdum a. Aliquam eget posuere metus. Aliquam in erat id massa finibus euismod.`}
        />
        <P
          level={3}
          copyText={`Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.`}
        />
        <P
          level={3}
          copyText={`Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.`}
        />

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
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
      {children}
    </CardContainer>
  )
}
