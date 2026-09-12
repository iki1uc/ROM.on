// ============================================================
// RAWATOR · 81-MATRIX · ASSE · BALANCE · HUMANISTISCH
// IKI1UC · SYS3-6-9 · NC-ENGINE · HOLO-81
// ============================================================

import { AXIOM } from "./axiom.js";

// 9 Farben (systemtreu)
const COLORS = [
    "herz", "karo", "pik", "kreuz",
    "stern", "rot", "orange", "vio", "weiß"
];

// Asse-Positionen
const ASSE = new Set(["0-0", "0-8", "8-0", "8-8", "4-4"]);

// 81-Matrix erzeugen
export function RAWATOR_81() {
    const frames = [];
    const axis = AXIOM.AXIS369();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            const id = r * 9 + c + 1;

            // Farbe nach Regel
            const colorIndex = (r + c * 3) % 9;
            const color = COLORS[colorIndex];

            // Wert nach Regel
            const value = ((r * 3 + c) % 9) + 1;

            // Asse?
            const isAsse = ASSE.has(`${r}-${c}`);

            // Humanistische AXIOM-Kräfte
            const mana = AXIOM.MANA().pulse();
            const aura = AXIOM.AURA().resonance();
            const kraft = AXIOM.KRAFT().impulse();
            const licht = AXIOM.LICHT().shine();
            const fokus = AXIOM.FOKUS().align();
            const fluss = AXIOM.FLUSS().drift();

            const vital = AXIOM.META().vital(mana, aura, kraft);
            const balance = AXIOM.META().balance([mana, aura, kraft, licht, fokus, fluss]);
            const drift = AXIOM.META().drift(fluss);

            frames.push({
                id: `RAW81-${id}`,
                row: r,
                col: c,
                color,
                value,
                asse: isAsse,
                axis3: axis.axis3,
                axis6: axis.axis6,
                axis9: axis.axis9,
                mana,
                aura,
                kraft,
                licht,
                fokus,
                fluss,
                vital,
                balance,
                drift,
                timestamp: Date.now(),
                conflict: false,
                neutral: true,
                market3: true,
                payload: {}
            });
        }
    }

    return frames;
}
