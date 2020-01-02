export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    noteInfo: {
      id: note.id,
      title: note.title,
      content: note.content,
      userId: note.userId
    }
  }
}

export const showNote = note => {
  return {
  type: 'SHOW_NOTE',
  id: note.id
  }
}

export const hideNote = () => {
  return {
    type: 'HIDE_NOTE'
  }
}

export const deleteNote = note => {
  return {
    type: 'DELETE_NOTE',
    id: note.id
  }
}

export const showEdit = note => {
  return {
    type: 'SHOW_EDIT',
    id: note.id
  }
}

export const hideEdit = () => {
  return {
    type: 'HIDE_EDIT'
  }
}

export const editNote = note => {
  return {
    type: 'EDIT_NOTE',
    noteInfo: {
      title: note.title,
      content: note.content
    }
  }
}