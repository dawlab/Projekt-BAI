import { Badanie } from "../models/badanie";

export class BadaniaService {

    private badania: Badanie[] = [];

    dodajBadanie(name: string, erytrocyty: number, hemoglobina: number, hematokryt: number, mcv: number, mch: number, mchc:number, leukocyty: number, limfocyty: number, monocyty: number, trombocyty: number) {
        this.badania.push(new Badanie(name, erytrocyty, hemoglobina, hematokryt, mcv, mch, mchc, leukocyty, limfocyty, monocyty, trombocyty));
        console.log(this.badania);
    }

    getBadania() {
        return this.badania.slice();
    }

    updateBadanie(index: number, name: string, erytrocyty: number, hemoglobina: number, hematokryt: number, mcv: number, mch: number, mchc:number, leukocyty: number, limfocyty: number, monocyty: number, trombocyty: number) {
        this.badania[index] = new Badanie(name, erytrocyty, hemoglobina, hematokryt, mcv, mch, mchc, leukocyty, limfocyty, monocyty, trombocyty);
    }

    usunBadanie(index: number){
        this.badania.splice(index, 1);
    }
}