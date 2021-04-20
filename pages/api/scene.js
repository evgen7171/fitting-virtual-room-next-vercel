import * as THREE from 'three';

function getScene() {
    const scene = new THREE.Scene();

    return scene;
}

export default (req, res) => {
    const scene = getScene();
    res.status(200).send(scene)
}