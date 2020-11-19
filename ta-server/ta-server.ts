import express = require('express');
import bodyParser = require("body-parser");

import {Aluno} from '../common/aluno';
import {CadastroDeAlunos} from './cadastrodealunos'; 
import {Turmas} from './turmas'
import {Matricula} from '../common/matricula'

var taserver = express();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();
const turmas: Turmas = new Turmas();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get('/alunos', function (req: express.Request, res: express.Response) {

})

//recebe um identificador de turma e retorna a mesma
taserver.get('/turmas', function (req: express.Request, res: express.Response){

})

//recebe um identificador de turma e de aluno e retorna uma matricula
taserver.get('/matriculas', function (req: express.Request, res: express.Response){

})

taserver.get('/comparacao-de-desempenho', function (req: express.Request, res: express.Response) {
    const descricoes: string[] = req.query.turmas.split(',');
    res.send(turmas.getResumos(descricoes));
});

var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
  
function closeServer(): void {
    server.close();
}
  
export { server, closeServer }