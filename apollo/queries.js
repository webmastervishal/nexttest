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

export {
  GET_MENUITEM,
  UPDATE_MENUITEM
}
