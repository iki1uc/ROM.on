class CXR_ORBIT {

    compute(matrix){
        return matrix.map(row =>
            row.map(cell => ({
                ...cell,
                orbitLevel: (cell.orbit + cell.qi + cell.iqq) % 12,
                orbitSpeed: (cell.octa * 3) % 100,
                orbitStatus: cell.orbit > 5 ? "HIGH" : "LOW"
            }))
        );
    }

    sendToVector(data){
        if(window.VECTOR){
            VECTOR.receiveOrbit(data);
        }
    }

    sendToALL(data){
        if(window.ALL){
            ALL.receiveOrbit(data);
        }
    }

    start(matrix){
        const data = this.compute(matrix);
        this.sendToVector(data);
        this.sendToALL(data);
        return data;
    }
}

window.CXR_ORBIT = new CXR_ORBIT();
