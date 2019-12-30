export const addUser = (user) => {
  return {
  type: 'ADD_USER',
  userInfo: {
    id: user.id,
    username: user.username,
    notes: user.notes
    }
  }
}