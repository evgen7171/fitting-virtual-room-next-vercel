export const table = [
    {link: '/api/firebase', method: 'GET', desc: 'Получение данных'},
    {link: '/api/firebase?key=waist', method: 'GET', desc: 'Поиск записи'},
    {link: '/api/firebase?key=chest&value=101', method: 'GET', desc: 'Поиск значения'},
    {link: '/api/test', method: 'GET', desc: 'Получить файл test.json'},
    {link: '/api/scene', method: 'GET', desc: 'Получить сцену (пустая сцена, тест)'},
    {link: '/api/files', method: 'GET', desc: 'Файлы'},
];
export const someInfo = {
    firebaseKeys: ['chest', 'growth', 'waist'],
}
