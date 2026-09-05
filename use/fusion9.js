1 FUSION9 {

    fuse(matrix){
        return matrix.flat().map(c => ({
            ...c,
            fusion: (c.qi + c.iqq + c.octa + c.ghost) % 100
        }));
    }

    render(list){
        const out = document.getElementById("fusion9");
        out.innerHTML = "<h2>Portal-Fusion</h2>";

        out.innerHTML += list.map(c =>
            `<div class="fusionItem">
                QI:${c.qi} IQQ:${c.iqq} O:${c.octa} G:${c.ghost}<br>
                Fusion: ${c.fusion}%
            </div>`
        ).join("");
    }
}

window.FUSION9 = new FUSION9();
