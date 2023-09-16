//>>Personal Message: Store a person’s name in a variable, and print a message to that person.
// // Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let name1:string="Eric";
console.log(`Hello ${name1}, would you like to learn some python today?`);





//>>Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

//in lower case
console.log("Lowercase:",name1.toLowerCase());

//in upper case
console.log("uppercase:",name1.toUpperCase());

//in title case
console.log("Title Case:",toTitleCase(name1))

   function toTitleCase(str: string): string
 { return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())};





//>>Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);






//>>Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string="Albert Einstein";
let message:string=`once said that,"A person who never made a mistake never tried anything new."`;
console.log(famous_person,message);





/*>>Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed. 
 Then print the name after striping the white spaces.*/

let nameWithSpace:string="\t Hassan\n\tAmjad";
//name with whitespace
console.log(nameWithSpace);

let nameWithoutSpace=nameWithSpace.trim();
console.log(nameWithoutSpace)







/*>>Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 Be sure to enclose your operations in print statements to see the results.

You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/

console.log(5+3);
console.log(12-4);
console.log(2*4);
console.log(16/2);







// >>Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number.
//  Print that message.

var myFavrtno:number=33;
const MessageFavrtNo:string=`My favorite number is ${myFavrtno}.`;
console.log(MessageFavrtNo);







// >>Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point,
//   just add your name and the current date at the top of each program file.
//  Then write one sentence describing what the program does.

/*Have already done it above*/










// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.

const favFriends:string[]=["Hassan","Khizer","Huzaifa","Usman"];
console.log(favFriends[0]);
console.log(favFriends[1]);
console.log(favFriends[2]);
console.log(favFriends[3]);








// Greetings: Start with the array you used in Exercise in ABOVE, but instead of just printing each person’s name,
//  print a message to them.
//  The text of each message should be the same, but each message should be personalized with the person’s name.

console.log(`HELLO ! ${favFriends[0]}`);
console.log(`HELLO ! ${favFriends[1]}`);
console.log(`HELLO ! ${favFriends[2]}`);
console.log(`HELLO ! ${favFriends[3]}`);










// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner. 

let Guest:string[]=["G1","G2","G3","G4","G5","G6"];
console.log(`Hey there ${Guest[3]} hope you are doing well, 
You are invited to dinner tonight please make sure that you will come to dinner tonight.`);
console.log(`Hey there ${Guest[4]} hope you are doing well, 
You are invited to dinner tonight please make sure that you will come to dinner tonight.`);
console.log(`Hey there ${Guest[0]} hope you are doing well, 
You are invited to dinner tonight please make sure that you will come to dinner tonight.`);







