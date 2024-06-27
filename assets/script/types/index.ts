
export declare type ResultModel<Res> = ResultSuccess<Res> | ResultError
export declare interface ResultSuccess<Res> {
    isSucc: true,
    data?: Res,
    message?: undefined,
}
export declare interface ResultError {
    isSucc: false,
    data?: undefined,
    message?: string,
}
export enum LoginType {
    WithPortkey = "0",
    WithExtension = "1",
    None = "2",
}

export enum CoinType {
    ELF = "ELF",
    USDT = "USDT",
}

// 全局声明 window 变量
declare global {
    interface Window {
        pk_getExistLoginType: () => LoginType;
        pk_openSignIn: (cb: (result: ResultModel<string>) => void,loginType?: LoginType, ) => void;
        //pk_sigInCb: (portkeyAddress) => void;
        pk_getWalletBalance: (coinType: CoinType, cb: (result: ResultModel<string>) => void) => void;
        pk_getUserBalance: (coinType: CoinType, cb: (result: ResultModel<string>) => void) => void;
        pk_getPoolBalance: (coinType: CoinType, cb: (result: ResultModel<string>) => void) => void;
        pk_getAllowance: (coinType: CoinType, cb: (result: ResultModel<string>) => void) => void;
        pk_approveAllowance: (coinType: CoinType, cb: (result: ResultModel<void>) => void) => void;
        pk_deposit: (coinType: CoinType, amount: string, cb: (result: ResultModel<void>) => void) => void;
        pk_withdraw: (coinType: CoinType, amount: string, cb: (result: ResultModel<void>) => void) => void;
        pk_errorCb: (err: Error) => void;
        pk_approveAllowanceTest: () => void;
        pk_unApprove: (coinType: CoinType, cb: (result: ResultModel<void>) => void) => void;
        pk_logout: (cb: (result: ResultModel<void>) => void) => void;
    }
}