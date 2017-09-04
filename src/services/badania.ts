import { Badanie } from "../models/badanie";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AuthService } from "./auth";
import 'rxjs/Rx'; // obsługa funkcji map, extract response

@Injectable()
export class BadaniaService {

    private badania: Badanie[] = [];

    constructor(private http: Http, private authService: AuthService) {}

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

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://moje-badania.firebaseio.com/' + userId + '/badania.json?auth=' + token, this.badania)
        .map((response: Response) => {
            return response.json();
        });
    }

    fetchList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get('https://moje-badania.firebaseio.com/' + userId + '/badania.json?auth=' + token)
        .map((response: Response) => {
            return response.json();
        })
        .do((data) => {
            this.badania = data
        });
    }
}