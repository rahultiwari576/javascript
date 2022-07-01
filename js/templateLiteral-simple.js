 // var string = "this";
    // If we want to use double quotes in a string than we can surround single quote to initiate a string or if we want to use single quotes in between string than we can surround it by double quotes
    var string = 'thi"s';
    var name = 'Harry';
    var channel = 'CodeWithHarry';
    var message = 'Harry is a good boy';
    // we can concatenate all three variable values by using variable properties with the help of plus operator
    console.log(string + name + message); 

    // Template literals:-----------------------------------------------------
    // we can use both single quote and double quote in our template literals 
    // but in template literals we can retrieve the variables only using dollar sign
    var temp = `${name} is a 'nice' person "and" he has a channel called ${channel}`;  
    console.log(temp); 


    // if we want to store the total length of name variable in the variable "len" we can use .length method 
    var len = name.length; 
    // achieving the length of name variable in template literal 
    console.log(`Length of name is ${len}`) 

    // In template literal we can use escape character to jump into new line 
    // double \\ backslash is used when we want to put single back slash in our template
    console.log("Hello \\nworld\nHarry\tand"); 

    // Creating string using string constructor
    var y = new String("this"); 
    console.log(y); 

    // here we have inserted a string dynamically using javascript into innerHTML means on webpage with the help of get element by id
    document.getElementById('content').innerHTML = '<h3>this is a h3 heading inserted using Javascript</h3>'