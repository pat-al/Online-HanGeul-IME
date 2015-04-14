/*
 * Author : Ho-Seok Ee <hsee@korea.ac.kr>
 * Release: 2006/07/18
 * Update : 2011/01/22

 * Modifier : Pat-al <pat@pat.im> (http://pat.im)
 * Added support for more Hangeul keyboard layouts. (3-90, 3-2012, 3-2015P, SinSebeol 2003/2012, Anmatae, Moachigi 2015, North Korea 2-sets type(KPS 9256), and so on.
 * Added support for Dvorak and Colemak keyboard layouts.
 * Added support for Firefox 12 and higher.
 * Added the on-screen keyboard function.
 * Last Update : 2015/04/15

 Copyright (C) Ho-Seok Ee <hsee@korea.ac.kr> & Pat-al <pat@pat.im>. All rights reserved.

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License as
  published by the Free Software Foundation; either version 2 of
  the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  The license can be found at http://www.gnu.org/licenses/gpl.txt.
*/

var En_type = 'QWERTY';
var K2_type = 'KSX5002';
var K3_type = 'Sin3-2012';
var KBD_type = 'QWERTY'; // 기준 자판 종류 (QWERTY/QWERTZ/AZERTY, ohiChange_KBD_type 함수로 바꿈)

var initial_layout_type = 'K3'; // 처음 띄울 자판 배열 종류
var initial_layout = initial_layout_type=='En' ? En_type : initial_layout_type=='K2' ? K2_type : K3_type;

var ohi_KE_Status = initial_layout_type;

function option() {
	var layout_table_show; // 1: 자판 배열표 보기  0: 자판 배열표 감추기 --> show_keyboard() 함수로 값을 바꿈
	var sublayout_show; // 보조(겹받침 확장) 배열표 보기 --> show_sublayout() 함수로 값을 바꿈
	var sign_ext_enable; // 세벌식 자판의 기호 확장 배열을 쓸지 --> ohiChange_sign_ext_enable() 함수로 값을 바꿈
	var normal_typing; // 모아치기 자판을 일반 타자법(이어치기)으로 치기
	var NCR; // 문자 참조 보기
}

function NCR_option() {
	var convert_only_CGG_encoding; // 첫가끝 조합형으로 들어간 한글만 바꾸기
}

var option=new option();
option.layout_table_show=1;
option.sublayout_show=0;
option.sign_ext_enable=1;
option.normal_typing = 0;
option.NCR = 0;

var NCR_option=new NCR_option();
NCR_option.convert_only_CGG_encoding=0;

var ohiQ = [0,0,0,0,0,0,0]; // 조합하고 있는 요즘한글 낱자를 담는 배열 [첫,첫,가,가,끝,끝,끝]
var ohiR = [0,0,0,0,0,0,0]; // 조합하고 있는 요즘한글 낱자의 추가 정보를 담는 배열 (보기: 겹홀소리 조합용 홀소리인지, 받침 붙는 홀소리인지)
var backup_ohiQ = []; // 요즘한글에서 옛한글 상태로 바뀔 때에 ohiQ를 복사해 두는 배열
var backup_ohiR = []; // 요즘한글에서 옛한글 상태로 바뀔 때에 ohiR를 복사해 두는 배열

var ohiStatus = document.createElement('div');
var ohiTimeout = 0;

var Hangeul_SignExtKey1 = 0; // 공병우 세벌식 자판의 첫째 기호 확장 글쇠 누른 횟수, 신세벌 확장 기호 상태
var Hangeul_SignExtKey2 = 0; // 공병우 세벌식 자판의 두째 기호 확장 글쇠 누른 횟수

var keypress_skip = 0; // 오른쪽 숫자판을 눌렀을 때 ohiKeypress() 처리를 건너뛰기
var shift_click = 0; // 배열표에서 윗글쇠 누른 상태
var capslock_click = 0; // 배열표에서 Caps Lock을 누른 상태
var simultaneous_pressed_keys = []; // 같은 때에 함께 눌린 글쇠값들을 쌓아 두는 배열
var simultaneous_strokes = 0; // 같은 때에 함께 눌린 글쇠 수

var browser = '', browser_ver = 0, nu = navigator.userAgent;
var dkey, ukey;

var pressed_keys = [];
var pressing_keys = 0;
var prev_phoneme = []; // 조합하고 있는 한글 낱내에 들어간 낱자(글쇠 기준)들을 담는 배열
var prev_combined_phoneme = []; // 조합하고 있는 한글 낱내에 조합된 낱자들을 담는 배열
var hangeul_combination_table_default, hangeul_combination_table_full;
var ohiHangeul3_HanExtKey=0;

var ohi_cheot, ohi_ga, ohi_ggeut, ohi_hotbatchim;
var unicode_hangeul_CGG_phoneme = [], unicode_cheot = [], unicode_ga = [], unicode_ggeut=[];
var unicode_modern_cheot = [], unicode_modern_ga = [], unicode_modern_ggeut = [];
var compatibility_cheot = [], compatibility_ga = [], compatibility_ggeut = [];

var basic_layouts=[];
var current_layout=[];

function basic_layouts() {
	var KE = '';
	var type_name = ''
	var full_name = '';
	var layout = null;
	var sublayout = null;	// 갈마들이 방식 자판들이 덧붙여 쓰는 배열	
	var sign_extension_layout = null;	// 기호 확장 배열
	var hangeul_extension_layout = null;	// 한글 확장 배열
	var hangeul_combination_table = null;	// 한글 낱자 결합 규칙
	var link = '';
}

function basic_layouts_info_push() {
	basic_layouts.push({KE: 'En', type_name: 'QWERTY', full_name: 'QWERTY'});
	basic_layouts.push({KE: 'En', type_name: 'Dvorak', full_name: 'Dvorak', layout:En_Dvorak_layout});
	basic_layouts.push({KE: 'En', type_name: 'Colemak', full_name: 'Colemak', layout:En_Colemak_layout});

	basic_layouts.push({KE: 'K2', type_name: 'KSX5002', full_name: '한국 표준 (KS X 5002)'});
	basic_layouts.push({KE: 'K2', type_name: 'KPS9256', full_name: '조선 국규 (KPS 9256)'});
	basic_layouts.push({KE: 'K2', type_name: '2-sun-KSX5002', full_name: '두벌식 순아래 (꼬마집오리)', link: 'http://blog.daum.net/tinyduck/2111486'});

	basic_layouts.push({KE: 'K3', type_name: '3-90', full_name: '3-90', layout: K3_90_layout, link: ''});
	basic_layouts.push({KE: 'K3', type_name: '3-91', full_name: '3-91 (공병우 최종 자판)', layout: K3_91_layout, link: ''});
	basic_layouts.push({KE: 'K3', type_name: '3-2012', full_name: '3-2012', layout: K3_2012_layout, sign_extension_layout: K3_2012_sign_extension_layout, link: 'http://pat.im/938'});
	basic_layouts.push({KE: 'K3', type_name: '3-sun1990', full_name: '순아래 1990', layout: K3_sun1990_layout, link: ''});
	basic_layouts.push({KE: 'K3', type_name: '3-sun2014', full_name: '순아래 2014', layout: K3_sun2014_layout, hangeul_combination_table: K3_sun2014_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/18'});
	basic_layouts.push({KE: 'K3', type_name: '3-2015P', full_name: '3-2015P', layout: K3_2015P_layout, sublayout: K3_2015P_sublayout, sign_extension_layout: K3_2012y_sign_extension_layout, link: 'http://pat.im/1090'});

	basic_layouts.push({KE: 'K3', type_name: '3-93y', full_name: '3-93 옛한글', layout: K3_93y_layout, link: 'http://asadal.pnu.kr/data/data_002_006.html'});
	basic_layouts.push({KE: 'K3', type_name: '3-2012y', full_name: '3-2012 옛한글', layout: K3_2012_layout, sign_extension_layout: K3_2012y_sign_extension_layout, hangeul_extension_layout: K3_2012y_hangeul_extension_layout, link: 'http://pat.im/938#4-2'});	
	basic_layouts.push({KE: 'K3', type_name: '3-2015Py', full_name: '3-2015P 옛한글', layout: K3_2015P_layout, sign_extension_layout: K3_2012y_sign_extension_layout, hangeul_extension_layout: K3_2012y_hangeul_extension_layout, link: 'http://pat.im/1090'});

	basic_layouts.push({KE: 'K3', type_name: 'Sin3-2003', full_name: '신세벌식 2003 (박경남 수정 신세벌식)', layout: K3_Sin3_2003_layout, sublayout: K3_Sin3_2003_sublayout, sign_extension_layout: K3_Sin3_sign_extension_layout});
	basic_layouts.push({KE: 'K3', type_name: 'Sin3-2012', full_name: '신세벌식 2012', layout: K3_Sin3_2012_layout, sublayout: K3_Sin3_2012_sublayout, sign_extension_layout: K3_Sin3_sign_extension_layout, link: 'http://pat.im/978'});
}

function browser_detect() {
	var trident=navigator.userAgent.match(/Trident\/(\d\.\d)/i);
	var trident_ver = trident===undefined || !trident ? 0 : parseFloat(trident[1]);
	if(nu.indexOf('MSIE')>=0 || trident_ver>=7) {
		browser = "MSIE";
		if(trident_ver<7) {
			browser_ver = parseFloat(nu.substring(nu.indexOf("MSIE ")+5));
		}
		else if(trident_ver==7) {
			browser_ver=11;
		}
	}
	else if(nu.indexOf('Firefox') != -1) {
		browser = "Firefox";
		browser_ver = parseFloat(nu.substring(nu.indexOf('Firefox/')+8));
	}
	else if(nu.indexOf('Chrome') != -1) {
		browser = "Chrome";
		browser_ver = parseFloat(nu.substring(nu.indexOf('Chrome/')+7));
	}
}

function ohiBackspace(f) { // backspace 글쇠를 누르지 않았을 때에 backspace 동작을 하게 함
	if(document.selection && browser=='MSIE' && browser_ver<9) {
		var s=document.selection.createRange(), t=s.text;
		s.moveStart('character', -f.value.length);
		var pos = s.text.length;
		if(f.setSelectionRange) {
			f.setSelectionRange(pos-1,pos);
			f.text='';
		}
		else if(f.createTextRange) {
			var range = f.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos-1);
			range.select();
			range.text = '';
		}
	}
	else {
		var bs_start = f.selectionStart;
	  var bs_end = f.selectionEnd;
		if(bs_start == bs_end) {
			f.value = f.value.substr(0,bs_start-1)+f.value.substr(bs_end);
			f.selectionStart=f.selectionEnd=bs_start-1;
		}
		else {
			f.value = f.value.substr(0,bs_start)+f.value.substr(bs_end);
			f.selectionStart=f.selectionEnd=bs_start;
		}
	}
}

function ohiHangeul_backspace(f,e) {
	var i;

	// Backspace (공병우 세벌식에서 기호 확장 배열 상태일 때)
	if(option.sign_ext_enable && Hangeul_SignExtKey1+Hangeul_SignExtKey2) {
		if(e.preventDefault) e.preventDefault();
		esc_ext_layout();
		return false;
	}

	if(KE=='K3' && prev_phoneme.length) {	// 첫가끝 조합 상태
		if(!ohiHangeul3_HanExtKey) {
			if(e.preventDefault) e.preventDefault();
			i=prev_combined_phoneme.length; while(i--) ohiBackspace(f);					
			var temp_prev_phoneme = prev_phoneme.slice();
			prev_phoneme.splice(0);
			prev_combined_phoneme.splice(0);
			for(i=temp_prev_phoneme.length-1; i>=1; --i) {
				if(temp_prev_phoneme[i]!=0x115F && temp_prev_phoneme[i]!=0x1160) {
					Hangeul_Gong3_yes(f,0,temp_prev_phoneme[i]);
				}
			}

			for(i=0;i<1;++i) {	// 첫가끝 채움 문자 빼기
				if(prev_phoneme[i]==0x115F || prev_phoneme[i]==0x1160) {
					prev_phoneme.splice(0,1);
					prev_combined_phoneme.splice(0,1);
					ohiBackspace(f);
					--i;
				}
				else break;
			}
		}
		if(K3_type.substr(-1)!='y') { // 아래아 등이 지워졌을 때 첫가끝 코드 조합 상태에서 요즘한글(완성형) 코드로 바꾸기
			for(i=0;i<prev_combined_phoneme.length;++i) {
				if(unicode_cheot.indexOf(prev_combined_phoneme[i]) > ohi_cheot.length-1 || unicode_ga.indexOf(prev_combined_phoneme[i]) > ohi_ga.length-1 || unicode_ggeut.indexOf(prev_combined_phoneme[i]) > ohi_ggeut.length-1) break;
			}
			if(i==prev_combined_phoneme.length) {	// 첫가끝 방식으로 조합하던 낱자들을 지우고 요즘한글 방식(완성형)으로 첫소리만 넣기
				if(e.preventDefault) e.preventDefault();
				i=prev_combined_phoneme.length; while(i--) ohiBackspace(f);					
				for(i=prev_combined_phoneme.length;i>=0;--i) {
					if(unicode_cheot.indexOf(prev_combined_phoneme[i])>=0) {
						ohiQ = backup_ohiQ.slice();
						ohiR = backup_ohiR.slice();
						ohiInsert(f,0,ohiQ);
						break;
					}
				}
				prev_phoneme.splice(0);
				prev_combined_phoneme.splice(0);
			}
		}
		else {
			esc_ext_layout();
			if(e.preventDefault) e.preventDefault();
			return false;
		}
		esc_ext_layout();
		return false;
	}
	if(ohiQ[1] || ohiQ[3] || ohiQ[0] && ohiQ[2]) { // Backspace (요즘한글 조합 상태)
		if(e.preventDefault) e.preventDefault();
		for(i=6; !ohiQ[i];) i--;
		ohiInsert(f,ohiQ[i]=0,ohiQ);
		ohiR[i]=0;
		
		esc_ext_layout();
		return false;
	}
	return true;
}

function ohiDoubleJamo(a,c,d) {
	var i, j=[ // Double Jamos
		[ [1,7,18,21,24],1,7,18,21,24 ], // Cho
		[ [39,44,49],[31,32,51],[35,36,51],51 ], // Jung
		[ [1,4,9,18,21],[1,21],[24,30],[1,17,18,21,28,29,30],[0,21],21 ] // Jong
	];

	a=j[a];
	for(i=a[0].length; c!=a[0][i-1]; i--) if(!i) return i;
	for(a=a[i], i=a.length||1; 1; i--) if(!i || d==a || d==a[i-1]) return i;
}

function ohiInsert(f,m,c) { // Insert
	if(!c && ohiQ=='0,0,0,0,0,0,0') return true;
	if(c.length!=7) ohiQ=ohiR=[0,0,0,0,0,0,0];
	else {
		var m=m||'0,0,0,0,0,0,0', i=c[0]+c[1], j=c[2]+c[3], k=c[4]+c[5]+c[6];
		c=i&&j?0xac00+(i-(i<3?1:i<5?2:i<10?4:i<20?11:12))*588+(j-31)*28+k-(k<8?0:k<19?1:k<25?2:3):0x3130+(i||j||k);
	}

	if(document.selection && browser=="MSIE" && browser_ver<10 ) { // IE ~9
		var s=document.selection.createRange(), t=s.text;
		if(t && document.selection.clear) document.selection.clear();
		s.text=(m=='0,0,0,0,0,0,0'||c&&t.length>1?'':t.substr(0,t.length))+String.fromCharCode(c);
		if(!c || !m || s.moveStart('character',-1)) s.select();
	}
	else if(f.selectionEnd+1) {
		if(m!='0,0,0,0,0,0,0' && f.selectionEnd-f.selectionStart==1) f.selectionStart++;
		var e=document.createEvent('KeyboardEvent');
		if(e.initKeyEvent && !(browser=="Firefox" && browser_ver>=12 ) && browser!="Chrome") { // Gecko
			e.initKeyEvent('keypress',0,0,null,0,0,0,0,127,c);
			if(c && f.dispatchEvent(e) && m) f.selectionStart--;
		} else { // Firefox 12~, Chrome
			var scrollTop = f.scrollTop, scrollLeft = f.scrollLeft, selectionStart = f.selectionStart;
			var endText = f.value.substr(f.selectionEnd,f.value.length);
			f.value = f.value.substr(0,selectionStart)+String.fromCharCode(c);
			var scrollHeight = f.scrollHeight, scrollWidth = f.scrollWidth;
			f.value += endText;
			f.scrollTop = (scrollTop > scrollHeight-f.clientHeight) ? scrollTop : scrollHeight-f.clientHeight;
			f.scrollLeft = (scrollLeft > scrollWidth-f.clientWidth) ? scrollLeft : scrollWidth-f.clientWidth;
			f.setSelectionRange(m || c<32 ? selectionStart:selectionStart+1, selectionStart+1);
		}
	}	
}

function esc_ext_layout() {
	var KE = ohi_KE_Status.substr(0,2);
	if(ohiHangeul3_HanExtKey || Hangeul_SignExtKey1+Hangeul_SignExtKey2) {
		if(KE=='K3') {
			Hangeul_SignExtKey1=Hangeul_SignExtKey2=0;
			ohiHangeul3_HanExtKey=0;
			show_keyboard(K3_type);
		}
	}
	Hangeul_SignExtKey1=Hangeul_SignExtKey2=0;
	ohiHangeul3_HanExtKey=0;
}

function combine_unicode_hangeul_phoneme(c1,c2) { // 유니코드 한글 낱자 조합하기
	var combination_table=hangeul_combination_table_default;
	if(current_layout.type_name.substr(-1)=='y') combination_table=hangeul_combination_table_full;
	if(typeof current_layout.hangeul_combination_table != 'undefined' && typeof current_layout.hangeul_combination_table.length != 'undefined' && current_layout.hangeul_combination_table.length)
		combination_table = current_layout.hangeul_combination_table;

	var combined_phoneme=0x10000*c1+c2;
	for(i=0; i<combination_table.length; ++i) {
		if(combined_phoneme==combination_table[i][0]) {
			combined_phoneme=combination_table[i][1];
			break;
		}
	}
	if(i==combination_table.length) return 0;
	return combined_phoneme;
}

function convert_into_modern_hangeul_syllable(f) { // 첫가끝 방식 낱내를 요즘한글 코드로 바꾸기
	var i;
	if(unicode_modern_cheot.indexOf(prev_combined_phoneme[1])>=0 && unicode_modern_ga.indexOf(prev_combined_phoneme[0])>=0
	|| unicode_modern_cheot.indexOf(prev_combined_phoneme[2])>=0 && unicode_modern_ga.indexOf(prev_combined_phoneme[1])>=0 && unicode_modern_ggeut.indexOf(prev_combined_phoneme[0])>=0) {
		if(unicode_modern_cheot.indexOf(prev_combined_phoneme[1])>=0) {
			i=2; while(i--) ohiBackspace(f);
			ohiQ = [prev_combined_phoneme[1]-0x1100+11+(prev_combined_phoneme[1]>0x1108 ? 1:0),0,prev_combined_phoneme[0]-0x1161+31,0,0,0,0];
		} else {
			i=3; while(i--) ohiBackspace(f);
			ohiQ = [prev_combined_phoneme[2]-0x1100+11+(prev_combined_phoneme[2]>0x1108 ? 1:0),0,prev_combined_phoneme[1]-0x1161+31,0,prev_combined_phoneme[0]-0x11A8+1+(prev_combined_phoneme[0]>0x11AE ? 1:0)+(prev_combined_phoneme[0]>0x11B8 ? 1:0)+(prev_combined_phoneme[0]>0x11BD ? 1:0),0,0];
		}
		prev_phoneme.splice(0);
		prev_combined_phoneme.splice(0);
		ohiInsert(f,0,ohiQ);
	}
}

function convert_into_ohi_hangeul_phoneme(c) {
// 유니코드의 요즘한글 낱자 코드를 ohi에서 쓰는 코드로 바꾸기(옛한글 낱자는 바꾸지 않음)
	if(unicode_modern_cheot.indexOf(c)>=0) c=ohi_cheot[unicode_modern_cheot.indexOf(c)];
	else if(unicode_modern_ga.indexOf(c)>=0) c=ohi_ga[unicode_modern_ga.indexOf(c)];
	else if(unicode_modern_ggeut.indexOf(c)>=0) c=ohi_ggeut[unicode_modern_ggeut.indexOf(c)];
	return c;
}

function convert_into_unicode_hangeul_phoneme(c) {
// ohi에서 쓰는 한글 낱자 코드를 바꾸기 유니코드로 바꾸기
	if(ohi_cheot.indexOf(c)>=0) c=unicode_cheot[ohi_cheot.indexOf(c)];
	else if(ohi_ga.indexOf(c)>=0) c=unicode_ga[ohi_ga.indexOf(c)];
	else if(ohi_ggeut.indexOf(c)>=0) c=unicode_ggeut[ohi_ggeut.indexOf(c)];
	return c;
}

function no_shift(c) {	// 윗글쇠를 누르지 않고 치는 글쇠인지
	if(c==0x27) return 1;
	else if(c<=0x2B) return 0;
	else if(c<=0x39) return 1;
	else if(c==0x3b || c==0x3d) return 1;
	else if(c<=0x5a) return 0;
	else if(c<=0x5d) return 1;
	else if(c<=0x5f) return 0;
	else if(c<=0x7a) return 1;
	else if(c<=0x7e) return 0;
	return 0;
}

function ohiRoman(f,e,c) { // Roman keyboard layouts (Dvorak, Colemak)
	var cc;

	if(En_type=='QWERTY' || !e) cc=c;
	else {
		if(c>64 && c<91 && !e.shiftKey) c+=32;
		if(c>96 && c<123 && e.shiftKey) c-=32;
	}

	if(En_type=='QWERTY') cc=c;
	else cc=current_layout.layout[c-33];
	ohiInsert(f,0,cc);
}

function ohiHangeul2(f,e,c) { // 2-Beolsik
	if(c<65 || (c-1)%32>25) {
		ohiInsert(f,0,c);
		return;
	}
	var cc;
	
	if(typeof current_layout.layout != 'undefined') {
		cc = convert_into_ohi_hangeul_phoneme(current_layout.layout[c-33]);
		if(ohi_cheot.indexOf(cc)>=0) cc-=127;
		else if(ohi_ga.indexOf(cc)>=0) cc-=35;
		else if(ohi_ggeut.indexOf(cc)>=0) cc-=127;
	}
	else {
		if(K2_type.substr(-7)=='KSX5002')
		 	cc=[17,48,26,23,7,9,30,39,33,35,
 			    31,51,49,44,32,36,18,1,4,
 			    21,37,29,24,28,43,27][c%32-1];
		else if(K2_type=='KPS9256')
			cc=[/*a*/24,/*b*/48,/*c*/26,/*d*/23,/*e*/7,/*f*/4,/*g*/21,/*h*/39,
			    /*i*/35,/*j*/31,/*k*/51,/*l*/49,/*m*/33,/*n*/43,/*o*/32,/*p*/36,
			    /*q*/18,/*r*/9,/*s*/1,/*t*/30,/*u*/44,/*v*/29,/*w*/17,/*x*/28,
			    /*y*/37,/*z*/27][c%32-1];
		// 한글 낱자가 든 글쇠를 윗글쇠와 함께 눌렀을 때
		if(c>64 && c<91) cc += cc==32||cc==36?2:cc==18||cc==7||cc==24||cc==1||cc==21?1:0;
	}
						
	if(cc<31) { // Jaum
		if((!ohiQ[5] || !(ohiQ[0]=-1)) && ohiQ[2]) ohiQ[5]=ohiDoubleJamo(2,ohiQ[4],cc);
		if(!ohiQ[2] || ohiQ[0]<0 || ohiQ[0] && (!ohiQ[4] || !ohiQ[5]) && (ohiQ[4] || cc==8 || cc==19 || cc==25))
			ohiInsert(f,(ohiQ=ohiQ[1]||ohiQ[2]||!ohiDoubleJamo(0,ohiQ[0],cc)?ohiQ:0),ohiQ=[cc,ohiQ?0:1,0,0,0,0,0]);
		else if(!ohiQ[0] && ohiQ[2]) {
		// 닿소리 없이 홀소리가 들어왔고 닿소리가 눌렸을 때 새 낱내로 조합하기
			ohiInsert(f,ohiQ,ohiQ);
			ohiInsert(f,0,ohiQ=[cc,0,0,0,0,0,0]);
		}
		else if(!ohiQ[0] && (ohiQ[0]=cc) || (ohiQ[4]=ohiQ[4]||cc)) ohiInsert(f,0,ohiQ);
		if(ohiQ[5]) ohiQ[5]=cc;
		
	}
	else { // Moum
		if(K2_type.substr(0,5)=='2-sun') {
			if(ohiQ[2]==cc && !ohiQ[1] && (ohiQ[0]==1 || ohiQ[0]==7 || ohiQ[0]==18 || ohiQ[0]==21 || ohiQ[0]==24)) {
			// 홀소리 글쇠를 거듭 눌러 된소리 만들기
				ohiQ[1]=1;
				ohiInsert(f,0,ohiQ);
				return;
			}
			if((ohiQ[2]==37 || ohiQ[2]==33) && cc==51) {
			// ㅕ+ㅣ→ㅖ, ㅑ+ㅣ→ㅒ
				ohiQ[3]=1;
				ohiInsert(f,0,ohiQ);
				return;
			}
		}
		if((!ohiQ[3] || ohiQ[4] || !(ohiQ[2]=-1)) && !ohiQ[4]) ohiQ[3]=ohiDoubleJamo(1,ohiQ[2],cc);
		if((ohiQ[0] && ohiQ[2]>0 && ohiQ[4]) && (ohiQ[5] || !(ohiQ[5]=ohiQ[4]) || !(ohiQ[4]=0))) {
			ohiInsert(f,0,[ohiQ[0],ohiQ[1],ohiQ[2],ohiQ[3],ohiQ[4],0,0]);
			ohiInsert(f,ohiQ,ohiQ=[ohiQ[5],0,cc,0,0,0,0]);
		}
		else if((!ohiQ[0] || ohiQ[2]) && (!ohiQ[3] || ohiQ[4]) || ohiQ[2]<0) ohiInsert(f,ohiQ,ohiQ=[0,0,cc,0,0,0,0]);
		else if(ohiQ[2]=ohiQ[2]||cc) ohiInsert(f,0,ohiQ);
	}
}

function ohiHangeul3(f,e,c) { // 세벌식 자판 (3-Beolsik)
	var i,j,cc=0,cc2=0;
	var layout=current_layout.layout;
	var sublayout=null;
	var sign_extension_layout=null;
	var combination_table=hangeul_combination_table_default;

	if(typeof current_layout.sublayout != 'undeinfed') sublayout = current_layout.sublayout;
	if(typeof current_layout.sign_extension_layout != 'undeinfed') sign_extension_layout = current_layout.sign_extension_layout;
	if(typeof current_layout.hangeul_combination_table != 'undeinfed') combination_table= current_layout.hangeul_combination_table;

	if(unicode_cheot.indexOf(c)>=0 || unicode_ga.indexOf(c)>=0 || unicode_ggeut.indexOf(c)>=0) {
	// c가 유니코드 한글 낱자일 때
		cc=c;
	}
	else if(layout) {
		cc=layout[c-33];
		cc2=layout[c-33-32];	// 윗글 자리
	}

	if(K3_type.substr(0,4)=='Sin3') {	// 신세벌식 자판
		cc=Hangeul_Sin3(f,c);
		if(cc<0) return;
	}
	else if(K3_type.substr(0,2)=='4-') { // 네벌식 타자기 자판
		cc=hangeul_4typewriter(f,c);
		if(cc<0) return;
	}
	
	if(!cc) {
		ohiInsert(f,0,0);
		return;
	}

	if(K3_type.substr(-1)!='y') {
		// 요즘한글 자판일 때에 첫가끝 방식으로 처리하지 않게 함
		cc=convert_into_ohi_hangeul_phoneme(cc);
		cc2=convert_into_ohi_hangeul_phoneme(cc2);
	}

	if(Hangeul_Gong3_sign(f,e,c)) return;

	if(K3_type.substr(-1)!='y' && (ohiQ[2]==86-35) && !ohiQ[3] && !ohiQ[4] && no_shift(c) && cc==67 && cc2==69) {
	// 요즘한글 배열에서 ㅣ가 들어간 뒤에 ㅐ가 눌렸을 때 ㅣ+ㅐ→ㅒ (ㅒ가 ㅐ의 윗글 자리에 있을 때만)
		ohiQ[3]=ohiQ[2]-68;
		ohiInsert(f,0,ohiQ);
		return;
	}

	if(K3_type.indexOf('_gm')>=0 || (K3_type=='3-2014' || K3_type=='3-2015' || K3_type=='3-2015P' || K3_type=='3-2015P')) {
	// 갈마들이 공세벌식 배열들을 위한 처리
		cc=Hangeul_Gong3_gm(f,c);
		if(cc<0) return;
	}

	if(K3_type.substr(-1)!='y' && combination_table)	{
	// 옛한글 자판이 아닐 때 낱자 결합 규칙 적용하기
		var ch;
		if(ohiQ[4]) ch=ohiQ[4]+ohiQ[5];
		else if(ohiQ[2]) ch=ohiQ[2]+ohiQ[3]+35;
		else if(ohiQ[0]) ch=ohiQ[0]+ohiQ[1]+127;

		ch=combine_unicode_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ch),convert_into_unicode_hangeul_phoneme(cc));
		if(ch) {
			if(ohiQ[4]) {
				if(!ohiQ[5]) ohiQ[5]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[4];
				else { // 3타로 넣는 받침이 들어갔을 때(순아래 2014 자판의 ㄹ+ㅁ+ㅁ→ㄿ)
					ohiQ[6]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[4]+ohiQ[5]);
				}
			}
			else if(ohiQ[2]) {
				ohiQ[3]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[2]-35;
			}
			else {
				ohiQ[1]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[0]-127;
			}
			ohiInsert(f,0,ohiQ);
			return;
		}
	}

	// 공병우 세벌식 또는 신세벌식 자판에서 첫소리만 들어간 채로 [ 자리 글쇠가 눌렸을 때 아래아를 넣음
	if((K3_type.substr(0,5)=='Sin3-' && K3_type!='Sin3-2015' && K3_type!='Sin3-M') || (K3_type.substr(0,2)=='3-' && K3_type!='3-sun1990')) {
		if(c==0x5B && ( (ohiQ[0]&&!ohiQ[2]&&!ohiQ[4] || unicode_cheot.indexOf(prev_combined_phoneme[0])>=0 )  || prev_combined_phoneme[0]==0x119E)) {
			cc=0x119E;
			// 기본 배열에 아래아가 있는 신세벌식 자판이면 겹홀소리(ᆢ 또는 ㆎ)를 조합할 수 있는 상태로 만듦
			if(K3_type.substr(0,5)=='Sin3-' && layout.indexOf(0x119E)>=0) ohiR[2]=1;
		}
	}

	// 요즘한글 자판에서 옛한글 홀소리가 들어갔을 때
	if(!prev_phoneme.length && K3_type.substr(-1)!='y' && ohi_ga.indexOf(cc)<0 && unicode_ga.indexOf(cc)>=0) {
		if(!ohiQ[0] && !ohiQ[2] && !ohiQ[4]) {
		// 한글 조합 상태가 아니면 첫소리 채움 문자 넣음
			prev_phoneme.push(cc,0x115F);
			prev_combined_phoneme.push(cc,0x115F);
			ohiInsert(f,0,0x115F);
			ohiInsert(f,0,prev_phoneme[0]);
			return;
		}

		backup_ohiQ = ohiQ.slice();
		backup_ohiR = ohiR.slice();

		if(ohiQ[0] && !ohiQ[2] && !ohiQ[4])	{
			prev_phoneme.unshift(cc,unicode_cheot[ohi_cheot.indexOf(ohiQ[0]+ohiQ[1]+127)]);
			prev_combined_phoneme.unshift(cc,unicode_cheot[ohi_cheot.indexOf(ohiQ[0]+ohiQ[1]+127)]);
			ohiBackspace(f);
			ohiInsert(f,0,prev_combined_phoneme[1]);
			ohiInsert(f,0,prev_combined_phoneme[0]);
			return;
		}

		if(ohiQ[2] || ohiQ[4]) {
		// 가운뎃소리나 끝소리가 들어 있을 때
			prev_phoneme.push(cc,0x115F);
			prev_combined_phoneme.push(cc,0x115F);
			ohiInsert(f,0,0x115F);
			ohiInsert(f,0,cc);
			return;
		}
	}
	// 요즘한글 자판으로 요즘한글 넣기
	else if(cc>127 && cc<158 && cc!=147) { // Cho
		ohiInsert(f,(ohiQ=ohiQ[1]||ohiQ[2]||!ohiDoubleJamo(0,ohiQ[0],cc-127)?ohiQ:0),ohiQ=[cc-127,ohiQ?0:1,0,0,0,0,0]);
		prev_phoneme.splice(0);
		prev_combined_phoneme.splice(0);
		return;
	}
	else if(!prev_phoneme.length && cc>65 && cc<87) { // Jung
		if((!ohiQ[3] || !(ohiQ[2]=-1)) && !(K3_type.substr(0,2)=='4-' && ohiR[2]+ohiR[3]>1)) ohiQ[3]=ohiDoubleJamo(1,ohiQ[2],cc-35);
		if((!ohiQ[0] || ohiQ[2]) && (!ohiQ[3] || ohiQ[4]) || ohiQ[2]<0) ohiInsert(f,ohiQ,ohiQ=[0,0,cc-35,0,0,0,0]);
		else if(ohiQ[2]=ohiQ[2]||cc-35) ohiInsert(f,0,ohiQ);
		return;
	}
	else if(!prev_phoneme.length && cc<31) { // Jong
		if((!ohiQ[5] || !(ohiQ[4]=-1))) ohiQ[5]=ohiDoubleJamo(2,ohiQ[4],cc);
		if(!ohiQ[0] || !ohiQ[2] || ohiQ[4] && !ohiQ[5] || ohiQ[4]<0 || (K3_type.substr(0,2)=='4-' && ohiR[2]+ohiR[3]>0)) ohiInsert(f,ohiQ,ohiQ=[0,0,0,0,cc,0,0]);
		else if(ohiQ[4]=ohiQ[4]||cc) ohiInsert(f,0,ohiQ);
		return;
	}

	if(K3_type.substr(-1)=='y' || prev_phoneme.length) {
	// 옛한글 자판
		Hangeul_Gong3_yes(f,c,cc);
	}
	else ohiInsert(f,0,cc);
}

function ohiHangeul3_moa(f,e) { // 모아치기 세벌식 자판
	var i,j,cc=0,cc2=0;
	var layout=current_layout.layout;

	var cheot = [];
	var ga = [];
	var ggeut = [];
	var etc = [];

	for(i=0;i<pressed_keys.length;++i) {
		cc=convert_into_unicode_hangeul_phoneme(current_layout.layout[pressed_keys[i]-33]);		
		
		if(unicode_cheot.indexOf(cc)>=0) {
			cheot.push(i);
		}
		else if(unicode_ga.indexOf(cc)>=0) {
			ga.push(i);
		}
		else if(unicode_ggeut.indexOf(cc)>=0) {
			ggeut.push(i);
		}
		else {
			etc.push(i);
		}
	}
	
	for(i=0;i<cheot.length;++i) {
		if(pressed_keys[cheot[i]]) ohiHangeul3(f,e,pressed_keys[cheot[i]]);
	}
	
	for(i=0;i<ga.length;++i) {
		if(pressed_keys[ga[i]]) ohiHangeul3(f,e,pressed_keys[ga[i]]);
	}
	
	for(i=0;i<ggeut.length;++i) {
		if(pressed_keys[ggeut[i]]) ohiHangeul3(f,e,pressed_keys[ggeut[i]]);
	}
	
	for(i=0;i<etc.length;++i) {
		if(pressed_keys[etc[i]]) ohiHangeul3(f,e,pressed_keys[etc[i]]);
	}
	
	ohiInsert(f,0,16);
	ohiBackspace(f);
}

function Hangeul_Gong3_sign(f,e,c) {
	if(option.sign_ext_enable	&& ((c==118&&(K3_type=='3-2011' || K3_type=='3-2012')))
		&& ( !prev_phoneme.length&&(!ohiQ[0]&&!ohiQ[2] || ohiQ[2]) || prev_phoneme.length&&unicode_cheot.indexOf(prev_combined_phoneme[0])<0&&(unicode_ga.indexOf(prev_combined_phoneme[0])>=0 || unicode_ggeut.indexOf(prev_combined_phoneme[0])>=0)) ) {
	// 3-2011, 3-2012 자판의 왼쪽 특수기호 확장 글쇠(ㅗ 또는 ㅜ)가 눌린 횟수 더하기
		if(!Hangeul_SignExtKey2) ++Hangeul_SignExtKey1;
		else Hangeul_SignExtKey1+=2;
		if(Hangeul_SignExtKey1+Hangeul_SignExtKey2>3)	Hangeul_SignExtKey1=Hangeul_SignExtKey2=0;
		show_keyboard(K3_type);
		return 1;
	}
	else if(option.sign_ext_enable && ((c==56&&(K3_type=='3-2011' || K3_type=='3-2012')))
		&& ( !prev_phoneme.length&&(!ohiQ[0]&&!ohiQ[2] || ohiQ[2]) || prev_phoneme.length&&unicode_cheot.indexOf(prev_combined_phoneme[0])<0&&(unicode_ga.indexOf(prev_combined_phoneme[0])>=0 || unicode_ggeut.indexOf(prev_combined_phoneme[0])>=0)) ) {
	// 3-2011, 3-2012 자판의 오른쪽 특수기호 확장 글쇠(ㅢ)가 눌린 횟수 더하기
 		if(!Hangeul_SignExtKey1) ++Hangeul_SignExtKey2;
		else Hangeul_SignExtKey2+=2;
		if(Hangeul_SignExtKey1+Hangeul_SignExtKey2>3)	Hangeul_SignExtKey1=Hangeul_SignExtKey2=0;
		show_keyboard(K3_type);
		return 1;
	}
	else if(option.sign_ext_enable && !ohiHangeul3_HanExtKey
		&& (K3_type=='3-2011y' || K3_type=='3-2012y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,7)=='3-2015P')
		&& (c==0x2F || c==0x39)
		&& (((!ohiQ[0]&&!ohiQ[2] || ohiQ[2] || ohiQ[0]&&(c==0x2F || c==0x39) && Hangeul_SignExtKey1+Hangeul_SignExtKey2)
		&& ((unicode_cheot.indexOf(prev_phoneme[0])<0&&unicode_ga.indexOf(prev_phoneme[0])<0&&unicode_ggeut.indexOf(prev_phoneme[0])<0) || unicode_ga.indexOf(prev_phoneme[0])>=0 || unicode_ggeut.indexOf(prev_phoneme[0])>=0))) ) {
	// 3-2011 옛한글, 3-2012 옛한글, 3-2014, 3-2014 옛한글, 3-2015P, 3-2015P 옛한글 자판의 기호 확장 글쇠가 눌린 횟수 더하기
		if(c==0x2F || c==0x39) {	// 전환 글쇠가 눌렸을 때
			if(ohiR[2]) {
				ohiR[2]=0;
				ohiHangeul_backspace(f,e);
			}
			if(c==0x2F) {	// 밑기호 글쇠(오른쪽 ㅗ)가 눌렸을 때
				Hangeul_SignExtKey2=0;
				++Hangeul_SignExtKey1;
				if(Hangeul_SignExtKey1>3) esc_ext_layout();
				else show_keyboard(K3_type);
			}
			if(c==0x39) {	// 윗기호 글쇠(오른쪽 ㅜ)가 눌렸을 때
				Hangeul_SignExtKey1=0;
				++Hangeul_SignExtKey2;
				if(Hangeul_SignExtKey2>5) esc_ext_layout();
				else show_keyboard(K3_type);
			}
		}
		return 1;
	}
	else if(option.sign_ext_enable && (Hangeul_SignExtKey1 || Hangeul_SignExtKey2) && (K3_type=='3-2011' || K3_type=='3-2012')) {
	// 3-2011, 3-2012 특수기호 확장 배열
		if(prev_phoneme.length)	convert_into_modern_hangeul_syllable(f);
		cc=0;
		cc=current_layout.sign_extension_layout[c-33][Hangeul_SignExtKey1+Hangeul_SignExtKey2-1];
		ohiInsert(f,0,cc);
		esc_ext_layout();
		return 1;
	}
	else if(option.sign_ext_enable && (Hangeul_SignExtKey1 || Hangeul_SignExtKey2) && (K3_type=='3-2011y' || K3_type=='3-2012y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,6)=='3-2015')) {
	// 3-2011 옛한글, 3-2012 옛한글, 3-2015, 3-2015 옛한글 자판의 기호 확장 배열
		if(Hangeul_SignExtKey1) cc=current_layout.sign_extension_layout[c-33][0][Hangeul_SignExtKey1-1];
		if(Hangeul_SignExtKey2) cc=current_layout.sign_extension_layout[c-33][1][Hangeul_SignExtKey2-1];
		if(prev_phoneme.length && c!=8) convert_into_modern_hangeul_syllable(f);

		// 옛한글 자판이 아닐 때는 방점이 들어왔을 때에 한글 채움 문자를 넣음
		if(cc==0x302E || cc==0x302F) {
			if(K3_type.substr(-1)!='y') {
				ohiInsert(f,0,0x115F);
				ohiInsert(f,0,0x1160);
			}
		}
		
		ohiInsert(f,0,cc);

		prev_phoneme.splice(0);
		prev_combined_phoneme.splice(0);
		esc_ext_layout();
		return 1;
	}
	return 0;
}

function Hangeul_Gong3_yes(f,c,cc) {	// 공세벌식 옛한글 처리
	if(K3_type.substr(-1)!='y') cc=convert_into_unicode_hangeul_phoneme(cc);

	if(K3_type=='3-2011y' || K3_type=='3-2012y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,7)=='3-2015P') {
		if(c==55 || cc==0x1168) {	// 첫째 한글 확장 글쇠(ㅖ 자리 글쇠)가 눌렸을 때
			if(ohiHangeul3_HanExtKey%0x10==2 || ohiHangeul3_HanExtKey==0x11) { esc_ext_layout(); convert_into_modern_hangeul_syllable(f); return false;}
			if(ohiHangeul3_HanExtKey>0x10) {esc_ext_layout(); return false;}
			ohiHangeul3_HanExtKey = (ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+1;
			show_keyboard('3-2012y_han_ext');
			return false;
		} else if(c==56 || cc==0x1174) { // 두째 한글 확장 글쇠(ㅢ 자리 글쇠)가 눌렸을 때
			if(ohiHangeul3_HanExtKey%0x10==1 || ohiHangeul3_HanExtKey==0x12) { esc_ext_layout(); convert_into_modern_hangeul_syllable(f); return false;}
			if(ohiHangeul3_HanExtKey>0x10) {esc_ext_layout(); return false;}
			ohiHangeul3_HanExtKey = (ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+2;
			show_keyboard('3-2012y_han_ext');
			return false;
		}

		if(ohiHangeul3_HanExtKey) {
			layout = K3_2012y_hangeul_extension_layout;
			cc=layout[c-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey/0x10];
			cc=layout[c-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10 ? 1:0];
		}
	}

	var combination_table=hangeul_combination_table_full;
	if(typeof current_layout.hangeul_combination_table != 'undefined') combination_table=current_layout.hangeul_combination_table;

	var combined_phoneme=combine_unicode_hangeul_phoneme(prev_combined_phoneme[0],cc);
	
	// 앞 낱자와 조합하지 않는 첫소리나 한글이 아닌 문자가 들어왔을 때에 조합을 끊고 앞 낱내를 요즘한글 방식 코드로 바꿈
	if(!combined_phoneme&&unicode_cheot.indexOf(cc)>=0 || unicode_cheot.indexOf(cc)<0&&unicode_ga.indexOf(cc)<0&&unicode_ggeut.indexOf(cc)<0) {
		convert_into_modern_hangeul_syllable(f);
		prev_phoneme.splice(0);
		prev_combined_phoneme.splice(0);
	}

	if(c==0x5B && unicode_cheot.indexOf(prev_phoneme[0])>=0 && !ohiHangeul3_HanExtKey) { // 첫소리가 들어간 채로 [ 자리 글쇠가 눌렸을 때 아래아를 넣음
		cc=0x119E;
	}
	else if(!combined_phoneme && unicode_ga.indexOf(cc)>=0 && unicode_cheot.indexOf(prev_phoneme[0])<0) {
	// 앞에 첫소리 없이 가운뎃소리가 들어왔을 때
		convert_into_modern_hangeul_syllable(f);
		ohiInsert(f,0,0x115F); // 첫소리 채움 문자 넣음
		prev_phoneme.splice(0);
		prev_phoneme.unshift(0x115F);
		prev_combined_phoneme.splice(0);
		prev_combined_phoneme.unshift(0x115F);
	}
	else if(!combined_phoneme && unicode_ggeut.indexOf(cc)>=0) {
	// 끝소리가 들어왔을 때
		if(unicode_cheot.indexOf(prev_phoneme[0])>=0) {
		 // 바로 앞에 첫소리가 들어왔다면 가운뎃소리 채움 문자 넣음
			ohiInsert(f,0,0x1160);
			prev_phoneme.unshift(0x1160);
			prev_combined_phoneme.unshift(0x1160);
		} 
		else if(unicode_cheot.indexOf(prev_phoneme[0])<0 && unicode_ga.indexOf(prev_phoneme[0])<0) {
		// 바로 앞에 첫소리도 가운뎃소리도 끝소리도 들어오지 않았을 때
			convert_into_modern_hangeul_syllable(f);
			ohiInsert(f,0,0x115F);
			ohiInsert(f,0,0x1160); // 가운뎃소리 채움 문자 넣음
			prev_phoneme.splice(0);
			prev_phoneme.unshift(0x1160,0x115F);
			prev_combined_phoneme.splice(0);
			prev_combined_phoneme.unshift(0x1160,0x115F);
		}
	}

	prev_phoneme.unshift(cc);	

	if(combined_phoneme) {
		prev_combined_phoneme[0] = combined_phoneme;
		ohiBackspace(f);
		ohiInsert(f,0,combined_phoneme);
	}
	else {
		prev_combined_phoneme.unshift(cc);				
		ohiInsert(f,0,cc);
	}

	esc_ext_layout();
}

function Hangeul_Sin3(f,c) { // 신세벌식
	var i,j,cc,cc2;
	var layout,sublayout;
	var Sin3_layout=Sin3_layout=current_layout.layout;
	var Sin3_sublayout=typeof current_layout.sublayout != 'undefined' ? current_layout.sublayout : null;
	var transform=0; // 홀소리를 아랫글 자리에 둔 변형 신세벌식 배열인지

	if(no_shift(c)) {
		cc=convert_into_ohi_hangeul_phoneme(Sin3_layout[c-33]);
		cc2=convert_into_ohi_hangeul_phoneme(Sin3_layout[c-33-32]);	// 윗글 자리
	}
	else {		
		cc=convert_into_ohi_hangeul_phoneme(Sin3_layout[c-33]);
		cc2=convert_into_ohi_hangeul_phoneme(Sin3_layout[c-33+32]); 
	}

	// 홀소리를 아랫글 자리에 두는 변형 신세벌식 자판을 처리하기 위한 작업
	if(no_shift(c) && ohi_ga.indexOf(cc)>=0
	 && (prev_phoneme.length || ohiQ[0]&&!ohiQ[2]&&!ohiQ[4] || ohiQ[0]&&ohiQ[2]&&!ohiQ[4] || ohiQ[0]&&ohiQ[2]&&ohiQ[4]&&!ohiQ[5])) {
		i=cc;
		cc=cc2;
		cc2=i;
		transform=1;
	}
	
	if(option.sign_ext_enable && Hangeul_SignExtKey1) {
	// 신세벌식 기호 확장 배열에서 문자를 넣을 때
		cc=K3_Sin3_sign_extension_layout[c-33][Hangeul_SignExtKey1-1];
		ohiBackspace(f);
		ohiInsert(f,0,cc);
		esc_ext_layout();
		return -1;
	}
	else if(option.sign_ext_enable && typeof current_layout.sign_extension_layout != 'undefined' && !Hangeul_SignExtKey1 && ohiQ[0]==150-92-35 && (cc==128 || cc==151 || cc==145) && !ohiQ[2] && !ohiQ[4]) {
	// 신세벌식 기호 확장 배열을 쓸 조건을 갖추었을 때
		if(cc==128) Hangeul_SignExtKey1=1;
		else if(cc==151) Hangeul_SignExtKey1=2;
		else if(cc==145) Hangeul_SignExtKey1=3;
		show_keyboard('Sin3-ext');
		return -1;
	}
	else if(Sin3_sublayout && !no_shift(c) && typeof Sin3_sublayout[c-33]!='undefined' && Sin3_sublayout[c-33]
	 && (ohiQ[0] || prev_phoneme.length&&unicode_cheot.indexOf(prev_phoneme[prev_phoneme.length-1])>=0) && (ohiQ[2] && !ohiQ[4] || !no_shift(c) && prev_phoneme.length&&unicode_ga.indexOf(prev_phoneme[0])>=0)) {
	// 윗글쇠를 함께 눌렀을 때 왼쪽 윗글 자리의 겹받침 넣기
		cc=Sin3_sublayout[c-33];
	}
	else if(no_shift(c) && ohiQ[0] && !ohiQ[2] && ohi_cheot.indexOf(cc)>=0 && ohi_ga.indexOf(cc2)>=0) {	// 첫소리가 들어갔을 때에 오른손 자리의 가운뎃소리(ㅗ, ㅜ, ㅢ) 넣기
		cc=cc2;
		ohiR[2]=1;
	}
	else if((c==79 || c==80) && (cc==79 || cc==74) && !ohiQ[2]) {
	// 가운뎃소리가 들어가지 않았을 때에 오른손 윗글 자리의 가운뎃소리(ㅗ, ㅜ) 넣기
		ohiR[2]=1;
	}
	else if((ohiR[2] || backup_ohiR[2]) && cc<31 && prev_phoneme[0]==0x119E && !(prev_phoneme.length>1 && unicode_ga.indexOf(prev_phoneme[1])>=0)) {
	// 아래아가 들어 있을 때에 ㆎ(아래애), ᆢ(쌍아래아) 조합하기
		if(c==100) cc=0x1175; // ㆎ(아래애) 조합하기
		else if(c==122 && prev_phoneme[1]!=0x119E) cc=0x119E; // 쌍아래아(ᆢ) 조합하기
	}
	else if(cc<31 && prev_phoneme.length && unicode_ggeut.indexOf(prev_phoneme[0])>=0) {
		if(prev_phoneme[0]==convert_into_unicode_hangeul_phoneme(cc)) {
		// 첫가끌 조합 상태에서 같은 받침 글쇠가 거듭눌렸을 때
			for(i=0;i<hangeul_combination_table_default.length;++i) {
				if(hangeul_combination_table_default[i][1]==convert_into_unicode_hangeul_phoneme(Sin3_sublayout[c-33])) {
					cc=hangeul_combination_table_default[i][0]%0x10000;
					return cc;
				}
			}			
		}
	}
	else if(ohiR[2] && cc<31 && (ohiQ[2]==74-35 || ohiQ[2]==79-35 || ohiQ[2]==84-35) && !ohiQ[3]) {
		if(ohiQ[2]+35==74 && (cc2==66 || cc2==67 || cc2==86)) {
		// 오른쪽 ㅗ와 겹홀소리를 이룰 수 있는 홑홀소리들
			cc=cc2;
		}
		else if(ohiQ[2]+35==79 && (cc2==70 || cc2==71 || cc2==86 )) {
		// 오른쪽 ㅜ와 겹홀소리를 이룰 수 있는 홑홀소리들
			cc=cc2;
		}
	}
	else if(cc<31 && (ohiQ[0] && !ohiQ[2] && !ohiQ[4]) && (cc2>65 && cc2<87 || c==122)) { // 왼손 쪽 가운뎃소리 넣기
		cc=cc2;
		if(c==122 && (cc2==0x119E || cc2>157)) cc=0x119E; // Z 자리 아래아
		ohiR[2]=0;
	}
	else if(c==47 && ohiQ[0] && !ohiQ[2]) { // 오른손 쪽 ㅋ 자리에서 ㅗ 넣기
		cc=74;
		ohiR[2]=1;
	}
	else if(Sin3_sublayout && !ohiR[2] && ohiQ[0] && ohiQ[2] && ohiQ[4] && !ohiQ[5] && cc==ohiQ[4] && (cc2=convert_into_ohi_hangeul_phoneme(Sin3_sublayout[c-33]))) {
	// 같은 글쇠를 거듭 눌러 겹받침 넣기
		ohiQ[5]=cc2-ohiQ[4];
		ohiInsert(f,0,ohiQ);
		return -1;
	}
	else if(cc2<31 && !no_shift(c) && !ohiQ[0] && !ohiQ[2] && ohiQ[4] && !ohiQ[5]) {
	// 홑받침만 들어갔는데 윗글쇠와 함께 왼쪽 글쇠가 눌렸을 때 겹받침 조합하기
		cc=cc2;
		ohiQ[5]=ohiDoubleJamo(2,ohiQ[4],cc)
		ohiInsert(f,0,ohiQ);
		return -1;
	}
	else if(transform && cc<31 && ohiQ[4] && !ohiQ[5]) {
	// 받침을 위글 자리에 두는 변형 신세벌식 자판의 두번째 들어온 받침 처리
		i=combine_unicode_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[4]),convert_into_unicode_hangeul_phoneme(cc));
		if(!i) cc=cc2;
	}

	return cc;
}

function Hangeul_Gong3_gm(f,c) {
	var cc,cc2;
	var layout=current_layout.layout;
	var sublayout = typeof current_layout.sublayout != 'undeinfed' ? current_layout.sublayout : null;

	cc=convert_into_ohi_hangeul_phoneme(layout[c-33]);
	cc2=convert_into_ohi_hangeul_phoneme(layout[c-33-32]);	// 윗글 자리

	if(!ohiQ[2]) ohiR[2]=0;

	if(ohiQ[2]==cc-35 && !ohiQ[3] && !ohiQ[4] && cc2>65 && cc2<87) {
	// 윗글 자리에 홀소리가 있는 글쇠를 홀소리를 넣는 상태에서 거듭 눌렀을 때 (ㅐ+ㅐ→ㅒ 등)
		ohiQ[3]=(cc2-35)-ohiQ[2];
		ohiInsert(f,0,ohiQ);
		return -1;
	}
		
	if(!ohiR[2] && ohiQ[0] && !ohiQ[2] && (c==0x2F&&cc==74 || c==0x39&&cc==79)) {
	// 첫소리가 들어가고 홀소리는 들어가지 않은 상태에서 오른쪽 ㅗ 또는 오른쪽 ㅜ가 눌렸을 때
		ohiR[2]=c;	
	}
	else if(ohiR[2] && !ohiQ[4]) {
	// ㅗ·ㅜ가 들어간 겹홀소리를 조합하는 상태이고 받침은 들어가지 않았을 때
		if(ohiQ[2]+ohiQ[3]+35==74 && (cc==66 || cc==67 || cc==86)) {	// 오른쪽 ㅗ와 겹홀소리를 이룰 수 있는 홑홀소리들
		}
		else if(ohiQ[2]+ohiQ[3]+35==79 && (cc==70 || cc==71 || cc==86 )) {	// 오른쪽 ㅜ와 겹홀소리를 이룰 수 있는 홑홀소리들
		}
		else if(no_shift(c) && cc<31 && cc2<31) { // 끝소리만 있는 글쇠를 윗글쇠 쓰지 않고 누름
		}
		else if(!no_shift(c) && cc<31) { // 윗글쇠와 함께 눌러 끝소리를 넣음
			cc=cc2;
			if(typeof sublayout[c-33] != 'undefined' && sublayout[c-33]) cc=convert_into_ohi_hangeul_phoneme(sublayout[c-33]);
		}
		else if(cc>30 && cc2<31) { // 끝소리가 윗글 자리에 있는 홀소리 글쇠
			cc=cc2;
		}
	}
	else if((prev_phoneme.length&&unicode_ga.indexOf(prev_phoneme[0])>=0 || ohiQ[0]&&ohiQ[2]&&!ohiQ[4]) && cc>65&&cc<87) {
	// 첫소리와 가운뎃소리가 들어갔고 끝소리가 들어가지 않은 채로 가운뎃소리가 든 글쇠가 눌렸을 때
		if(cc2<31) { // 끝소리 넣기
			if(!prev_phoneme.length) {
				cc=cc2;
			} else if(prev_combined_phoneme[0]==0x11A1 || unicode_ggeut.indexOf(prev_phoneme[1])<0) {	
				cc=cc2;
			}
		}
	}
	else if(!no_shift(c) && (prev_phoneme.length&&unicode_ga.indexOf(prev_phoneme[0])>=0
	 || ohiQ[0]&&ohiQ[2]&&!ohiQ[3]&&!ohiQ[4]) && cc<31) {
	// 첫소리와 가운뎃소리가 들어갔고 끝소리가 들어가지 않은 채로 윗글쇠와 함께 받침이 들어왔을 때
		// 확장 배열의 겹받침으로 넣기
	 	if(sublayout && sublayout[c-33]) cc=convert_into_ohi_hangeul_phoneme(sublayout[c-33]);
	}
	else if((prev_phoneme.length&&unicode_ggeut.indexOf(prev_phoneme[0])>=0 || ohiQ[0]&&ohiQ[2]&&ohiQ[4]&&!ohiQ[5]) && cc2<31) {
	// 첫소리·가운뎃소리·끝소리가 모두 들어간 채로 끝소리가 있는 글쇠가 눌렸을 때
		// 같은 자리 글쇠가 거듭 눌렸을 때
		if((cc==ohiQ[4] || cc2==ohiQ[4] || cc==convert_into_ohi_hangeul_phoneme(prev_phoneme[0]) || cc2==convert_into_ohi_hangeul_phoneme(prev_phoneme[0]))
		 && sublayout && typeof sublayout[c-33] != 'undefined' && sublayout[c-33]
		 && K3_type!='3-2015') {
		// 확장 배열로 처리되는 글쇠 자리일 때 (갈마들이 또는 윗글쇠)
			if(prev_phoneme.length) {
				cc2=sublayout[c-33];
				prev_phoneme.unshift(cc2);
				prev_combined_phoneme[0]=cc2;
				ohiBackspace(f);
				ohiInsert(f,0,cc2);
				return -1;
			}
			else {
				cc2=convert_into_ohi_hangeul_phoneme(sublayout[c-33]);
				ohiQ[5]=cc2-ohiQ[4];
				ohiInsert(f,0,ohiQ);
				return -1;
			}			
		}
		else if(cc>=31 && ohi_hotbatchim.indexOf(ohiQ[4])>=0) {
		// 홑받침이 들어와 있는데 가운뎃소리와 끝소리가 함께 있는 글쇠가 눌렸을 때
			if(prev_phoneme.length>0&&unicode_ggeut.indexOf(prev_phoneme[1])>=0) {
			// 아래아가 들어 있고 겹받침이 조합되었을 때
				prev_phoneme.splice(0);
				prev_combined_phoneme.splice(0);
			}
			else {
				// 겹받침 조합 규칙이 있으면 겹받침을 넣고, 그렇지 않으면 홀소리를 넣음
				i=combine_unicode_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[4]),convert_into_unicode_hangeul_phoneme(cc2));
				if(i) cc=cc2;
			}
		}
	}
	return cc;
}

function hangeul_4typewriter(f,c) { // 네벌식 타자기 자판
	var layout=current_layout.layout;
	var cc=convert_into_ohi_hangeul_phoneme(layout[c-33]);
	
	if(K3_type.substr(-1)!='y')	cc=(cc);
	
	if(ohiQ[2]==68-35 && !ohiQ[3] && (!ohiR[2]&&cc==86 || ohiR[2]==1&&cc==0x3163)) {
	// ㅑ+ㅣ→ㅒ
		ohiQ[3]=1;
		ohiInsert(f,0,ohiQ);
		return -1;
	}
	
	if(ohiQ[2]==72-35 && !ohiQ[3] && !ohiR[2]&&cc==86) {
	// ㅕ+ㅣ→ㅖ
		ohiQ[3]=1;
		ohiInsert(f,0,ohiQ);
		return -1;
	}

	if(compatibility_ga.indexOf(cc)>=0) { // 받침 안 붙는 홀소리
		cc=ohi_ga[compatibility_ga.indexOf(cc)];
		if(K3_type.substr(-1)=='y') cc=convert_into_unicode_hangeul_phoneme(cc);
		if(!ohiQ[2]) ohiR[2]=1;
		else ohiR[3]=1;
	}

	return cc;
}

function push_layout_table(u,d,t) {
	u.push(
		[t[93],t[0],t[31],t[2],t[3],t[4],t[61],t[5],t[9],t[7],t[8],t[62],t[10],''],
		['',t[48],t[54],t[36],t[49],t[51],t[56],t[52],t[40],t[46],t[47],t[90],t[92],t[91]],
		['',t[32],t[50],t[35],t[37],t[38],t[39],t[41],t[42],t[43],t[25],t[1],''],
		['',t[57],t[55],t[34],t[53],t[33],t[45],t[44],t[27],t[29],t[30],'']);
	d.push(
		[t[63],t[16],t[17],t[18],t[19],t[20],t[21],t[22],t[23],t[24],t[15],t[12],t[28],''],
		['',t[80],t[86],t[68],t[81],t[83],t[88],t[84],t[72],t[78],t[79],t[58],t[60],t[59]],
		['',t[64],t[82],t[67],t[69],t[70],t[71],t[73],t[74],t[75],t[26],t[6]],
		['',t[89],t[87],t[66],t[85],t[65],t[77],t[76],t[11],t[13],t[14]]);
}

function push_basic_layout_table(u,d,b) {
	var c,bas=[];
	for(var i=0;i<94;++i) {
		c=String.fromCharCode(convert_into_unicode_hangeul_phoneme(b[i]));
		bas.push(c);
	}
	push_layout_table(u,d,bas);
}

function push_hangeul_extended_layout_table(u,d,ext_layout) {
	var i,c,str,charCode;
	var ext=[];
	
	for(i=0;i<94;++i) {
		c = ext_layout[i][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10 ? 1:0]
		ext.push(String.fromCharCode(c));
	}
	push_layout_table(u,d,ext);
}

function push_sign_extension_layout_table(u,d,e) {
	var i;
	var ext=[];
	var state=Hangeul_SignExtKey1+Hangeul_SignExtKey2-1;
	if(state>=0 && state<3) for(i=0;i<94;++i) ext.push(String.fromCharCode(e[i][state]));
	push_layout_table(u,d,ext);
}

function push_yes_hangeul_sign_extended_layout_table(u,d,e) {	// 옛한글 자판의 기호 학장 배열 넣기
	var i;
	var ext=[];
	if(Hangeul_SignExtKey1) for(i=0;i<94;++i) ext.push(String.fromCharCode(e[i][0][Hangeul_SignExtKey1-1]));
	else if(Hangeul_SignExtKey2) for(i=0;i<94;++i) ext.push(String.fromCharCode(e[i][1][Hangeul_SignExtKey2-1]));
	push_layout_table(u,d,ext);
}

function insert_sublayout_table(ue, de, uh, dh, sublayout) {
	var u=[], d=[], sub=[], i, j, ds, us;

	for(i=0;i<94;++i) {
		s=String.fromCharCode(convert_into_unicode_hangeul_phoneme(sublayout[i]));
		sub.push(s);
	}

	push_layout_table(u,d,sub);

	for(i=0;i<de.length;++i) {
		for(j=0;j<de[i].length;++j) {
			if(!u[i][j].charCodeAt(0) && !d[i][j].charCodeAt(0)) continue;
			ds = de[i][j];
			us = ue[i][j];
			if(u[i][j].charCodeAt(0)) {
				if(d[i][j].charCodeAt(0)) {
					if(d[i][j]!=u[i][j]) us=u[i][j];
					ds=d[i][j];
				}
				else ds=u[i][j];
			}
			else if(d[i][j].charCodeAt(0)) ds=d[i][j];

			if(!(us==ue[i][j] || us==uh[i][j] || us==dh[i][j])) ue[i][j] = us;
			if(!(ds==ue[i][j] || ds==uh[i][j] || ds==dh[i][j])) de[i][j] = ds;			
		}
	}
}

function show_sublayout(v) {
	if(v===undefined || v==1) option.sublayout_show=1;
	else option.sublayout_show=0;

	show_keyboard();
}

function show_NCR(v) { // 문자를 유니코드 부호값과 맞대어 나타내기 (Numeric Character Reference)
	if(typeof v != 'undefined') {
		if(v) option.NCR=1;
		else option.NCR=0;
	}
	
	var t = document.getElementById('NCR');
	var opts = document.getElementById('NCR_options');
	if(opts) {
		opt = document.getElementById('NCR_option_convert_only_CGG_encoding');
		if(!opt) opt = appendChild(opts,'div','option','NCR_option_convert_only_CGG_encoding','<div class="option"><input name="convert_only_CGG_encoding" class="checkbox" onclick="NCR_option.convert_only_CGG_encoding=this.checked;show_NCR();inputText_focus()" type="checkbox"' + (NCR_option.convert_only_CGG_encoding ? ' checked="checked"' : '') + '><label>첫가끝 조합형 한글만 바꾸기</label></div>');
	}

	if(t && option.NCR) {
		t.style.display='block';
		opts.style.display='block';
	}
	else {
		t.style.display='none';
		opts.style.display='none';
		option.NCR=0;
		return;
	}

	var f = document.getElementById('inputText');
	var ref_char, char_code, ref_text='';
	for(i=0;i<f.value.length;++i) {
		char_code = f.value.charCodeAt(i);
		ref_char = '&amp;#x'+ char_code.toString(16).toUpperCase() + ';';	
		if(NCR_option.convert_only_CGG_encoding && unicode_hangeul_CGG_phoneme.indexOf(char_code)<0) {
		// 첫가끝 조합형 한글은 바꾸지 않기
			ref_char = f.value.charAt(i);
		}
		ref_text += ref_char;
	}
	if(ref_text=='') ref_text='&nbsp;';
	t.innerHTML = ref_text;
}

function show_options() {
	var opts = document.getElementById('options'), opt;

	if(opts) {
		opts.style.display = 'block';

		opt = document.getElementById('option_NCR');
		if(!opt) opt = appendChild(opts,'div','option','option_NCR','<div class="option"><input name="NCR" class="checkbox" onclick="show_NCR(this.checked);inputText_focus()" type="checkbox"' + (option.NCR ? ' checked="checked"' : '') + '><label>HTML 문자 참조</label></div>');

		opt = document.getElementById('option_sign_ext_enable');
		if(!opt) opt = appendChild(opts,'div','option','option_sign_ext_enable','<div class="option"><input name="sign_extension" class="checkbox" onclick="ohiChange_sign_ext_enable(this.checked);inputText_focus()" type="checkbox"' + (option.sign_ext_enable ? ' checked="checked"' : '') + '><label>기호 확장</label></div>');
		if(KE=='K3' && typeof current_layout.sign_extension_layout != 'undefined') opt.style.display = 'block';
		else opt.style.display = 'none';
			
		opt = document.getElementById('option_sublayout_show');
		if(!opt) opt = appendChild(opts,'div','option','option_sublayout_show','<div class="option"><input name="sublayout_show" class="checkbox" onclick="show_sublayout(this.checked);inputText_focus()" type="checkbox"' + (option.sublayout_show ? ' checked="checked"' : '') + '><label>겹받침 확장 배열 보기</label></div>');
		if(option.layout_table_show && typeof current_layout.sublayout != 'undefined' && current_layout.type_name.substr(0,3)!='3m-') opt.style.display = 'block';
		else opt.style.display = 'none';

		opt = document.getElementById('option_normal_typing');
		if(!opt) opt = appendChild(opts,'div','option','option_normal_typing','<div class="option"><input name="normal_typing" class="checkbox" onclick="option.normal_typing=this.checked;inputText_focus()" type="checkbox"' + (option.normal_typing ? ' checked="checked"' : '') + '><label>이어치기</label></div>');
		if(KE=='K3' && K3_type.substr(0,3)=='3m-') opt.style.display = 'block';
		else opt.style.display = 'none';
	}
}

function show_keyboard(type) {
	var opts, opt;
	shift_click=0;
	KE = ohi_KE_Status.substr(0,2);

	show_options();

	var rows = document.getElementById('keyboardLayout');
	if(!rows || !option.layout_table_show) return false;
	rows.style.position = "relative";
	rows.innerHTML = '';

	if(type===undefined || type==1) {
		if(KE=='K2') type = K2_type;
		else if(KE=='K3') type = K3_type;
		else type = En_type;
	}
	else if(!type) {
		option.layout_table_show = 0;
		rows.innerHTML = '<div style="text-align:right"><span class="menu" onclick="option.layout_table_show=1;show_keyboard(1);inputText_focus()" onmouseover="this.className=\'over\'" onmouseout="this.className=\'menu\'">배열표 보이기</span></div>';
		opt = document.getElementById('option_sublayout_show');
		if(opt) opt.style.display = 'none';
		return false;
	}

	var ue_qwerty=[
		['~','!','@','#','$','%','^','&amp;','*','(',')','_','+','Back'],
		['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|'],
		['Caps','A','S','D','F','G','H','J','K','L',':','"','Enter'],
		['Shift','Z','X','C','V','B','N','M','&lt;','&gt;','?','Shift']
	];
	var de_qwerty=[
		['`','1','2','3','4','5','6','7','8','9','0','-','=','Space'],
		['','　','　','　','　','　','　','　','　','　','　','[',']','\\'],
		['Lock','　','　','　','　','　','　','　','　','　',';','\''],
		['','　','　','　','　','　','　','　',',','.','/']
	];

	var ue_dvorak=[
		['~','!','@','#','$','%','^','&amp;','*','(',')','{','}','Back'],
		['Tab','"','&lt;','&gt;','P','Y','F','G','C','R','L','?','+','|'],
		['Caps','A','O','E','U','I','D','H','T','N','S','_','Enter'],
		['Shift',': ','Q','J','K','X','B','M','W','V','Z','Shift']];
	var de_dvorak=[
		['` ','1','2','3','4','5','6','7','8','9','0','[',']','Space'],
		['','\' ',', ','. ','　','　','　','　','　','　','　','/','=','\\'],
		['Lock','　','　','　','　','　','　','　','　','　','　','-'],
		['','; ','　','　','　','　','　','　','　','　','　']];
		
	var ue_colemak=[
		ue_qwerty[0],
		['Tab','Q','W','F','P','G','J','L','U','Y',':','{','}','|'],
		['Caps','A','R','S','T','D','H','N','E','I','O','"','Enter'],
		['Shift','Z','X','C','V','B','K','M','&lt;','&gt;','?','Shift']
	];
	var de_colemak=[
		de_qwerty[0],
		['','　','　','　','　','　','　','　','　','　','; ','[ ',']','\\'],
		['Lock','　','　','　','　','　','　','　','　','　','　','\''],
		de_qwerty[3]
	];

	var u2_KSX5002=[
		[],
		['','ㅃ','ㅉ','ㄸ','ㄲ','ㅆ','　','　','　','ㅒ','ㅖ']
	];
	var d2_KSX5002=[
		[],
		['','ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'],
		['','ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'],
		['','ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']
	];

	var u2_KPS9256=[
		[],
		['','ㅃ','','ㄸ','','','','','','ㅒ','ㅖ'],
		['','ㅉ','ㄲ','','','ㅆ','','','','']
	];
	var d2_KPS9256=[
		[],
		['','ㅂ','ㅁ','ㄷ','ㄹ','ㅎ','ㅕ','ㅜ','ㅓ','ㅐ','ㅔ'],
		['','ㅈ','ㄱ','ㅇ','ㄴ','ㅅ','ㅗ','ㅏ','ㅣ','ㅡ'],
		['','ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅛ','ㅑ']
	];

	var layout=[], uh=[], dh=[];

	if(KE=='K2' && current_layout.layout===undefined) {
		uh = type.substr(-7)=='KSX5002' ? u2_KSX5002 : type=='KPS9256' ? u2_KPS9256 : uh;
		dh = type.substr(-7)=='KSX5002' ? d2_KSX5002 : type=='KPS9256' ? d2_KPS9256 : dh;
	}
	else if(KE!='En') {
		if(Hangeul_SignExtKey1 || Hangeul_SignExtKey2) {
			layout = current_layout.sign_extension_layout;
			if(layout.length) {
				if(K3_type.substr(-1)=='y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,7)=='3-2015P') push_yes_hangeul_sign_extended_layout_table(uh, dh, layout);
				else push_sign_extension_layout_table(uh, dh, layout);
			}
		}
		else if(ohiHangeul3_HanExtKey) {
			layout = K3_2012y_hangeul_extension_layout;
			push_hangeul_extended_layout_table(uh, dh, layout);
		}
		else if(typeof current_layout != 'undefined' && typeof current_layout.layout != 'undefined') {
			push_basic_layout_table(uh, dh, current_layout.layout);
		}
	}

	var ue = En_type=='QWERTY' ? ue_qwerty : En_type=='Dvorak' ? ue_dvorak : En_type=='Colemak' ? ue_colemak : 0;
	var de = En_type=='QWERTY' ? de_qwerty : En_type=='Dvorak' ? de_dvorak : En_type=='Colemak' ? de_colemak : 0;

	var sublayout_check = document.getElementById('sublayout');

	if(typeof current_layout.sublayout != 'undefined' && (option.sublayout_show || current_layout.type_name.substr(0,3)=='3m-') && !(Hangeul_SignExtKey1+Hangeul_SignExtKey2)) {
		insert_sublayout_table(ue, de, uh, dh, current_layout.sublayout);
	}

	ue.push(['영문','2벌식','3벌식','Space','2벌식','3벌식','기준']);
	de.push(['바꿈','바꿈','바꿈','','한/영','한/영','자판']);

	rows.innerHTML += '<div id="keyboardLayoutInfo" style=""></div><div style="text-align:right"><span class="menu" onclick="show_keyboard(0);inputText_focus()" onmouseover="this.className=\'over\'" onmouseout="this.className=\'menu\'">배열표 숨기기</span></div>';
	rows.innerHTML += '<div id="keyboardLayoutTable">';
	rows.innerHTML += '<table style="border-collapse:collapse;">';
	rows.innerHTML += '<tr><td><table><tr id="row0"></tr></table></td></tr>';
	rows.innerHTML += '<tr><td><table><tr id="row1"></tr></table></td></tr>';
	rows.innerHTML += '<tr><td><table><tr id="row2"></tr></table></td></tr>';
	rows.innerHTML += '<tr><td><table><tr id="row3"></tr></table></td></tr>';
	rows.innerHTML += '<tr><td><table style="margin:0 0px 0 0px"><tr id="row4"></tr></table></td></tr>';
	rows.innerHTML += '</table>';
	rows.innerHTML += '</div>';

	for(i=0, k=-1; ue[i]; i++) {
		var row = document.getElementById('row'+i);
		for(j=0; ue[i][j]; j++) {
			var tdclass = 'e1';
			var tdid = 'key'+(++k);
			var charCode;
			if(dh[i] && dh[i][j]) {
				charCode = convert_into_unicode_hangeul_phoneme(dh[i][j].charCodeAt(0));
				if(charCode>0x3130) tdclass = (type.substr(0,1)=='2' || type.substr(-7)=='KSX5002' || type=='KPS9256' || j>5 && !(i<2&&j>10 || i==3&&j==10&&type.substr(0,4)!='Sin3')) ? 'h1':'h3';
				if(charCode>0x314E) tdclass = 'h2';
				if(i==3 && j==10 && type=='3-sun1990') tdclass = 'h3';

				if(unicode_modern_cheot.indexOf(charCode)>=0) {
						tdclass = 'h1';
						dh[i][j] = String.fromCharCode(compatibility_cheot[unicode_modern_cheot.indexOf(charCode)]);
				}
				else if(K3_type.substr(0,2)=='4-' && charCode>=0x314F && charCode<0x3164) {
						tdclass = 'h2 gin-hol'; 
				}
				else if(unicode_modern_ga.indexOf(charCode)>=0) {
					tdclass = 'h2';
					dh[i][j] = String.fromCharCode(compatibility_ga[unicode_modern_ga.indexOf(charCode)]);
				}
				else if(unicode_modern_ggeut.indexOf(charCode)>=0) {
						tdclass = 'h3';
						dh[i][j] = String.fromCharCode(compatibility_ggeut[unicode_modern_ggeut.indexOf(charCode)]);
				}
				else dh[i][j] = (unicode_ga.indexOf(charCode)>=0 ? String.fromCharCode(0x115F) : '') + (unicode_ggeut.indexOf(charCode)>=0 ? String.fromCharCode(0x115F)+String.fromCharCode(0x1160) : '') + dh[i][j];
			}

			if(KE=='En' && ue[i][j].length==1) {
				charCode = ue[i][j].charCodeAt(0);
				if(charCode>64 && charCode<91 || charCode>96 && charCode<123) tdclass = 'e2';
			}
			var col = appendChild(row,'td',tdclass,tdid,'','30px','1px 3px 1px 3px');

			col.onclick = function(e){
				e=e||window.event;
				clickTableKey(e, this.id.substr(3), dkey[this.id.substr(3)],ukey[this.id.substr(3)]);
			};
			col.tabindex = 0;
			if(ue[i][j]=='Back' || ue[i][j]=='Tab') col.style.width = '54px';
			if(ue[i][j]=='Caps' || ue[i][j]=='Enter') col.style.width = '64px';
			if(ue[i][j]=='Shift') col.style.width = '84px';
			if(ue[i][j]=='Back' || ue[i][j]=='Tab' || ue[i][j]=='Caps' || ue[i][j]=='Enter' || ue[i][j]=='Shift')
				col.style.padding = '1px', col.style.textAlign = 'center';
			
			if(i==4) {
				if(ue[i][j]=='Space') col.style.width = '300px';
				else col.style.width = '35px', col.style.fontSize = '12px', col.className = 'e3';
			}
			appendChild(col,'span','e1','ue'+k,ue[i][j]);
			if(uh[i]) {
				if(uh[i][j]) {
					charCode = convert_into_unicode_hangeul_phoneme(uh[i][j].charCodeAt(0));
					if(unicode_modern_cheot.indexOf(charCode)>=0) 
						uh[i][j] = String.fromCharCode(compatibility_cheot[unicode_modern_cheot.indexOf(charCode)]);
					else if(unicode_modern_ga.indexOf(charCode)>=0)
						uh[i][j] = String.fromCharCode(compatibility_ga[unicode_modern_ga.indexOf(charCode)]);
					else if(unicode_modern_ggeut.indexOf(charCode)>=0)
						uh[i][j] = String.fromCharCode(compatibility_ggeut[unicode_modern_ggeut.indexOf(charCode)]);
					else uh[i][j] = (unicode_ga.indexOf(charCode)>=0 ? String.fromCharCode(0x115F) : '') + (unicode_ggeut.indexOf(charCode)>=0 ? String.fromCharCode(0x115F)+String.fromCharCode(0x1160) : '') + uh[i][j];
					
					if(uh[i][j]==dh[i][j]) uh[i][j]=' ';
					if( (type.substr(0,6)=='3-2014' || type.substr(0,6)=='3-2015') && unicode_modern_ggeut.indexOf(charCode)>=0 && unicode_modern_hotbatchim.indexOf(charCode)<0) {
						uh[i][j] = '<span style="color:gray;">'+uh[i][j]+'</span>';
					}
				}

				if(uh[i][j]==ue[i][j] || uh[i][j]=='&'&&ue[i][j]=='&amp;' || uh[i][j]=='<'&&ue[i][j]=='&lt;' || uh[i][j]=='>'&&ue[i][j]=='&gt;') uh[i][j]=' ';
				appendChild(col,'span','','uh'+k,uh[i][j]);
			}
			if(de[i][j]) {
				appendChild(col,'br');
				appendChild(col,'span','e1','de'+k,de[i][j]);
				if(dh[i] && (!dh[i][j] || dh[i][j]==de[i][j])) dh[i][j]=' ';
				if(dh[i]) appendChild(col,'span','','dh'+k,dh[i][j]);
			}
		}
	}

	var sign_ext_tag = '<span style="margin-left:-1px;background:black;color:#fff;letter-spacing:-1px;font-size:8px;">기호</span>';
	var sign_ext_tag1 = '<span style="margin:2px -2px 0 0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.8em;">기호①</span>';
	var sign_ext_tag2 = '<span style="margin:2px -2px 0 0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.8em">기호②</span>';
	var han_ext_tag1 = '<span style="margin:2px -2px 0 0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.8em;">한글①</span>';
	var han_ext_tag2 = '<span style="margin:2px -2px 0 0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.8em;">한글②</span>';
	var Moachigi_modifier_tag = '<span style="background:black;color:#fff;font-size:1em;">⇦</span>';

	if(option.sign_ext_enable && KE=='K3' && (K3_type=='3-2011' || K3_type=='3-2012')) {
		document.getElementById('de8').innerHTML = sign_ext_tag;
		document.getElementById('de45').innerHTML = sign_ext_tag;
	}
	else if(KE=='K3' && (K3_type=='3-2011y' || K3_type=='3-2012y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,7)=='3-2015P')) {
		if(option.sign_ext_enable) {
			document.getElementById('uh9').innerHTML = sign_ext_tag2;
			document.getElementById('uh51').innerHTML = sign_ext_tag1;
		}
	}

	if(KE=='K3' && K3_type.substr(-1)=='y' && (K3_type=='3-2011y' || K3_type=='3-2012y' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,7)=='3-2015P')) {
			document.getElementById('dh7').innerHTML = han_ext_tag1;
			document.getElementById('dh8').innerHTML = han_ext_tag2;
			document.getElementById('uh7').innerHTML = '<span style="color:#666;font-size:0.8em">(ㅣ)</span>';
			document.getElementById('uh8').innerHTML = '<span style="color:#666;font-size:0.8em">(ㅡ)</span>';
	}

	if(KE=='K3' && K3_type.substr(0,4)=='Sin3') {
		document.getElementById('uh51').innerHTML = '<font size="1">(ㅗ)</font>';
		if(option.sign_ext_enable && typeof current_layout.sign_extension_layout != 'undefined') {
			document.getElementById('de35').innerHTML = sign_ext_tag;
			for(i=0;i<3;++i)
				document.getElementById('de'+(36+i)).innerHTML = '<span style="padding:0 2px;background:black;color:#fff;">'+String.fromCharCode(0x2460+i)+'</span>';
		}
	}
	
	if(KE=='K3' && En_type!='Dvorak' && (K3_type.substr(0,5)=='Sin3-'&&K3_type!='Sin3-2015'&&K3_type!='Sin3-M' || K3_type.substr(0,6)=='3-2015' || K3_type.substr(0,6)=='3-2014' || K3_type.substr(0,6)=='3-2012' || K3_type=='3-90') && !(Hangeul_SignExtKey1+Hangeul_SignExtKey2) && !ohiHangeul3_HanExtKey)
		document.getElementById('dh25').innerHTML = '<font size="1">(ㆍ)</font>';

	if(KE=='K3' && K3_type=='3m-Moa2015') {
		document.getElementById('uh38').innerHTML = Moachigi_modifier_tag;
		document.getElementById('uh39').innerHTML = Moachigi_modifier_tag;
		document.getElementById('uh45').innerHTML = Moachigi_modifier_tag;
	}
	
	if(KE=='K3' && K3_type=='3m-Moa2014') {
		document.getElementById('uh38').innerHTML += Moachigi_modifier_tag;
	}

	if(capslock_click) {
		var capslock = document.getElementById('key28');
		capslock.style.backgroundColor = 'orange';
	}

	viewStateBar();
}

function ohiStart() {
	if(current_layout.KE === undefined || !current_layout.KE) {
		ohiChange(initial_layout_type, initial_layout);
	}

	var KE = current_layout.KE;
	ohi_KE_Status = KE + (KBD_type=='QWERTY' ? '' : ':'+KBD_type);

	ohiStatus.innerHTML = ohi_KE_Status
	 + ' | <a href="javascript:ohiChange_KBD_type();" style="color:Hotpink">En</a>:<a href="javascript:ohiChange(\'En\',\'\')" style="color:Aquamarine">' + En_type + '</a>'
	 + ' / <a href="javascript:ohiChange_KE(\'K2\');" style="color:Gold">K2</a>:<a href="javascript:ohiChange(\'K2\',\'\')" style="color:Aquamarine">' + K2_type + '</a>'
	 + ' / <a href="javascript:ohiChange_KE(\'K3\');" style="color:Gold">K3</a>:<a href="javascript:ohiChange(\'K3\',\'\')" style="color:Aquamarine">' + K3_type + '</a>&nbsp;';

	if(document.body) {
		if(document.all) {
			ohiStatus.style.position = 'fixed';
			ohiStatus.style.right = -(document.body.scrollLeft||document.documentElement.scrollLeft)+'px';
			ohiStatus.style.bottom = -(document.body.scrollTop||document.documentElement.scrollTop)+'px';
		}

		if(document.body!=ohiStatus.parentNode) {
			if(!ohiStatus.style.position) {
				ohiStatus.style.position = 'fixed';
				ohiStatus.style.right = '0px';
				ohiStatus.style.bottom = '0px';
			}
			ohiStatus.target = '_blank';
			//ohiStatus.href = 'http://ohi.pat.im';
			ohiStatus.style.fontFamily = 'GulimChe,monospace';
			ohiStatus.style.fontWeight = 'normal';
			ohiStatus.style.color = 'white';
			ohiStatus.style.backgroundColor = 'royalblue';
			ohiStatus.style.fontSize = '10pt';
			ohiStatus.style.lineHeight = '10pt';
			ohiStatus.style.zIndex = '2550000';

			document.body.appendChild(ohiStatus);
			if(document.addEventListener) {
				document.addEventListener('keypress', ohiKeypress, true);
				document.addEventListener('keydown', ohiKeydown, true);
				document.addEventListener('keyup', ohiKeyup, true);
			} else {
				document.onkeydown = ohiKeydown;
				document.onkeypress = ohiKeypress;
				document.onkeyup = ohiKeyup;
			}
			/*for(var i=0; i<window.frames.length; i++) {
				var ohi = document.createElement('script');
				ohi.type= 'text/javascript';
				ohi.src = 'http://ohi.pat.im/ohi.js';
				if(typeof(window.frames[i].document)!='unknown') window.frames[i].document.body.appendChild(ohi);
			}*/
			
			show_NCR();
		}
	}
	else ohiTimeout = setTimeout("ohiStart()",100);
}

function viewStateBar() {
	var KBD=ohi_KE_Status.substr(2,7);
	var KE=ohi_KE_Status.substr(0,2);

	var name='', keyboardLayoutInfo = document.getElementById('keyboardLayoutInfo');
	if(keyboardLayoutInfo) {
		if(KE=='En') {
			name = '<strong>[영문' + KBD + ']</strong> ';
			if(En_type=='QWERTY') name += '쿼티 (QWERTY)';
			else if(En_type=='Dvorak') name += '드보락 (Dvorak)';
			else if(En_type=='Colemak') name += '콜맥 (Colemak)';
		}
		else {
			if(KE=='K2') name = '<strong>[한글 2벌식' + KBD +  ']</strong> '
			if(KE=='K3') name = '<strong>[한글 3벌식' + KBD + ']</strong> ';
			if(typeof current_layout.full_name != 'undefined') name += current_layout.full_name;
			if(K3_type=='3-2011' || K3_type=='3-91') name+=' (문장 입력용)';
			
			if(typeof current_layout.link != 'undefined' && current_layout.link) name += ' <a href="'+current_layout.link+'" target="_blank">ⓘ</a>';
		}

		keyboardLayoutInfo.innerHTML = name;
	}
}

function ohiChange(KE, layout) {
	var i,j;
	var f=document.getElementById('inputText');
	inputText_focus();
	
	if(prev_phoneme.length) {
		if(f && !(KE=='K3' && ohi_KE_Status.substr(0,2)=='K3' && layout.substr(-1)=='y' && K3_type.substr(-1)=='y')) convert_into_modern_hangeul_syllable(f);
	}

	esc_ext_layout();
	
	if(KE.toLowerCase()=='en') KE='En';
	else if(KE.toLowerCase()=='k2') KE='K2';
	else if(KE.toLowerCase()=='k3') KE='K3';

	if((layout===undefined || layout=='')) {
		if(KE==ohi_KE_Status.substr(0,2)) {
			if(KE=='En') En_type = En_type.toUpperCase()=='QWERTY' ? 'Dvorak' : En_type.toLowerCase=='dvorak' ? 'Colemak' : 'qwerty';
			else if(KE=='K2') K2_type = K2_type.substr(-7).toUpperCase()=='KSX5002' ? 'KPS9256' : 'KSX5002';
			else if(KE=='K3') K3_type = K3_type.toUpperCase()=='3-2015P' ? 'Sin3-2012' : K3_type.toLowerCase()=='Sin3-2012' ? '3m-Moa2015' : '3-2015P';
		}
		layout = KE=='En' ? En_type : KE=='K2' ? K2_type : K3_type;
	}

	ohi_KE_Status = ohi_KE_Status.replace(/(En|K2|K3)/,KE.substr(0,2));

	var a=[basic_layouts];
	if(typeof additional_layouts != 'undefined') a.push(additional_layouts);
	if(typeof test_layouts != 'undefined') a.push(test_layouts);
	
	for(i=0;i<a.length;++i) {
		for(j=0;j<a[i].length;++j) {
			if(KE==a[i][j].KE && typeof a[i][j].type_name != 'undefined' && layout.toLowerCase()==a[i][j].type_name.toLowerCase()) {
				current_layout=a[i][j];
				if(KE=='En') En_type=a[i][j].type_name;
				else if(KE=='K2') K2_type=a[i][j].type_name;
				else if(KE=='K3') K3_type=a[i][j].type_name;
				break;
			}
		}
		if(j!=a[i].length) break;
	}

	ohiStart();
	show_keyboard(KE=='En' ? En_type : KE=='K2' ? K2_type : K3_type);
}

function ohiChange_KE(Ko) {	// 한·영 상태 바꾸기
	var KE = ohi_KE_Status.substr(0,2);
	var KBD = ohi_KE_Status.substr(3);
	if(KE=='En') {
		if(Ko=='K2') ohiChange('K2',K2_type);
		if(Ko=='K3') ohiChange('K3',K3_type);
	}
	else ohiChange('En',En_type);
}

function ohiChange_KBD_type(type) {	// 기준 자판 바꾸기
	if(type == undefined || !type) {
		KBD_type = KBD_type=='QWERTY' ? 'QWERTZ' : KBD_type=='QWERTZ' ? 'AZERTY' : 'QWERTY';
		ohiStart();
	}
	else {
		KBD_type = type;
		ohiStart();
	}
	show_keyboard(option.layout_table_show);
}

function ohiStatusBar(op) {	// 보람줄(상태 표시줄) 보이기/감추기
	if(op=='off' || op=='0' || !op) {
		ohiStatus.style.display='none';
	}
	else {
		ohiStatus.style.display='block';		
	}
	//ohiStart();
}

function ohiChange_sign_ext_enable(op) {
	if(op=='off' || op=='0') option.sign_ext_enable = 0;
	else option.sign_ext_enable = 1;
	show_keyboard(option.layout_table_show);
}

function ohiKeyswap(c,e) {
	var KBD=ohi_KE_Status.substr(3);
	var i=0;
	var swaped = [];
	if(KBD=='QWERTZ') swaped=[89,90,90,89,121,122,122,121];
	if(KBD=='AZERTY') swaped=[65,81,81,65,87,90,90,87,97,113,113,97,119,122,122,119,77,58,109,59,44,109,58,46,59,44];

	while(swaped[i] && swaped[i]!=c) i+=2;
	if(i!=swaped.length) c=swaped[i+1];
	if(c>64 && c<91 && !e.shiftKey) c+=32;
	if(c>96 && c<123 && e.shiftKey) c-=32;

	return c;
}

function ohiKeypress(e) {
	var KE=ohi_KE_Status.substr(0,2);
	if(keypress_skip) return false;
	var key_pressed=0; // 특수 기능 글쇠가 아닌 글쇠(일반 글쇠)가 눌렸는지
	var e=e||window.event, f=e.target||e.srcElement, n=f.nodeName||f.tagName, c=e.which||e.which==0?e.which:e.keyCode;
	var i=0,j;
	
	c=ohiKeyswap(c,e);

	if(f.type=='text' && n=='INPUT' || n=='TEXTAREA') {
		if(browser=="MSIE" && browser_ver<9 && (c==10 || c==13 || c==32) && !e.ctrlKey && !e.shiftKey && !e.altKey) ohiInsert(f,0,c);
		else if((c==10 || c==13 || c==32) && (e.ctrlKey&&!e.shiftKey || !e.ctrlKey&&e.shiftKey)) { // Toggle
			if(e.preventDefault) e.preventDefault();
			if(browser=="Firefox") {
				ohiInsert(f,0,ohiQ);
				ohiBackspace(f);
			}

			if((c==10 || c==13) && e.ctrlKey) ohiChange_KBD_type(); // 기준 자판 바꾸기
			else if(c==32 && e.ctrlKey) ohiChange_KE('K2');	// 2벌식 자판 한·영 바꾸기
			else if(c==32 && e.shiftKey) ohiChange_KE('K3');	// 3벌식 배열 한·영 바꾸기

			key_pressed=0;
		}
		else if(c==49 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 영문 배열 종류 바꾸기 (QWERTY/Dvorak/Colemak)
			ohiChange('En','');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(c==50 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 두벌식 배열 종류 바꾸기 (한국/조선 표준 자판)
			ohiChange('K2','');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(c==51 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 세벌식 배열 종류 바꾸기 (3-2011/3-91/3-90)
			ohiChange('K3','');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(ohi_KE_Status.substr(0,2)=='En' && c>32 && c<127 && e.keyCode<127 && !e.altKey && !e.ctrlKey) {
			ohiRoman(f,e,c);
			if(e.preventDefault) e.preventDefault();
			key_pressed=1;
		}
		else if(ohi_KE_Status.substr(0,2)!='En' && c>32 && c<127 && e.keyCode<127 && !e.altKey && !e.ctrlKey) {
			if(e.preventDefault) e.preventDefault();
			key_pressed=1;
			
			if(K3_type.substr(0,3)=='3m-' && !option.normal_typing) {	
				if(!pressing_keys.length) {
					tableKey_pressed(0);
				}
				
				if(pressed_keys.length && pressed_keys[pressed_keys.length-1]==c) {
				// 한 글쇠가 오래 눌려서 같은 문자가 들어왔을 때
					pressing_key=0;
					ohiHangeul3(f,e,c);
				}
				else {
					++pressing_keys;
					pressed_keys.push(c);
				}
			}
			else {
				if(document.selection && document.selection.createRange().text.length!=1) ohiQ=[0,0,0,0,0,0,0];
				if(f.selectionEnd+1 && f.selectionEnd-f.selectionStart!=1) ohiQ=[0,0,0,0,0,0,0];

				if(ohi_KE_Status.substr(0,2)=='K2') ohiHangeul2(f,e,c);
				else if(ohi_KE_Status.substr(0,2)=='K3') ohiHangeul3(f,e,c);
			}
		}
	}

	if(key_pressed) {		
		if(option.layout_table_show) tableKey_pressed(c);
		if(f.id=='inputText') show_NCR();
	}

	return false;
}

function ohiKeydown(e) {
	keypress_skip=0; // 참이면 ohiKeypress()를 건너뜀
	keyup_skip=0; // 참이면 ohiKeyup()를 건너뜀
	var i=0;
	var e=e||window.event, f=e.target||e.srcElement, n=f.nodeName||f.tagName, c=e.which||e.which==0?e.which:e.keyCode;
	var KE = ohi_KE_Status.substr(0,2);
	var KBD=ohi_KE_Status.substr(3);

	if(f.type=='text' && n=='INPUT' || n=='TEXTAREA') {
		if(e.keyCode>=96 && e.keyCode<=111) { // 오른쪽 숫자판(키패드) 글쇠일 때
			keypress_skip=1;
			esc_ext_layout();
			var cc=Array(/*0*/48,/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
			/***/42,/*+*/43,0,/*-*/45,/*.*/46,/*/*/47)[e.keyCode-96];
  		ohiInsert(f,0,cc);
  		if(e.preventDefault) e.preventDefault();
	 		return false;
		}

		if(e.keyCode==8) {	// Backspace
			if(!ohiHangeul_backspace(f,e)) return false;
			if(e.preventDefault) e.preventDefault();
			ohiBackspace(f);
			keyup_skip=1;
		}

		if(e.keyCode==13) { // Enter (한글 조합 상태)
			ohiR[2]=0;
			if(ohiQ[0] || ohiQ[2] || ohiQ[4]) { // 요즘한글 조합 상태
				ohiInsert(f,0,0);
			}
			else if((K3_type.substr(-1)=='y') && browser == "Firefox") { // 옛한글 자판
				convert_into_modern_hangeul_syllable(f);
				ohiInsert(f,0,0);
			}
			keyup_skip=1;
		}

		if(e.keyCode==32) { // Space
			ohiR[2]=0;
			if((K3_type.substr(-1)=='y') && browser == "Firefox") {
				convert_into_modern_hangeul_syllable(f);
				prev_phoneme.splice(0);
				prev_combined_phoneme.splice(0);
				if(Hangeul_SignExtKey1+Hangeul_SignExtKey2==0) ohiInsert(f,0,0);
				esc_ext_layout();
				keyup_skip=1;
				return false;
			}
			
			if(browser=="MSIE") {
				convert_into_modern_hangeul_syllable(f);
				if(browser_ver<9) ohiInsert(f,0,32);
				else {
					if(e.preventDefault) e.preventDefault();
					ohiInsert(f,0,32);
				}
				esc_ext_layout();
				keyup_skip=1;
				return false;
			}

			if(ohiQ[0] || ohiQ[2] || ohiQ[4]) { // 요즘한글 조합 상태
				esc_ext_layout();
				ohiInsert(f,0,0);
				keyup_skip=1;
				return false;
			}
		}
/*
		if(e.keyCode>=37 && e.keyCode<=40) { // 오른쪽 화살표 글쇠
		}
		else if(e.keyCode==45 || e.keyCode==46) { // insert(45), del(46)
		}
		else if(e.keyCode==91 || e.keyCode==93) { // menu
		}
		else if(e.keyCode>=112 && e.keyCode<=123) { // F1~F12
		}
		else if(e.keyCode==16) { // shift
		}
*/
		if(e.keyCode<47 && e.keyCode!=16) {
			if(K3_type.substr(-1)=='y') {	// 옛한글 자판
				convert_into_modern_hangeul_syllable(f);
			}
			esc_ext_layout();
			if(browser != "Firefox") ohiInsert(f,0,0);
			prev_phoneme.splice(0);
			prev_combined_phoneme.splice(0);
		}	
	}
	if(f.id=='inputText') show_NCR();
}

function ohiKeyup(e) {
	var e=e||window.event, f=e.target||e.srcElement, n=f.nodeName||f.tagName, c=e.which||e.which==0?e.which:e.keyCode;
	var KE = ohi_KE_Status.substr(0,2);

	if(e.keyCode>46 && KE=='K3' && K3_type.substr(0,3)=='3m-' && !option.normal_typing) {
		if(pressing_keys && !--pressing_keys) {
			ohiHangeul3_moa(f,e);
			pressed_keys=[];
		}
	}
	if(f.id=='inputText') show_NCR();
}

function inputText_focus() {
	var f=document.getElementById('inputText');
	if(f) f.focus();
}

function url_query() {
	var field, value, TF;
	var address = unescape(location.href); 
	var fields = (address.slice(address.indexOf('?')+1,address.length)).split('&');
	for(var i=0; i<fields.length; ++i){
		field = fields[i].split('=')[0].toLowerCase();
		value = fields[i].split('=')[1];
		TF = !value || value=='0' || value.toLowerCase=='f' || value.toLowerCase=='false' ? 0 : 1;
		if(value===undefined || !value) continue;
		if(field == 'kbd') {
			if(value.toUpperCase()=='QWERTY' || value.toUpperCase()=='QWERTZ' || value.toUpperCase()=='AZERTY')
				ohiChange_KBD_type(value.toUpperCase());
		}
		if(field == 'en')	{
			ohiChange('En',value.toLowerCase());
		}
		else if(field == 'k2') {
			ohiChange('K2',value.toLowerCase());
		}
		else if(field == 'k3') {
			ohiChange('K3',value.toLowerCase());
		}
		else if(field == 'status') {
			ohiStatusBar(tf);
		}
		else if(field == 'sign_ext') {
			ohiChange_sign_ext_enable(TF);
		}
		else if(field == 'normal_typing') {
			option.normal_typing = TF;
		}
		else if(field == 'ncr') {
			option.NCR = TF;
		}
		else if(field == 'ncr_only_cgg') {
			NCR_option.convert_only_CGG_encoding = TF;
		}
	}
}

function tableKey_pressed(key) {
	if(!option.layout_table_show) return;

	var shift1 = document.getElementById('key41');
	var shift2 = document.getElementById('key52');
	shift1.className = shift1.className.substr(0,2);
	shift2.className = shift2.className.substr(0,2);
	var layout_name = current_layout.type_name;
		
	if(key==188) key=44; // , 자리 글쇠
	if(key==190) key=46; // . 자리 글쇠
	if(key==222) key=39; // ' 자리 글쇠
	if(key==219) key=91; // [ 자리 글쇠
	if(key==221) key=93; // ] 자리 글쇠
	if(key==220) key=92; // \ 자리 글쇠
	if(key==173) key=45; // - 자리 글쇠
	if(key==191) key=47; // / 자리 글쇠
	if(key==192) key=96; // ` 자리 글쇠
		
	var key_td;
	for(j=0;j<dkey.length;++j) {
		if(j==41 || j==52) continue;
		key_td = document.getElementById('key'+j);
		key_td.className = key_td.className.replace(/ clicked| pressed/,'');
		if(key==dkey[j] || key==ukey[j] || (layout_name.substr(0,3)=='3m-' && !option.normal_typing && pressed_keys.indexOf(dkey[j])>=0)) {
			key_td.className = key_td.className + ' pressed';
		}

		if(key==ukey[j] && key!=dkey[j]) {
			shift1.className = shift1.className + ' pressed';
			shift2.className = shift2.className + ' pressed';
		}
	}
}

function clickTableKey(e, key_num, dk, uk){
	inputText_focus();
	var c, f = document.getElementById('inputText');
	var n=f.nodeName||f.tagName;
	if(!f || n!='TEXTAREA') return false;

	KBD=ohi_KE_Status.substr(3);
	KE=ohi_KE_Status.substr(0,2);

	var capslock = document.getElementById('key28');
	var shift1 = document.getElementById('key41');
	var shift2 = document.getElementById('key52');

	if(dk==20) {	// 배열표에서 Caps Lock이 눌렸을 때
		if(!capslock_click) {
			capslock.style.backgroundColor = 'orange';
			capslock_click = 1;
		}
		else {
			capslock.style.backgroundColor = '';
			capslock_click = 0;
		}
	}
	if(dk==16 && !shift_click) {	// 배열표에서 윗글쇠가 눌렸을 때
		shift_click = 1;
		shift1.style.backgroundColor = 'orange';
		shift2.style.backgroundColor = 'orange';
		return;
	}
	if((dk==32 || dk==13 || dk==9) && !shift_click) {	// 사이띄개(32), 줄바꾸개(13), Tab(9)
		if(K3_type.substr(-1)=='y') {
			convert_into_modern_hangeul_syllable(f);
		}
		esc_ext_layout();
		ohiInsert(f,0,dk);
		return;
	}
	if(dk==8 && !shift_click) {	// Backspace
		if(!ohiHangeul_backspace(f,e)) return;
		ohiBackspace(f);
		inputText_focus();
		esc_ext_layout();
		return;
	}
	
	if(dk==-1) {	// 기준 자판 바꾸기 단추
		ohiChange_KBD_type();
		inputText_focus();
	}
	if(dk==-2) {	// 2벌식 자판 한·영 상태 바꾸기 단추
		ohiChange_KE('K2');
		inputText_focus();
	}
	if(dk==-3) {	// 3벌식 자판 한·영 상태 바꾸기 단추
		ohiChange_KE('K3');
		inputText_focus();
	}
	if(dk==-11) ohiChange('En',''); // 영문 자판 바꾸기 단추
	if(dk==-12) ohiChange('K2',''); // 2벌식 자판 바꾸기 단추
	if(dk==-13) ohiChange('K3',''); // 3벌식 자판 바꾸기 단추
	
	if((shift_click+capslock_click)%2) c=uk; else c=dk;
	if(ohi_KE_Status.substr(0,2)=='En' && c>32 && c<127) ohiRoman(f,c,0);
	if(ohi_KE_Status.substr(0,2)!='En' && c>32 && c<127) {
		if(document.selection && document.selection.createRange().text.length!=1) ohiQ=[0,0,0,0,0,0,0];
		if(f.selectionEnd+1 && f.selectionEnd-f.selectionStart!=1) ohiQ=[0,0,0,0,0,0,0];
		if(ohi_KE_Status.substr(0,2)=='K2') ohiHangeul2(f,e,c);
		if(ohi_KE_Status.substr(0,2)=='K3') ohiHangeul3(f,e,c);
	}

	for(var j=0;j<dkey.length;++j) {
		var key_td =document.getElementById('key'+j);
		key_td.className = key_td.className.replace(/ clicked| pressed/g,'');
	}
	
	if(dk!=16 && dk!=20) document.getElementById('key'+key_num).className += ' clicked';

	shift_click = 0;
	shift1.style.backgroundColor = '';
	shift2.style.backgroundColor = '';
}

function basic_layouts_info() {
	var i;

	ohi_cheot = [/*ㄱ*/128,/*ㄲ*/129,/*ㄴ*/131,/*ㄷ*/134,/*ㄸ*/135,/*ㄹ*/136,/*ㅁ*/144,/*ㅂ*/145,/*ㅃ*/146,/*ㅅ*/148,/*ㅆ*/149,/*ㅇ*/150,/*ㅈ*/151,/*ㅉ*/152,/*ㅊ*/153,/*ㅋ*/154,/*ㅌ*/155,/*ㅍ*/156,/*ㅎ*/157];
	ohi_ga = [/*ㅏ*/66,/*ㅐ*/67,/*ㅑ*/68,/*ㅒ*/69,/*ㅓ*/70,/*ㅔ*/71,/*ㅕ*/72,/*ㅖ*/73,/*ㅗ*/74,/*ㅘ*/75,/*ㅙ*/76,/*ㅚ*/77,/*ㅛ*/78,/*ㅜ*/79,/*ㅝ*/80,/*ㅞ*/81,/*ㅟ*/82,/*ㅠ*/83,/*ㅡ*/84,/*ㅢ*/85,/*ㅣ*/86];
	ohi_ggeut = [/*ㄱ*/1,/*ㄲ*/2,/*ㄳ*/3,/*ㄴ*/4,/*ㄵ*/5,/*ㄶ*/6,/*ㄷ*/7,/*ㄹ*/9,/*ㄺ*/10,/*ㄻ*/11,/*ㄼ*/12,/*ㄽ*/13,/*ㄾ*/14,/*ㄿ*/15,/*ㅀ*/16,
	/*ㅁ*/17,/*ㅂ*/18,/*ㅄ*/20,/*ㅅ*/21,/*ㅆ*/22,/*ㅇ*/23,/*ㅈ*/24,/*ㅊ*/26,/*ㅋ*/27,/*ㅌ*/28,/*ㅍ*/29,/*ㅎ*/30];

	ohi_hotbatchim = [/*ㄱ*/1,/*ㄴ*/4,/*ㄷ*/7,/*ㄹ*/9,/*ㅁ*/17,/*ㅂ*/18,/*ㅅ*/21,/*ㅇ*/23,/*ㅈ*/24,/*ㅊ*/26,/*ㅋ*/27,/*ㅌ*/28,/*ㅍ*/29,/*ㅎ*/30];
	unicode_modern_hotbatchim = [/*ㄱ*/0x11A8,/*ㄴ*/0x11AB,/*ㄷ*/0x11AE,/*ㄹ*/0x11AF,/*ㅁ*/0x11B7,/*ㅂ*/0x11B8,/*ㅅ*/0x11BA,/*ㅇ*/0x11BC,/*ㅈ*/0x11BD,/*ㅊ*/0x11BE,/*ㅋ*/0x11BF,/*ㅌ*/0x11C0,/*ㅍ*/0x11C1,/*ㅎ*/0x11C2];

	compatibility_cheot = [0x3131,0x3132,0x3134,0x3137,0x3138,0x3139,0x3141,0x3142,0x3143,0x3145,0x3146,0x3147,0x3148,0x3149,0x314A,0x314B,0x314C,0x314D,0x314E];
	i=0x314F;	while(i<=0x3163) compatibility_ga.push(i++);
	compatibility_ggeut = [0x3131,0x3132,0x3133,0x3134,0x3135,0x3136,0x3137,0x3139,0x313A,0x313B,0x313C,0x313D,0x313E,0x313F,0x3140,
		0x3141,0x3142,0x3144,0x3145,0x3146,0x3147,0x3148,0x314A,0x314B,0x314C,0x314D,0x314E];

	i=0x1100;	while(i<=0x115E) unicode_cheot.push(i++);
	i=0xA960;	while(i<=0xA97C) unicode_cheot.push(i++);
	i=0x1161;	while(i<=0x11A7) unicode_ga.push(i++);
	i=0xD7B0;	while(i<=0xD7C6) unicode_ga.push(i++);
	i=0x11A8;	while(i<=0x11FF) unicode_ggeut.push(i++);
	i=0xD7CB;	while(i<=0xD7FB) unicode_ggeut.push(i++);

	unicode_hangeul_CGG_phoneme = unicode_cheot.concat(unicode_ga,unicode_ggeut,[0x115F,0x1160]);

	i=0x1100;	while(i<=0x1112) unicode_modern_cheot.push(i++);
	i=0x1161;	while(i<=0x1175) unicode_modern_ga.push(i++);
	i=0x11A8;	while(i<=0x11C2) unicode_modern_ggeut.push(i++);

	// 쿼티 자판 아랫글 배열 문자값
	dkey = [96,49,50,51,52,53,54,55,56,57,48,45,61,8,
	9,113,119,101,114,116,121,117,105,111,112,91,93,92,
	20,97,115,100,102,103,104,106,107,108,59,39,13,
	16,122,120,99,118,98,110,109,44,46,47,16,
	-11,-12,-13,32,-2,-3,-1];
	
	// 쿼티 자판 윗글 배열
	ukey = [126,33,64,35,36,37,94,38,42,40,41,95,43,8,
	9,81,87,69,82,84,89,85,73,79,80,123,125,124,
	20,65,83,68,70,71,72,74,75,76,58,34,13,
	16,90,88,67,86,66,78,77,60,62,63,16,
	-11,-12,-13,32,-2,-3,-1];

	En_Dvorak_layout = [/*!*/33,/*"*/95,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/45,/*(*/40,
	/*)*/41,/***/42,/*+*/125,/*,*/119,/*-*/91,/*.*/118,/*/*/122,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,
	/*9*/57,/*:*/83,/*;*/115,/*<*/87,/*=*/93,/*>*/86,/*?*/90,/*@*/64,
	/*A*/65,/*B*/88,/*C*/74,/*D*/69,/*E*/62,/*F*/85,/*G*/73,/*H*/68,
	/*I*/67,/*J*/72,/*K*/84,/*L*/78,/*M*/77,/*N*/66,/*O*/82,/*P*/76,
	/*Q*/34,/*R*/80,/*S*/79,/*T*/89,/*U*/71,/*V*/75,/*W*/60,/*X*/81,
	/*Y*/70,/*Z*/58,/*[*/47,/*\*/92,/*]*/61,/*^*/94,/*_*/123,/*`*/96,
	/*a*/97,/*b*/120,/*c*/106,/*d*/101,/*e*/46,/*f*/117,/*g*/105,/*h*/100,
	/*i*/99,/*j*/104,/*k*/116,/*l*/110,/*m*/109,/*n*/98,/*o*/114,/*p*/108,
	/*q*/39,/*r*/112,/*s*/111,/*t*/121,/*u*/103,/*v*/107,/*w*/44,/*x*/113,
	/*y*/102,/*z*/59,/*{*/63,/*|*/124,/*}*/43,/*~*/126];

	En_Colemak_layout = [/*!*/33,/*"*/34,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/39,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/47,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,
	/*9*/57,/*:*/79,/*;*/111,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,	
	/*A*/65,/*B*/66,/*C*/67,/*D*/83,/*E*/70,/*F*/84,/*G*/68,/*H*/72,
	/*I*/85,/*J*/78,/*K*/69,/*L*/73,/*M*/77,/*N*/75,/*O*/89,/*P*/58,
	/*Q*/81,/*R*/80,/*S*/82,/*T*/71,/*U*/76,/*V*/86,/*W*/87,/*X*/88,
	/*Y*/74,/*Z*/90,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/97,/*b*/98,/*c*/99,/*d*/115,/*e*/102,/*f*/116,/*g*/100,/*h*/104,
	/*i*/117,/*j*/110,/*k*/101,/*l*/105,/*m*/109,/*n*/107,/*o*/121,/*p*/59,
	/*q*/113,/*r*/112,/*s*/114,/*t*/103,/*u*/108,/*v*/118,/*w*/119,/*x*/120,
	/*y*/106,/*z*/122,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 3-90 자판
	K3_90_layout = [/*!*/24,/*"*/34,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/155,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/74,/*0*/154,
	/*1*/30,/*2*/22,/*3*/18,/*4*/78,/*5*/83,/*6*/68,/*7*/73,/*8*/85,/*9*/79,
	/*:*/58,/*;*/145,/*<*/50,/*=*/61,/*>*/51,/*?*/63,/*@*/64,
	/*A*/7,/*B*/33,/*C*/11,/*D*/10,/*E*/27,/*F*/2,/*G*/47,/*H*/39,
	/*I*/56,/*J*/52,/*K*/53,/*L*/54,/*M*/49,/*N*/48,/*O*/57,/*P*/62,
	/*Q*/29,/*R*/69,/*S*/6,/*T*/59,/*U*/55,/*V*/16,/*W*/28,/*X*/20,
	/*Y*/60,/*Z*/26,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/23,/*b*/79,/*c*/71,/*d*/86,/*e*/72,/*f*/66,/*g*/84,/*h*/131,
	/*i*/144,/*j*/150,/*k*/128,/*l*/151,/*m*/157,/*n*/148,/*o*/153,/*p*/156,
	/*q*/21,/*r*/67,/*s*/4,/*t*/70,/*u*/134,/*v*/74,/*w*/9,/*x*/1,
	/*y*/136,/*z*/17,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 순아래 자판
	K3_sun1990_layout = [/*!*/33,/*"*/34,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/155,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/24,/*.*/46,/*/*/7,/*0*/69,
	/*1*/30,/*2*/22,/*3*/18,/*4*/78,/*5*/83,/*6*/68,/*7*/73,/*8*/85,/*9*/154,
	/*:*/58,/*;*/145,/*<*/50,/*=*/26,/*>*/51,/*?*/63,/*@*/64,
	/*A*/23,/*B*/33,/*C*/92,/*D*/93,/*E*/72,/*F*/66,/*G*/47,/*H*/39,
	/*I*/56,/*J*/52,/*K*/53,/*L*/54,/*M*/49,/*N*/48,/*O*/57,/*P*/62,
	/*Q*/21,/*R*/67,/*S*/91,/*T*/59,/*U*/55,/*V*/74,/*W*/9,/*X*/61,
	/*Y*/60,/*Z*/45,/*[*/28,/*\*/27,/*]*/29,/*^*/94,/*_*/95,/*`*/96,
	/*a*/23,/*b*/79,/*c*/71,/*d*/86,/*e*/72,/*f*/66,/*g*/84,/*h*/131,
	/*i*/144,/*j*/150,/*k*/128,/*l*/151,/*m*/157,/*n*/148,/*o*/153,/*p*/156,
	/*q*/21,/*r*/67,/*s*/4,/*t*/70,/*u*/134,/*v*/74,/*w*/9,/*x*/1,
	/*y*/136,/*z*/17,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 3-91 자판 (공병우 최종 자판)
	K3_91_layout = [/*!*/2,/*"*/183,/*#*/24,/*$*/15,/*%*/14,/*&*/8220,/*'*/155,/*(*/39,
	/*)*/126,/***/8221,/*+*/43,/*,*/44,/*-*/41,/*.*/46,/*/*/74,/*0*/154,
	/*1*/30,/*2*/22,/*3*/18,/*4*/78,/*5*/83,/*6*/68,/*7*/73,/*8*/85,/*9*/79,
	/*:*/52,/*;*/145,/*<*/44,/*=*/62,/*>*/46,/*?*/33,/*@*/10,
	/*A*/7,/*B*/63,/*C*/27,/*D*/12,/*E*/5,/*F*/11,/*G*/69,/*H*/48,
	/*I*/55,/*J*/49,/*K*/50,/*L*/51,/*M*/34,/*N*/45,/*O*/56,/*P*/57,
	/*Q*/29,/*R*/16,/*S*/6,/*T*/13,/*U*/54,/*V*/3,/*W*/28,/*X*/20,
	/*Y*/53,/*Z*/26,/*[*/40,/*\*/58,/*]*/60,/*^*/61,/*_*/59,/*`*/42,
	/*a*/23,/*b*/79,/*c*/71,/*d*/86,/*e*/72,/*f*/66,/*g*/84,/*h*/131,
	/*i*/144,/*j*/150,/*k*/128,/*l*/151,/*m*/157,/*n*/148,/*o*/153,/*p*/156,
	/*q*/21,/*r*/67,/*s*/4,/*t*/70,/*u*/134,/*v*/74,/*w*/9,/*x*/1,
	/*y*/136,/*z*/17,/*{*/37,/*|*/92,/*}*/47,/*~*/8251];

	K3_93y_layout = [ // 3-93 옛한글 자판
		0x11bd,	/* 0x21 exclam: jongseong jieuj */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong  kieuk */
		0x11c2,	/* 0x31 1: jongseong hieuh */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x003a,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x113c,	/* 0x3C less: choseong ab-sieus */
		0x003d,	/* 0x3D equal */
		0x113e,	/* 0x3E greater: choseong dwis-sieus */
		0x003f,	/* 0x3F question */
		0x11eb,	/* 0x40 at: jongseong yeolin-sieus */
		0x11ae,	/* 0x41 A: jongseong dieud */
		0x0021,	/* 0x42 B: exclam */
		0x11b1,	/* 0x43 C: jongseong lieul-mieum */
		0x11b0, /* 0x44 D: jongseong lieul-gieug */
		0x11bf,	/* 0x45 E: jongseong kieuk */
		0x11a9,	/* 0x46 F: jongseong ssanggieug */
		0x119e,	/* 0x47 G: jungseong araea */
		0x0027,	/* 0x48 H: apostrophe */
		0x1154,	/* 0x49 I: choseong ab-chieuch */
		0x114c,	/* 0x4A J: choseong yes-ieung */
		0x114e,	/* 0x4B K: choseong ab-jieuj */
		0x1150,	/* 0x4C L: choseong dwits-jieuj */
		0x1159,	/* 0x4D M: choseong yeolin-hieuh */
		0x1140,	/* 0x4E N: choseong yeolin-sieus */
		0x1155,	/* 0x4F O: choseong dwits-chieuch */
		0x0000,	/* 0x50 P: */
		0x11c1,	/* 0x51 Q: jongseong pieup */
		0x1164,	/* 0x52 R: jungseong yae */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x003b,	/* 0x54 T: semicolon */
		0x302e,	/* 0x55 U: hangeul single dot tone mark */
		0x11b6,	/* 0x56 V: jongseong lieul-hieuh */
		0x11c0,	/* 0x57 W: jongseong tieut */
		0x11b9,	/* 0x58 X: jongseong bieub-sieus */
		0x302F,	/* 0x59 Y: hangeul double dot tone mark */
		0x11be,	/* 0x5A Z: jongseong chieuch */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x11f9,	/* 0x60 quoteleft: jongseong yeolin-hieuh */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sios */
		0x1162,	/* 0x72 r: jungseong ae */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x11f0	/* 0x7E asciitilde: jongseong yes-ieung */
	];

	// 3-2012 자판
	K3_2012_layout = [
		0x0021,	/* 0x21 exclam */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong  kieuk */
		0x11c2,	/* 0x31 1: jongseong hieuh */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x003d,	/* 0x3D equal */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at:commertial at */
		0x11ae,	/* 0x41 A: jongseong dieud */
		0x003b,	/* 0x42 B: semicolon */
		0x11bf,	/* 0x43 C: jongseong kieuk */
		0x11b0,	/* 0x44 D: jongseong lieul-gieug */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11b1,	/* 0x46 F: jongseong lieul-mieum */
		0x003a,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11c1,	/* 0x51 Q: jongseong pieup */
		0x11b6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11a9,	/* 0x56 V: jongseong ssanggieug */
		0x11c0,	/* 0x57 W: jongseong tieut  */
		0x11b9,	/* 0x58 X: jongseong bieub-sieus */
		0x0035,	/* 0x59 Y: 5 */
		0x11be,	/* 0x5A Z: jongseong chieuch */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong  lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x007e	/* 0x7E asciitilde */
];

	// 3-2012 자판 기호 확장 배열
	K3_2012_sign_extension_layout = [/*!*/[0,0,0], /*"*/[0x266A,0x266C,0], /*#*/[0,0,0], /*$*/[0xFFE0,0,0],
	/*%*/[8240,8241,0], /*&*/[0,0,0], /*'*/[0x326B,0xF7,0],
	/*(*/[0,0,0], /*)*/[0,0,0], /***/[0,0,0], /*+*/[0,0,0],
	/*,*/[0x3001,0x3008,0x2266], /*-*/[0xB1,0x2642,0x2601], /*.*/[0x3002,0x3009,0x2267], /*/*/[0x2026,0x203B,0x2504],
	/*0*/[0x326A,0x300D,0], /*1*/[0x3BC,0x2122,0], /*2*/[0xB2,0x2109,0], /*3*/[0xB3,0x2103,0], /*4*/[0xFFE6,0xFFE5,0x4B0],
	/*5*/[0x20AC,0xFFE1,0], /*6*/[0x327E,0x2702,0], /*7*/[0xA7,0x300E,0], /*8*/[0,0x300F,0], /*9*/[0,0x300C,0],
	/*:*/[0x2463,0x246D,0x3254], /*;*/[0x3265,0x2463,0x246D], /*<*/[0,0x2640,0], /*=*/[0x2260,0,0x2603],
	/*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
	/*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0],
	/*E*/[0x2715,0,0], /*F*/[0,0,0], /*G*/[0xA6,0x2506,0], /*H*/[0x2469,0x2473,0x325A],
	/*I*/[0x2466,0x2470,0x3257], /*J*/[0x2460,0x246A,0x3251], /*K*/[0x2461,0x246B,0x3252], /*L*/[0x2462,0x246C,0x3253],
	/*M*/[0x201D,0x2019,0], /*N*/[0x201C,0x2018,0], /*O*/[0x2467,0x2471,0x3258], /*P*/[0x2468,0x2472,0x3259],
	/*Q*/[0x2199,0x2196,0x261F], /*R*/[0,0,0], /*S*/[0,0,0], /*T*/[0,0,0x2610],
	/*U*/[0x2465,0x246F,0x3256], /*V*/[0,0,0], /*W*/[0x2198,0x2197,0x261D], /*X*/[0,0,0],
	/*Y*/[0x2464,0x246E,0x3255], /*Z*/[0,0,0], /*[*/[0x3010,0x3014,0x2600], /*\*/[0x2252,0xB6,0],
	/*]*/[0x3011,0x3015,0x2602], /*^*/[0x321C,0,0], /*_*/[0,0,0], /*`*/[0xA9,0xAE,0x2117],
	/*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0x2D0,0x25C1,0x25C0], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
	/*e*/[0xD7,0x2194,0x2195], /*f*/[0xB7,0x25B3,0x25B2], /*g*/[0x2015,0x25BD,0x25BC], /*h*/[0x3261,0x2469,0x2473],
	/*i*/[0x3264,0x2466,0x2470], /*j*/[0x3267,0x2460,0x246A], /*k*/[0x3260,0x2461,0x246B], /*l*/[0x3268,0x2462,0x246C],
	/*m*/[0x326D,0x300B,0], /*n*/[0x3266,0x300A,0], /*o*/[0x3269,0x2467,0x2471], /*p*/[0x326C,0x2468,0x2472],
	/*q*/[0x2190,0x2193,0x261C], /*r*/[0xB4,0x2022,0x25E6], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x3003,0x2713,0x2611],
	/*u*/[0x3262,0x2465,0x246F], /*v*/[0,0x25B7,0x25B6], /*w*/[0x2192,0x2191,0x261E], /*x*/[0x2032,0x2606,0x2605],
	/*y*/[0x3263,0x2464,0x246E], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0,0,0], /*~*/[0x327F,0,]];

	// 신세벌식 2003 자판 (박경남 수정 신세벌식 자판)
	K3_Sin3_2003_layout = [/*!*/33,/*"*/34,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/155,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/154,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
	/*:*/58,/*;*/145,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
	/*A*/83/*ㅠ*/,/*B*/79/*ㅜ*/,/*C*/71/*ㅔ*/,/*D*/86/*ㅣ*/,/*E*/72/*ㅕ*/,/*F*/66/*ㅏ*/,/*G*/84/*ㅡ*/,/*H*/8216,
	/*I*/85/*ㅢ*/,/*J*/8217,/*K*/59/*;*/,/*L*/39/*'*/,/*M*/47,/*N*/183,/*O*/79/*ㅜ*/,/*P*/74/*ㅗ*/,
	/*Q*/69/*ㅒ*/,/*R*/67/*ㅐ*/,/*S*/73/*ㅖ*/,/*T*/70/*ㅓ*/,/*U*/8221,/*V*/74/*ㅗ*/,/*W*/68/*ㅑ*/,/*X*/78/*ㅛ*/,
	/*Y*/8220,/*Z*/8251,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/23,/*b*/27/*ㅋ*/,/*c*/26/*ㅊ*/,/*d*/7/*ㄷ*/,/*e*/18/*ㅂ*/,/*f*/22/*ㅆ*/,/*g*/24/*ㅈ*/,/*h*/131/*ㄴ*/,
	/*i*/144,/*j*/150,/*k*/128,/*l*/151,/*m*/157,/*n*/148,/*o*/153,/*p*/156/*ㅍ*/,
	/*q*/21/*ㅅ*/,/*r*/28/*ㅌ*/,/*s*/4/*ㄴ*/,/*t*/29/*ㅍ*/,/*u*/134,/*v*/30/*ㅎ*/,/*w*/9,/*x*/1,
	/*y*/136,/*z*/17,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 신세벌식 2003 자판 겹받침 확장 배열
	K3_Sin3_2003_sublayout = [/*!*/0,/*"*/0,/*#*/0,/*$*/0,/*%*/0,/*&*/0,/*'*/0,/*(*/0,
	/*)*/0,/***/0,/*+*/0,/*,*/0,/*-*/0,/*.*/0,/*/*/0,/*0*/0,
	/*1*/0,/*2*/0,/*3*/0,/*4*/0,/*5*/0,/*6*/0,/*7*/0,/*8*/0,/*9*/0,
	/*:*/0,/*;*/0,/*<*/0,/*=*/0,/*>*/0,/*?*/0,/*@*/0,
	/*A*/20/*ㅄ*/,/*B*/0,/*C*/3/*ㄳ*/,/*D*/5/*ㄵ*/,/*E*/12/*ㄼ*/,/*F*/0,/*G*/0,/*H*/0,
	/*I*/0,/*J*/0,/*K*/0,/*L*/0,/*M*/0,/*N*/0,/*O*/0,/*P*/0,
	/*Q*/13/*ㄽ*/,/*R*/14/*ㄾ*/,/*S*/6/*ㄶ*/,/*T*/15/*ㄿ*/,/*U*/0,/*V*/16/*ㅀ*/,/*W*/10/*ㄺ*/,/*X*/2/*ㄲ*/,
	/*Y*/0,/*Z*/11/*ㄻ*/,/*[*/0,/*\*/0,/*]*/0,/*^*/0,/*_*/0,/*`*/0,
	/*a*/20/*ㅄ*/,/*b*/0,/*c*/3/*ㄳ*/,/*d*/5/*ㄵ*/,/*e*/12/*ㄼ*/,/*f*/0,/*g*/0,/*h*/0,
	/*i*/0,/*j*/0,/*k*/0,/*l*/0,/*m*/0,/*n*/0,/*o*/0,/*p*/0,
	/*q*/13/*ㄽ*/,/*r*/14/*ㄾ*/,/*s*/6/*ㄶ*/,/*t*/15/*ㄿ*/,/*u*/0,/*v*/16/*ㅀ*/,/*w*/10/*ㄺ*/,/*x*/2/*ㄲ*/,
	/*y*/0,/*z*/11/*ㄻ*/,/*{*/0,/*|*/0,/*}*/0,/*~*/0];

	// 신세벌식 2012 자판	
	K3_Sin3_2012_layout = [/*!*/33,/*"*/47,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/155,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/154,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
	/*:*/58,/*;*/145,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
	/*A*/83/*ㅠ*/,/*B*/79/*ㅜ*/,/*C*/71/*ㅔ*/,/*D*/86/*ㅣ*/,/*E*/72/*ㅕ*/,/*F*/66/*ㅏ*/,/*G*/84/*ㅡ*/,/*H*/9633/*□*/,
	/*I*/85/*ㅢ*/,/*J*/8213/*―*/,/*K*/183/*·*/,/*L*/59/*;*/,/*M*/34,/*N*/39,/*O*/79/*ㅜ*/,/*P*/74/*ㅗ*/,
	/*Q*/69/*ㅒ*/,/*R*/70/*ㅓ*/,/*S*/73/*ㅖ*/,/*T*/67/*ㅐ*/,/*U*/9675,/*V*/74/*ㅗ*/,/*W*/68/*ㅑ*/,/*X*/78/*ㅛ*/,
	/*Y*/215,/*Z*/0x119E/*127*/,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/23/*ㅇ*/,/*b*/27/*ㅋ*/,/*c*/30/*ㅎ*/,/*d*/22/*ㅆ*/,/*e*/18/*ㅂ*/,/*f*/26/*ㅊ*/,/*g*/24/*ㅈ*/,/*h*/131/*ㄴ*/,
	/*i*/144,/*j*/150,/*k*/128,/*l*/151,/*m*/157,/*n*/148,/*o*/153,/*p*/156/*ㅍ*/,
	/*q*/21,/*r*/28/*ㅌ*/,/*s*/4/*ㄴ*/,/*t*/7/*ㄷ*/,/*u*/134,/*v*/29/*ㅍ*/,/*w*/9/*ㄹ*/,/*x*/1/*ㄱ*/,
	/*y*/136,/*z*/17/*ㅁ*/,/*{*/123,/*|*/124,/*}*/125,/*~*/126];

	// 신세벌식 2012 자판 겹받침 확장 배열
	K3_Sin3_2012_sublayout = [/*!*/0,/*"*/0,/*#*/0,/*$*/0,/*%*/0,/*&*/0,/*'*/0,/*(*/0,
	/*)*/0,/***/0,/*+*/0,/*,*/0,/*-*/0,/*.*/0,/*/*/0,/*0*/0,
	/*1*/0,/*2*/0,/*3*/0,/*4*/0,/*5*/0,/*6*/0,/*7*/0,/*8*/0,/*9*/0,
	/*:*/0,/*;*/0,/*<*/0,/*=*/0,/*>*/0,/*?*/0,/*@*/0,
	/*A*/20/*ㅄ*/,/*B*/0,/*C*/16/*ㅀ*/,/*D*/5/*ㄵ*/,/*E*/12/*ㄼ*/,/*F*/3/*ㄳ*/,/*G*/0,/*H*/0,
	/*I*/0,/*J*/0,/*K*/0,/*L*/0,/*M*/0,/*N*/0,/*O*/0,/*P*/0,
	/*Q*/13/*ㄽ*/,/*R*/14/*ㄾ*/,/*S*/6/*ㄶ*/,/*T*/0,/*U*/0,/*V*/15/*ㄿ*/,/*W*/10/*ㄺ*/,/*X*/2/*ㄲ*/,
	/*Y*/0,/*Z*/11/*ㄻ*/,/*[*/0,/*\*/0,/*]*/0,/*^*/0,/*_*/0,/*`*/0,
	/*a*/20/*ㅄ*/,/*b*/0,/*c*/16/*ㅀ*/,/*d*/5/*ㄵ*/,/*e*/12/*ㄼ*/,/*f*/3/*ㄳ*/,/*g*/0,/*h*/0,
	/*i*/0,/*j*/0,/*k*/0,/*l*/0,/*m*/0,/*n*/0,/*o*/0,/*p*/0,
	/*q*/13/*ㄽ*/,/*r*/14/*ㄾ*/,/*s*/6/*ㄶ*/,/*t*/0,/*u*/0,/*v*/15/*ㄿ*/,/*w*/10/*ㄺ*/,/*x*/2/*ㄲ*/,
	/*y*/0,/*z*/11/*ㄻ*/,/*{*/0,/*|*/0,/*}*/0,/*~*/0];

	// 신세벌식 기호 확장 배열
	K3_Sin3_sign_extension_layout = [/*!*/[0,0,0], /*"*/[0,0,0], /*#*/[0,0,0], /*$*/[0,0,0],
	/*%*/[0,0,0], /*&*/[0,0,0], /*'*/[0x326B,0x266A,0x266C], /*(*/[0,0,0],
	/*)*/[0,0,0], /***/[0,0,0], /*+*/[0,0,0], /*,*/[0x3001,0x3008,0x300A],
	/*-*/[0xB1,0x2642,0x2601], /*.*/[0x3002,0x3009,0x300B], /*/*/[0x326A,0x203B,0x2620],
	/*0*/[0xA7,0x2469,0x2473], /*1*/[0x3BC,0x2460,0x246A], /*2*/[0xB2,0x2461,0x246B], /*3*/[0xB3,0x2462,0x246C], /*4*/[0xFFE6,0x2463,0x246D],
	/*5*/[0xFFE5,0x2464,0x246E], /*6*/[0x321C,0x2465,0x246F], /*7*/[0xFFE1,0x2466,0x2470], /*8*/[0x20AC,0x2467,0x2471],	/*9*/[0xFFE0,0x2468,0x2472],
	/*:*/[0,0,0], /*;*/[0x3265,0x25BD,0x25BC], /*<*/[0,0,0],
	/*=*/[0x2260,0x2640,0x2603], /*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
	/*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0], /*E*/[0,0,0], /*F*/[0,0,0], /*G*/[0,0,0], /*H*/[0,0,0x2611],
	/*I*/[0,0,0], /*J*/[0,0,0], /*K*/[0,0,0], /*L*/[0,0,0], /*M*/[0,0,0], /*N*/[0,0,0], /*O*/[0,0,0], /*P*/[0,0,0],
	/*Q*/[0,0,0], /*R*/[0,0,0], /*S*/[0,0,0x2610], /*T*/[0,0,0], /*U*/[0,0,0], /*V*/[0,0,0x2612], /*W*/[0,0,0], /*X*/[0,0,0],
	/*Y*/[0,0,0], /*Z*/[0,0,0], /*[*/[0x3010,0x3014,0x2600], /*\*/[0x2252,0xB6,0xA6],
	/*]*/[0x3011,0x3015,0x2602], /*^*/[0,0,0], /*_*/[0,0,0], /*`*/[0x2122,0xA9,0xAE],
	/*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0xF7,0x2030,0x2031], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
	/*e*/[0x2199,0x2190,0x261C], /*f*/[0xB7,0x25E6,0x2022], /*g*/[0x2026,0x2015,0xFFE3], /*h*/[0x3261,0x3003,0x2713],
	/*i*/[0x3264,0x2103,0x2109], /*j*/[0x3267,0x2018,0x201C], /*k*/[0x3260,0x2019,0x201D], /*l*/[0x3268,0x25B3,0x25B2],
	/*m*/[0x326D,0x300D,0x300F], /*n*/[0x3266,0x300C,0x300E], /*o*/[0x3269,0x25B7,0x25B6], /*p*/[0x326C,0x25C1,0x25C0],
	/*q*/[0x2196,0x2193,0x261F], /*r*/[0x2198,0x2192,0x261E], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x2D0,0x2194,0x21C4],
	/*u*/[0x3262,0x327E,0x327F], /*v*/[0xD7,0x2715,0x2702], /*w*/[0x2197,0x2191,0x261D], /*x*/[0x2032,0x2606,0x2605],
	/*y*/[0x3263,0x2195,0x21C5], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0,0,0], /*~*/[0,0,0]];

	// 3-2011 / 3-2012 옛한글 자판의 한글 확장 배열
	K3_2012y_hangeul_extension_layout = [
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x21 exclam */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x26 ampersand */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2B plus */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2C comma */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2D minus */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2E period */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2F slash */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x30 0 */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x31 1 */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x32 2: jongseong ap-sieus(non-standard), jongseong ssang-ap-sieus(non-standard), jongseong dwits-sieus(non-standard), jongseong ssang-dwits-sieus(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x33 3 */
		[[0xD7C2,0x0000], [0x0000,0x0000]], /* 0x34 4: i+yo */
		[[0xD7C3,0x0000], [0x0000,0x0000]], /* 0x35 5: i+yu */
		[[0x1199,0x0000], [0x0000,0x0000]], /* 0x36 6: i+ya */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x37 7 */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x38 8 */
		[[0x113C,0x113D], [0x113E,0x113F]], /* 0x39 9: choseong ap-sieus, choseong ssang-ap-sieus, choseong dwits-sieus, choseong ssang-dwits-sieus */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3A colon */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3B semicolon */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3C less */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3D equal */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3E greater */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3F question */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x40 at */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x41 A */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x42 B */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x43 C */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x44 D */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x45 E */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x46 F */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x47 G */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x48 H */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x49 I */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4A J */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4B K */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4C L */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4D M */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4E N */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4F O */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x50 P */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x51 Q */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x52 R */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x53 S */
		[[0xD7BE,0x0000], [0x0000,0x0000]], /* 0x54 T: i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x56 V */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x57 W */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x58 X */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x59 Y */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5A Z */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5B */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5C */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5D */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5E */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5F */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x60 */
		[[0x0000,0x0000], [0x11F0,0x11EE]], /* 0x61 a: yes-ieung, ssangyesieung */
		[[0x119B,0x0000], [0x1195,0x0000]], /* 0x62 b: i+u, eu+u */
		[[0x1168,0x0000], [0xD7BB,0x0000]], /* 0x63 c: ye, eu+e */
		[[0xD7C4,0x0000], [0x1174,0x0000]], /* 0x64 d: i+i, eu+i */
		[[0xD7BF,0x0000], [0x119E,0x11A2]], /* 0x65 e: i+yeo, arae-a, ssangarae-a */
		[[0x1198,0x0000], [0xD7B9,0x0000]], /* 0x66 f: i+a, eu+a */
		[[0x119C,0x0000], [0x1196,0x0000]], /* 0x67 g: i+eu, eu+eu */
		[[0x0000,0x0000], [0x1159,0xA97C]], /* 0x68 h: choseong yeorinhieuh, choseong ssangyeorinhieuh */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x69 i */
		[[0x0000,0x0000], [0x114C,0x0000]], /* 0x6A j: choseong yes-ieung, choseong ssang-yes-ieung(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6B k */
		[[0x114E,0x114F], [0x1150,0x1151]], /* 0x6C l: choseong ap-jieuj, choseong ssang-ap-jieuj, choseong dwits-jieuj, choseong ssang-dwits-jieuj */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6D m */
		[[0x0000,0x0000], [0x1140,0x0000]], /* 0x6E n: choseong yeorin-sieus*/
		[[0x1154,0x0000], [0x1155,0x0000]], /* 0x6F o: choseong ap-chieuch, choseong dwits-chieuch */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x70 p */
		[[0x0000,0x0000], [0x11EB,0x0000]], /* 0x71 q: jongseong yeorin-sieus */
		[[0x0000,0x0000], [0xD7BA,0x0000]], /* 0x72 r: eu+eo */
		[[0x0000,0x0000], [0x11F9,0x0000]], /* 0x73 s: jongseong yeorin-hieuh, jongseong yeorin-ssang-hieuh(non-standard) */
		[[0x1164,0xD7BE], [0x0000,0x0000]], /* 0x74 t: yae, i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x75 u */
		[[0x119A,0x0000], [0xD7BC,0x0000]], /* 0x76 v: i+o, eu+o */
		[[0x0000,0x0000], [0xD7DD,0x0000]], /* 0x77 w: jongseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x78 x: jongseong ap-jieuj(non-standard), jongseong ssang-ap-jieuj(non-standard), jongseong dwits-jieuj(non-standard), jongseong ssang-dwits-jieuj(non-standard) */
		[[0x0000,0x0000], [0x111B,0x0000]], /* 0x79 y: choseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7A z: jongseong ap-chieuch(non-standard), jongseong dwits-chieuch(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7B braceleft */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7C bar */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7D braceright */
		[[0x0000,0x0000], [0x0000,0x0000]]  /* 0x7E asciitilde */
	];

	K3_2012y_sign_extension_layout = [
		[[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
		[[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
		[[0x326B,0x3279,0x0000], [0x00F7,0x0000,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
		[[0x3001,0x0000,0x0000], [0x2266,0x226A,0x0000]], /* 0x2C comma */
		[[0x2642,0x2600,0x2601], [0x00B1,0x002D,0x0000]], /* 0x2D minus */
		[[0x3002,0x0000,0x0000], [0x2267,0x226B,0x0000]], /* 0x2E period */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2F slash */
		[[0x326A,0x3278,0x0000], [0x2713,0x2611,0x2610]], /* 0x30 0 */
		[[0x2195,0x21C5,0x21F3], [0x03BC,0x0000,0x0000]], /* 0x31 1 */
		[[0x2194,0x21C4,0x2B04], [0x2109,0x0000,0x0000]], /* 0x32 2 */
		[[0xFFE5,0x04B0,0x0000], [0x2103,0x0000,0x0000]], /* 0x33 3 */
		[[0xFFE6,0x0000,0x0000], [0xFFE0,0x0000,0x0000]], /* 0x34 4 */
		[[0x20AC,0xFFE1,0x0000], [0x2030,0x2031,0x0000]], /* 0x35 5 */
	  [[0x327E,0x321C,0x327F], [0x2702,0x0000,0x0000]], /* 0x36 6 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x37 7 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x38 8 */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x39 9 */
		[[0x2084,0x0000,0x0000], [0x2074,0x0000,0x0000]], /* 0x3A colon */
		[[0x3265,0x3273,0x0000], [0x2463,0x246D,0x3254,0x325E,0x32B9]], /* 0x3B semicolon */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3C less */
		[[0x2640,0x2602,0x2603], [0x2260,0x2245,0x0000]], /* 0x3D equal */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3E greater */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3F question */
		[[0x2922,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x40 at */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x41 A */
		[[0x0000,0x0000,0x0000], [0xFE40,0xFE3E,0x0000]], /* 0x42 B */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x43 C */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x44 D */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x45 E */
		[[0x0000,0x0000,0x0000], [0xFE41,0xFE43,0x0000]], /* 0x46 F */
		[[0x0000,0x0000,0x0000], [0xFE42,0xFE44,0x0000]], /* 0x47 G */
		[[0x2080,0x0000,0x0000], [0x2070,0x0000,0x0000]], /* 0x48 H */
		[[0x2087,0x0000,0x0000], [0x2077,0x0000,0x0000]], /* 0x49 I */
		[[0x2081,0x0000,0x0000], [0x00B9,0x0000,0x0000]], /* 0x4A J */
		[[0x2082,0x0000,0x0000], [0x00B2,0x33A1,0x0000]], /* 0x4B K */
		[[0x2083,0x0000,0x0000], [0x00B3,0x33A5,0x0000]], /* 0x4C L */
		[[0x2019,0x201D,0x0000], [0x0000,0x0000,0x0000]], /* 0x4D M */
		[[0x2018,0x201C,0x0000], [0x0000,0x0000,0x0000]], /* 0x4E N */
		[[0x2088,0x0000,0x0000], [0x2078,0x0000,0x0000]], /* 0x4F O */
		[[0x2089,0x0000,0x0000], [0x2079,0x0000,0x0000]], /* 0x50 P */
		[[0x2199,0x21B2,0x2B10], [0x2196,0x21B0,0x2B11]], /* 0x51 Q */
		[[0x0000,0x0000,0x0000], [0xFE3B,0xFE39,0x0000]], /* 0x52 R */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x53 S */
		[[0x0000,0x0000,0x0000], [0xFE3C,0xFE3A,0x0000]], /* 0x54 T */
		[[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
		[[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
		[[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x59 Y */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5A Z */
		[[0x25B3,0x25B2,0x0000], [0x25B7,0x25B6,0x0000]], /* 0x5B bracketleft */
		[[0x00B6,0x23CE,0x0000], [0x2252,0x2248,0x0000]], /* 0x5C backslash:*/
		[[0x25BD,0x25BC,0x0000], [0x25C1,0x25C0,0x0000]], /* 0x5D bracketright:*/
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5E asciicircum:*/
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5F */
		[[0x00A9,0x00AE,0x2117], [0x2122,0x0000,0x0000]], /* 0x60 */
		[[0x2026,0x2504,0x0000], [0x25C7,0x25C8,0x25C6]], /* 0x61 a */
		[[0x00A7,0x0000,0x0000], [0x3009,0x300B,0x0000]], /* 0x62 b */
		[[0x00B0,0x0000,0x0000], [0x260E,0x2668,0x0000]], /* 0x63 c */
		[[0x302E,0x0000,0x0000], [0x25CB,0x25C9,0x25CF]], /* 0x64 d */
		[[0x00D7,0x2715,0x0000], [0x203B,0x327C,0x327D]], /* 0x65 e */
		[[0x00B7,0x2022,0x25E6], [0x300C,0x300E,0x0000]], /* 0x66 f */
		[[0x2015,0x00AF,0xFFE3], [0x300D,0x300F,0x0000]], /* 0x67 g */
		[[0x3261,0x326F,0x0000], [0x2469,0x2473,0x325A,0x32B5,0x32BF]], /* 0x68 h */
		[[0x3264,0x3272,0x0000], [0x2466,0x2470,0x3257,0x32B2,0x32BC]], /* 0x69 i */
		[[0x3267,0x3275,0x0000], [0x2460,0x246A,0x3251,0x325B,0x32B6]], /* 0x6A j */
		[[0x3260,0x326E,0x0000], [0x2461,0x246B,0x3252,0x325C,0x32B7]], /* 0x6B k */
		[[0x3268,0x3276,0x0000], [0x2462,0x246C,0x3253,0x325D,0x32B8]], /* 0x6C l */
		[[0x326D,0x327B,0x0000], [0x2234,0x2235,0x2261]], /* 0x6D m */
		[[0x3266,0x3274,0x0000], [0x221E,0x221D,0x0000]], /* 0x6E n */
		[[0x3269,0x3277,0x0000], [0x2467,0x2471,0x3258,0x32B3,0x32BD]], /* 0x6F o */
		[[0x326C,0x327A,0x0000], [0x2468,0x2472,0x3259,0x32B4,0x32BE]], /* 0x70 p */
		[[0x2190,0x261C,0x21E6], [0x2193,0x261F,0x21E9]], /* 0x71 q */
		[[0x00B4,0x0000,0x0000], [0x3010,0x3014,0x0000]], /* 0x72 r */
		[[0x302F,0x0000,0x0000], [0x25A1,0x25A3,0x25A0]], /* 0x73 s */
		[[0x3003,0x0000,0x0000], [0x3011,0x3015,0x0000]], /* 0x74 t */
		[[0x3262,0x3270,0x0000], [0x2465,0x246F,0x3256,0x32B1,0x32BB]], /* 0x75 u */
		[[0x02D0,0x0000,0x0000], [0x3008,0x300A,0x0000]], /* 0x76 v */
		[[0x2192,0x261E,0x21E8], [0x2191,0x261D,0x21E7]], /* 0x77 w */
		[[0x2032,0x0000,0x0000], [0x2606,0x2605,0x0000]], /* 0x78 x */
		[[0x3263,0x3271,0x0000], [0x2464,0x246E,0x3255,0x325F,0x32BA]], /* 0x79 y */
		[[0x2033,0x0000,0x0000], [0x2661,0x2665,0x0000]], /* 0x7A z */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7B braceleft */
		[[0x00A6,0x2506,0x0000], [0x0000,0x0000,0x0000]], /* 0x7C bar */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7D braceright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]]  /* 0x7E asciitilde */
	];

	K3_sun2014_layout = [
    0x0021, /* 0x21 exclam */
    0x0022, /* 0x22 quotedbl */
    0x0023, /* 0x23 numbersign */
    0x0024, /* 0x24 dollar */
    0x0025, /* 0x25 percent */
    0x0026, /* 0x26 ampersand */
    0x1110, /* 0x27 apostrophe: choseong tieut */
    0x0028, /* 0x28 parenleft */
    0x0029, /* 0x29 parenright */
    0x002a, /* 0x2A asterisk */
    0x002b, /* 0x2B plus */
    0x002c, /* 0x2C comma */
    0x002d, /* 0x2D minus */
    0x002e, /* 0x2E period */
    0x1169, /* 0x2F slash: jungseong o */
    0x110f, /* 0x30 0: choseong kieuk */
    0x11c2, /* 0x31 1: jongseong hieuh */
    0x11bb, /* 0x32 2: jongseong ssangsieus */
    0x11b8, /* 0x33 3: jongseong pieup */
    0x116d, /* 0x34 4: jungseong yo */
    0x1172, /* 0x35 5: jungseong yu */
    0x1163, /* 0x36 6: jungseong ya */
    0x1168, /* 0x37 7: jungseong ye */
    0x1174, /* 0x38 8: jungseong yi */
    0x116e, /* 0x39 9: jungseong u */
    0x003a, /* 0x3A colon */
    0x1107, /* 0x3B semicolon: choseong pieup */
    0x0032, /* 0x3C less: 2 */
    0x003d, /* 0x3D equal */
    0x0033, /* 0x3E greater: 3 */
    0x003f, /* 0x3F question */
    0x0040, /* 0x40 at */
		0x11ae,	/* 0x41 A: jongseong dieud */
		0x0000,	/* 0x42 B: */
		0x0000, /* 0x43 C: jongseong lieul-mieum */
		0x0000, /* 0x44 D: jongseong lieul-gieug */
		0x0000, /* 0x45 E: jongseong kieuk */
		0x0000, /* 0x46 F: jongseong ssanggieug */
		0x002f,	/* 0x47 G: slash */
		0x0027,	/* 0x48 H: apostrophe */
		0x0038,	/* 0x49 I: 8 */
		0x0034,	/* 0x4A J: 4 */
		0x0035,	/* 0x4B K: 5 */
		0x0036,	/* 0x4C L: 6 */
		0x0031,	/* 0x4D M: 1 */
		0x0030,	/* 0x4E N: 0 */
		0x0039,	/* 0x4F O: 9 */
		0x003e,	/* 0x50 P: greater-than sign */    
		0x11bd,	/* 0x51 Q: jongseong jieuj */
		0x1164,	/* 0x52 R: jungseong yae */
		0x11c0,	/* 0x53 S: jongseong tieut */
		0x003b,	/* 0x54 T: semicolon */
		0x0037,	/* 0x55 U: 7 */
		0x0000, /* 0x56 V: */
		0x11be,	/* 0x57 W: jongseong chieuch */
		0x11bf,	/* 0x58 X: jongseong kieuk */
		0x003c,	/* 0x59 Y: less-than sign */
		0x11c1,	/* 0x5A Z: jongseong pieup */
    0x005b, /* 0x5B bracketleft */
    0x005c, /* 0x5C backslash */
    0x005d, /* 0x5D bracketright */
    0x005e, /* 0x5E asciicircum */
    0x005f, /* 0x5F underscore */
    0x0060, /* 0x60 quoteleft */
    0x11bc, /* 0x61 a: jongseong ieung */
    0x116e, /* 0x62 b: jungseong u */
    0x1166, /* 0x63 c: jungseong e */
    0x1175, /* 0x64 d: jungseong i */
    0x1167, /* 0x65 e: jungseong yeo */
    0x1161, /* 0x66 f: jungseong a */
    0x1173, /* 0x67 g: jungseong eu */
    0x1102, /* 0x68 h: choseong nieun */
    0x1106, /* 0x69 i: choseong mieum */
    0x110b, /* 0x6A j: choseong ieung */
    0x1100, /* 0x6B k: choseong gieug */
    0x110c, /* 0x6C l: choseong jieuj */
    0x1112, /* 0x6D m: choseong hieuh */
    0x1109, /* 0x6E n: choseong sieus */
    0x110e, /* 0x6F o: choseong chieuch */
    0x1111, /* 0x70 p: choseong phieuph */
    0x11ba, /* 0x71 q: jongseong sieus */
    0x1162, /* 0x72 r: jungseong ae */
    0x11ab, /* 0x73 s: jongseong nieun */
    0x1165, /* 0x74 t: jungseong eo */
    0x1103, /* 0x75 u: choseong dieud */
    0x1169, /* 0x76 v: jungseong o */
    0x11af, /* 0x77 w: jongseong lieul */
    0x11a8, /* 0x78 x: jongseong gieug */
    0x1105, /* 0x79 y: choseong lieul */
    0x11b7, /* 0x7A z: jongseong mieum */
    0x007b, /* 0x7B braceleft */
    0x007c, /* 0x7C bar */
    0x007d, /* 0x7D braceright */
    0x007e  /* 0x7E asciitilde */
	];
	
	K3_2015P_layout = [
		0x0021,	/* 0x21 exclam */
		0x002f,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002a,	/* 0x2A asterisk */
		0x002b,	/* 0x2B plus */
		0x002c,	/* 0x2C comma */
		0x002d,	/* 0x2D minus */
		0x002e,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110f,	/* 0x30 0: choseong  kieuk */
		0x11ae,	/* 0x31 1: jongseong dieud */
		0x11bb,	/* 0x32 2: jongseong ssangsieus */
		0x11b8,	/* 0x33 3: jongseong bieub */
		0x116d,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116e,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003c,	/* 0x3C less */
		0x003d,	/* 0x3D equal */
		0x003e,	/* 0x3E greater */
		0x003f,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11b9,	/* 0x41 A: jongseong bieub-sieuh */
		0x003b,	/* 0x42 B: semicolon */
		0x11c0,	/* 0x43 C: jongseong tieut */
		0x11c2, /* 0x44 D: jongseong hieuh */
		0x11bd,	/* 0x45 E: jongseong jieuj */
		0x11c1,	/* 0x46 F: jongseong pieup */
		0x003a,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11b6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11be,	/* 0x52 R: jongseong chieuch */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11bf,	/* 0x56 V: jongseong kieuk */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11a9,	/* 0x58 X: jongseong ssanggieug */
		0x0035,	/* 0x59 Y: 5 */
		0x11b1,	/* 0x5A Z: jongseong lieul-mieum */
		0x005b,	/* 0x5B bracketleft */
		0x005c,	/* 0x5C backslash */
		0x005d,	/* 0x5D bracketright */
		0x005e,	/* 0x5E asciicircum */
		0x005f,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11bc,	/* 0x61 a: jongseong ieung */
		0x116e,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110b,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110c,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110e,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11ba,	/* 0x71 q: jongseong sios */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11ab,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11af,	/* 0x77 w: jongseong lieul */
		0x11a8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11b7,	/* 0x7A z: jongseong mieum */
		0x007b,	/* 0x7B braceleft */
		0x007c,	/* 0x7C bar */
		0x007d,	/* 0x7D braceright */
		0x007e	/* 0x7E asciitilde */
	];

	K3_2015P_sublayout = [
		0x0000,	/* 0x21 exclam */
		0x0000,	/* 0x22 quotedbl */
		0x0000,	/* 0x23 numbersign */
		0x0000,	/* 0x24 dollar */
		0x0000,	/* 0x25 percent */
		0x0000,	/* 0x26 ampersand */
		0x0000,	/* 0x27 apostrophe */
		0x0000,	/* 0x28 parenleft */
		0x0000,	/* 0x29 parenright */
		0x0000,	/* 0x2A asterisk */
		0x0000,	/* 0x2B plus */
		0x0000,	/* 0x2C comma */
		0x0000,	/* 0x2D minus */
		0x0000,	/* 0x2E period */
		0x0000,	/* 0x2F slash */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x0000,	/* 0x32 2 */
		0x0000,	/* 0x33 3 */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x0000,	/* 0x38 8 */
		0x0000,	/* 0x39 9 */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x11b9,	/* 0x41 A: jongseong bieub-sieuh */
		0x0000,	/* 0x42 B */
		0x11b4,	/* 0x43 C: jongseong lieul-tieut */
		0x11b2, /* 0x44 D: jongseong lieul-bieub */
		0x11ac,	/* 0x45 E: jongseong nieun-jieuj */
		0x11b5,	/* 0x46 F: jongseong lieul-pieup */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x0000,	/* 0x4A J */
		0x0000,	/* 0x4B K */
		0x0000,	/* 0x4C L */
		0x0000,	/* 0x4D M */
		0x0000,	/* 0x4E N */
		0x0000,	/* 0x4F O */
		0x0000,	/* 0x50 P */
		0x11b6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11b3,	/* 0x52 R: jongseong lieul-sieus */
		0x11ad,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11aa,	/* 0x56 V: jongseong gieug-sieus */
		0x11b0,	/* 0x57 W: jongseong lieul-gieug */
		0x11a9,	/* 0x58 X: jongseong ssanggieug  */
		0x0000,	/* 0x59 Y */
		0x11b1,	/* 0x5A Z: jongseong lieul-mieum */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x11b9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b */
		0x11b4,	/* 0x63 c: jongseong lieul-tieut */
		0x11b2,	/* 0x64 d: jongseong lieul-bieub */
		0x11ac,	/* 0x65 e: jongseong nieun-jieuj */
		0x11b5,	/* 0x66 f: jongseong lieul-pieup */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11b6,	/* 0x71 q: jongseong lieul-hieuh */
		0x11b3,	/* 0x72 r: jongseong lieul-sieus */
		0x11ad,	/* 0x73 s: jongseong nieun-hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x11aa,	/* 0x76 v: jongseong gieug-sieus */
		0x11b0,	/* 0x77 w: jongseong lieul-gieug */
		0x11a9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y */
		0x11b1,	/* 0x7A z:  jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];
	
	hangeul_combination_table_default = [
		[0x11001100,0x1101], /* choseong  gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong  dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong  bieup + bieup = ssangbieup */
		[0x11091109,0x110a], /* choseong  sieus + sieus = ssangsieus */
		[0x110c110c,0x110d], /* choseong  jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116a], /* jungseong o     + a     = wa */
		[0x11691162,0x116b], /* jungseong o     + ae    = wae */
		[0x11691175,0x116c], /* jungseong o     + i     = oe */
		[0x116e1165,0x116f], /* jungseong u     + eo    = weo */
		[0x116e1166,0x1170], /* jungseong u     + e     = we */
		[0x116e1175,0x1171], /* jungseong u     + i     = wi */
		[0x11731175,0x1174], /* jungseong eu    + i     = yi */
		[0x119e1175,0x11a1], /* jungseong araea + i     = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssangegieug */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = jieun-cieuj */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-pieup */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11ba11ba,0x11bb]  /* jongseong sieus + sieus = ssangsieus */
	];

	hangeul_combination_table_full = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11001103,0x115a], /* choseong gieug + dieud = gieug-dieud */
		[0x11021100,0x1113], /* choseong nieun + gieug = nieun-gieug */
		[0x11021102,0x1114], /* choseong nieun + nieun = ssangnieun */
		[0x11021103,0x1115], /* choseong nieun + dieud = nieun-dieud */
		[0x11021107,0x1116], /* choseong nieun + bieub = nieun-bieub */
		[0x11021109,0x115b], /* choseong nieun + sieus = nieun-sieus */
		[0x1102110c,0x115c], /* choseong nieun + jieuj = nieun-jieuj */
		[0x11021112,0x115d], /* choseong nieun + hieuh = nieun-hieuh */
		[0x11031100,0x1117], /* choseong dieud + gieug = dieud-gieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11031105,0x115e], /* choseong dieud + lieul = dieud-lieul */
		[0x11031106,0xa960], /* choseong dieud + mieum = dieud-mieum */
		[0x11031107,0xa961], /* choseong dieud + bieub = dieud-bieub */
		[0x11031109,0xa962], /* choseong dieud + sieus = dieud-sieus */
		[0x1103110c,0xa963], /* choseong dieud + jieuj = dieud-jieuj */
		[0x11051100,0xa964], /* choseong lieul + gieug = lieul-gieug */
		[0x11051101,0xa965], /* choseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11051102,0x1118], /* choseong lieul + nieun = lieul-nieun */
		[0x11051103,0xa966], /* choseong lieul + dieud = lieul-dieud */
		[0x11051104,0xa967], /* choseong lieul + ssangdieud = lieul-ssangdieud */
		[0x11051105,0x1119], /* choseong lieul + lieul = ssanglieul */
		[0x11051106,0xa968], /* choseong lieul + mieum = lieul-mieum */
		[0x11051107,0xa969], /* choseong lieul + bieub = lieul-bieub */
		[0x11051108,0xa96a], /* choseong lieul + ssangbieub = lieul-ssangbieub */
		[0x11051109,0xa96c], /* choseong lieul + sieus = lieul-sieus */
		[0x1105110b,0x111b], /* choseong lieul + ieung = gabyeounlieul */
		[0x1105110c,0xa96d], /* choseong lieul + jieuj = lieul-jieuj */
		[0x1105110f,0xa96e], /* choseong lieul + kieuk = lieul-kieuk */
		[0x11051112,0x111a], /* choseong lieul + hieuh = lieul-hieuh */
		[0x1105112b,0xa96b], /* choseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11061100,0xa96f], /* choseong mieum + gieug = mieum-gieug */
		[0x11061103,0xa970], /* choseong mieum + dieud = mieum-dieud */
		[0x11061107,0x111c], /* choseong mieum + bieub = mieum-bieub */
		[0x11061109,0xa971], /* choseong mieum + sieus = mieum-sieus */
		[0x1106110b,0x111d], /* choseong mieum + ieung = gabyeounmieum */
		[0x11071100,0x111e], /* choseong bieub + gieug = bieub-gieug */
		[0x11071102,0x111f], /* choseong bieub + nieun = bieub-nieun */
		[0x11071103,0x1120], /* choseong bieub + dieud = bieub-dieud */
		[0x11071107,0x1108], /* choseong bieub + bieub = ssangbieub */
		[0x11071109,0x1121], /* choseong bieub + sieus = bieub-sieus */
		[0x1107110a,0x1125], /* choseong bieub + ssangsieus = bieub-ssangsieus */
		[0x1107110b,0x112b], /* choseong bieub + ieung = gabyeounbieub */
		[0x1107110c,0x1127], /* choseong bieub + jieuj = bieub-jieuj */
		[0x1107110e,0x1128], /* choseong bieub + chieuch = bieub-chieuch */
		[0x1107110f,0xa973], /* choseong bieub + kieuk = bieub-kieuk */
		[0x11071110,0x1129], /* choseong bieub + tieut = bieub-tieut */
		[0x11071111,0x112a], /* choseong bieub + pieup = bieub-pieup */
		[0x11071112,0xa974], /* choseong bieub + hieuh = bieub-hieuh */
		[0x1107112b,0x112c], /* choseong bieub + gabyeounbieub = gabyeounssangbieub */
		[0x1107112d,0x1122], /* choseong bieub + sieus-gieug = bieub-sieus-gieug */
		[0x1107112f,0x1123], /* choseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11071132,0x1124], /* choseong bieub + sieus-bieub = bieub-sieus-bieub */
		[0x11071136,0x1126], /* choseong bieub + sieus-jieuj = bieub-sieus-jieuj */
		[0x11071139,0xa972], /* choseong bieub + sieus-tieut = bieub-sieus-tieut */
		[0x1108110b,0x112c], /* choseong ssangbieub + ieung = gabyeounssangbieub */
		[0x11091100,0x112d], /* choseong sieus + gieug = sieus-gieug */
		[0x11091102,0x112e], /* choseong sieus + nieun = sieus-nieun */
		[0x11091103,0x112f], /* choseong sieus + dieud = sieus-dieud */
		[0x11091105,0x1130], /* choseong sieus + lieul = sieus-lieul */
		[0x11091106,0x1131], /* choseong sieus + mieum = sieus-mieum */
		[0x11091107,0x1132], /* choseong sieus + bieub = sieus-bieub */
		[0x11091109,0x110a], /* choseong sieus + sieus = ssangsieus */
		[0x1109110a,0x1134], /* choseong sieus + ssangsieus = sieus-ssangsieus */
		[0x1109110b,0x1135], /* choseong sieus + ieung = sieus-ieung */
		[0x1109110c,0x1136], /* choseong sieus + jieuj = sieus-jieuj */
		[0x1109110e,0x1137], /* choseong sieus + chieuch = sieus-chieuch */
		[0x1109110f,0x1138], /* choseong sieus + kieuk = sieus-kieuk */
		[0x11091110,0x1139], /* choseong sieus + tieut = sieus-tieut */
		[0x11091111,0x113a], /* choseong sieus + pieup = sieus-pieup */
		[0x11091112,0x113b], /* choseong sieus + hieuh = sieus-hieuh */
		[0x1109111e,0x1133], /* choseong sieus + bieub-gieug = sieus-bieub-gieug */
		[0x11091132,0xa975], /* choseong sieus + sieus-bieub = ssangsieus-bieub */
		[0x110a1107,0xa975], /* choseong ssangsieus + bieub = ssangsieus-bieub */
		[0x110a1109,0x1134], /* choseong ssangsieus + sieus = sieus-ssangsieus */
		[0x110b1100,0x1141], /* choseong ieung + gieug = ieung-gieug */
		[0x110b1103,0x1142], /* choseong ieung + dieud = ieung-dieud */
		[0x110b1105,0xa976], /* choseong ieung + lieul = ieung-lieul */
		[0x110b1106,0x1143], /* choseong ieung + mieum = ieung-mieum */
		[0x110b1107,0x1144], /* choseong ieung + bieub = ieung-bieub */
		[0x110b1109,0x1145], /* choseong ieung + sieus = ieung-sieus */
		[0x110b110b,0x1147], /* choseong ieung + ieung = ssangieung */
		[0x110b110c,0x1148], /* choseong ieung + jieuj = ieung-jieuj */
		[0x110b110e,0x1149], /* choseong ieung + chieuch = ieung-chieuch */
		[0x110b1110,0x114a], /* choseong ieung + tieut = ieung-tieut */
		[0x110b1111,0x114b], /* choseong ieung + pieup = ieung-pieup */
		[0x110b1112,0xa977], /* choseong ieung + hieuh = ieung-hieuh */
		[0x110b1140,0x1146], /* choseong ieung + bansieus = ieung-bansieus */
		[0x110c110b,0x114d], /* choseong jieuj + ieung = jieuj-ieung */
		[0x110c110c,0x110d], /* choseong jieuj + jieuj = ssangjieuj */
		[0x110d1112,0xa978], /* choseong ssangjieuj + hieuh = ssangjieuj-hieuh */
		[0x110e110f,0x1152], /* choseong chieuch + kieuk = chieuch-kieuk */
		[0x110e1112,0x1153], /* choseong chieuch + hieuh = chieuch-hieuh */
		[0x11101110,0xa979], /* choseong tieut + tieut = ssangtieut */
		[0x11111107,0x1156], /* choseong pieup + bieub = pieup-bieub */
		[0x1111110b,0x1157], /* choseong pieup + ieung = gabyeounpieup */
		[0x11111112,0xa97a], /* choseong pieup + hieuh = pieup-hieuh */
		[0x11121109,0xa97b], /* choseong hieuh + sieus = hieuh-sieus */
		[0x11121112,0x1158], /* choseong hieuh + hieuh = ssanghieuh */
		[0x11211100,0x1122], /* choseong bieub-sieus + gieug = bieub-sieus-gieug */
		[0x11211103,0x1123], /* choseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11211107,0x1124], /* choseong bieub-sieus + bieub = bieub-sieus-bieub */
		[0x11211109,0x1125], /* choseong bieub-sieus + sieus = bieub-ssangsieus */
		[0x1121110c,0x1126], /* choseong bieub-sieus + jieuj = bieub-sieus-jieuj */
		[0x11211110,0xa972], /* choseong bieub-sieus + tieut = bieub-sieus-tieut */
		[0x11321100,0x1133], /* choseong sieus-bieub + gieug = sieus-bieub-gieug */
		[0x113c113c,0x113d], /* choseong chidueumsieus + chidueumsieus = chidueumssangsieus */
		[0x113e113e,0x113f], /* choseong jeongchieumsieus + jeongchieumsieus = jeongchieumssangsieus */
		[0x114e114e,0x114f], /* choseong chidueumjieuj + chidueumjieuj = chidueumssangjieuj */
		[0x11501150,0x1151], /* choseong jeongchieumjieuj + jeongchieumjieuj = jeongchieumssangjieuj */
		[0x11591159,0xa97c], /* choseong yeorinhieuh + yeorinhieuh = ssangyeorinhieuh */
		[0x11611161,0x119e], /* jungseong a + a  = arae-a */
		[0x11611169,0x1176], /* jungseong a + o  = a-o */
		[0x1161116e,0x1177], /* jungseong a + u  = a-u */
		[0x11611173,0x11a3], /* jungseong a + eu = a-eu */
		[0x11611175,0x1162], /* jungseong a + i  = ae */
		[0x11631169,0x1178], /* jungseong ya + o = ya-o */
		[0x1163116d,0x1179], /* jungseong ya + yo = ya-yo */
		[0x1163116e,0x11a4], /* jungseong ya + u = ya-u */
		[0x11631175,0x1164], /* jungseong ya + i = yae */
		[0x11651169,0x117a], /* jungseong eo + o = eo-o */
		[0x1165116e,0x117b], /* jungseong eo + u = eo-u */
		[0x11651173,0x117c], /* jungseong eo + eu = eo-eu */
		[0x11651175,0x1166], /* jungseong eo + i = e */
		[0x11671163,0x11a5], /* jungseong yeo + ya = yeo-ya */
		[0x11671169,0x117d], /* jungseong yeo + o = yeo-o */
		[0x1167116e,0x117e], /* jungseong yeo + u = yeo-u */
		[0x11671175,0x1168], /* jungseong yeo + i = ye */
		[0x11691161,0x116a], /* jungseong o + a   = wa */
		[0x11691162,0x116b], /* jungseong o + ae  = wae */
		[0x11691163,0x11a6], /* jungseong o + ya  = o-ya */
		[0x11691164,0x11a7], /* jungseong o + yae = o-yae */
		[0x11691165,0x117f], /* jungseong o + eo  = o-eo */
		[0x11691166,0x1180], /* jungseong o + e   = o-e */
		[0x11691167,0xd7b0], /* jungseong o + yeo  = o-yeo */
		[0x11691168,0x1181], /* jungseong o + ye  = o-ye */
		[0x11691169,0x1182], /* jungseong o + o   = o-o */
		[0x1169116e,0x1183], /* jungseong o + u   = o-u */
		[0x11691175,0x116c], /* jungseong o + i   = oe */
		[0x116a1175,0x116b], /* jungseong wa + i   = wae */
		[0x116d1161,0xd7b2], /* jungseong yo + a   = yo-a */
		[0x116d1162,0xd7b3], /* jungseong yo + ae  = yo-ae */
		[0x116d1163,0x1184], /* jungseong yo + ya  = yo-ya */
		[0x116d1164,0x1185], /* jungseong yo + yae = yo-yae */
		[0x116d1165,0xd7b4], /* jungseong yo + eo  = yo-eo */
		[0x116d1167,0x1186], /* jungseong yo + yeo = yo-yeo */
		[0x116d1169,0x1187], /* jungseong yo + o   = yo-o */
		[0x116d1175,0x1188], /* jungseong yo + i   = yo-i */
		[0x116e1161,0x1189], /* jungseong u + a    = u-a */
		[0x116e1162,0x118a], /* jungseong u + ae   = u-ae */
		[0x116e1165,0x116f], /* jungseong u + eo   = weo */
		[0x116e1166,0x1170], /* jungseong u + e    = we */
		[0x116e1167,0xd7b5], /* jungseong u + yeo  = u-yeo */
		[0x116e1168,0x118c], /* jungseong u + ye   = u-ye */
		[0x116e116e,0x118d], /* jungseong u + u    = u-u */
		[0x116e1175,0x1171], /* jungseong u + i    = wi */
		[0x116e117c,0x118b], /* jungseong u + eo-eu = u-eo-eu */
		[0x116ed7c4,0xd7b6], /* jungseong u + i-i  = u-i-i */
		[0x116f1173,0x118b], /* jungseong weo + eu = u-eo-eu */
		[0x116f1175,0x1170], /* jungseong weo + i  = we */
		[0x11711175,0xd7b6], /* jungseong wi + i   = u-i-i */
		[0x11721161,0x118e], /* jungseong yu + a   = yu-a */
		[0x11721162,0xd7b7], /* jungseong yu + ae  = yu-ae */
		[0x11721165,0x118f], /* jungseong yu + eo  = yu-eo */
		[0x11721166,0x1190], /* jungseong yu + e   = yu-e */
		[0x11721167,0x1191], /* jungseong yu + yeo = yu-yeo */
		[0x11721168,0x1192], /* jungseong yu + ye  = yu-ye */
		[0x11721169,0xd7b8], /* jungseong yu + o   = yu-o */
		[0x1172116e,0x1193], /* jungseong yu + u   = yu-u */
		[0x11721175,0x1194], /* jungseong yu + i   = yu-i */
		[0x11731161,0xd7b9], /* jungseong eu + a   = eu-a */
		[0x11731165,0xd7ba], /* jungseong eu + eo  = eu-eo */
		[0x11731166,0xd7bb], /* jungseong eu + e   = eu-e */
		[0x11731169,0xd7bc], /* jungseong eu + o    = eu-o */
		[0x1173116e,0x1195], /* jungseong eu + u   = eu-u */
		[0x11731173,0x1196], /* jungseong eu + eu  = eu-eu */
		[0x11731175,0x1174], /* jungseong eu + i   = yi */
		[0x1174116e,0x1197], /* jungseong yi + u   = yi-u */
		[0x11751161,0x1198], /* jungseong i + a    = i-a */
		[0x11751163,0x1199], /* jungseong i + ya   = i-ya */
		[0x11751164,0xd7be], /* jungseong i + yae  = i-yae */
		[0x11751167,0xd7bf], /* jungseong i + yeo  = i-yeo */
		[0x11751168,0xd7c0], /* jungseong i + ye   = i-ye */
		[0x11751169,0x119a], /* jungseong i + o    = i-o */
		[0x1175116d,0xd7c2], /* jungseong i + yo   = i-yo */
		[0x1175116e,0x119b], /* jungseong i + u    = i-u */
		[0x11751172,0xd7c3], /* jungseong i + yu   = i-yu */
		[0x11751173,0x119c], /* jungseong i + eu   = i-eu */
		[0x11751175,0xd7c4], /* jungseong i + i    = i-i */
		[0x11751178,0xd7bd], /* jungseong i + ya-o = i-ya-o */
		[0x1175119e,0x119d], /* jungseong i + araea = i-araea */
		[0x11821175,0xd7b1], /* jungseong o-o + i  = o-o-i */
		[0x11991169,0xd7bd], /* jungseong i-ya + o = i-ya-o */
		[0x119a1175,0xd7c1], /* jungseong i-o + i  = i-o-i */
		[0x119e1161,0xd7c5], /* jungseong araea + a = araea-a */
		[0x119e1165,0x119f], /* jungseong araea + eo = araea-eo */
		[0x119e1166,0xd7c6], /* jungseong araea + e = araea-e */
		[0x119e116e,0x11a0], /* jungseong araea + u = araea-u */
		[0x119e1175,0x11a1], /* jungseong araea + i = araea-i */
		[0x119e119e,0x11a2], /* jungseong araea + araea = ssangaraea */
		[0x11a811a8,0x11a9], /* jongseong gieug + gieug = ssanggieug */
		[0x11a811ab,0x11fa], /* jongseong gieug + nieun = gieug-nieun */
		[0x11a811af,0x11c3], /* jongseong gieug + lieul = gieug-lieul */
		[0x11a811b8,0x11fb], /* jongseong gieug + bieub = gieug-bieub */
		[0x11a811ba,0x11aa], /* jongseong gieug + sieus = gieug-sieus */
		[0x11a811be,0x11fc], /* jongseong gieug + chieuch = gieug-chieuch */
		[0x11a811bf,0x11fd], /* jongseong gieug + kieuk = gieug-kieuk */
		[0x11a811c2,0x11fe], /* jongseong gieug + hieuh = gieug-hieuh */
		[0x11a811e7,0x11c4], /* jongseong gieug + sieus-gieug = gieug-sieus-gieug */
		[0x11aa11a8,0x11c4], /* jongseong gieug-sieus + gieug = gieug-sieus-gieug */
		[0x11ab11a8,0x11c5], /* jongseong nieun + gieug = nieun-gieug */
		[0x11ab11ab,0x11ff], /* jongseong nieun + nieun = ssangnieun */
		[0x11ab11ae,0x11c6], /* jongseong nieun + dieud = nieun-dieud */
		[0x11ab11af,0xd7cb], /* jongseong nieun + lieul = nieun-lieul */
		[0x11ab11ba,0x11c7], /* jongseong nieun + sieus = nieun-sieus */
		[0x11ab11bd,0x11ac], /* jongseong nieun + jieuj = nieun-jieuj */
		[0x11ab11be,0xd7cc], /* jongseong nieun + chieuch = nieun-chieuch */
		[0x11ab11c0,0x11c9], /* jongseong nieun + tieut = nieun-tieut */
		[0x11ab11c2,0x11ad], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11ab11eb,0x11c8], /* jongseong nieun + bansieus = nieun-bansieus */
		[0x11ae11a8,0x11ca], /* jongseong dieud + gieug = dieud-gieug */
		[0x11ae11ae,0xd7cd], /* jongseong dieud + dieud = ssangdieud */
		[0x11ae11af,0x11cb], /* jongseong dieud + lieul = dieud-lieul */
		[0x11ae11b8,0xd7cf], /* jongseong dieud + bieub = dieud-bieub */
		[0x11ae11ba,0xd7d0], /* jongseong dieud + sieus = dieud-sieus */
		[0x11ae11bd,0xd7d2], /* jongseong dieud + jieuj = dieud-jieuj */
		[0x11ae11be,0xd7d3], /* jongseong dieud + chieuch = dieud-chieuch */
		[0x11ae11c0,0xd7d4], /* jongseong dieud + tieut = dieud-tieut */
		[0x11ae11e7,0xd7d1], /* jongseong dieud + sieus-gieug = dieud-sieus-gieug */
		[0x11aed7cf,0xd7ce], /* jongseong dieud + dieud-bieub = ssangdieud-bieub */
		[0x11af11a8,0x11b0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11af11a9,0xd7d5], /* jongseong lieul + ssanggieug  = lieul-ssanggieug */
		[0x11af11aa,0x11cc], /* jongseong lieul + gieug-sieus  = lieul-gieug-sieus */
		[0x11af11ab,0x11cd], /* jongseong lieul + nieun = lieul-nieun */
		[0x11af11ae,0x11ce], /* jongseong lieul + dieud = lieul-dieud */
		[0x11af11af,0x11d0], /* jongseong lieul + lieul = ssanglieul */
		[0x11af11b7,0x11b1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11af11b8,0x11b2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11af11b9,0x11d3], /* jongseong lieul + bieub-sieus = lieul-bieub-sieus */
		[0x11af11ba,0x11b3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11af11bb,0x11d6], /* jongseong lieul + ssangsieus  = lieul-ssangsieus */
		[0x11af11bc,0xd7dd], /* jongseong lieul + ieung = gabyeounlieul */
		[0x11af11bf,0x11d8], /* jongseong lieul + kieuk = lieul-kieuk */
		[0x11af11c0,0x11b4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11af11c1,0x11b5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11af11c2,0x11b6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11af11d8,0xd7d7], /* jongseong lieul + lieul-kieuk = ssanglieul-kieuk */
		[0x11af11da,0x11d1], /* jongseong lieul + mieum-gieug = lieul-mieum-gieug */
		[0x11af11dd,0x11d2], /* jongseong lieul + mieum-sieus = lieul-mieum-sieus */
		[0x11af11e1,0xd7d8], /* jongseong lieul + mieum-hieuh = lieul-mieum-hieuh */
		[0x11af11e4,0xd7da], /* jongseong lieul + bieub-pieup = lieul-bieub-pieup */
		[0x11af11e5,0x11d4], /* jongseong lieul + bieub-hieuh = lieul-bieub-hieuh */
		[0x11af11e6,0x11d5], /* jongseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11af11eb,0x11d7], /* jongseong lieul + bansieus = lieul-bansieus */
		[0x11af11f0,0xd7db], /* jongseong lieul + yesieung = lieul-yesieung */
		[0x11af11f9,0x11d9], /* jongseong lieul + yeorinhieuh = lieul-yeorinhieuh */
		[0x11af11fe,0xd7d6], /* jongseong lieul + gieug-hieuh = lieul-gieug-hieuh */
		[0x11afd7e3,0xd7d9], /* jongseong lieul + bieub-dieud = lieul-bieub-dieud */
		[0x11b011a8,0xd7d5], /* jongseong lieul-gieug + gieug = lieul-ssanggieug */
		[0x11b011ba,0x11cc], /* jongseong lieul-gieug + sieus = lieul-gieug-sieus */
		[0x11b011c2,0xd7d6], /* jongseong lieul-gieug + hieuh = lieul-gieug-hieuh */
		[0x11b111a8,0x11d1], /* jongseong lieul-mieum + gieug = lieul-mieum-gieug */
		[0x11b111ba,0x11d2], /* jongseong lieul-mieum + sieus = lieul-mieum-sieus */
		[0x11b111c2,0xd7d8], /* jongseong lieul-mieum + hieuh = lieul-mieum-hieuh */
		[0x11b211ae,0xd7d9], /* jongseong lieul-bieub + dieud = lieul-bieub-dieud */
		[0x11b211ba,0x11d3], /* jongseong lieul-bieub + sieus = lieul-bieub-sieus */
		[0x11b211bc,0x11d5], /* jongseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0x11b211c1,0xd7da], /* jongseong lieul-bieub + pieup = lieul-bieub-pieup */
		[0x11b211c2,0x11d4], /* jongseong lieul-bieub + hieuh = lieul-bieub-hieuh */
		[0x11b311ba,0x11d6], /* jongseong lieul-sieus + sieus = lieul-ssangsieus */
		[0x11b711a8,0x11da], /* jongseong mieum + gieug = mieum-gieug */
		[0x11b711ab,0xd7de], /* jongseong mieum + nieun = mieum-nieun */
		[0x11b711af,0x11db], /* jongseong mieum + lieul = mieum-lieul */
		[0x11b711b7,0xd7e0], /* jongseong mieum + mieum = ssangmieum */
		[0x11b711b8,0x11dc], /* jongseong mieum + bieub = mieum-bieub */
		[0x11b711b9,0xd7e1], /* jongseong mieum + bieub-sieus = mieum-bieub-sieus */
		[0x11b711ba,0x11dd], /* jongseong mieum + sieus = mieum-sieus */
		[0x11b711bb,0x11de], /* jongseong mieum + ssangsieus  = mieum-ssangsieus */
		[0x11b711bc,0x11e2], /* jongseong mieum + ieung = gabyeounmieum */
		[0x11b711bd,0xd7e2], /* jongseong mieum + jieuj = mieum-jieuj */
		[0x11b711be,0x11e0], /* jongseong mieum + chieuch = mieum-chieuch */
		[0x11b711c2,0x11e1], /* jongseong mieum + hieuh = mieum-hieuh */
		[0x11b711eb,0x11df], /* jongseong mieum + bansieus = mieum-bansieus */
		[0x11b711ff,0xd7df], /* jongseong mieum + ssangnieun  = mieum-ssangnieun */
		[0x11b811ae,0xd7e3], /* jongseong bieub + dieud = bieub-dieud */
		[0x11b811af,0x11e3], /* jongseong bieub + lieul = bieub-lieul */
		[0x11b811b5,0xd7e4], /* jongseong bieub + lieul-pieup = bieub-lieul-pieup */
		[0x11b811b7,0xd7e5], /* jongseong bieub + mieum = bieub-mieum */
		[0x11b811b8,0xd7e6], /* jongseong bieub + bieub = ssangbieub */
		[0x11b811ba,0x11b9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11b811bc,0x11e6], /* jongseong bieub + ieung = gabyeounbieub */
		[0x11b811bd,0xd7e8], /* jongseong bieub + jieuj = bieub-jieuj */
		[0x11b811be,0xd7e9], /* jongseong bieub + chieuch = bieub-chieuch */
		[0x11b811c1,0x11e4], /* jongseong bieub + pieup = bieub-pieup */
		[0x11b811c2,0x11e5], /* jongseong bieub + hieuh = bieub-hieuh */
		[0x11b811e8,0xd7e7], /* jongseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11b911ae,0xd7e7], /* jongseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11ba11a8,0x11e7], /* jongseong sieus + gieug = sieus-gieug */
		[0x11ba11ae,0x11e8], /* jongseong sieus + dieud = sieus-dieud */
		[0x11ba11af,0x11e9], /* jongseong sieus + lieul = sieus-lieul */
		[0x11ba11b7,0xd7ea], /* jongseong sieus + mieum = sieus-mieum */
		[0x11ba11b8,0x11ea], /* jongseong sieus + bieub = sieus-bieub */
		[0x11ba11ba,0x11bb], /* jongseong sieus + sieus = ssangsieus */
		[0x11ba11bd,0xd7ef], /* jongseong sieus + jieuj = sieus-jieuj */
		[0x11ba11be,0xd7f0], /* jongseong sieus + chieuch = sieus-chieuch */
		[0x11ba11c0,0xd7f1], /* jongseong sieus + tieut = sieus-tieut */
		[0x11ba11c2,0xd7f2], /* jongseong sieus + hieuh = sieus-hieuh */
		[0x11ba11e6,0xd7eb], /* jongseong sieus + gabyeounbieub = sieus-gabyeounbieub */
		[0x11ba11e7,0xd7ec], /* jongseong sieus + sieus-gieug = ssangsieus-gieug */
		[0x11ba11e8,0xd7ed], /* jongseong sieus + sieus-dieud = ssangsieus-dieud */
		[0x11ba11eb,0xd7ee], /* jongseong sieus + bansieus = sieus-bansieus */
		[0x11bb11a8,0xd7ec], /* jongseong ssangsieus + gieug = ssangsieus-gieug */
		[0x11bb11ae,0xd7ed], /* jongseong ssangsieus + dieud = ssangsieus-dieud */
		[0x11bd11b8,0xd7f7], /* jongseong jieuj + bieub = jieuj-bieub */
		[0x11bd11bd,0xd7f9], /* jongseong jieuj + jieuj = ssangjieuj */
		[0x11bdd7e6,0xd7f8], /* jongseong jieuj + ssangbieub = jieuj-ssangbieub */
		[0x11c111b8,0x11f3], /* jongseong pieup + bieub = pieup-bieub */
		[0x11c111ba,0xd7fa], /* jongseong pieup + sieus = pieup-sieus */
		[0x11c111bc,0x11f4], /* jongseong pieup + ieung = gabyeounpieup */
		[0x11c111c0,0xd7fb], /* jongseong pieup + tieut = pieup-tieut */
		[0x11c211ab,0x11f5], /* jongseong hieuh + nieun = hieuh-nieun */
		[0x11c211af,0x11f6], /* jongseong hieuh + lieul = hieuh-lieul */
		[0x11c211b7,0x11f7], /* jongseong hieuh + mieum = hieuh-mieum */
		[0x11c211b8,0x11f8], /* jongseong hieuh + bieub = hieuh-bieub */
		[0x11ce11c2,0x11cf], /* jongseong lieul-dieud + hieuh = lieul-dieud-hieuh */
		[0x11d011bf,0xd7d7], /* jongseong ssanglieul + kieuk = ssanglieul-kieuk */
		[0x11d911c2,0xd7dc], /* jongseong lieul-yeorinhieuh + hieuh = lieul-yeorinhieuh-hieuh */
		[0x11dc11ba,0xd7e1], /* jongseong mieum-bieub + sieus = mieum-bieub-sieus */
		[0x11dd11ba,0x11de], /* jongseong mieum-sieus + sieus = mieum-ssangsieus */
		[0x11e311c1,0xd7e4], /* jongseong bieub-lieul + pieup = bieub-lieul-pieup */
		[0x11ea11bc,0xd7eb], /* jongseong sieus-bieub + ieung = sieus-gabyeounbieub */
		[0x11eb11b8,0xd7f3], /* jongseong bansieus + bieub = bansieus-bieub */
		[0x11eb11e6,0xd7f4], /* jongseong bansieus + gabyeounbieub = bansieus-gabyeounbieub */
		[0x11ec11a8,0x11ed], /* jongseong ieung-gieug + gieug = ieung-ssanggieug */
		[0x11f011a8,0x11ec], /* jongseong yesieung + gieug = yesieung-gieug */
		[0x11f011a9,0x11ed], /* jongseong yesieung + ssanggieug = yesieung-ssanggieug */
		[0x11f011b7,0xd7f5], /* jongseong yesieung + mieum = yesieung-mieum */
		[0x11f011ba,0x11f1], /* jongseong yesieung + sieus = yesieung-sieus */
		[0x11f011bf,0x11ef], /* jongseong yesieung + kieuk = yesieung-kieuk */
		[0x11f011c2,0xd7f6], /* jongseong yesieung + hieuh = yesieung-hieuh */
		[0x11f011eb,0x11f2], /* jongseong yesieung + bansieus = yesieung-bansieus */
		[0x11f011f0,0x11ee], /* jongseong yesieung + yesieung = ssangyesieung */
		[0xa9641100,0xa965], /* choseong lieul-gieug + gieug  = lieul-ssanggieug */
		[0xa9661103,0xa967], /* choseong lieul-dieud + dieud  = lieul-ssangdieud */
		[0xa9691107,0xa96a], /* choseong lieul-bieub + bieub  = lieul-ssangbieub */
		[0xa969110b,0xa96b], /* choseong lieul-bieub + ieung  = lieul-gabyeounbieub */
		[0xd7c51161,0x11a2], /* jungseong araea-a + a = ssangaraea */
		[0xd7cd11b8,0xd7ce], /* jongseong ssangdieud + bieub  = ssangdieud-bieub */
		[0xd7d011a8,0xd7d1], /* jongseong dieud-sieus + gieug = dieud-sieus-gieug */
		[0xd7de11ab,0xd7df], /* jongseong mieum-nieun + nieun = mieum-ssangnieun */
		[0xd7f311bc,0xd7f4], /* jongseong bansieus-bieub + ieung = bansieus-gabyeounbieub */
		[0xd7f711b8,0xd7f8]  /* jongseong jieuj-bieub + bieub = jieuj-ssangbieub */
	];

	K3_sun2014_combination_table = hangeul_combination_table_default.slice();
	K3_sun2014_combination_table.unshift(
		[0x11621162,0x1164], /* jungseong ae + ae = yae */
		[0x11BC11BC,0x11AE], /* jongseong ieung + ieung = dieud */
		[0x11BA11BA,0x11BD], /* jongseong sieus + sieus = jieuj */
		[0x11AF11AF,0x11BE], /* jongseong lieul + lieul = chieuch */
		[0x11BB11BB,0x11BE], /* jongseong ssangsieus + ssangsieus = chieuch */
		[0x11A911A8,0x11BF], /* jongseong ssanggieug + gieug = kieuk */
		[0x11AB11AB,0x11C0], /* jongseong nieun + nerun = tieut */
		[0x11B711B7,0x11C1], /* jongseong mieum + mieum = pieup */
		[0x11AB11BA,0x11AC], /* jongseong nieun + sieus = nieun-jieuj */
		[0x11B111B7,0x11B5], /* jongseong lieul-mieum + mieum = lieul-pieup */
		[0x11AF11AB,0x11B4]  /* jongseong lieul + nieun = lieul-tieut */
	);

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if(!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(searchElement, fromIndex) {
		var k;
    if(!this) throw new TypeError('"this" is null or not defined');
		var O=Object(this);
		var len=O.length >>> 0;
		if(len===0) return -1;
		var n= +fromIndex || 0;
		if(Math.abs(n) === Infinity) n=0;
    if(n>=len) return -1;
    k = Math.max(n>=0 ? n : len-Math.abs(n), 0);
    while(k<len) {
			var kValue;
			if (k in O && O[k] === searchElement) return k;
      k++;
    }
    return -1;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
if('ab'.substr(-1) != 'b') {
	String.prototype.substr = function(substr) {
		return function(start, length) {
			if(start<0) start=this.length+start;
			return substr.call(this, start, length);
		}
	}(String.prototype.substr);
}

basic_layouts_info();
basic_layouts_info_push();
browser_detect();
ohiStart();
url_query();

//ohiStatusBar(0);	// 보람줄(상태 표시줄) 감추기
//ohiChange_sign_ext_enable(0);	// 세벌식 자판의 기호 확장 기능 끄기