
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <NothingSelectedView></NothingSelectedView> */}
      <NoteView></NoteView>
       
    
    </JournalLayout>
  );
}
