class PaymentGateway{
    pay(amount){
        this.#validateCard();
        this.#contactBank();
        this.#processTrasaction();
        console.log(`Payment of ${amount} successful`)
    }
    #validateCard(){
        console.log("Validating Card...");
    }
    #contactBank(){
        console.log("Contacting bank....");
    }
    #processTrasaction(){
        console.log("Processing Transaction...")
    }   
}
const payment = new PaymentGateway();
payment.pay(50000);
