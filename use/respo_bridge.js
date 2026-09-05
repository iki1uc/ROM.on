// 9hoch9 / respo_bridge.js

import { computeAxes } from "./axes.js";
import { computeLAGE } from "./lage.js";
import { ghost5E } from "./ghost.js";
import { updateTmp } from "./tmp.js";

export function respo9hoch9(Phi, phi, phi2, phiinfty) {

    const axes = computeAxes(Phi, phi, phi2, phiinfty);
    const lage = computeLAGE(Phi, phi, phi2, phiinfty);
    const ghost = ghost5E(Phi, phi, phi2, phiinfty);

    updateTmp(lage.mini, axes, axes.bewegung, ghost.orbit);

    return {
        cube: "9hoch9",
        axes,
        lage,
        ghost,
        tmp: "aktualisiert"
    };
}

