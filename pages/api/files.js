import fs from 'fs';
import {getFilesInPath} from "../../helpers/file";

export default (req, res) => {
    const {path} = Object.assign({}, req.params, req.query);
    if (!path) {
        const baseURL = 'resources/files';
        const result = getFilesInPath(baseURL);
        if (result.error) {
            res.status(404).send("нет файлов");
        }
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        let html = '<h4>Пути для получения файлов</h4>';
        result.paths.forEach(path => {
            html += `<p><a href="/api/files?path=${path}">${path}</a></p>`;
        })
        res.end(html)
    } else {
        const fileContent = fs.readFileSync('resources/files/' + path);
        res.status(200).json(fileContent)
    }
}




