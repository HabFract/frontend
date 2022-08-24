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
import { P } from '@/atoms/Typo/Copy/P'
import { Heading } from '@/atoms/Typo/Title/Heading'
// #endregion Local Imports

interface InfoPortalProps {}

const InfoPortalMainTitles = [
  { default: 'Information Portal', dark: 'Information Portal' },
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
        illustration={2}
        sidebar={true}
        sidebarComponent={
          <ListGroup>
            <ListGroupItem
              iconName={'speakerphone'}
              primaryText="What"
              secondaryText="Learn about the functions of HabitFract"
            />
            <ListGroupItem
              iconName={'question-mark'}
              primaryText="Why"
              secondaryText="Learn about our reasoning and motivation"
            />
            <ListGroupItem
              iconName={'cog'}
              primaryText="How"
              secondaryText="Learn about the technology that powers us"
            />
          </ListGroup>
        }
      >
        <InfoPortalTemplate>
          <section className="relative z-30 bg-white rounded-2xl dark:bg-gray-900">
            <div className="max-w-screen-xl px-2 py-2 mx-auto md:p-4 lg:py-10 lg:px-6">
              <div className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
                <Heading caps={false} level={1}>
                  Our Blog
                </Heading>
                {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"> */}
                <Heading caps={false} level={2}>
                  We use an agile approach to test assumptions and connect with
                  the needs of your audience early and often.
                </Heading>
                {/* </p> */}
              </div>
              <div className="grid gap-2 md:gap-4 lg:grid-cols-2">
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
                  {/* <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
                  <Heading caps={false} level={3}>
                    <a href="#">How to quickly deploy a static website</a>
                  </Heading>
                  {/* <P level={2} copyText={`How to quickly deploy a static website`} /> */}
                  <Heading caps={false} level={4}>
                    How to quickly deploy a static website
                  </Heading>
                  {/* </h2> */}
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
                    <div className="flex items-center space-x-4">
                      <img
                        className="rounded-full w-7 h-7"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                      />
                      <span className="font-medium dark:text-white">
                        Jese Leos
                      </span>
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
                <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      Article
                    </span>
                    <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Our first project with React</a>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        className="rounded-full w-7 h-7"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Bonnie Green avatar"
                      />
                      <span className="font-medium dark:text-white">
                        Bonnie Green
                      </span>
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
              </div>
            </div>
          </section>
        </InfoPortalTemplate>
      </Template>
    </>
  )
}
