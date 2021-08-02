let user2 = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
let {name: userName, email: mailAddress} = user2;
console.log(userName);      // Tom
console.log(mailAddress);       // tom@gmail.com