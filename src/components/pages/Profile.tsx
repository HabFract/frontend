// import React from 'react'
// import {
//   useAddDomainMutation,
//   useGetDomainsQuery,
// } from '@/graphql/generated'
// import { Container } from '@/styled/index'

// interface ProfileProps {
//   username: string
// }

// export const Profile: React.FC<ProfileProps> = ({ username }) => {
//   const { data, loading, error } = useGetDomainsQuery()

//   const [addDomain, { data: mutData, loading: mutLoading, error: mutError }] =
//     useAddDomainMutation({
//       variables: { input: { description: 'Hi', hashtag: '#sports' } },
//     })

//   return (
//     <Container>
//       {(error || mutError) && <div>Error!</div>}
//       {(loading || mutLoading) && <div>Loading...</div>}
//       {!data ? (
//         <div className="text-xl">Hello {username}</div>
//       ) : (
//         <div>{data}</div>
//       )}
//     </Container>
//   )
// }

export {}