import express from 'express';
import RotaPrincipal from './routes/RotaPrincipal';
import RotaUsuario from './routes/RotaUsuario';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(RotaUsuario);
app.use(RotaPrincipal);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})