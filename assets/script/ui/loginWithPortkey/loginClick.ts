import { _decorator, Button, Component, director } from "cc";
import { LoginType, ResultModel } from "../../types";
import { playerData } from "../../framework/playerData";
import { LoginManager } from "../../login/LoginManager";
const { ccclass } = _decorator;

/**
 * Predefined variables
 * Name = loginClick
 * DateTime = Thu Jun 27 2024 18:08:08 GMT+0800 (中国标准时间)
 * Author = potter_cos
 * FileBasename = loginClick.ts
 * FileBasenameNoExtension = loginClick
 * URL = db://assets/script/ui/loginClick/loginClick.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass("loginClick")
export class loginClick extends Component {
  onLoad() {
    console.log(this.node, "this.button");
    this.node.on(Button.EventType.CLICK, this.onSignIn, this);
  }

  protected async start() {
    this.onSignIn();
  }

  async onSignIn() {
    const isLogin = await LoginManager.instance.onSignIn();
    if (!isLogin) return;
    director.loadScene("main", function () {});
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
