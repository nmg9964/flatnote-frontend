export default function manageNotes(state = {
  currentUser: {},
  notes:[],
  note: {},
  renderedNote: undefined,
  renderedEdit: undefined
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

      case 'HIDE_NOTE':
        return Object.assign({}, state, {
          renderedNote: undefined
        })

      case 'DELETE_NOTE':
        return Object.assign({}, state, {
          notes: [...state.notes.filter(note => note.id !== action.id)]
        })

      case 'SHOW_EDIT':
        return Object.assign({}, state, {
          renderedEdit: action.id
        })

      case 'HIDE_EDIT':
        return Object.assign({}, state, {
          renderedEdit: undefined
        })

        case 'EDIT_NOTE':
          let index = state.notes.findIndex(note => note.id === action.note.id)
          state.notes[index] = action.note
          return Object.assign({}, state, {
            notes: [...state.notes]
          })

    default:
      return state
  }
}