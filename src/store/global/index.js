import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export function initialState() {
    return {
        apy: 0,
        solUsd: 0,
        investmentAmount: 0,
        investmentTime: 0,
        investmentPeriod: "Month",
        totalAmount: 0,
        totalMoney: 0,
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions,
};