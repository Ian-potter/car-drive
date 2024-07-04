import { _decorator, Component, Node } from "cc";
import { LoginType, ResultModel } from "../types";
import { playerData } from "../framework/playerData";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LoginManager
 * DateTime = Wed Jul 03 2024 18:56:13 GMT+0800 (中国标准时间)
 * Author = potter_cos
 * FileBasename = LoginManager.ts
 * FileBasenameNoExtension = LoginManager
 * URL = db://assets/script/Login/LoginManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass("LoginManager")
export class LoginManager extends Component {
  static _instance: LoginManager;

  static get instance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new LoginManager();
    return this._instance;
  }
  async onSignIn() {
    const result = await new Promise<ResultModel<string>>((rs, rj) => {
      window.pk_openSignIn((result) => {
        rs(result);
      }, LoginType.None);
    });
    if (result.isSucc) {
      playerData.instance.setCaAddress(result.data);
      return true;
    }
    return false;
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
