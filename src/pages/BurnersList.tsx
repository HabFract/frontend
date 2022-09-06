import React from 'react'

import { useMyProfile } from '@/hooks/useMyProfile'
import { NavList } from '@/molecules/NavList'
import { Template } from '@/templates/SplitContentTemplate'
import { ListGroupItemContainer } from '@/molecules/ListGroupItem/styled'
import {
  Burner,
  BurnerCreateParams,
  useAddBurnerMutation,
  useGetBurnersQuery,
} from '@/graphql/generated'
import { Card } from '@/organisms/Card'
import { ListGroupContainer } from '@/organisms/ListGroup/styled'
import { Link } from 'react-router-dom'
import { Button } from '@/atoms/index'
import { aBurner } from '@/graphql/generated/mocks'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  const { data: burnersPayload, loading, error } = useGetBurnersQuery()
  const [
    mutate,
    { data: addBurnersPayload, loading: addLoading, error: addError },
  ] = useAddBurnerMutation()

  return (
    <Template illustration={4} sidebar={false}>
      {burnersPayload && (
        <>
          <ListGroupContainer>
            {burnersPayload.burners.edges.map((burner) => {
              const {
                node: { id, name, metadata },
              } = burner
              return (
                <ListGroupItemContainer key={id}>
                  <Card
                    title={`${name}`}
                    subTitle={`${metadata?.hashtag}`}
                    bodyText={`${metadata?.description}`}
                    readMoreAction={() => {}}
                  ></Card>
                </ListGroupItemContainer>
              )
            })}
          </ListGroupContainer>
          {/* <Link to={'/make/burners/new'} role="menu-item"> */}
          <Button
            iconName="forward"
            size="md"
            typeOfButton="primary"
            buttonName="create-burner"
            text="New"
            onClick={() => {
              const burnerFields = aBurner() as Burner
              console.log('burnerFields :>> ', burnerFields)
              mutate({
                variables: {
                  burnerFields: {
                    name: burnerFields.name,
                    description: burnerFields.metadata!.description,
                    hashtag: burnerFields.metadata!.hashtag,
                  },
                },
              })
            }}
          />
          {/* </Link> */}
        </>
      )}
    </Template>
  )
}

export default Home
