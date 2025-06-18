const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'users.json');

app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

app.post('/register', (req, res) => {
  const newUser = req.body;
  console.log('Получен новый пользователь:', newUser);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения users.json', err);
      return res.status(500).send('Ошибка сервера при чтении');
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Ошибка записи в users.json', writeErr);
        return res.status(500).send('Ошибка сервера при записи');
      }

      console.log('Файл успешно записан:', users);
      res.status(200).send('Пользователь успешно зарегистрирован!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
