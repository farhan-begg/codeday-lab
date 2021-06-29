
for(let i = 0; i <= 100; i += 1){
    // console.log(i)
}

for(let i = 0; i <= 100; i += 1){
    if( i % 5 === 0 && i % 3 === 0){
        console.log(i, "fizzbuzz")
    }
    if(i % 3 === 0){
        console.log(i, 'fizz')
    } else if(i % 5 === 0){
        console.log(i, "buzz")
    }

    
}
