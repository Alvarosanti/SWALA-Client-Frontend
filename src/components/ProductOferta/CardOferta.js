import Card from "@mui/material/Card";


import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

import Button from "@mui/material/Button";
import React from "react";
import "./CardOferta.css";

const CardOferta = ({ img, oferta, nombre, descripcion, precio }) => {
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
            
          >
            Obtener codigo
          </Button>
        </div>
        <CardActions disableSpacing></CardActions>
      </Card>
    </div>
  );
};

export default CardOferta;
