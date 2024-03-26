
let balance;
let amount = 7000;
function TotalBalance() {

    return amount = amount + 0;

}
function RemainingBalance() {
    return amount = amount - balance;
}
let user = prompt("Enter Your PIN");
let pass = 1947;
// while (user !== pass) {
//     prompt("You entered an invalid PIN, Enter Again");
//     user++;
// }

console.log('Select your MODE');

const account = {
    opt1: 'Fast transaction',
    opt2: 'Funds Transfer',
    opt3: 'Balance inquiry'
}

const options = prompt('Enter your OPTIONS');
console.log(`You have selected the option of ${options}`)

if (options === 'opt1') {
    if (account.opt1) {
        let accountType = ['saving', 'current'];
        accountType = prompt('Enter your Account Type');
        if (accountType === 'saving') {

            balance = prompt('Enter your amount');
            console.log(`Your Transaction amount is ${balance}`);


        }
        else if (accountType === 'current') {
            balance = prompt('Enter your amount');
            console.log(`Your Transaction amount is ${balance}`);

        }
    }
}
if (options === 'opt2') {
    if (account.opt2) {
        let accInfo = prompt('Enter the Account Info');
        balance = prompt('Enter the amount you wants to Transfer');
        console.log(`The Amount of ${balance} is transfered to ${accInfo}`);
        console.log(`Your Remaing amount left, which is ${RemainingBalance()}`)



    }
}
if (options === 'opt3') {
    if (account.opt3) {
        console.log(`Your available amount is ${TotalBalance()}`)
    }

}
