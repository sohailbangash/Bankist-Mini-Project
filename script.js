'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,



    movementsDates: [
       '14/05/2021, 12:06',
       '14/05/2021, 04:05',
       '13/04/2021, 03:05',
       '14/05/2021, 21:05',
       '14/05/2021, 11:05',
       '14/05/2021, 10:05',
       '14/05/2021, 09:05',
       '14/05/2021, 09:05',
       
    ],

    currency : 'RS'

};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,


    movementsDates: [
        '14/05/2021, 12:06',
        '14/05/2021, 04:05',
        '13/04/2021, 03:05',
        '14/05/2021, 21:05',
        '14/05/2021, 11:05',
        '14/05/2021, 10:05',
        '14/05/2021, 09:05',
        '14/05/2021, 09:05',
        
     ],
 
     currency : 'RS'

};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,


    movementsDates: [
        '14/05/2021, 12:06',
        '14/05/2021, 04:05',
        '13/04/2021, 03:05',
        '14/05/2021, 21:05',
        '14/05/2021, 11:05',
        '14/05/2021, 10:05',
        '14/05/2021, 09:05',
        '14/05/2021, 09:05',
        
     ],
 
     currency : 'RS'

};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,

    movementsDates: [
        '14/05/2021, 12:06',
        '14/05/2021, 04:05',
        '13/04/2021, 03:05',
        '14/05/2021, 21:05',
        '14/05/2021, 11:05',
        '14/05/2021, 10:05',
        '14/05/2021, 09:05',
        '14/05/2021, 09:05',
        
     ],
 
     currency : 'RS'

};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelMessage = document.querySelector('.message');
const labelAlertMessage = document.querySelector('.alert-message');

const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const hiddenFront = document.querySelector('.hero');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');

const btnClrChange = document.querySelector('#color-change');

const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayData = function(acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        // this is another array 
        
        const date = new Date(acc.movementsDates[i]);
      
        console.log(date);
        
        const days = `${date.getDate()}` .padStart(2, 0);
        const months = `${date.getMonth()}` .padStart(2, 0);
        const years = date.getFullYear();
        const displayDate = `${days}/${months}/${years}`;
        console.log(displayDate);
        
        const html = `
       <div class="movements__row">
                <div class="movements__type movements__type--${type}">
                   ${i + 1} ${type}</div>

                <div class="movements__value">${mov} Rs</div>

                  
                <div class="movements__value">${mov.toFixed(2)} Rs</div>

         </div>
    `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });

    // <div class="movements__date">${displayDate}</div>

};

// display balance

const calDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = `${acc.balance.toFixed(2)} Rs`;

};

// Display Summary

const calDisplaySummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = `${incomes.toFixed(2)} Rs`;


    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumOut.textContent = `${Math.abs(out).toFixed(2)} Rs`;


    const interst = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);

    labelSumInterest.textContent = `${Math.abs(interst.toFixed(2))} Rs`;

};

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);
// console.log(accounts);

// Function Update UI

const UpdateUI = function(acc) {
    // Display movements
    displayData(acc);


    //  Display Balance
    calDisplayBalance(acc);
    //  Display Summary
    calDisplaySummary(acc);
};

// Event Handler

let currentAccount;


=======
// ! FAKE ALWAYS LOGIN\

// currentAccount= account1;
// UpdateUI(currentAccount);
// containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function(e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    //    if (currentAccount ? .pin === Number(inputLoginPin.value))

    if (currentAccount && currentAccount.pin === +(inputLoginPin.value)) {

        // Display UI and Welcome message
        labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
        containerApp.style.opacity = 100;

        // TODO create current date and  TIME

        const now = new Date();
        const day = `${now.getDate()}` .padStart(2, 0);
        const month = `${now.getMonth()}` .padStart(2, 0);
        const year = now.getFullYear();
        const hour = now.getHours();
        const minute = now.getMinutes();
        labelDate.textContent = `${day}/${month}/${year}, 
        ${hour}:${minute}`;

        // Clear Input
        inputLoginUsername.value = inputLoginPin.value = '';

        inputLoginPin.blur();

        // Call function
        UpdateUI(currentAccount);

        // hiddenFront.classList.add('hidden');
    } else {
        labelWelcome.textContent = `Wrong Username and Pin. Try Again`;
    }
});
// Transfer money

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = +(inputTransferAmount.value);

    const receiveAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    console.log(amount, receiveAcc);

    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiveAcc &&
        currentAccount.balance >= amount &&
        receiveAcc.username !== currentAccount.username
    ) {
        // console.log('Transfer valid');

        let debit = currentAccount.movements.push(-amount);
        let cradit = receiveAcc.movements.push(amount);


    
        // add transfer DATE

         currentAccount.movementsDates.push(new Date().toISOString());
         receiveAcc.movementsDates.push(new Date().toISOString());


)
        if (debit) {
            labelMessage.textContent = `${amount} Money Have been Transfer to ${receiveAcc.owner.toUpperCase()} (${
        receiveAcc.username
      })`;
            labelMessage.style.opacity = 100;
        } else if (cradit) {
            labelMessage.textContent = `${amount} Have been Transfer to ${currentAccount.owner}`;
        }

        // Update UI
        UpdateUI(currentAccount);
    }
});

//****** Loan Request  *******/

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();


    const amount = Math.floor(inputLoanAmount.value);

    console.log(amount);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 1.0)) {
        // add movements

        currentAccount.movements.push(amount);
        labelMessage.textContent = `${amount} Loan request has bee granted Mr ${currentAccount.owner.toUpperCase()}`;
        labelMessage.style.opacity = 100;

        // date

        currentAccount.movementsDates.push(new Date());

        // Update UI
        UpdateUI(currentAccount);
        inputLoanAmount.value = '';
    }
    // else if (amount < 0) {
    //     labelAlertMessage.textContent = `Please Request to above  Mr ${currentAccount.owner}`;
    //     labelAlertMessage.style.opacity = 100;
    // }
});

// Close account

btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);

        // Delete Account
        accounts.splice(index, 1);
        // if (del) {
        //     labelMessage.textContent = `${currentAccount.username} Money Have been Transfer to `
        // }

        // Hide UI
        containerApp.style.opacity = 100;

        inputCloseUsername.value = inputClosePin.value = '';
    }
});

//************************ Sorting Buttton *****************/

let sorted = false;

btnSort.addEventListener('click', function(e) {
    e.preventDefault();

    displayData(currentAccount.movements, !sorted);
    sorted = !sorted;
});

// const user = 'Steven Thomas Williams';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// dynamic Array print

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const x = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(x);

labelBalance.addEventListener('click', function() {
    const movementUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => +(el.textContent.replace('Rs', ''))
    );
    console.log(movementUI);
});


// btn change the color

btnClrChange.addEventListener('click', function(){
    const allRow = [... document.querySelectorAll('.movements__row')];
    allRow.forEach(function(row, i){
        // 0, 2, 4, 6
        if(i % 2 === 0){
            
            row.style.backgroundColor = 'rgb(232 227 228)'
            row.style.boxShadow ='10px 20px 30px #8c8c8c61'
            btnClrChange.textContent = 'Change'
        }
        // 0, 3, 6, 9
        // if(i % 3 === 0){
        //     row.style.backgroundColor = 'grey';
        // }

    })
      
});


