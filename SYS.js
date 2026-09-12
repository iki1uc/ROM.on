import { AXIOM } from "./axiom.js";

window.SYS = window.SYS || {};

window.SYS.AXIOM = {
    mana: AXIOM.MANA(),
    aura: AXIOM.AURA(),
    kraft: AXIOM.KRAFT(),

    // neue humanistische Kräfte
    licht: AXIOM.LICHT(),
    fokus: AXIOM.FOKUS(),
    fluss: AXIOM.FLUSS(),

    // Meta-Werte (vital, balance, drift)
    meta: AXIOM.META(),

    // 3-6-9 Achsen
    axis: AXIOM.AXIS369()
};

console.log("SYS → Axiome geladen (MANA, AURA, KRAFT, LICHT, FOKUS, FLUSS, META, AXIS369)");
