import {
    SET_APY,
    SET_SOL_USD,
    SET_INVESTMENT_AMOUNT,
    SET_INVESTMENT_TIME,
    SET_INVESTMENT_PERIOD,
    SET_TOTAL_AMOUNT,
    SET_TOTAL_MONEY,
} from "@/store/global/mutation-types";

export default {
    [SET_APY]: (state, payload) => {
        state.apy = payload;
    },
    [SET_SOL_USD]: (state, payload) => {
        state.solUsd = payload;
    },
    [SET_INVESTMENT_AMOUNT]: (state, payload) => {
        state.investmentAmount = payload;
    },
    [SET_INVESTMENT_TIME]: (state, payload) => {
        state.investmentTime = payload;
    },
    [SET_INVESTMENT_PERIOD]: (state, payload) => {
        state.investmentPeriod = payload;
    },
    [SET_TOTAL_AMOUNT]: (state, payload) => {
        state.totalAmount = payload;
    },
    [SET_TOTAL_MONEY]: (state, payload) => {
        state.totalMoney = payload;
    },
}