import {findMeasures, findNoteByKey, findByValueBetween} from '../../firebase/utils';

export default (req, res) => {
    const {key, value} =  Object.assign({}, req.params, req.query);
    if (!key) {
        // не задан ключ
        findMeasures()
            .then(data => {
                res.status(200).send(JSON.stringify({data}));
            })
            .catch(e => {
                res.status(404).send(JSON.stringify({"error": e.message}));
            })
    } else if (!value) {
        // задан ключ, не задано значение
        findNoteByKey(key)
            .then(data => {
                res.status(200).send(JSON.stringify({data}));
            })
            .catch(e => {
                res.status(404).send(JSON.stringify({"error": e.message}));
            })
    } else {
        // задан и ключ, и значение
        findByValueBetween(key, value,
            snap => {
                const items = snap.val();
                const key = Object.keys(items).find(key => items[key].max >= value);
                res.status(200).send(JSON.stringify({[key]: items[key]}));
            }, e => {
                res.status(404).send(JSON.stringify({"error": e.message}));
            })
    }
}