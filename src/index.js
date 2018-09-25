module.exports = function makeExchange(currency) {
    coins = { H: 0, Q: 0, D: 0, N: 0, P: 0 };

    H = Math.trunc(currency / 50);

    (H != 0) ? Q = Math.trunc(currency % 50 / 25): Q = Math.trunc(currency / 25);

    (H != 0) ? D = Math.trunc(currency % 50 % 25 / 10):
        (Q != 0) ? D = Math.trunc(currency % 25 / 10) : D = Math.trunc(currency / 10);

    (H == 0 && Q == 0 && D == 0) ? N = Math.trunc(currency / 5):
        (H == 0 && Q == 0 && D != 0) ? N = Math.trunc(currency % 10 / 5) :
        (D == 0) ? N = Math.trunc(currency % 25 / 5) : N = Math.trunc(currency % 25 % 10 / 5);

    P = currency - H * 50 - Q * 25 - D * 10 - N * 5;

    (H != 0) ? coins.H = H: delete coins.H;
    (Q != 0) ? coins.Q = Q: delete coins.Q;
    (D != 0) ? coins.D = D: delete coins.D;
    (N != 0) ? coins.N = N: delete coins.N;
    (P != 0) ? coins.P = P: delete coins.P;
    if (currency <= 0) {
        coins = {};
    }
    if (currency > 10000) {
        coins = { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    return coins;
}