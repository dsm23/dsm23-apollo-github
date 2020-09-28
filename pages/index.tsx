import { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';

import 'twin.macro';

import ErrorMessage from '../components/ErrorMessage';

import { initializeApollo } from '../lib/apolloClient';
import Spinner from '../components/Spinner';
import TD from '../components/TableDataCell';
import TH from '../components/TableHeading';
import TR from '../components/TableRow';

export const ORGANIZATION_QUERY = gql`
  query Organization($first: Int!) {
    organization(login: "facebook") {
      url
      repositories(
        first: $first
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          name
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

const IndexPage: FunctionComponent = () => {
  const { loading, error, data } = useQuery(ORGANIZATION_QUERY, {
    variables: { first: 10 },
  });

  if (error) return <ErrorMessage>Error loading repos</ErrorMessage>;
  if (loading) return <Spinner tw="animate-spin w-full h-full" />;

  const { organization } = data;

  return (
    <main tw="container max-w-screen-lg mx-auto px-2 py-4">
      <h1 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        Top 10 most starred repos under the facebook organization on GitHub
      </h1>

      <div tw="mt-4 flex flex-col">
        <div tw="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div tw="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div tw="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table tw="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <TH>Repo Name</TH>
                    <TH>Stars</TH>
                    <TH>Forks</TH>
                  </tr>
                </thead>
                <tbody>
                  {organization?.repositories?.nodes.map(
                    ({ name, stargazerCount, forkCount }, index: number) => (
                      <TR isGrey={index % 2 === 1} key={name}>
                        <TD tw="font-medium">{name}</TD>
                        <TD>
                          {new Intl.NumberFormat().format(stargazerCount)}
                        </TD>
                        <TD>{new Intl.NumberFormat().format(forkCount)}</TD>
                      </TR>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ORGANIZATION_QUERY,
    variables: { first: 10 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
