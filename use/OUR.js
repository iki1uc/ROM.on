export const ECO_ROOT_VECTOR = {

    ROOT: 1,            // Ursprung
    ASCEND1: 1 ** 2,    // 1. Aufstieg
    ASCEND2: 3 ** 3,    // 27
    ASCEND3: 9 ** 9,    // 387420489
    STATION: 81,        // Station-Konstante

    // ECO-Führer: verbindet OSF + 9hoch9 + 81.room
    ECO() {
        return {
            eco_root: this.ROOT,
            eco_a1: this.ASCEND1,
            eco_a2: this.ASCEND2,
            eco_a3: this.ASCEND3,
            eco_station: this.STATION
        };
    },

    // mathematische Wurzel für 9hoch9
    ECO9() {
        return Math.sqrt(this.ASCEND3);
    },

    // ECO‑Führer für ULTRA‑NC9×9
    ULTRA() {
        return {
            ultra_room: this.STATION * 9,
            ultra_nc: this.ASCEND2 * 9,
            ultra_flux: this.ASCEND3 / 81
        };
    }
};
