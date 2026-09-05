// 9hoch9 / axes.js

export function computeAxes(Phi, phi, phi2, phiinfty) {
    return {
        Phi,
        phi,
        phi2,
        phiinfty,
        bewegung: Phi * phi,
        stabilitaet: phi2 - phi,
        achsenwert: (Phi + phi + phi2 + phiinfty) / 4
    };
}
