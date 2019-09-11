import { Dimensions } from "react-native"
/**
 *  尺寸转换公用函数
 * */

// 设计稿 px
const designW = 750
const designH = 1334

// 获取屏幕的dp
const { width: screenW, height: screenH } = Dimensions.get("window")

/**
 * 设计稿 px 转 dp (相对设计稿宽度计算)
 * @param {number} px 设计稿 宽度
 * */
export function pxW2dp(px) {
  return px * screenW / designW
}

/**
 * 设计稿 px 转 dp (相对设计稿高度计算)
 * @param {number} px 设计稿 高度
 * */
export function pxH2dp(px) {
  return px * screenH / designH
}

/**
 * 按照宽度进行 百分比 计算
 * @param {number} perc 百分比
 * */
export function percW2dp(perc) {
  return perc / 100 * screenW
}

/**
 * 按照高度进行 百分比 计算
 * @param {number} perc 百分比
 * */
export function percH2dp(perc) {
  return perc / 100 * screenH
}
