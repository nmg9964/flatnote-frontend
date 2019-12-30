export default function manageNotes(state = {
  users: [] 
}, action) {
  switch(action.type) {
    case 'ADD_USER':
      const user = {
        username: action.username
      }
      return { ...state, users: [...state.users, user] }

    default:
      return state
  }
}