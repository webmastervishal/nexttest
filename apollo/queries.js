import gql from 'graphql-tag';

const GET_MENUITEM = gql`
  {
    menuitem @client
  }
`;

const UPDATE_MENUITEM = gql`
  mutation($menuitem: Int!) {
    updateMenuitem(menuitem: $menuitem) @client
  }
`;

const USER_LOGIN = gql`
  mutation($email: String!, $password: String!){
  login(data:{email:$email,password:$password})  {
    success
    token
    message
    userId
  }
}
`;

export {
  GET_MENUITEM,
  UPDATE_MENUITEM,
  USER_LOGIN
}
