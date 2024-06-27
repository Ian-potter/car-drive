import * as cc from "cc";
import { UIBase } from "./UIBase";
const { ccclass, property } = cc._decorator;

@ccclass("UIToast")
export class UIToast extends UIBase {
  @property(cc.Label)
  toastLb: cc.Label;
  @property(cc.Node)
  parentNd: cc.Node;
  private static _inst: UIToast;

  static show(text: string) {
    if (this._inst) {
      this._inst.showToast(text);
    }
  }
  showToast(str: string) {
    this.node.active = true;
    this.unscheduleAllCallbacks();
    //    this.toastLb.color = cc.Color.GREEN;

    this.toastLb.string = `${str}`;
    this.scheduleOnce(() => {
      this.node.active = false;
    }, 1 + (str.length / 100) * 2);
  }

  // showGainToast(gain: string, isWin: boolean) {
  //     this.unscheduleAllCallbacks()
  //     this.toastNd.active = true;
  //     if (isWin) {
  //         this.toastLb.color = cc.Color.GREEN;
  //         this.toastLb.string = `you gain ${gain.toString()}`;
  //     } else {
  //         this.toastLb.color = cc.Color.RED;
  //         this.toastLb.string = `you lost ${gain.toString()}`;
  //     }
  //     this.scheduleOnce(() => {
  //         this.toastNd.active = false;
  //     }, 2);
  // }
}
/**
 * 蓝宝石
 *
 */
