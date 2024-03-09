import * as React from 'react';
import mypic from "../../assets/whiteprofile.jpg"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Products = () => {
  const [productData, setProductData] = React.useState(null);
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products, "response");
      setProductData(response.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
          pb: 6,
        }}
      >
      </Box>
      <Container sx={{ py: 10 }}>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {productData?.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={card.images[0]}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                  </Typography>
                  <Typography>
                  {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </ThemeProvider>
  )
}

export default Products
