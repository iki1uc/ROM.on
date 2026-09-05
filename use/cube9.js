class CUBE9 {

    animate(matrix){
        const flat = matrix.flat();
        const best = flat.reduce((a,b)=> a.value > b.value ? a : b);

        const out = document.getElementById("cube9");
        out.innerHTML = `
            <div class="cube">
                <div class="face front">QI ${best.qi}</div>
                <div class="face back">IQQ ${best.iqq}</div>
                <div class="face left">OCTA ${best.octa}</div>
                <div class="face right">Ghost ${best.ghost}</div>
                <div class="face top">IN ${best.in}</div>
                <div class="face bottom">OUT ${best.out}</div>
            </div>
        `;
    }
}

window.CUBE9 = new CUBE9();
