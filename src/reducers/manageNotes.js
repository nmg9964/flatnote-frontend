export default function manageNotes(state = {
  currentUser: {},
  notes:[],
  note: {}
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
          note: {
            id: action.noteInfo.id,
            title: action.noteInfo.title,
            content: action.noteInfo.content,
            userId: action.noteInfo.userId
          },
          notes: [...state.notes, action.noteInfo]
        })

    default:
      return state
  }
}