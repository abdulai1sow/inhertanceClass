//inheritance
class Person {
  constructor(name,age,country,diploma = false) {
    this.name = name
    this.age = age
    this.country = country
    this.diploma = diploma
  }
  hightSchool() {
  console.log(`i have my diploma: ${this.diploma}`);
  }
  uniform() {
    console.log(`i wear uniform `);
  }
  
}
//postal worker person
class postalWorker extends Person{
  constructor(name, age, country, diploma) {
    super(name,age,country,diploma)
  }
  hightSchool() {
    super.hightSchool()
  }
  offDay(saturday, sunday ) {
    console.log(`what days are you off?`);
  }
}

const Oumar = new postalWorker('Fouta', 24, 'America', false)
Oumar.hightSchool()
// console.log(Oumar);
const Diallo = new postalWorker('Diallo', 19, 'Atlanta', true)
Diallo.hightSchool()
Diallo.offDay('sunday', 'monday')
// console.log(Diallo);

//chef person
class chef extends Person{
  constructor(name, age, country, diploma) {
    super(name,age,country,diploma)
  }
  specialty(frenchDish) {
    console.log(`my specialty is 
${frenchDish}`);
  }
  uniform(white = 'white') {
    console.log(`the resturant i work we wear ${white}`);
  }
}

//chef persons
const marc = new chef('marc', 34, 'france', true)
marc.specialty('Crepes Suzette')
// console.log(marc);

const bright = new chef('stev', 25, 'senegal', true)
bright.uniform()
// console.log(bright);


///////////// Bank Accounts take it a step further

class BankAccount {
  constructor(name,balance, acctNum) {
    this.name = name
    this.balance = balance
    this.acctNum = acctNum
  }
  deposit(putIn) {
    const moneyIn = putIn + this.balance 
    console.log(moneyIn);
    return moneyIn
    // this.balance += putIn
  }
  withdraw(bankWithdraw) {
    const takeOut = this.balance - bankWithdraw
    // this.balance -= this.withdraw
  }
}

let abdulai = new BankAccount ('avdul', 388847, '397923hdg')
console.log(abdulai.balance.withdraw(30000));
console.log(abdulai);

//checking account
//enable overdraft
class checkAcc extends BankAccount {
  constructor(name, balance, acctNum) {
    super(name, balance, acctNum)
    this.overDraft = true
  }
  overrideWithdraw() {
    const negativeWithdraw = 0;
    if (this.balance <= 0) {
      console.log(`over draft budy!`);
    }
  }
}

////////////////////////savings account/////////
class savingAcc extends BankAccount{
  constructor(name, balance, acctNum) {
    super(name, balance, acctNum)
    this.withdraw = false
  }
}

// Static Methods and Properties

class Governor{
  constructor(party,state) {
    this.party = party
    this.state = state
  }
  electionTime() {
    console.log(`vote for me and you`);
  }
}

const voteTime = new Governor('republican', 'GA')
console.log(voteTime);




