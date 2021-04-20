import {firebaseDB} from './firebase';

export async function findMeasures() {
    return await firebaseDB.ref(`measures`).once('value')
}

export async function findNoteByKey(key) {
    return await firebaseDB.ref(`measures/${key}`).once('value')
}

export function findByValueBetween(field, value, cbSuccess, cbError) {
    firebaseDB
        .ref(`measures/${field}`)
        .orderByChild("min")
        .once('value', cbSuccess, cbError);
}

export default {findMeasures, findNoteByKey, findByValueBetween}