import React from 'react'

import { useMyProfile } from '@/hooks/useMyProfile'
import { NavList } from '@/molecules/NavList'
import { Template } from '@/templates/SplitContentTemplate'
import { ListGroupItemContainer } from '@/molecules/ListGroupItem/styled'
import { useGetBurnersQuery } from '@/graphql/generated'
import { Card } from '@/organisms/Card'
import { ListGroupContainer } from '@/organisms/ListGroup/styled'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  const { data: burnersPayload, loading, error } = useGetBurnersQuery()

  return (
    <Template illustration={4} sidebar={false}>
      <nav aria-label="Information portal navigation">
        <NavList newUser={!profile}></NavList>
      </nav>
      {burnersPayload && (
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
      )}
    </Template>
  )
}

export default Home
