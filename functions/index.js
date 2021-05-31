const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos');

const {
    loginUser,
    signUpUser
} = require('./APIs/users');

app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);

app.post('/login', loginUser);
app.post('/signup', signUpUser);

exports.api = functions.https.onRequest(app);