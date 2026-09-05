import { AXIOM } from "./axiom.js";

window.SYS = window.SYS || {};
window.SYS.AXIOM = {
    mana: AXIOM.MANA(),
    aura: AXIOM.AURA(),
    kraft: AXIOM.KRAFT()
};
console.log("SYS → Axiome geladen (MANA, AURA, KRAFT)");
