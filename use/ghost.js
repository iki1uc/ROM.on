// 9hoch9 / ghost.js

export function ghost5E(Phi, phi, phi2, phiinfty) {

    const orbit = {
        speed: Phi * 2,
        radius: phi * 3,
        evo: phi2 * phiinfty
    };

    const operatoren = {
        bewegung: Phi + phi,
        stabilitaet: phi2 - phi,
        raster: Phi * phi2
    };

    const status = (Phi + phi + phi2 + phiinfty) > 2 ? "aktiv" : "ruhig";

    const erinnerung = {
        lastPhi: Phi,
        lastPhi2: phi2,
        lastOrbit: orbit.evo
    };

    return { orbit, operatoren, status, erinnerung };
}

