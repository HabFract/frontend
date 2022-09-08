import React from 'react'

import { useMyProfile } from '@/hooks/useMyProfile'
import { NavList } from '@/molecules/NavList'
import { Template } from '@/templates/SplitContentTemplate'
import { ListGroupItemContainer } from '@/molecules/ListGroupItem/styled'
import {
  Burner,
  BurnerCreateParams,
  useAddBurnerMutation,
  useDeleteBurnerMutation,
  useGetBurnersQuery,
} from '@/graphql/generated'
import { Card } from '@/organisms/Card'
import { ListGroupContainer } from '@/organisms/ListGroup/styled'
import { Link } from 'react-router-dom'
import { Button } from '@/atoms/index'
import { aBurner } from '@/graphql/generated/mocks'
import { CenteringFlexHorizontal } from './styled'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  const {
    data: burnersPayload,
    loading,
    error,
  } = useGetBurnersQuery({
    fetchPolicy: 'cache-and-network',
  })
  const [
    addBurner,
    { data: addBurnersPayload, loading: addLoading, error: addError },
  ] = useAddBurnerMutation()

  const [deleteBurner, { loading: delLoading, error: delError }] =
    useDeleteBurnerMutation({
      update(cache, { data }) {
        // const newId = data?.deleteBurner
        // const oldId = data?.deleteBurner.node.id
        // // Remove record with old actionHash as id
        // cache.evict({ id: 'Burner:' + oldId })
        // cache.gc()
        // const result = cache.modify({
        //   fields: {
        //     burners(existingBurners = []) {
        //       const updatedNode = cache.writeFragment({
        //         data: { ...data!.updateBurner.node, id: newId },
        //         fragment: gql`
        //           fragment NewId on Burner {
        //             id
        //             name
        //             metadata {
        //               description
        //               hashtag
        //             }
        //           }
        //         `,
        //       })
        //       const filteredBurners = existingBurners.edges.filter((edge) =>
        //         edge.node.__ref.search(oldId),
        //       )
        //       console.log('filteredBurners :>> ', filteredBurners)
        //       console.log('updatedNode :>> ', updatedNode)
        //       return {
        //         ...existingBurners,
        //         edges: [...filteredBurners, updatedNode],
        //       }
        //     },
        //   },
        // })
        // console.log('cache updated? :>> ', result)
      },
    })
  return (
    <Template
      illustration={4}
      sidebar={true}
      sidebarComponent={
        burnersPayload && (
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
                      pillText={`${metadata?.hashtag}`}
                      bodyText={`${metadata?.description}`}
                      readMoreText={'Edit'}
                      topRightText={''}
                      readMoreAction={() => {}}
                    >
                      <CenteringFlexHorizontal gap={0.5}>
                        <Button
                          text="Delete"
                          iconName="forward"
                          size="sm"
                          typeOfButton="error"
                          onClick={() => {
                            deleteBurner({
                              variables: {
                                id,
                              },
                            })
                          }}
                        />
                        <Link
                          to={`/make/burners/update/${id}`}
                          role="menu-item"
                        >
                          <Button
                            text="Update"
                            iconName="success"
                            size="sm"
                            typeOfButton="warning"
                          />
                        </Link>
                      </CenteringFlexHorizontal>
                    </Card>
                  </ListGroupItemContainer>
                )
              })}
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
                  addBurner({
                    refetchQueries: ['getBurners'],
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
            </ListGroupContainer>
          </>
        )
      }
    >
      {' '}
    </Template>
  )
}

export default Home
