// 9hoch9 / lage.js

export function computeLAGE(Phi, phi, phi2, phiinfty) {
    const mini = {
        x: Phi * 10,
        y: phi * 10,
        z: phiinfty * 10,
        stabil: phi2
    };

    const maxi = {
        x: Phi * 81,
        y: phi * 81,
        z: phiinfty * 81,
        stabil: phi2 * 9
    };

    return { mini, maxi };
}

