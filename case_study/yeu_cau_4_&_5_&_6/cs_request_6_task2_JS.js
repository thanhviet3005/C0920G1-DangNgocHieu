class Employee{
    constructor(nameE, birthDateE, identifyE, phoneE, emailE, rankE, positionE, salaryE) {
        this.nameE = nameE ;
        this.birthDateE = birthDateE ;
        this.identifyE = identifyE;
        this.phoneE = phoneE ;
        this.emailE = emailE;
        this.rankE = rankE;       // trình độ học vấn
        this.positionE = positionE ;
        this.salaryE = salaryE ;
    }
    getNameE(){
        return this.nameE ;
    }
    setNameE(nameE){
        this.nameE = nameE ;
    }
    getBirthDateE(){
        return this.birthDateE ;
    }
    setBirthDateE(birthDateE){
        this.birthDateE = birthDateE ;
    }
    getIdentifyE(){
        return this.identifyE ;
    }
    setIdentifyE(identifyE){
        this.identifyE = identifyE ;
    }
    getPhoneE(){
        return this.phoneE ;
    }
    setPhoneE(phoneE){
        this.phoneE = phoneE ;
    }
    getEmailE(){
        return this.emailE ;
    }
    setEmailE(emailE){
        this.emailE = emailE ;
    }
    getRankE(){
        return this.rankE ;
    }
    setRankE(rankE){
        this.rankE = rankE ;
    }
    getPositionE(){
        return this.positionE ;
    }
    setPositionE(positionE){
        this.positionE = positionE ;
    }
    getSalaryE(){
        switch (this.getPositionE()) {
            case 'Manager': this.salaryE = 500 ; break ;
            case 'Sale': this.salaryE = 300 ; break ;
            case 'Marketing': this.salaryE = 200 ; break ;
        }
        return this.salaryE ;
    }
}