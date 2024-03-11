import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { IWallet} from '../models/wallet';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) {

  }

  async createWallet(name: string, description: string, year: number, month:number, balance: number ) {
    const wallet: IWallet = {
      name: name,
      description: description,
      year: year,
      month: month,
      balance: balance,
      details: []

    }
    const docRef = await addDoc(collection(this.firestore, 'wallet'), wallet);
    console.log("Document written with ID: ", docRef.id);
  }

  async getMyWallets() {
    const walletsData: IWallet[] = [];
    console.log(walletsData);
    (await getDocs(query(collection(this.firestore, 'wallet')))).forEach((singleWallet) => {
      walletsData.push(singleWallet.data() as IWallet)
      console.log(singleWallet.data(), '=>   ' , walletsData )
    })
    console.log(walletsData);

    return walletsData
   }


}
