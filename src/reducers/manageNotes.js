export default function manageNotes(state = {
  currentUser: {},
  notes:[],
  note: {},
  renderedNote: undefined
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

      case 'ADD_NOTE':
        return Object.assign({}, state, {
          notes: [...state.notes, action.noteInfo]
        })

      case 'SHOW_NOTE':
        return Object.assign({}, state, {
          renderedNote: action.id
        })

    default:
      return state
  }
}