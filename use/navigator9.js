class NAV9 {

    build(){
        // 9×9 JSON laden
        const raw = window.NC9X9 || [];

        return raw.map((row,r)=> 
            row.map((cell,c)=> ({
                r, c,
                qi: AXES.qi(r,c),
                iqq: AXES.iqq(r,c),
                octa: AXES.octa(r,c),
                ghost: GHOST.status(r,c),
                core: XCORE.map(r,c),
                in: XIN.map(r,c),
                out: XOUT.map(r,c),
                value: cell
            }))
        );
    }

    render(matrix){
        const out = document.getElementById("nav9");
        out.innerHTML = "<h2>9×9 Hyperraum-Navigator</h2>";

        out.innerHTML += matrix.map(row =>
            row.map(cell =>
                `<span class="navCell">
                    ${cell.value}<br>
                    QI:${cell.qi}<br>
                    IQQ:${cell.iqq}<br>
                    O:${cell.octa}
                </span>`
            ).join("")
        ).join("<br>");
    }
}

window.NAV9 = new NAV9();
