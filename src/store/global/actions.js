import {
    SET_TOTAL_AMOUNT,
    SET_TOTAL_MONEY,
} from "./mutation-types";

const getModificator = (val) => {
    switch (val) {
        case "Year":
            return 1;
        case "Month":
            return 12;
        default:
            return 365;
    }
}
export default {
    calc({ commit, state }) {
        const realApy = Math.pow((1 + state.apy / 36500), 365) - 1;
        console.log('realApy === ', realApy)
        const dayModificator = getModificator(state.investmentPeriod);
        const totalTime = state.investmentTime / dayModificator;
        console.log('investmentAmount === ', state.investmentAmount)
        console.log('totalTime === ', totalTime)
        const totalSol = Number(Number(state.investmentAmount) + Number((state.investmentAmount * realApy * totalTime).toFixed(2)));
        console.log('totalSol === ', totalSol)
        const totalMoney = Number((totalSol * state.solUsd).toFixed(2));
        commit(SET_TOTAL_AMOUNT, totalSol);
        commit(SET_TOTAL_MONEY, totalMoney);
    },
}