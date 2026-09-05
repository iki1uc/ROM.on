class A81_TECH_EVO {

    qi(r,c){ return r*9 + c; }
    iqq(r,c){ return this.qi(r,c) % 3; }
    octa(r,c){ return this.qi(r,c) % 8; }

    pipe3(qi){ return qi % 3; }
    pipe6(qi){ return qi % 6; }
    pipe9(qi){ return qi % 9; }
    pipe12(qi){ return qi % 12; }

    build(){
        let out = {
            matrix: [],
            pipe3: [],
            pipe6: [],
            pipe9: [],
            pipe12: [],
            octa: []
        };

        for(let r=0; r<9; r++){
            let row = [];
            let p3 = [];
            let p6 = [];
            let p9 = [];
            let p12 = [];
            let oc = [];

            for(let c=0; c<9; c++){
                let qi = this.qi(r,c);
                row.push(this.iqq(r,c));
                p3.push(this.pipe3(qi));
                p6.push(this.pipe6(qi));
                p9.push(this.pipe9(qi));
                p12.push(this.pipe12(qi));
                oc.push(this.octa(r,c));
            }

            out.matrix.push(row);
            out.pipe3.push(p3);
            out.pipe6.push(p6);
            out.pipe9.push(p9);
            out.pipe12.push(p12);
            out.octa.push(oc);
        }

        return out;
    }
}

window.A81_TECH_EVO = new A81_TECH_EVO();
