// ** I18N

// Calendar ZH language
// Author: muziq, <muziq@sina.com>
// Encoding: utf8 
// Distributed under the same terms as the calendar itself.

// full day names
Calendar._DN = new Array
("星期日",
 "星期一",
 "星期二",
 "星期三",
 "星期四",
 "星期五",
 "星期六",
 "星期日");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("日",
"一",
"二",
"三",
"四",
"五",
"六",
"日");

Calendar._FD=0;

// full month names
Calendar._MN = new Array
("一",
 "二",
 "三",
 "四",
 "五",
 "六",
 "七",
 "八",
 "九",
 "十",
 "十一",
 "十二");

// short month names
Calendar._SMN = new Array
("1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "帮助";
Calendar._TT["ABOUT"] =
"DHTML 日期/时间 选择器\n" +
"(c) dynarch.com 2002-2003\n" + // don't translate this this ;-)
"查找最新版本请登陆: http://dynarch.com/mishoo/calendar.epl\n" +
"发布遵循GNU LGPL许可. 更多信息请查看 http://gnu.org/licenses/lgpl.html." +
"\n\n" +
"日期选择:\n" +
"- 使用 \xab, \xbb 按钮选择年.\n" +
"- 使用 " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " 按钮选择月\n" +
"- 按住鼠标按钮使用以上键可以加快选择.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"时间选择:\n" +
"- 点击时间区域新建时间\n" +
"- 或者Shift-click减少\n" +
"- 或者点选并拖动以加快选择.";

Calendar._TT["PREV_YEAR"] = "上一年 (按住出菜单)";
Calendar._TT["PREV_MONTH"] = "上一月 (按住出菜单)";
Calendar._TT["GO_TODAY"] = "转到今日";
Calendar._TT["NEXT_MONTH"] = "下一月 (按住出菜单)";
Calendar._TT["NEXT_YEAR"] = "下一年 (按住出菜单)";
Calendar._TT["SEL_DATE"] = "选择日期";
Calendar._TT["DRAG_TO_MOVE"] = "拖动";
Calendar._TT["PART_TODAY"] = " (今日)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "最左边显示%s";
// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";
Calendar._TT["CLOSE"] = "关闭";
Calendar._TT["TODAY"] = "今日";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%Y年%b月%e日,%A";
Calendar._TT["TIME_PART"] = "(Shift-)点击鼠标或拖动改变值";
Calendar._TT["WK"] = "周";
Calendar._TT["TIME"] = "时间:";
