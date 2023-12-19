import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'


export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );
  const { body, title, date, onInputChange, formState} = useForm( note);

  const dateString = useMemo( () => {
      const newDate = new Date( date );
      return newDate.toUTCString()
  }, [date])

  useEffect( () => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect( () => {
      if ( messageSaved.length > 0) {
        Swal.fire('Note updated', messageSaved, 'success');
      }
  },[messageSaved])

  const onSaveNote = () => {
    dispatch( startSavingNote());

  }

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={ isSaving }
          onClick={ onSaveNote }
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          SAVE
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert a title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          sx={{ border: "none", mb: 1 }}
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery></ImageGallery>
    </Grid>
  );
}
