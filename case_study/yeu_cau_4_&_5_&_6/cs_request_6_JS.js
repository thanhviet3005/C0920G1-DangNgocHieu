class Customer{
    constructor(name, identify, birthDay, email, address, classCustomer , typeService, level, quantity, rentDay, saleOff) {
        //
        this.name = name;
        this.identify = identify;
        this.birthDay = birthDay;
        this.email = email;
        this.address = address ;
        this.classCustomer = classCustomer ;
        this.typeService = typeService ;
        this.level = level ;
        this.quantity = quantity ;
        this.rentDay = rentDay;
        this.saleOff = saleOff ;
    }
    getName(){
        return this.name ;
    }
    setName(name){
        this.name = name ;
    }
    getIdentify(){
        return this.identify ;
    }
    setIdentify(identify){
        this.identify = identify ;
    }
    getBirthDay(){
        return this.birthDay ;
    }
    setBirthDay(birthDay){
        this.birthDay = birthDay ;
    }
    getEmail(){
        return this.email ;
    }
    setEmail(email){
        this.email = email ;
    }
    getAddress(){
        return this.address ;
    }
    setAddress(address){
        this.address = address ;
    }
    getClassCustomer(){
        return this.classCustomer;
    }
    setClassCustomer(classCustomer){
        this.classCustomer = classCustomer ;
    }
    getTypeService(){
        return this.typeService ;
    }
    setTypeService(typeService){
        this.typeService = typeService ;
    }
    getLevel(){
        return this.level ;
    }
    setLevel(level){
        this.level = level
    }
    getQuantity(){
        return this.quantity ;
    }
    setQuantity(quantity){
        this.quantity = quantity ;
    }
    getRentDay(){
        return this.rentDay ;
    }
    setRentDay(rentDay){
        this.rentDay = rentDay ;
    }
    getSaleOff(){
        return this.saleOff ;
    }
    setSaleOff(saleOff){
        this.saleOff = saleOff ;
    }
    setTotalPay(){
        let money = 0 ;
        switch (this.getTypeService()) {
            case "Vilas": money = 500 ; break ;
            case "House": money = 300 ; break ;
            case "Room" : money = 100 ; break ;
        }
        return this.getRentDay()*money*(1 - this.getSaleOff()/100) ;
        }
    }
