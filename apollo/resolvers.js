export default {
  Mutation: {
    updateMenuitem: (_, { menuitem }, { cache }) => {
      const data = { menuitem, __typename: 'menuitem' };
      cache.writeData({ data });
    }
  }
}
