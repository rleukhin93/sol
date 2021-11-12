function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

export default {
	methods: {
		isInvalidFloat(n) {
            return isNaN(Number(n));
        },
        isInvalidTime(n, p) {
            const num = Number(n)
            if (!isInt(num) || this.isInvalidFloat(num)) return true;
            let max = 12;
            if (p == "Year") max = 20;
            else if (p == "Day") max = 365;

            if (num < 1 || num > max) return true;
            return false;
        },
	},
}
