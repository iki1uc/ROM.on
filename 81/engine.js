// Verbinde Trigger-Engine mit 9hoch9-Engine
function connectTo9hoch9() {
    // Wenn Etage 2 getriggert wird → 9hoch9 Grid neu berechnen
    document.addEventListener('levelTriggered', (e) => {
        if (e.detail.level === 2) {
            const activeCells = state.activeCells[2];
            // Übergebe aktive Zellen an 9hoch9
            window.dispatchEvent(new CustomEvent('respoUpdate', {
                detail: { cells: Array.from(activeCells) }
            }));
        }
    });
}
