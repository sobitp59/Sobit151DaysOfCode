// default parameter only starts working from the right side.

function print(a=10, b=20, c=30, d=40){
    console.log(a,b,c,d)
}

print('A','B', 'D') // A B D 40