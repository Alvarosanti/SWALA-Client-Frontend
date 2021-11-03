import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

import Button from "@mui/material/Button";
import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';

import "./CardOferta.css";

const CardOferta = ({ img, oferta, codigo, nombre, descripcion, precio }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <div className="oferta">{oferta}</div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <strong>{nombre}</strong>
            <br />
            {descripcion}
            <br />
            s/.<strong>{precio}</strong>
          </Typography>
        </CardContent>
        <div className="button-obtener-codigo">
          <Button
            sx={{ bgcolor: grey[900] }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Obtener codigo
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Codigo de oferta del producto"}
            </DialogTitle>

            <Divider variant="middle" />
            <DialogContent>
              <TextField
                id="outlined-read-only-input"
                label="Codigo"
                defaultValue={codigo}
                InputProps={{
                  readOnly: true,
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
          </Dialog>
        </div>
        <CardActions disableSpacing></CardActions>
      </Card>
    </div>
  );
};

export default CardOferta;
