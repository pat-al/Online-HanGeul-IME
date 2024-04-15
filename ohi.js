/** Modified Version (http://ohi.pat.im)

 * Modifier : Pat-Al <pat@pat.im> (https://pat.im/910)
 * Last Update : 2024/04/16

 * Added support for more keyboard layouts by custom keyboard layout tables.
 * Added support for Dvorak and Colemak and Workman keyboard layouts.
 * Added support for Firefox 12 and higher version.
 * Added the on-screen keyboard function.
 * Added support for old Hangeul combination by Syllable-Initial-Peak-Final Encoding Approach.
 * Added support for multi-key input (moachigi).

**/

/** Original Version (copy - http://ohi.pat.im/org)

 * Author : Ho-Seok Ee <hsee@korea.ac.kr>
 * Release: 2006/07/18
 * Update : 2011/01/22

 Copyright (C) Ho-Seok Ee <hsee@korea.ac.kr>. All rights reserved.

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License as
  published by the Free Software Foundation; either version 2 of
  the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  The license can be found at http://www.gnu.org/licenses/gpl.txt.

**/

var default_En_type = 'QWERTY';
var default_Ko_type = 'Sin3-P2';
var default_ohi_KBD_type = 'QWERTY';
var default_ohi_KE = 'Ko';

var En_type; // 영문 자판 종류 (ohiChange 함수로 바꿈)
var Ko_type; // 한글 자판 종류 (ohiChange 함수로 바꿈)
var ohi_KBD_type; // 기준 자판 종류 (QWERTY/QWERTZ/AZERTY, ohiChange_KBD_type 함수로 바꿈)
var ohi_KE; // 한글·영문 상태 (Ko: 한글, En: 영문) (ohiChange_KE 함수로 바꿈)

function option() {
	var enable_double_final_ext; // 겹받침 확장 배열 쓰기 --> ohiChange_enable_double_final_ext() 함수로 값을 바꿈
	var enable_sign_ext; // 세벌식 자판의 기호 확장 배열 쓰기 --> ohiChange_enable_sign_ext() 함수로 값을 바꿈
	var force_normal_typing; // 모아치기 자판을 이어치기(일반 타자법)로 치게 하기
	var only_NFD_hangeul_encoding; // 한글을 첫가끝 조합형으로만 넣기 (완성형으로 넣지 않기)
	var enable_old_hangeul_input; // 옛한글 조합하기
	var use_hangeul_compatibility_jamo_when_entering_old_hangeul; // 옛한글을 조합할 때 낱자를 호환 자모로 나타냄
	var enable_Sin3_diphthong_key; // 0이면 신세벌식 자판에서 오른쪽 글쇠로 홀소리를 넣을 수 없음
	var phonemic_writing; // 풀어쓰기
	var phonemic_writing_in_single_phoneme; // 풀어쓰기: 겹낱자를 홑낱자로 풀기
	var phonemic_writing_in_halfwidth_letter; // 풀어쓰기: 한글 낱자를 반각 문자로 넣기
	var phonemic_writing_initial_ieung_ellipsis; // 풀어쓰기: 첫소리 ㅇ 넣지 않기
	var phonemic_writing_adding_space_every_syllable_end; // 풀어쓰기: 낱내자(음절자)마다 빈칸 넣기
	var phonemic_writing_directly; // 풀어쓰기: 조합하지 않고 낱자를 바로 넣기
	var abbreviation; // 이어치기 자판에서 줄임말 기능 쓰기
	var convenience_combination; // 입력 편의를 높이는 추가 낱자 조합 쓰기
	var sunalae; // 두벌식 자판 순아래 조합

	var show_layout; // 1: 자판 배열표 보이기 / 0: 자판 배열표 감추기 --> show_keyboard_layout() 함수로 값을 바꿈
	var turn_off_OHI; // OHI 입력 기능 끄기 (끄더라도 화상 자판은 그대로 쓸 수 있음)
	var square_layout; // 화상 배열표를 네모지게 나타내기
}

function converting_option() {
	var NCR_text; // HTML 문자 참조 보기
	var convert_only_NFD_hangeul_encoding_in_NCR_text; // 첫가끝 조합형으로 들어간 한글만 바꾸기

	var direct_typing_text; // 쿼티 배열 기준으로 글쇠값 바꾸기
	var extended_hangeul_layout_reflection; // 한글 확장 배열 반영하기
	var combination_table_reflection; // 낱자 조합 규칙 반영하기
	var combination_table_reflection_priority; // 겹낱자까지 낱자 조합 규칙을 우선 반영하기
	var combination_table_reflection_ggeut_ss_exception; // 낱자 조합 규칙을 적용하더라도 받침 ㅆ은 조합해서 넣지 않는 것으로 셈하기
}

function initialize_options() {
	var default_enable_double_final_ext = 0;
	var default_enable_sign_ext = 1;
	var default_force_normal_typing = 0;
	var default_only_NFD_hangeul_encoding = 0;
	var default_enable_old_hangeul_input = 0;
	var default_use_hangeul_compatibility_jamo_when_entering_old_hangeul = 1;
	var default_enable_Sin3_diphthong_key = 1;
	var default_enable_Sin3_adding_cheos_with_shift_key = 0;
	var default_phonemic_writing = 0;
	var default_phonemic_writing_in_single_phoneme = 1;
	var default_phonemic_writing_in_halfwidth_letter = 0;
	var default_phonemic_writing_initial_ieung_ellipsis = 1;
	var default_phonemic_writing_adding_space_every_syllable_end = 0;
	var default_phonemic_writing_directly = 0;
	var default_phonemic_writing_NFD_ggeut_to_cheos = 1;
	var default_abbreviation = 0;
	var default_convenience_combination = 1;
	var default_sunalae = 0;
	var default_square_layout = 0;

	// En_type, Ko_type 등이 미리 지정되어 있으면 지정된 것으로 초기값을 바꿈
	if(typeof En_type != 'undefined') default_En_type = En_type; else En_type = default_En_type;
	if(typeof Ko_type != 'undefined') default_Ko_type = Ko_type; else Ko_type = default_Ko_type;
	if(typeof ohi_KBD_type != 'undefined') default_ohi_KBD_type = ohi_KBD_type; else ohi_KBD_type = default_ohi_KBD_type;
	if(typeof ohi_KE != 'undefined') default_ohi_KE = ohi_KE; else ohi_KE = default_ohi_KE;

	if(typeof enable_sign_ext != 'undefined') default_enable_sign_ext = enable_sign_ext;
	if(typeof force_normal_typing != 'undefined') default_force_normal_typing = force_normal_typing;
	if(typeof phonemic_writing != 'undefined') default_phonemic_writing = phonemic_writing;
	if(typeof phonemic_writing_in_single_phoneme != 'undefined') default_phonemic_writing_in_single_phoneme = phonemic_writing_in_single_phoneme;
	if(typeof phonemic_writing_in_halfwidth_letter != 'undefined') default_phonemic_writing_in_halfwidth_letter = phonemic_writing_in_halfwidth_letter;
	if(typeof phonemic_writing_initial_ieung_ellipsis != 'undefined') default_phonemic_writing_initial_ieung_ellipsis = phonemic_writing_initial_ieung_ellipsis;
	if(typeof phonemic_writing_adding_space_every_syllable_end != 'undefined') default_phonemic_writing_adding_space_every_syllable_end = phonemic_writing_adding_space_every_syllable_end;
	if(typeof phonemic_writing_directly != 'undefined') default_phonemic_writing_directly = phonemic_writing_directly;
	if(typeof square_layout != 'undefined') default_square_layout = square_layout;

	option = new option();
	option.enable_double_final_ext = default_enable_double_final_ext;
	option.enable_sign_ext = default_enable_sign_ext;
	option.force_normal_typing = default_force_normal_typing;
	option.only_NFD_hangeul_encoding = default_only_NFD_hangeul_encoding;
	option.enable_old_hangeul_input = default_enable_old_hangeul_input;
	option.use_hangeul_compatibility_jamo_when_entering_old_hangeul = default_use_hangeul_compatibility_jamo_when_entering_old_hangeul;
	option.enable_Sin3_diphthong_key = default_enable_Sin3_diphthong_key;
	option.enable_Sin3_adding_cheos_with_shift_key = default_enable_Sin3_adding_cheos_with_shift_key;
	option.phonemic_writing = default_phonemic_writing;
	option.phonemic_writing_in_single_phoneme = default_phonemic_writing_in_single_phoneme;
	option.phonemic_writing_in_halfwidth_letter = default_phonemic_writing_in_halfwidth_letter;
	option.phonemic_writing_initial_ieung_ellipsis = default_phonemic_writing_initial_ieung_ellipsis;
	option.phonemic_writing_adding_space_every_syllable_end = default_phonemic_writing_adding_space_every_syllable_end;
	option.phonemic_writing_directly = default_phonemic_writing_directly;
	option.phonemic_writing_NFD_ggeut_to_cheos = default_phonemic_writing_NFD_ggeut_to_cheos;
	option.abbreviation = default_abbreviation;
	option.convenience_combination = default_convenience_combination;
	option.sunalae = default_sunalae;

	option.turn_off_OHI = 0;
	option.show_layout = 1;
	option.square_layout = default_square_layout;

	converting_option = new converting_option();
	converting_option.NCR_text = 0;
	converting_option.convert_only_NFD_hangeul_encoding_in_NCR_text = 0;	

	converting_option.direct_typing_text = 0;	
	converting_option.extended_hangeul_layout_reflection = 0;
	converting_option.combination_table_reflection = 1;
	converting_option.combination_table_reflection_priority = 0;
	converting_option.combination_table_reflection_ggeut_ss_exception = 1;
}

initialize_options();

var ohiQ = [0,0,0,0,0,0,0,0,0]; // 조합하고 있는 완성형 한글 낱내자의 낱자들을 담는 배열 [첫,첫,첫,가,가,가,끝,끝,끝]
var ohiRQ = [0,0,0,0,0,0,0,0,0]; // 조합하고 있는 완성형 한글 낱내자의 낱자들의 추가 정보를 담는 배열 (보기: 겹홀소리 조합용 홀소리인지, 받침 붙는 홀소리인지)
var prev_ohiQ = [];
var prev_ohiRQ = [];
var backup_ohiQ = []; // 완성형 한글 낱내자를 옛한글 상태로 바꿀 때에 복사해 두는 배열
var backup_ohiRQ = [];
var backspacing_state = 0; // 뒷걸음쇠 처리를 하고 있는지를 알리는 상태 변수 (ohiInsert 함수에 알림)
var prev_cursor_position = -1; // 앞선 상태의 가리키개 자리 (모아치기 자판이나 줄임말 기능으로 넣은 글을 한꺼번에 지울 때 쓰임)
var backup_prev_cursor_position = -1; // 앞선 상태의 가리키개 자리 (모아치기 자판이나 줄임말 기능으로 넣은 글을 한꺼번에 지울 때 쓰임)
var abbreviation_processing_state = 0; // 줄임말 처리를 하고 있는지를 나타내는 변수

var ohiStatus = document.createElement('div');
var ohiTimeout = 0;

var sign_ext_state = 0; // 기호 확장 배열을 쓰고 있는지를 나타냄
var phoneme_input_state = 0 // 풀어쓰기로 넣고 있는지를 나타냄 (ohiInsert 함수에 알림)

var onkeypress_skip = 0; // ohiKeypress() 처리를 건너뛰기 (보기: 오른쪽 숫자판을 눌렀을 때)
var onkeyup_skip = 0; // ohiKeyup() 처리를 건너뛰기

var ohiHangeul3_HanExtKey = 0; // 한글 확장 글쇠가 눌린 상태
var shift_lock = 0; // 한글 타자기 받침 글쇠 눌린 상태
var shift_click = 0; // 배열표에서 윗글쇠 누른 상태
var shiftlock_click = 0; // 배열표에서 Shift Lock을 누른 상태

var browser = '', browser_ver = 0, nu = navigator.userAgent;
var dkey, ukey;

var pressed_keys = []; // 모아친 글쇠들의 값
var prev_pressed_keys = []; // 바로 앞에 모아친 글쇠들의 값
var prev_class = []; // 바로 앞에 모아친 줄임말의 종류(품사 등)
var pressing_keys = 0; // 눌려 있는 글쇠 수
var double_multikey_abbreviated_state = 0; // 줄여넣기를 두 차례 잇달아 했는지를 나타냄

function NFD_stack() { // 먼저 넣은 낱자 정보가 배열의 뒤에 들어가고, 마지막으로 들어온 낱자가 배열의 맨 앞에 들어감
	var phoneme = []; // 글쇠로 친 첫가끝 낱자들을 겹낱자로 조합하지 않은 채로 담음
	var phoneme_R = []; // 조합하는 첫가끝 낱자들의 추가 정보를 담음 (보기: 겹홀소리 조합용 홀소리인지, 받침 붙는 홀소리인지)
	var virtual_phoneme = []; // 가상 낱자
	var combined_phoneme = []; // 조합한 첫가끝 낱자들을 담음 (첫+가 또는 첫+가+끝)
}

function initialize_NFD_stack() {
	NFD_stack.phoneme = [];
	NFD_stack.phoneme_R = [];
	NFD_stack.combined_phoneme = [];
}

initialize_NFD_stack();

var ohi_cheos, ohi_ga, ohi_ggeut, ohi_hotbadchim; // OHI에서 쓰는 요즘한글 첫·가·끝 낱자
var unicode_NFD_hangeul_phoneme = [], unicode_cheos = [], unicode_ga = [], unicode_ggeut=[]; // 유니코드 한글 낱자, 유니코드 한글 첫·가·끝 낱자
var unicode_modern_hangeul_phoneme= [], unicode_modern_cheos = [], unicode_modern_ga = [], unicode_modern_ggeut = []; // 유니코드 조합형 한글 낱자, 유니코드 조합형 요즘한글 첫·가·끝 낱자
var compatibility_hangeul_phoneme = [], compatibility_modern_cheos = [], compatibility_ga = [], compatibility_ggeut = []; // 유니코드 한글 호환 자모
var halfwidth_cheos = [], halfwidth_ga = [], halfwidth_ggeut= [];

var current_layout_info=[];

function browser_detect() {
	var trident=navigator.userAgent.match(/Trident\/(\d\.\d)/i);
	var trident_ver = trident===undefined || !trident ? 0 : parseFloat(trident[1]);
	if(nu.indexOf('MSIE')>=0 || trident_ver>=7) {
		browser = "MSIE";
		if(trident_ver<7) browser_ver = parseFloat(nu.substring(nu.indexOf("MSIE ")+5));
		else if(trident_ver==7) browser_ver=11;
	}
	else if(nu.indexOf('Firefox')>=0) {
		browser = "Firefox";
		browser_ver = parseFloat(nu.substring(nu.indexOf('Firefox/')+8));
	}
	else if(nu.indexOf('Chrome')>=0) {
		browser = "Chrome";
		browser_ver = parseFloat(nu.substring(nu.indexOf('Chrome/')+7));
	}
}

function ohiBackspace(f) { // backspace 동작
	if(document.selection && browser=='MSIE' && browser_ver<9) {
		var s=document.selection.createRange();
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
			range.moveStart('character', pos-length);
			range.select();
			range.text = '';

			var scrollTop = f.scrollTop, scrollLeft = f.scrollLeft, selectionStart = f.selectionStart;
			var endText = f.value.substr(f.selectionEnd,f.value.length);
			f.value = f.value.substr(0,selectionStart)+String.fromCharCode(c);
			var scrollHeight = f.scrollHeight, scrollWidth = f.scrollWidth;
			f.value += endText;
			if(c==13 && browser=='MSIE' && browser_ver==11 && !endText.length) {
			// IE 11에서 뒤에 아무 문자 없을 때 줄을 바꾸면 한글 조합이 안 됨
				f.value += String.fromCharCode(32);
			}
			f.scrollTop = (scrollTop > scrollHeight-f.clientHeight) ? scrollTop : scrollHeight-f.clientHeight;
			f.scrollLeft = (scrollLeft > scrollWidth-f.clientWidth) ? scrollLeft : scrollWidth-f.clientWidth;
			f.setSelectionRange(m || c<32 ? selectionStart:selectionStart+1, selectionStart+1);
		}
	}
	else {
		var bs_start = f.selectionStart;
		var bs_end = f.selectionEnd;
		if(!bs_end) return;
		if(bs_start == bs_end) {
			if(!NFD_stack.phoneme.length && prev_cursor_position<0) { // 첫가끝 조합 상태가 아닐 때
			// 첫가끝 조합형으로 넣은 한글을 낱내자 단위로 지울 수 있게 낱내자의 낱자, 채움 문자, 방점 수를 셈
				var i=0, ggeut=0;
				do {
					var code = f.value.substr(bs_start-i-1,1).charCodeAt(0);
					if(!i && unicode_ggeut.indexOf(code)>=0) {ggeut=1; continue;}
					if(i-ggeut==0 && (code==0x1160 || unicode_ga.indexOf(code)>=0)) continue;
					if(i-ggeut==0 && (code==0x1160 || unicode_ga.indexOf(code)>=0)) continue;
					if(i-ggeut==1 && (code==0x115F || unicode_cheos.indexOf(code)>=0)) continue;
					break;
				} while(bs_start-(++i));
			}
			bs_start -= i?i:1;
		}
		f.value = f.value.substr(0,bs_start)+f.value.substr(bs_end);
		f.selectionStart = f.selectionEnd = bs_start;
	}
	ohiInsert(f,0,0);
}

function ohiHangeul_moa_backspace(f,e) {
	if(f.selectionEnd) {
		if(prev_cursor_position>=0 && f.selectionEnd > prev_cursor_position) {
			initialize_NFD_stack();
			while(f.selectionEnd && f.selectionEnd > prev_cursor_position) {if(!ohiHangeul_backspace(f,e)) ohiBackspace(f);}
		}
		else if(!ohiHangeul_backspace(f,e)) ohiBackspace(f);
	}
	prev_cursor_position = -1;
	prev_class = [];
	esc_ext_state();
	return true;
}

function ohiCombinedCharacter_backspace(f,e) {
	if(e.preventDefault) e.preventDefault();
	if(character_combination_queue.length) {
		ohiBackspace(f);
		character_combination_queue.pop();
		if(character_combination_queue.length) {
			ohiInput(f,0,character_combination_queue[character_combination_queue.length-1]);
			ohiSelection(f,1);
		}
		return true;
	}
	return false;
}

function ohiHangeul_backspace(f,e) {
	var i,j;
	var KE=ohi_KE;

	if(e.preventDefault) e.preventDefault();

	// Backspace (기호 확장 배열 상태일 때)
	if(option.enable_sign_ext && sign_ext_state) {
		if(Ko_type.substr(0,4)=='Sin3') ohiBackspace(f);
		esc_ext_state();
		return true;
	}

	if(ohiQ[1] || ohiQ[4] || ohiQ[0]&&ohiQ[3]) { // Backspace (요즘한글 조합 상태)
		for(i=8; !ohiQ[i];) i--;
		backspacing_state=1;
		ohiInsert(f,ohiQ[i]=0,ohiQ);
		backspacing_state=0;
		ohiRQ[i]=0;
		esc_ext_state();
		return true;
	}

	if(KE=='Ko' && NFD_stack.phoneme.length) {	// 첫가끝 조합 상태
		if(!ohiHangeul3_HanExtKey) {
			ohiBackspace(f);
			if(browser=="MSIE" && browser_ver<9 ) { // IE ~8
				i=NFD_stack.combined_phoneme.length-1; while(i--) ohiBackspace(f);
			}
			var temp_NFD_stack_phoneme = NFD_stack.phoneme.slice();
			var temp_NFD_stack_phoneme_R = NFD_stack.phoneme_R.slice();
			initialize_NFD_stack();
			for(j=0, i=temp_NFD_stack_phoneme.length-1; i>=1; --i)
				if(unicode_NFD_hangeul_filler.indexOf(temp_NFD_stack_phoneme[i])>=0) ++j;
			if(j!=temp_NFD_stack_phoneme.length-1) { // 채움 문자만 남지 않았으면
				for(i=temp_NFD_stack_phoneme.length-1; i>=1; --i) {
					NFD_hangeul_input(f,0,(temp_NFD_stack_phoneme_R[i] ? -1:1)*temp_NFD_stack_phoneme[i]);
					NFD_stack.phoneme_R[i-1] = temp_NFD_stack_phoneme_R[i];
				}
			}
		}

		if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) {
		// 아래아 등이 지워졌을 때 첫가끝 코드 조합 상태에서 요즘한글(완성형) 코드로 바꾸기
			for(i=0;i<NFD_stack.combined_phoneme.length;++i) {
				if(unicode_modern_hangeul_phoneme.indexOf(NFD_stack.combined_phoneme[i])<0 && unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[i])<0) break;
			}
			if(i==NFD_stack.combined_phoneme.length) {	// 첫가끝 방식으로 조합하던 낱자들을 지우고 요즘한글 완성형으로 넣기
				ohiBackspace(f);
				if(browser=="MSIE" && browser_ver<9 ) {
					i=NFD_stack.combined_phoneme.length-1;
					while(i--) ohiBackspace(f);
				}
				initialize_NFD_stack();
				ohiQ = backup_ohiQ.slice();
				ohiRQ = backup_ohiRQ.slice();
				for(i=9;i>=0;--i) {
					if(ohiQ[i]) {
						ohiQ[i]=0;
						ohiRQ[i]=0;
						break;
					}
				}
				ohiInsert(f,0,ohiQ);
			}
		}

		esc_ext_state();
		return true;
	}

	return false;
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

function ohiInsert(f,m,q) { // Insert
// q가 숫자이면 그 부호값에 맞는 유니코드 부호를 넣음
// q가 배열(ohiQ)이면 유니코드 완성형 한글로 넣음

	var a,b,c=q,d=m?1:0,g=0,h=0,i=0,j=0,k=0,u=0;
	var character_combination_table = find_character_combination_table();

	if(!sign_ext_state && c && typeof c == 'number' && unicode_NFD_hangeul_phoneme.indexOf(c)<0 && character_combination_table.length) { // 한글이 아닌 문자를 조합하여 넣기
		complete_hangeul_syllable(f);
		a = character_combination_table.filter(function(e) {return e[0]==c});
		b = character_combination_queue.length ? character_combination_table.filter(function(e) {return e[1]==c && e[0]==character_combination_queue[character_combination_queue.length-1]}) : [];

		if(character_combination_queue.length) {
			if(b.length && c==b[0][1] && b[0][0]==character_combination_queue[character_combination_queue.length-1]) {
				ohiSelection(f,0);
				ohiBackspace(f);
				ohiInput(f,0,b[0][2]);
				character_combination_queue.push(b[0][2]);
				ohiSelection(f,1);
				return;
			}
			else { // 조합이 더 이어지지 않을 때
				character_combination_queue = [];
				ohiSelection(f,0);
			}
		}

		if(!character_combination_queue.length && a.length && c==a[0][0]) {
			ohiInput(f,0,c);
			ohiSelection(f,1);
			character_combination_queue.push(c);
			return;
		}
	}

	if(!q) {
		ohiQ = ohiRQ = prev_ohiQ = prev_ohiRQ = [0,0,0,0,0,0,0,0,0];
		return true;
	}
	
	if(q.length!=9) ohiQ = ohiRQ = [0,0,0,0,0,0,0,0,0];
	else {
		for(a=0;a<9;++a) {
			if(q[a]>0) ++h;
			if(unicode_NFD_hangeul_phoneme.indexOf(ohiQ[a])>=0) ++u;
		}

		if(!u) { // 요즘한글 자판으로 요즘낱자 처리 (완성형)
			var m=m||'0,0,0,0,0,0,0,0,0', i=q[0]+q[1]+q[2], j=q[3]+q[4]+q[5], k=q[6]+q[7]+q[8];
			c=i&&j?0xac00+(i-(i<3?1:i<5?2:i<10?4:i<20?11:12))*588+(j-31)*28+k-(k<8?0:k<19?1:k<25?2:3):0x3130+(i||j||k);
		}
		else if(!NFD_stack.phoneme.length && !is_old_hangeul_input()) {
		// 요즘한글 자판을 쓰는데 옛낱자가 들어오면 첫가끝 조합형으로 바꿈
			backup_ohiQ = ohiQ.slice();	
			backup_ohiRQ = ohiRQ.slice();
			if(h>1) ohiBackspace(f);
			for(a=0;a<3;++a) {
				c=backup_ohiQ[a*3]+backup_ohiQ[a*3+1]+backup_ohiQ[a*3+2];
				if(!c) continue;
				if(c<158) c+=!a?127:a==1?35:0;
				c=convert_into_unicode_hangeul_phoneme(c);
				if(c) NFD_hangeul_input(f,0,c);
			}
			return;
		}
	}

	if((is_phonemic_writing_input() || option.only_NFD_hangeul_encoding && !is_old_hangeul_input()) && !phoneme_input_state && !backspacing_state) {
	// 풀어쓰기를 하거나 요즘한글 자판으로 첫가끝 낱자로만 조합할 때
		if(is_phonemic_writing_input() && option.phonemic_writing_directly && !option.only_NFD_hangeul_encoding && i+j+k) {
		// 낱자 바로 풀기
			if(option.phonemic_writing_in_halfwidth_letter && !is_old_hangeul_input()) c=convert_into_halfwidth_hangeul_letter(c);
			else c=convert_into_compatibility_hangeul_letter(c);
			ohiInsert(f,0,c);
			return;
		}
		else {
			for(a=0;a<9;++a) if(prev_ohiQ[a]>0) ++g;
			if(g>0 && h<2 || d) {
				phoneme_input_state=1;
				ohiQ = prev_ohiQ.slice();
				if(ohiQ[0]+ohiQ[3]+ohiQ[6])	{
					// 두벌식 자판의 도깨비불 상태에서 홀소리가 들어와 앞 낱내의 끝이 가려짐 → 앞 낱내의 받침에 들어간 닿소리를 뒤 낱내의 첫소리로 넘기고 앞 낱내의 조합을 끊음
					if(Ko_type.substr(0,2)=='2-' && h&&i&&j)
						for(a=8;a>=0;--a)	if(ohiQ[a]) {	ohiQ[a]=0; break;	}
					complete_hangeul_syllable(f);
					// 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
					if(is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end && h && i+j+k) ohiInsert(f,0,32);
				}
				ohiQ=[h&&i?i:0,0,0,h&&j?j:0,0,0,h&&k?k:0,0,0];
				phoneme_input_state=0;
			}
		}
	}

	if(is_moachigi_input() && NFD_stack.phoneme.length && unicode_NFD_hangeul_code.indexOf(c)<0) complete_hangeul_syllable(f);
	
	ohiInput(f,m,c);

	prev_ohiQ = ohiQ.slice();
	prev_ohiRQ = ohiRQ.slice();
}

function ohiInput(f,m,c) {
	if(document.selection && browser=="MSIE" && browser_ver<10 ) { // IE ~9
		var s=document.selection.createRange(), t=s.text;
		if(t && document.selection.clear) document.selection.clear();
		s.text=(m=='0,0,0,0,0,0,0,0,0'||c&&t.length>1?'':t.substr(0,t.length))+String.fromCharCode(c);
		if(!c || !m || s.moveStart('character',-1)) s.select();
	}
	else if(f.selectionEnd+1) {
		if(m!='0,0,0,0,0,0,0,0,0' && f.selectionEnd-f.selectionStart==1) f.selectionStart++;
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
			if(c==13 && browser=='MSIE' && browser_ver==11 && !endText.length) f.value += String.fromCharCode(32); // IE 11에서 뒤에 아무 문자 없을 때 줄을 바꾸면 한글 조합이 안 됨
			f.scrollTop = (scrollTop > scrollHeight-f.clientHeight) ? scrollTop : scrollHeight-f.clientHeight;
			f.scrollLeft = (scrollLeft > scrollWidth-f.clientWidth) ? scrollLeft : scrollWidth-f.clientWidth;
			f.setSelectionRange(m || c<32 ? selectionStart:selectionStart+1, selectionStart+1);
		}
	}
}

function ohiSelection(f,length) {
	if(document.selection && browser=="MSIE" && browser_ver<9) { // IE ~8
	}
	else if(f.selectionEnd+1) {
		var e=document.createEvent('KeyboardEvent');
		if(e.initKeyEvent && !(browser=="Firefox" && browser_ver>=12 ) && browser!="Chrome") f.selectionStart-=length; // Gecko
		else f.selectionStart=f.selectionEnd-length; // Firefox 12~, Chrome
	}
}

function esc_ext_state() { // 기호 확장 배열 또는 한글 확장 배열을 상태에서 기본 배열을 쓰는 상태로 바꿈
	var KE = ohi_KE;
	if(ohiHangeul3_HanExtKey || sign_ext_state) {
		if(KE=='Ko') {
			sign_ext_state=0;
			ohiHangeul3_HanExtKey=0;
			show_keyboard_layout(Ko_type);
		}
	}
	sign_ext_state=0;
	ohiHangeul3_HanExtKey=0;
	character_combination_queue = [];
}

function change_syllable_from_NFC_to_NFD(f) { // 완성형(NFC) → 첫가끝(NFD) (조합을 막 끝낸 낱내자를 바꿈)
	var _ohiQ = ohiQ.slice(), _ohiRQ = ohiRQ.slice();
	ohiBackspace(f);

	i=ohi_cheos.indexOf(_ohiQ[0]+_ohiQ[1]+_ohiQ[2]+127);
	if(i>=0 && _ohiQ[0]+_ohiQ[1]+_ohiQ[2]) ohiInsert(f,0,unicode_cheos[i]);
	else ohiInput(f,0,0x115F);

	i=ohi_ga.indexOf(_ohiQ[3]+_ohiQ[4]+_ohiQ[5]+35);
	if(i>=0 && _ohiQ[3]+_ohiQ[4]+_ohiQ[5]) ohiInsert(f,0,unicode_ga[i]);
	else ohiInput(f,0,0x1160);

	i=ohi_ggeut.indexOf(_ohiQ[6]+_ohiQ[7]+_ohiQ[8]);
	if(i>=0 && _ohiQ[6]+_ohiQ[7]+_ohiQ[8]) ohiInsert(f,0,unicode_ggeut[i]);
}

function change_syllable_from_NFD_to_NFC(f) { // 첫가끝(NFD) → 완성형(NFC) (조합을 막 끝낸 낱내자를 바꿈)
	var i,j,k;

	if(unicode_modern_cheos.indexOf(NFD_stack.combined_phoneme[1])>=0 && unicode_modern_ga.indexOf(NFD_stack.combined_phoneme[0])>=0
	 || unicode_modern_cheos.indexOf(NFD_stack.combined_phoneme[2])>=0 && unicode_modern_ga.indexOf(NFD_stack.combined_phoneme[1])>=0 && unicode_modern_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0) {
	// 요즘낱자 첫+가 또는 첫+가+끝
		i=NFD_stack.combined_phoneme.length;
		for(j=0;j<i;++j) ohiBackspace(f);
		ohiQ = [NFD_stack.combined_phoneme[i-1]-0x1100+11+(NFD_stack.combined_phoneme[i-1]>0x1108 ? 1:0),0,0,
			NFD_stack.combined_phoneme[i-2]-0x1161+31,0,0,
			i==3 ? (NFD_stack.combined_phoneme[0]-0x11A8+1+(NFD_stack.combined_phoneme[0]>0x11AE ? 1:0)+(NFD_stack.combined_phoneme[0]>0x11B8 ? 1:0)+(NFD_stack.combined_phoneme[0]>0x11BD ? 1:0)):0,0,0
		];
		ohiInsert(f,0,ohiQ);
		if(typeof f.selectionEnd != 'undefined') f.selectionStart = f.selectionEnd;
		return;
	}

	if(!is_old_hangeul_input() && NFD_stack.combined_phoneme.length==2 && (unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0 ^ unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[0])>=0)) {
	// 옛한글 자판이 아니면서 아래아를 넣는 요즘한글 자판을 쓸 때에 아래아와 아래애를 호환 자모로 바꿈
		var NFD_to_compatibility_phoneme_list = [
			0x119E, 0x318D,	// 아래아(ㆍ)
			0x11A1, 0x318E	// 아래애(ㆎ)
		];

		i = NFD_to_compatibility_phoneme_list.indexOf(unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0 ? NFD_stack.combined_phoneme[0] : NFD_stack.combined_phoneme[1]);
		if(i>=0) {
		// 호환 자모로 바꿈
			for(j=0;j<NFD_stack.combined_phoneme.length;++j) ohiBackspace(f);
			ohiInsert(f,0,NFD_to_compatibility_phoneme_list[i+1]);
		}
	}
	else if(option.use_hangeul_compatibility_jamo_when_entering_old_hangeul && is_old_hangeul_input() && !option.only_NFD_hangeul_encoding
	 && ( unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[2])>=0 && unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0	&& unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0
	 || unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 
	 || unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 && unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[1])>=0)
	) {
	// 옛한글을 조합하는 때에 따로 들어간 낱자를 호환 자모로 바꿈
		compatibility_jamo = compatibility_cheos.concat(compatibility_hol, compatibility_dah);
		compatibility_jamo_to_NFD_phonemes = compatibility_cheos_to_NFD_hotdah.concat(compatibility_hol_to_NFD_hothol, compatibility_dah_to_NFD_hotbadchim);
		for(j=0;j<compatibility_jamo_to_NFD_phonemes.length;++j) {
			i = compatibility_jamo_to_NFD_phonemes[j][0];
			for(k=1;k<compatibility_jamo_to_NFD_phonemes[j].length;++k) {
				i = combine_unicode_NFD_hangeul_phoneme(i,compatibility_jamo_to_NFD_phonemes[j][k]);
			}
			if(i==NFD_stack.combined_phoneme[0] || unicode_NFD_hangeul_filler.indexOf(NFD_stack.combined_phoneme[0])>=0 && i==NFD_stack.combined_phoneme[1]) break;
		}
		if(j!=compatibility_jamo_to_NFD_phonemes.length) {
			for(k=0;k<NFD_stack.combined_phoneme.length;++k) ohiBackspace(f);
			ohiInput(f,0,compatibility_jamo[j]);
		}
	}
}

function combine_unicode_NFD_hangeul_phoneme(c1,c2) { // 유니코드 한글 낱자 조합하기
	var i;
	var combination_table;
	var combined_phoneme;
	var layout_info = find_current_layout_info();

	if(typeof current_layout_info.moachigi_hangeul_combination_table != 'undefined' && typeof current_layout_info.hangeul_combination_table == 'undefined') {
	// 모아치기 자판을 이어치기 방식으로 쓸 때
		combination_table = current_layout_info.moachigi_hangeul_combination_table;
		for(i=0; i<combination_table.length; ++i) {
			if(combination_table[i].phonemes.length!=2) continue;
			if(combination_table[i].phonemes.indexOf(c1)<0 || combination_table[i].phonemes.indexOf(c2)<0) continue;
			if(c1==c2 && combination_table[i].phonemes[0]!=combination_table[i].phonemes[1]) continue;
			combined_phoneme=combination_table[i].char;
			break;
		}

		if(i==combination_table.length) return 0;
		return combined_phoneme;
	}
	else {
	// 이어치기 자판
		combination_table = is_old_hangeul_input() ? hangeul_combination_table_full : hangeul_combination_table_default;

		// 자판 배열 정보에서 지정한 낱자 조합 규칙
		if(typeof layout_info.hangeul_combination_table != 'undefined') {
			combination_table = layout_info.hangeul_combination_table;
		}

	 	if(is_old_hangeul_input() && option.enable_old_hangeul_input) {
			if(typeof current_layout_info.old_hangeul_layout_type_name != 'undefined' && typeof find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).hangeul_combination_table != 'undefined')
				combination_table = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).hangeul_combination_table;
		}

		// 편의를 높이기 위한 낱자 조합을 더함 (옛한글 자판이 아닌 한글 자판)
		if(!is_old_hangeul_input() && option.convenience_combination && typeof layout_info.hangeul_convenience_combination_table != 'undefined')
			combination_table = layout_info.hangeul_convenience_combination_table.concat(combination_table);

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
}

function complete_hangeul_syllable(f) {
// 한글 낱내자 조합을 끊고 설정에 따라 한글 부호값을 바꿈
// option.only_NFD_hangeul_encoding==0 : 첫가끝 조합형 낱내자(NFD)를 완성형 낱내자(NFC)로 바꿈
// option.only_NFD_hangeul_encoding==1 : 완성형 낱내자(NFC)를 첫가끝 조합형 낱내자(NFD)로 바꿈

	if(typeof f == 'undefined' || !f) f = document.getElementById('inputText');
	var c,i,j,k;

	if(NFD_stack.phoneme.length) {
	// 첫가끝 조합형으로 조합하다가 채움 문자만 남았으면 채움 문자를 지움
		for(j=0, i=NFD_stack.phoneme.length-1; i>=0; --i) 
			if(unicode_NFD_hangeul_filler.indexOf(NFD_stack.phoneme[i])>=0) ++j;
		if(j==NFD_stack.phoneme.length)
			for(i=0;i<NFD_stack.combined_phoneme.length;++i) ohiBackspace(f);
	}

	if(ohiQ[0]+ohiQ[3]+ohiQ[6] || NFD_stack.phoneme.length) ohiSelection(f,0);

	// 풀어쓰기 처리
	if(is_phonemic_writing_input()) convert_syllable_into_phonemes(f);
	// 첫가끝(NFD) → 완성형(NFC)
	else if(!option.only_NFD_hangeul_encoding && NFD_stack.phoneme.length) change_syllable_from_NFD_to_NFC(f);
	// 완성형(NFC) → 첫가끝(NFD)
	else if(option.only_NFD_hangeul_encoding && !is_old_hangeul_input() && ohiQ[0]+ohiQ[3]+ohiQ[6]) change_syllable_from_NFC_to_NFD(f);

	ohiInsert(f,0,0);
	initialize_NFD_stack();
	if(!abbreviation_processing_state) prev_cursor_position = -1;
}

function convert_into_ohi_hangeul_phoneme(c) {
// 유니코드의 요즘한글 낱자 코드와 홀소리 호환 낱자 코드를 ohi에서 쓰는 코드로 바꾸기 (옛한글 낱자는 바꾸지 않음)
	if(unicode_modern_cheos.indexOf(c)>=0) c=ohi_cheos[unicode_modern_cheos.indexOf(c)];
	else if(unicode_modern_ga.indexOf(c)>=0) c=ohi_ga[unicode_modern_ga.indexOf(c)];
	else if(unicode_modern_ggeut.indexOf(c)>=0) c=ohi_ggeut[unicode_modern_ggeut.indexOf(c)];
	else if(compatibility_ga.indexOf(c)>=0) c=ohi_ga[compatibility_ga.indexOf(c)];

	return c;
}

function convert_into_unicode_hangeul_phoneme(c) {
// ohi에서 쓰는 한글 낱자값을 유니코드 조합형 낱자 부호값으로 바꾸기
	if(ohi_cheos.indexOf(c)>=0) c=unicode_cheos[ohi_cheos.indexOf(c)];
	else if(ohi_ga.indexOf(c)>=0) c=unicode_ga[ohi_ga.indexOf(c)];
	else if(ohi_ggeut.indexOf(c)>=0) c=unicode_ggeut[ohi_ggeut.indexOf(c)];
	return c;
}

function convert_into_compatibility_hangeul_letter(c) {
// 호환 한글 자모로 바꾸기
	c=convert_into_unicode_hangeul_phoneme(c);

	old_hangeul_cheos = [0x1140,0x114C,0x1159];
	old_hangeul_ga = [0x119E];
	old_hangeul_ggeut = [0x11EB,0x11F0,0x11F9];
	compatibility_yeshangeul_dah = [0x317F,0x3181,0x3186]; // ㅿ,ㆁ,ㆆ
	compatibility_yeshangeul_hol = [0x318D]; // ㆍ

	if(unicode_modern_cheos.indexOf(c)>=0) c=compatibility_modern_cheos[unicode_modern_cheos.indexOf(c)];
	else if(unicode_modern_ga.indexOf(c)>=0) c=compatibility_ga[unicode_modern_ga.indexOf(c)];
	else if(unicode_modern_ggeut.indexOf(c)>=0) c=compatibility_ggeut[unicode_modern_ggeut.indexOf(c)];
	else if(old_hangeul_cheos.indexOf(c)>=0)	c=compatibility_yeshangeul_dah[old_hangeul_cheos.indexOf(c)];
	else if(old_hangeul_ga.indexOf(c)>=0) c=compatibility_yeshangeul_hol[old_hangeul_ga.indexOf(c)];
	else if(old_hangeul_ggeut.indexOf(c)>=0) c=compatibility_yeshangeul_dah[old_hangeul_ggeut.indexOf(c)];

	return c;
}

function convert_into_halfwidth_hangeul_letter(c) {
	c=convert_into_unicode_hangeul_phoneme(c);

	if(unicode_modern_cheos.indexOf(c)>=0) c=halfwidth_cheos[unicode_modern_cheos.indexOf(c)];
	else if(unicode_modern_ga.indexOf(c)>=0) c=halfwidth_ga[unicode_modern_ga.indexOf(c)];
	else if(unicode_modern_ggeut.indexOf(c)>=0) c=halfwidth_ggeut[unicode_modern_ggeut.indexOf(c)];
	else if(compatibility_modern_cheos.indexOf(c)>=0) c=halfwidth_cheos[compatibility_modern_cheos.indexOf(c)];
	else if(compatibility_ga.indexOf(c)>=0) c=halfwidth_ga[compatibility_ga.indexOf(c)];
	else if(compatibility_ggeut.indexOf(c)>=0) c=halfwidth_ggeut[compatibility_ggeut.indexOf(c)];

	return c;
}

function convert_into_single_phonemes(combined_phoneme) {
// 겹낱자를 홀낱자들로 바꿈
	combined_phoneme = convert_into_unicode_hangeul_phoneme(combined_phoneme);
	var i, single_phonemes=[combined_phoneme], test_phonemes;

	var combination_table = hangeul_combination_table_default;
	if(is_old_hangeul_input()) combination_table = hangeul_combination_table_full;
	if(unicode_non_combined_phoneme.indexOf(combined_phoneme)>=0) return single_phonemes;

	for(i=0; i<combination_table.length; ++i) {
		if(combined_phoneme==combination_table[i][1]) {
			single_phonemes.splice(0,1,parseInt(combination_table[i][0]/0x10000),combination_table[i][0]%0x10000);
			break;
		}
	}

	if(i!=combination_table.length && is_old_hangeul_input()) {
	// 옛한글에 쓰이는 겹낱자인지 살핌
		for(i=1;i>=0;--i) {
			test_phonemes = convert_into_single_phonemes(single_phonemes[i]);
			if(test_phonemes.length>1) single_phonemes.splice(i,1,test_phonemes[0], test_phonemes[1]);
		}
	}

	return single_phonemes;
}

function convert_NFC_into_NFD(NFC_c) {
// 완성형 낱내자 부호값(NFC)을 받아서 첫가끝 조합형 낱자 단위 낱내자 부호값(NFD)으로 바꾸어 돌려줌
	if(NFC_c<0xAC00 || NFC_c>0xD7A3) return false;
	var i,j,k;
	i=parseInt((NFC_c-0xAC00)/588)+0x1100;
	j=parseInt((NFC_c-0xAC00)%588/28)+0x1161;
	k=(NFC_c-0xAC00)%588%28+0x11A7;
	k = k==0x11A7 ? 0 : k;
	return [i,j,k];
}

function convert_NFD_into_NFC(NFD_phonemes) {
// 첫가끝 조합형 낱자 단위 낱내자 부호값(NFD)을 받아 완성형 낱내자 단위 부호값(NFC)으로 돌려줌
// 요즘한글에 쓰이지 않는 낱자가 있으면 거짓(false)값을 돌려줌
	var p=[], h,i,j,k;

	if(NFD_phonemes.length>3 || NFD_phonemes.length<2) return false;
	h = unicode_modern_cheos.indexOf(NFD_phonemes[0])<0 ? 0 : 1;

	for(i=0;i<NFD_phonemes.length;++i) {
	// p의 낱자 차례를 '첫+가' 또는 '첫+가+끝'으로 맞춤
		j = h ? i : NFD_phonemes.length-i-1;
		p[i]=NFD_phonemes[j];
		if(unicode_modern_hangeul_phoneme.indexOf(p[i])<0) return false;
	}

	if(unicode_modern_cheos.indexOf(p[0])<0 || unicode_modern_ga.indexOf(p[1])<0) return false;
	if(p.length==3 && unicode_modern_ggeut.indexOf(p[2])<0) return false;

	return 0xAC00+(p[0]-0x1100)*588+(p[1]-0x1161)*28+(p[2]-0x11A8);
}

function ohiRoman(f,e,key) { // Roman keyboard basic_layouts (Dvorak, Colemak)
	var c=key;
	var layout = find_current_layout();

	if(En_type!='QWERTY') c=layout[key-33];
	ohiInsert(f,0,c);
}

function ohiSpecialKey(f,e,c) {
	if(c==0x1B) { // 글쇠값이 0 또는 escape이면 조합 끊기
		complete_hangeul_syllable(f);
		return true;
	}

	if(c==0x0D) { // Enter
		complete_hangeul_syllable(f);
		ohiInsert(f,0,c);
		esc_ext_state();
		ohiSelection(f,0);
		return true;
	}

	if(c==0x08) { // Backspace (되걸음쇠)
		if(ohiHangeul_backspace(f,e)) return true;
		ohiBackspace(f);
		return true;
	}

	return false;
}

function Hangeul2_galmadeuli_selection(a) {
	if(typeof a.length == 'undefined') return 0;
	if(a.length==1) return a[0];
	var i, dah=0, hol=0;
	for(i=a.length-1;i>=0;--i) {
		c = convert_into_unicode_hangeul_phoneme(a[i]);
		if(unicode_cheos.indexOf(c)>=0) dah=c;
		else if(unicode_ga.indexOf(c)>=0) hol=c;
	}
	if(!dah || !hol) return dah+hol;
	if(ohiQ[0]&&!ohiQ[3]&&!ohiQ[6] || unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0) return hol;
	return dah;
}

function ohiHangeul2(f,e,key) { // 2-Beolsik
	if((Ko_type.indexOf('KSX5002')>=0 || Ko_type=='2-KPS9256') && (key<65 || (key-1)%32>25)) {
		complete_hangeul_syllable(f);
		ohiInsert(f,0,key);
		return;
	}

	var layout_info = find_current_layout_info();
	var layout = find_current_layout();

	var c = layout[key-33];
	if(typeof c == 'object') c = Hangeul2_galmadeuli_selection(c);
	c = convert_into_ohi_hangeul_phoneme(c);

	if(special_chars.indexOf(c)>=0) 
		if(ohiSpecialKey(f,e,c)) return;

	if(is_old_hangeul_input() || option.only_NFD_hangeul_encoding || NFD_stack.phoneme.length) {
		c = NFD_hangeul2_preprocess(f,e,key);
		if(unicode_NFD_hangeul_code.indexOf(c)>=0) {
			NFD_hangeul_input(f,key,c);
			return;
		}
	}

	if(c==layout[key-33]) {
		ohiInsert(f,0,c);
		return;
	}

	if(ohi_cheos.indexOf(c)>=0) c-=127;
	else if(ohi_ga.indexOf(c)>=0) c-=35;
	else if(ohi_ggeut.indexOf(c)>=0) c-=127;

	if(c<31) { // Jaum
		if((!ohiQ[7] || !(ohiQ[0]=-1)) && ohiQ[3]) ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],c);
		if(!ohiQ[3] || ohiQ[0]<0 || ohiQ[0] && (!ohiQ[6] || !ohiQ[7]) && (ohiQ[6] || c==8 || c==19 || c==25))
			ohiInsert(f,(ohiQ=ohiQ[1]||ohiQ[3]||!ohiDoubleJamo(0,ohiQ[0],c)?ohiQ:0),ohiQ=[c,ohiQ?0:1,0,0,0,0,0,0,0]);
		else if(!ohiQ[0] && ohiQ[3]) {
		// 닿소리 없이 홀소리가 들어왔고 닿소리가 눌렸을 때 새 낱내자로 조합하기
			complete_hangeul_syllable(f);
			//ohiInsert(f,ohiQ,ohiQ);
			ohiInsert(f,0,ohiQ=[c,0,0,0,0,0,0,0,0]);
		}
		else if(!ohiQ[0] && (ohiQ[0]=c) || (ohiQ[6]=ohiQ[6]||c)) ohiInsert(f,0,ohiQ);
		if(ohiQ[7]) ohiQ[7]=c;
	}
	else { // Moum
		if(option.sunalae || Ko_type.substr(0,5)=='2-sun') {
			if(ohiQ[3]==c && !ohiQ[1] && !ohiQ[6] && (ohiQ[0]==1 || ohiQ[0]==7 || ohiQ[0]==18 || ohiQ[0]==21 || ohiQ[0]==24)) {
			// 홀소리 글쇠를 거듭 눌러 된소리 만들기
				ohiQ[1]=1;
				ohiInsert(f,0,ohiQ);
				return;
			}
		}

		if(option.sunalae || Ko_type=='2-KPS9256' || Ko_type.substr(0,5)=='2-sun' || Ko_type=='2-Gaon26KM' || Ko_type=='2-ggyuddeu') {
			if((ohiQ[3]==37 || ohiQ[3]==33) && c==51 && !ohiQ[6]) {
			// ㅕ+ㅣ→ㅖ, ㅑ+ㅣ→ㅒ
				ohiQ[4]=1;
				ohiInsert(f,0,ohiQ);
				return;
			}
		}

		if(!option.sunalae && c==66-35 && ohiQ[3]==c && !ohiQ[4] && !ohiQ[6]) { // ㅏ+ㅏ→ ㆍ(아래아)
			ohiQ[4]=0x119E-ohiQ[3];
			ohiInsert(f,0,ohiQ);
			return;
		}
		
		if(!option.sunalae && c==86-35 && ohiQ[3]==c && !ohiQ[4] && !ohiQ[6]) { // ㅣ+ㅣ→ ᅟᆢ(쌍아래아)
			ohiQ[4]=0x11A2-ohiQ[3];
			ohiInsert(f,0,ohiQ);
			return;
		}

		if((!ohiQ[4] || ohiQ[6] || !(ohiQ[3]=-1)) && !ohiQ[6]) ohiQ[4]=ohiDoubleJamo(1,ohiQ[3],c);
		if((ohiQ[0] && ohiQ[3]>0 && ohiQ[6]) && (ohiQ[7] || !(ohiQ[7]=ohiQ[6]) || !(ohiQ[6]=0))) {
			ohiInsert(f,0,[ohiQ[0],ohiQ[1],0,ohiQ[3],ohiQ[4],0,ohiQ[6],0,0]);
			ohiInsert(f,ohiQ,ohiQ=[ohiQ[7],0,0,c,0,0,0,0,0]);
		}
		else if((!ohiQ[0] || ohiQ[3]) && (!ohiQ[4] || ohiQ[6]) || ohiQ[3]<0) ohiInsert(f,ohiQ,ohiQ=[0,0,0,c,0,0,0,0,0]);
		else if(ohiQ[3]=ohiQ[3]||c) ohiInsert(f,0,ohiQ);
	}
}

function NFD_hangeul2_preprocess(f,e,key) {
	var layout_info = find_current_layout_info();
	var layout = find_current_layout();

	var combined_phoneme, backup_phoneme, backup_phoneme_R;

	var c = layout[key-33];
	if(typeof c == 'object') c = Hangeul2_galmadeuli_selection(c);
	c = convert_into_unicode_hangeul_phoneme(c);

	if(unicode_cheos.indexOf(c)>=0) { // 닿소리일 때
		if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0) { // 바로 앞에 끝소리가 들어왔다면
			combined_phoneme=combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0], unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)]);

			if(combined_phoneme) {
			// 먼저 들어온 끝소리와 조합되는 닿소리이면 끝소리로 넣음
				return unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)];
			}
			else {
			// 먼저 들어온 끝소리와 조합되지 않은 닿소리이면 조합을 끊고 첫소리로 넣음
				complete_hangeul_syllable(f);
				if(is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInsert(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
				if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) {
					c = convert_into_ohi_hangeul_phoneme(c); // 완성형으로 조합하는 요즘한글 자판일 때 호환 자모로 바꿈
				}
				return c;
			}
		}
		else if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 || NFD_stack.phoneme[0]==0x1160) { // 바로 앞에 홀소리 또는 홀소리 채움 문자가 들어왔다면
			if(is_old_hangeul_input() || unicode_modern_hangeul_phoneme.indexOf(unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)])>=0) { // 옛한글 자판이거나 요즘낱자에 들어가는 받침이면
				c=unicode_cheos_to_ggeut[unicode_cheos.indexOf(c)]; // 끝소리로 넣음
				return c;
			}
		}
		else return c;
	}
	else if(unicode_ga.indexOf(c)>=0 || c==0x1160) { // 홀소리 또는 홀소리 채움 문자일 때
		if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0) { // 바로 앞에 끝소리가 들어왔다면
			backup_phoneme = unicode_ggeut_to_cheos[unicode_ggeut.indexOf(NFD_stack.phoneme[0])];
			backup_phoneme_R = NFD_stack.phoneme_R[0];
			ohiHangeul_backspace(f,e); // 앞에 넣은 끝소리를 지움
			complete_hangeul_syllable(f);
			if(is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInsert(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
			if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding && unicode_modern_hangeul_phoneme.indexOf(backup_phoneme)>=0 && unicode_modern_hangeul_phoneme.indexOf(c)>=0) {
			// 요즘한글 자판이고 앞에 들어온 닿소리와 막 들어온 홀소리가 요즘낱자이면 조합을 끊고 완성형으로 바꿈
				ohiInsert(f,0,ohiQ=[convert_into_ohi_hangeul_phoneme(backup_phoneme)-127,0,0,0,0,0,0,0,0]);
				c = convert_into_ohi_hangeul_phoneme(c);
			}
			else {
				NFD_hangeul_input(f,key,backup_phoneme); // 앞에 넣은 끝소리를 첫소리로 바꾸어 넣음
				NFD_stack.phoneme_R[0]=backup_phoneme_R;
			}
		}
		
		if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) { // 완성형으로 조합하는 요즘한글 자판일 때	
			if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 && !combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c)) {
			// 앞에 들어온 홀소리와 조합되지 않는 홀소리이면 조합을 끊고 호환 자모로 바꿈
				complete_hangeul_syllable(f);
				c = convert_into_ohi_hangeul_phoneme(c);
			}
		}
		return c;
	}

	return c;
}

function seek_ieochigi_abbreviation(abbreviation_table, c1, c2) { // 줄임말 조합을 찾기 (이어치기 자판)
	var i, chars=null;
	for(i=0; i<abbreviation_table.length; ++i)
		if(abbreviation_table[i].phonemes[0]==convert_into_unicode_hangeul_phoneme(c1) && abbreviation_table[i].phonemes[1]==convert_into_unicode_hangeul_phoneme(c2))
			return abbreviation_table[i].chars;
	return null;
}

function seek_moachigi_abbreviation(abbreviation_table) { // 모아치기 자판의 줄임말 조합을 찾기
	var i,j,l=[];

	for(i=0; i<abbreviation_table.length; ++i) {
		if(double_multikey_abbreviated_state) {
		// 줄여넣기 조합을 이미 두 차례 이어서 했을 때
			// 이전 글쇠 조합이 지정된 줄임말 글쇠 조합은 건너뜀
			if(typeof abbreviation_table[i].prev_keys != 'undefined' && abbreviation_table[i].prev_keys.length) continue;
		}

		if(pressed_keys.length != abbreviation_table[i].keys.length) continue;

		for(j=0;j<abbreviation_table[i].keys.length;++j)
			if(pressed_keys.indexOf(abbreviation_table[i].keys[j].charCodeAt(0))<0) break;
		if(j!=abbreviation_table[i].keys.length) continue;

		// 기호 확장
		if(abbreviation_table[i].keys.length==1 && abbreviation_table[i].keys[0]<0) return abbreviation_table[i].chars;

		// 줄임말 종류(class)
		if(typeof abbreviation_table[i].prev_class != 'undefined' && abbreviation_table[i].prev_class.length) {
			if(prev_class.length) {
				for(j=0;j<abbreviation_table[i].prev_class.length;++j)
					if(prev_class.indexOf(abbreviation_table[i].prev_class[j])>=0) break;
				if(j!=abbreviation_table[i].prev_class.length) {
					prev_class = typeof abbreviation_table[i].class != 'undefined' ? abbreviation_table[i].class.slice() : [];
					prev_pressed_keys = [];
					backup_prev_cursor_position = prev_cursor_position;
					prev_cursor_position = -1;
					return abbreviation_table[i].chars;
				}
				else continue;
			}
			else continue;
		}

		if(typeof abbreviation_table[i].prev_keys == 'undefined' || !abbreviation_table[i].prev_keys.length) {
			// 줄여넣기 조합을 이미 두 차례 이어서 했을 때
			if(double_multikey_abbreviated_state) {
				double_multikey_abbreviated_state = 0;
				return abbreviation_table[i].chars;
			}
			// 이전 글쇠값 정보가 없을 때
			if(!prev_pressed_keys.length) {
				prev_class = typeof abbreviation_table[i].class != 'undefined' ? abbreviation_table[i].class.slice() : [];
				return abbreviation_table[i].chars;
			}
		}

		if(!prev_pressed_keys.length && typeof abbreviation_table[i].prev_keys != 'undefined' && abbreviation_table[i].prev_keys.length) continue;

		if(prev_pressed_keys.length && typeof abbreviation_table[i].prev_keys != 'undefined') {
			if(prev_pressed_keys.length == abbreviation_table[i].prev_keys.length) {
				for(j=0;j<prev_pressed_keys.length;++j)
					if(prev_pressed_keys.indexOf(abbreviation_table[i].prev_keys[j].charCodeAt(0))<0) break;
				if(j==prev_pressed_keys.length) {
				// 앞의 글쇠값과 들어맞을 때
					prev_class = typeof abbreviation_table[i].class != 'undefined' ? abbreviation_table[i].class.slice() : [];
					prev_pressed_keys = [];
					double_multikey_abbreviated_state = 1;
					return abbreviation_table[i].chars;
				}
			}
		}

		// 앞의 글쇠값과 들어맞지 않으면 후보로 넣음
		l.push(i);
	}

	if(l.length) {
		prev_class = typeof abbreviation_table[l[0]].class != 'undefined' ? abbreviation_table[l[0]].class.slice() : [];
		return abbreviation_table[l[0]].chars;
	}
	else return [];
}


function ohiHangeul3_abbreviation(f,key) { // 이어치기 세벌식 자판에서 줄임말 처리
	if(!option.abbreviation || typeof current_layout_info.ieochigi_hangeul_abbreviation_table == 'undefined') return 0;

	var i,j;
	var layout = find_current_layout();
	var c = layout[key-33];
	var ch, chars;
	var ieochigi_hangeul_abbreviation_table=null;

	abbreviation_table = current_layout_info.ieochigi_hangeul_abbreviation_table;
	if(!abbreviation_table || !abbreviation_table.length) return 0;

	if(!NFD_stack.phoneme.length) {
		if(ohiQ[6]) ch=ohiQ[6]+ohiQ[7];
		else if(ohiQ[3]) ch=ohiQ[3]+ohiQ[4]+35;
		else if(ohiQ[0]) ch=ohiQ[0]+ohiQ[1]+127;

		chars=seek_ieochigi_abbreviation(abbreviation_table, convert_into_unicode_hangeul_phoneme(ch), convert_into_unicode_hangeul_phoneme(c));

		if(chars) {
			if(!is_phonemic_writing_input()) ohiBackspace(f);
			else {
				complete_hangeul_syllable(f);
				ohiBackspace(f);				
			}
			insert_chars(f,chars);
			return 1;
		}
	}
	return 0;
}

function ohiHangeul3(f,e,key) { // 세벌식 자판 - 낱자 단위 처리
	var i, j, c=0;
	var sublayout = [];
	var extended_sign_layout = [];

	var layout_info = find_current_layout_info();
	var layout = find_current_layout();

	if(!abbreviation_processing_state) {
		sublayout = find_sublayout();
		extended_sign_layout = find_extended_sign_layout();
		prev_cursor_position = -1;
	}

	if(unicode_cheos.indexOf(key)>=0 || unicode_ga.indexOf(key)>=0 || unicode_ggeut.indexOf(key)>=0) {
	// key가 유니코드 한글 낱자일 때
		c=key;
	}
	else if(layout) {
		if(typeof layout[key-33]=='object') c=layout[key-33][0];
		else c=layout[key-33];
		
		if(ohiHangeul3_HanExtKey && typeof layout_info.extended_hangeul_layout[key-33][ohiHangeul3_HanExtKey-1] == 'number' &&
		 (layout_info.extended_hangeul_layout[key-33][ohiHangeul3_HanExtKey-1]>=0)) {
		// 한글 확장 배열에서 문자 넣기
			c = layout_info.extended_hangeul_layout[key-33][ohiHangeul3_HanExtKey-1];
			NFD_hangeul_input(f,key,c); // 첫가끝 방식으로 한글 조합하기
			esc_ext_state();
			return c;
		}
	}

	if(typeof layout_info.extended_hangeul_layout != 'undefined' && typeof layout_info.extended_hangeul_layout[key-33][0] == 'number' && (!ohiHangeul3_HanExtKey && c==-1 || ohiHangeul3_HanExtKey && layout_info.extended_hangeul_layout[key-33][ohiHangeul3_HanExtKey-1]==-1)) { // 한글 확장 배열을 쓰는 상태로 들어가기
		++ohiHangeul3_HanExtKey;
		if(ohiHangeul3_HanExtKey > layout_info.extended_hangeul_layout[key-33].length) esc_ext_state();
		else show_keyboard_layout();	 
		if(ohiHangeul3_HanExtKey) return c;
	}

	if(special_chars.indexOf(c)>=0) 
		if(ohiSpecialKey(f,e,c)) return;

	if((c>64 && c<91 || c>96 && c<123) && !(option.enable_sign_ext && sign_ext_state && extended_sign_layout)) {
	// 아스키 영역의 영문자들을 한글 낱자로 처리하지 않고 그대로 넣기 위함 (기호 확장 배열을 쓰지 않을 때)
		if(NFD_stack.phoneme.length) complete_hangeul_syllable(f);
		ohiInsert(f,0,c);
		return c;
	}

	if(!abbreviation_processing_state || is_moachigi_input()) {
		if(Ko_type.substr(0,1)=='3') {
			if(sign_layout_input(f,e,key)) return 0; // 기호 확장 배열
			if(c<0) return 0;
		}

		if(option.only_NFD_hangeul_encoding || is_old_hangeul_input()) { // 첫가끝 방식으로 조합할 때
			if(is_galmadeuli_input()) { // 갈마들이 세벌식 자판 (신세벌식 자판, 갈마들이 공세벌식 자판)
				c = NFD_galmadeuli_preprocess(f,e,key);
				if(c==-1) return 0;
			}
			else if(Ko_type.substr(1,2)=='t-') { // 타자기 자판
				c = hangeul_typewriter(f,key);
				if(c<=0) return 0;
			}

			if(c) {
				NFD_hangeul_input(f,key,c); // 첫가끝 조합형으로 한글 낱자 처리하기
				return 0;
			}
		}
		else { // 첫가끝 방식을 쓰지 않을 때
			c = convert_into_ohi_hangeul_phoneme(c);
			if(is_galmadeuli_input()) { // 갈마들이 세벌식 자판
				c = NFC_galmadeuli_preprocess(f,e,key);
				if(c==-1) return 0;
				c = convert_into_ohi_hangeul_phoneme(c);
			}
			else if(Ko_type.substr(1,2)=='t-') { // 타자기 자판
				c = hangeul_typewriter(f,key);
				if(c<=0) return 0;
			}
		}

		if(!is_old_hangeul_input() && Ko_type.substr(1,2)!='t-' && !is_moachigi_input() && 
		 (typeof current_layout_info.hangeul_combination_table != 'undefined' || typeof current_layout_info.moachigi_hangeul_combination_table != 'undefined' || typeof current_layout_info.hangeul_convenience_combination_table != 'undefined')
		) {
		// 옛한글 자판이 아니고 타자기 자판이 아닐 때 낱자 결합 규칙 적용하기
			var ch;
			if(ohiQ[6]) ch=ohiQ[6]+ohiQ[7];
			else if(ohiQ[3]) ch=ohiQ[3]+ohiQ[4]+35;
			else if(ohiQ[0]) ch=ohiQ[0]+ohiQ[1]+127;

			ch=combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ch),convert_into_unicode_hangeul_phoneme(c));
			if(ch) {
				if(ohiQ[6]) {
					if(!ohiQ[7]) ohiQ[7]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[6];
					else { // 3타로 넣는 받침이 들어갔을 때(순아래 2014 자판의 ㄹ+ㅁ+ㅁ→ㄿ, 이어치기 방식으로 쓰는 모아치기 자판)
						ohiQ[8]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[6]+ohiQ[7]);
					}
				}
				else if(ohiQ[3]) {
					if(!ohiQ[4]) ohiQ[4]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[3]-35;
					else { // 3타로 넣는 홀소리가 들어갔을 때 (이어치기 방식으로 쓰는 모아치기 자판 ㅗ+ㅏ+ㅣ→ㅙ)
						ohiQ[5]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[3]+ohiQ[4])-35;
					}
				}
				else {
					if(!ohiQ[1]) ohiQ[1]=convert_into_ohi_hangeul_phoneme(ch)-ohiQ[0]-127;
					else { // 3타로 넣는 첫소리가 들어갔을 때
						ohiQ[2]=convert_into_ohi_hangeul_phoneme(ch)-(ohiQ[0]+ohiQ[1])-127;
					}
				}
				ohiInsert(f,0,ohiQ);
				return ch;
			}
		}

		// 몇몇 공병우 세벌식 자판에서 첫소리만 들어간 채로 [ 자리 글쇠가 눌렸을 때 아래아를 넣음
		if(Ko_type.substr(0,2)=='3-' && Ko_type!='3-sun1990' && Ko_type!='3-91_noshift') {
			if(key==0x5B && ( (ohiQ[0]&&!ohiQ[3]&&!ohiQ[6] || unicode_cheos.indexOf(NFD_stack.combined_phoneme[0])>=0 ) || NFD_stack.combined_phoneme[0]==0x119E)) {
				c=0x119E;
			}
		}

		// 3-91 조합 순아래 자판
		if(Ko_type=='3-91_noshift') {
			if(key==0x5B && ( (ohiQ[0]&&ohiQ[3]&&!ohiQ[6] || unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0) )) {
			// 첫소리와 가운뎃소리까지 들어간 채로 [ 자리 글쇠가 눌렸을 때
				c=0x11FF;
			}
		}
	}

	if(!c) { // 부호값이 0이면 조합 끊기
		complete_hangeul_syllable(f);
		return 0;
	}

	// 요즘한글 자판에서 처음 들어온 옛낱자 처리
	if(!is_old_hangeul_input() && (unicode_NFD_hangeul_phoneme.indexOf(convert_into_unicode_hangeul_phoneme(c))>=0 || NFD_stack.phoneme.length)) {
		if(!NFD_stack.phoneme.length && unicode_NFD_hangeul_phoneme.indexOf(c)>=0) {
		// 처음 들어온 옛낱자(c)를 ohiQ에 넣고 ohiInsert 함수로 넘겨 한글 조합 상태를 완성형에서 첫가끝 조합형으로 바꿈
			var unicode_phoneme_list = [unicode_cheos, unicode_ga, unicode_ggeut];
			for(i=0;i<3;++i) {
				if(unicode_phoneme_list[i].indexOf(c)>=0) {
					if(!ohiQ[i*3]) ohiQ[i*3]=c;
					else if(!combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[i*3]+ohiQ[i*3+1]),convert_into_unicode_hangeul_phoneme(c))) {
						complete_hangeul_syllable(f);
						ohiQ[i*3]=c;
					}
					else if(!ohiQ[i*3+1]) ohiQ[i*3+1]=c-ohiQ[i*3];
					else if(!ohiQ[i*3+2]) ohiQ[i*3+2]=c-ohiQ[i*3]-ohiQ[i*3+1];
					ohiInsert(f,0,ohiQ);
					break;
				}
			}
			return 0;
		}

		if(!combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],convert_into_unicode_hangeul_phoneme(c))) {
		// 앞 낱자와 조합하지 않는 낱자이면 조합을 끊음
			if((unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 || unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0)
			 && (unicode_cheos.indexOf(convert_into_unicode_hangeul_phoneme(c))>=0 || unicode_ga.indexOf(convert_into_unicode_hangeul_phoneme(c))>=0)) {
			// 홀소리나 받침 뒤에 조합되지 않는 첫소리나 홀소리가 오면 조합을 끊기
				complete_hangeul_syllable(f);
				if(unicode_modern_hangeul_phoneme.indexOf(convert_into_unicode_hangeul_phoneme(c))<0) { // 옛낱자일 때 
					ohiInsert(f,0,ohiQ=[unicode_cheos.indexOf(c)>=0 ? c:0,0,0,unicode_ga.indexOf(c)>=0 ? c:0,0,0,0,0,0]);	
					return 1;
				}
			}
			else if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ggeut.indexOf(convert_into_unicode_hangeul_phoneme(c))>=0) {
			// 조합되지 않는 받침이면 조합 끊기
				complete_hangeul_syllable(f);				
			}
		}
	}

	// 요즘한글 자판으로 요즘한글 넣기
	if(!NFD_stack.phoneme.length && c>127 && c<158 && c!=147) { // Cho
		if(NFD_stack.phoneme.length) ohiSelection(f,0);
		i=ohiQ[1]||ohiQ[3]||!ohiDoubleJamo(0,ohiQ[0],c-127);
		if(!i) ohiQ=0;
		ohiInsert(f,i,ohiQ=[c-127,ohiQ?0:1,0,0,0,0,0,0,0]);
		return i;
	}
	else if(!NFD_stack.phoneme.length && c>65 && c<87) { // Jung
		
		if((!ohiQ[4] || !(ohiQ[3]=-1)) && !(Ko_type.substr(1,2)=='t-' && ohiRQ[3]+ohiRQ[4]>1)) {
			ohiQ[4]=ohiDoubleJamo(1,ohiQ[3],c-35);
			i=1;
		}
		else i=0;

		if((!ohiQ[0] || ohiQ[3]) && (!ohiQ[4] || ohiQ[6]) || ohiQ[3]<0) {
			ohiInsert(f,ohiQ,ohiQ=[0,0,0,c-35,0,0,0,0,0]);
			i=0;
		}
		else if(ohiQ[3]=ohiQ[3]||c-35) {
			ohiInsert(f,0,ohiQ);
			i=1;
		}

		return i;
	}
	else if(!NFD_stack.phoneme.length && c<31) { // Jong
		i=0;
		if(!current_layout_info.hangeul_combination_table && (!ohiQ[7] || !(ohiQ[6]=-1))) {
			ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],c);
			if(ohiQ[7]) i=1;
		}

		if(!ohiQ[0] || !ohiQ[3] || ohiQ[6] && !ohiQ[7] || ohiQ[6]<0 || (Ko_type.substr(0,3)=='4t-' && ohiRQ[3]+ohiRQ[4]>0)) {
			ohiInsert(f,ohiQ,ohiQ=[0,0,0,0,0,0,c,0,0]);
			i=0;
		}
		else if(ohiQ[6]=ohiQ[6]||c) {
			ohiInsert(f,0,ohiQ);
			i=1;
		}

		return i;
	}

	if(NFD_stack.phoneme.length) NFD_hangeul_input(f,key,c); // 첫가끝 방식으로 옛한글 조합하기
	else ohiInsert(f,0,c);

	return 0;
}

function convert_syllable_into_phonemes(f) {
// 낱내자를 낱자로 풀어 넣기 (풀어쓰기)
	var c,i,j,k,chars=[];
	var single_phonemes=[], hangeul_conversion_function;
	if(!(ohiQ[0]+ohiQ[3]+ohiQ[6]) && !NFD_stack.phoneme.length) return;

	var _ohiQ = ohiQ.slice();

	if(option.phonemic_writing_in_halfwidth_letter && !is_old_hangeul_input()) hangeul_conversion_function = convert_into_halfwidth_hangeul_letter;
	else hangeul_conversion_function = convert_into_compatibility_hangeul_letter;

	if(is_old_hangeul_input() || option.only_NFD_hangeul_encoding || NFD_stack.phoneme.length && !convert_NFD_into_NFC(NFD_stack.phoneme)) {
	// 첫가끝 조합형을 쓸 때
		var _phoneme = NFD_stack.phoneme.slice();
		var _combined_phoneme = NFD_stack.combined_phoneme.slice();

		if(unicode_ggeut.indexOf(_combined_phoneme[0])>=0) j=3;
		else if(unicode_ga.indexOf(_combined_phoneme[0])>=0 || _combined_phoneme[0]==0x1160) j=2;

		for(i=0; i<j; ++i) ohiBackspace(f);

		for(i=_combined_phoneme.length-1;i>=0;--i) {
			// 첫소리 ㅇ 넣지 않기 (풀어쓰기)
			if(option.phonemic_writing_initial_ieung_ellipsis && _combined_phoneme[i]==0x110B) continue;

			// 채움 문자 넣지 않기
			if(_combined_phoneme[i]==0x115F || _combined_phoneme[i]==0x1160) continue;

			single_phonemes = [];
			if(!option.phonemic_writing_in_single_phoneme) single_phonemes.push(_combined_phoneme[i]);
			else single_phonemes = convert_into_single_phonemes(_combined_phoneme[i]);
			for(j=0;j<single_phonemes.length;++j) {
				if(option.only_NFD_hangeul_encoding) NFD_hangeul_single_phoneme_syllable_input(f,single_phonemes[j]);
				else {
					c = hangeul_conversion_function(single_phonemes[j]);
					if(compatibility_hangeul_phoneme.indexOf(c)>=0 || unicode_NFD_hangeul_phoneme.indexOf(c)>=0) ohiInput(f,0,c);
					// 호환 자모에 없는 첫소리에 채움 문자를 붙임
					if(single_phonemes.length==1 && unicode_NFD_hangeul_phoneme.indexOf(single_phonemes[0]>=0) && unicode_cheos.indexOf(c)>=0) ohiInput(f,0,0x1160);
				}
			}
			initialize_NFD_stack();
		}
	}
	else if(!is_old_hangeul_input() && ohiQ[0]+ohiQ[3]+ohiQ[6]) {
	// 요즘한글 배열을 쓸 때
		if(ohiQ[0]+ohiQ[3]+ohiQ[6]) {
			ohiInsert(f,0,0);
			ohiBackspace(f);
		}

		// 첫소리 ㅇ 넣지 않기
		if(option.phonemic_writing_initial_ieung_ellipsis) {
			if(_ohiQ[0]+_ohiQ[1]+_ohiQ[2]==23) _ohiQ[0]=_ohiQ[1]=_ohiQ[2]=0;
		}

		for(i=0;i<3;++i) {
			if(!_ohiQ[i*3]) continue;
			k=_ohiQ[i*3]+_ohiQ[i*3+1]+_ohiQ[i*3+2];
			c=k+(i==0?127:i==1?35:0);
			if(option.phonemic_writing_in_single_phoneme) {
			// 겹낱자를 홑낱자로 풀어 넣기
				single_phonemes = convert_into_single_phonemes(c);
				if(single_phonemes.length) {
					for(j=0;j<single_phonemes.length;++j) {
						if(option.only_NFD_hangeul_encoding) NFD_hangeul_single_phoneme_syllable_input(f,single_phonemes[j]);
						else ohiInsert(f,0,hangeul_conversion_function(single_phonemes[j]));
					}
					continue;
				}
			}
			c = 0x3130+_ohiQ[i*3]+_ohiQ[i*3+1]+_ohiQ[i*3+2];
			if(option.phonemic_writing_in_halfwidth_letter) c = convert_into_halfwidth_hangeul_letter(c);
			ohiInsert(f,0,c);
		}
	}
}

function ohiHangeul3_moa(f,e) { // 모아치기 세벌식 자판 처리
	var i,j,k,l,m;
	var c;
	var layout=current_layout_info.layout;
	var extended_sign_layout;
	var combination_table;

	var pressed_chars = [];
	var temp_pressed_chars = [];
	var backup_prev_pressed_keys = [];
	var special_keys = [32,13,8]; // 사이띄개(32), 줄바꾸개(13), 뒷걸음쇠(8)

	var chars=[];
	var cheos = [], ga = [], ggeut = [];
	var front_etc = [], rear_etc = [];
	var front_special = [], rear_special = [];

	var necessary_backspaces_cheos=0;
	var necessary_backspaces_ga=0;
	var necessary_backspaces_ggeut=0;
	var necessary_backspaces_sign=0;

	if(option.enable_sign_ext && typeof current_layout_info.extended_sign_layout != 'undefined' && sign_ext_state) {
		// 기호 확장 배열에서 기호를 넣음
		if(sign_layout_input(f,e,pressed_keys[0])) pressed_keys.splice(0,1);
		if(pressed_keys.length>1) esc_ext_state();
	}

	for(i=0;i<pressed_keys.length;++i) {
		// 특수 글쇠를 추림
		if(special_keys.indexOf(pressed_keys[i])>=0) {
			if(!i) front_special.push(pressed_keys[0]);
			else rear_special.push(pressed_keys[i]);
			pressed_keys.splice(i,1);
		}
		else pressed_chars.push(convert_into_unicode_hangeul_phoneme(layout[pressed_keys[i]-33]));
	}

	if(typeof current_layout_info.moachigi_multikey_abbreviation_table != 'undefined') {
	// 모아치기 글쇠 기준 줄임말·예외 조합 (모아치기 조합 가운데 가장 먼저 적용됨)
		combination_table = current_layout_info.moachigi_multikey_abbreviation_table;
		backup_prev_pressed_keys = prev_pressed_keys.slice();
		backup_prev_cursor_position = -1;
		chars = seek_moachigi_abbreviation(combination_table);

		if(chars.length==1 && combination_table[i].chars[0]<0 && combination_table[i].chars[0]>=-3) {
		// 부호값이 -1 ~ -3이면 기호 확장 배열 상태로 들어감
			sign_layout_input(f,e,combination_table[i].chars[0]);
			return;
		}

		if(chars.length) {
		// 줄임말 조합을 글쇠 조합으로 이어서 하는 때에 먼저 들어간 줄임말을 지우고 다음 줄임말을 넣음
			if(backup_prev_pressed_keys.length && !prev_pressed_keys.length && prev_cursor_position > -1) ohiHangeul_moa_backspace(f,e);
			insert_chars(f,chars);
			if(backup_prev_cursor_position > -1) prev_cursor_position = backup_prev_cursor_position;
			return;	
		}
	}

	if(typeof current_layout_info.moachigi_hangeul_abbreviation_table != 'undefined') {
	// 모아치기 한글 낱자 기준 줄임말·예외 조합
		combination_table = current_layout_info.moachigi_hangeul_abbreviation_table;

		for(i=0;i<combination_table.length;++i) {
			if(pressed_chars.length != combination_table[i].phonemes.length) continue;
			for(j=0;j<combination_table[i].phonemes.length;++j) {
				if(pressed_chars.indexOf(combination_table[i].phonemes[j])<0) break;
			}

			if(j!=combination_table[i].phonemes.length) continue;
			insert_chars(f,combination_table[i].chars);
			return;
		}
	}

	chars = [];

	if(typeof current_layout_info.moachigi_hangeul_combination_table != 'undefined') {
	// 모아치기 한글 낱자 조합 규칙 (낱자 차례를 따지지 않음)
		combination_table = current_layout_info.moachigi_hangeul_combination_table;

		for(i=0;i<combination_table.length;++i) {
			temp_pressed_chars = pressed_chars.slice();
			for(j=0;j<combination_table[i].phonemes.length;++j) {
				k=temp_pressed_chars.indexOf(combination_table[i].phonemes[j]);
				if(k<0) break;
				temp_pressed_chars.splice(k,1);
			}
			if(j!=combination_table[i].phonemes.length) continue;

			chars.push(combination_table[i].char);

			for(j=0;j<combination_table[i].phonemes.length;++j) {
				k=pressed_chars.indexOf(combination_table[i].phonemes[j]);
				pressed_keys.splice(k,1);
				pressed_chars.splice(k,1);
			}
		}
	}

	for(i=0;i<pressed_keys.length;++i) {
		if(special_keys.indexOf(pressed_keys[i])>=0) c=pressed_keys[i];
		else c=convert_into_unicode_hangeul_phoneme(layout[pressed_keys[i]-33]);
		chars.push(c);
	}
	
	for(i=0;i<front_special.length;++i) {
		c=front_special[i];

		if(c==8) { // 뒷걸음쇠(backspace)
			if(ohiHangeul_moa_backspace(f,e)) continue;
			if(e.preventDefault) e.preventDefault();
			ohiBackspace(f);
		}
		else ohiInsert(f,0,c);

		if(c==13) complete_hangeul_syllable(f); // 줄바꾸개(enter)
	}

	for(i=0;i<chars.length;++i) {
		c=chars[i];
		if(!i && special_keys.indexOf(c)>=0) {
			special.push(c);
			continue;
		}

		if(unicode_cheos.indexOf(c)>=0) cheos.push(c);
		else if(unicode_ga.indexOf(c)>=0) ga.push(c);
		else if(unicode_ggeut.indexOf(c)>=0) ggeut.push(c);
		else {
			if(!cheos.length && !ga.length && !ggeut.length) front_etc.push(c);
			else rear_etc.push(c);
		}
	}

	prev_cursor_position = -1;
	for(i=0;i<front_etc.length;++i) ohiInsert(f,0,front_etc[i]);
	insert_chars(f,cheos.concat(ga,ggeut));

	for(i=0;i<rear_etc.length;++i) {
		prev_cursor_position = -1;
		ohiInsert(f,0,rear_etc[i]);
	}

	for(i=0;i<rear_special.length;++i) {
		c=rear_special[i];
		prev_cursor_position = -1;

		if(c==8) { // 뒷걸음쇠(backspace)
			if(!ohiHangeul_moa_backspace(f,e)) continue;
			if(e.preventDefault) e.preventDefault();
			ohiBackspace(f);
		}
		else ohiInsert(f,0,c);

		if(c==13) complete_hangeul_syllable(f); // 줄바꾸개(enter)
	}

	pressed_keys = [];
	return;
}

function insert_chars(f,combination_table_chars) { // 여러 문자를 넣음 (줄임말을 넣을 때)
	if(typeof combination_table_chars == 'undefined' || typeof combination_table_chars.length == 'undefined') return;
	var chars = combination_table_chars.slice();
	var a=[],h=0,i,j,k,l;
	abbreviation_processing_state=1;

	if(is_phonemic_writing_input() && option.phonemic_writing_in_single_phoneme) {
	// 겹낱자를 홑낱자로 풀어서 풀어쓰기할 때
		for(i=0;i<chars.length;++i) {
			a=convert_into_single_phonemes(chars[i]);
			if(a.length) for(j=0;j<a.length;++j) chars.splice(i+j, !j?1:0, a[j]);
		}
	}

	for(i=0;i<chars.length;++i) {
		// 완성형 낱내자 부호값(NFC)을 첫가끝 조합형 낱자 단위 부호값(NFD)으로 바꿈
		a = convert_NFC_into_NFD(chars[i]);
		if(a.constructor == Array && a.length==3 && a[0]+a[1]+a[2]) {
			chars.splice(i, 1, a[0],a[1]);
			if(a[2]) chars.splice(i+2, 0, a[2]);
		}
	}

	if(chars.length) {
		prev_cursor_position = f.selectionEnd;
		if(f.selectionStart!=f.selectionEnd && is_phonemic_writing_input()) {
			prev_cursor_position += ohiQ[0]+ohiQ[3]+ohiQ[6] ? 1:0;
			if(NFD_stack.phoneme.length) prev_cursor_position += NFD_stack.combined_phoneme.length + (NFD_stack.combined_phoneme.length==3 && !option.phonemic_writing_NFD_ggeut_to_cheos ? 1:0);
		}
		
		for(i=0;i<chars.length;++i) {
			if(unicode_NFD_hangeul_phoneme.indexOf(chars[i])>=0) ohiHangeul3(f,0,chars[i]); // 한글 낱자일 때
			else ohiInsert(f,0,chars[i]); // 한글 낱자가 아닐 때
		}
	}

	abbreviation_processing_state = 0;
}


function sign_layout_input(f,e,key) {
	var c, i;

	var layout_info = find_current_layout_info();
 	var sign_layout = find_extended_sign_layout();

	if(!option.enable_sign_ext || !sign_layout) return 0;

	if(Ko_type.substr(0,3)=='3m-') { // 세모이 자판을 비롯한 모아치기 자판
		if(sign_ext_state>0) {
		// 기호 확장 배열에서 기호를 넣음
			c=sign_layout[key-33][sign_ext_state-1];
			ohiInsert(f,0,c);
			esc_ext_state();
			return 1;
		}
		else if(key<0 && key>-4) {
		// 기호 확장 배열로 들어감
			sign_ext_state=-key;
			show_keyboard_layout();
			return 0;
		}
		esc_ext_state();
		return 0;
	}

	// 요즘한글 3-2011, 3-2012 자판의 특수기호 확장 배열
	if(!is_old_hangeul_input() && (Ko_type=='3-2011' || Ko_type=='3-2012')) {
		if((key==118 || key==56) && ( !NFD_stack.phoneme.length&&(!ohiQ[0]&&!ohiQ[3] || ohiQ[3]) || NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.combined_phoneme[0])<0&&(unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0 || unicode_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0)) ) {
		// 3-2011, 3-2012 자판의 왼쪽 특수기호 확장 글쇠(ㅗ·ㅢ)가 눌린 횟수 더하기
			i=0;
			if(key==118 && !sign_layout[key-33][sign_ext_state%10-1]) { // 왼쪽 ㅗ
				if(sign_ext_state<10) ++sign_ext_state;
				else sign_ext_state+=2;
				i=1;
			}
			if(key==56 && !sign_layout[key-33][sign_ext_state%10-1]) { // 오른쪽 ㅢ
				if(!sign_ext_state) sign_ext_state=10;
				if(sign_ext_state>=10) ++sign_ext_state;
				else sign_ext_state+=2;
				i=1;
			}
			if(i) {
				if(sign_ext_state%10>3)	sign_ext_state=0;
				show_keyboard_layout(Ko_type);
				return 1;
			}
		}

		if(sign_ext_state) {
			if(NFD_stack.phoneme.length) complete_hangeul_syllable(f);
			c=sign_layout[key-33][sign_ext_state%10-1];
			ohiInsert(f,0,c);
			esc_ext_state();
			return 1;
		}
	}

	if(!ohiHangeul3_HanExtKey && (key==0x2F || key==0x39)
	 && (((!ohiQ[0]&&!ohiQ[3] || ohiQ[3] || ohiQ[0]&&(key==0x2F || key==0x39) && sign_ext_state)
	 && ((unicode_cheos.indexOf(NFD_stack.phoneme[0])<0&&unicode_ga.indexOf(NFD_stack.phoneme[0])<0&&unicode_ggeut.indexOf(NFD_stack.phoneme[0])<0) || unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 || unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0)))
	) { // 나머지 공세벌식 자판의 기호 확장 글쇠가 눌린 횟수 더하기
		if(ohiRQ[3] && !ohiQ[4] && !ohiQ[6] && (ohiQ[3]==39 || ohiQ[3]==44)) {
			// 받침이 들어가지 않은 때에 오른쪽 ㅗ 또는 ㅜ 자리 글쇠가 두 번 눌리면 ㅗ 또는 ㅜ를 지움 (첫소리 다음에 확장 기호를 넣기 위함)
			ohiRQ[3]=0;
			ohiHangeul_backspace(f,e);
		}
		var i,j,k,l,sign_layout_depth=[0,0];
		if(sign_layout[0].constructor == Array) {
			for(i=0;i<sign_layout.length;++i) {
				for(j=0;j<2;++j) {
					if(sign_layout[i][j].constructor != Array) continue;
					for(k=sign_layout_depth[j];k<sign_layout[i][j].length;++k)
						if(sign_layout[i][j][k] && k+1 > sign_layout_depth[j]) sign_layout_depth[j] = k+1;
				}
			}
		}

		if(key==0x2F && sign_ext_state%10<sign_layout_depth[0]) {	// 밑기호 글쇠(오른쪽 ㅗ)가 눌렸을 때
			if(sign_ext_state>10) esc_ext_state();
			++sign_ext_state;
			if(sign_ext_state>sign_layout_depth[0]) esc_ext_state();
			else show_keyboard_layout(Ko_type);
			return 1;	
		}
		if(key==0x39 && sign_ext_state%10<sign_layout_depth[1]) {	// 윗기호 글쇠(오른쪽 ㅜ)가 눌렸을 때
			if(sign_ext_state<11) {esc_ext_state(); sign_ext_state=10;}
			++sign_ext_state;
			if(sign_ext_state%10>sign_layout_depth[1]) esc_ext_state();
			else show_keyboard_layout(Ko_type);
			return 1;
		}
	}

	if(sign_ext_state) {
	// 나머지 공세벌식 자판의 기호 확장 배열
		if(sign_layout[key-33].constructor == Array) {
			if(sign_ext_state<11) c=sign_layout[key-33][0][sign_ext_state-1];
			if(sign_ext_state>10) c=sign_layout[key-33][1][sign_ext_state%10-1];
		}
		else c=sign_layout[key-33];

		if(NFD_stack.phoneme.length && key!=8 && unicode_NFD_hangeul_sidedot.indexOf(c)<0) complete_hangeul_syllable(f);

		ohiInsert(f,0,c);
		esc_ext_state();
		return 1;
	}
	return 0;
}


function Sin3_extended_sign_layout_input(f,key,c1) { // 첫소리 ㅇ,ㄱ,ㅈ,ㅂ 자리 글쇠를 쓰는 신세벌식 자판의 확장 배열 기호 넣기
	var c;
	var extended_sign_layout = find_extended_sign_layout();
	if(is_old_hangeul_input() && checkCapsLock()) return 0;

	if(option.enable_sign_ext && sign_ext_state && extended_sign_layout) {
	// 신세벌식 기호 확장 배열에서 문자를 넣을 때
		c = extended_sign_layout[key-33][sign_ext_state-1];
		ohiBackspace(f);
		ohiInsert(f,0,c);
		esc_ext_state();
		initialize_NFD_stack();
		return -1;
	}
	else if(option.enable_sign_ext && !sign_ext_state && extended_sign_layout && NFD_stack.phoneme.length==1 && NFD_stack.phoneme[0]==0x110B/*ㅇ*/ && (c1==0x1100/*ㄱ*/ || c1==0x110C/*ㅈ*/ || c1==0x1107/*ㅂ*/)) {
	// 신세벌식 기호 확장 배열 상태로 넘어가는 조건이 갖추어졌을 때 (NFD)
		if(c1==0x1100) sign_ext_state=1;
		else if(c1==0x110C) sign_ext_state=2;
		else if(c1==0x1107) sign_ext_state=3;
		show_keyboard_layout('Sin3-ext');
		return -1;
	}
	else if(option.enable_sign_ext && !sign_ext_state && extended_sign_layout && ohiQ[0]==150-92-35 && (c1==128 || c1==151 || c1==145) && !ohiQ[3] && !ohiQ[6]) {
	// 신세벌식 기호 확장 배열 상태로 넘어가는 조건이 갖추어졌을 때 (NFC)
		if(c1==128) sign_ext_state=1;
		else if(c1==151) sign_ext_state=2;
		else if(c1==145) sign_ext_state=3;
		show_keyboard_layout('Sin3-ext');
		return -1;
	}

	return 0;
}


function NFD_hangeul_input(f,key,c) {	// 첫가끝(세벌식) 부호계를 쓰는 요즘한글/옛한글 처리
	if(c==0x1160 && NFD_stack.phoneme[0]==0x1160) return; // 가운뎃소리 채움 문자가 잇달아 들어오면 처리하지 않음

	if(unicode_NFD_hangeul_sidedot.indexOf(c)>=0) { // 성조를 나타내는 방점일 때
		ohiInsert(f,0,c);
		return;
	}

	ohiSelection(f,0);
	var diphthong=0; // 겹홀소리의 첫 홀소리인지 (갈마들이 자판)

	if(c<0) {
		c=-c;
		diphthong=1;
	}

	var type_name='';
	if(typeof current_layout_info.type_name != 'undefined') type_name = current_layout_info.type_name;
	else if(is_old_hangeul_input() && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined') type_name = current_layout_info.old_hangeul_layout_type_name;

	if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) c = convert_into_unicode_hangeul_phoneme(c);

	if(is_old_hangeul_input() && Ko_type.substr(0,2)=='3-' && ['3-2011','3-2011-y','3-2012','3-2012-y','3-2014','3-2014-y','3-2015P','3-2015P-y'].indexOf(Ko_type)>=0) {
	// 전환 글쇠를 쓰는 한글 확장 배열 처리 (3-2011 / 3-2012 / 3-2014 / 3-2015P 옛한글)
		if(key==55 || c==0x1168) {	// 첫째 한글 확장 글쇠(ㅖ 자리 글쇠)가 눌렸을 때
			if(ohiHangeul3_HanExtKey%0x10==2 || ohiHangeul3_HanExtKey==0x11) { esc_ext_state(); complete_hangeul_syllable(f); return false;}
			if(ohiHangeul3_HanExtKey>0x10) {esc_ext_state(); return false;}
			ohiHangeul3_HanExtKey = (ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+1;
			show_keyboard_layout('3-2012y_han_ext');
			return false;
		} else if(key==56 || c==0x1174) { // 두째 한글 확장 글쇠(ㅢ 자리 글쇠)가 눌렸을 때
			if(ohiHangeul3_HanExtKey%0x10==1 || ohiHangeul3_HanExtKey==0x12) { esc_ext_state(); complete_hangeul_syllable(f); return false;}
			if(ohiHangeul3_HanExtKey>0x10) {esc_ext_state(); return false;}
			ohiHangeul3_HanExtKey = (ohiHangeul3_HanExtKey&&ohiHangeul3_HanExtKey)*0x10+2;
			show_keyboard_layout('3-2012y_han_ext');
			return false;
		}

		if(ohiHangeul3_HanExtKey) { // 한글 확장 배열에서 넣기
			layout = K3_2012y_extended_hangeul_layout;
			c=layout[key-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey/0x10];
			c=layout[key-33][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10 ? 1:0];
		}
	}

	// 공세벌식 자판에서 첫소리가 들어온 뒤 [ 자리 글쇠가 눌렸을 때 아래아를 넣음
	if(Ko_type.substr(0,2)=='3-' && key==0x5B && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && !ohiHangeul3_HanExtKey) c=0x119E;

	if(NFD_stack.phoneme[0]!=0x1160 && NFD_stack.combined_phoneme[0]==0x1160 && unicode_cheos.indexOf(NFD_stack.combined_phoneme[1])>=0 && (unicode_NFD_hangeul_phoneme.indexOf(c)>=0 || c==0x1160)) {
	// 바로 앞서 첫소리가 들어 왔고 한글 낱자가 들어왔다면 가운뎃소리 채움 문자를 지움
		ohiBackspace(f);
		NFD_stack.combined_phoneme.splice(0,1);
	}

	// 가운뎃소리 채움 문자 (두벌식 자판)
	if(c==0x1160) {
		if(unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 || NFD_stack.phoneme[0]==0x1160) {
		// 바로 앞에 가운뎃소리가 들어왔으면 조합 끊음
			complete_hangeul_syllable(f);
			if(is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInput(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
		}

		// 한글을 조합하지 않던 상태였으면 첫소리 채움 문자를 넣음
		if(!NFD_stack.phoneme.length) {
			NFD_stack.combined_phoneme.unshift(0x115F);
			ohiInput(f,0,0x115F); // 첫소리 채움			
		}

		// 가운뎃소리 채움 문자가 들어가지 않았으면 가운뎃소리 채움 문자를 넣음
		if(NFD_stack.combined_phoneme[0]!=0x1160) {
			NFD_stack.phoneme.unshift(c);
			NFD_stack.phoneme_R.unshift(0);
			NFD_stack.combined_phoneme.unshift(0x1160);
			ohiInput(f,0,0x1160);
		}

		ohiSelection(f,NFD_stack.combined_phoneme.length);
		return;
	}

	var combined_phoneme=combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c);

	// 앞 낱자와 조합하지 않는 첫소리나 한글이 아닌 문자가 들어왔을 때에 조합을 끊음
	if(!combined_phoneme&&unicode_cheos.indexOf(c)>=0 || unicode_NFD_hangeul_code.indexOf(c)<0) {
		if(unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && NFD_stack.combined_phoneme.indexOf(0x1160)<0) {
		// 첫소리만 들어 있었으면 가운뎃소리 채움 문자를 넣음
			ohiInput(f,0,0x1160);
			NFD_stack.combined_phoneme.unshift(0x1160);
		}
		i = unicode_NFD_hangeul_code.indexOf(c)>=0 && NFD_stack.phoneme.length ? 1 : 0;
		complete_hangeul_syllable(f);
		if(i && is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInput(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
	}

	if(!combined_phoneme && (unicode_ga.indexOf(c)>=0 || compatibility_ga.indexOf(c)>=0) && unicode_cheos.indexOf(NFD_stack.phoneme[0])<0) {
	// 앞에 첫소리가 없이 가운뎃소리가 들어왔을 때
		i = /*unicode_NFD_hangeul_code.indexOf(c)>=0 &&*/ NFD_stack.phoneme.length ? 1 : 0;
		complete_hangeul_syllable(f);
		if(i && option.phonemic_writing_adding_space_every_syllable_end && is_phonemic_writing_input()) ohiInput(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
		ohiInput(f,0,0x115F); // 첫소리 채움 문자 넣음
		NFD_stack.combined_phoneme = [];
		NFD_stack.combined_phoneme.unshift(0x115F);
	}
	else if(!combined_phoneme && unicode_ggeut.indexOf(c)>=0) {
	// 끝소리가 들어왔을 때
		if(!is_old_hangeul_input() && !option.only_NFD_hangeul_encoding && NFD_stack.combined_phoneme.length==2 && unicode_ga.indexOf(NFD_stack.combined_phoneme[0])>=0 && unicode_cheos.indexOf(NFD_stack.combined_phoneme[1])<0) {
		// 요즘한글 자판이고 앞에 첫소리 없이 홀소리가 들어왔다면
			complete_hangeul_syllable(f);
			ohiInsert(f,0,ohiQ=[convert_into_ohi_hangeul_phoneme(c),0,0,0,0,0,0,0,0]);
			return;
		}

		if(unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && NFD_stack.combined_phoneme.indexOf(0x1160)<0) {
		// 바로 앞에 첫소리가 들어왔다면 가운뎃소리 채움 문자 넣음
			ohiInput(f,0,0x1160);
			NFD_stack.combined_phoneme.unshift(0x1160);
		}
		else if(unicode_cheos.indexOf(NFD_stack.phoneme[0])<0 && unicode_ga.indexOf(NFD_stack.phoneme[0])<0 && NFD_stack.combined_phoneme.indexOf(0x115F)<0 && NFD_stack.combined_phoneme.indexOf(0x1160)<0) {
		// 바로 앞에 한글 낱자나 채움 문자가 들어오지 않았을 때 첫소리·가운뎃소리 채움 문자를 넣음
			i = unicode_NFD_hangeul_code.indexOf(c)>=0 && NFD_stack.phoneme.length ? 1 : 0;
			complete_hangeul_syllable(f);
			if(i && is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInput(f,0,32); // 풀어쓰기할 때 낱내자 뒤에 빈칸 넣기 (한글 조합이 새로 이어질 때)
			ohiInput(f,0,0x115F); // 첫소리 채움
			ohiInput(f,0,0x1160); // 가운뎃소리 채움
			NFD_stack.combined_phoneme.unshift(0x1160,0x115F);
		}
	}

	NFD_stack.phoneme.unshift(c);
	NFD_stack.phoneme_R.unshift(diphthong);

	if(combined_phoneme) {
		NFD_stack.combined_phoneme[0] = combined_phoneme;
		ohiBackspace(f);
		ohiInput(f,0,combined_phoneme);
	}
	else {
		if(unicode_ggeut.indexOf(c)>=0 && unicode_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0) {
		// 먼저 들어온 끝소리와 조합하지 않는 끝소리가 들어왔으면 낱내 조합을 끊고 채움 문자를 넣음
			complete_hangeul_syllable(f);
			ohiInput(f,0,0x115F); // 첫소리 채움
			ohiInput(f,0,0x1160); // 가운뎃소리 채움
			NFD_stack.combined_phoneme.unshift(0x1160,0x115F);
			NFD_stack.phoneme.unshift(c);
		}
		NFD_stack.combined_phoneme.unshift(c);
		ohiInsert(f,0,c);
	}

	if(unicode_cheos.indexOf(c)>=0) {
	// 넣은 낱자가 첫소리이면 가운뎃소리 채움 문자 넣음
		ohiInput(f,0,0x1160);
		NFD_stack.combined_phoneme.unshift(0x1160);
	}

	esc_ext_state();

	if(NFD_stack.combined_phoneme.length && unicode_NFD_hangeul_phoneme.indexOf(c)>=0) {
		ohiSelection(f,NFD_stack.combined_phoneme.length);
	}
}

function NFD_hangeul_single_phoneme_syllable_input(f,c) {
	var a=[],i;
	c=convert_into_unicode_hangeul_phoneme(c);

	if(is_phonemic_writing_input() && option.phonemic_writing_in_single_phoneme && option.phonemic_writing_NFD_ggeut_to_cheos) {
		if(unicode_ggeut.indexOf(c)>=0) {	// 풀어쓰기 끝소리 → 첫소리
			a=convert_into_single_phonemes(c);
			if(a.length>1) for(i=0;i<a.length;++i) NFD_hangeul_single_phoneme_syllable_input(f,a[i]);
		 	else c = unicode_ggeut_to_cheos[unicode_ggeut.indexOf(c)];
		}
	}

	if(unicode_cheos.indexOf(c)>=0) ohiInsert(f,0,c); // 첫소리 넣기
	else if(unicode_ga.indexOf(c)>=0 || unicode_ggeut.indexOf(c)>=0) ohiInput(f,0,0x115F); // 첫소리 채움 문자 넣기

	if(unicode_ga.indexOf(c)>=0) ohiInsert(f,0,c); // 첫소리 채움 문자 넣기
	else if(unicode_cheos.indexOf(c)>=0 || unicode_ggeut.indexOf(c)>=0) ohiInput(f,0,0x1160); // 가운뎃소리 채움 문자 넣기

	if(unicode_ggeut.indexOf(c)>=0)	ohiInsert(f,0,c); // 끝소리 넣기

	initialize_NFD_stack();	
}

function converting_for_special_galmadeuli_layouts(f, e, key, c1, c2, sub_c1, sub_c2, transform) {
// 신세벌식 자판과 다른 배열 방식을 쓰는 갈마들이 세벌식 자판을 신세벌식 자판의 배열 방식으로 처리할 수 있게 문자값 자리를 바꿈

	var layout = find_current_layout();
	var a = [c1, sub_c1, c2, sub_c2];
	var _c1, _c2;

	if(Ko_type.substr(0,9)=='Sin3-Cham') { // 참신세벌식
		if(NFD_stack.phoneme.length==1 && unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ga.indexOf(c1)>=0 && combine_unicode_NFD_hangeul_phoneme(NFD_stack.phoneme[0],c1)) {
			// 홀소리만 들어갔는데 먼저 들어간 것과 조합되는 홀소리이면 홀소리를 넣음	
		}
		else if(NFD_stack.phoneme.length && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ga.indexOf(c1)>=0 && !combine_unicode_NFD_hangeul_phoneme(NFD_stack.phoneme[0],sub_c1)) {
			// 앞의 끌소리와 조합되지 않는 끝소리이면 홀소리를 넣음
		}
		else if((ohiQ[0] || NFD_stack.phoneme.length) && unicode_ga.indexOf(c1)>=0 && unicode_ggeut.indexOf(sub_c1)>=0) {
			// 한글을 조합하고 있고 가운뎃소리와 끝소리가 있는 글쇠 자리
			a = [sub_c1, c2, c1, sub_c2];
		}	else if(unicode_ga.indexOf(c1)>=0 && unicode_cheos.indexOf(sub_c1)>=0) {
			if(!ohiQ[0] || !NFD_stack.phoneme.length || unicode_cheos.indexOf(NFD_stack.phoneme[0])<0) {
				// 기본 배열(c1)에 가운뎃소리가 있고  보조 배열(sub_c1)에 첫소리가 있는 자리 (첫소리 ㅋ과 ㅑ가 있는 b 자리)
				a = [sub_c1, c1, c2, sub_c2];
			}
		}	else if(unicode_NFD_hangeul_phoneme.indexOf(c1)<0 && unicode_ggeut.indexOf(sub_c1)>=0
		 && (ohiQ[0] && ohiQ[3] && !ohiQ[6] || unicode_ga.indexOf(NFD_stack.phoneme[0])>=0)) {
			// 끝소리 ㅋ (B 자리)
		 	 a = [sub_c1, c1, c2, sub_c2];
		}
		else if(sub_c1==0x1B && (ohiQ[0]+ohiQ[3]+ohiQ[6] || NFD_stack.phoneme.length)) {
			// 한글 조합을 멈춤 (escape)
			a = [0, 0, c2, sub_c2];
			complete_hangeul_syllable(f);
		}

		return [a[0], a[1], a[2], a[3], transform];
	}

	if(Ko_type.substr(0,2)=='3-') {
		transform = true;

		if(Ko_type == '3-18Na') {
			if(with_shift_key(key) && unicode_ggeut.indexOf(sub_c2)>=0 && unicode_ga.indexOf(c2)>=0
			  && (NFD_stack.phoneme.length && unicode_ggeut.indexOf(NFD_stack.phoneme[0])<0 || (ohiQ[0]+ohiQ[3])&&!ohiQ[6])) {
			// 윗글쇠 눌러 겹받침 넣기
				a = [sub_c2, sub_c1, c2, c1];
			}
			else if((!with_shift_key(key) && unicode_ggeut.indexOf(c2)>=0 && unicode_ggeut.indexOf(sub_c2)>=0 && unicode_ga.indexOf(c1)>=0)
			 || (with_shift_key(key) && unicode_ggeut.indexOf(c1)>=0 && unicode_ggeut.indexOf(sub_c1)>=0 && unicode_ga.indexOf(c2)>=0)) {
			// 끝소리가 들어갔고 가운뎃소리와 끝소리가 있는 글쇠가 눌렸을 때
				if( (unicode_non_combined_ggeut.indexOf(convert_into_unicode_hangeul_phoneme(ohiQ[6]))>=0 || NFD_stack.phoneme.length && unicode_non_combined_ggeut.indexOf(NFD_stack.combined_phoneme[0])>=0) && 
				   (!with_shift_key(key) && unicode_ggeut.indexOf(sub_c2)>=0 && (NFD_stack.phoneme.length && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && sub_c2 != NFD_stack.phoneme[0] && c2 == NFD_stack.phoneme[0] && c2==NFD_stack.combined_phoneme[0] || ohiQ[6] && !ohiQ[7] /*&& sub_c2 != convert_into_unicode_hangeul_phoneme(ohiQ[6]) && c2 == convert_into_unicode_hangeul_phoneme(ohiQ[6])*/)
				  || with_shift_key(key) && unicode_ggeut.indexOf(sub_c1)>=0 && (NFD_stack.phoneme.length && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && sub_c1 != NFD_stack.phoneme[0] && c1 == NFD_stack.phoneme[0] && c1==NFD_stack.combined_phoneme[0] || ohiQ[6] && !ohiQ[7] /*&& sub_c1 != convert_into_unicode_hangeul_phoneme(ohiQ[6]) && c1 == convert_into_unicode_hangeul_phoneme(ohiQ[6])*/)) ) {
				// 보조 배열에도 끝소리가 있고 끝소리가 하나만 들어갔을 때
					// 먼저 들어간 것과 조합되는 끝소리이면 끝소리를 넣고, 그렇지 않으면 가운뎃소리를 넣음 (나빌 입력기에 없는 처리) (조합이 막히는 때를 막음)
					_c1 = with_shift_key(key) ? sub_c1 : sub_c2;
				 	_c2 = with_shift_key(key) ? sub_c2 : sub_c1;
				 	if(!combine_unicode_NFD_hangeul_phoneme((ohiQ[6] ? convert_into_unicode_hangeul_phoneme(ohiQ[6]) : NFD_stack.combined_phoneme[0]), _c1)) {
				 		if(_c1 == convert_into_unicode_hangeul_phoneme(ohiQ[6]) || _c1 == NFD_stack.combined_phoneme[0]) {_c1 = c1;}
				 		else {
				 			if(!ohiQ[0] && !NFD_stack.phoneme.length) ohiBackspace(f,e);
				 			else ohiHangeul_backspace(f,e);
				 		}
				 	} else if(combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[6]), sub_c2)) {
				 		_c1 = sub_c2;
				 	} else {
				 		_c1 = c1;
				 	}
				 	return [_c1, a[1], a[2], a[3], 1];
				}

				if(ohiQ[6] && with_shift_key(key) && unicode_ggeut.indexOf(c1)>=0 && unicode_non_combined_ggeut.indexOf(convert_into_unicode_hangeul_phoneme(ohiQ[6]+ohiQ[7]))<0) {
				// 겹받침이 조합된 다음에 받침이 또 들어왔으면 조합 끊기 (완성형)
					complete_hangeul_syllable(f);
				}
			}
			else if(!with_shift_key(key) && unicode_ggeut.indexOf(c1)>=0 && unicode_ga.indexOf(sub_c1)<0 && unicode_ga.indexOf(c2)<0 && unicode_ga.indexOf(sub_c2)<0) {
				if(unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && NFD_stack.combined_phoneme[0] != c1
				 || ohiQ[6] && convert_into_ohi_hangeul_phoneme(c1) != ohiQ[6]+ohiQ[7]) {
			// 끝소리만 있는 받침 ㅈ 자리(; 자리) 글쇠가 거듭 눌렸을 때 조합 끊기
					complete_hangeul_syllable(f);
				}
			}
		}
	}

	if(Ko_type.substr(0,5)=='LGG3-') { // 조합되지 않는 받침이 들어왔으면 조합을 끊음
		if(ohiQ[6] && ohiQ[7] && unicode_ggeut.indexOf(c1)>=0 && (ohiQ[8] || !combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[6]+ohiQ[7]),convert_into_unicode_hangeul_phoneme(c1)))) {complete_hangeul_syllable(f);}
	}

	if(Ko_type.substr(0,5)=='Sin3-') {
		// 신세벌식 원안과 달리 홀소리를 아랫글 자리에 두고 받침을 윗글 자리에 두는 배열 방식이면 transform = true
		if(typeof layout[64] != 'number') i=layout[64][0], j=layout[shift_table[64]][0]; // a 자리
		else i=layout[64], j=layout[shift_table[64]];
		if(!with_shift_key(key) && unicode_ga.indexOf(i)>=0) transform = true;
		else if(with_shift_key(key) && unicode_ga.indexOf(j)>=0) transform = true;
	}

	// 홀소리를 아랫글 자리에 두고 받침을 윗글 자리에 두는 신세벌식 자판을 함께 처리하기 위한 작업
	if(transform && /*!with_shift_key(key) && */unicode_ga.indexOf(c1)>=0 && unicode_ggeut.indexOf(c2)>=0
	 && (NFD_stack.phoneme.length && (unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 || NFD_stack.phoneme.length>1 && unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 || unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2))
	  || ohiQ[0]&&!ohiQ[3]&&!ohiQ[6] || ohiQ[0]&&ohiQ[3]&&!ohiQ[6] || ohiQ[0]&&ohiQ[3]&&ohiQ[6]&&!ohiQ[7])) {
		// 한글을 차례대로 조합하고 있는데 현재 들어간 낱자와 조합되는 낱자일 때
			a = [c2, sub_c1, c1, sub_c2];
	}

	return [a[0], a[1], a[2], a[3], transform];
}

function NFC_galmadeuli_preprocess(f,e,key) { // 유니코드 완성형 한글 부호계를 쓸 때의 갈마들이 세벌식 자판 전처리 함수 (신세벌식 자판을 기준으로 함)
	var a, i, j, c, c1, c2, sub_c1, sub_c2;
	var sublayout = find_sublayout();
	var transform = false; // 홀소리와 받침의 자리가 신세벌식 자판과 맞바뀐 배열 방식을 쓰는지

	// c1가 아랫글 자리이면 c2는 윗글 자리, 아니면 그 반대임
	a = find_galmadeuli_chars(key);
	c1 = a[0], c2 = a[1], sub_c1 = a[2], sub_c2 = a[3];
	if(Sin3_extended_sign_layout_input(f,key,convert_into_ohi_hangeul_phoneme(c1))==-1) return -1;
	a = converting_for_special_galmadeuli_layouts(f, e, key, c1, c2, sub_c1, sub_c2, transform);
	c1 = a[0], sub_c1 = a[1], c2 = a[2], sub_c2 = a[3], transform = a[4];

	c = c1;

	ohi_c1 = convert_into_ohi_hangeul_phoneme(c1);
	ohi_c2 = convert_into_ohi_hangeul_phoneme(c2);
	ohi_sub_c1 = convert_into_ohi_hangeul_phoneme(sub_c1);
	ohi_sub_c2 = convert_into_ohi_hangeul_phoneme(sub_c2);

	if(Ko_type.substr(0,5)=='Sin3-' && ohi_c2<31 && with_shift_key(key) && !ohiQ[0] && !ohiQ[3] && ohiQ[6] && !ohiQ[7] && ohiDoubleJamo(2,ohiQ[6],ohi_c2)) {
	// 홑받침만 들어갔는데 윗글쇠와 함께 왼쪽 글쇠가 눌렸을 때 겹받침 조합하기
		ohiQ[7]=ohiDoubleJamo(2,ohiQ[6],ohi_c2);
		ohiInsert(f,0,ohiQ);
		return -1;
	}

	if(Ko_type.substr(0,5)=='Sin3-' && ohi_c1<31 && !with_shift_key(key) && !ohiQ[0] && !ohiQ[3] && ohiQ[6] && !ohiQ[7]) {
	// 홑받침만 들어가 있는데 윗글쇠를 누르지 않은 채로 받침 자리 글쇠가 눌렸을 때 조합 끊기 (홑받침 쓰는 초성체 조합)
		complete_hangeul_syllable(f);
	}
	else if(option.enable_double_final_ext && with_shift_key(key) && sub_c1 
	 && (ohiQ[0] || NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])>=0) && (ohiQ[3] && !ohiQ[6] || with_shift_key(key) && NFD_stack.phoneme.length&&unicode_ga.indexOf(NFD_stack.phoneme[0])>=0)) {
	// 윗글쇠를 함께 눌렀을 때 왼쪽 윗글 자리의 겹받침 넣기 (겹받침 확장 입력)
		c = ohi_sub_c1;
	}
	else if(Ko_type.substr(0,5)=='LGG3-' && !with_shift_key(key) && ohiQ[0] && !ohiQ[3] && !sub_c1 && unicode_cheos.indexOf(c1)>=0 && unicode_ga.indexOf(c2)>=0) {
	// 첫소리만 들어갔을 때 첫소리와 조합용이 아닌 홀소리가 든 글쇠가 눌리면 홀소리를 넣음 (이건구 한 손 세벌식 자판)
		c = c2;
	}
	else if(!with_shift_key(key) && ohiQ[0] && !ohiQ[3] && unicode_ga.indexOf(sub_c1)>=0) {
	// 첫소리만 들어갔을 때 보조 배열(sublayout)에서 겹홀소리 조합용 ㅗ, ㅜ, ㅡ, ㆍ 등을 넣음
		c = ohi_sub_c1;
		ohiRQ[3]=1;
	}
	else if((ohiRQ[3] || backup_ohiRQ[3]) && ohi_c1<31 && NFD_stack.phoneme[0]==0x119E && !(NFD_stack.phoneme.length>1 && (unicode_ga.indexOf(NFD_stack.phoneme[1])>=0 || unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0))) {
	// 아래아가 들어 있을 때에 ㆎ(아래애), ᆢ(쌍아래아) 조합하기
		if(key==100) c1=0x1175; // ㆎ(아래애) 조합하기
		else if(key==122 && NFD_stack.phoneme[1]!=0x119E) c1=0x119E; // 쌍아래아(ᆢ) 조합하기
		NFD_hangeul_input(f,key,c1);
		return -1;
	}
	else if(NFD_stack.phoneme.length && ohi_c1<31 && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0) {
	// 첫가끝 조합 상태에서 받침이 들어 있는데 또 받침이 들어왔을 때
		if(unicode_ggeut.indexOf(NFD_stack.phoneme[1])<0) {
			if(option.enable_double_final_ext && sub_c1 && NFD_stack.phoneme[0]==convert_into_unicode_hangeul_phoneme(c1)) {
			// 같은 받침 글쇠가 거듭 눌렸을 때 겹받침 확장 배열 적용하기
				c = c1;
				NFD_stack.phoneme.unshift(c);
				NFD_stack.phoneme_R.unshift(0);
				NFD_stack.combined_phoneme[0]=sub_c1;
				ohiSelection(f,0);
				ohiBackspace(f);
				ohiInsert(f,0,sub_c1);
				ohiSelection(f,NFD_stack.combined_phoneme.length);
				return -1;
			}
		}
	}
	else if(ohiRQ[3] && /*ohi_c1<31 &&*/ !ohiQ[4] && !ohiQ[6] && combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[3]+35),c2)) {
	// 먼저 들어간 조합용 홀소리와 겹홀소리를 이룰 수 있는 홀소리일 때
		c = ohi_c2;
	}
	else if(!with_shift_key(key) && ohi_c1<31 && ohiQ[0]&&!ohiQ[3]&&!ohiQ[6] && (ohi_c2>65 && ohi_c2<87 || key==122)) {
	// 왼손 쪽 아랫글 자리에서 가운뎃소리 넣기
		c = ohi_c2;
		if(key==122 && (c2==0x119E/* || c2>157*/)) c = 0x119E; // Z 자리 아래아
		ohiRQ[3]=0;
	}
	else if((transform || Ko_type.substr(0,5)=='LGG3-') && ohi_c1<31 && ohiQ[6] && !ohiQ[7] && (i=combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[6]),c1))) {
	// 받침을 윗글 자리에 두는 신세벌식 자판 또는 이건구 한 손 세벌식 자판의 두번째 들어온 조합되는 받침 처리
		ohiQ[7]=convert_into_ohi_hangeul_phoneme(i)-ohiQ[6];
		ohiInsert(f,0,ohiQ);
		return -1;
	}
	else if(transform && with_shift_key(key) && unicode_ggeut.indexOf(c1)>=0 && unicode_ga.indexOf(c2)>=0) {
	// 받침을 윗글 자리에 두는 신세벌식 자판이고 홀소리와 받침이 있는 글쇠가 윗글쇠와 함께 눌렸을 때
		// 마지막으로 들어간 홀소리와 조합되는 것이면 홀소리를 넣음
		if(ohiQ[3] && combine_unicode_NFD_hangeul_phoneme(convert_into_unicode_hangeul_phoneme(ohiQ[3]+ohiQ[4]+35),c2)) {
			c = c2;
		}
	}

	return c;
}

function NFD_galmadeuli_preprocess(f,e,key) { // 첫가끝 조합형을 쓸 때의 갈마들이 세벌식 자판 전처리 함수 (신세벌식 자판을 기준으로 함)
	var a, i, j, c, c1, c2, sub_c1, sub_c2;
	var sublayout = find_sublayout();
	var transform = false; // 홀소리와 받침의 자리가 신세벌식 자판과 맞바뀐 배열 방식을 쓰는지

	// c1가 아랫글 자리이면 c2는 윗글 자리, 아니면 그 반대임
	a = find_galmadeuli_chars(key);
	c1 = a[0], c2 = a[1], sub_c1 = a[2], sub_c2 = a[3];
	if(Sin3_extended_sign_layout_input(f,key,c1)==-1) return -1;
	a = converting_for_special_galmadeuli_layouts(f, e, key, c1, c2, sub_c1, sub_c2, transform);
	c1 = a[0], sub_c1 = a[1], c2 = a[2], sub_c2 = a[3], transform = a[4];

	c = c1;

	if(Ko_type.substr(0,5)=='Sin3-' && with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])<0 && unicode_ga.indexOf(NFD_stack.phoneme[0])<0 && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2)) {
	// 홑받침만 들어갔는데 윗글쇠와 함께 왼쪽 글쇠가 눌렸을 때 겹받침 조합하기
		c = combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2);
		NFD_stack.phoneme.unshift(c);
		NFD_stack.phoneme_R.unshift(0);
		NFD_stack.combined_phoneme[0]=c;
		ohiSelection(f,0);
		ohiBackspace(f);
		ohiInsert(f,0,c);
		ohiSelection(f,NFD_stack.combined_phoneme.length);
		return -1;
	}

	if(Ko_type.substr(0,5)=='Sin3-' && option.use_hangeul_compatibility_jamo_when_entering_old_hangeul && is_old_hangeul_input() && !option.only_NFD_hangeul_encoding 
	 && unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])<0 && unicode_ga.indexOf(NFD_stack.phoneme[0])<0 && unicode_ggeut.indexOf(NFD_stack.phoneme[0])>=0 && !combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2)) {
	// 신세벌식 자판에서 따로 들어간 받침의 조합을 끊어 호환 자모로 바꿈 (초성체)
		complete_hangeul_syllable(f);
	}
	else if(option.enable_double_final_ext && with_shift_key(key) && sub_c1 
	 && (NFD_stack.phoneme.length&&unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])>=0) && (ohiQ[3] && !ohiQ[6] || with_shift_key(key) && NFD_stack.phoneme.length&&unicode_ga.indexOf(NFD_stack.phoneme[0])>=0)) {
	// 윗글쇠를 함께 눌렀을 때 왼쪽 윗글 자리의 겹받침 넣기 (겹받침 확장 입력)
		c = sub_c1;
	}
	else if(Ko_type.substr(0,5)=='LGG3-' && !with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && !sub_c1 && unicode_cheos.indexOf(c1)>=0 && unicode_ga.indexOf(c2)>=0) {
	// 첫소리만 들어갔을 때 첫소리와 조합용이 아닌 홀소리가 든 글쇠가 눌리면 홀소리를 넣음 (이건구 한손 세벌식 자판)
		c = c2;
	}
	else if(option.enable_Sin3_diphthong_key && !with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ga.indexOf(sub_c1)>=0) {
	// 첫소리만 들어갔을 때 보조 배열(sublayout)에서 겹홀소리 조합용 ㅗ, ㅜ, ㅡ, ㆍ 등을 넣음
		c = -sub_c1;
	}
	else if(with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ga.indexOf(c1)>=0 && unicode_ggeut.indexOf(c2)>=0) {
	// 첫소리만 들어갔고, 왼손 쪽의 끝소리가 있는 글쇠가 윗글쇠와 함께 눌렸을 때 끝소리를 넣음 (홀소리만 빠진 미완성 낱내자 조합하기)
		c = c2;
	}
	else if(option.enable_Sin3_adding_cheos_with_shift_key && (with_shift_key(key) || !c1) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && unicode_cheos.indexOf(c2)>=0 && (unicode_ga.indexOf(c1)>=0 || unicode_ga.indexOf(sub_c2)>=0)) {
	// 첫소리만 들어갔고, 오른손 쪽의 홀소리가 있는 첫소리 글쇠를 윗글쇠와 함께 눌렀을 때 첫소리를 넣음
		c = c2;
	}
	else if(NFD_stack.combined_phoneme.length>1 && NFD_stack.phoneme_R[0] && unicode_ga.indexOf(c2)>=0 && sub_c1 != c2 && combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2)) {
	// 겹홀소리 조합용 가운뎃소리가 먼저 들어갔고 윗글 자리에 있는 홀소리가 있는 글쇠가 눌렸을 때
	// 1타에 한하여 먼저 들어간 홀소리와 결합되는 홀소리이면 윗글 자리의 홀소리를 넣게 함
		c = c2;
	}
	else if(!with_shift_key(key) && unicode_ggeut.indexOf(c1)>=0 && unicode_cheos.indexOf(NFD_stack.phoneme[0])>=0 && unicode_ga.indexOf(c2)>=0) {
	// 첫소리만 들어갔을 때 왼손 쪽 끝소리가 함께 있는 글쇠 자리에서 가운뎃소리 넣기
		c = c2;
	}
	else if(transform && unicode_ggeut.indexOf(c1)>=0 && unicode_ga.indexOf(c2)>=0) {
	// 본래 신세벌식 자판과 홀소리와 받침 자리가 뒤바뀐 꼴이고 홀소리와 받침이 있는 글쇠가 눌렸을 때
		if(with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])>=0 && unicode_ga.indexOf(NFD_stack.phoneme[0])>=0 && combine_unicode_NFD_hangeul_phoneme(NFD_stack.combined_phoneme[0],c2)) {
		// 윗글쇠와 함께 눌렸고 마지막으로 들어간 홀소리와 조합되는 것이면 홀소리를 넣음
			c = c2;
		}
		else if(!with_shift_key(key) && NFD_stack.phoneme.length && unicode_cheos.indexOf(NFD_stack.phoneme[NFD_stack.phoneme.length-1])<0 && unicode_ga.indexOf(NFD_stack.phoneme[0])>=0) {
		// 윗글쇠를 누르지 않았고 첫소리 없이 홀소리만 들어갔다면 홀소리를 넣음
			c = c2;
		}
	}

	return c;
}

function hangeul_typewriter(f,key) { // 타자기 자판
	var layout = find_current_layout();

	var ch;
	var c1=layout[key-33];
	var c2=layout[ukey[dkey.indexOf(key)]-33];	// 윗글 자리
	var ohi_c1=convert_into_ohi_hangeul_phoneme(c1);
	var ohi_c2=convert_into_ohi_hangeul_phoneme(c2);	// 윗글 자리
	ch=c1;

	if(Ko_type=='4t-1969') {
		if(ohiQ[3]==68-35 && !ohiQ[4] && (!ohiRQ[3]&&c1==86 || ohiRQ[3]==1&&c1==0x3163)) {
		// ㅑ+ㅣ→ㅒ
			ohiQ[4]=1;
			ohiInsert(f,0,ohiQ);
			return -1;
		}

		if(ohiQ[3]==72-35 && !ohiQ[4] && !ohiRQ[3]&&c1==86) {
		// ㅕ+ㅣ→ㅖ
			ohiQ[4]=1;
			ohiInsert(f,0,ohiQ);
			return -1;
		}
	}

	if(Ko_type=='4t-1985') {
		if(shift_lock) {
			ch=c2;
			//if(ohi_ga.indexOf(c1)<0 || ohi_ga.indexOf(c2)<0) shift_lock=0;
			if(unicode_ga.indexOf(c1)<0 || unicode_ga.indexOf(c2)<0) shift_lock=0;
			// 홀소리만 든 글쇠를 누르면 받침 글쇠가 풀리지 않음. 그밖의 글쇠를 누르면 받침 글쇠가 풀림
		}
	}

	if(ohi_cheos.indexOf(convert_into_ohi_hangeul_phoneme(ch))>=0) {
		ohiRQ = [0,0,0,0,0,0,0,0,0];
	}

	if(compatibility_ga.indexOf(ch)>=0) { // 받침 안 붙는 홀소리
		if(is_old_hangeul_input() || option.only_NFD_hangeul_encoding) {
			ch=convert_into_unicode_hangeul_phoneme(ohi_ga[compatibility_ga.indexOf(ch)]);
			if(NFD_stack.phoneme[0]) NFD_stack.phoneme_R[0]=1;
			NFD_stack.phoneme.unshift(ch);
			NFD_stack.phoneme_R.unshift(1);
			NFD_stack.combined_phoneme.unshift(0x1160);
			return -1;
		}
		else {
			ch=ohi_ga[compatibility_ga.indexOf(ch)];
			if(!ohiQ[3]) ohiRQ[3]=1;
			else ohiRQ[4]=1;
		}
	}

	return ch;
	//return convert_into_ohi_hangeul_phoneme(ch);
	//return (is_old_hangeul_input() || option.only_NFD_hangeul_encoding) ? ch : convert_into_ohi_hangeul_phoneme(ch);
}


function is_galmadeuli_input() {
	var type_name = current_layout_info.type_name;
	if(type_name.substr(0,2)=='2-') {
		for(var i=0; i<current_layout_info.layout.length; ++i)
			if(typeof current_layout_info.layout[i] == 'object') return true;
		return false;
	}
	if(type_name.substr(0,5)=='Sin3-') return true;
	if(type_name.substr(0,5)=='LGG3-') return true;
	if(type_name.substr(-3)=='_gm') return true;
	if(type_name.substr(0,4)=='3-20' && Number(type_name.substr(2,4))>2013) return true;
	if(type_name.substr(0,3)=='3-P') return true;
	if(type_name.substr(0,3)=='3-D') return true;
	var a=['3-18Na'];
	if(a.indexOf(type_name)>=0)	return true;
	return false;
}

function can_be_galmadeuli_key(key) { // 첫가끝 갈마들이를 할 수 있게 아랫글/윗글 자리에 한글 낱자가 들어간 글쇠인지
	shift_key = shift_table[key-33];
	var mainlayout = find_mainlayout();
	var sublayout = find_sublayout();

	if(unicode_cheos.indexOf(mainlayout[key-33])>=0) {
		if(unicode_ga.indexOf(mainlayout[shift_key-33])>=0 || unicode_ga.indexOf(sublayout[key-33])>=0) return true;
	}
	if(unicode_ga.indexOf(mainlayout[key-33])>=0) {
		if(unicode_ggeut.indexOf(mainlayout[shift_key-33])>=0 || unicode_ggeut.indexOf(sublayout[key-33])>=0) return true;
		if(unicode_cheos.indexOf(mainlayout[shift_key-33])>=0 || unicode_cheos.indexOf(sublayout[key-33])>=0) return true;
	}
	if(unicode_ggeut.indexOf(mainlayout[key-33])>=0) {
		if(unicode_ga.indexOf(mainlayout[shift_key-33])>=0 || unicode_ga.indexOf(sublayout[key-33])>=0) return true;
	}	
	return false;
}

function is_moachigi_input() {
	if(current_layout_info.type_name.substr(0,3)!='3m-') return false;
	if(option.force_normal_typing) return false;
	return true;
}

function is_left_key(key) {
	if(key<0x21 || key>0x7E) return false;
	if(key==0x21) return true;
	if(key==0x22) return false;
	if(key<=0x25) return true;
	if(key==0x26) return false;
	if(key<=0x2F) return false;
	if(key<=0x35) return true;
	if(key<=0x3F) return false;
	if(key<=0x47) return true;
	if(key<=0x50) return false;
	if(key<=0x54) return true;
	if(key==0x55) return false;
	if(key<=0x58) return true;
	if(key==0x59) return false;
	if(key==0x5A) return true;
	if(key<=0x5F) return false;
	if(key<=0x67) return true;
	if(key<=0x70) return false;
	if(key<=0x74) return true;
	if(key==0x75) return false;
	if(key<=0x78) return true;
	if(key==0x79) return false;
	if(key==0x7A) return true;
	if(key<=0x7D) return false;
	if(key==0x7E) return true;
}

function is_right_key(key) {
	if(key<0x21 || key>0x7E) return false;
	return !is_left_key(key);
}
function with_shift_key(key) {	// 윗글쇠를 누르고 친 글쇠인지
	if(key<0x21) return false;
	else if(key<=0x26) return true;
	else if(key==0x27) return false;
	else if(key<=0x2B) return true;
	else if(key<=0x39) return false;
	else if(key==0x3A) return true;
	else if(key==0x3B) return false;
	else if(key==0x3C) return true;
	else if(key==0x3D) return false;
	else if(key<=0x5A) return true;
	else if(key<=0x5D) return false;
	else if(key<=0x5F) return true;
	else if(key<=0x7A) return false;
	else if(key<=0x7E) return true;
	return false;
}

function is_old_hangeul_input() {
	if(current_layout_info.type_name && current_layout_info.type_name.substr(-2)=='-y') return true;
	if(option.enable_old_hangeul_input && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined')	return true;
	return false;
}

function is_phonemic_writing_input() {
	if(option.phonemic_writing) return true;
	return false;
}


function push_to_key_table(u,d,t) {
	u.push(
		[t[93],t[0],t[31],t[2],t[3],t[4],t[61],t[5],t[9],t[7],t[8],t[62],t[10],''],
		['',t[48],t[54],t[36],t[49],t[51],t[56],t[52],t[40],t[46],t[47],t[90],t[92],t[91]],
		['',t[32],t[50],t[35],t[37],t[38],t[39],t[41],t[42],t[43],t[25],t[1],''],
		['',t[57],t[55],t[34],t[53],t[33],t[45],t[44],t[27],t[29],t[30],'']);
	d.push(
		[t[63],t[16],t[17],t[18],t[19],t[20],t[21],t[22],t[23],t[24],t[15],t[12],t[28],''],
		['',t[80],t[86],t[68],t[81],t[83],t[88],t[84],t[72],t[78],t[79],t[58],t[60],t[59]],
		['',t[64],t[82],t[67],t[69],t[70],t[71],t[73],t[74],t[75],t[26],t[6],''],
		['',t[89],t[87],t[66],t[85],t[65],t[77],t[76],t[11],t[13],t[14]],'');
}

function push_layout_to_key_table(u,d,b) {
	var a,c,bas=[];
	for(var i=0;i<94;++i) {
		a = typeof b[i] == 'number' ? b[i] : b[i][0];
		if(a<0) c=a;
		else c = String.fromCharCode(a);
		bas.push(c);
	}
	push_to_key_table(u,d,bas);
}

function push_extended_hangeul_layout_to_key_table(u,d,ext_layout) {
	var i,c,str,charCode;
	var ext=[];

	for(i=0;i<94;++i) {
		if(typeof ext_layout[i][0] == 'object' && typeof ext_layout[i][0][0] == 'number') // 3-2012 옛한글 자판에 들어간 확장 배열
			c = ext_layout[i][ohiHangeul3_HanExtKey%0x10-1][ohiHangeul3_HanExtKey>0x10 ? 1:0];
		else if(typeof ext_layout[i][0] == 'number')
			c = ext_layout[i][ohiHangeul3_HanExtKey-1];
		else
			c=ext_layout[i];

		if(c<0) s=c;
		else s = String.fromCharCode(c);
		ext.push(s);
	}
	push_to_key_table(u,d,ext);
}

function push_extended_sign_layout_to_key_table(u,d,e) {
	var ext=[], c, i, j=(sign_ext_state-1)%10;
	if(j>=0) {
		if(!is_old_hangeul_input() && (Ko_type=='3-2011' || Ko_type=='3-2012')) {
			if(j<3) {
				for(i=0;i<94;++i) {
					c=e[i][j]>0 ? e[i][j] : 0;
					ext.push(String.fromCharCode(c));
				}
			}
		}
		else if(Ko_type.substr(0,2)=='3-') {
			if(sign_ext_state<11) {
				for(i=0;i<94;++i) {
					c=e[i][0][j]>0 ? e[i][0][j] : 0;
					ext.push(String.fromCharCode(c));
				}
			}
			if(sign_ext_state>10) {
				for(i=0;i<94;++i) {
					c=e[i][1][j]>0 ? e[i][1][j] : 0;
					ext.push(String.fromCharCode(c));
				}
			}
		}
		else { // 신세벌식
			for(i=0;i<94;++i) {
				c=e[i][j]>0 ? e[i][j] : 0;
				ext.push(String.fromCharCode(c));
			}
		}
	}
	push_to_key_table(u,d,ext);
}

function insert_sublayout_table(ue, de, uh, dh, sublayout) {
	var u=[], d=[], sub=[], c, i, j, ds, us;

	for(i=0;i<94;++i) {
		c = sublayout[i];
		if(special_chars.indexOf(c)>=0) c = general_chars[special_chars.indexOf(c)];
		s=String.fromCharCode(convert_into_unicode_hangeul_phoneme(c));
		sub.push(s);
	}

	push_to_key_table(u,d,sub);

	for(i=0;i<de.length;++i) {
		for(j=0;j<de[i].length;++j) {
			if( (!u[i][j] || !u[i][j].charCodeAt(0)) && (!d[i][j] || !d[i][j].charCodeAt(0)) ) continue;
			ds = de[i][j];
			us = ue[i][j];
			if(ue[i][j].charCodeAt(0)) {
				if(d[i][j].charCodeAt(0)) {
					if(u[i][j].charCodeAt(0) && d[i][j]!=u[i][j]) us=u[i][j];
					ds=d[i][j];
				}
				else us=u[i][j];
			}
			else if(d[i][j].charCodeAt(0)) ds=d[i][j];

			if(!(us==ue[i][j] || us==uh[i][j] || us==dh[i][j])) ue[i][j] = us;
			if(!(ds==ue[i][j] || ds==uh[i][j] || ds==dh[i][j])) de[i][j] = ds;
		}
	}
}

function show_ohiStatusBar(op) {	// 보람줄(상태 표시줄) 보이기/감추기
	if(typeof op != 'undefined' && (op=='off' || op=='0' || !op)) ohiStatus.style.display='none';
	else ohiStatus.style.display='block';
}

function ohiChange_enable_double_final_ext(op) { // 겹받침 확장 기능 켜기/끄기
	if(op===undefined || op==1) option.enable_double_final_ext=1;
	else option.enable_double_final_ext=0;
	show_keyboard_layout();
}


function show_NCR_text(op) { // 문자를 유니코드 부호값과 맞대어 나타내기 (Numeric Character Reference)
	if(typeof op != 'undefined') {
		if(op) converting_option.NCR_text=1;
		else converting_option.NCR_text=0;
	}

	var f = document.getElementById('inputText');
	var t = document.getElementById('NCR_text');

	if(!f || !t) return;

	var opt, opts = document.getElementById('NCR_options');

	if(opts) {
		if(ohi_menu_num && ohi_menu_num<3) {
			if(converting_option.NCR_text) opts.style.display = 'block';
			else opts.style.display = 'inline';
		}
		else opts.style.display = 'none';

		opt = document.getElementById('converting_option_NCR_text');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_NCR_text','<input name="NCR_text" class="checkbox" onclick="show_NCR_text(this.checked);inputText_focus()" type="checkbox"' + (converting_option.show_NCR_text ? ' checked="checked"' : '') + '><label title="&apos;한글&apos;을 &amp;#xD55C;&amp;#xAE00; 꼴로 나타내기">HTML 문자 참조</label>');

		opt = document.getElementById('converting_option_convert_only_NFD_hangeul_encoding_in_NCR_text');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_convert_only_NFD_hangeul_encoding_in_NCR_text','<input name="convert_only_NFD_hangeul_encoding_in_NCR_text" class="checkbox" onclick="converting_option.convert_only_NFD_hangeul_encoding_in_NCR_text=this.checked;show_NCR_text();inputText_focus()" type="checkbox"' + (converting_option.convert_only_NFD_hangeul_encoding_in_NCR_text ? ' checked="checked"' : '') + '><label title="완성형으로 나타낼 수 있는 한글은 바꾸지 않기">첫가끝 조합형만 바꾸기</label>');
		if(t && converting_option.NCR_text) {
			t.style.display='inline-block';
			opt.style.display='inline-block';
		}
		else {
			t.style.display='none';
			opt.style.display='none';
		}

		opt = document.getElementById('NCR_text_copy_button');
		if(!opt) {
			opt = appendChild(opts,'div','option','NCR_text_copy_button','<button onclick="copyToClipboard(document.getElementById(\'NCR_text\'))">베끼기</button>');
			opt.style.cssFloat = 'right';
		}
		if(converting_option.NCR_text) opt.style.display='inline-block';
		else opt.style.display='none';
	}

	var ref_char, char_code, ref_text='';
	for(i=0;i<f.value.length;++i) {
		char_code = f.value.charCodeAt(i);
		ref_char = '&amp;#x'+ char_code.toString(16).toUpperCase() + ';';
		if(converting_option.convert_only_NFD_hangeul_encoding_in_NCR_text) {
		// 첫가끝 조합형 한글만 바꿀 때
			if(unicode_NFD_hangeul_code.indexOf(char_code)<0 && unicode_NFD_hangeul_sidedot.indexOf(char_code)<0) ref_char = f.value.charAt(i);
		}
		ref_text += ref_char;
	}
	if(ref_text=='') ref_text='&nbsp;';
	t.innerHTML = ref_text;
}

function show_direct_typing_text(op) { // 쿼티 글쇠 배열 기준으로 문자열을 글쇠값들로 바꾸기
	if(typeof op != 'undefined') {
		if(op) converting_option.direct_typing_text=1;
		else converting_option.direct_typing_text=0;
	}

	var f = document.getElementById('inputText');
	var t = document.getElementById('direct_typing_text');

	if(!f || !t) return;

	var opt, opts = document.getElementById('direct_typing_text_options');
	var mainlayout = find_mainlayout();

	if(opts) {
		if(ohi_menu_num && ohi_menu_num<3 && !is_moachigi_input()) {
			if(converting_option.direct_typing_text) opts.style.display = 'block';
			else opts.style.display = 'inline';
		}
		else opts.style.display = 'none';

		opt = document.getElementById('converting_option_direct_typing_text');
		if(!opt) {
			opt = appendChild(opts,'div','option','converting_option_direct_typing_text','<input name="direct_typing_text" class="checkbox" onclick="show_direct_typing_text(this.checked);inputText_focus()" type="checkbox"' + (converting_option.direct_typing_text ? ' checked="checked"' : '') + '><label title="글에 들어간 문자열을 쿼티 배열 기준 글쇠값들로 바꾸기 ">문자열→글쇠값</label>');
			opt.style.display='inline-block';
		}

		opt = document.getElementById('converting_option_extended_hangeul_layout_reflection');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_extended_hangeul_layout_reflection','<input name="extended_hangeul_layout" class="checkbox" onclick="converting_option.extended_hangeul_layout_reflection=this.checked;show_keyboard_layout();inputText_focus()" type="checkbox"' + (converting_option.combination_table_reflection_priority ? ' checked="checked"' : '') + '><label title="한글 확장 배열 반영하기">한글 확장 배열</label>');
		if(converting_option.direct_typing_text && mainlayout.indexOf(-1)>=0) opt.style.display='inline-block';
		else opt.style.display='none';	

		opt = document.getElementById('converting_option_combination_table_reflection');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_combination_table_reflection','<input name="combination_table_reflection" class="checkbox" onclick="converting_option.combination_table_reflection=this.checked;show_keyboard_layout();inputText_focus()" type="checkbox"' + (converting_option.combination_table_reflection ? ' checked="checked"' : '') + '><label title="낱자 조합 규칙 반영하기">낱자 조합</label>');
		if(converting_option.direct_typing_text) opt.style.display='inline-block';
		else opt.style.display='none';

		opt = document.getElementById('converting_option_combination_table_reflection_priority');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_combination_table_reflection_priority','<input name="combination_table_reflection_priority" class="checkbox" onclick="converting_option.combination_table_reflection_priority=this.checked;show_keyboard_layout();inputText_focus()" type="checkbox"' + (converting_option.combination_table_reflection_priority ? ' checked="checked"' : '') + '><label title="자판 배열에 따로 있는 겹낱자에까지 낱자 조합 규칙을 우선 반영하기">낱자 조합 우선</label>');
		if(converting_option.direct_typing_text && converting_option.combination_table_reflection) opt.style.display='inline-block';
		else opt.style.display='none';

		opt = document.getElementById('converting_option_combination_table_reflection_ggeut_ss_exception');
		if(!opt) opt = appendChild(opts,'div','option','converting_option_combination_table_reflection_ggeut_ss_exception','<input name="combination_table_reflection_priority" class="checkbox" onclick="converting_option.combination_table_reflection_ggeut_ss_exception=this.checked;show_keyboard_layout();inputText_focus()" type="checkbox"' + (converting_option.combination_table_reflection_ggeut_ss_exception ? ' checked="checked"' : '') + '><label title="받침 ㅆ이 아랫글 자리에 따로 있으면 조합하여 넣은 것으로 셈하지 않음">받침 ㅆ 예외</label>');

		if(converting_option.direct_typing_text && converting_option.combination_table_reflection && converting_option.combination_table_reflection_priority
		 && mainlayout.indexOf(0x11BB)>=0 && !with_shift_key(mainlayout.indexOf(0x11BB)+33)) opt.style.display='inline-block';
		else opt.style.display='none';

		opt = document.getElementById('direct_typing_text_copy_button');
		if(!opt) {
			opt = appendChild(opts,'div','option','direct_typing_text_copy_button','<button onclick="copyToClipboard(document.getElementById(\'direct_typing_text\'))">베끼기</button>');
			opt.style.cssFloat = 'right';
		}
		if(converting_option.direct_typing_text) opt.style.display='inline-block';
		else opt.style.display='none';
	}

	if(t && converting_option.direct_typing_text && !is_moachigi_input()) {
		t.style.display='inline-block';
	}
	else {
		t.style.display='none';
		return;
	}

	var conv_text='';
	var key_table = [];
	making_key_table(key_table);
	
	for(var i=0;i<f.value.length;++i) {
		conv_text += convert_into_direct_typing_chars(key_table, f.value, i);
	}
	if(conv_text=='') conv_text='&nbsp;';
	t.innerHTML = conv_text;
}


function show_reverse_direct_typing_text(op) { // 쿼티 글쇠 배열 기준으로 글쇠값들을 문자열로 바꾸기
	if(typeof op != 'undefined') {
		if(op) converting_option.reverse_direct_typing_text=1;
		else converting_option.reverse_direct_typing_text=0;
	}

	var f = document.getElementById('inputText');
	var t = document.getElementById('reverse_direct_typing_text');

	if(!f || !t) return;

	var opt, opts = document.getElementById('reverse_direct_typing_text_options');
	var mainlayout = find_mainlayout();

	if(opts) {
		if(ohi_menu_num && ohi_menu_num<3 && !is_moachigi_input()) {
			if(converting_option.reverse_direct_typing_text) opts.style.display = 'block';
			else opts.style.display = 'inline';
		}
		else opts.style.display = 'none';

		opt = document.getElementById('converting_option_reverse_direct_typing_text');
		if(!opt) {
			opt = appendChild(opts,'div','option','converting_option_reverse_direct_typing_text','<input name="reverse_direct_typing_text" class="checkbox" onclick="show_reverse_direct_typing_text(this.checked);inputText_focus()" type="checkbox"' + (converting_option.direct_typing_text ? ' checked="checked"' : '') + '><label title="쿼티 배열 기준 글쇠값들을 문자열로 바꾸기 ">글쇠값→문자열</label>');
			opt.style.display='inline-block';
		}

		opt = document.getElementById('reverse_direct_typing_text_copy_button');
		if(!opt) {
			opt = appendChild(opts,'div','option','reverse_direct_typing_text_copy_button','<button onclick="copyToClipboard(document.getElementById(\'reverse_direct_typing_text\'))">베끼기</button>');
			opt.style.cssFloat = 'right';
		}
		if(converting_option.reverse_direct_typing_text) opt.style.display='inline-block';
		else opt.style.display='none';

		opt = document.getElementById('reverse_direct_typing_text_conversion_button');
		if(!opt) {
			opt = appendChild(opts,'div','option','reverse_direct_typing_text_conversion_button','<button onclick="show_reverse_direct_typing_text();">바꾸기</button>');
			opt.style.cssFloat = 'right';
		}
		if(converting_option.reverse_direct_typing_text) opt.style.display='inline-block';
		else opt.style.display='none';
	}

	if(t && converting_option.reverse_direct_typing_text && !is_moachigi_input()) {
		t.style.display='inline-block';
	}
	else {
		t.style.display='none';
		return;
	}

  var temp_t = document.createElement("textarea");
  document.body.appendChild(temp_t);

	for(var i=0;i<f.value.length;++i) {
		convert_into_reverse_direct_typing_chars(temp_t, f.value, i);
	}
	complete_hangeul_syllable(temp_t);

	t.innerHTML = temp_t.value;
	if(t.innerHTML=='') t.innerHTML='&nbsp;';
	document.body.removeChild(temp_t);
}

function making_key_table(table) { // 글쇠 기준 문자 변환에 쓰이는 부호값-글쇠 대응표 만들기
	var i, j, k, key, keys = [];
	var layout_info = find_current_layout_info();
	var mainlayout = find_mainlayout();
	var sublayout = find_sublayout();
	var combination_table = find_combination_table();
	var single_phonemes = [];

	for(i=0x21; i<0x7E; ++i) { // 아스키 영역 일반 문자
		key = mainlayout.indexOf(i)+33;
		if(i>0x40 && i<0x5B || i>0x60 && i<0x7B) table.push({code: i, keys: [i]}); // 영문자
		else table.push({code: i, keys: [key]}); // 숫자, 기호
	}

	for(i=0;i<compatibility_dah.length;++i) { // 호환 자모 닿소리
		keys = [];
		for(j=0;j<compatibility_dah_to_NFD_hotbadchim[i].length;++j) {
			if(mainlayout.indexOf(compatibility_dah_to_NFD_hotbadchim[i][0])>=0) 
				key = mainlayout.indexOf(compatibility_dah_to_NFD_hotbadchim[i][j])+33;
			else
				key = mainlayout.indexOf(unicode_ggeut_to_cheos[unicode_ggeut.indexOf(compatibility_dah_to_NFD_hotbadchim[i][j])])+33;
			if(key<33) break;
			if(layout_info.type_name.substr(0,2)=='2-' && with_shift_key(key) && mainlayout[key-33]==mainlayout[shift_table[key-33]-33]) key = shift_table[key-33];
			else if(j && layout_info.type_name.substr(0,4)=='Sin3' && !with_shift_key(key)) key = shift_table[key-33];
			keys.push(key);
		}
		if(j==compatibility_dah_to_NFD_hotbadchim[i].length && keys.length) table.push({code: compatibility_modern_dah[i], keys: keys}); // 끝소리로 넣음		
	}

	for(i=0;i<compatibility_hol.length;++i) { // 호환 자모 홀소리
		keys = [];	
		for(j=0;j<compatibility_hol_to_NFD_hothol[i].length;++j) {
			key = mainlayout.indexOf(compatibility_hol_to_NFD_hothol[i][j])+33;
			if(key<33) break;
			if(layout_info.type_name.substr(0,2)=='2-' && with_shift_key(key) && mainlayout[key-33]==mainlayout[shift_table[key-33]-33]) key = shift_table[key-33];
			keys.push(key);
		}
		if(j==compatibility_hol_to_NFD_hothol[i].length && keys.length) table.push({code: compatibility_modern_hol[i], keys: keys}); // 끝소리로 넣음		
	}

	codes = unicode_NFD_hangeul_phoneme.concat(mainlayout, sublayout);
	if(mainlayout.indexOf(-1)>=0 && typeof layout_info.extended_hangeul_layout != 'undefined') // 한글 확장 배열
		for(i=0;i<layout_info.extended_hangeul_layout.length;++i)
			for(j=0;j<layout_info.extended_hangeul_layout[i].length;++j) codes.push(layout_info.extended_hangeul_layout[i][j]);

	for(i=0; i<codes.length; ++i) { // 유니코드 한글 낱자들과 기본/보조 배열에 들어간 문자들을 살핌
		keys = [];
		if(unicode_non_combined_phoneme.indexOf(codes[i])<0) { // 요즘한글 홑낱자가 아닌 한글 낱자와 기호
			if(is_galmadeuli_input() && unicode_ggeut.indexOf(codes[i])>=0 && option.enable_double_final_ext && sublayout.indexOf(codes[i])>=0 && with_shift_key(sublayout.indexOf(codes[i])+33)) { // 겹받침 확장
				keys.push(sublayout.indexOf(codes[i])+33);
			}
			else if(mainlayout.indexOf(codes[i])>=0) {
				key = mainlayout.indexOf(codes[i])+33;
				if(with_shift_key(key) && is_galmadeuli_input() && unicode_NFD_hangeul_phoneme.indexOf(codes[i])>=0 && can_be_galmadeuli_key(key))
					keys.push(shift_table[key-33]);
				else keys.push(key);
			}
			else if(converting_option.extended_hangeul_layout_reflection && mainlayout.indexOf(-1)>=0 && typeof layout_info.extended_hangeul_layout != 'undefined') {
			// 한글 확장 배열
				key = layout_info.extended_hangeul_layout.findIndex(function(n){return n.indexOf(codes[i])>=0;})+33;
				if(key>32) {
					for(j=0;j<layout_info.extended_hangeul_layout[key-33].indexOf(codes[i])+1;++j) keys.push(mainlayout.indexOf(-1)+33);
					keys.push(key);
				}
			}

			if(keys.length) {
				table.push({code: codes[i], keys: keys.slice()});
				continue;
			}
		}

  	single_phonemes = convert_into_single_phonemes(codes[i]);
		keys = find_direct_typing_keys(single_phonemes);
		if(keys.length) table.push({code: codes[i], keys: keys.slice()});
	}
	
	if(layout_info.type_name.substr(0,1)=='2') { // 2벌식 자판
		for(i=0;i<table.length;++i) {
			if(unicode_cheos.indexOf(table[i].code)>=0) { // 끝소리→첫소리
				var ggeut = unicode_cheos_to_ggeut[unicode_cheos.indexOf(table[i].code)];
				table.push({code: ggeut, keys: table[i].keys.slice()});
			}
		}
		for(i=0;i<unicode_ggeut.length;++i) { // 첫소리에 없는 겹받칩
			keys=[];
			if(unicode_non_combined_ggeut.indexOf(unicode_ggeut[i])>=0) continue;
			single_phonemes = convert_into_single_phonemes(unicode_ggeut[i]);
			for(j=0;j<single_phonemes.length;++j) { // 배열에 따로 없는 낱자를 홑낱자로 나누어서 글쇠 치는 차례를 찾음
				k = table.filter(function(e) {return e.code == single_phonemes[j]});
				if(k.length) keys.push(k[0].keys[0]);
			}
			if(keys.length) table.push({code: unicode_ggeut[i], keys: keys.slice()});
		}
	}

	for(i=0; i<codes.length; ++i) { // 낱자 조합 규칙
		if(converting_option.combination_table_reflection && combination_table.length && unicode_NFD_hangeul_phoneme.indexOf(codes[i])>=0) {
			var divided_phonemes = [codes[i]];
			do {
				for(j=0,k=0;j<combination_table.length;++j) {
					if(combination_table[j][1]==divided_phonemes[0]) {
						divided_phonemes.splice(0,1,parseInt(combination_table[j][0]/0x10000),combination_table[j][0]%0x10000);
						++k;
					}
				}
			} while(k);
			if(divided_phonemes.length && find_direct_typing_keys(divided_phonemes).length) {
				if(converting_option.combination_table_reflection_priority) { // 낱자 조합 규칙을 우선 적용하기
					if(codes[i]!=0x11BB || !converting_option.combination_table_reflection_ggeut_ss_exception) // 받침 ㅆ 예외에 걸리지 않으면
						table.unshift({code: codes[i], keys: find_direct_typing_keys(divided_phonemes)});
				}
				else table.push({code: codes[i], keys: find_direct_typing_keys(divided_phonemes)});
			}
		}
	}
}

function find_direct_typing_keys(single_phonemes) {
	var i, j, k, key;
	var keys = [];
	var layout_info = find_current_layout_info();
	var mainlayout = find_mainlayout();
	var sublayout = find_sublayout();

	for(i=0;i<single_phonemes.length;++i) { // 배열에 따로 없는 낱자를 홑낱자로 나누어서 글쇠 치는 차례를 찾음
		if(mainlayout.indexOf(single_phonemes[i])>=0) {
			key = -1;
			for(j=0;j<mainlayout.length && j<sublayout.length;++j)
				if(mainlayout[j]==single_phonemes[i] && sublayout[j]!=single_phonemes[i]) key = j+33;
			if(key<0) key = mainlayout.indexOf(single_phonemes[i])+33;
			if(with_shift_key(key) && mainlayout[key-33]==mainlayout[shift_table[key-33]-33]) {
			// 윗글쇠를 눌렀고 아랫글 자리에도 같은 문자가 있을 때 아랫글 글쇠로 넣음
				key = shift_table[key-33];
			}
			else if(with_shift_key(key) && is_galmadeuli_input()) {
			// 윗글쇠를 눌렀고 갈마들이를 쓰고 있을 때 아랫글 글쇠로 넣음
				if(unicode_ga.indexOf(single_phonemes[i])>=0 && (i>(sublayout.indexOf(single_phonemes[0])>=0 ? 1 : 0) || is_old_hangeul_input() && !option.enable_Sin3_diphthong_key && layout_info.type_name.substr(0,4)=='Sin3')) {}
				else key = shift_table[key-33];
			}
			else if(!with_shift_key(key) && !is_galmadeuli_input() && !i && unicode_ga.indexOf(single_phonemes[i])>=0 && mainlayout.lastIndexOf(single_phonemes[i])>=0 && mainlayout.indexOf(single_phonemes[i]) != mainlayout.lastIndexOf(single_phonemes[i])) {
			// 갈마들이를 쓰지 않는 세벌식 자판의 같은 것이 2개 있는 홑홀소리(ㅗ, ㅜ 등) 가려 넣기
				j = ((unicode_cheos.indexOf(mainlayout[0x6A-33])>=0) + (single_phonemes.length>1) + is_left_key(mainlayout.indexOf(single_phonemes[i])+33));
				if(j%2) key = mainlayout.lastIndexOf(single_phonemes[i])+33;
				else key = mainlayout.indexOf(single_phonemes[i])+33;
			}

			if(i+1==single_phonemes.length || !combine_unicode_NFD_hangeul_phoneme(single_phonemes[i], single_phonemes[i+1])) {
			// 마지막 낱자이거나 다음 낱자와 조합되지 않을 때
				keys.push(key);
				return keys;
			}
			else if(sublayout.indexOf(single_phonemes[i])<0) keys.push(key);
		}
		if(sublayout.indexOf(single_phonemes[i])>=0) {
			if(unicode_ga.indexOf(single_phonemes[i])>=0 && is_old_hangeul_input() && !option.enable_Sin3_diphthong_key && layout_info.type_name.substr(0,4)=='Sin3') {}
			else key = sublayout.indexOf(single_phonemes[i])+33;
			keys.push(key);
		}
		if(converting_option.extended_hangeul_layout_reflection && mainlayout.indexOf(-1)>=0 && typeof layout_info.extended_hangeul_layout != 'undefined' && mainlayout.indexOf(single_phonemes[i])<0 && sublayout.indexOf(single_phonemes[i])<0) {
		// 한글 확장 배열
			key = layout_info.extended_hangeul_layout.findIndex(function(n){return n.indexOf(single_phonemes[i])>=0})+33;
			if(key>32) keys.push(mainlayout.indexOf(-1)+33, key);
		}
	}
	return keys;
}

function convert_into_direct_typing_chars(key_table, text, nth) { // 글에 들어간 문자를 쿼티 기준으로 글쇠 자리에 있는 문자로 바꿈 (글쇠 기준 문자 변환)
	var layout_info = find_current_layout_info();
	var i, j, r, key;
	var char_codes = [], codes = [];
	var str = '';

	if(nth>0) {
		var prev_char_code = text.charCodeAt(nth-1);
		char_codes.push(prev_char_code);
	}	else char_codes.push(-1);
	
	var char_code = text.charCodeAt(nth);
	char_codes.push(char_code);
		
	if(text.length>=nth) {
		var next_char_code = text.charCodeAt(nth+1);	
		char_codes.push(next_char_code);
	} else char_codes.push(-1);

	if(typeof char_code == 'undefined') return '';
	if(char_code==32) return ' '; // 사이띄개(Space Bar)
	if(char_code==10) return '\n'; // Line Feed
	if(char_code==9) return '\t'; // Tab
	
	if(char_code==0x115F) return ''; // 첫소리 채움 문자
	if(char_code==0x1160) { // 가운뎃소리 채움 문자
		if(layout_info.type_name.substr(0,1)=='3' || layout_info.type_name.substr(0,4)=='Sin3') return '';
		if(layout_info.type_name.substr(0,1)=='2') { // 2벌식 자판 : 앞 문자가 첫소리이고 뒤 문자가 끝소리가 아니면 가운뎃소리 채움 문자를 다루지 않음
			if(unicode_cheos.indexOf(text.charCodeAt(nth-1))>=0 && text.length>=nth && unicode_ggeut.indexOf(next_char_code<0)) return '';
		}
	}

	for(i=0;i<char_codes.length;++i) {
		codes[i] = [];
		if(char_codes[i]<0) continue;
		if(char_codes[i]>=0xAC00 && char_codes[i]<=0xD7AF) { // 완성형 한글 낱내자
			var p = convert_NFC_into_NFD(char_codes[i]);
			for(j=0; j<p.length; ++j) {
				if(!p[j]) continue;
				codes[i].push(p[j]);
			}
		}	else codes[i].push(char_codes[i]);
	}

	for(i=0; i<codes[1].length; ++i) {
		r = key_table.filter(function(e) {return e.code==codes[1][i]})[0];
		if(typeof r != 'undefined') {
			for(j=0;j<r.keys.length;++j) {
				if(r.keys[j]>-1) {
					key = r.keys[j];
					if(!j && nth>1 && layout_info.type_name.substr(0,4)=='Sin3')
						if(unicode_cheos.indexOf(text.charCodeAt(nth-2))>=0 && prev_char_code==0x1160 && unicode_ggeut.indexOf(char_code)>=0)
							key = shift_table[r.keys[0]-33]; // 신세벌식 자판 : 가운뎃소리가 빠진 미완성 낱내자의 끝소리는 윗글쇠를 눌러 넣음
					str += String.fromCharCode(key);
				}
		 	}
		}
	}

	if(layout_info.type_name.substr(0,1)=='2' && str.length && (unicode_modern_hangeul_phoneme.indexOf(codes[2][0])<0 || converting_option.combination_table_reflection_priority)) { // 2벌식 자판
		if(unicode_ggeut.indexOf(codes[1][codes[1].length-1])>=0 && codes[2].length>=1 && unicode_cheos.indexOf(codes[2][0])>=0) {
		// 현재 낱자가 끝소리이고 다음 낱자가 첫소리일 때
			// 끝소리/첫소리 조합 경계를 따로 끊어 주어야 하는 때 (이ᄣᅢ, 입ᄯᅢ)
			if(convert_into_single_phonemes(codes[2][0]).length>1) {
				i = combine_unicode_NFD_hangeul_phoneme(codes[1][codes[1].length-1], unicode_cheos_to_ggeut[unicode_cheos.indexOf(convert_into_single_phonemes(codes[2][0])[0])]);
				j = combine_unicode_NFD_hangeul_phoneme(i, unicode_cheos_to_ggeut[unicode_cheos.indexOf(convert_into_single_phonemes(codes[2][0])[1])]);
				if(i || j) str += '🄴';
			}
		}
		if(unicode_ga.indexOf(codes[1][codes[1].length-1])>=0 && unicode_cheos.indexOf(codes[2][0])>=0) {
		// 현재 낱자가 홀소리이고 다음 낱자가 첫소리일 때
			// 홀소리를 넣은 다음에 낱내자 조합 경계를 따로 끊어 주어야 하는 때 (차ᄡᅡᆯ)
			if(convert_into_single_phonemes(codes[2][0]).length>1) str += '🄴';
		}
	}

	if(!str.length) str = '■'; // 대응하는 글쇠 자리나 조합 규칙을 찾지 못한 문자를 ■로 바꿈
	return str;
}

function convert_into_reverse_direct_typing_chars(f, text, nth) { // 글에 들어간 문자를 쿼티 기준으로 글쇠 자리에 있는 문자로 바꿈 (글쇠 기준 문자 변환)
	var key = text.charCodeAt(nth);

	if(key<0x21 || key>0x7e) {
		complete_hangeul_syllable(f);
		if(key==32) f.value += ' '; // 사이띄개(Space Bar)
		else if(key==10) f.value += '\n'; // Line Feed
		else if(key==9) f.value += '\t'; // Tab
	}
	else if(ohi_KE.substr(0,2)=='Ko') {
		if(current_layout_info.type_name.substr(0,2)=='2-') ohiHangeul2(f,0,key);
		else if(!ohiHangeul3_abbreviation(f,key)) ohiHangeul3(f,0,key);
	}
}

function add_option(opts, opt_name, footer) {
	var opt = document.getElementById('option_' + opt_name);
	eval('var opt_var = option.' + opt_name);
	var opt_html = '<input name="' + opt_name + '" class="checkbox" type="checkbox"' + (opt_var ? ' checked="checked"' : '') + ' onclick="option.' + opt_name + '=this.checked; ' + footer;
	if(!opt) opt = appendChild(opts, 'div', 'option', 'option_' + opt_name, opt_html);
	opt.style.display = 'block';
	return opt;
}

function show_options() {
	var i;
	var KE=ohi_KE, opt, opt_name, ft;
	var opts = document.getElementById('top_options');
	var type_name = typeof current_layout_info.type_name != 'undefined' ? current_layout_info.type_name : '';
	if(typeof ohi_menu_num == 'undefined') ohi_menu_num=0;
	show_NCR_text();
	show_direct_typing_text();
	show_reverse_direct_typing_text();
	
	if(opts) {
		if(ohi_menu_num && ohi_menu_num<3) opts.style.display = 'block';
		else opts.style.display = 'none';

		opt_name = 'only_NFD_hangeul_encoding';
		ft = 'show_options();inputText_focus()"><label title="한글을 모두 첫가끝 조합형으로 넣기">첫가끝 조합</label>';
		add_option(opts, opt_name, ft);

		opt_name = 'phonemic_writing';
		ft = 'complete_hangeul_syllable();ohiChange_enable_phonemic_writing();inputText_focus()"><label title="한글을 낱자 단위로 풀어서 넣기">풀어쓰기</label>';
		add_option(opts, opt_name, ft);

		opt_name = 'phonemic_writing_in_halfwidth_letter';
		ft = 'inputText_focus()"><label title="한글을 반각 낱자로 넣기">반각</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && !is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'phonemic_writing_directly';
		ft = 'show_options();inputText_focus()"><label title="낱자를 조합하지 않고 바로 넣기">바로 풀기</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && !is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'phonemic_writing_adding_space_every_syllable_end';
		ft = 'inputText_focus()"><label title="낱내자(음절자) 사이에 빈칸 넣기">낱내 띄기</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && (!option.phonemic_writing_directly || option.only_NFD_hangeul_encoding)) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'phonemic_writing_in_single_phoneme';
		ft = 'show_options();inputText_focus()"><label title="모든 겹낱자를 풀어서 홑낱자로 나타내기">겹낱자 풀기</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && /*(!is_old_hangeul_input() || option.only_NFD_hangeul_encoding) &&*/ (!option.phonemic_writing_directly || option.only_NFD_hangeul_encoding)) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'phonemic_writing_NFD_ggeut_to_cheos';
		ft = 'show_options();inputText_focus()"><label title="끝소리를 첫소리로 바꾸어 넣기">끝→첫</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && option.only_NFD_hangeul_encoding && option.phonemic_writing_in_single_phoneme) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'phonemic_writing_initial_ieung_ellipsis';
		ft = 'inputText_focus()"><label title="첫소리 ㅇ(이응) 빼기">첫ㅇ 빼기</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_phonemic_writing_input() && (!option.phonemic_writing_directly || option.only_NFD_hangeul_encoding)) opt.style.display = 'block';
		else opt.style.display = 'none';
	}

	opts = document.getElementById('middle_options');

	if(opts) {
		opts.style.display = 'block';

		opt = document.getElementById('text_copy_button');
		if(!opt) {
			opt = appendChild(opts,'div','option','text_copy_button','<button onclick="copyToClipboard(document.getElementById(\'inputText\'))">글 베끼기</button>');
			//opt.style.marginLeft = '7px';
		}

		opt_name = 'turn_off_OHI';
		ft = 'ohiStart();inputText_focus()"><label title="온라인 한글 입력기의 입력 기능 끄기">OHI 끄기</label>';
		opt = add_option(opts, opt_name, ft);
		if(ohi_menu_num && ohi_menu_num<3) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'sunalae';
		ft = 'show_options();inputText_focus()"><label title="두벌식 자판으로 홀소리 글쇠를 거듭 눌러 겹닿소리(된소리) 넣기">순아래 조합 <a href="https://sites.google.com/site/tinyduckn/dubeolsig-sun-alae" target="_blank">ⓘ</a></label>';
		opt = add_option(opts, opt_name, ft);
		if(!is_old_hangeul_input() && !is_phonemic_writing_input() && !is_galmadeuli_input() && type_name.substr(0,2)=='2-' && type_name.substr(0,5)!='2-sun') opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'enable_sign_ext';
		ft = 'show_keyboard_layout();inputText_focus()"><label title="기호 확장 배열">기호 확장</label>';
		opt = add_option(opts, opt_name, ft);
		if(KE=='Ko' && (typeof current_layout_info.extended_sign_layout != 'undefined' && current_layout_info.extended_sign_layout) && Ko_type!='Sin3-2015') opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'enable_old_hangeul_input';
		ft = 'ohiChange_enable_old_hangeul_input();ohiStart();inputText_focus()"><label title="옛한글 넣기">옛한글</label>';
		opt = add_option(opts, opt_name, ft);
		if(typeof current_layout_info.old_hangeul_layout_type_name != 'undefined' && !(Ko_type.substr(0,2)=='2-' && option.sunalae)) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'enable_Sin3_diphthong_key';
		ft = 'show_keyboard_layout();inputText_focus()"><label title="오른손 쪽에서 ㅗ,ㅜ,ㅡ,ㆍ 넣기">오른쪽 홀소리</label>';
		opt = add_option(opts, opt_name, ft);
		if(type_name.substr(0,5)=='Sin3-' && is_old_hangeul_input()) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'enable_Sin3_adding_cheos_with_shift_key';
		ft = 'inputText_focus()"><label title="오른쪽 홀소리 자리에서 윗글쇠 눌러 첫소리 넣기">윗글 첫소리</label>';
		opt = add_option(opts, opt_name, ft);
		if(type_name.substr(0,5)=='Sin3-' && is_old_hangeul_input()) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'use_hangeul_compatibility_jamo_when_entering_old_hangeul';
		ft = 'show_keyboard_layout();inputText_focus()"><label title="낱자를 호환 자모로 넣기">호환 자모</label>';
		opt = add_option(opts, opt_name, ft);
		if(is_old_hangeul_input() && !option.only_NFD_hangeul_encoding) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'abbreviation';
		ft = 'inputText_focus()"><label title="이어치기 방식으로 쓰는 줄여넣기">줄임말 조합</label>';
		opt = add_option(opts, opt_name, ft);
		if(Ko_type.substr(0,3)!='3m-' && typeof current_layout_info.ieochigi_hangeul_abbreviation_table != 'undefined' && !is_old_hangeul_input()) opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'force_normal_typing';
		ft = 'show_keyboard_layout();inputText_focus()"><label title="한 글쇠씩 이어서 넣는 방식으로 모아치기 자판 쓰기">이어치기</label>';
		opt = add_option(opts, opt_name, ft);
		if(KE=='Ko' && Ko_type.substr(0,3)=='3m-') opt.style.display = 'block';
		else opt.style.display = 'none';

		opt_name = 'convenience_combination';
		ft = 'show_keyboard_layout();inputText_focus()"><label title="입력 편의를 높이기 위한 요즘한글 낱자 조합">편의 낱자 조합</label>';
		opt = add_option(opts, opt_name, ft);
		if(!is_old_hangeul_input() && typeof current_layout_info.hangeul_convenience_combination_table!='undefined') opt.style.display = 'block';
		else opt.style.display = 'none';

		var layout_info = find_current_layout_info();
		var sublayout = find_sublayout(layout_info);

		opt_name = 'enable_double_final_ext';
		ft = 'ohiChange_enable_double_final_ext(this.checked);inputText_focus()"><label title="윗글쇠를 함께 누르거나 같은 글쇠를 거듭 눌러 겹받침 넣기">겹받침 확장</label>';
		opt = add_option(opts, opt_name, ft);
		if(Ko_type.substr(0,3)!='3m-' && !is_old_hangeul_input() && sublayout.indexOf(0x11AD)>=0) opt.style.display = 'block';
		else opt.style.display = 'none';
	}

	opts = document.getElementById('bottom_options');

	if(opts) {
		opts.style.display = 'block';

		opt_name = 'square_layout';
		ft = 'show_keyboard_layout();inputText_focus()"><label>가지런한 배열표</label>';
		opt = add_option(opts, opt_name, ft);
		if(ohi_menu_num && ohi_menu_num<3 && option.show_layout) opt.style.display = 'block';
		else opt.style.display = 'none';
	}
}

function show_keyboard_layout(type) {
	var e=window.event;
	var rows = document.getElementById('keyboardLayout');
	if(!rows) return false;
	rows.style.position = 'relative';
	rows.style.display = 'block';

	var inner_html='';
	shift_click=0;
	var KE = ohi_KE;
	if(typeof ohi_menu_num=='undefined') ohi_menu_num=0;
	show_options();

	if(typeof type=='undefined') type = current_layout_info.type_name;
	else if(type==1) {
		option.show_layout = 1;
		type = current_layout_info.type_name;
	}
	else if(!type) {
		option.show_layout = 0;
		rows.innerHTML = '<div class="show_layout"><span class="menu" onclick="option.show_layout=1;show_keyboard_layout(1);inputText_focus()">배열표 보이기</span></div>';
		var opt = document.getElementById('option_square_layout');
		opt.style.display = 'none';
		return false;
	}

	if(!option.show_layout) return;

	if(ohi_menu_num && ohi_menu_num>2) {
		rows.style.display = 'none';
		var opts = document.getElementById('middle_options');
		opts.style.display = 'none';
		opts = document.getElementById('bottom_options');
		opts.style.display = 'none';
	}

	var layout_info = find_current_layout_info();

	var layout=[], ue=[], de=[], uh=[], dh=[], l=[];
	layout = find_layout_info('En', En_type).layout; // 영문 자판 배열

	for(i=0;i<layout.length;++i) l[i]=String.fromCharCode(layout[i]);
	push_to_key_table(ue,de,l);

	ue[0][13] = 'Back';
	ue[1][0] = 'Tab';
	ue[2][0] = ue[3][0] = ue[3][11] = 'Shift';
	de[2][0] = 'Lock';
	de[3][0] = de[3][11] = ' ';
	ue[2][12] = 'Enter';
	de[0][13] = 'Space';

	for(i=0;i<ue.length;++i)
		for(j=0;j<ue[i].length;++j)
			if(typeof de[i][j] != 'undefined' && ue[i][j].toLowerCase()==de[i][j].toLowerCase()) de[i][j]='　';

	if(KE=='Ko') {
		if(sign_ext_state > 0) { // 기호 확장 배열
			if(typeof current_layout_info.extended_sign_layout != 'undefined') layout = current_layout_info.extended_sign_layout;
			if(!layout) return;
			if(is_old_hangeul_input() && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined')
				if(typeof find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).extended_sign_layout != 'undefined')
					layout = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).extended_sign_layout;
			if(layout.length) push_extended_sign_layout_to_key_table(uh, dh, layout);
		}
		else if(ohiHangeul3_HanExtKey) { // 한글 확장 배열
			layout = typeof layout_info.extended_hangeul_layout != 'undefined' ? layout_info.extended_hangeul_layout : K3_2012y_extended_hangeul_layout;
			push_extended_hangeul_layout_to_key_table(uh, dh, layout);
		}
		else if(typeof current_layout_info != 'undefined' && typeof current_layout_info.layout != 'undefined') { // 기본 배열
			layout = find_current_layout();
			push_layout_to_key_table(uh, dh, layout);
		}
	}

	var sublayout = find_sublayout();
	
	if(sublayout.length && !is_old_hangeul_input()
	 && (option.enable_double_final_ext || current_layout_info.type_name.substr(0,3)=='3m-' || current_layout_info.type_name=='3-18Na' || current_layout_info.type_name.substr(0,3)=='3-D' || current_layout_info.type_name.substr(0,9)=='Sin3-Cham')
	 && sign_ext_state<=0) {
		insert_sublayout_table(ue, de, uh, dh, sublayout);
	}

	ue.push(['기준','영문','한글','Space','한/영','2벌식','3벌식']);
	de[4] = ['자판','바꿈','바꿈','','','바꿈','바꿈'];

	inner_html += '<div id="keyboardLayoutInfo"></div><span class="menu" onclick="show_keyboard_layout(0);inputText_focus()" onmouseover="this.className=\'menu over\'" onmouseout="this.className=\'menu\'">배열표 숨기기</span>';
	inner_html += '<div id="keyboardLayoutTable">';
	for(i=0;i<5;++i) inner_html += '<div id="row'+i+'" class="row"></div>';
	inner_html += '</div>';
	rows.innerHTML = inner_html;

	var charCode;

 	for(i=0, k=-1; ue[i]; i++) {
		var row = document.getElementById('row'+i);
		for(j=0; ue[i][j]; j++) {
			var tdclass = 'e1';
			var tdid = 'key'+(++k);
			if(dh[i] && dh[i][j]) {
				if(typeof dh[i][j].charCodeAt == 'function') {
					charCode = dh[i][j].charCodeAt(0);
					dh[i][j] = String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode));
					if(compatibility_hangeul_phoneme.indexOf(dh[i][j].charCodeAt(0))<0) dh[i][j] = (unicode_ga.indexOf(charCode)>=0 ? String.fromCharCode(0x115F) : '') + (unicode_ggeut.indexOf(charCode)>=0 ? String.fromCharCode(0x115F)+String.fromCharCode(0x1160) : '') + dh[i][j];
				}
				else charCode = dh[i][j];

				if(unicode_cheos.indexOf(charCode)>=0) tdclass = 'h1';
				else if(Ko_type.substr(1,2)=='t-' && charCode>=0x314F && charCode<0x3164) tdclass = 'h2 gin-hol';
				else if(unicode_ga.indexOf(charCode)>=0) tdclass = 'h2';
				else if(unicode_ggeut.indexOf(charCode)>=0) tdclass = 'h3';

				if(special_chars.indexOf(charCode)>=0) dh[i][j] = special_chars_string[special_chars.indexOf(charCode)];

				if(tdclass.substr(0,1)!='h')
					if(unicode_modern_ggeut.indexOf(uh[i][j].charCodeAt(0))>=0) tdclass = 'h3';
			}

			charCode = ue[i][j].charCodeAt(0);
			if(KE=='En' && ue[i][j].length==1)
				if(charCode>64 && charCode<91 || charCode>96 && charCode<123) tdclass = 'e2';
			if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0) {
				charCode = ue[i][j].charCodeAt(0);
				ue[i][j] = String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode));
			}
			var col = appendChild(row,'div',tdclass,tdid,'','36px','0 0 0 0');

			col.onclick = function(e){
				e=e||window.event;
				tableKey_clicked(e, this.id.substr(3), dkey[this.id.substr(3)], ukey[this.id.substr(3)]);
			};
			col.tabindex = 0;
			if(!option.square_layout) {
				if(k==13) col.style.width = '62px'; // backspace
				if(k==14) col.style.width = '56px'; // tab
				if(k==27) col.style.width = '42px'; // \ 글쇠
				if(k==28) col.style.width = '67px'; // shift lock
				if(k==40) col.style.width = '71px'; // Enter
				if(k==41) col.style.width = '87px'; // 왼쪽 shift
				if(k==52) col.style.width = '91px'; // 오른쪽 shift
			}
			else { // 가지런한 배열표
				if(k==0) col.style.width = '62px'; // ` 글쇠
				if(k==13) col.style.letterSpacing = '-1px'; // backspace
				if(k==14) col.style.width = '62px'; // tab
				if(k==27) col.style.width = '36px'; // \ 글쇠
				if(k==28) col.style.width = '62px'; // shift lock
				if(k==40) col.style.width = '76px'; // Enter
				if(k==41) col.style.width = '62px'; // 왼쪽 shift
				if(k==52) col.style.width = '116px'; // 오른쪽 shift
			}

			if(ue[i][j]=='Back' || ue[i][j]=='Tab' || ue[i][j]=='Enter' || ue[i][j]=='Shift') col.style.textAlign = 'center';

			if(i==4) {
				if(ue[i][j]=='Space') col.style.width = '312px';
				else col.style.width = '41px', col.className = 'e3 special';
			}
			var function_keys = [13,14,28,40,41,52,56];
			if(function_keys.indexOf(k)>=0) col.className += ' function';

			var up = appendChild(col,'div','up','up'+k);
			appendChild(up,'div','ue','ue'+k,ue[i][j]);

			if(uh[i]) {
				if(uh[i][j]) {
					if(typeof uh[i][j].charCodeAt == 'function') {
						charCode = uh[i][j].charCodeAt(0);
						if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0) charCode=convert_into_compatibility_hangeul_letter(charCode);
						uh[i][j] = String.fromCharCode(charCode);
						if(compatibility_hangeul_phoneme.indexOf(uh[i][j].charCodeAt(0))<0) uh[i][j] = (unicode_ga.indexOf(charCode)>=0 ? String.fromCharCode(0x115F) : '') + (unicode_ggeut.indexOf(charCode)>=0 ? String.fromCharCode(0x115F)+String.fromCharCode(0x1160) : '') + uh[i][j];
					}
					else charCode = uh[i][j];

					if(special_chars.indexOf(charCode)>=0) uh[i][j] = special_chars_string[special_chars.indexOf(charCode)];
					if(uh[i][j]==dh[i][j] && uh[i][j]!=de[i][j]) uh[i][j]=' '; // 한글 배열에서 윗글과 아랫글 자리의 문자가 같을 때 윗글 자리를 나타내지 않음
					if( (Ko_type.substr(0,2)=='3-' && is_galmadeuli_input() || typeof current_layout_info.sublayout != 'undefined') && unicode_modern_ggeut.indexOf(charCode)>=0 && unicode_modern_hotbadchim.indexOf(charCode)<0) {
						// 갈마들이 공세벌식 자판의 기본 배열에 들어가는 겹받침을 회색으로 나타냄
						uh[i][j] = '<span style="color:gray;">'+uh[i][j]+'</span>';
					}
				}
				if(!sign_ext_state&&uh[i][j]==ue[i][j] || uh[i][j]=='&'&&ue[i][j]=='&amp;' || uh[i][j]=='<'&&ue[i][j]=='&lt;' || uh[i][j]=='>'&&ue[i][j]=='&gt;') uh[i][j]=' ';
				appendChild(up,'div','uh','uh'+k,uh[i][j]);
			}
			if(de[i][j]) {
				var down = appendChild(col,'div','down','down'+k);
				charCode = de[i][j].charCodeAt(0);
				if(unicode_NFD_hangeul_phoneme.indexOf(charCode)>=0) de[i][j] = String.fromCharCode(convert_into_compatibility_hangeul_letter(charCode));
				appendChild(down,'div','de','de'+k,de[i][j]);
				if(!sign_ext_state && dh[i] && (!dh[i][j] || dh[i][j]==de[i][j])) dh[i][j]=' ';
				if(dh[i] && dh[i][j]) appendChild(down,'div','dh','dh'+k,dh[i][j]);
			}
		}
	}

	var sign_ext_tag = '<span style="margin-left:-1px;background:black;color:#fff;letter-spacing:0px;font-size:0.7em;">기호</div>';
	var sign_ext_tag1 = '<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">기호①</span>';
	var sign_ext_tag2 = '<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em">기호②</span>';
	var han_ext_tag1 = '<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">한글①</span>';
	var han_ext_tag2 = '<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:-2px;font-size:0.7em;">한글②</span>';
	var Moachigi_modifier_tag = '<span style="background:black;color:#fff;font-size:1em;">⇦</span>';

	if(option.enable_sign_ext && KE=='Ko' && Ko_type.substr(0,2)=='3-' && typeof current_layout_info.extended_sign_layout != 'undefined') { // 공세벌식 자판의 기호 확장 글쇠 나타내기
		if(Ko_type=='3-87' || Ko_type=='3-891' || Ko_type=='3-91' || Ko_type=='3-95') {
			document.getElementById('de51').innerHTML = sign_ext_tag;
		}
		else if(!is_old_hangeul_input() && (Ko_type=='3-2011' || Ko_type=='3-2012')) {
			document.getElementById('de8').innerHTML = sign_ext_tag;
			document.getElementById('de45').innerHTML = sign_ext_tag;
		}
		else {
			document.getElementById('uh9').innerHTML = sign_ext_tag2;
			document.getElementById('uh51').innerHTML = sign_ext_tag1;
		}
	}

	if(KE=='Ko' && is_old_hangeul_input() && ['3-2011','3-2011-y','3-2012','3-2012-y','3-2014','3-2014-y','3-2015P','3-2015P-y'].indexOf(Ko_type)>=0) {
		document.getElementById('dh7').innerHTML = han_ext_tag1;
		document.getElementById('dh8').innerHTML = han_ext_tag2;
		document.getElementById('uh7').innerHTML = '<span style="color:#666;font-size:0.8em">(ㅣ)</span>';
		document.getElementById('uh8').innerHTML = '<span style="color:#666;font-size:0.8em">(ㅡ)</span>';
	}

	if(KE=='Ko' && Ko_type.substr(0,4)=='Sin3' && Ko_type.substr(0,9)!='Sin3-Cham') { // 신세벌식 자판의 첫소리 자리에서 넣는 홀소리들
		
		if(!sign_ext_state && !(!option.enable_Sin3_diphthong_key && is_old_hangeul_input()) && !(checkCapsLock() && typeof layout_info.capslock_extended_sign_layout != 'undefined' && !layout_info.capslock_extended_sign_layout)) {
			if(sublayout.length) {
				if(sublayout[14]) // 빗금(/) 자리의 겹낱자 확장 배열 홀소리
					document.getElementById('uh51').innerHTML = ohiHangeul3_HanExtKey ? '' : '<font size="1">('+String.fromCharCode(convert_into_compatibility_hangeul_letter(sublayout[14]))+')</font>';
				if(sublayout[72]) // 신세벌식 P2의 오른쪽 ㅡ 자리 (i 자리)
					document.getElementById('de22').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="font-size:10px; letter-spacing:-2px;color:#333;">'+String.fromCharCode(convert_into_compatibility_hangeul_letter(sublayout[72]))+'</span>';
				if(sublayout[78]) // 신세벌식 P2의 오른쪽 ㅜ 자리 (o 자리)
					document.getElementById('de23').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="font-size:10px; letter-spacing:-2px;color:#333;">'+String.fromCharCode(convert_into_compatibility_hangeul_letter(sublayout[78]))+'</span>';
				if(sublayout[79]) {
					if(sublayout[79]==0x119E) // P 자리의 겹낱자 확장 배열 (신세벌식 P2의 오른쪽 아래아)
						document.getElementById('de24').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="font-size:10px; letter-spacing:-3px;color:#333;">'+String.fromCharCode(convert_into_compatibility_hangeul_letter(sublayout[79]))+'</span>';
					else
						document.getElementById('de24').innerHTML = ohiHangeul3_HanExtKey ? '' : '<font size="1">'+String.fromCharCode(convert_into_compatibility_hangeul_letter(sublayout[79]))+'</font>';
				}
			}
			else {
				if(En_type=='Dvorak') document.getElementById('de51').innerHTML = '<font size="1">(ㅗ)</font>';
				else if(typeof current_layout_info.layout[30] == 'number' && current_layout_info.layout[30]==0x3F) document.getElementById('uh51').innerHTML = ohiHangeul3_HanExtKey ? '' : '<font size="1">(ㅗ)</font>';
			}
		}

		if(option.enable_sign_ext && typeof current_layout_info.extended_sign_layout != 'undefined' && current_layout_info.extended_sign_layout && !(checkCapsLock() && typeof layout_info.capslock_extended_sign_layout != 'undefined' && !layout_info.capslock_extended_sign_layout)) {
			// 신세벌식 기호 확장 배열 전환 글쇠
			document.getElementById('de35').innerHTML = ohiHangeul3_HanExtKey ? '' : sign_ext_tag;
			for(i=0;i<3;++i)
				document.getElementById('de'+(36+i)).innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>';
		}

		if(is_old_hangeul_input() && !sign_ext_state) { // 신세벌식 P, P2 옛한글 받침 배열
			document.getElementById('de32').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="margin-left:-1px;background:black;color:#fff;letter-spacing:0px;font-size:0.7em;">받침</span>';
			document.getElementById('de15').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="color:#666">ㅿ</span>';
			document.getElementById('de29').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="color:#666">ㆁ</span>';
			document.getElementById('de31').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="color:#666">ㆆ</span>';
			document.getElementById('de31').innerHTML = ohiHangeul3_HanExtKey ? '' : '<span style="color:#666">ㆆ</span>';
		}
	}

	if(KE=='Ko' && En_type!='Dvorak' && !sign_ext_state && !ohiHangeul3_HanExtKey) {
		if((Ko_type.substr(0,5)=='Sin3-' && typeof current_layout_info.sublayout != 'undefined' && current_layout_info.sublayout[58]==0x119E)
	 	 || Ko_type.substr(0,3) == '3-P' || Ko_type.substr(0,7)=='3-2015P' || Ko_type.substr(0,6)=='3-2014' || Ko_type.substr(0,6)=='3-2012' || Ko_type=='3-90') {
			document.getElementById('dh25').innerHTML = ohiHangeul3_HanExtKey ? '' : '<font size="1">(ㆍ)</font>';
		}
	}

	if(KE=='Ko' && Ko_type=='3m-Semoe2014') document.getElementById('uh38').innerHTML += Moachigi_modifier_tag;
	
	if(KE=='Ko' && Ko_type=='3m-Semoe2015') {
		document.getElementById('uh24').innerHTML = Moachigi_modifier_tag;
		document.getElementById('uh38').innerHTML = Moachigi_modifier_tag;
		document.getElementById('ue45').removeAttribute('class');
		document.getElementById('ue45').style.float = 'left';
		document.getElementById('ue45').innerHTML = Moachigi_modifier_tag;
	}

	if(KE=='Ko' && Ko_type=='3m-Semoe2016') {
		if(sign_ext_state<=0) {
			document.getElementById('uh25').innerHTML = Moachigi_modifier_tag;
			document.getElementById('uh38').innerHTML = Moachigi_modifier_tag;
			document.getElementById('ue45').removeAttribute('class');
			document.getElementById('ue45').style.float = 'left';
			document.getElementById('ue45').innerHTML = Moachigi_modifier_tag;
		}
		if(option.enable_sign_ext) {
			document.getElementById('uh35').innerHTML = sign_ext_tag;
			if(sign_ext_state<0) {
				for(i=0;i<3;++i)
					document.getElementById('uh'+(36+i)).innerHTML = '<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>';
			}
		}
	}

	if(KE=='Ko' && Ko_type.substr(0,8)=='3m-Semoe' && (!Number(Ko_type.substr(0,8)) || Number(Ko_type.substr(0,8))>=2017)) {
		if(sign_ext_state<=0) {
			document.getElementById('uh38').innerHTML = Moachigi_modifier_tag;
			document.getElementById('ue45').removeAttribute('class');
			document.getElementById('ue45').style.float = 'left';
			document.getElementById('ue45').innerHTML = Moachigi_modifier_tag;
			document.getElementById('uh50').innerHTML = Moachigi_modifier_tag;
		}
		if(option.enable_sign_ext) {
			document.getElementById('de35').innerHTML = sign_ext_tag;
			for(i=0;i<3;++i)
				document.getElementById('de'+(36+i)).innerHTML = '<span style="padding:0 1px;background:black;color:#fff;font-size:10px;">'+String.fromCharCode(0x2460+i)+'</span>';
		}
	}	

	if(KE=='Ko' && (Ko_type=='3t-Oesol' || Ko_type=='4t-1985')) {
		document.getElementById('ue41').innerHTML = 'Shift';
		document.getElementById('de41').innerHTML = '(받침)';
		document.getElementById('ue52').innerHTML = 'Shift';
		document.getElementById('de52').innerHTML = '(받침)';
		if(Ko_type=='4t-1985') {
			// 홀소리와 받침이 함께 든 글쇠를 받침이 든 글쇠와 같은 색으로 나타냄
			document.getElementById('key25').className = 'h3';
			document.getElementById('key38').className = 'h3';
			document.getElementById('key39').className = 'h3';
		}
	}

	if(shiftlock_click) {
		var shiftlock = document.getElementById('key28');
		shiftlock.style.backgroundColor = 'orange';
	}

	show_keyboard_layout_info();
}


function checkCapsLock() {
	var e=window.event;
	if(typeof e != 'undefined' && e.getModifierState && e.getModifierState("CapsLock")) return true;
  return false;
}

function copyToClipboard(text) {
	var t;
  if(typeof text.value == 'undefined') {
  	t = document.createElement("textarea");
  	document.body.appendChild(t);
  	t.value = text.innerHTML;
  }
  else t=text;

  t.select();
	t.setSelectionRange(0, 99999); /* For mobile devices */ 
  document.execCommand('copy');
  if(typeof text.value == 'undefined') document.body.removeChild(t);
}


function ohiStart() {
	var i;
	var textarea=document.getElementById('inputText');
	var inputs=document.getElementsByTagName("INPUT");

	complete_hangeul_syllable(this);

	if(option.turn_off_OHI) {
		show_ohiStatusBar(0);	// 보람줄(상태 표시줄) 감추기
		if(textarea) textarea.style.imeMode = 'active';
		if(inputs) {
			for(i=0;i<inputs.length;++i) {
				if(inputs[i].className=='text') inputs[i].style.imeMode = 'active';
			}
		}
		return;
	}

	if(typeof current_layout_info=='undefined' || !current_layout_info || typeof current_layout_info.KE=='undefined' || !current_layout_info.KE) {
		ohiChange(default_ohi_KE, default_ohi_KE=='En' ? default_En_type : default_Ko_type);
	}

	ohi_KE = current_layout_info.KE;

	ohiStatus.innerHTML = '<a href="javascript:ohiChange_KE();" style="color:White;text-decoration:none;">&nbsp;' + ohi_KE.toUpperCase() + ' </a>'
	 + ' | <a href="javascript:ohiChange_between_same_type(\'Ko\');"><span style="color:yellow">Ko:</span><span style="color:Aquamarine">' + (is_old_hangeul_input() && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined' ? current_layout_info.old_hangeul_layout_type_name : Ko_type) + '</span></a>'
	 + ' / <a href="javascript:ohiChange_between_same_type(\'En\');"><span style="color:LightPink">En:</span><span style="color:Aquamarine">' + En_type + '</span></a>'
	 + ' | <a href="javascript:ohiChange_KBD_type();" style="color:WhiteSmoke;text-decoration:none;">' + ohi_KBD_type + '&nbsp;</a>';

	if(document.body) {
		show_ohiStatusBar(1);

		var onmousedown = function(e) {
			complete_hangeul_syllable(this);
			prev_cursor_position = -1;
		};

		if(textarea) {
			textarea.style.imeMode = 'disabled';
			textarea.onmousedown = onmousedown;
		}

		if(inputs) {
			for(i=0;i<inputs.length;++i) {
				if(inputs[i].className=='text') {
					inputs[i].style.imeMode = 'disabled';
					inputs[i].onmousedown = onmousedown;
				}
			}
		}

		if(document.all) {
			ohiStatus.style.position = 'fixed';
			ohiStatus.style.right = -(document.body.scrollLeft||document.documentElement.scrollLeft)+'px';
			ohiStatus.style.bottom = -(document.body.scrollTop||document.documentElement.scrollTop)+'px';
		}

		if(document.body != ohiStatus.parentNode) {
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
			ohiStatus.style.fontSize = '13px';
			ohiStatus.style.lineHeight = '13px';
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
			for(var i=0; i<window.frames.length; i++) {
				try {
					if(typeof(window.frames[i].document) == 'unknown') continue;
				}
				catch(e) {
					continue;
				}
				var ohi = document.createElement('script');
				ohi.type= 'text/javascript';
				var js_list = ['keyboard_layouts','additional_layouts','ohi'];				
				for(var j=0;j<js_list.length;++j) {
					ohi.src = '//ohi.pat.im/'+js_list[j]+'.js';
					window.frames[i].document.body.appendChild(ohi);
				}
			}

			show_NCR_text();
			show_direct_typing_text();
		}
	}
	else ohiTimeout = setTimeout("ohiStart()",100);
}

function show_keyboard_layout_info() {
	var KE=ohi_KE;
	var kbd = ohi_KBD_type=='QWERTY' ? '' : ':'+ohi_KBD_type;
	var type_name = typeof current_layout_info.type_name != 'undefined' ? current_layout_info.type_name : '';
	var name='', link='', keyboardLayoutInfo = document.getElementById('keyboardLayoutInfo');

	if(keyboardLayoutInfo) {
		if(KE=='En') {
			name = '<strong>[영문' + kbd + ']</strong> ';
			if(En_type=='QWERTY') name += '쿼티 (QWERTY)';
			else if(En_type=='Dvorak') name += '드보락 (Dvorak)';
			else if(En_type=='Colemak') name += '콜맥 (Colemak)';
			else if(En_type=='Workman') name += '워크맨 (Workman)';
		}
		else {
			var beol = '3';
			if(type_name.substr(0,1)=='2') beol = '2';
			else if(type_name.substr(0,1)=='4') beol = '4';

			name = '<strong>[한글 ' + beol + '벌식' + kbd + (is_galmadeuli_input() ? ': 갈마들이' : '') + (is_moachigi_input() ? ': 모아치기' : '') + ']</strong> ';

			var full_name = typeof current_layout_info.full_name != undefined ? current_layout_info.full_name : '';
			if(is_old_hangeul_input()) {
				if(typeof find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).full_name != 'undefined')
					full_name = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).full_name;
			}
			if(typeof current_layout_info.full_name != 'undefined') name += full_name;

			if(is_old_hangeul_input() && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined'
			 && typeof find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).link != 'undefined'
			 && find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).link)
				link = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).link;
			else if(typeof current_layout_info.link != 'undefined' && current_layout_info.link)
				link = current_layout_info.link;

			if(link) name += ' <a href="'+link+'" target="_blank">ⓘ</a>';
		}

		keyboardLayoutInfo.innerHTML = name;
	}
}

function find_combination_table() { // 낱자 조합 규칙 정보 찾기
	var i;
	var combination_table = [];
	var layout_info = find_current_layout_info();

	if(typeof current_layout_info.moachigi_hangeul_combination_table != 'undefined' && typeof current_layout_info.hangeul_combination_table == 'undefined') {
	// 모아치기 자판을 이어치기 방식으로 쓸 때
		combination_table = current_layout_info.moachigi_hangeul_combination_table;
	}
	else {
	// 이어치기 자판
		combination_table = is_old_hangeul_input() ? hangeul_combination_table_full : hangeul_combination_table_default;

		// 자판 배열 정보에서 지정한 낱자 조합 규칙
		if(typeof layout_info.hangeul_combination_table != 'undefined') {
			combination_table = layout_info.hangeul_combination_table;
		}

	 	if(is_old_hangeul_input() && option.enable_old_hangeul_input) {
			if(typeof current_layout_info.old_hangeul_layout_type_name != 'undefined' && typeof find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).hangeul_combination_table != 'undefined')
				combination_table = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name).hangeul_combination_table;
		}

		// 편의를 높이기 위한 낱자 조합을 더함 (옛한글 자판이 아닌 한글 자판)
		if(!is_old_hangeul_input() && option.convenience_combination && typeof layout_info.hangeul_convenience_combination_table != 'undefined')
			combination_table = layout_info.hangeul_convenience_combination_table.concat(combination_table);
	}
	return combination_table;
}

function find_galmadeuli_chars(key) {

// 쿼티 자판 기준으로 p 자리 글쇠가 눌렸다면 

// [c2, sub_c2] [0x003B,0x0000], /* 0x50 P: semicolon */
// [c1, sub_c1] [0x1111,0x119E], /* 0x70 p: choseong pieup, jungseong alae-a */

// c1 : 기본 배열 아랫글 자리 (0x1111)
// c2 : 기본 배열 윗글 자리 (0x003B)
// sub_c1 : 보조 배열 아랫글 자리 (0x119E)
// sub_c2 : 보조 배열 윗글 자리 (0x0000)

	var c1, c2, sub_c1=0, sub_c2=0;
	var layout = find_current_layout();
	var sublayout = find_sublayout();

	if(typeof layout[key-33] == 'number') {
		c1 = layout[key-33];
		c2 = layout[shift_table[key-33]-33];
		if(sublayout.length) {
			sub_c1 = sublayout[key-33];
			sub_c2 = sublayout[shift_table[key-33]-33];
		}
	}
	else {
		c1 = layout[key-33][0];
		c2 = layout[shift_table[key-33]-33][0];
		sub_c1 = layout[key-33][1];
		sub_c2 = layout[shift_table[key-33]-33][1];
	}
	
	return [c1, c2, sub_c1, sub_c2];
}

function find_character_combination_table() {
	var layout_info = find_current_layout_info();
	var character_combination_table = [];
	if(typeof layout_info.character_combination_table != 'undefined') 
		character_combination_table = layout_info.character_combination_table.slice();
	if(is_old_hangeul_input())			
		character_combination_table = character_combination_table.concat(yeshangeul_sign_combination);
	return character_combination_table;
}

function find_layout_info(KE, type_name) {
	if(typeof type_name == 'undefined' || !type_name) return false;
	var i,j;
	var a=[keyboard_layouts];
	if(typeof additional_layouts != 'undefined') a.push(additional_layouts);
	if(typeof test_layouts != 'undefined') a.push(test_layouts);
	for(i=0;i<a.length;++i)
		for(j=0;j<a[i].length;++j)
			if(KE==a[i][j].KE && typeof a[i][j].type_name != 'undefined' && type_name.toLowerCase()==a[i][j].type_name.toLowerCase())
				return a[i][j];
	return false;
}

function find_current_layout() {
	var layout_info = find_current_layout_info();
	var layout = layout_info.layout;
	if(checkCapsLock() && typeof layout_info.capslock_layout != 'undefined') layout = layout_info.capslock_layout;
	return layout;
}

function find_current_layout_info() {
	var layout_info = current_layout_info;
	if(is_old_hangeul_input() && typeof current_layout_info.old_hangeul_layout_type_name != 'undefined') layout_info = find_layout_info('Ko', current_layout_info.old_hangeul_layout_type_name);
	return layout_info;
}

function find_extended_sign_layout(layout_info) {
	if(typeof layout_info == 'undefined') layout_info = find_current_layout_info();
	var sign_layout = null;

	if(typeof layout_info.extended_sign_layout != 'undefined') sign_layout = layout_info.extended_sign_layout;

	if(checkCapsLock()) {
		if(typeof layout_info.capslock_extended_sign_layout != 'undefined') sublayout=layout_info.capslock_extended_sign_layout;
	}

	return sign_layout;
}

function find_mainlayout(layout_info) {
	var layout = typeof layout_info == 'undefined' ? find_current_layout() : layout_info.layout;
	var mainlayout = [];

	if(typeof layout[0] == 'number') for(i=0;i<layout.length;++i) mainlayout.push(layout[i]);
	else for(i=0;i<layout.length;++i) mainlayout.push(layout[i][0]);

	return mainlayout;
}

function find_sublayout(layout_info) {
	if(typeof layout_info == 'undefined') layout_info = find_current_layout_info();
	var sublayout = [];

	if(checkCapsLock() && typeof layout_info.capslock_sublayout != 'undefined') sublayout=layout_info.capslock_sublayout;
	else if(checkCapsLock() && typeof layout_info.capslock_layout != 'undefined' && typeof layout_info.capslock_layout[0] != 'number') {
		for(i=0;i<layout_info.capslock_layout.length;++i) sublayout.push(layout_info.capslock_layout[i][1]);
	}
	else if(typeof layout_info.sublayout != 'undefined') sublayout=layout_info.sublayout;
	else if(typeof layout_info.layout != 'undefined' && typeof layout_info.layout[0] != 'number') {
		for(i=0;i<layout_info.layout.length;++i) sublayout.push(layout_info.layout[i][1]);
	}

	return sublayout;
}


function ohiChange(KE, type_name) {
	var f=document.getElementById('inputText');
	inputText_focus();
	
	if(NFD_stack.phoneme.length && f) complete_hangeul_syllable(f);

	esc_ext_state();
	var prev_layout_info = typeof current_layout_info != 'undefined' ? current_layout_info : null;
	
	if(KE.toLowerCase()=='en') KE='En';
	else if(KE.toLowerCase()=='ko' || KE.toLowerCase()=='k2' || KE.toLowerCase()=='k3') KE='Ko';

	ohi_KE = ohi_KE.replace(/(En|Ko)/, KE.substr(0,2));

	var layout_info = find_layout_info(KE, type_name);
	if(layout_info) {
		current_layout_info = layout_info;
		if(KE=='En') En_type = current_layout_info.type_name;
		else Ko_type = current_layout_info.type_name;
	}

	if(layout_info != prev_layout_info) {
		ohiStart();
		show_keyboard_layout(KE=='En' ? En_type : Ko_type);
	}
}

function ohiChange_between_same_type(type) {	// 같은 한·영 종류의 배열 바꾸기 (Ko는 주요 배열만 간추림)
	var i,j=-1;
	var En_type_array = ['QWERTY','Dvorak','Colemak','Workman'];
	var Ko_type_array = ['2-KSX5002','2-KPS9256','Sin3-P2','3m-Semoe','3-P3'];

	if(type=='En') {
		for(i=0;i<En_type_array.length;++i)
			if(En_type.toLowerCase()==En_type_array[i].toLowerCase()) j=i;
		En_type = En_type_array[(j+1)%i];
		ohiChange('En',En_type);
		return;
	}

	var a=[keyboard_layouts];
	if(typeof additional_layouts != 'undefined') a.push(additional_layouts);
	if(typeof test_layouts != 'undefined') a.push(test_layouts);

	for(i=0;i<Ko_type_array.length;++i) {
		if(type=='K2' && Ko_type_array[i].substr(0,1)!='2' || type=='K3' && Ko_type_array[i].substr(0,1)=='2') {
			// 두벌식 자판 이름(type_name)의 앞에 2이 붙지 않았거나 세벌식 자판 이름에 2이 붙은 것은 뺌
			Ko_type_array.splice(i--,1);
		}
	}

	if(type!='Ko') {
		// type이 K2이면 Ko_type_array에 모든 두벌식 자판 이름을 넣고, K3이면 모든 세벌식 자판 이름을 넣음
		for(i=0;i<a.length;++i)
			for(j=0;j<a[i].length;++j)
				if(a[i][j].KE=='Ko' && typeof a[i][j].type_name != 'undefined' && Ko_type_array.indexOf(a[i][j].type_name)<0) {
					if(type=='K2' && a[i][j].type_name.substr(0,1)=='2') Ko_type_array.push(a[i][j].type_name);
					if(type=='K3' && a[i][j].type_name.substr(0,1)!='2') Ko_type_array.push(a[i][j].type_name);
				}
	}

	for(i=0;i<Ko_type_array.length;++i)
		if(Ko_type.toLowerCase()==Ko_type_array[i].toLowerCase()) j=i;

	if(type!='Ko' && (Ko_type.substr(0,1)=='2'&&Ko_type_array[(j+1)%i].substr(0,1)!='2' || Ko_type.substr(0,1)!='2'&&Ko_type_array[(j+1)%i].substr(0,1)=='2')) Ko_type = Ko_type_array[0];
	else Ko_type = Ko_type_array[(j+1)%i];
	ohiChange('Ko',Ko_type);
}

function ohiChange_KE(type) {	// 한·영 상태 바꾸기
	var KE = ohi_KE;

	if(type === undefined || !type) {
		if(KE=='En') ohiChange('Ko',Ko_type);
		else if(KE=='Ko') ohiChange('En',En_type);
	}
	else if(type=='En') ohiChange('En',En_type);
	else if(type=='Ko') ohiChange('Ko',Ko_type);
}

function ohiChange_KBD_type(type) {	// 기준 자판 바꾸기
	if(type === undefined || !type) {
		ohi_KBD_type = ohi_KBD_type=='QWERTY' ? 'QWERTZ' : ohi_KBD_type=='QWERTZ' ? 'AZERTY' : 'QWERTY';
		ohiStart();
	}
	else {
		ohi_KBD_type = type;
		ohiStart();
	}
	show_keyboard_layout(option.show_layout);
}

function ohiChange_enable_sign_ext(op) {
	if(op=='off' || op=='0') option.enable_sign_ext = 0;
	else option.enable_sign_ext = 1;
	show_keyboard_layout(option.show_layout);

	var checkbox = document.getElementsByName('sign_extension');
	if(checkbox && typeof checkbox[0].checked != 'undefined') checkbox[0].checked = option.enable_sign_ext;
}

function ohiChange_enable_old_hangeul_input(op) {
	if(typeof op != 'undefined') {
		if(op=='off' || op=='0') option.enable_old_hangeul_input = 0;
		else option.enable_old_hangeul_input = 1;
	}
	complete_hangeul_syllable();
	Sin3_hangeul_extension();
	show_keyboard_layout(option.show_layout);
}

function ohiChange_enable_phonemic_writing(op) {
	if(op=='off' || op=='0') option.enable_phonemic_writing = 0;
	else option.enable_phonemic_writing = 1;
	show_keyboard_layout(option.show_layout);
}

function ohiChange_force_normal_typing(op) { // 모아치기 자판을 이어치기(일반 타자법)으로 치게 하기
	if(typeof op != 'undefined' && op=='off' || op=='0') option.force_normal_typing = 0;
	else option.force_normal_typing = 1;

	var checkbox = document.getElementsByName('force_normal_typing');
	if(checkbox && typeof checkbox[0].checked != 'undefined') checkbox[0].checked = option.force_normal_typing;	
}

function Sin3_hangeul_extension() {
	if(Ko_type.substr(0,5)!='Sin3-') return;
	var opt = document.getElementById('option_enable_Sin3_diphthong_key');
	if(opt) {
		if(option.enable_old_hangeul_input && current_layout_info.type_name.substr(0,5)=='Sin3-') opt.style.display = 'block';
		else opt.style.display = 'none';
	}
}

function ohiKeyswap(e,key) {
	var KE=ohi_KE;
	var i=0, swaped=[];
	if(ohi_KBD_type=='QWERTZ') swaped=[89,90,90,89,121,122,122,121];
	if(ohi_KBD_type=='AZERTY') swaped=[65,81,81,65,87,90,90,87,97,113,113,97,119,122,122,119,77,58,109,59,44,109,58,46,59,44];

	while(swaped[i] && swaped[i]!=key) i+=2;
	if(i!=swaped.length) key=swaped[i+1];
	if(KE!='En' || En_type!='QWERTY') {
	// 영문 쿼티 자판이 아니면 Caps Lock이 적용되지 않게 함
		if(key>64 && key<91 && !e.shiftKey) key+=32;
		if(key>96 && key<123 && e.shiftKey) key-=32;
	}

	return key;
}

function ohiKeypress(e) {
	if(onkeypress_skip) return false;
	
	var key_pressed=0; // 특수 기능 글쇠가 아닌 글쇠(일반 글쇠)가 눌렸는지
	var KE=ohi_KE.substr(0,2);
	var e=e||window.event, f=e.target||e.srcElement, n=f.nodeName||f.tagName, key=e.which||e.which==0?e.which:e.keyCode;
	key=ohiKeyswap(e,key);

	if(f.id=='inputText') {show_NCR_text();show_direct_typing_text();}
	if(option.turn_off_OHI) {
		tableKey_press(key);
		return false;
	}
	
	var i = ohiQ[0]+ohiQ[3]+ohiQ[6] || NFD_stack.phoneme.length ? 1 : 0;
	if(f.type=='text' && n=='INPUT' || n=='TEXTAREA') {
		if((key==13 || key==32) && !e.ctrlKey && !e.shiftKey && !e.altKey) { // 줄바꾸개(enter)와 사이띄개(space bar)
			if(!(browser=="MSIE" && browser_ver<9)) {
				if(key==32) if(e.preventDefault) e.preventDefault();
				if(!i && f.selectionEnd!=f.selectionStart) ohiBackspace(f);
			}
			prev_cursor_position = -1;
			complete_hangeul_syllable(f);
			// 풀어쓰기를 하고 있고 '낱내 뒤 빈칸 넣기' 기능을 쓰는데 한글을 조합하다가 사이띄개가 눌리면 빈칸을 더하여 넣음
			if(i && key==32 && is_phonemic_writing_input() && option.phonemic_writing_adding_space_every_syllable_end) ohiInsert(f,0,32);
			ohiInsert(f,0,key);
			esc_ext_state();
		}
		else if((key==10 || key==13 || key==32) && (e.ctrlKey^e.shiftKey)) { // Toggle
			if(e.preventDefault) e.preventDefault();
			if((key==10 || key==13) && e.ctrlKey) ohiChange_KBD_type(); // 기준 자판 바꾸기
			else if(key==32 && (e.ctrlKey || e.shiftKey)) ohiChange_KE();	// 한·영 상태 바꾸기
			key_pressed=0;
		}
		else if(key==49 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 영문 배열 종류 바꾸기 (QWERTY/Dvorak/Colemak)
			ohiChange_between_same_type('En');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(key==50 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 두벌식 배열 종류 바꾸기 (한국/조선 표준 자판)
			ohiChange_between_same_type('K2');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(key==51 && e.altKey && !e.ctrlKey && !e.shiftKey) {	// 세벌식 배열 종류 바꾸기
			ohiChange_between_same_type('K3');
			if(e.preventDefault) e.preventDefault();
			key_pressed=0;
		}
		else if(ohi_KE.substr(0,2)=='En' && key>32 && key<127 && e.keyCode<127 && !e.altKey && !e.ctrlKey) { // 영문 상태에서 일반 글쇠
			if(e.preventDefault) e.preventDefault();
			ohiRoman(f,e,key);
			key_pressed=1;
		}
		else if(ohi_KE.substr(0,2)!='En' && key>32 && key<127 && e.keyCode<127 && !e.altKey && !e.ctrlKey) { // 영문 상태가 아닐 때 일반 글쇠
			if(e.preventDefault) e.preventDefault();
			key_pressed=1;

			if(is_moachigi_input()) pressed_key_accumulation(f,e,key);
			else {
				if((document.selection && document.selection.createRange().text.length!=1) || (f.selectionEnd+1 && f.selectionEnd-f.selectionStart!=1))
					ohiInsert(f,0,0);
				if(ohi_KE.substr(0,2)=='Ko') {
					if(current_layout_info.type_name.substr(0,2)=='2-') ohiHangeul2(f,e,key);
					else if(!ohiHangeul3_abbreviation(f,key)) ohiHangeul3(f,e,key);
				}
			}
		}
	}
	tableKey_press(key);
	return false;
}

function ohiKeydown(e) {
	if(option.turn_off_OHI) {
		show_NCR_text();
		show_direct_typing_text();
		return false;
	}
	onkeypress_skip=0; // 참이면 ohiKeypress() 처리를 건너뜀
	onkeyup_skip=0; // 참이면 ohiKeyup() 처리를 건너뜀
	var i=0;
	var e=e||window.event, f=e.target||e.srcElement, n=f.nodeName||f.tagName, key=e.which||e.which==0?e.which:e.keyCode;
	var KE = ohi_KE;

	if(f.type=='text' && n=='INPUT' || n=='TEXTAREA') {
		if(e.keyCode>=96 && e.keyCode<=111) { // 오른쪽 숫자판(키패드) 글쇠일 때
			onkeypress_skip=1;
			esc_ext_state();
			var c=Array(/*0*/48,/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
			/***/42,/*+*/43,0,/*-*/45,/*.*/46,/*/*/47)[e.keyCode-96];
			ohiInsert(f,0,c);
			if(e.preventDefault) e.preventDefault();
	 		return false;
		}

		if(e.keyCode==8) {	// Backspace
			tableKey_press(e.keyCode);
			if(is_moachigi_input()) {
				if(e.preventDefault) e.preventDefault();
				pressed_key_accumulation(f,e,key);
				onkeyup_skip=0;
				return false;
			}
			else if(option.abbreviation && prev_cursor_position>=0) {
			// 이어치기 자판으로 줄임말을 넣은 뒤
				ohiHangeul_moa_backspace(f,e);
				return false;
			}

			if(character_combination_queue.length && ohiCombinedCharacter_backspace(f,e)) return false;
			if(ohiHangeul_backspace(f,e)) return false;
			if(e.preventDefault) e.preventDefault();
			ohiBackspace(f);
			onkeyup_skip=1;
		}

		if(e.keyCode==13) { // Enter (한글 조합 상태)
			tableKey_press(e.keyCode);
			if(character_combination_queue.length) ohiSelection(f,0);
			prev_class = [];
			if(is_moachigi_input()) {
				if(e.preventDefault) e.preventDefault();
				if(!(ohiQ[0]+ohiQ[3]+ohiQ[6]) && !NFD_stack.phoneme.length && typeof f.selectionEnd != 'undefined' && f.selectionStart != f.selectionEnd) ohiBackspace(f);
				pressed_key_accumulation(f,e,key);
				esc_ext_state();
				return false;
			}
		}

		if(e.keyCode==32) { // Space
			tableKey_press(e.keyCode);
			if(NFD_stack.phoneme.length || ohiQ[0]+ohiQ[3]+ohiQ[6] || character_combination_queue.length) ohiSelection(f,0);
			prev_class = [];
			if(is_moachigi_input()) {
				if(!pressing_keys) return false;
				if(e.preventDefault) e.preventDefault();
				pressed_key_accumulation(f,e,key);
				onkeyup_skip = 0;
				return false;
			}
		}

		if(e.keyCode==20) { // Caps Lock
			//tableKey_press(e.keyCode);
			show_keyboard_layout();
		}

		if((e.keyCode>=35 && e.keyCode<=40) || e.keyCode==45 || e.keyCode==46) { // end(35), home(36), 화살표(37~40), insert(45), del(46)
			if(NFD_stack.phoneme.length || ohiQ[0]+ohiQ[3]+ohiQ[6]) { // 한글 조합 상태
				complete_hangeul_syllable(f);
				prev_class = [];
				prev_cursor_position = -1;
			}
			esc_ext_state();
		}

		if(e.keyCode==17) { // ctrl
			if(!pressing_keys && pressed_keys.indexOf(17)<0) pressed_key_accumulation(f,e,key);
		}
		
		if(e.keyCode!=17 && pressing_keys && pressed_keys.indexOf(17)>=0) { // ctrl + ?
			pressed_keys=[];
			pressing_keys=0;
			if(ohiQ[0]+ohiQ[3]+ohiQ[6] || NFD_stack.phoneme.length) {
				complete_hangeul_syllable(f);
			}
		}
		
/*
		if(e.keyCode==18) { // Alt
		}
		if(e.keyCode==91 || e.keyCode==93) { // menu
		}
		if(e.keyCode>=112 && e.keyCode<=123) { // F1~F12
		}
*/

		if(e.keyCode==16) { // shift
			if(KE=='Ko' && Ko_type=='2-Gaon26KM') {
				pressed_key_accumulation(f,e,key);
				tableKey_press(e.keyCode);
			}
			if(KE=='Ko' && Ko_type=='4t-1985') tableKey_press(e.keyCode);
			if(Ko_type.substr(0,3)=='3m-' && !option.force_normal_typing) tableKey_press(e.keyCode);
		}

		if(e.keyCode<45 && e.keyCode!=16 && e.keyCode!=17 && e.keyCode!=18 && e.keyCode!=13 && e.keyCode!=32) {
			if(NFD_stack.phoneme.length || ohiQ[0]+ohiQ[3]+ohiQ[6]) complete_hangeul_syllable(f);
			esc_ext_state();
			prev_class = [];
			prev_cursor_position = -1;
		}
	}
	if(f.id=='inputText') {show_NCR_text();show_direct_typing_text();}
}

function ohiKeyup(e) {
	var e=e||window.event, f=e.target||e.srcElement;
	var KE=ohi_KE.substr(0,2);
	var exceptional_keys = [32,13,8,16]; // 사이띄개(32), 줄바꾸개(13), 뒷걸음쇠(8), 윗글쇠(16)

	if(onkeyup_skip || option.turn_off_OHI || (e.keyCode<47 && exceptional_keys.indexOf(e.keyCode)<0)) {}
	else if(!option.force_normal_typing && KE=='Ko' && Ko_type.substr(0,3)=='3m-') {	
		if(e.keyCode==16 || pressing_keys && !--pressing_keys) { // 윗글쇠(16)를 떼었거나 모든 글쇠를 뗌
			while(pressed_keys.indexOf(16)>=0) pressed_keys.splice(pressed_keys.indexOf(16),1);
			if(pressed_keys.length) ohiHangeul3_moa(f,e);
			prev_pressed_keys = pressed_keys.slice();
			pressed_keys=[];
			pressing_keys=0;
		}
	}
	else if(KE=='Ko' && Ko_type=='2-Gaon26KM') {
		if(pressing_keys && !--pressing_keys) {
			// 윗글쇠(shift)가 눌렸으면 한글 조합을 끊음
			if(pressed_keys.length==1 && pressed_keys[0]==16 && e.keyCode==16) complete_hangeul_syllable(f);
			pressed_keys=[];
		}
	}
	else if(KE=='Ko' && Ko_type=='4t-1985') {
		// 윗글쇠(shift)를 때에 따라 고정되는 윗글쇠(shift lock)로 씀
		if(e.keyCode==16) shift_lock=1;
	}
	
	if(e.keyCode==17 && pressing_keys && pressed_keys.indexOf(17)>=0) { // ctrl을 떼었을 때
		--pressing_keys;
		pressed_keys.splice(pressed_keys.indexOf(17));
	}

	if(f.id=='inputText') {show_NCR_text();show_direct_typing_text();}
}

function pressed_key_accumulation(f,e,key) {
	if(pressed_keys.length && pressed_keys[pressed_keys.length-1]==key) {
	// 한 글쇠가 오래 눌려서 같은 문자가 들어왔을 때
		ohiHangeul3_moa(f,e);
		pressed_keys=[];
		pressing_keys=0;
		prev_cursor_position = -1;
		if(key==8) {
			ohiHangeul_moa_backspace(f,e);
			return;
		}
		ohiHangeul3(f,e,key);
	}
	else {
		++pressing_keys;
		pressed_keys.push(key);
	}
}

function inputText_focus(f) {
	if(typeof f =='undefined') f=document.getElementById('inputText');
	if(f) f.focus();
}

function inputText_rows(r) { // 글상자(textarea)의 줄 수를 바꿈
	var f=document.getElementById('inputText');
	if(f) f.rows=r.toString();
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

		if(field=='kbd') { // 기준 자판
			if(value.toUpperCase()=='QWERTY' || value.toUpperCase()=='QWERTZ' || value.toUpperCase()=='AZERTY')
				ohiChange_KBD_type(value.toUpperCase());
		}
		else if(field=='en')	{ // 영문 자판
			ohiChange('En',value.toLowerCase());
		}
		else if(field=='ko' || field=='k2' || field=='k3') { // 한글 자판
			ohiChange('Ko',value.toLowerCase());
		}
		else if(field=='statusbar') { // 오른쪽 아래에 보람줄 나타내기
			setTimeout(function(){show_ohiStatusBar(TF);}, 250);
		}
		else if(field=='sign_ext') { // 기호 확장
			ohiChange_enable_sign_ext(TF);
		}
		else if(field=='double_final_ext' || field=='df_ext') { // 겹받침 확장
			ohiChange_enable_double_final_ext(TF);
		}
		else if(field=='sl' || field=='square layout') {
			option.square_layout = TF;
		}
		else if(field=='normal_typing' || field=='nt') { // 모아치기 자판을 이어치기로 쓰기
			option.force_normal_typing = TF;
		}
		else if(field=='ncr') { // HTML 문자 참조 보이기
			option.NCR = TF;
		}
		else if(field=='ncr_only_cgg') { // 첫가끝 조합형 한글만 HTML 문자 참조로 바꾸어 보이기
			converting_option.convert_only_NFD_hangeul_encoding_in_NCR_text = TF;
		}
		else if(field=='y') { // 신세벌식 자판으로 옛한글 겹낱자 조합하기
			option.enable_old_hangeul_input = TF;
			ohiChange_enable_old_hangeul_input();
		}
		else if(field=='hcj') { // 옛한글 자판을 쓸 때에 낱자를 호환용 한글 자모(Hangul Compatibility Jamo)로 넣기
			option.use_hangeul_compatibility_jamo_when_entering_old_hangeul = TF;
		}
		else if(field=='diph' || field=='diphthong') { // 신세벌식 자판으로 옛한글을 조합할 때 오른쪽 아랫글 자리에서 홀소리를 넣을지
			option.enable_Sin3_diphthong_key = TF;
		}
		else if(field=='pw' || field=='phonemic_writing') { // 풀어쓰기
			option.phonemic_writing = TF;
		}
		else if(field=='abbr' || field=='abbreviation') { // 이어치기 자판에서 줄임말 기능 쓰기
			option.abbreviation = TF;
		}
		else if(field=='cc' || field=='convenience_combination') { // 입력 편의를 높이는 한글 편의 조합 쓰기 (조합표가 지정되어 있을 때)
			option.convenience_combination = TF;
		}
		else if(field=='sun' || field=='sunalae') { // 두벌식 자판 순아래 조합
			option.sunalae = TF;
		}
		else if(field == 'row') { // 글상자(textarea)의 줄 수
			setTimeout(function(){inputText_rows(value);},250);
		}
		else if(field == 'sq') { // 가지런한 배열표로 나타내기
			option.square_layout = TF;
		}
	}
}

function tableKey_press(key) {
	var shift1 = document.getElementById('key41');
	var shift2 = document.getElementById('key52');

	if(!option.show_layout || !shift1) return;

	shift1.className = shift1.className.substr(0,2);
	shift2.className = shift2.className.substr(0,2);
	var layout_name = current_layout_info.type_name;

	if(key==188) key=44; // , 자리 글쇠
	if(key==190) key=46; // . 자리 글쇠
	if(key==222) key=39; // ' 자리 글쇠
	if(key==219) key=91; // [ 자리 글쇠
	if(key==221) key=93; // ] 자리 글쇠
	if(key==220) key=92; // \ 자리 글쇠
	if(key==173) key=45; // - 자리 글쇠
	if(key==191) key=47; // / 자리 글쇠
	if(key==192) key=96; // ` 자리 글쇠
	
	if(key==16 || current_layout_info.type_name=='4t-1985'&&shift_lock) {
		shift1.className += ' pressed';
		shift2.className += ' pressed';
	}

	var key_td;
	for(j=0;j<dkey.length;++j) {
		if(j==41 || j==52) continue;
		key_td = document.getElementById('key'+j);
		key_td.className = key_td.className.replace(/ clicked| pressed/,'');
		if(key==dkey[j] || key==ukey[j] || (layout_name.substr(0,3)=='3m-' && !option.force_normal_typing && (pressed_keys.indexOf(dkey[j])>=0 || pressed_keys.indexOf(ukey[j])>=0))) {
			key_td.className += ' pressed';
		}

		if(key==ukey[j] && key!=dkey[j]) {
			shift1.className += ' pressed';
			shift2.className += ' pressed';
		}
	}
}

function tableKey_clicked(e, key_num, dk, uk){
	inputText_focus();
	var key, f = document.getElementById('inputText');
	var n=f.nodeName||f.tagName;
	if(!f || n!='TEXTAREA') return false;

	KE=ohi_KE.substr(0,2);

	var shiftlock = document.getElementById('key28');
	var shift1 = document.getElementById('key41');
	var shift2 = document.getElementById('key52');

	if(dk==20) {	// 배열표에서 Shift Lock이 눌렸을 때
		if(!shiftlock_click) {
			shiftlock.style.backgroundColor = 'orange';
			shiftlock_click = 1;
		}
		else {
			shiftlock.style.backgroundColor = '';
			shiftlock_click = 0;
		}
	}
	if(dk==16 && !shift_click) {	// 배열표에서 윗글쇠가 눌렸을 때
		shift_click = 1;
		shift1.style.backgroundColor = 'orange';
		shift2.style.backgroundColor = 'orange';
		return;
	}
	if((dk==32 || dk==13 || dk==9) && !shift_click) {	// 사이띄개(32), 줄바꾸개(13), Tab(9)
		complete_hangeul_syllable(f);
		esc_ext_state();
		ohiInsert(f,0,dk);
		return;
	}
	if(dk==8 && !shift_click) {	// Backspace
		if(option.abbreviation && prev_cursor_position>=0) {
		// 이어치기 자판으로 줄임말을 넣은 뒤
			ohiHangeul_moa_backspace(f,e);
			return false;
		}
		if(ohiHangeul_backspace(f,e)) return;
		ohiBackspace(f);
		inputText_focus();
		esc_ext_state();
		return;
	}

	if(dk==-1) { // 기준 자판 바꾸기 단추
		ohiChange_KBD_type();
		inputText_focus();
	}
	if(dk==-2) { // 영문 자판 바꾸기 단추
		ohiChange_between_same_type('En');
	}
	if(dk==-3) { // 한글 자판 바꾸기 단추
		ohiChange_between_same_type('Ko');
		inputText_focus();
	}
	if(dk==-11) {	// 3벌식 자판 바꾸기 단추
		ohiChange_between_same_type('K3');
		inputText_focus();
	}
	if(dk==-12) { // 2벌식 자판 바꾸기 단추
		ohiChange_between_same_type('K2');
	}
	if(dk==-13) { // 한·영 상태 바꾸기 단추
		ohiChange_KE();
		inputText_focus();
	}

	key = (shift_click+shiftlock_click)%2 ? uk : dk;
	if(ohi_KE.substr(0,2)=='En' && key>32 && key<127) ohiRoman(f,0,key);
	if(ohi_KE.substr(0,2)!='En' && key>32 && key<127) {
		if(document.selection && document.selection.createRange().text.length!=1) ohiInsert(f,0,0);
		if(KE=='Ko') {
			if(current_layout_info.type_name.substr(0,2)=='2-') ohiHangeul2(f,e,key);
			else if(!ohiHangeul3_abbreviation(f,key)) ohiHangeul3(f,e,key);
		}
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

function ohi_code_tables() {
	var i;

	ohi_cheos = [/*ㄱ*/128,/*ㄲ*/129,/*ㄴ*/131,/*ㄷ*/134,/*ㄸ*/135,/*ㄹ*/136,/*ㅁ*/144,/*ㅂ*/145,/*ㅃ*/146,/*ㅅ*/148,/*ㅆ*/149,/*ㅇ*/150,/*ㅈ*/151,/*ㅉ*/152,/*ㅊ*/153,/*ㅋ*/154,/*ㅌ*/155,/*ㅍ*/156,/*ㅎ*/157];
	ohi_ga = [/*ㅏ*/66,/*ㅐ*/67,/*ㅑ*/68,/*ㅒ*/69,/*ㅓ*/70,/*ㅔ*/71,/*ㅕ*/72,/*ㅖ*/73,/*ㅗ*/74,/*ㅘ*/75,/*ㅙ*/76,/*ㅚ*/77,/*ㅛ*/78,/*ㅜ*/79,/*ㅝ*/80,/*ㅞ*/81,/*ㅟ*/82,/*ㅠ*/83,/*ㅡ*/84,/*ㅢ*/85,/*ㅣ*/86];
	ohi_ggeut = [/*ㄱ*/1,/*ㄲ*/2,/*ㄳ*/3,/*ㄴ*/4,/*ㄵ*/5,/*ㄶ*/6,/*ㄷ*/7,/*ㄹ*/9,/*ㄺ*/10,/*ㄻ*/11,/*ㄼ*/12,/*ㄽ*/13,/*ㄾ*/14,/*ㄿ*/15,/*ㅀ*/16,
	/*ㅁ*/17,/*ㅂ*/18,/*ㅄ*/20,/*ㅅ*/21,/*ㅆ*/22,/*ㅇ*/23,/*ㅈ*/24,/*ㅊ*/26,/*ㅋ*/27,/*ㅌ*/28,/*ㅍ*/29,/*ㅎ*/30];

	ohi_hangeul_phoneme = ohi_cheos.concat(ohi_ga,ohi_ggeut);
	ohi_hotbadchim = [/*ㄱ*/1,/*ㄴ*/4,/*ㄷ*/7,/*ㄹ*/9,/*ㅁ*/17,/*ㅂ*/18,/*ㅅ*/21,/*ㅇ*/23,/*ㅈ*/24,/*ㅊ*/26,/*ㅋ*/27,/*ㅌ*/28,/*ㅍ*/29,/*ㅎ*/30];
	unicode_modern_hotbadchim = [/*ㄱ*/0x11A8,/*ㄴ*/0x11AB,/*ㄷ*/0x11AE,/*ㄹ*/0x11AF,/*ㅁ*/0x11B7,/*ㅂ*/0x11B8,/*ㅅ*/0x11BA,/*ㅇ*/0x11BC,/*ㅈ*/0x11BD,/*ㅊ*/0x11BE,/*ㅋ*/0x11BF,/*ㅌ*/0x11C0,/*ㅍ*/0x11C1,/*ㅎ*/0x11C2];

	compatibility_cheos = [/*ㄱ*/0x3131,/*ㄲ*/0x3132,/*ㄴ*/0x3134,/*ㄵ*/0x3135,/*ㄶ*/0x3136,/*ㄷ*/0x3137,/*ㄸ*/0x3138,/*ㄹ*/0x3139,/*ㄺ*/0x313A,/*ㄻ*/0x313B,/*ㄼ*/0x313C,/*ㄽ*/0x313D,/*ㅀ*/0x3140,
	/*ㅁ*/0x3141,/*ㅂ*/0x3142,/*ㅃ*/0x3143,/*ㅄ*/0x3144,/*ㅅ*/0x3145,/*ㅆ*/0x3146,/*ㅇ*/0x3147,/*ㅈ*/0x3148,/*ㅉ*/0x3149,/*ㅊ*/0x314A,/*ㅋ*/0x314B,/*ㅌ*/0x314C,/*ㅍ*/0x314D,/*ㅎ*/0x314E,
	/*ㅥ*/0x3165,/*ㅦ*/0x3166,/*ㅧ*/0x3167,/*ㅪ*/0x316A,/*ㅮ*/0x316E,/*ㅯ*/0x316F,/*ㅱ*/0x3171,/*ㅲ*/0x3172,/*ㅳ*/0x3173,/*ㅴ*/0x3174,/*ㅵ*/0x3175,/*ㅶ*/0x3176,/*ㅷ*/0x3177,/*ㅸ*/0x3178,/*ㅹ*/0x3179,/*ㅺ*/0x317A,/*ㅻ*/0x317B,/*ㅼ*/0x317C,/*ㅽ*/0x317D,/*ㅾ*/0x317E,
	 /*ㅿ*/0x317F,/*ㆀ*/0x3180,/*ㆁ*/0x3181,/*ㆄ*/0x3184,/*ㆅ*/0x3185,/*ㆆ*/0x3186];
	compatibility_modern_cheos = [0x3131,0x3132,0x3134,0x3137,0x3138,0x3139,0x3141,0x3142,0x3143,0x3145,0x3146,0x3147,0x3148,0x3149,0x314A,0x314B,0x314C,0x314D,0x314E, 0x317F,0x3181,0x3186];
	i=0x314F;	while(i<=0x3163) compatibility_ga.push(i++); compatibility_ga.push(0x318D);
	compatibility_ggeut = [0x3131,0x3132,0x3133,0x3134,0x3135,0x3136,0x3137,0x3139,0x313A,0x313B,0x313C,0x313D,0x313E,0x313F,0x3140,0x3141,0x3142,0x3144,0x3145,0x3146,0x3147,0x3148,0x314A,0x314B,0x314C,0x314D,0x314E,
	 0x317F,0x3181,0x3186];

	compatibility_dah = [], compatibility_modern_dah = [], compatibility_hol = [], compatibility_modern_hol = [];
	i=0x3131;	while(i<=0x314E) {compatibility_dah.push(i); compatibility_modern_dah.push(i++);}
	i=0x3165;	while(i<=0x3186) compatibility_dah.push(i++);

	i=0x314F;	while(i<=0x3163) {compatibility_hol.push(i); compatibility_modern_hol.push(i++);}
	i=0x3187;	while(i<=0x318E) compatibility_hol.push(i++);

	compatibility_hangeul_phoneme = compatibility_dah.concat(compatibility_hol);
	compatibility_modern_hangeul_phoneme = compatibility_modern_dah.concat(compatibility_modern_hol);

	compatibility_cheos_to_NFD_hotdah = [/*ㄱ*/[0x1100],/*ㄲ*/[0x1100,0x1100],/*ㄴ*/[0x1102],/*ㄵ*/[0x1102,0x110C],/*ㄶ*/[0x1102,0x1112],/*ㄷ*/[0x1103],/*ㄸ*/[0x1103,0x1103],/*ㄹ*/[0x1105],/*ㄺ*/[0x1105,0x1100],/*ㄻ*/[0x1105,0x1106],/*ㄼ*/[0x1105,0x1107],/*ㄽ*/[0x1105,0x1109],/*ㅀ*/[0x1105,0x1112],
	 /*ㅁ*/[0x1106],/*ㅂ*/[0x1107],/*ㅃ*/[0x1107,0x1107],/*ㅄ*/[0x1107,0x1109],/*ㅅ*/[0x1109],/*ㅆ*/[0x1109,0x1109],/*ㅇ*/[0x110B],/*ㅈ*/[0x110C],/*ㅉ*/[0x110C,0x110C],/*ㅊ*/[0x110E],/*ㅋ*/[0x110F],/*ㅌ*/[0x1110],/*ㅍ*/[0x1111],/*ㅎ*/[0x1112],
	 /*ㅥ*/[0x1102,0x1102],/*ㅦ*/[0x1102,0x1103],/*ㅧ*/[0x1102,0x1109],/*ㅪ*/[0x1105,0x1103],/*ㅮ*/[0x1106,0x1107],/*ㅯ*/[0x1106,0x1109],/*ㅱ*/[0x1106,0x110B],/*ㅲ*/[0x1107,0x1100],/*ㅳ*/[0x1107,0x1103],/*ㅴ*/[0x1107,0x1109,0x1100],/*ㅵ*/[0x1107,0x1109,0x1103],/*ㅶ*/[0x1107,0x110C],/*ㅷ*/[0x1107,0x1110],/*ㅸ*/[0x1107,0x110B],/*ㅹ*/[0x1107,0x1107,0x110B],/*ㅺ*/[0x1109,0x1100],/*ㅻ*/[0x1109,0x1102],/*ㅼ*/[0x1109,0x1103],/*ㅽ*/[0x1109,0x1107],/*ㅾ*/[0x1109,0x110C],
	 /*ㅿ*/[0x1140],/*ㆀ*/[0x110B,0x110B],/*ㆁ*/[0x114C],/*ㆄ*/[0x1111,0x110B],/*ㆅ*/[0x1112,0x1112],/*ㆆ*/[0x1159]];
	compatibility_dah_to_NFD_hotbadchim = [/*ㄱ*/[0x11A8],/*ㄲ*/[0x11A8,0x11A8],/*ㄳ*/[0x11A8,0x11BA],/*ㄴ*/[0x11AB],/*ㄵ*/[0x11AB,0x11BD],/*ㄶ*/[0x11AB,0x11C2],/*ㄷ*/[0x11AE],/*ㄸ*/[0x11AE,0x11AE],/*ㄹ*/[0x11AF],/*ㄺ*/[0x11AF,0x11A8],/*ㄻ*/[0x11AF,0x11B7],/*ㄼ*/[0x11AF,0x11B8],[0x11AF,0x11BA],[0x11AF,0x11C0],[0x11AF,0x11C1],[0x11AF,0x11C2],[0x11AE],[0x11B8],[0x11B8,0x11B8],[0x11B8,0x11BA],[0x11BA],[0x11BA,0x11BA],[0x11BC],[0x11BD],[0x11BD,0x11BD],[0x11BE],[0x11BF],[0x11C0],[0x11C1],[0x11C2],
	 /*ㅥ*/[0x11AB,0x11AB],/*ㅦ*/[0x11AB,0x11AE],/*ㅧ*/[0x11AB,0x11BA],/*ㅨ*/[0x11AB,0x11EB],/*ㅩ*/[0x11AF,0x11A8,0x11BA],/*ㅪ*/[0x11AF,0x11AE],/*ㅫ*/[0x11AF,0x11B8,0x11BA],/*ㅬ*/[0x11AF,0x11EB],/*ㅭ*/[0x11AF,0x11F9],/*ㅮ*/[0x11B7,0x11B8],/*ㅯ*/[0x11B7,0x11BA],/*ㅰ*/[0x11B7,0x11EB],/*ㅱ*/[0x11B7,0x11BC],/*ㅲ*/[0x11B8,0x11A8],/*ㅳ*/[0x11B8,0x11AE],/*ㅴ*/[0x11B8,0x11BA,0x11A8],/*ㅵ*/[0x11B8,0x11BA,0x11AE],/*ㅶ*/[0x11B8,0x11BD],/*ㅷ*/[0x11B8,0x11C0],/*ㅸ*/[0x11B8,0x11BC],/*ㅹ*/[0x11B8,0x11B8,0x11BC],/*ㅺ*/[0x11BA,0x11A8],/*ㅻ*/[0x11BA,0x11AB],/*ㅼ*/[0x11BA,0x11AE],/*ㅽ*/[0x11BA,0x11B8],/*ㅾ*/[0x11BA,0x11BD],/*ㅿ*/[0x11EB],/*ㆀ*/[0x11BC,0x11BC],/*ㆁ*/[0x11F0],/*ㆂ*/[0x11F0,0x11BA],/*ㆃ*/[0x11F0,0x11EB],/*ㆄ*/[0x11C1,0x11BC],/*ㆅ*/[0x11C2,0x11C2],/*ㆆ*/[0x11F9]];
	compatibility_hol_to_NFD_hol = [0x1161,0x1162,0x1163,0x1164,0x1165,0x1166,0x1167,0x1168,0x1169,0x116A,0x116B,0x116C,0x116D,0x116E,0x116F,0x1170,0x1171,0x1172,0x1173,0x1174,0x1175,
	 /*ㆇ*/0x1184,/*ㆈ*/0x1185,/*ㆉ*/0x1188,/*ㆊ*/0x1191,/*ㆋ*/0x1192,/*ㆌ*/0x1194,/*ㆍ*/0x119E,/*ㆎ*/0x11A1];
	compatibility_hol_to_NFD_hothol = [[0x1161],[0x1162],[0x1163],[0x1164],[0x1165],[0x1166],[0x1167],[0x1168],[0x1169],[0x1169,0x1161],[0x1169,0x1162],[0x1169,0x1175],[0x116D],[0x116E],[0x116E,0x1165],[0x116E,0x1166],[0x116E,0x1175],[0x1172],[0x1173],[0x1173,0x1175],[0x1175],
	 /*ㆇ*/[0x116D,0x1163],/*ㆈ*/[0x116D,0x1164],/*ㆉ*/[0x116D,0x1175],/*ㆊ*/[0x1172,0x1167],/*ㆋ*/[0x1172,0x1168],/*ㆌ*/[0x1172,0x1175],/*ㆍ*/[0x119E],/*ㆎ*/[0x119E,0x1175]];

	halfwidth_cheos = [0xFFA1,0xFFA2,0xFFA4,0xFFA7,0xFFA8,0xFFA9,0xFFB1,0xFFB2,0xFFB3,0xFFB5,0xFFB6,0xFFB7,0xFFB8,0xFFB9,0xFFBA,0xFFBB,0xFFBC,0xFFBD,0xFFBE];
	for(i=0;i<4;++i) for(j=0;j<(i==3?3:6);++j) halfwidth_ga.push(0xFFC2+i*8+j);
	halfwidth_ggeut = [0xFFA1,0xFFA2,0xFFA3,0xFFA4,0xFFA5,0xFFA6,0xFFA7,0xFFA9,0xFFAA,0xFFAB,0xFFAC,0xFFAD,0xFFAE,0xFFAF,0xFFB0,
	 0xFFB1,0xFFB2,0xFFB4,0xFFB5,0xFFB6,0xFFB7,0xFFB8,0xFFBA,0xFFBB,0xFFBC,0xFFBD,0xFFBE];
	halfwidth_hangeul_phoneme = halfwidth_cheos.concat(halfwidth_ga, halfwidth_ggeut);

	i=0x1100;	while(i<=0x115E) unicode_cheos.push(i++);
	i=0xA960;	while(i<=0xA97C) unicode_cheos.push(i++);
	i=0x1161;	while(i<=0x11A7) unicode_ga.push(i++);
	i=0xD7B0;	while(i<=0xD7C6) unicode_ga.push(i++);
	i=0x11A8;	while(i<=0x11FF) unicode_ggeut.push(i++);
	i=0xD7CB;	while(i<=0xD7FB) unicode_ggeut.push(i++);

	unicode_ggeut_to_cheos = [0x1100,0x1101,0,0x1102,0,0,0x1103,0x1105,0,0,0,0,0,0,0,0x1106,0x1107,0,0x1109,0x110A,0x110B,0x110C,0x110E,0x110F,0x1110,0x1111,0x1112,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x111D,0,0,0,0x112B,0,0,0,0,0x1140,0,0,0,0,0x114C,0,0,0,0x1157,0,0,0,0,0x1159,0,0,0,0,0,0, // ~ 0x11F9
	 0,0,0x1104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x1108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x110D,0,0]; // 0xD7CB ~ 0xD7FB
	unicode_cheos_to_ggeut = [0x11A8,0x11A9,0x11AB,0x11AE,0xD7CD,0x11AF,0x11B7,0x11B8,0xD7E6,0x11BA,0x11BB,0x11BC,0x11BD,0xD7F9,0x11BE,0x11BF,0x11C0,0x11C1,0x11C2,
	 0,0,0,0,0,0,0,0,0xD7DD,0,0x11E2,0,0,0,0,0,0,0,0,0,0,0,0,0,0x11E6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0x11EB,0,0,0,0,0,0,0,0,0,0,0,0x11F0,0,0,0,0,0,0,0,0,0,0,0,0,0x11F9];

	unicode_NFD_hangeul_phoneme = unicode_cheos.concat(unicode_ga, unicode_ggeut); // 첫가끝 조합형 한글 낱자
	unicode_NFD_hangeul_filler = [0x115F,0x1160]; // 첫가끝 조합형 첫소리·가운뎃소리 채움 문자
	unicode_NFD_hangeul_code = unicode_NFD_hangeul_phoneme.concat(unicode_NFD_hangeul_filler); 	// 첫가끝 조합형에서 한글 낱내자를 나타내는 데에 쓰이는 낱자/채움 부호값들
	unicode_NFD_hangeul_sidedot = [0x302E,0x302F]; // 옛한글에서 성조를 나타내는 방점

	i=0x1100;	while(i<=0x1112) unicode_modern_cheos.push(i++);
	i=0x1161;	while(i<=0x1175) unicode_modern_ga.push(i++);
	i=0x11A8;	while(i<=0x11C2) unicode_modern_ggeut.push(i++);
	unicode_modern_hangeul_phoneme = unicode_modern_cheos.concat(unicode_modern_ga, unicode_modern_ggeut); // 유니코드 조합형 요즘한글 낱자

	unicode_non_combined_cheos = [0x1100,0x1102,0x1103,0x1105,0x1106,0x1107,0x1109,0x110B,0x110C,0x110E,0x110F,0x1110,0x1111,0x1112];
	unicode_non_combined_ga = [0x1161,0x1162,0x1164,0x1165,0x1166,0x1167,0x1168,0x1169,0x116D,0x116E,0x1172,0x1173,0x1175,0x119E];
	unicode_non_combined_ggeut = [0x11A8,0x11AB,0x11AE,0x11AF,0x11B7,0x11B8,0x11BA,0x11BC,0x11BD,0x11BE,0x11BF,0x11C0,0x11C1,0x11C2];
	unicode_non_combined_phoneme = unicode_non_combined_cheos.concat(unicode_non_combined_ga, unicode_non_combined_ggeut);

	var han_ext_tag = '<span style="margin:0;padding:0;background:black;color:#fff;letter-spacing:0px;font-size:0.7em;">한글</span>';

	special_chars = [-1, 0x08, 0x0D, 0x1B, 0x1160];
	special_chars_string = [han_ext_tag, '⌫', '⏎', '🄴', '🄵'];

	// 쿼티를 기준으로 한 화상 배열표의 아랫글 자리 부호값
	dkey = [96,49,50,51,52,53,54,55,56,57,48,45,61,8,
	9,113,119,101,114,116,121,117,105,111,112,91,93,92,
	20,97,115,100,102,103,104,106,107,108,59,39,13,
	16,122,120,99,118,98,110,109,44,46,47,16,
	-1,-2,-3,32,-13,-12,-11];

	// 쿼티를 기준으로 한 화상 배열표의 윗글 자리 부호값
	ukey = [126,33,64,35,36,37,94,38,42,40,41,95,43,8,
	9,81,87,69,82,84,89,85,73,79,80,123,125,124,
	20,65,83,68,70,71,72,74,75,76,58,34,13,
	16,90,88,67,86,66,78,77,60,62,63,16,
	-1,-2,-3,32,-13,-12,-11];

	shift_table = [
		0x31,	/* 0x21 exclam: 1 */
		0x27,	/* 0x22 quotedbl: apostrophe */
		0x33,	/* 0x23 numbersign: 3 */
		0x34,	/* 0x24 dollar: 4 */
		0x35,	/* 0x25 percent: 5 */
		0x37,	/* 0x26 ampersand: 7 */
		0x22,	/* 0x27 apostrophe: quotatioin mark */
		0x39,	/* 0x28 parenleft */
		0x30,	/* 0x29 parenright */
		0x38,	/* 0x2A asterisk: 8 */
		0x3D,	/* 0x2B plus: equal */
		0x3C,	/* 0x2C comma: less */
		0x5F,	/* 0x2D minus: underscore */
		0x3E,	/* 0x2E period: greater */
		0x3F,	/* 0x2F slash: question */
		0x29,	/* 0x30 0: parenright */
		0x21,	/* 0x31 1: exclam */
		0x40,	/* 0x32 2: at */
		0x23,	/* 0x33 3: numbersign */
		0x24,	/* 0x34 4: dollar */
		0x25,	/* 0x35 5: percent */
		0x5E,	/* 0x36 6: asciicircum */
		0x26,	/* 0x37 7: ampersand */
		0x2A,	/* 0x38 8: asterisk */
		0x28,	/* 0x39 9: parenleft */
		0x3B,	/* 0x3A colon: semicolon */
		0x3A,	/* 0x3B semicolon: colon */
		0x2C,	/* 0x3C less: comma */
		0x2B,	/* 0x3D equal: plus */
		0x2E,	/* 0x3E greater: period */
		0x2F,	/* 0x3F question: slash */
		0x32,	/* 0x40 at: 2 */
		0x61,	/* 0x41 A: a */
		0x62,	/* 0x42 B: b */
		0x63,	/* 0x43 C: c */
		0x64,	/* 0x44 D: d */
		0x65,	/* 0x45 E: e */
		0x66,	/* 0x46 F: f */
		0x67,	/* 0x47 G: g */
		0x68,	/* 0x48 H: h */
		0x69,	/* 0x49 I: i */
		0x6A,	/* 0x4A J: j */
		0x6B,	/* 0x4B K: k */
		0x6C,	/* 0x4C L: l */
		0x6D,	/* 0x4D M: m */
		0x6E,	/* 0x4E N: n */
		0x6F,	/* 0x4F O: o */
		0x70,	/* 0x50 P: p */
		0x71,	/* 0x51 Q: q */
		0x72,	/* 0x52 R: r */
		0x73,	/* 0x53 S: s */
		0x74,	/* 0x54 T: t */
		0x75,	/* 0x55 U: u */
		0x76,	/* 0x56 V: v */
		0x77,	/* 0x57 W: w */
		0x78,	/* 0x58 X: x */
		0x79,	/* 0x59 Y: y */
		0x7A,	/* 0x5A Z: z */
		0x7B,	/* 0x5B bracketleft: braceleft */
		0x7C,	/* 0x5C backslash: bar */
		0x7D,	/* 0x5D bracketright: braceright */
		0x36,	/* 0x5E asciicircum: 6 */
		0x2D,	/* 0x5F underscore: minus */
		0x7E,	/* 0x60 quoteleft: asciitilde */
		0x41,	/* 0x61 a: A */
		0x42,	/* 0x62 b: B */
		0x43,	/* 0x63 c: C */
		0x44,	/* 0x64 d: D */
		0x45,	/* 0x65 e: E */
		0x46,	/* 0x66 f: F */
		0x47,	/* 0x67 g: G */
		0x48,	/* 0x68 h: H */
		0x49,	/* 0x69 i: I */
		0x4A,	/* 0x6A j: J */
		0x4B,	/* 0x6B k: K */
		0x4C,	/* 0x6C l: L */
		0x4D,	/* 0x6D m: M */
		0x4E,	/* 0x6E n: N */
		0x4F,	/* 0x6F o: O */
		0x50,	/* 0x70 p: P */
		0x51,	/* 0x71 q: Q */
		0x52,	/* 0x72 r: R */
		0x53,	/* 0x73 s: S */
		0x54,	/* 0x74 t: T */
		0x55,	/* 0x75 u: U */
		0x56,	/* 0x76 v: V */
		0x57,	/* 0x77 w: W */
		0x58,	/* 0x78 x: X */
		0x59,	/* 0x79 y: Y */
		0x5A,	/* 0x7A z: Z */
		0x5B,	/* 0x7B braceleft: bracketleft */
		0x5C,	/* 0x7C bar: backslash */
		0x5D,	/* 0x7D braceright: bracketright */
		0x60	/* 0x7E asciitilde: quoteleft */
	];

} // ohi_code_tables()


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

ohi_code_tables();
browser_detect();

ohiStart();
url_query();

//show_ohiStatusBar(0);	// 보람줄(상태 표시줄) 감추기
//ohiChange_enable_sign_ext(0);	// 세벌식 자판의 기호 확장 기능 끄기
//ohiChange_force_normal_typing(1); // 모아치기 자판을 이어치기 방식으로 쓰게 하기