
function hello(n) {
    console.log('n = ' + n) //added this, so I can see what I log
        if (!n) {
            console.log('Hi!')
        } else if (n > 10) {
            for( let i=0; i<n; i++ ) {
                console.log('Hi!')
            }
        } else {
            for( let i=0; i<n; i++ ) {
                console.log('Hello!')
        }
    }
}


hello()
hello(2)
hello(3)
hello(12)