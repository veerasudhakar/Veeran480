import { LightningElement } from 'lwc';

export default class GetterMethod extends LightningElement {

    users = ["john","veera","Ram","Lakshman"]
    num1 = 10
    num2 = 30

    get firstuser(){
       return this.users[0]
    }
    get seconduser(){
        return this.users[1]
    }


    get multiply(){
        return this.num1*this.num2
    }

    get addition(){
        return this.num1+this.num2
    }

}