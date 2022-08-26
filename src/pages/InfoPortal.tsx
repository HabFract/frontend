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
import { CenteringFlexHorizontal, SpaceBetweenFlex } from './styled'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
import { ButtonContainer } from '@/atoms/Button/General/styled'
import { Card } from '@/organisms/Card'
import { Button } from '@/atoms/Button/General'
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
          <CenteringFlexHorizontal>
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
              <SpaceBetweenFlex vertical gap={0.1}>
                <ButtonContainer typeOfButton="secondary" size="lg">
                  <CenteringFlexHorizontal gap={0.5}>
                    <ColoredSvg
                      button
                      iconName="home"
                      className="w-6 h-6 mr-4 text-primary-500"
                      rounded={false}
                    ></ColoredSvg>
                    Home
                  </CenteringFlexHorizontal>
                </ButtonContainer>
                <Button
                  onClick={() => {}}
                  iconName="forward"
                  typeOfButton="primary"
                  text="Get Started"
                  size="lg"
                />
              </SpaceBetweenFlex>
            </ListGroup>
          </CenteringFlexHorizontal>
        }
      >
        <InfoPortalTemplate>
          <section className="relative z-30 bg-white rounded-2xl dark:bg-gray-900">
            <div className="max-w-screen-xl px-2 py-2 mx-auto md:p-4 lg:py-10 lg:px-6">
              <div className="max-w-screen-md mx-auto mb-8 text-center md:w-1/2 lg:w-full lg:mb-16">
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
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                {/* //grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 */}
                <Card> </Card>
                <Card> </Card>
                <Card> </Card>
                <Card> </Card>
              </div>
            </div>
          </section>
        </InfoPortalTemplate>
      </Template>
    </>
  )
}
