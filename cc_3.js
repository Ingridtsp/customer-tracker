//coding challenge 3a

// Step 2: create customer records 
let customers= [
    {name:"Ingrid Gonzalez",
        email:"ingrid.gonzalez@email.com",
        purchases: ["Ipad", "Ipad case"]},
        {name:"Jade Hidalgo",
            email:"jade.hidalgo@email.com",
            purchases: ["coffee maker", "coffee filters"]},
            {name:"Jonathan Hidalgo",
                email:"jonathan.hidalgo@email.com",
                purchases:["car oil", "spark plugs", "jumping cables"]}
];

// Step 3: add and remove data 
customers.push({name: "Melanie Tejada",
    email:"melanie.tejada@email.com",
    purchases:["hair straightner", "shampoo", "conditioner"]

});
// removed data 
customers.shift();

//step 4: update customer info
//updating email address for Jade 
customers[0].email = "jade.v.hidalgo@newemail.com";

//add a new purchase for Jonathan 
customers[1].purchases.push("wipers");



