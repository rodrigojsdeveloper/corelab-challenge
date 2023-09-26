import { NoteContext } from "../../contexts/note.context";
import { Container } from "./style";
import { useContext } from "react";
import Note from "../Note";
import MessageEmpty from "../MessageEmpty";

const ListFavorites = () => {
  const { filteredFavorites } = useContext(NoteContext);

  return (
    <Container>
      <h2>Favoritas</h2>

      {filteredFavorites.length > 0 ? (
        <menu>
          {filteredFavorites.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </menu>
      ) : (
        <MessageEmpty message="Não há favoritos" />
      )}
    </Container>
  );
};

export default ListFavorites;
