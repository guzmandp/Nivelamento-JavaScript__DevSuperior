export function sum(numero1, numero2) {
    return numero1 + numero2;
}

function exp(base, exponent) {
    return base ** exponent;
}

export function round(value, presition) {
    var multiplier = exp(10, presition || 0);
    return Math.round(value * multiplier) / multiplier;
}