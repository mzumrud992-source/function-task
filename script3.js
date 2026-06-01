function cutEdedlerinCemi(n) {
    let cem = 0;

    for (let i = 2; i <= n; i += 2) {
        cem += i;
    }

    return cem;
}

console.log(cutEdedlerinCemi(10)); 