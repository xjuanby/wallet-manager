import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { DataService } from '../../services/data.service';
import { IWallet } from '../../models/wallet';
@Component({
  selector: 'app-my-wallet',
  standalone: true,
  imports: [],
  templateUrl: './my-wallet.component.html',
  styleUrl: './my-wallet.component.scss'
})
export class MyWalletComponent implements OnInit {
  wallets :IWallet[]
  constructor(public dataService: DataService){
    
  }

  ngOnInit(): void {
    

    
  }

  createWallet() {
    this.dataService.createWallet("Billetera Mensual", "Billetera pra organizarrme cada mes", 2024,3, 0)
  }
  
  async getMyWallets() {
    console.log("holas")
    this.wallets= await this.dataService.getMyWallets();
  }



}
