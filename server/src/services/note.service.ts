import noteRepository from "../repositories/note.repository";
import INote from "../interfaces/note.interface";
import Note from "../entities/note.entity";

class NoteService {
  async create(note: INote): Promise<Note> {
    const newNote = new Note();
    newNote.title = note.title;
    newNote.description = note.description;
    newNote.is_favorite = note.is_favorite;

    noteRepository.create(newNote);
    await noteRepository.save(newNote);

    return newNote;
  }
}

export default NoteService;