export default function manageNotes(state = {
  currentUser: {},
  notes:[]
}, action) {
  switch(action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        currentUser: {
          username: action.userInfo.username,
          id: action.userInfo.id,
        },
        notes: action.userInfo.notes
      })

    default:
      return state
  }
}