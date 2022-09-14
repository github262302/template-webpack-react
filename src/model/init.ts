// @ts-nocheck

/**
 * 全局初始
 * */
export const initModel = {
    namespace: "init",
    state: 0,
    reducers: {
        add(state) {
            return state + 1;
        },
    },
    effects: {
        *addAfter1Second(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: "add" });
        },
    },
};
