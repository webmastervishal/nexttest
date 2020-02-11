import gql from 'graphql-tag';

const GET_SIDEBAR = gql`
  {
    sidebar @client
  }
`;

export {
  GET_SIDEBAR
}
