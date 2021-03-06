/*
 * MIT License
 * 
 * Copyright (c) 2018 lujun. https://github.com/whilu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import View=laya.ui.View;
import Dialog=laya.ui.Dialog;

module ui {
    
    export class SampleViewUI extends View {
		public enBtn:Laya.Button;
		public scBtn:Laya.Button;
		public tcBtn:Laya.Button;
		public jpBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Text","props":{"y":0,"x":0,"width":753,"valign":"middle","text":"Key                                       Value","height":120,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":69,"x":0,"width":753,"valign":"middle","text":"---------------------------------------------------------------------------","height":33,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":97,"x":0,"width":216,"valign":"middle","text":"^BTN_SET","name":"^BTN_SET","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":173,"x":0,"width":216,"valign":"middle","text":"^BTN_MUSIC","name":"^BTN_MUSIC","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":256,"x":0,"width":216,"valign":"middle","text":"^BTN_SOUND","name":"^BTN_SOUND","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":338,"x":0,"width":216,"valign":"middle","text":"^BTN_DEBUG","name":"^BTN_DEBUG","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":97,"x":368,"width":216,"valign":"middle","name":"^BTN_SET value Text","height":66,"fontSize":30,"color":"#ffffff"},"child":[{"type":"MultiLangText","props":{"translateParent":true,"langKey":"^BTN_SET"}}]},{"type":"MultiLangText","props":{"y":173,"x":368,"width":216,"valign":"middle","text":"","name":"^BTN_MUSIC value MultiLangText","langKey":"^BTN_MUSIC","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"MultiLangText","props":{"y":256,"x":368,"width":216,"valign":"middle","text":"","name":"^BTN_SOUND value MultiLangText","langKey":"^BTN_SOUND","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"MultiLangText","props":{"y":338,"x":368,"width":216,"valign":"middle","text":"","name":"^BTN_DEBUG value MultiLangText","langKey":"^BTN_DEBUG","height":66,"fontSize":30,"color":"#ffffff"}},{"type":"Text","props":{"y":395,"x":0,"width":753,"valign":"middle","text":"---------------------------------------------------------------------------","height":33,"fontSize":30,"color":"#ffffff"}},{"type":"Button","props":{"y":443,"x":23,"width":100,"var":"enBtn","stateNum":3,"skin":"comp/button.png","labelSize":30,"label":"EN","height":60}},{"type":"Button","props":{"y":443,"x":209,"width":100,"var":"scBtn","stateNum":3,"skin":"comp/button.png","labelSize":30,"label":"SC","height":60}},{"type":"Button","props":{"y":443,"x":405,"width":100,"var":"tcBtn","stateNum":3,"skin":"comp/button.png","labelSize":30,"label":"TC","height":60}},{"type":"Button","props":{"y":443,"x":603,"width":100,"var":"jpBtn","stateNum":3,"skin":"comp/button.png","labelSize":30,"label":"JP","height":60}},{"type":"Text","props":{"y":507,"x":0,"width":753,"valign":"middle","text":"---------------------------------------------------------------------------","height":33,"fontSize":30,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("MultiLangText",co.lujun.laya.component.MultiLangText);

            super.createChildren();
            this.createView(ui.SampleViewUI.uiView);

        }

    }
}
