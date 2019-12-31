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