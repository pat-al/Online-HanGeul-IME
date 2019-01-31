/*
※ keyboard_layouts.js : 널리 쓰이거나 대표성이 있거나 기능·배열에 주목할 면이 있는 자판 배열들을 모음
※ additional_layouts.js : 이제는 쓰이지 않거나 개선판이 나왔거나 연구 중인 자판 배열들을 모음

※ 첫가끝 방식으로 옛한글을 조합하는 자판은 type_name 끝에 '-y'를 붙인다.
※ 신세벌식 자판은 type_name 앞에 'Sin3-'를 붙인다.
※ 갈마들이 방식을 쓰는 공병우식 자판은 type_name 끝에 '_gm'을 붙인다.
※ 모아치기 방식으로 쓰는 세벌식 자판은 type_name 앞에 '3m-'를 붙인다.
※ 타자기 자판은 벌 수 다음에 't-'를 붙인다. ('3t-', 4t-')
※ 모아치기 자판의 보조 배열(sublayout)은 입력에 반영되지 않고 배열표에만 나타남
*/

function keyboard_layout_info() {
	var KE;	// 한글·영문 종류 (Ko:한글, En:영문)
	var type_name;	// 자판 배열 이름 (OHI에서 쓰는 로마자 이름)
	var full_name;	// 자판 배열 이름
	var layout;	// 기본 배열
	var sublayout;	// 보조 배열 (신세벌식 자판: 겹낱자 확장 배열) (세모이 자판: 배열표에만 나타냄)
	var extended_hangeul_layout;	// 한글 확장 배열 (전환 글쇠를 누르고 씀)
	var extended_sign_layout;	// 기호 확장 배열
	var hangeul_combination_table;	// 한글 낱자 조합 규칙 (이어치기)
	var hangeul_convenience_combination_table;	// 입력 편의를 높이려고 더해 쓰는 한글 낱자 조합 규칙 (이어치기)
	var ieochigi_hangeul_abbreviation_table;	// 낱자로 조합하는 이어치기 줄임말 규칙
	var moachigi_hangeul_combination_table;	// 모아치기 자판의 한글 조합 규칙 (낱자 차례를 따지지 않음)
	var moachigi_multikey_abbreviation_table;	// 글쇠로 조합하는 모아치기 줄임말 규칙 (모아치기 조합 규칙 가운데 가장 먼저 적용됨)
	var moachigi_hangeul_abbreviation_table;	// 낱자로 조합하는 모아치기 줄임말 규칙
	var old_hangeul_layout_type_name;	// 옛한글 자판으로 쓸 자판 배열 이름
	var link;	// 자판 배열의 정보가 있는 웹 주소
}

var hangeul_combination_table_default; // 요즘한글 낱자 조합표
var hangeul_combination_table_full; // 요즘한글+옛한글 낱자 조합표

input_keyboard_layout_info();
input_combination_table_info();

var keyboard_layouts = [];
keyboard_layouts[0] = new keyboard_layout_info();

keyboard_layouts.push({KE: 'En', type_name: 'QWERTY', full_name: 'QWERTY', layout: En_QWERTY_layout});
keyboard_layouts.push({KE: 'En', type_name: 'Dvorak', full_name: 'Dvorak', layout: En_Dvorak_layout});
keyboard_layouts.push({KE: 'En', type_name: 'Colemak', full_name: 'Colemak', layout: En_Colemak_layout});
keyboard_layouts.push({KE: 'En', type_name: 'Workman', full_name: 'Workman', layout: En_Workman_layout});

keyboard_layouts.push({KE: 'Ko', type_name: '2-KSX5002', full_name: '한국 표준 (KS X 5002)', layout: K2_KSX5002_layout, hangeul_combination_table: K2_hangeul_combination_table, old_hangeul_layout_type_name: '2-KSX5002-y'});
keyboard_layouts.push({KE: 'Ko', type_name: '2-KSX5002-y', full_name: '두벌식 옛한글 (KS X 5002 응용)', layout: K2_KSX5002_y_layout, link: 'https://pat.im/1179'});

keyboard_layouts.push({KE: 'Ko', type_name: '2-KPS9256', full_name: '조선 국규 (KPS 9256)', hangeul_combination_table: K2_hangeul_combination_table, layout: K2_KPS9256_layout});

keyboard_layouts.push({KE: 'Ko', type_name: '3-90', full_name: '3-90 (IBM 세벌식)', layout: K3_90_layout, old_hangeul_layout_type_name: '3-93-y', link: ''});
keyboard_layouts.push({KE: 'Ko', type_name: '3-93-y', full_name: '3-93 옛한글 (3-90 응용)', layout: K3_93y_layout, link: 'http://asadal.busan.ac.kr/~gimgs0/hangeul/kbd/'});
keyboard_layouts.push({KE: 'Ko', type_name: '3-sun2014', full_name: '안종혁 순아래 2014 (3-90 응용)', layout: K3_sun2014_layout, hangeul_combination_table: K3_sun2014_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/18'});

keyboard_layouts.push({KE: 'Ko', type_name: '3-91', full_name: '3-91 (공병우 최종 자판) (매킨토시 세벌식)', layout: K3_91_layout, link: ''});
keyboard_layouts.push({KE: 'Ko', type_name: '3-91_noshift', full_name: '3-91 조합 순아래', layout: K3_3_91_noshift_layout, hangeul_combination_table: K3_3_91_noshift_combination_table, link: 'http://text.youknowone.org/post/106848470561/3final-noshift'});

keyboard_layouts.push({KE: 'Ko', type_name: '3-P3', full_name: '3-P3', layout: K3_P3_layout, sublayout: K3_P3_sublayout, extended_sign_layout: K3_P3_extended_sign_layout, link: 'https://pat.im/1128'});

keyboard_layouts.push({KE: 'Ko', type_name: 'Sin3-M', full_name: '신세벌식 M', layout: K3_Sin3_M_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/77'});

keyboard_layouts.push({KE: 'Ko', type_name: 'Sin3-P2', full_name: '신세벌식 P2', layout: K3_Sin3_P2_layout, sublayout: K3_Sin3_P2_sublayout, hangeul_combination_table: K3_Sin3_P2_combination_table, extended_sign_layout: K3_Sin3_extended_sign_layout, old_hangeul_layout_type_name: 'Sin3-P2-y', link: 'https://pat.im/1136'});
keyboard_layouts.push({KE: 'Ko', type_name: 'Sin3-P2-y', full_name: '신세벌식 P2 옛한글 조합', layout: K3_Sin3_P2_y_layout, sublayout: K3_Sin3_P2_sublayout, extended_sign_layout: K3_Sin3_extended_sign_layout, combination_table: K3_Sin3_P2_yeshangeul_combination_table, link: 'https://pat.im/1136#2-4'});

keyboard_layouts.push({KE: 'Ko', type_name: '3m-Anmatae', full_name: '안마태 소리 글판', layout: K3_Anmatae_layout, moachigi_hangeul_combination_table: K3_Anmatae_combination_table, link: ''});

keyboard_layouts.push({KE: 'Ko', type_name: '3m-Semoe', full_name: '세모이 2018 (세벌식 모아치기 e-2018)', layout: K3_Semoe_2018_layout, sublayout: K3_Semoe_2018_sublayout, extended_sign_layout: K3_Semoe_extended_sign_layout, moachigi_hangeul_combination_table: K3_Semoe_2018_combination_table, moachigi_multikey_abbreviation_table: K3_Semoe_2018_moachigi_multikey_abbreviation_table, link: 'http://ssg.wo.tc/220526834927'});

function input_keyboard_layout_info() {
	var i,j;

	En_QWERTY_layout = [];
	i=0x21; while(i<=0x7E) En_QWERTY_layout.push(i++);

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

	En_Workman_layout = [
		0x21,	/* 0x21 exclam: exclamation mark */
		0x22,	/* 0x22 quotedbl: quotatioin mark */
		0x23,	/* 0x23 numbersign: number sign */
		0x24,	/* 0x24 dollar: dollar sign */
		0x25,	/* 0x25 percent: percent sign */
		0x26,	/* 0x26 ampersand: ampersand */
		0x27,	/* 0x27 apostrophe: apostrophe */
		0x28,	/* 0x28 parenleft: left parenthesis */
		0x29,	/* 0x29 parenright: right parenthesis */
		0x2A,	/* 0x2A asterisk: asterisk */
		0x2B,	/* 0x2B plus: plus sign */
		0x2C,	/* 0x2C comma: comma */
		0x2D,	/* 0x2D minus: minus sign */
		0x2E,	/* 0x2E period: period */
		0x2F,	/* 0x2F slash: slash */
		0x30,	/* 0x30 0: 0 */
		0x31,	/* 0x31 1: 1 */
		0x32,	/* 0x32 2: 2 */
		0x33,	/* 0x33 3: 3 */
		0x34,	/* 0x34 4: 4 */
		0x35,	/* 0x35 5: 5 */
		0x36,	/* 0x36 6: 6 */
		0x37,	/* 0x37 7: 7 */
		0x38,	/* 0x38 8: 8 */
		0x39,	/* 0x39 9: 9 */
		0x49,	/* 0x3A colon: I */
		0x69,	/* 0x3B semicolon: i */
		0x3C,	/* 0x3C less: less-than sign */
		0x3D,	/* 0x3D equal: equals sign */
		0x3E,	/* 0x3E greater: greater-than sign */
		0x3F,	/* 0x3F question: question mark */
		0x40,	/* 0x40 at: commertial at */
		0x41, /* 0x41 A: A */
		0x56, /* 0x42 B: V */
		0x4D, /* 0x43 C: M */
		0x48, /* 0x44 D: H */
		0x52, /* 0x45 E: R */
		0x54, /* 0x46 F: T */
		0x47, /* 0x47 G: G */
		0x59, /* 0x48 H: Y */
		0x55, /* 0x49 I: U */
		0x4E, /* 0x4A J: N */
		0x45, /* 0x4B K: E */
		0x4F, /* 0x4C L: O */
		0x4C, /* 0x4D M: L */
		0x4B, /* 0x4E N: K */
		0x50, /* 0x4F O: P */
		0x3A, /* 0x50 P: colon */
		0x51, /* 0x51 Q: Q */
		0x57, /* 0x52 R: W */
		0x53, /* 0x53 S: S */
		0x42, /* 0x54 T: B */
		0x46, /* 0x55 U: F */
		0x43, /* 0x56 V: C */
		0x44, /* 0x57 W: D */
		0x58, /* 0x58 X: X */
		0x4A, /* 0x59 Y: J */
		0x5A, /* 0x5A Z: Z */
		0x5B,	/* 0x5B bracketleft: left bracket */
		0x5C,	/* 0x5C backslash: backslash */
		0x5D,	/* 0x5D bracketright: right bracket */
		0x5E,	/* 0x5E asciicircum: circumflex accent */
		0x5F,	/* 0x5F underscore: underscore */
		0x60,	/* 0x60 quoteleft: grave accent */
		0x61, /* 0x61 a: a */
		0x76, /* 0x62 b: v */
		0x6D, /* 0x63 c: m */
		0x68, /* 0x64 d: h */
		0x72, /* 0x65 e: r */
		0x74, /* 0x66 f: t */
		0x67, /* 0x67 g: g */
		0x79, /* 0x68 h: y */
		0x75, /* 0x69 i: u */
		0x6E, /* 0x6A j: n */
		0x65, /* 0x6B k: e */
		0x6F, /* 0x6C l: o */
		0x6C, /* 0x6D m: l */
		0x6B, /* 0x6E n: k */
		0x70, /* 0x6F o: p */
		0x3B, /* 0x70 p: semicolon */
		0x71, /* 0x71 q: q */
		0x77, /* 0x72 r: w */
		0x73, /* 0x73 s: s */
		0x62, /* 0x74 t: b */
		0x66, /* 0x75 u: f */
		0x63, /* 0x76 v: c */
		0x64, /* 0x77 w: d */
		0x78, /* 0x78 x: x */
		0x6A, /* 0x79 y: j */
		0x7A, /* 0x7A z: z */
		0x7B,	/* 0x7B braceleft: left brace */
		0x7C,	/* 0x7C bar: vertical line(bar) */
		0x7D,	/* 0x7D braceright: right brace */
		0x7E	/* 0x7E asciitilde: tilde */
	];

	// 한국 표준 KS X 5002 두벌식
	K2_KSX5002_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002A,	/* 0x2A asterisk: asterisk */
		0x002B,	/* 0x2B plus: plus sign */
		0x002C,	/* 0x2C comma: comma */
		0x002D,	/* 0x2D minus: minus sign */
		0x002E,	/* 0x2E period: period */
		0x002F,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003A,	/* 0x3A colon: colon */
		0x003B,	/* 0x3B semicolon: semicolon */
		0x003C,	/* 0x3C less: less-than sign */
		0x003D,	/* 0x3D equal: equals sign */
		0x003E,	/* 0x3E greater: greater-than sign */
		0x003F,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1106, /* 0x41 A: choseong mieum */
		0x1172, /* 0x42 B: jungseong yu */
		0x110E, /* 0x43 C: choseong chieuch */
		0x110B, /* 0x44 D: choseong ieung */
		0x1104, /* 0x45 E: choseong ssangdieud */
		0x1105, /* 0x46 F: choseong lieul */
		0x1112, /* 0x47 G: choseong hieuh */
		0x1169, /* 0x48 H: jungseong o */
		0x1163, /* 0x49 I: jungseong ya */
		0x1165, /* 0x4A J: jungseong eo */
		0x1161, /* 0x4B K: jungseong a */
		0x1175, /* 0x4C L: jungseong i */
		0x1173, /* 0x4D M: jungseong eu */
		0x116E, /* 0x4E N: jungseong u */
		0x1164, /* 0x4F O: jungseong yae */
		0x1168, /* 0x50 P: jungseong ye */
		0x1108, /* 0x51 Q: choseong ssangbieub */
		0x1101, /* 0x52 R: choseong ssanggieug */
		0x1102, /* 0x53 S: choseong nieun */
		0x110A, /* 0x54 T: choseong ssangsieus */
		0x1167, /* 0x55 U: jungseong yeo */
		0x1111, /* 0x56 V: choseong pieup */
		0x110D, /* 0x57 W: choseong ssangjieuj */
		0x1110, /* 0x58 X: choseong tieut */
		0x116D, /* 0x59 Y: jungseong yo */
		0x110F, /* 0x5A Z: choseong kieuk */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106, /* 0x61 a: choseong mieum */
		0x1172, /* 0x62 b: jungseong yu */
		0x110E, /* 0x63 c: choseong chieuch */
		0x110B, /* 0x64 d: choseong ieung */
		0x1103, /* 0x65 e: choseong dieud */
		0x1105, /* 0x66 f: choseong lieul */
		0x1112, /* 0x67 g: choseong hieuh */
		0x1169, /* 0x68 h: jungseong o */
		0x1163, /* 0x69 i: jungseong ya */
		0x1165, /* 0x6A j: jungseong eo */
		0x1161, /* 0x6B k: jungseong a */
		0x1175, /* 0x6C l: jungseong i */
		0x1173, /* 0x6D m: jungseong eu */
		0x116E, /* 0x6E n: jungseong u */
		0x1162, /* 0x6F o: jungseong ae */
		0x1166, /* 0x70 p: jungseong e */
		0x1107, /* 0x71 q: choseong bieub */
		0x1100, /* 0x72 r: choseong gieug */
		0x1102, /* 0x73 s: choseong nieun */
		0x1109, /* 0x74 t: choseong sieus */
		0x1167, /* 0x75 u: jungseong yeo */
		0x1111, /* 0x76 v: choseong pieup */
		0x110C, /* 0x77 w: choseong jieuj */
		0x1110, /* 0x78 x: choseong tieut */
		0x116D, /* 0x79 y: jungseong yo */
		0x110F, /* 0x7A z: choseong kieuk */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 두벌식 옛한글 (KS X 5002 바탕)
	K2_KSX5002_y_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002A,	/* 0x2A asterisk: asterisk */
		0x002B,	/* 0x2B plus: plus sign */
		0x002C,	/* 0x2C comma: comma */
		0x002D,	/* 0x2D minus: minus sign */
		0x002E,	/* 0x2E period: period */
		0x002F,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003A,	/* 0x3A colon: colon */
		0x003B,	/* 0x3B semicolon: semicolon */
		0x003C,	/* 0x3C less: less-than sign */
		0x003D,	/* 0x3D equal: equals sign */
		0x003E,	/* 0x3E greater: greater-than sign */
		0x003F,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1140, /* 0x41 A: choseong yeolin-sieus */
		0x1154, /* 0x42 B: choseong ap-chieuch */
		0x114E, /* 0x43 C: choseong ap-jieuj */
		0x114C, /* 0x44 D: choseong yes-ieung */
		0x1104, /* 0x45 E: choseong ssangdieud */
		0x001B, /* 0x46 F: escape */
		0x1159, /* 0x47 G: choseong yeolin-hieuh */
		0x1169, /* 0x48 H: jungseong o */
		0x302E, /* 0x49 I: hangeul single dot tone mark */
		0x1160, /* 0x4A J: jungseong filler */
		0x119E, /* 0x4B K: jungseong araea */
		0x1175, /* 0x4C L: jungseong i */
		0x1173, /* 0x4D M: jungseong eu */
		0x1155, /* 0x4E N: choseong dwits-chieuch */
		0x1164, /* 0x4F O: jungseong yae */
		0x1168, /* 0x50 P: jungseong ye */
		0x1108, /* 0x51 Q: choseong ssangbieub */
		0x1101, /* 0x52 R: choseong ssanggieug */
		0x1102, /* 0x53 S: choseong nieun */
		0x110A, /* 0x54 T: choseong ssangsieus */
		0x302F,	/* 0x55 U: hangeul double dot tone mark */
		0x1150, /* 0x56 V: choseong dwits-jieuj */
		0x110D, /* 0x57 W: choseong ssangjieuj */
		0x113E, /* 0x58 X: choseong dwis-sieus */
		0x116D, /* 0x59 Y: jungseong yo */
		0x113C, /* 0x5A Z: choseong ap-sieus */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106, /* 0x61 a: choseong mieum */
		0x1172, /* 0x62 b: jungseong yu */
		0x110E, /* 0x63 c: choseong chieuch */
		0x110B, /* 0x64 d: choseong ieung */
		0x1103, /* 0x65 e: choseong dieud */
		0x1105, /* 0x66 f: choseong lieul */
		0x1112, /* 0x67 g: choseong hieuh */
		0x1169, /* 0x68 h: jungseong o */
		0x1163, /* 0x69 i: jungseong ya */
		0x1165, /* 0x6A j: jungseong eo */
		0x1161, /* 0x6B k: jungseong a */
		0x1175, /* 0x6C l: jungseong i */
		0x1173, /* 0x6D m: jungseong eu */
		0x116E, /* 0x6E n: jungseong u */
		0x1162, /* 0x6F o: jungseong ae */
		0x1166, /* 0x70 p: jungseong e */
		0x1107, /* 0x71 q: choseong bieub */
		0x1100, /* 0x72 r: choseong gieug */
		0x1102, /* 0x73 s: choseong nieun */
		0x1109, /* 0x74 t: choseong sieus */
		0x1167, /* 0x75 u: jungseong yeo */
		0x1111, /* 0x76 v: choseong pieup */
		0x110C, /* 0x77 w: choseong jieuj */
		0x1110, /* 0x78 x: choseong tieut */
		0x116D, /* 0x79 y: jungseong yo */
		0x110F, /* 0x7A z: choseong kieuk */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];


	K2_KPS9256_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x0027,	/* 0x27 apostrophe: apostrophe */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002A,	/* 0x2A asterisk: asterisk */
		0x002B,	/* 0x2B plus: plus sign */
		0x002C,	/* 0x2C comma: comma */
		0x002D,	/* 0x2D minus: minus sign */
		0x002E,	/* 0x2E period: period */
		0x002F,	/* 0x2F slash: slash */
		0x0030,	/* 0x30 0: 0 */
		0x0031,	/* 0x31 1: 1 */
		0x0032,	/* 0x32 2: 2 */
		0x0033,	/* 0x33 3: 3 */
		0x0034,	/* 0x34 4: 4 */
		0x0035,	/* 0x35 5: 5 */
		0x0036,	/* 0x36 6: 6 */
		0x0037,	/* 0x37 7: 7 */
		0x0038,	/* 0x38 8: 8 */
		0x0039,	/* 0x39 9: 9 */
		0x003A,	/* 0x3A colon: colon */
		0x003B,	/* 0x3B semicolon: semicolon */
		0x003C,	/* 0x3C less: less-than sign */
		0x003D,	/* 0x3D equal: equals sign */
		0x003E,	/* 0x3E greater: greater-than sign */
		0x003F,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x110D, /* 0x41 A: choseong ssangjieuj */
		0x1172, /* 0x42 B: jungseong yu */
		0x110E, /* 0x43 C: choseong chieuch */
		0x110B, /* 0x44 D: choseong ieung */
		0x1104, /* 0x45 E: choseong ssangdieud */
		0x1102, /* 0x46 F: choseong nieun */
		0x110A, /* 0x47 G: choseong ssangsieus */
		0x1169, /* 0x48 H: jungseong o */
		0x1165, /* 0x49 I: jungseong eo */
		0x1161, /* 0x4A J: jungseong a */
		0x1175, /* 0x4B K: jungseong i */
		0x1173, /* 0x4C L: jungseong eu */
		0x1163, /* 0x4D M: jungseong ya */
		0x116D, /* 0x4E N: jungseong yo */
		0x1164, /* 0x4F O: jungseong yae */
		0x1168, /* 0x50 P: jungseong ye */
		0x1108, /* 0x51 Q: choseong ssangbieub */
		0x1105, /* 0x52 R: choseong lieul */
		0x1101, /* 0x53 S: choseong ssanggieug */
		0x1112, /* 0x54 T: choseong hieuh */
		0x116E, /* 0x55 U: jungseong u */
		0x1111, /* 0x56 V: choseong pieup */
		0x1106, /* 0x57 W: choseong mieum */
		0x1110, /* 0x58 X: choseong tieut */
		0x1167, /* 0x59 Y: jungseong yeo */
		0x110F, /* 0x5A Z: choseong kieuk */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x110C, /* 0x61 a: choseong jieuj */
		0x1172, /* 0x62 b: jungseong yu */
		0x110E, /* 0x63 c: choseong chieuch */
		0x110B, /* 0x64 d: choseong ieung */
		0x1103, /* 0x65 e: choseong dieud */
		0x1102, /* 0x66 f: choseong nieun */
		0x1109, /* 0x67 g: choseong sieus */
		0x1169, /* 0x68 h: jungseong o */
		0x1165, /* 0x69 i: jungseong eo */
		0x1161, /* 0x6A j: jungseong a */
		0x1175, /* 0x6B k: jungseong i */
		0x1173, /* 0x6C l: jungseong eu */
		0x1163, /* 0x6D m: jungseong ya */
		0x116D, /* 0x6E n: jungseong yo */
		0x1162, /* 0x6F o: jungseong ae */
		0x1166, /* 0x70 p: jungseong e */
		0x1107, /* 0x71 q: choseong bieub */
		0x1105, /* 0x72 r: choseong lieul */
		0x1100, /* 0x73 s: choseong gieug */
		0x1112, /* 0x74 t: choseong hieuh */
		0x116E, /* 0x75 u: jungseong u */
		0x1111, /* 0x76 v: choseong pieup */
		0x1106, /* 0x77 w: choseong mieum */
		0x1110, /* 0x78 x: choseong tieut */
		0x1167, /* 0x79 y: jungseong yeo */
		0x110F, /* 0x7A z: choseong kieuk */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 3-90 자판
	K3_90_layout = [
		0x11BD, /* 0x21 exclam: jongseong jieuj */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x1110, /* 0x27 apostrophe: choseong tieut */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x002D, /* 0x2D minus: minus sign */
		0x002E, /* 0x2E period: period */
		0x1169, /* 0x2F slash: jungseong o */
		0x110F, /* 0x30 0: choseong kieuh */
		0x11C2, /* 0x31 1: jongseong hieuh */
		0x11BB, /* 0x32 2: jongseong ssangsieus */
		0x11B8, /* 0x33 3: jongseong bieub */
		0x116D, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong yi */
		0x116E, /* 0x39 9: jungseong u */
		0x003A, /* 0x3A colon: colon */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x0032, /* 0x3C less: 2 */
		0x003D, /* 0x3D equal: euals sign */
		0x0033, /* 0x3E greater: 3 */
		0x003F, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x11AE, /* 0x41 A: jongseong dieud */
		0x0021, /* 0x42 B: exclamation mark */
		0x11B1, /* 0x43 C: jongseong lieul-mieum */
		0x11B0, /* 0x44 D: jongseong lieul-gieug */
		0x11BF, /* 0x45 E: jongseong kieuk */
		0x11A9, /* 0x46 F: jongseong ssanggieug */
		0x002F, /* 0x47 G: slash */
		0x0027, /* 0x48 H: apostrophe */
		0x0038, /* 0x49 I: 8 */
		0x0034, /* 0x4A J: 4 */
		0x0035, /* 0x4B K: 5 */
		0x0036, /* 0x4C L: 6 */
		0x0031, /* 0x4D M: 1 */
		0x0030, /* 0x4E N: 0 */
		0x0039, /* 0x4F O: 9 */
		0x003E, /* 0x50 P: greater-than sign */
		0x11C1, /* 0x51 Q: jongseong pieup */
		0x1164, /* 0x52 R: jungseong yae */
		0x11AD, /* 0x53 S: jongseong nieun-hieuh */
		0x003B, /* 0x54 T: semicolon */
		0x0037, /* 0x55 U: 7 */
		0x11B6, /* 0x56 V: jongseong lieul-hieuh */
		0x11C0, /* 0x57 W: jongseong tieut */
		0x11B9, /* 0x58 X: jongseong bieub-sieus */
		0x003C, /* 0x59 Y: less-than sign */
		0x11BE, /* 0x5A Z: jongseong chieuch */
		0x005B, /* 0x5B bracketleft: left bracket */
		0x005C, /* 0x5C backslash: backslash */
		0x005D, /* 0x5D bracketright: right bracket */
		0x005E, /* 0x5E asciicircum: circumflex ac1ent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave ac1ent */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x116E, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x1167, /* 0x65 e: jungseong yeo */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x110E, /* 0x6F o: choseong chieuch */
		0x1111, /* 0x70 p: choseong pieup */
		0x11BA, /* 0x71 q: jongseong sieus */
		0x1162, /* 0x72 r: jungseong ae */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1165, /* 0x74 t: jungseong eo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11AF, /* 0x77 w: jongseong lieul */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x007B, /* 0x7B braceleft: left brace */
		0x007C, /* 0x7C bar: vertical line(bar) */
		0x007D, /* 0x7D braceright: right brace */
		0x007E  /* 0x7E asciitilde: tilde */
	];

	// 3-91 자판 (공병우 최종 자판)
	K3_91_layout = [
		0x11A9, /* 0x21 exclam: jongseong ssanggieug */
		0x00B7, /* 0x22 quotedbl: middle dot */
		0x11BD, /* 0x23 numbersign: jognseong jieuj */
		0x11B5, /* 0x24 dollar: jongseong lieul-pieup */
		0x11B4, /* 0x25 percent: jongseong lieul-tieut */
		0x201C, /* 0x26 ampersand: left double quotation mark */
		0x1110, /* 0x27 apostrophe: choseong tieut */
		0x0027, /* 0x28 parenleft: apostrophe */
		0x007E, /* 0x29 parenright: Tilde */
		0x201d, /* 0x2A asterisk: right double quotation mark */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x0029, /* 0x2D minus: right parenthesis */
		0x002E, /* 0x2E period: period */
		0x1169, /* 0x2F slash: jungseong o */
		0x110F, /* 0x30 0: choseong kieuk */
		0x11C2, /* 0x31 1: jongseong hieuh */
		0x11BB, /* 0x32 2: jongseong ssangsieus */
		0x11B8, /* 0x33 3: jongseong bieub */
		0x116D, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong yi */
		0x116E, /* 0x39 9: jungseong u */
		0x0034, /* 0x3A colon: 4 */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x002C, /* 0x3C less: comma */
		0x003E, /* 0x3D equal: greater-than sign */
		0x002E, /* 0x3E greater: period */
		0x0021, /* 0x3F question: exclamation mark */
		0x11B0, /* 0x40 at: jongseong lieul-gieug */
		0x11AE, /* 0x41 A: jongseong dieud */
		0x003F, /* 0x42 B: question mark */
		0x11BF, /* 0x43 C: jongseong kieuk */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11AC, /* 0x45 E: jongseong nieun-jieuj */
		0x11B1, /* 0x46 F: jongseong lieul-mieum */
		0x1164, /* 0x47 G: jungseong yae */
		0x0030, /* 0x48 H: 0 */
		0x0037, /* 0x49 I: 7 */
		0x0031, /* 0x4A J: 1 */
		0x0032, /* 0x4B K: 2 */
		0x0033, /* 0x4C L: 3 */
		0x0022, /* 0x4D M: double quotation mark */
		0x002D, /* 0x4E N: minus sign */
		0x0038, /* 0x4F O: 8 */
		0x0039, /* 0x50 P: 9 */
		0x11C1, /* 0x51 Q: jongseong pieup */
		0x11B6, /* 0x52 R: jongseong lieul-hieuh */
		0x11AD, /* 0x53 S: jongseong nieun-hieuh */
		0x11B3, /* 0x54 T: jongseong lieul-sieus */
		0x0036, /* 0x55 U: 6 */
		0x11AA, /* 0x56 V: jongseong gieug-sieus */
		0x11C0, /* 0x57 W: jongseong tieut */
		0x11B9, /* 0x58 X: jongseong bieub-sieus */
		0x0035, /* 0x59 Y: 5 */
		0x11BE, /* 0x5A Z: jongseong chieuch */
		0x0028, /* 0x5B bracketleft: left parenthesis */
		0x003A, /* 0x5C backslash: colon */
		0x003C, /* 0x5D bracketright: less-than sign */
		0x003D, /* 0x5E asciicircum: equals sign */
		0x003B, /* 0x5F underscore: semicolon */
		0x002A, /* 0x60 quoteleft: asterisk */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x116E, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x1167, /* 0x65 e: jungseong yeo */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x110E, /* 0x6F o: choseong chieuch */
		0x1111, /* 0x70 p: choseong pieup */
		0x11BA, /* 0x71 q: jongseong sieus */
		0x1162, /* 0x72 r: jungseong ae */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1165, /* 0x74 t: jungseong eo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11AF, /* 0x77 w: jongseong lieul */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x0025, /* 0x7B braceleft: percent sign */
		0x005C, /* 0x7C bar: backslash */
		0x002F, /* 0x7D braceright: slash */
		0x203B  /* 0x7E asciitilde: reference mark */
	];

	// 3-P3 자판
	K3_P3_layout = [
		0x0021,	/* 0x21 exclam */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002A,	/* 0x2A asterisk */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x002D,	/* 0x2D minus */
		0x002E,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110F,	/* 0x30 0: choseong kieuk */
		0x11BF,	/* 0x31 1: jongseong kieuk */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x11B8,	/* 0x33 3: jongseong bieub */
		0x116D,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1173,	/* 0x38 8: jungseong eu */
		0x116E,	/* 0x39 9: jungseong u */
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x0032,	/* 0x3C less: 2 */
		0x003D,	/* 0x3D equal */
		0x0033,	/* 0x3E greater: 3 */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B9,	/* 0x41 A: jongseong bieub-sieuh */
		0x003E,	/* 0x42 B: greater */
		0x11AE,	/* 0x43 C: jongseong dieud */
		0x11C2, /* 0x44 D: jongseong hieuh */
		0x11C0,	/* 0x45 E: jongseong tieut */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0x003C,	/* 0x47 G: less */
		0x0027,	/* 0x48 H: apostrophe */
		0x0038,	/* 0x49 I: 8 */
		0x0034,	/* 0x4A J: 4 */
		0x0035,	/* 0x4B K: 5 */
		0x0036,	/* 0x4C L: 6 */
		0x0031,	/* 0x4D M: 1 */
		0x0030,	/* 0x4E N: 0 */
		0x0039,	/* 0x4F O: 9 */
		0x003B,	/* 0x50 P: semicolon */
		0x11B6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0037,	/* 0x55 U: 7 */
		0x11BD,	/* 0x56 V: jongseong jieuj */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x002F,	/* 0x59 Y: slash */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x116E,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11BA,	/* 0x71 q: jongseong sieus */
		0x1165,	/* 0x72 r: jungseong eo */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x1162,	/* 0x74 t: jungseong ae */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E	/* 0x7E asciitilde */
	];

	// 3-P3 겹낱자 확장 배열
	K3_P3_sublayout = [
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
		0x11B9,	/* 0x41 A: jongseong bieub-sieuh */
		0x0000,	/* 0x42 B */
		0x11AA,	/* 0x43 C: jongseong gieug-sieus */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11B4,	/* 0x45 E: jongseong lieul-tieut */
		0x11B5,	/* 0x46 F: jongseong lieul-pieup */
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
		0x11B6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11B3,	/* 0x52 R: jongseong lieul-sieus */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11AC,	/* 0x56 V: jongseong nieun-jieuj */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0000,	/* 0x59 Y */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x61 a: */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c: */
		0x0000,	/* 0x64 d: */
		0x0000,	/* 0x65 e: */
		0x0000,	/* 0x66 f: */
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
		0x0000,	/* 0x71 q: */
		0x0000,	/* 0x72 r: */
		0x0000,	/* 0x73 s: */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v: */
		0x0000,	/* 0x77 w: */
		0x0000,	/* 0x78 x: */
		0x0000,	/* 0x79 y */
		0x0000,	/* 0x7A z: */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	// 3-93 옛한글 자판
	K3_93y_layout = [
		0x11BD,	/* 0x21 exclam: jongseong jieuj */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002A,	/* 0x2A asterisk */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x002D,	/* 0x2D minus */
		0x002E,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x110F,	/* 0x30 0: choseong kieuk */
		0x11C2,	/* 0x31 1: jongseong hieuh */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x11B8,	/* 0x33 3: jongseong bieub */
		0x116D,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x113C,	/* 0x3C less: choseong ap-sieus */
		0x003D,	/* 0x3D equal */
		0x113E,	/* 0x3E greater: choseong dwis-sieus */
		0x003F,	/* 0x3F question */
		0x11EB,	/* 0x40 at: jongseong yeolin-sieus */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x0021,	/* 0x42 B: exclam */
		0x11B1,	/* 0x43 C: jongseong lieul-mieum */
		0x11B0, /* 0x44 D: jongseong lieul-gieug */
		0x11BF,	/* 0x45 E: jongseong kieuk */
		0x11A9,	/* 0x46 F: jongseong ssanggieug */
		0x119E,	/* 0x47 G: jungseong araea */
		0x0027,	/* 0x48 H: apostrophe */
		0x1154,	/* 0x49 I: choseong ap-chieuch */
		0x114C,	/* 0x4A J: choseong yes-ieung */
		0x114E,	/* 0x4B K: choseong ap-jieuj */
		0x1150,	/* 0x4C L: choseong dwis-jieuj */
		0x1159,	/* 0x4D M: choseong yeolin-hieuh */
		0x1140,	/* 0x4E N: choseong yeolin-sieus */
		0x1155,	/* 0x4F O: choseong dwis-chieuch */
		0x0000,	/* 0x50 P: */
		0x11C1,	/* 0x51 Q: jongseong pieup */
		0x1164,	/* 0x52 R: jungseong yae */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x003B,	/* 0x54 T: semicolon */
		0x302E,	/* 0x55 U: hangeul single dot tone mark */
		0x11B6,	/* 0x56 V: jongseong lieul-hieuh */
		0x11C0,	/* 0x57 W: jongseong tieut */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x302F,	/* 0x59 Y: hangeul double dot tone mark */
		0x11BE,	/* 0x5A Z: jongseong chieuch */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x11F9,	/* 0x60 quoteleft: jongseong yeolin-hieuh */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x116E,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11BA,	/* 0x71 q: jongseong sieus */
		0x1162,	/* 0x72 r: jungseong ae */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x11F0	/* 0x7E asciitilde: jongseong yes-ieung */
	];

	// 3-91 자판을 바탕으로 한 예외 낱자 조합 방식 순아래 자판 (youknowone)
	K3_3_91_noshift_layout = [
		0x11A9, /* 0x21 exclam: jongseong ssanggieug */
		0x00B7, /* 0x22 quotedbl: middle dot */
		0x11BD, /* 0x23 numbersign: jognseong jieuj */
		0x11B5, /* 0x24 dollar: jongseong lieul-pieup */
		0x11B4, /* 0x25 percent: jongseong lieul-tieut */
		0x201C, /* 0x26 ampersand: left double quotation mark */
		0x1110, /* 0x27 apostrophe: choseong tieut */
		0x0027, /* 0x28 parenleft: apostrophe */
		0x007E, /* 0x29 parenright: Tilde */
		0x201D, /* 0x2A asterisk: right double quotation mark */
		0x002B, /* 0x2B plus */
		0x002C, /* 0x2C comma */
		0x0029, /* 0x2D minus: right parenthesis */
		0x002E, /* 0x2E period */
		0x116C, /* 0x2F slash: jungseong oe */
		0x110F, /* 0x30 0: choseong kieuk */
		0x11C2, /* 0x31 1: jongseong hieuh */
		0x11BB, /* 0x32 2: jongseong ssangsieus */
		0x11B8, /* 0x33 3: jongseong bieup */
		0x116D, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong eui */
		0x1171, /* 0x39 9: jungseong wi */
		0x0034, /* 0x3A colon: 4 */
		0x1107, /* 0x3B semicolon: choseong bieup */
		0x002C, /* 0x3C less: comma */
		0x003E, /* 0x3D equal: greater-than sign */
		0x002E, /* 0x3E greater: period */
		0x0021, /* 0x3F question: exclamation mark */
		0x11B0, /* 0x40 at:jongseong lieul-gieug */
		0x11AE, /* 0x41 A: jongseong dieud */
		0x003F, /* 0x42 B: question mark */
		0x11BF, /* 0x43 C: jongseong kieuk */
		0x11B2, /* 0x44 D: jongseong lieul-bieup */
		0x11AC, /* 0x45 E: jongseong nieun-jieuj */
		0x11B1, /* 0x46 F: jongseong lieul-mieum */
		0x1164, /* 0x47 G: jungseong yae */
		0x0030, /* 0x48 H: 0 */
		0x0037, /* 0x49 I: 7 */
		0x0031, /* 0x4A J: 1 */
		0x0032, /* 0x4B K: 2 */
		0x0033, /* 0x4C L: 3 */
		0x0022, /* 0x4D M: double quotation mark */
		0x002D, /* 0x4E N: minus sign */
		0x0038, /* 0x4F O: 8 */
		0x0039, /* 0x50 P: 9 */
		0x11C1, /* 0x51 Q: jongseong pieup */
		0x11B6, /* 0x52 R: jongseong lieul-hieuh */
		0x11AD, /* 0x53 S: jongseong nieun-hieuh */
		0x11B3, /* 0x54 T: jongseong lieul-sieus */
		0x0036, /* 0x55 U: 6 */
		0x11AA, /* 0x56 V: jongseong gieug-sieus */
		0x11C0, /* 0x57 W: jongseong tieut */
		0x11B9, /* 0x58 X: jongseong bieup-sieus */
		0x0035, /* 0x59 Y: 5 */
		0x11BE, /* 0x5A Z: jongseong chieuch */
		0x0028, /* 0x5B bracketleft: left parenthesis *///0x11FF, /* 0x5B bracketleft: jongseong nieun-nieun */
		0x003A, /* 0x5C backslash: colon */
		0x003C, /* 0x5D bracketright: less-than sign */
		0x003D, /* 0x5E asciicircum: equals sign */
		0x003B, /* 0x5F underscore: semicolon */
		0x002A, /* 0x60 quoteleft: asterisk */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x116E, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x1167, /* 0x65 e: jungseong yeo */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x110E, /* 0x6F o: choseong chieuch */
		0x1111, /* 0x70 p: choseong pieup */
		0x11BA, /* 0x71 q: jongseong sieus */
		0x1162, /* 0x72 r: jungseong ae */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1165, /* 0x74 t: jungseong eo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11AF, /* 0x77 w: jongseong lieul */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x0025, /* 0x7B braceleft: percent sign */
		0x005C, /* 0x7C bar: backslash */
		0x002F, /* 0x7D braceright: slash */
		0x203B  /* 0x7E asciitilde: reference mark */
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
		0x002A, /* 0x2A asterisk */
		0x002B, /* 0x2B plus */
		0x002C, /* 0x2C comma */
		0x002D, /* 0x2D minus */
		0x002E, /* 0x2E period */
		0x1169, /* 0x2F slash: jungseong o */
		0x110F, /* 0x30 0: choseong kieuk */
		0x11C2, /* 0x31 1: jongseong hieuh */
		0x11BB, /* 0x32 2: jongseong ssangsieus */
		0x11B8, /* 0x33 3: jongseong pieup */
		0x116D, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong yi */
		0x116E, /* 0x39 9: jungseong u */
		0x003A, /* 0x3A colon */
		0x1107, /* 0x3B semicolon: choseong pieup */
		0x0032, /* 0x3C less: 2 */
		0x003D, /* 0x3D equal */
		0x0033, /* 0x3E greater: 3 */
		0x003F, /* 0x3F question */
		0x0040, /* 0x40 at */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x0000,	/* 0x42 B: */
		0x0000, /* 0x43 C: jongseong lieul-mieum */
		0x0000, /* 0x44 D: jongseong lieul-gieug */
		0x0000, /* 0x45 E: jongseong kieuk */
		0x0000, /* 0x46 F: jongseong ssanggieug */
		0x002F,	/* 0x47 G: slash */
		0x0027,	/* 0x48 H: apostrophe */
		0x0038,	/* 0x49 I: 8 */
		0x0034,	/* 0x4A J: 4 */
		0x0035,	/* 0x4B K: 5 */
		0x0036,	/* 0x4C L: 6 */
		0x0031,	/* 0x4D M: 1 */
		0x0030,	/* 0x4E N: 0 */
		0x0039,	/* 0x4F O: 9 */
		0x003E,	/* 0x50 P: greater-than sign */
		0x11BD,	/* 0x51 Q: jongseong jieuj */
		0x1164,	/* 0x52 R: jungseong yae */
		0x11C0,	/* 0x53 S: jongseong tieut */
		0x003B,	/* 0x54 T: semicolon */
		0x0037,	/* 0x55 U: 7 */
		0x0000, /* 0x56 V: */
		0x11BE,	/* 0x57 W: jongseong chieuch */
		0x11BF,	/* 0x58 X: jongseong kieuk */
		0x003C,	/* 0x59 Y: less-than sign */
		0x11C1,	/* 0x5A Z: jongseong pieup */
		0x005B, /* 0x5B bracketleft */
		0x005C, /* 0x5C backslash */
		0x005D, /* 0x5D bracketright */
		0x005E, /* 0x5E asciicircum */
		0x005F, /* 0x5F underscore */
		0x0060, /* 0x60 quoteleft */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x116E, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x1167, /* 0x65 e: jungseong yeo */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x110E, /* 0x6F o: choseong chieuch */
		0x1111, /* 0x70 p: choseong pieup */
		0x11BA, /* 0x71 q: jongseong sieus */
		0x1162, /* 0x72 r: jungseong ae */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1165, /* 0x74 t: jungseong eo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11AF, /* 0x77 w: jongseong lieul */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x007B, /* 0x7B braceleft */
		0x007C, /* 0x7C bar */
		0x007D, /* 0x7D braceright */
		0x007E  /* 0x7E asciitilde */
	];

	// 신세벌식 M 자판 (up↔down)
	K3_Sin3_M_layout = [
		0x0021,	/* 0x21 exclam */
		0x002F,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002A,	/* 0x2A asterisk */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x002D,	/* 0x2D minus */
		0x002E,	/* 0x2E period */
		0x110F,	/* 0x2F slash: choseong kieuk */
		0x0030,	/* 0x30 0 */
		0x0031,	/* 0x31 1 */
		0x0032,	/* 0x32 2 */
		0x0033,	/* 0x33 3 */
		0x0034,	/* 0x34 4 */
		0x0035,	/* 0x35 5 */
		0x0036,	/* 0x36 6 */
		0x0037,	/* 0x37 7 */
		0x0038,	/* 0x38 8 */
		0x0039,	/* 0x39 9 */
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11BC,	/* 0x41 A: jongseong ieung */
		0x11BE,	/* 0x42 B: jongseong chieuch */
		0x11C2,	/* 0x43 C: jongseong hieuh */
		0x11BB,	/* 0x44 D: jongseong ssangsieus */
		0x11B8,	/* 0x45 E: jongseong bieub */
		0x11C0,	/* 0x46 F: jongseong tieut */
		0x11AE,	/* 0x47 G: jongseong dieud */
		0x300A,	/* 0x48 H: left double angle bracket 《 */
		0x203B,	/* 0x49 I: reference mark */
		0x300B,	/* 0x4A J: right double angle bracket 》 */
		0x00B7,	/* 0x4B K: middle dot */
		0x003B,	/* 0x4C L: semicolon */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x11BA,	/* 0x51 Q: jongseong sieus */
		0x11BD,	/* 0x52 R: jongseong jieuj */
		0x11AB,	/* 0x53 S: jongseong nieun */
		0x11BF,	/* 0x54 T: jongseong kieuk */
		0x201D,	/* 0x55 U: right double quotation mark ” */
		0x11C1,	/* 0x56 V: jongseong pieup */
		0x11AF,	/* 0x57 W: jongseong lieul */
		0x11A8,	/* 0x58 X: jongseong gieug */
		0x201C,	/* 0x59 Y: left double quotation mark “ */
		0x11B7,	/* 0x5A Z: jongseong mieum */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x1172,	/* 0x61 a: jungseong yu */
		0x116E,	/* 0x62 b: jungseong u */
		0x1166,	/* 0x63 c: jungseong e */
		0x1175,	/* 0x64 d: jungseong i */
		0x1167,	/* 0x65 e: jungseong yeo */
		0x1161,	/* 0x66 f: jungseong a */
		0x1173,	/* 0x67 g: jungseong eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x1164,	/* 0x71 q: jungseong yae */
		0x1162,	/* 0x72 r: jungseong ae */
		0x1174,	/* 0x73 s: jungseong eui */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1103,	/* 0x75 u: choseong dieud */
		0x1169,	/* 0x76 v: jungseong o */
		0x1163,	/* 0x77 w: jungseong ya */
		0x116D,	/* 0x78 x: jungseong yo */
		0x1105,	/* 0x79 y: choseong lieul */
		0x1168,	/* 0x7A z: jungseong ye */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E	/* 0x7E asciitilde */
	];
	
	// 신세벌식 P2 자판
	K3_Sin3_P2_layout = [
		0x0021,	/* 0x21 exclam */
		0x002F,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 numbersign */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x002A,	/* 0x2A asterisk */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x002D,	/* 0x2D minus */
		0x002E,	/* 0x2E period */
		0x110F,	/* 0x2F slash: choseong kieuk */
		0x0030,	/* 0x30 0 */
		0x0031,	/* 0x31 1 */
		0x0032,	/* 0x32 2 */
		0x0033,	/* 0x33 3 */
		0x0034,	/* 0x34 4 */
		0x0035,	/* 0x35 5 */
		0x0036,	/* 0x36 6 */
		0x0037,	/* 0x37 7 */
		0x0038,	/* 0x38 8 */
		0x0039,	/* 0x39 9 */
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x1172,	/* 0x41 A: jungseong yu */
		0x116E,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1162,	/* 0x45 E: jungseong ae */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x25A1,	/* 0x48 H: white squre */
		0x0000,	/* 0x49 I: jungseong eu */
		0x0027,	/* 0x4A J: apostrophe */
		0x0022,	/* 0x4B K: quotatioin mark */
		0x00B7,	/* 0x4C L: middle dot */
		0x2026,	/* 0x4D M: horizontal epllipsis */
		0x2015,	/* 0x4E N: horizontal bar */
		0x0000,	/* 0x4F O: jungseong u */
		0x003B,	/* 0x50 P: semicolon */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1165,	/* 0x52 R: jungseong eo */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1167,	/* 0x54 T: jungseong yeo */
		0x25CB,	/* 0x55 U: white circle */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116D,	/* 0x58 X: jungseong yo */
		0x00D7,	/* 0x59 Y: multiplication */
		0x119E,	/* 0x5A Z: jungseong araea */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BE,	/* 0x62 b: jongseong chieuch */
		0x11A8,	/* 0x63 c: jongseong gieug */
		0x11C2,	/* 0x64 d: jongseong hieuh */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11C1,	/* 0x66 f: jongseong pieup */
		0x11AE,	/* 0x67 g: jongseong dieud */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11BA,	/* 0x71 q: jongseong sieus */
		0x11C0,	/* 0x72 r: jongseong tieut */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x11BF,	/* 0x74 t: jongseong kieuk */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11BD,	/* 0x76 v: jongseong jieuj */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11BB,	/* 0x78 x: jongseong ssangsieus */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E	/* 0x7E asciitilde */
	];

	// 신세벌식 P2 겹낱자 확장 배열
	K3_Sin3_P2_sublayout = [
		0x0000,	/* 0x21 exclam: */
		0x0000,	/* 0x22 quotedbl: */
		0x0000,	/* 0x23 numbersign: */
		0x0000,	/* 0x24 dollar: */
		0x0000,	/* 0x25 percent: */
		0x0000,	/* 0x26 ampersand: */
		0x0000,	/* 0x27 apostrophe: */
		0x0000,	/* 0x28 parenleft: */
		0x0000,	/* 0x29 parenright: */
		0x0000,	/* 0x2A asterisk: */
		0x0000,	/* 0x2B plus: */
		0x0000,	/* 0x2C comma: */
		0x0000,	/* 0x2D minus: */
		0x0000,	/* 0x2E period: */
		0x1169,	/* 0x2F slash: jungseong o */
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
		0x0000,	/* 0x3A colon: */
		0x0000,	/* 0x3B semicolon: */
		0x0000,	/* 0x3C less: */
		0x0000,	/* 0x3D equal: */
		0x0000,	/* 0x3E greater: */
		0x0000,	/* 0x3F question: */
		0x0000,	/* 0x40 at: */
		0x11AA,	/* 0x41 A: jongseong gieug-sieus */
		0x0000,	/* 0x42 B */
		0x11A9,	/* 0x43 C: jongseong ssanggieug */
		0x11B6,	/* 0x44 D: jongseong lieul-hieuh */
		0x11B2,	/* 0x45 E: jongseong lieul-bieub */
		0x11B5,	/* 0x46 F: jongseong lieul-pieup */
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
		0x11B3,	/* 0x51 Q: jongseong lieul-sieus */
		0x11B4,	/* 0x52 R: jongseong lieul-tieut */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x0000,	/* 0x54 T */
		0x0000,	/* 0x55 U */
		0x11AC,	/* 0x56 V: jongseong nieun-jieuj */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x0000,	/* 0x59 Y */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x0000,	/* 0x5B bracketleft: */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x0000,	/* 0x5E asciicircum: */
		0x0000,	/* 0x5F underscore: */
		0x0000,	/* 0x60 quoteleft: */
		0x11AA,	/* 0x61 a: jongseong gieug-sieus */
		0x0000,	/* 0x62 b */
		0x11A9,	/* 0x63 c: jongseong ssanggieug */
		0x11B6,	/* 0x64 d: jongseong lieul-hieuh */
		0x11B2,	/* 0x65 e: jongseong lieul-bieub */
		0x11B5,	/* 0x66 f: jongseong lieul-pieup */
		0x0000,	/* 0x67 g */
		0x0000,	/* 0x68 h */
		0x1173,	/* 0x69 i: jungseong eu */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x116E,	/* 0x6F o:jungseong u */
		0x119E,	/* 0x70 p: jungseong araea */
		0x11B3,	/* 0x71 q: jongseong lieul-sieus */
		0x11B4,	/* 0x72 r: jongseong lieul-tieut */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x11AC,	/* 0x76 v: jongseong nieun-jieuj */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11B9,	/* 0x78 x: jongseong bieub-sieus */
		0x0000,	/* 0x79 y */
		0x11B1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000	/* 0x7E asciitilde: */
	];

	// 신세벌식 P2 옛한글
	K3_Sin3_P2_y_layout = K3_Sin3_P2_layout.slice(0);
	K3_Sin3_P2_y_layout[52]=0x302E; /* 0x55 U: hangeul single dot tone mark */
	K3_Sin3_P2_y_layout[56]=0x302F; /* 0x59 Y: hangeul double dot tone mark */

	// 3-P3 자판의 기호 확장 배열
	K3_P3_extended_sign_layout = [
		[[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
		[[0x2019,0x201D,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
		[[0x326B,0x3279,0x0000], [0x221E,0x221D,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
		[[0x3001,0x0000,0x0000], [0x2461,0x246B,0x3252,0x325C,0x32B7]], /* 0x2C comma */
		[[0x2642,0x2600,0x2601], [0x00B1,0x002D,0x0000]], /* 0x2D minus */
		[[0x3002,0x0000,0x0000], [0x2462,0x246C,0x3253,0x325D,0x32B8]], /* 0x2E period */
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
		[[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x3A colon */
		[[0x3265,0x3273,0x0000], [0x2234,0x2235,0x2261]], /* 0x3B semicolon */
		[[0x2082,0x0000,0x0000], [0x00B2,0x33A1,0x0000]], /* 0x3C less */
		[[0x2640,0x2602,0x2603], [0x2260,0x2245,0x0000]], /* 0x3D equal */
		[[0x2083,0x0000,0x0000], [0x00B3,0x33A5,0x0000]], /* 0x3E greater */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3F question */
		[[0x2922,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x40 at */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x41 A */
		[[0x2267,0x226B,0x0000], [0xFE40,0xFE3E,0x0000]], /* 0x42 B */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x43 C */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x44 D */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x45 E */
		[[0x0000,0x0000,0x0000], [0xFE41,0xFE43,0x0000]], /* 0x46 F */
		[[0x2266,0x226A,0x0000], [0xFE42,0xFE44,0x0000]], /* 0x47 G */
		[[0x2018,0x201C,0x0000], [0x0000,0x0000,0x0000]], /* 0x48 H */
		[[0x2088,0x0000,0x0000], [0x2078,0x0000,0x0000]], /* 0x49 I */
		[[0x2084,0x0000,0x0000], [0x2074,0x0000,0x0000]], /* 0x4A J */
		[[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x4B K */
		[[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x4C L */
		[[0x2081,0x0000,0x0000], [0x00B9,0x0000,0x0000]], /* 0x4D M */
		[[0x2080,0x0000,0x0000], [0x2070,0x0000,0x0000]], /* 0x4E N */
		[[0x2089,0x0000,0x0000], [0x2079,0x0000,0x0000]], /* 0x4F O */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x50 P */
		[[0x2199,0x21B2,0x2B10], [0x2196,0x21B0,0x2B11]], /* 0x51 Q */
		[[0x0000,0x0000,0x0000], [0xFE3B,0xFE39,0x0000]], /* 0x52 R */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x53 S */
		[[0x0000,0x0000,0x0000], [0xFE3C,0xFE3A,0x0000]], /* 0x54 T */
		[[0x2087,0x0000,0x0000], [0x2077,0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
		[[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x59 Y */
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
		[[0x3261,0x326F,0x0000], [0x0000,0x0000,0x0000]], /* 0x68 h */
		[[0x3264,0x3272,0x0000], [0x2467,0x2471,0x3258,0x32B3,0x32BD]], /* 0x69 i */
		[[0x3267,0x3275,0x0000], [0x2463,0x246D,0x3254,0x325E,0x32B9]], /* 0x6A j */
		[[0x3260,0x326E,0x0000], [0x2464,0x246E,0x3255,0x325F,0x32BA]], /* 0x6B k */
		[[0x3268,0x3276,0x0000], [0x2465,0x246F,0x3256,0x32B1,0x32BB]], /* 0x6C l */
		[[0x326D,0x327B,0x0000], [0x2460,0x246A,0x3251,0x325B,0x32B6]], /* 0x6D m */
		[[0x3266,0x3274,0x0000], [0x2469,0x2473,0x325A,0x32B5,0x32BF]], /* 0x6E n */
		[[0x3269,0x3277,0x0000], [0x2468,0x2472,0x3259,0x32B4,0x32BE]], /* 0x6F o */
		[[0x326C,0x327A,0x0000], [0x0000,0x0000,0x0000]], /* 0x70 p */
		[[0x2190,0x261C,0x21E6], [0x2193,0x261F,0x21E9]], /* 0x71 q */
		[[0x00B4,0x0000,0x0000], [0x3010,0x3014,0x0000]], /* 0x72 r */
		[[0x302F,0x0000,0x0000], [0x25A1,0x25A3,0x25A0]], /* 0x73 s */
		[[0x3003,0x0000,0x0000], [0x3011,0x3015,0x0000]], /* 0x74 t */
		[[0x3262,0x3270,0x0000], [0x2466,0x2470,0x3257,0x32B2,0x32BC]], /* 0x75 u */
		[[0x02D0,0x0000,0x0000], [0x3008,0x300A,0x0000]], /* 0x76 v */
		[[0x2192,0x261E,0x21E8], [0x2191,0x261D,0x21E7]], /* 0x77 w */
		[[0x2032,0x0000,0x0000], [0x2606,0x2605,0x0000]], /* 0x78 x */
		[[0x3263,0x3271,0x0000], [0x00F7,0x0000,0x0000]], /* 0x79 y */
		[[0x2033,0x0000,0x0000], [0x2661,0x2665,0x0000]], /* 0x7A z */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7B braceleft */
		[[0x00A6,0x2506,0x0000], [0x0000,0x0000,0x0000]], /* 0x7C bar */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7D braceright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]]  /* 0x7E asciitilde */
];

	K3_Anmatae_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotation mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x002E, /* 0x27 apostrophe: period */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x11B7, /* 0x2C comma: jongseong mieum */
		0x002D, /* 0x2D minus: minus sign */
		0x11AF, /* 0x2E period: jongseong lieul */
		0x11C2, /* 0x2F slash: jongseong hieuh */
		0x0030, /* 0x30 0: 0 */
		0x0031, /* 0x31 1: 1 */
		0x0032, /* 0x32 2: 2 */
		0x0033, /* 0x33 3: 3 */
		0x0034, /* 0x34 4: 4 */
		0x0035, /* 0x35 5: 5 */
		0x0036, /* 0x36 6: 6 */
		0x0037, /* 0x37 7: 7 */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x003A, /* 0x3A colon: colon */
		0x116E, /* 0x3B semicolon: jungseong u */
		0x003C, /* 0x3C less: less-than sign */
		0x003D, /* 0x3D equal: equals sign */
		0x003E, /* 0x3E greater: greater-than sign */
		0x11F9, /* 0x3F question: jongseong yeorinhieuh */
		0x0040, /* 0x40 at: commercial at */
		0x1107, /* 0x41 A: choseong bieub */
		0x11f0, /* 0x42 B: jongseong yesieung */
		0x11B8, /* 0x43 C: jongseong bieub */
		0x1103, /* 0x44 D: choseong dieud */
		0x1102, /* 0x45 E: choseong nieun */
		0x1100, /* 0x46 F: choseong gieug */
		0x114C, /* 0x47 G: choseong yesieung */
		0x1165, /* 0x48 H: jungseong eo */
		0x002F, /* 0x49 I: slash */
		0x119E, /* 0x4A J: jungseong araea */
		0x1175, /* 0x4B K: jungseong i */
		0x1169, /* 0x4C L: jungseong o */
		0x11AB, /* 0x4D M: jongseong nienu */
		0x11EB, /* 0x4E N: jongseung pansieus */
		0x005B, /* 0x4F O: left bracket */
		0x005D, /* 0x50 P: right bracket */
		0x1106, /* 0x51 Q: choseong mieum */
		0x1105, /* 0x52 R: choseong lieul */
		0x110C, /* 0x53 S: choseong jieuj */
		0x1159, /* 0x54 T: choseong yeorinhieuh */
		0x0027, /* 0x55 U: apostrophe */
		0x11A8, /* 0x56 V: jongseong gieug */
		0x1140, /* 0x57 W: choseong pansieus */
		0x11AE, /* 0x58 X: jongseong dieud */
		0x003B, /* 0x59 Y: semicolon */
		0x11BD, /* 0x5A Z: jongseong jieuj */
		0x002C, /* 0x5B bracketleft: comma */
		0x005C, /* 0x5C backslash: backslash */
		0x003F, /* 0x5D bracketright: qustion mark */
		0x005E, /* 0x5E asciicircum: circumflex accent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x1107, /* 0x61 a: choseong bieub */
		0x11BC, /* 0x62 b: jongseong ieung */
		0x11B8, /* 0x63 c: jongseong bieub */
		0x1103, /* 0x64 d: choseong dieud */
		0x1102, /* 0x65 e: choseong nieun */
		0x1100, /* 0x66 f: choseong gieug */
		0x110B, /* 0x67 g: choseong ieung */
		0x1165, /* 0x68 h: jungseong eo */
		0x1173, /* 0x69 i: jungseong eu */
		0x1161, /* 0x6A j: jungseong a */
		0x1175, /* 0x6B k: jungseong i */
		0x1169, /* 0x6C l: jungseong o */
		0x11AB, /* 0x6D m: jongseong nieun */
		0x11BA, /* 0x6E n: jongseong sieus */
		0x116D, /* 0x6F o: jungseong yo */
		0x1172, /* 0x70 p: jungseong yu */
		0x1106, /* 0x71 q: choseong mieum */
		0x1105, /* 0x72 r: choseong lieul */
		0x110C, /* 0x73 s: choseong jieuj */
		0x1112, /* 0x74 t: choseong hieuh */
		0x1163, /* 0x75 u: jungseong ya */
		0x11A8, /* 0x76 v: jongseong kiyok */
		0x1109, /* 0x77 w: choseong sieus */
		0x11AE, /* 0x78 x: jongseong dieud */
		0x1167, /* 0x79 y: jungseong yeo */
		0x11BD, /* 0x7A z: jongseong jieuj */
		0x007B, /* 0x7B braceleft: left brace */
		0x007C, /* 0x7C bar: vertical bar */
		0x007D, /* 0x7D braceright: right brace */
		0x007E  /* 0x7E asciitilde: tilde */
	];

	K3_Semoe_2018_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x0027, /* 0x27 apostrophe: apostrophe */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x002D, /* 0x2D minus: minus sign */
		0x1169, /* 0x2E period: jungseong o */
		0x002F, /* 0x2F slash: slash */
		0x0030, /* 0x30 0: 0 */
		0x0031, /* 0x31 1: 1 */
		0x0032, /* 0x32 2: 2 */
		0x0033, /* 0x33 3: 3 */
		0x0034, /* 0x34 4: 4 */
		0x0035, /* 0x35 5: 5 */
		0x0036, /* 0x36 6: 6 */
		0x0037, /* 0x37 7: 7 */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x003A, /* 0x3A colon: colon */
		0x11BB, /* 0x3B semicolon: jongseong ssangsieus */
		0x003C, /* 0x3C less: less-than sign */
		0x003D, /* 0x3D equal: euals sign */
		0x003E, /* 0x3E greater: greater-than sign */
		0x003F, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x2190, /* 0x41 A: ← leftwards arrow */
		0x00B0, /* 0x42 B: ° */
		0x300C, /* 0x43 C: 「 left corner bracket */
		0x2192, /* 0x44 D: → rightwards arrow */
		0x2661, /* 0x45 E: ♡ white heart suit */
		0x25B3, /* 0x46 F: △ white up-pointing triangle */
		0x25BD, /* 0x47 G: ▽ white down-pointing triangle */
		0x25A1, /* 0x48 H: □ white square */
		0x3008, /* 0x49 I: 〈 */
		0x0000, /* 0x4A J: */
		0x203B, /* 0x4B K: ※ reference mark */
		0x00B7, /* 0x4C L: · */
		0x2026, /* 0x4D M: … */
		0x2015, /* 0x4E N: ― */
		0x3009, /* 0x4F O: 〉 */
		0x003B, /* 0x50 P: semicolon */
		0x2194, /* 0x51 Q: ↔ left right arrow */
		0x2606, /* 0x52 R: ☆ white star */ 
		0x2193, /* 0x53 S: ↓ */
		0x25CE, /* 0x54 T: ◎ bullseye */
		0x25CB, /* 0x55 U: ○ */
		0x300D, /* 0x56 V: 」 right corner bracket */
		0x2191, /* 0x57 W: ↑ */
		0x300F, /* 0x58 X: 』 */
		0x00D7, /* 0x59 Y: × */
		0x300E, /* 0x5A Z: 『 */
		0x005B, /* 0x5B bracketleft: left bracket */
		0x005C, /* 0x5C backslash: backslash */
		0x005D, /* 0x5D bracketright: right bracket */
		0x005E, /* 0x5E asciicircum: circumflex accent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x116E, /* 0x62 b: jungseong u */
		0x1166, /* 0x63 c: jungseong e */
		0x1175, /* 0x64 d: jungseong i */
		0x11AF, /* 0x65 e: jongseong lieul */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1112, /* 0x68 h: choseong hieuh */
		0x1103, /* 0x69 i: choseong dieud */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1105, /* 0x6D m: choseong lieul */
		0x1109, /* 0x6E n: choseong sieus */
		0x1107, /* 0x6F o: choseong pieup */
		0x002E, /* 0x70 p: period u */
		0x11BA, /* 0x71 q: jongseong sieus */
		0x1165, /* 0x72 r: jungseong eo */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1167, /* 0x74 t: jungseong yeo */
		0x1102, /* 0x75 u: choseong nieun */
		0x1169, /* 0x76 v: jungseong o */
		0x11B8, /* 0x77 w: jongseong pieup */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1106, /* 0x79 y: choseong mieum */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x007B, /* 0x7B braceleft: left brace */
		0x007C, /* 0x7C bar: vertical line(bar) */
		0x007D, /* 0x7D braceright: right brace */
		0x007E  /* 0x7E asciitilde: tilde */
	];

	K3_Semoe_2018_sublayout = [
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
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000, /* 0x44 D */
		0x0000,	/* 0x45 E */
		0x0000,	/* 0x46 F */
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
		0x0000,	/* 0x51 Q */
		0x0000,	/* 0x52 R */
		0x0000,	/* 0x53 S */
		0x0000,	/* 0x54 T */
		0x0000,	/* 0x55 U */
		0x0000,	/* 0x56 V */
		0x0000,	/* 0x57 W */
		0x0000,	/* 0x58 X */
		0x0000,	/* 0x59 Y */
		0x0000,	/* 0x5A Z */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x11b6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11bd,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
		0x1163,	/* 0x67 g jungseong ya */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11be,	/* 0x71 q: jongseong chieuch */
		0x116f,	/* 0x72 r: jongseong wo */
		0x11c2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116d,	/* 0x76 v: jungseong yo */
		0x11c1,	/* 0x77 w: jongseong pieup */
		0x11bf,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11ae,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_Semoe_2018_sublayout = [
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
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000, /* 0x44 D */
		0x0000,	/* 0x45 E */
		0x0000,	/* 0x46 F */
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
		0x0000,	/* 0x51 Q */
		0x0000,	/* 0x52 R */
		0x0000,	/* 0x53 S */
		0x0000,	/* 0x54 T */
		0x0000,	/* 0x55 U */
		0x0000,	/* 0x56 V */
		0x0000,	/* 0x57 W */
		0x0000,	/* 0x58 X */
		0x0000,	/* 0x59 Y */
		0x0000,	/* 0x5A Z */
		0x0000,	/* 0x3A colon */
		0x0000,	/* 0x3B semicolon */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x11b6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11bd,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
		0x1163,	/* 0x67 g jungseong ya */
		0x0000,	/* 0x68 h */
		0x0000,	/* 0x69 i */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x0000,	/* 0x6D m */
		0x0000,	/* 0x6E n */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x11be,	/* 0x71 q: jongseong chieuch */
		0x116f,	/* 0x72 r: jongseong wo */
		0x11c2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116d,	/* 0x76 v: jungseong yo */
		0x11c1,	/* 0x77 w: jongseong pieup */
		0x11bf,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11ae,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	// 신세벌식 자판의 기호 확장 배열
	K3_Sin3_extended_sign_layout = [
		[0x2160,0x2081,0x00B9], /* 0x21 exclam: roman numeral one Ⅰ, subscript one ₁, superscript one ¹ */
		[0x0000,0x0000,0x0000], /* 0x22 quotedbl: */
		[0x2162,0x2083,0x00B3], /* 0x23 numbersign: roman numeral three Ⅲ, subscript three ₃, superscript three ³ */
		[0x2163,0x2084,0x2074], /* 0x24 dollar: roman numeral four Ⅳ, subscript four ₄, superscript four ⁴ */
		[0x2164,0x2085,0x2075], /* 0x25 percent: roman numeral five Ⅴ, subscript five ⁵, superscript five ⁵ */
		[0x2166,0x2087,0x2077], /* 0x26 ampersand: roman numeral seven Ⅶ, subscript seven ₇, superscript seven ⁷ */
		[0x326B,0x266A,0x266C], /* 0x27 apostrophe: circled hangeul tieut ㉫, eighth note ♪, beamed sixteenth notes ♬ */
		[0x2168,0x2089,0x2079], /* 0x28 parenleft: roman numeral nine Ⅸ, subscript nine ₉, superscript nine ⁹ */
		[0x2169,0x2080,0x2070], /* 0x29 parenright: roman numeral ten Ⅹ, subscript zero ₀, superscript zero ⁰ */
		[0x2167,0x2088,0x2078], /* 0x2A asterisk: roman numeral eight Ⅷ, subscript eight ₈, superscript eight ⁸ */
		[0x216B,0x208A,0x207A], /* 0x2B plus: roman numeral twelve Ⅻ,, subscript plus ₊ superscript plus ⁺ */
		[0x3001,0x3008,0x300A], /* 0x2C comma: ideographic comma 、, left angle bracket 〈, left double angle bracket 《 */
		[0x00B1,0x2642,0x2602], /* 0x2D minus: plus minus sign ±, male sign ♂, umbrella ☂ */
		[0x3002,0x3009,0x300B], /* 0x2E period: ideographic full stop 。, right angle bracket 〉, right double angle bracket 》 */
		[0x326A,0x203B,0x2620], /* 0x2F slash: circled hangeul kieuk ㉪, reference mark ※, skull and crossbone ☠ */
		[0x00A7,0x2469,0x2473], /* 0x30 0: section sign §, circled digit ten ⑩, circled digit nineteen ⑲ */
		[0x00B5,0x2460,0x246A], /* 0x31 1: micro sign μ, circled digit one ①, circled digit eleven ⑪ */
		[0x33A1,0x2461,0x246B], /* 0x32 2: square m squared ㎡, circled digit two ②, circled digit twelve ⑫ */
		[0x33A5,0x2462,0x246C], /* 0x33 3: square m cubed ㎥, circled digit three ③, circled digit thirteen ⑬ */
		[0xFFE6,0x2463,0x246D], /* 0x34 4: fullwidth won sign ￦, circled digit four ④, circled digit fourteen ⑭ */
		[0xFFE5,0x2464,0x246E], /* 0x35 5: fullwidth yen sign ￥, circled digit five ⑤, circled digit fifteen ⑮ */
		[0x2126,0x2465,0x246F], /* 0x36 6: ohm sign Ω, circled digit six ⑥, circled digit sixteen ⑯ */
		[0xFFE1,0x2466,0x2470], /* 0x37 7: fullwidth pound sign ￡, circled digit seven ⑦, circled digit seventeen ⑰ */
		[0x20AC,0x2467,0x2471], /* 0x38 8: euro sign €, circled digit eight ⑧, circled digit eighteen ⑱ */
		[0xFFE0,0x2468,0x2472], /* 0x39 9: fullwidth cent sign ￠, circled digit nine ⑨, circled digit nineteen ⑲ */
		[0x00B4,0x21B3,0x2B0E], /* 0x3A colon: acute accent ´, downwards arrow with tip rightwards ↳, rightward arrow with tip downwards ⬎ */
		[0x3265,0x2198,0x21D8], /* 0x3B semicolon: circled hangeul bieub ㉥, south-east arrow ↘, south east double arrow ⇘ */
		[0x2264,0x2282,0x2284], /* 0x3C less: less-than or equal to ≤, subset of ⊂, not subset of ⊄ */
		[0x2260,0x2640,0x2603], /* 0x3D equal: not equal to ≠, female sign ♀, snowman ☃ */
		[0x2265,0x2283,0x2285], /* 0x3E greater: greater-than or equal to ≥, superset of ⊃, not a superset of ⊅ */
		[0x221A,0x2937,0x2936], /* 0x3F question: squre root √, arrow pointing downwards then curving rightwards ⤷, arrow pointing downwards then curving leftwards ⤶ */
		[0x2161,0x2082,0x00B2], /* 0x40 at: roman numeral two Ⅱ, subscript two ₂, superscript two ² */
		[0x03B1,0x2200,0x212B], /* 0x41 A: greek small letter alpha α, for all ∀, Angstrom sign Å */
		[0x03B2,0x2261,0x2245], /* 0x42 B: greek small letter beta β, identical to (equivalence relation) ≡, approximately equal to (isomorphism, congruence) ≅ */
		[0x03C7,0x219B,0x2297], /* 0x43 C: greek small letter chi χ, rightwards arrow with stroke ↛, circled times (outer product, tensor product) ⊗ */
		[0x03B4,0x2206,0x2207], /* 0x44 D: greek small letter delta δ, increment ∆, nabla ∇ */
		[0x03B5,0x2203,0x2204], /* 0x45 E: greek small letter epsilon ε, there exists ∃, There does not exist ∄ */
		[0x03C6,0x03D5,0x2205], /* 0x46 F: greek small letter phi φ, greek phi symbol ϕ, empty set ∅ */
		[0x03B3,0x0393,0x222B], /* 0x47 G: greek small letter gamma γ, greek capital letter Γ, integral ∫ */
		[0x03B7,0x2610,0x2611], /* 0x48 H: greek small letter eta η, ballot box ☐, ballot with check ☑ */
		[0x03B9,0x2229,0x221E], /* 0x49 I: greek small letter iota ι, intersection ∩, infinity ∞ */
		[0x25CC,0x2228,0x2235], /* 0x4A J: dotted circle ◌, logical or ∨, because ∵ */
		[0x03BA,0x2227,0x2234], /* 0x4B K: greek small letter kappa κ, logical and ∧, therefore ∴ */
		[0x03BB,0x21B2,0x2B10], /* 0x4C L: greek small letter lamda λ, downwards arrow with tip leftwards ↲, leftwards arrow with tip downwards ⬐ */
		[0x03BC,0x2287,0x228B], /* 0x4D M: greek small letter mu μ, superset of or equal to ⊇, superset of with not equal to ⊋ */
		[0x03BD,0x2286,0x228A], /* 0x4E N: greek small letter nu ν, subset of or equal to ⊆, subset of with not equal to ⊊ */
		[0x03BF,0x21B0,0x2B11], /* 0x4F O: greek small letter omicron ο, upwards arrow with tip leftwards ↰, leftwards arrow with tip upwards ⬑ */
		[0x03C0,0x21B1,0x2B0F], /* 0x50 P: greek small letter pi π, upwards arrow with tip rightwards ↱, rightwards arrow with tip upwards ⬏ */
		[0x03B8,0x2208,0x2209], /* 0x51 Q: greek small letter θ, element of ∈, not an element ∉ */
		[0x03C1,0x00AC,0x2202], /* 0x52 R: greek small letter rho ρ, not sign ¬, partial differencial (round d) ∂ */
		[0x03C3,0x2211,0x220F], /* 0x53 S: greek small letter sigma σ, n-ary summation ∑, n-ary product ∏ */
		[0x03C4,0x22A4,0x22A5], /* 0x54 T: greek small letter tau τ, down tack (true, top) ⊤, up tack (false, bottom, contradiction, orthogonality) ⊥ */
		[0x03C5,0x222A,0x221D], /* 0x55 U: greek small letter upsilon υ, union ∪, proportional to ∝ */
		[0x22C5,0x2218,0x2219], /* 0x56 V: dot operator ⋅, ring operator ∘, bullet operator ∙ */
		[0x03C9,0x220B,0x220C], /* 0x57 W: greek small letter omega ω, contains as member ∋, does not contain as member ∌ */
		[0x03BE,0x21AE,0x2295], /* 0x58 X: greek small letter xi ξ, left right arrow with stroke (XOR) ↮, circled plus (XOR) ⊕ */
		[0x03C8,0x22A2,0x22A8], /* 0x59 Y: greek small letter ψ, right tack (provable, turnstile) ⊢, true (entails, double turnstile) ⊨ */
		[0x03B6,0x219A,0x2220], /* 0x5A Z: greek small letter zeta ζ, leftward arrow with stroke ↚, angle ∠ */
		[0x3010,0x3014,0x2600], /* 0x5B bracketleft: left black lenticular bracket 【, left tortoise shell bracket 〔, blank sun with rays ☀ */
		[0x2252,0x00B6,0x00A6], /* 0x5C backslash: approximately equal to ≒, pilcrow sign ¶, broken bar ¦ */
		[0x3011,0x3015,0x2601], /* 0x5D bracketright: right black lenticular bracket 】, right tortoise shell bracket 〕, section sign ☁ */
		[0x2165,0x2086,0x2076], /* 0x5E asciicircum: roman numeral six Ⅵ, subscript six ₆, superscript six ⁶ */
		[0x216A,0x208B,0x207B], /* 0x5F underscore: roman numeral eleven Ⅺ, subscript minus ₋, superscript minus ⁻ */
		[0x2122,0x00A9,0x00AE], /* 0x60 quoteleft: trademark ™, copyright sign ©, registerd sign ® */
		[0x25C7,0x25C8,0x25C6], /* 0x61 a: diamond ◇, diamond containing black diamond ◈, black diamond ◆ */
		[0x00F7,0x2030,0x2031], /* 0x62 b: division sign ÷, per mille(per thousand) sign ‰, per ten thousand sign ‱ */
		[0x00B0,0x260E,0x2668], /* 0x63 c: degree sign °, black telephone ☎, hot springs ♨ */
		[0x25CB,0x25C9,0x25CF], /* 0x64 d: white circle ○, fisheye ◉, black circle ● */
		[0x25B3,0x2191,0x21D1], /* 0x65 e: up-pointing triangle △, upwards arrow ↑, upwards double arrow ☝ */
		[0x00B7,0x25E6,0x2022], /* 0x66 f: middle dot ·, white bullet ◦, bullet • */
		[0x2026,0x2015,0xFFE3], /* 0x67 g: horizontal ellipsis …, horizontal bar ―, fullwidth macron ￣ */
		[0x3261,0x3003,0x2713], /* 0x68 h: circled hangeul nieun ㉡, ditto mark 〃, check mark ✓ */
		[0x3264,0x2103,0x2109], /* 0x69 i: circled hangeul mieum ㉤, degree Celsius ℃, degree Fahrenheit ℉ */
		[0x3267,0x2018,0x201C], /* 0x6A j: circled hangeul ieung ㉧, left single quotation mark ‘, left double quotation mark “ */
		[0x3260,0x2019,0x201D], /* 0x6B k: circled hangeul gieug ㉠, right single quotation mark ’, right double quotation mark ” */
		[0x3268,0x2199,0x21D9], /* 0x6C l: circled hangeul jieuj ㉨, south-west arrow ↙, south west double arrow ⇙ */
		[0x326D,0x300D,0x300F], /* 0x6D m: circled hangeul hieuh ㉭, right corner bracket 」, right white corner bracket 』 */
		[0x3266,0x300C,0x300E], /* 0x6E n: circled hangeul sieus ㉦, left corner bracket 「, left white corner bracket 『 */
		[0x3269,0x2196,0x21D6], /* 0x6F o: circled hangeul chieuch ㉩, north-west arrow ↖, north west double arrow ⇖ */
		[0x326C,0x2197,0x21D7], /* 0x70 p: circled hangeul pieup ㉬, north-east arrow ↗, north east double arrow ⇗ */
		[0x25C1,0x2190,0x21D0], /* 0x71 q: left-pointing triangle ◁, leftwards arrow ←, leftwards double arrow ⇐ */
		[0x25B7,0x2192,0x21D2], /* 0x72 r: right-pointing triangle ▷, rightwards arrow →, rightwards double arrow ⇒ */
		[0x25A1,0x25A3,0x25A0], /* 0x73 s: square □, square containing black square ▣, black square ■ */
		[0x02D0,0x2194,0x21D4], /* 0x74 t: modifier letter triangular colon ː, left-right arrow ↔, left right double arrow ⇔ */
		[0x3262,0x321C,0x327E], /* 0x75 u: circled hangeul dieud ㉢, parenthesized hangeul jieuj u ㈜, circled hangeul U ㉾ */
		[0x00D7,0x2715,0x2702], /* 0x76 v: multiplication X ×, fullwidth multiplication X ✕, scissors ✂ */
		[0x25BD,0x2193,0x21D3], /* 0x77 w: down-pointing triangle ▽, downwards arrow ↓, downward double arrow ⇓ */
		[0x2032,0x2606,0x2605], /* 0x78 x: prime ′, star ☆, black star ★ */
		[0x3263,0x2195,0x21D5], /* 0x79 y: circled hangeul lieul ㉣, up-down arrow ↕, up down double arrow ⇕ */
		[0x2033,0x2661,0x2665], /* 0x7A z: double prime ″, heart suit ♡, black heart suit ♥ */
		[0x0000,0x208D,0x207D], /* 0x7B braceleft: , subscript left parenthesis ₍, superscript left parenthesis ⁽ */
		[0x2223,0x2225,0x2226], /* 0x7C bar: divides (divisor) ∣, parallel to ∥, not parallel to ∦ */
		[0x0000,0x208E,0x207E], /* 0x7D braceright: , subscript right parenthesis ₎, superscript right parenthesis ⁾ */
		[0x223C,0x2248,0x223D]  /* 0x7E asciitilde: tilde operator (equivalent, similar) ∼, almost equal to (approximation) ≈, reversed tilde (congruence) ∽ */
	];

	// 세모이 자판의 기호 확장 배열 (신세벌식 기호 확장 배열과 호환)
	K3_Semoe_extended_sign_layout=[];
	for(i=0;i<K3_Sin3_extended_sign_layout.length;++i) {
		K3_Semoe_extended_sign_layout.push(K3_Sin3_extended_sign_layout[i].slice(0));
	}
	K3_Semoe_extended_sign_layout[6][0] = 0; /* 0x27 apostrophe: */
	K3_Semoe_extended_sign_layout[11][0] = 0x326A; /* 0x2C comma: circled hangeul kieuk ㉪ */
	K3_Semoe_extended_sign_layout[13][0] = 0x3269; /* 0x2E period: circled hangeul chieuch ㉩ */
	K3_Semoe_extended_sign_layout[14][0] = 0; /* 0x2F slash: */
	K3_Semoe_extended_sign_layout[26][0] = 0x326B; /* 0x3B semicolon: circled hangeul tieut ㉫ */
	K3_Semoe_extended_sign_layout[71][0] = 0x326D; /* 0x68 h: circled hangeul hieuh ㉭ */
	K3_Semoe_extended_sign_layout[72][0] = 0x3262; /* 0x69 i: circled hangeul dieud ㉢ */
	K3_Semoe_extended_sign_layout[76][0] = 0x3263; /* 0x6D m: circled hangeul lieul ㉣ */
	K3_Semoe_extended_sign_layout[78][0] = 0x3265; /* 0x6D m: circled hangeul bieub ㉥ */
	K3_Semoe_extended_sign_layout[84][0] = 0x3261; /* 0x75 u: circled hangeul nieun ㉡ */
	K3_Semoe_extended_sign_layout[88][0] = 0x3264; /* 0x79 y: circled hangeul mieum ㉤ */

} // input_keyboard_layout_info()


function input_combination_table_info() {

	hangeul_combination_table_default = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong bieup + bieup = ssangbieup */
		[0x11091109,0x110A], /* choseong sieus + sieus = ssangsieus */
		[0x110C110C,0x110D], /* choseong jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116A], /* jungseong o + a = wa */
		[0x11691162,0x116B], /* jungseong o + ae = wae */
		[0x11691175,0x116C], /* jungseong o + i = oe */
		[0x116E1165,0x116F], /* jungseong u + eo = weo */
		[0x116E1166,0x1170], /* jungseong u + e = we */
		[0x116E1175,0x1171], /* jungseong u + i = wi */
		[0x11731175,0x1174], /* jungseong eu + i = eui */
		[0x119E1175,0x11A1], /* jungseong araea + i = araea-i */
		[0x119E119E,0x11A2], /* jungseong araea + araea = ssangaraea */
		[0x11A811A8,0x11A9], /* jongseong gieug + gieug = ssangegieug */
		[0x11A811BA,0x11AA], /* jongseong gieug + sieus = gieug-sieus */
		[0x11AB11BD,0x11AC], /* jongseong nieun + jieuj = jieun-jieuj */
		[0x11AB11C2,0x11AD], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11AF11A8,0x11B0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11AF11B7,0x11B1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11AF11B8,0x11B2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11AF11BA,0x11B3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11AF11C0,0x11B4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11AF11C1,0x11B5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11AF11C2,0x11B6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11B811BA,0x11B9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11BA11BA,0x11BB]  /* jongseong sieus + sieus = ssangsieus */
	];

	hangeul_combination_table_full = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11001103,0x115A], /* choseong gieug + dieud = gieug-dieud */
		[0x11021100,0x1113], /* choseong nieun + gieug = nieun-gieug */
		[0x11021102,0x1114], /* choseong nieun + nieun = ssangnieun */
		[0x11021103,0x1115], /* choseong nieun + dieud = nieun-dieud */
		[0x11021107,0x1116], /* choseong nieun + bieub = nieun-bieub */
		[0x11021109,0x115B], /* choseong nieun + sieus = nieun-sieus */
		[0x1102110C,0x115C], /* choseong nieun + jieuj = nieun-jieuj */
		[0x11021112,0x115D], /* choseong nieun + hieuh = nieun-hieuh */
		[0x11031100,0x1117], /* choseong dieud + gieug = dieud-gieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11031105,0x115E], /* choseong dieud + lieul = dieud-lieul */
		[0x11031106,0xA960], /* choseong dieud + mieum = dieud-mieum */
		[0x11031107,0xA961], /* choseong dieud + bieub = dieud-bieub */
		[0x11031109,0xA962], /* choseong dieud + sieus = dieud-sieus */
		[0x1103110C,0xA963], /* choseong dieud + jieuj = dieud-jieuj */
		[0x11051100,0xA964], /* choseong lieul + gieug = lieul-gieug */
		[0x11051101,0xA965], /* choseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11051102,0x1118], /* choseong lieul + nieun = lieul-nieun */
		[0x11051103,0xA966], /* choseong lieul + dieud = lieul-dieud */
		[0x11051104,0xA967], /* choseong lieul + ssangdieud = lieul-ssangdieud */
		[0x11051105,0x1119], /* choseong lieul + lieul = ssanglieul */
		[0x11051106,0xA968], /* choseong lieul + mieum = lieul-mieum */
		[0x11051107,0xA969], /* choseong lieul + bieub = lieul-bieub */
		[0x11051108,0xA96A], /* choseong lieul + ssangbieub = lieul-ssangbieub */
		[0x11051109,0xA96C], /* choseong lieul + sieus = lieul-sieus */
		[0x1105110B,0x111B], /* choseong lieul + ieung = gabyeounlieul */
		[0x1105110C,0xA96D], /* choseong lieul + jieuj = lieul-jieuj */
		[0x1105110F,0xA96E], /* choseong lieul + kieuk = lieul-kieuk */
		[0x11051112,0x111A], /* choseong lieul + hieuh = lieul-hieuh */
		[0x1105112B,0xA96B], /* choseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11061100,0xA96F], /* choseong mieum + gieug = mieum-gieug */
		[0x11061103,0xA970], /* choseong mieum + dieud = mieum-dieud */
		[0x11061107,0x111C], /* choseong mieum + bieub = mieum-bieub */
		[0x11061109,0xA971], /* choseong mieum + sieus = mieum-sieus */
		[0x1106110B,0x111D], /* choseong mieum + ieung = gabyeounmieum */
		[0x11071100,0x111E], /* choseong bieub + gieug = bieub-gieug */
		[0x11071102,0x111F], /* choseong bieub + nieun = bieub-nieun */
		[0x11071103,0x1120], /* choseong bieub + dieud = bieub-dieud */
		[0x11071107,0x1108], /* choseong bieub + bieub = ssangbieub */
		[0x11071109,0x1121], /* choseong bieub + sieus = bieub-sieus */
		[0x1107110A,0x1125], /* choseong bieub + ssangsieus = bieub-ssangsieus */
		[0x1107110B,0x112B], /* choseong bieub + ieung = gabyeounbieub */
		[0x1107110C,0x1127], /* choseong bieub + jieuj = bieub-jieuj */
		[0x1107110E,0x1128], /* choseong bieub + chieuch = bieub-chieuch */
		[0x1107110F,0xA973], /* choseong bieub + kieuk = bieub-kieuk */
		[0x11071110,0x1129], /* choseong bieub + tieut = bieub-tieut */
		[0x11071111,0x112A], /* choseong bieub + pieup = bieub-pieup */
		[0x11071112,0xA974], /* choseong bieub + hieuh = bieub-hieuh */
		[0x1107112B,0x112C], /* choseong bieub + gabyeounbieub = gabyeounssangbieub */
		[0x1107112D,0x1122], /* choseong bieub + sieus-gieug = bieub-sieus-gieug */
		[0x1107112F,0x1123], /* choseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11071132,0x1124], /* choseong bieub + sieus-bieub = bieub-sieus-bieub */
		[0x11071136,0x1126], /* choseong bieub + sieus-jieuj = bieub-sieus-jieuj */
		[0x11071139,0xA972], /* choseong bieub + sieus-tieut = bieub-sieus-tieut */
		[0x1108110B,0x112C], /* choseong ssangbieub + ieung = gabyeounssangbieub */
		[0x11091100,0x112D], /* choseong sieus + gieug = sieus-gieug */
		[0x11091102,0x112E], /* choseong sieus + nieun = sieus-nieun */
		[0x11091103,0x112F], /* choseong sieus + dieud = sieus-dieud */
		[0x11091105,0x1130], /* choseong sieus + lieul = sieus-lieul */
		[0x11091106,0x1131], /* choseong sieus + mieum = sieus-mieum */
		[0x11091107,0x1132], /* choseong sieus + bieub = sieus-bieub */
		[0x11091109,0x110A], /* choseong sieus + sieus = ssangsieus */
		[0x1109110A,0x1134], /* choseong sieus + ssangsieus = sieus-ssangsieus */
		[0x1109110B,0x1135], /* choseong sieus + ieung = sieus-ieung */
		[0x1109110C,0x1136], /* choseong sieus + jieuj = sieus-jieuj */
		[0x1109110E,0x1137], /* choseong sieus + chieuch = sieus-chieuch */
		[0x1109110F,0x1138], /* choseong sieus + kieuk = sieus-kieuk */
		[0x11091110,0x1139], /* choseong sieus + tieut = sieus-tieut */
		[0x11091111,0x113A], /* choseong sieus + pieup = sieus-pieup */
		[0x11091112,0x113B], /* choseong sieus + hieuh = sieus-hieuh */
		[0x1109111E,0x1133], /* choseong sieus + bieub-gieug = sieus-bieub-gieug */
		[0x11091132,0xA975], /* choseong sieus + sieus-bieub = ssangsieus-bieub */
		[0x110A1107,0xA975], /* choseong ssangsieus + bieub = ssangsieus-bieub */
		[0x110A1109,0x1134], /* choseong ssangsieus + sieus = sieus-ssangsieus */
		[0x110B1100,0x1141], /* choseong ieung + gieug = ieung-gieug */
		[0x110B1103,0x1142], /* choseong ieung + dieud = ieung-dieud */
		[0x110B1105,0xA976], /* choseong ieung + lieul = ieung-lieul */
		[0x110B1106,0x1143], /* choseong ieung + mieum = ieung-mieum */
		[0x110B1107,0x1144], /* choseong ieung + bieub = ieung-bieub */
		[0x110B1109,0x1145], /* choseong ieung + sieus = ieung-sieus */
		[0x110B110B,0x1147], /* choseong ieung + ieung = ssangieung */
		[0x110B110C,0x1148], /* choseong ieung + jieuj = ieung-jieuj */
		[0x110B110E,0x1149], /* choseong ieung + chieuch = ieung-chieuch */
		[0x110B1110,0x114A], /* choseong ieung + tieut = ieung-tieut */
		[0x110B1111,0x114B], /* choseong ieung + pieup = ieung-pieup */
		[0x110B1112,0xA977], /* choseong ieung + hieuh = ieung-hieuh */
		[0x110B1140,0x1146], /* choseong ieung + bansieus = ieung-bansieus */
		[0x110C110B,0x114D], /* choseong jieuj + ieung = jieuj-ieung */
		[0x110C110C,0x110D], /* choseong jieuj + jieuj = ssangjieuj */
		[0x110D1112,0xA978], /* choseong ssangjieuj + hieuh = ssangjieuj-hieuh */
		[0x110E110F,0x1152], /* choseong chieuch + kieuk = chieuch-kieuk */
		[0x110E1112,0x1153], /* choseong chieuch + hieuh = chieuch-hieuh */
		[0x11101110,0xA979], /* choseong tieut + tieut = ssangtieut */
		[0x11111107,0x1156], /* choseong pieup + bieub = pieup-bieub */
		[0x1111110B,0x1157], /* choseong pieup + ieung = gabyeounpieup */
		[0x11111112,0xA97A], /* choseong pieup + hieuh = pieup-hieuh */
		[0x11121109,0xA97B], /* choseong hieuh + sieus = hieuh-sieus */
		[0x11121112,0x1158], /* choseong hieuh + hieuh = ssanghieuh */
		[0x11211100,0x1122], /* choseong bieub-sieus + gieug = bieub-sieus-gieug */
		[0x11211103,0x1123], /* choseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11211107,0x1124], /* choseong bieub-sieus + bieub = bieub-sieus-bieub */
		[0x11211109,0x1125], /* choseong bieub-sieus + sieus = bieub-ssangsieus */
		[0x1121110C,0x1126], /* choseong bieub-sieus + jieuj = bieub-sieus-jieuj */
		[0x11211110,0xA972], /* choseong bieub-sieus + tieut = bieub-sieus-tieut */
		[0x11321100,0x1133], /* choseong sieus-bieub + gieug = sieus-bieub-gieug */
		[0x113C113C,0x113D], /* choseong chidueumsieus + chidueumsieus = chidueumssangsieus */
		[0x113E113E,0x113F], /* choseong jeongchieumsieus + jeongchieumsieus = jeongchieumssangsieus */
		[0x114E114E,0x114F], /* choseong chidueumjieuj + chidueumjieuj = chidueumssangjieuj */
		[0x11501150,0x1151], /* choseong jeongchieumjieuj + jeongchieumjieuj = jeongchieumssangjieuj */
		[0x11591159,0xA97C], /* choseong yeorinhieuh + yeorinhieuh = ssangyeorinhieuh */
		[0x11611161,0x119E], /* jungseong a + a  = arae-a */
		[0x11611169,0x1176], /* jungseong a + o  = a-o */
		[0x1161116E,0x1177], /* jungseong a + u  = a-u */
		[0x11611173,0x11A3], /* jungseong a + eu = a-eu */
		[0x11611175,0x1162], /* jungseong a + i  = ae */
		[0x11631169,0x1178], /* jungseong ya + o = ya-o */
		[0x1163116D,0x1179], /* jungseong ya + yo = ya-yo */
		[0x1163116E,0x11A4], /* jungseong ya + u = ya-u */
		[0x11631175,0x1164], /* jungseong ya + i = yae */
		[0x11651169,0x117A], /* jungseong eo + o = eo-o */
		[0x1165116E,0x117B], /* jungseong eo + u = eo-u */
		[0x11651173,0x117C], /* jungseong eo + eu = eo-eu */
		[0x11651175,0x1166], /* jungseong eo + i = e */
		[0x11671163,0x11A5], /* jungseong yeo + ya = yeo-ya */
		[0x11671169,0x117D], /* jungseong yeo + o = yeo-o */
		[0x1167116E,0x117E], /* jungseong yeo + u = yeo-u */
		[0x11671175,0x1168], /* jungseong yeo + i = ye */
		[0x11691161,0x116A], /* jungseong o + a   = wa */
		[0x11691162,0x116B], /* jungseong o + ae  = wae */
		[0x11691163,0x11A6], /* jungseong o + ya  = o-ya */
		[0x11691164,0x11A7], /* jungseong o + yae = o-yae */
		[0x11691165,0x117F], /* jungseong o + eo  = o-eo */
		[0x11691166,0x1180], /* jungseong o + e   = o-e */
		[0x11691167,0xD7B0], /* jungseong o + yeo = o-yeo */
		[0x11691168,0x1181], /* jungseong o + ye  = o-ye */
		[0x11691169,0x1182], /* jungseong o + o   = o-o */
		[0x1169116E,0x1183], /* jungseong o + u   = o-u */
		[0x11691175,0x116C], /* jungseong o + i   = oe */
		[0x116A1175,0x116B], /* jungseong wa + i   = wae */
		[0x116D1161,0xD7B2], /* jungseong yo + a   = yo-a */
		[0x116D1162,0xD7B3], /* jungseong yo + ae  = yo-ae */
		[0x116D1163,0x1184], /* jungseong yo + ya  = yo-ya */
		[0x116D1164,0x1185], /* jungseong yo + yae = yo-yae */
		[0x116D1165,0xD7B4], /* jungseong yo + eo  = yo-eo */
		[0x116D1167,0x1186], /* jungseong yo + yeo = yo-yeo */
		[0x116D1169,0x1187], /* jungseong yo + o   = yo-o */
		[0x116D1175,0x1188], /* jungseong yo + i   = yo-i */
		[0x116E1161,0x1189], /* jungseong u + a    = u-a */
		[0x116E1162,0x118A], /* jungseong u + ae   = u-ae */
		[0x116E1165,0x116F], /* jungseong u + eo   = weo */
		[0x116E1166,0x1170], /* jungseong u + e    = we */
		[0x116E1167,0xD7B5], /* jungseong u + yeo  = u-yeo */
		[0x116E1168,0x118C], /* jungseong u + ye   = u-ye */
		[0x116E116E,0x118D], /* jungseong u + u    = u-u */
		[0x116E1175,0x1171], /* jungseong u + i    = wi */
		[0x116E117C,0x118B], /* jungseong u + eo-eu = u-eo-eu */
		[0x116ED7C4,0xD7B6], /* jungseong u + i-i  = u-i-i */
		[0x116F1173,0x118B], /* jungseong weo + eu = u-eo-eu */
		[0x116F1175,0x1170], /* jungseong weo + i  = we */
		[0x11711175,0xD7B6], /* jungseong wi + i   = u-i-i */
		[0x11721161,0x118E], /* jungseong yu + a   = yu-a */
		[0x11721162,0xD7B7], /* jungseong yu + ae  = yu-ae */
		[0x11721165,0x118F], /* jungseong yu + eo  = yu-eo */
		[0x11721166,0x1190], /* jungseong yu + e   = yu-e */
		[0x11721167,0x1191], /* jungseong yu + yeo = yu-yeo */
		[0x11721168,0x1192], /* jungseong yu + ye  = yu-ye */
		[0x11721169,0xD7B8], /* jungseong yu + o   = yu-o */
		[0x1172116E,0x1193], /* jungseong yu + u   = yu-u */
		[0x11721175,0x1194], /* jungseong yu + i   = yu-i */
		[0x11731161,0xD7B9], /* jungseong eu + a   = eu-a */
		[0x11731165,0xD7BA], /* jungseong eu + eo  = eu-eo */
		[0x11731166,0xD7BB], /* jungseong eu + e   = eu-e */
		[0x11731169,0xD7BC], /* jungseong eu + o   = eu-o */
		[0x1173116E,0x1195], /* jungseong eu + u   = eu-u */
		[0x11731173,0x1196], /* jungseong eu + eu  = eu-eu */
		[0x11731175,0x1174], /* jungseong eu + i   = eui */
		[0x1174116E,0x1197], /* jungseong eui + u  = eui-u */
		[0x11751161,0x1198], /* jungseong i + a    = i-a */
		[0x11751163,0x1199], /* jungseong i + ya   = i-ya */
		[0x11751164,0xD7BE], /* jungseong i + yae  = i-yae */
		[0x11751167,0xD7BF], /* jungseong i + yeo  = i-yeo */
		[0x11751168,0xD7C0], /* jungseong i + ye   = i-ye */
		[0x11751169,0x119A], /* jungseong i + o    = i-o */
		[0x1175116D,0xD7C2], /* jungseong i + yo   = i-yo */
		[0x1175116E,0x119B], /* jungseong i + u    = i-u */
		[0x11751172,0xD7C3], /* jungseong i + yu   = i-yu */
		[0x11751173,0x119C], /* jungseong i + eu   = i-eu */
		[0x11751175,0xD7C4], /* jungseong i + i    = i-i */
		[0x11751178,0xD7BD], /* jungseong i + ya-o = i-ya-o */
		[0x1175119E,0x119D], /* jungseong i + araea = i-araea */
		[0x11821175,0xD7B1], /* jungseong o-o + i  = o-o-i */
		[0x11991169,0xD7BD], /* jungseong i-ya + o = i-ya-o */
		[0x119a1175,0xD7C1], /* jungseong i-o + i  = i-o-i */
		[0x119E1161,0xD7C5], /* jungseong araea + a = araea-a */
		[0x119E1165,0x119F], /* jungseong araea + eo = araea-eo */
		[0x119E1166,0xD7C6], /* jungseong araea + e = araea-e */
		[0x119E116E,0x11A0], /* jungseong araea + u = araea-u */
		[0x119E1175,0x11A1], /* jungseong araea + i = araea-i */
		[0x119E119E,0x11A2], /* jungseong araea + araea = ssangaraea */
		[0x11A811A8,0x11A9], /* jongseong gieug + gieug = ssanggieug */
		[0x11A811AB,0x11FA], /* jongseong gieug + nieun = gieug-nieun */
		[0x11A811AF,0x11C3], /* jongseong gieug + lieul = gieug-lieul */
		[0x11A811B8,0x11FB], /* jongseong gieug + bieub = gieug-bieub */
		[0x11A811BA,0x11AA], /* jongseong gieug + sieus = gieug-sieus */
		[0x11A811BE,0x11FC], /* jongseong gieug + chieuch = gieug-chieuch */
		[0x11A811BF,0x11FD], /* jongseong gieug + kieuk = gieug-kieuk */
		[0x11A811C2,0x11FE], /* jongseong gieug + hieuh = gieug-hieuh */
		[0x11A811E7,0x11C4], /* jongseong gieug + sieus-gieug = gieug-sieus-gieug */
		[0x11AA11A8,0x11C4], /* jongseong gieug-sieus + gieug = gieug-sieus-gieug */
		[0x11AB11A8,0x11C5], /* jongseong nieun + gieug = nieun-gieug */
		[0x11AB11AB,0x11FF], /* jongseong nieun + nieun = ssangnieun */
		[0x11AB11AE,0x11C6], /* jongseong nieun + dieud = nieun-dieud */
		[0x11AB11AF,0xD7CB], /* jongseong nieun + lieul = nieun-lieul */
		[0x11AB11BA,0x11C7], /* jongseong nieun + sieus = nieun-sieus */
		[0x11AB11BD,0x11AC], /* jongseong nieun + jieuj = nieun-jieuj */
		[0x11AB11BE,0xD7CC], /* jongseong nieun + chieuch = nieun-chieuch */
		[0x11AB11C0,0x11C9], /* jongseong nieun + tieut = nieun-tieut */
		[0x11AB11C2,0x11AD], /* jongseong nieun + hieuh = nieun-hieuh */
		[0x11AB11EB,0x11C8], /* jongseong nieun + bansieus = nieun-bansieus */
		[0x11AE11A8,0x11CA], /* jongseong dieud + gieug = dieud-gieug */
		[0x11AE11AE,0xD7CD], /* jongseong dieud + dieud = ssangdieud */
		[0x11AE11AF,0x11CB], /* jongseong dieud + lieul = dieud-lieul */
		[0x11AE11B8,0xD7CF], /* jongseong dieud + bieub = dieud-bieub */
		[0x11AE11BA,0xD7D0], /* jongseong dieud + sieus = dieud-sieus */
		[0x11AE11BD,0xD7D2], /* jongseong dieud + jieuj = dieud-jieuj */
		[0x11AE11BE,0xD7D3], /* jongseong dieud + chieuch = dieud-chieuch */
		[0x11AE11C0,0xD7D4], /* jongseong dieud + tieut = dieud-tieut */
		[0x11AE11E7,0xD7D1], /* jongseong dieud + sieus-gieug = dieud-sieus-gieug */
		[0x11AED7CF,0xD7CE], /* jongseong dieud + dieud-bieub = ssangdieud-bieub */
		[0x11AF11A8,0x11B0], /* jongseong lieul + gieug = lieul-gieug */
		[0x11AF11A9,0xD7D5], /* jongseong lieul + ssanggieug = lieul-ssanggieug */
		[0x11AF11AA,0x11CC], /* jongseong lieul + gieug-sieus = lieul-gieug-sieus */
		[0x11AF11AB,0x11CD], /* jongseong lieul + nieun = lieul-nieun */
		[0x11AF11AE,0x11CE], /* jongseong lieul + dieud = lieul-dieud */
		[0x11AF11AF,0x11D0], /* jongseong lieul + lieul = ssanglieul */
		[0x11AF11B7,0x11B1], /* jongseong lieul + mieum = lieul-mieum */
		[0x11AF11B8,0x11B2], /* jongseong lieul + bieub = lieul-bieub */
		[0x11AF11B9,0x11D3], /* jongseong lieul + bieub-sieus = lieul-bieub-sieus */
		[0x11AF11BA,0x11B3], /* jongseong lieul + sieus = lieul-sieus */
		[0x11AF11BB,0x11D6], /* jongseong lieul + ssangsieus = lieul-ssangsieus */
		[0x11AF11BC,0xD7DD], /* jongseong lieul + ieung = gabyeounlieul */
		[0x11AF11BF,0x11D8], /* jongseong lieul + kieuk = lieul-kieuk */
		[0x11AF11C0,0x11B4], /* jongseong lieul + tieut = lieul-tieut */
		[0x11AF11C1,0x11B5], /* jongseong lieul + pieup = lieul-pieup */
		[0x11AF11C2,0x11B6], /* jongseong lieul + hieuh = lieul-hieuh */
		[0x11AF11D8,0xD7D7], /* jongseong lieul + lieul-kieuk = ssanglieul-kieuk */
		[0x11AF11DA,0x11D1], /* jongseong lieul + mieum-gieug = lieul-mieum-gieug */
		[0x11AF11DD,0x11D2], /* jongseong lieul + mieum-sieus = lieul-mieum-sieus */
		[0x11AF11E1,0xD7D8], /* jongseong lieul + mieum-hieuh = lieul-mieum-hieuh */
		[0x11AF11E4,0xD7DA], /* jongseong lieul + bieub-pieup = lieul-bieub-pieup */
		[0x11AF11E5,0x11D4], /* jongseong lieul + bieub-hieuh = lieul-bieub-hieuh */
		[0x11AF11E6,0x11D5], /* jongseong lieul + gabyeounbieub = lieul-gabyeounbieub */
		[0x11AF11EB,0x11D7], /* jongseong lieul + bansieus = lieul-bansieus */
		[0x11AF11F0,0xD7DB], /* jongseong lieul + yesieung = lieul-yesieung */
		[0x11AF11F9,0x11D9], /* jongseong lieul + yeorinhieuh = lieul-yeorinhieuh */
		[0x11AF11FE,0xD7D6], /* jongseong lieul + gieug-hieuh = lieul-gieug-hieuh */
		[0x11AFD7E3,0xD7D9], /* jongseong lieul + bieub-dieud = lieul-bieub-dieud */
		[0x11B011A8,0xD7D5], /* jongseong lieul-gieug + gieug = lieul-ssanggieug */
		[0x11B011BA,0x11CC], /* jongseong lieul-gieug + sieus = lieul-gieug-sieus */
		[0x11B011C2,0xD7D6], /* jongseong lieul-gieug + hieuh = lieul-gieug-hieuh */
		[0x11B111A8,0x11D1], /* jongseong lieul-mieum + gieug = lieul-mieum-gieug */
		[0x11B111BA,0x11D2], /* jongseong lieul-mieum + sieus = lieul-mieum-sieus */
		[0x11B111C2,0xD7D8], /* jongseong lieul-mieum + hieuh = lieul-mieum-hieuh */
		[0x11B211AE,0xD7D9], /* jongseong lieul-bieub + dieud = lieul-bieub-dieud */
		[0x11B211BA,0x11D3], /* jongseong lieul-bieub + sieus = lieul-bieub-sieus */
		[0x11B211BC,0x11D5], /* jongseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0x11B211C1,0xD7DA], /* jongseong lieul-bieub + pieup = lieul-bieub-pieup */
		[0x11B211C2,0x11D4], /* jongseong lieul-bieub + hieuh = lieul-bieub-hieuh */
		[0x11B311BA,0x11D6], /* jongseong lieul-sieus + sieus = lieul-ssangsieus */
		[0x11B711A8,0x11DA], /* jongseong mieum + gieug = mieum-gieug */
		[0x11B711AB,0xD7DE], /* jongseong mieum + nieun = mieum-nieun */
		[0x11B711AF,0x11DB], /* jongseong mieum + lieul = mieum-lieul */
		[0x11B711B7,0xD7E0], /* jongseong mieum + mieum = ssangmieum */
		[0x11B711B8,0x11DC], /* jongseong mieum + bieub = mieum-bieub */
		[0x11B711B9,0xD7E1], /* jongseong mieum + bieub-sieus = mieum-bieub-sieus */
		[0x11B711BA,0x11DD], /* jongseong mieum + sieus = mieum-sieus */
		[0x11B711BB,0x11DE], /* jongseong mieum + ssangsieus = mieum-ssangsieus */
		[0x11B711BC,0x11E2], /* jongseong mieum + ieung = gabyeounmieum */
		[0x11B711BD,0xD7E2], /* jongseong mieum + jieuj = mieum-jieuj */
		[0x11B711BE,0x11E0], /* jongseong mieum + chieuch = mieum-chieuch */
		[0x11B711C2,0x11E1], /* jongseong mieum + hieuh = mieum-hieuh */
		[0x11B711EB,0x11DF], /* jongseong mieum + bansieus = mieum-bansieus */
		[0x11B711FF,0xD7DF], /* jongseong mieum + ssangnieun = mieum-ssangnieun */
		[0x11B811AE,0xD7E3], /* jongseong bieub + dieud = bieub-dieud */
		[0x11B811AF,0x11E3], /* jongseong bieub + lieul = bieub-lieul */
		[0x11B811B5,0xD7E4], /* jongseong bieub + lieul-pieup = bieub-lieul-pieup */
		[0x11B811B7,0xD7E5], /* jongseong bieub + mieum = bieub-mieum */
		[0x11B811B8,0xD7E6], /* jongseong bieub + bieub = ssangbieub */
		[0x11B811BA,0x11B9], /* jongseong bieub + sieus = bieub-sieus */
		[0x11B811BC,0x11E6], /* jongseong bieub + ieung = gabyeounbieub */
		[0x11B811BD,0xD7E8], /* jongseong bieub + jieuj = bieub-jieuj */
		[0x11B811BE,0xD7E9], /* jongseong bieub + chieuch = bieub-chieuch */
		[0x11B811C1,0x11E4], /* jongseong bieub + pieup = bieub-pieup */
		[0x11B811C2,0x11E5], /* jongseong bieub + hieuh = bieub-hieuh */
		[0x11B811E8,0xD7E7], /* jongseong bieub + sieus-dieud = bieub-sieus-dieud */
		[0x11B911AE,0xD7E7], /* jongseong bieub-sieus + dieud = bieub-sieus-dieud */
		[0x11BA11A8,0x11E7], /* jongseong sieus + gieug = sieus-gieug */
		[0x11BA11AE,0x11E8], /* jongseong sieus + dieud = sieus-dieud */
		[0x11BA11AF,0x11E9], /* jongseong sieus + lieul = sieus-lieul */
		[0x11BA11B7,0xD7EA], /* jongseong sieus + mieum = sieus-mieum */
		[0x11BA11B8,0x11EA], /* jongseong sieus + bieub = sieus-bieub */
		[0x11BA11BA,0x11BB], /* jongseong sieus + sieus = ssangsieus */
		[0x11BA11BD,0xD7EF], /* jongseong sieus + jieuj = sieus-jieuj */
		[0x11BA11BE,0xD7F0], /* jongseong sieus + chieuch = sieus-chieuch */
		[0x11BA11C0,0xD7F1], /* jongseong sieus + tieut = sieus-tieut */
		[0x11BA11C2,0xD7F2], /* jongseong sieus + hieuh = sieus-hieuh */
		[0x11BA11E6,0xD7EB], /* jongseong sieus + gabyeounbieub = sieus-gabyeounbieub */
		[0x11BA11E7,0xD7EC], /* jongseong sieus + sieus-gieug = ssangsieus-gieug */
		[0x11BA11E8,0xD7ED], /* jongseong sieus + sieus-dieud = ssangsieus-dieud */
		[0x11BA11EB,0xD7EE], /* jongseong sieus + bansieus = sieus-bansieus */
		[0x11BB11A8,0xD7EC], /* jongseong ssangsieus + gieug = ssangsieus-gieug */
		[0x11BB11AE,0xD7ED], /* jongseong ssangsieus + dieud = ssangsieus-dieud */
		[0x11BD11B8,0xD7F7], /* jongseong jieuj + bieub = jieuj-bieub */
		[0x11BD11BD,0xD7F9], /* jongseong jieuj + jieuj = ssangjieuj */
		[0x11BDD7E6,0xD7F8], /* jongseong jieuj + ssangbieub = jieuj-ssangbieub */
		[0x11C111B8,0x11F3], /* jongseong pieup + bieub = pieup-bieub */
		[0x11C111BA,0xD7FA], /* jongseong pieup + sieus = bieub-sieus */
		[0x11C111BC,0x11F4], /* jongseong pieup + ieung = gabyeounpieup */
		[0x11C111C0,0xD7FB], /* jongseong pieup + tieut = pieup-tieut */
		[0x11C211AB,0x11F5], /* jongseong hieuh + nieun = hieuh-nieun */
		[0x11C211AF,0x11F6], /* jongseong hieuh + lieul = hieuh-lieul */
		[0x11C211B7,0x11F7], /* jongseong hieuh + mieum = hieuh-mieum */
		[0x11C211B8,0x11F8], /* jongseong hieuh + bieub = hieuh-bieub */
		[0x11CE11C2,0x11CF], /* jongseong lieul-dieud + hieuh = lieul-dieud-hieuh */
		[0x11D011BF,0xD7D7], /* jongseong ssanglieul + kieuk = ssanglieul-kieuk */
		[0x11D911C2,0xD7DC], /* jongseong lieul-yeorinhieuh + hieuh = lieul-yeorinhieuh-hieuh */
		[0x11DC11BA,0xD7E1], /* jongseong mieum-bieub + sieus = mieum-bieub-sieus */
		[0x11DD11BA,0x11DE], /* jongseong mieum-sieus + sieus = mieum-ssangsieus */
		[0x11E311C1,0xD7E4], /* jongseong bieub-lieul + pieup = bieub-lieul-pieup */
		[0x11EA11BC,0xD7EB], /* jongseong sieus-bieub + ieung = sieus-gabyeounbieub */
		[0x11EB11B8,0xD7F3], /* jongseong bansieus + bieub = bansieus-bieub */
		[0x11EB11E6,0xD7F4], /* jongseong bansieus + gabyeounbieub = bansieus-gabyeounbieub */
		[0x11EC11A8,0x11ED], /* jongseong ieung-gieug + gieug = ieung-ssanggieug */
		[0x11F011A8,0x11EC], /* jongseong yesieung + gieug = yesieung-gieug */
		[0x11F011A9,0x11ED], /* jongseong yesieung + ssanggieug = yesieung-ssanggieug */
		[0x11F011B7,0xD7F5], /* jongseong yesieung + mieum = yesieung-mieum */
		[0x11F011BA,0x11F1], /* jongseong yesieung + sieus = yesieung-sieus */
		[0x11F011BF,0x11EF], /* jongseong yesieung + kieuk = yesieung-kieuk */
		[0x11F011C2,0xD7F6], /* jongseong yesieung + hieuh = yesieung-hieuh */
		[0x11F011EB,0x11F2], /* jongseong yesieung + bansieus = yesieung-bansieus */
		[0x11F011F0,0x11EE], /* jongseong yesieung + yesieung = ssangyesieung */
		[0xA9641100,0xA965], /* choseong lieul-gieug + gieug = lieul-ssanggieug */
		[0xA9661103,0xA967], /* choseong lieul-dieud + dieud = lieul-ssangdieud */
		[0xA9691107,0xA96A], /* choseong lieul-bieub + bieub = lieul-ssangbieub */
		[0xA969110B,0xA96B], /* choseong lieul-bieub + ieung = lieul-gabyeounbieub */
		[0xD7C51161,0x11A2], /* jungseong araea-a + a = ssangaraea */
		[0xD7CD11B8,0xD7CE], /* jongseong ssangdieud + bieub = ssangdieud-bieub */
		[0xD7D011A8,0xD7D1], /* jongseong dieud-sieus + gieug = dieud-sieus-gieug */
		[0xD7DE11AB,0xD7DF], /* jongseong mieum-nieun + nieun = mieum-ssangnieun */
		[0xD7F311BC,0xD7F4], /* jongseong bansieus-bieub + ieung = bansieus-gabyeounbieub */
		[0xD7F711B8,0xD7F8]  /* jongseong jieuj-bieub + bieub = jieuj-ssangbieub */
	];

	K2_hangeul_combination_table = hangeul_combination_table_default.slice(0);
	K2_hangeul_combination_table.unshift(
		[0x11611161,0x119E], /* jungseong a + a = arae-a */
		[0x11751175,0x11A2] /* jungseong i + i = ssangaraea */
	);	

	K3_3_91_noshift_combination_table = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x1100110B,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x1100110C,0x110D], /* choseong gieug + jieuj = ssangjieuj */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11031106,0x1104], /* choseong dieud + mieum = ssangdieud */
		[0x11061103,0x1104], /* choseong mieum + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong bieup + bieup = ssangbieup */
		[0x1107110C,0x1108], /* choseong bieup + jieuj = ssangbieup */
		[0x11091109,0x110A], /* choseong sieus + sieus	= ssangsieus */
		[0x11091112,0x110A], /* choseong sieus + hieuh = ssangsieus */
		[0x110B1100,0x1101], /* choseong ieung + gieug = ssanggieug */
		[0x110C1100,0x110D], /* choseong jieuj + gieug = ssangjieuj */
		[0x110C1107,0x1108], /* choseong jieuj + bieup = ssangbieup */
		[0x110C110C,0x110D], /* choseong jieuj + jieuj = ssangjieuj */
		[0x11121109,0x110A], /* choseong hieuh + sieus = ssangsieus */
		[0x1161116C,0x116A], /* jungseong a  ㅏ + oe ㅚ = wa  ㅘ */
		[0x1162116C,0x116B], /* jungseong ae ㅐ + oe ㅚ = wae ㅙ */
		[0x11651171,0x116F], /* jungseong eo ㅓ + wi ㅟ = weo ㅝ */
		[0x1166116C,0x1170], /* jungseong e  ㅔ + oe ㅚ = we  ㅞ */
		[0x11661171,0x1170], /* jungseong e  ㅔ + wi ㅟ = we  ㅞ */
		[0x116C1161,0x116A], /* jungseong oe ㅚ + a  ㅏ = wa  ㅘ */
		[0x116C1162,0x116B], /* jungseong oe ㅚ + ae ㅐ = wae ㅙ */
		[0x116C1165,0x116F], /* jungseong oe ㅚ + eo ㅓ = weo ㅝ */
		[0x116C1166,0x1170], /* jungseong oe ㅚ + e  ㅔ = we  ㅞ */
		[0x116C1167,0x1168], /* jungseong oe ㅚ + yeo ㅕ= ye  ㅖ */
		[0x116C1169,0x1174], /* jungseong oe ㅚ + o  ㅗ = eui ㅢ */
		[0x116C116E,0x1171], /* jungseong oe ㅚ + u  ㅜ = wi  ㅟ */
		[0x116C1173,0x1164], /* jungseong oe ㅚ + eu ㅡ = yae ㅒ */
		[0x116C1175,0x116C], /* jungseong oe ㅚ + i  ㅣ = oe  ㅚ */
		[0x11711165,0x116F], /* jungseong wi ㅟ + eo ㅓ = weo ㅝ */
		[0x11711166,0x1170], /* jungseong wi ㅟ + e  ㅔ = we  ㅞ */
		[0x11711175,0x1171], /* jungseong wi ㅟ + i  ㅣ = wi  ㅟ */
		[0x1173116C,0x1164], /* jungseong eu ㅡ + oe ㅚ = yae ㅒ */
//		[0x11731175,0x1174], /* jungseong eu ㅡ + i  ㅣ = eui ㅢ */
		[0x11751171,0x1171], /* jungseong i  ㅣ + wi ㅟ = wi  ㅟ */
		[0x1175116C,0x116C], /* jungseong i  ㅣ + oe ㅚ = oe  ㅚ */
//		[0x11751173,0x1174], /* jungseong i  ㅣ + eu ㅡ = eui ㅢ */
		/* jongseong *//* autogen */
		[0x11A811AA,0x11B9], // autogen
		[0x11A811AC,0x11B9], // autogen
		[0x11A811B1,0x11B9], // autogen
		[0x11A811B2,0x11B9], // autogen
		[0x11A811B3,0x11B9], // autogen
		[0x11A811B4,0x11B9], // autogen
		[0x11A811B5,0x11B9], // autogen
		[0x11A811B6,0x11B9], // autogen
		[0x11A811B9,0x11B9], // autogen
		[0x11A811BF,0x11B9], // autogen
		[0x11A811FF,0x11B9], // autogen
		[0x11AA11A8,0x11B9], // autogen
		[0x11AA11AB,0x11AD], // autogen
		[0x11AA11AF,0x11C0], // autogen
		[0x11AA11B7,0x11BE], // autogen
		[0x11AA11B8,0x11BD], // autogen
		[0x11AA11BA,0x11C1], // autogen
		[0x11AA11BB,0x11B0], // autogen
		[0x11AA11BC,0x11AE], // autogen
		[0x11AA11C2,0x11A9], // autogen
		[0x11AB11AA,0x11AD], // autogen
		[0x11AB11AC,0x11AD], // autogen
		[0x11AB11B1,0x11AD], // autogen
		[0x11AB11B2,0x11AD], // autogen
		[0x11AB11B3,0x11AD], // autogen
		[0x11AB11B4,0x11AD], // autogen
		[0x11AB11B5,0x11AD], // autogen
		[0x11AB11B6,0x11AD], // autogen
		[0x11AB11B9,0x11AD], // autogen
		[0x11AB11BF,0x11AD], // autogen
		[0x11AB11FF,0x11AD], // autogen
		[0x11AC11A8,0x11B9], // autogen
		[0x11AC11AB,0x11AD], // autogen
		[0x11AC11AF,0x11C0], // autogen
		[0x11AC11B7,0x11BE], // autogen
		[0x11AC11B8,0x11BD], // autogen
		[0x11AC11BA,0x11C1], // autogen
		[0x11AC11BB,0x11B0], // autogen
		[0x11AC11BC,0x11AE], // autogen
		[0x11AC11C2,0x11A9], // autogen
		[0x11AF11AA,0x11C0], // autogen
		[0x11AF11AC,0x11C0], // autogen
		[0x11AF11B1,0x11C0], // autogen
		[0x11AF11B2,0x11C0], // autogen
		[0x11AF11B3,0x11C0], // autogen
		[0x11AF11B4,0x11C0], // autogen
		[0x11AF11B5,0x11C0], // autogen
		[0x11AF11B6,0x11C0], // autogen
		[0x11AF11B9,0x11C0], // autogen
		[0x11AF11BF,0x11C0], // autogen
		[0x11AF11FF,0x11C0], // autogen
		[0x11B111A8,0x11B9], // autogen
		[0x11B111AB,0x11AD], // autogen
		[0x11B111AF,0x11C0], // autogen
		[0x11B111B7,0x11BE], // autogen
		[0x11B111B8,0x11BD], // autogen
		[0x11B111BA,0x11C1], // autogen
		[0x11B111BB,0x11B0], // autogen
		[0x11B111BC,0x11AE], // autogen
		[0x11B111C2,0x11A9], // autogen
		[0x11B211A8,0x11B9], // autogen
		[0x11B211AB,0x11AD], // autogen
		[0x11B211AF,0x11C0], // autogen
		[0x11B211B7,0x11BE], // autogen
		[0x11B211B8,0x11BD], // autogen
		[0x11B211BA,0x11C1], // autogen
		[0x11B211BB,0x11B0], // autogen
		[0x11B211BC,0x11AE], // autogen
		[0x11B211C2,0x11A9], // autogen
		[0x11B311A8,0x11B9], // autogen
		[0x11B311AB,0x11AD], // autogen
		[0x11B311AF,0x11C0], // autogen
		[0x11B311B7,0x11BE], // autogen
		[0x11B311B8,0x11BD], // autogen
		[0x11B311BA,0x11C1], // autogen
		[0x11B311BB,0x11B0], // autogen
		[0x11B311BC,0x11AE], // autogen
		[0x11B311C2,0x11A9], // autogen
		[0x11B411A8,0x11B9], // autogen
		[0x11B411AB,0x11AD], // autogen
		[0x11B411AF,0x11C0], // autogen
		[0x11B411B7,0x11BE], // autogen
		[0x11B411B8,0x11BD], // autogen
		[0x11B411BA,0x11C1], // autogen
		[0x11B411BB,0x11B0], // autogen
		[0x11B411BC,0x11AE], // autogen
		[0x11B411C2,0x11A9], // autogen
		[0x11B511A8,0x11B9], // autogen
		[0x11B511AB,0x11AD], // autogen
		[0x11B511AF,0x11C0], // autogen
		[0x11B511B7,0x11BE], // autogen
		[0x11B511B8,0x11BD], // autogen
		[0x11B511BA,0x11C1], // autogen
		[0x11B511BB,0x11B0], // autogen
		[0x11B511BC,0x11AE], // autogen
		[0x11B511C2,0x11A9], // autogen
		[0x11B611A8,0x11B9], // autogen
		[0x11B611AB,0x11AD], // autogen
		[0x11B611AF,0x11C0], // autogen
		[0x11B611B7,0x11BE], // autogen
		[0x11B611B8,0x11BD], // autogen
		[0x11B611BA,0x11C1], // autogen
		[0x11B611BB,0x11B0], // autogen
		[0x11B611BC,0x11AE], // autogen
		[0x11B611C2,0x11A9], // autogen
		[0x11B711AA,0x11BE], // autogen
		[0x11B711AC,0x11BE], // autogen
		[0x11B711B1,0x11BE], // autogen
		[0x11B711B2,0x11BE], // autogen
		[0x11B711B3,0x11BE], // autogen
		[0x11B711B4,0x11BE], // autogen
		[0x11B711B5,0x11BE], // autogen
		[0x11B711B6,0x11BE], // autogen
		[0x11B711B9,0x11BE], // autogen
		[0x11B711BF,0x11BE], // autogen
		[0x11B711FF,0x11BE], // autogen
		[0x11B811AA,0x11BD], // autogen
		[0x11B811AC,0x11BD], // autogen
		[0x11B811B1,0x11BD], // autogen
		[0x11B811B2,0x11BD], // autogen
		[0x11B811B3,0x11BD], // autogen
		[0x11B811B4,0x11BD], // autogen
		[0x11B811B5,0x11BD], // autogen
		[0x11B811B6,0x11BD], // autogen
		[0x11B811B9,0x11BD], // autogen
		[0x11B811BF,0x11BD], // autogen
		[0x11B811FF,0x11BD], // autogen
		[0x11B911A8,0x11B9], // autogen
		[0x11B911AB,0x11AD], // autogen
		[0x11B911AF,0x11C0], // autogen
		[0x11B911B7,0x11BE], // autogen
		[0x11B911B8,0x11BD], // autogen
		[0x11B911BA,0x11C1], // autogen
		[0x11B911BB,0x11B0], // autogen
		[0x11B911BC,0x11AE], // autogen
		[0x11B911C2,0x11A9], // autogen
		[0x11BA11AA,0x11C1], // autogen
		[0x11BA11AC,0x11C1], // autogen
		[0x11BA11B1,0x11C1], // autogen
		[0x11BA11B2,0x11C1], // autogen
		[0x11BA11B3,0x11C1], // autogen
		[0x11BA11B4,0x11C1], // autogen
		[0x11BA11B5,0x11C1], // autogen
		[0x11BA11B6,0x11C1], // autogen
		[0x11BA11B9,0x11C1], // autogen
		[0x11BA11BF,0x11C1], // autogen
		[0x11BA11FF,0x11C1], // autogen
		[0x11BB11AA,0x11B0], // autogen
		[0x11BB11AC,0x11B0], // autogen
		[0x11BB11B1,0x11B0], // autogen
		[0x11BB11B2,0x11B0], // autogen
		[0x11BB11B3,0x11B0], // autogen
		[0x11BB11B4,0x11B0], // autogen
		[0x11BB11B5,0x11B0], // autogen
		[0x11BB11B6,0x11B0], // autogen
		[0x11BB11B9,0x11B0], // autogen
		[0x11BB11BF,0x11B0], // autogen
		[0x11BB11FF,0x11B0], // autogen
		[0x11BC11AA,0x11AE], // autogen
		[0x11BC11AC,0x11AE], // autogen
		[0x11BC11B1,0x11AE], // autogen
		[0x11BC11B2,0x11AE], // autogen
		[0x11BC11B3,0x11AE], // autogen
		[0x11BC11B4,0x11AE], // autogen
		[0x11BC11B5,0x11AE], // autogen
		[0x11BC11B6,0x11AE], // autogen
		[0x11BC11B9,0x11AE], // autogen
		[0x11BC11BF,0x11AE], // autogen
		[0x11BC11FF,0x11AE], // autogen
		[0x11BF11A8,0x11B9], // autogen
		[0x11BF11AB,0x11AD], // autogen
		[0x11BF11AF,0x11C0], // autogen
		[0x11BF11B7,0x11BE], // autogen
		[0x11BF11B8,0x11BD], // autogen
		[0x11BF11BA,0x11C1], // autogen
		[0x11BF11BB,0x11B0], // autogen
		[0x11BF11BC,0x11AE], // autogen
		[0x11BF11C2,0x11A9], // autogen
		[0x11C211AA,0x11A9], // autogen
		[0x11C211AC,0x11A9], // autogen
		[0x11C211B1,0x11A9], // autogen
		[0x11C211B2,0x11A9], // autogen
		[0x11C211B3,0x11A9], // autogen
		[0x11C211B4,0x11A9], // autogen
		[0x11C211B5,0x11A9], // autogen
		[0x11C211B6,0x11A9], // autogen
		[0x11C211B9,0x11A9], // autogen
		[0x11C211BF,0x11A9], // autogen
		[0x11C211FF,0x11A9], // autogen
		/* quick shift jongseong part */
		[0x11FF1161,0x11B1], /* jongseong lieul-mieum */
		[0x11FF1162,0x11B6], /* jongseong lieul-hieuh */
		[0x11FF1163,0x11B3], /* jongseong lieul-siot additional */
		[0x11FF1165,0x11B9], /* jongseong bieup-sieus */
		[0x11FF1166,0x11BF], /* jongseong kieuk */
		[0x11FF1167,0x11AC], /* jongseong nieun-jieuj */
		[0x11FF1169,0x11AA], /* jongseong gieug-sieus */
		[0x11FF116D,0x11B5], /* jongseong lieul-pieup */
		[0x11FF1172,0x11B4], /* jongseong lieul-tieut */
		[0x11FF1175,0x11B2], /* jongseong lieul-bieup */
		/* autogen */
		[0x11FF11A8,0x11B9], // autogen
		[0x11FF11AB,0x11AD], // autogen
		[0x11FF11AF,0x11C0], // autogen
		[0x11FF11B7,0x11BE], // autogen
		[0x11FF11B8,0x11BD], // autogen
		[0x11FF11BA,0x11C1], // autogen
		[0x11FF11BB,0x11B0], // autogen
		[0x11FF11BC,0x11AE], // autogen
		[0x11FF11C2,0x11A9] // autogen
];

	K3_sun2014_combination_table = hangeul_combination_table_default.slice(0);
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

	K3_Sin3_P2_combination_table = hangeul_combination_table_default.slice(0);
	K3_Sin3_P2_combination_table.unshift(
		[0x119E1175,0x11A1], /* jungseong araea + i = araea-i */
		[0x119E119E,0x11A2]  /* jungseong araea + araea = ssangaraea */
	);

	K3_Sin3_P2_yeshangeul_combination_table = hangeul_combination_table_full.slice(0);
	K3_Sin3_P2_yeshangeul_combination_table.unshift(
		[0x11001109,0x1140], /* choseong gieug + siues = ssanggieug */
		[0x1100110B,0x114C], /* choseong gieug + ieung = yesieung */
		[0x11001112,0x1159], /* choseong gieug + hiueh = yeolinhieuh */
		[0x11591112,0xA97C], /* choseong yeolinhieuh + hiueh = ssangyeolinhieuh */
		[0x11411109,0x1146], /* choseong ieung-gieug + sieus = ieung-yeolinsieus */
		[0x110C1109,0x113C], /* choseong jieuj + siues = ap-sieus */
		[0x113C1109,0x113D], /* choseong ap-sieus + sieus = ssang-ap-sieus */
		[0x110E1109,0x113E], /* choseong chieuch + siues = dwis-sieus */
		[0x113E1109,0x113F], /* choseong dwis-sieus + sieus = ssang-dwis-sieus */
		[0x110C1103,0x114E], /* choseong jieuj + dieug = ap-jieuj */
		[0x110D1103,0x114F], /* choseong ssangjieuj + dieud = ssang-ap-jieuj */
		[0x110C1100,0x1150], /* choseong jieuj + gieug = dwis-jieuj */
		[0x110D1100,0x1151], /* choseong ssangjieuj + gieug = ssang-dwis-jieuj */
		[0x110E1103,0x1154], /* choseong chieuch + dieug = ap-chieuch */
		[0x110E1100,0x1155], /* choseong chieuch + gieug = dwis-chieuch */
		[0x11BA11C1,0x11EB], /* jongseong sieus + pieup = yeolinsieus */
		[0x110A11C1,0xD7EE], /* jongseong ssangsieus + pieup = sieus-yeolinsieus */
		[0x11C711C1,0x11C8], /* jongseong nieun-sieus + pieup = nieun-yeolinsieus */
		[0x11B311C1,0x11D7], /* jongseong lieul-sieus + pieup = lieul-yeolinsieus */
		[0x11DD11C1,0x11DF], /* jongseong mieum-sieus + pieup = mieum-yeolinsieus */
		[0x11BB11C1,0xD7EE], /* jongseong ssangsiues + pieup = sieus-yeolinsieus */
		[0x11F111C1,0x11F2], /* jongseong yesieung-sieus + pieup = yesieung-yeolinsieus */
		[0x11BC11C1,0x11F0], /* jongseong ieung + pieup = yesieung */
		[0x11F011C1,0x11EE], /* jongseong yesieung + pieup = ssangyesieung */
		[0xD7DD11C1,0xD7DB], /* jongseong yeolinlieul + pieup = lieul-yesieung */
		[0x11C211C1,0x11F9], /* jongseong hieuh + pieup = yeolinhieuh */
		[0x11B611C1,0x11D9], /* jongseong lieul-hieuh + pieup = lieul-yeolinhieuh */
		
		[0x11BC11A8,0x11EC], /* jongseong ieung + gieug = yesieung-gieug */
		[0x11BC11A9,0x11EC], /* jongseong ieung + ssanggieug = yesieung-ssanggieug */
		[0x11BC11B7,0xD7F5], /* jongseong ieung + mieum = yesieung-mieum */
		[0x11BC11BA,0x11F1], /* jongseong ieung + sieus = yesieung-sieus */
		[0x11BC11BC,0x11EE], /* jongseong ieung + ieung = ssangyesieung */
		[0x11BC11BF,0x11EF], /* jongseong ieung + ieung = ssangyesieung */
		[0x11BC11C2,0xD7F6]  /* jongseong ieung + ieung = ssangyesieung */
	);

	moachigi_combination_table_default = [
		{phonemes: [0x1100,0x1100], char: 0x1101}, /* choseong gieug + gieug = ssanggieug */
		{phonemes: [0x1103,0x1103], char: 0x1104}, /* choseong dieud + dieud = ssangdieud */
		{phonemes: [0x1107,0x1107], char: 0x1108}, /* choseong bieub + bieub = ssangbieub */
		{phonemes: [0x1109,0x1109], char: 0x110A}, /* choseong sieus + sieus = ssangsieus */
		{phonemes: [0x110C,0x110C], char: 0x110D}, /* choseong jieuj + jieuj = ssangjieuj */
		{phonemes: [0x1169,0x1161], char: 0x116A}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1162], char: 0x116B}, /* jungseong o   + ae  = wae */
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x119E,0x1175], char: 0x11A1}, /* jungseong araea + i = araea-i */
		{phonemes: [0x119E,0x119E], char: 0x11A2}, /* jungseong araea + araea = ssangaraea */
		{phonemes: [0x116E,0x1165], char: 0x116F}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116E,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116E,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x11A8,0x11A8], char: 0x11A9}, /* jongseong gieug + gieug = gieug-gieus */
		{phonemes: [0x11A8,0x11BA], char: 0x11AA}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11AB,0x11BD], char: 0x11AC}, /* jongseong nieun + jieuj = nieun-jieuj */
		{phonemes: [0x11AB,0x11C2], char: 0x11AD}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11AF,0x11A8], char: 0x11B0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11AF,0x11B7], char: 0x11B1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11AF,0x11B8], char: 0x11B2}, /* jongseong lieul + bieub = lieul-bieub */
		{phonemes: [0x11AF,0x11BA], char: 0x11B3}, /* jongseong lieul + sieus = lieul-sieus */
		{phonemes: [0x11AF,0x11C0], char: 0x11B4}, /* jongseong lieul + tieut = lieul-tieut */
		{phonemes: [0x11AF,0x11C1], char: 0x11B5}, /* jongseong lieul + pieup = lieul-pieup */
		{phonemes: [0x11AF,0x11C2], char: 0x11B6}, /* jongseong lieul + hieuh = lieul-hieuh */
		{phonemes: [0x11B8,0x11BA], char: 0x11B9}, /* jongseong bieub + sieus = bieub-sieus */
		{phonemes: [0x11BA,0x11BA], char: 0x11BB}  /* jongseong sieus + sieus = ssangsieus */
	];

	K3_Anmatae_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116B}, /* jungseong o + a + i = wae */
		{phonemes: [0x116E,0x1165,0x1175], char: 0x1170}, /* jungseong u + eo + i = we */
		{phonemes: [0x11AF,0x11C2,0x11AE], char: 0x11B4}, /* jongseong lieul + hieuh + dieud = lieul-tieut */
		{phonemes: [0x11AF,0x11C2,0x11B8], char: 0x11B5}, /* jongseong lieul + hieuh + bieub = lieul-pieup */
		{phonemes: [0x1100,0x1103], char: 0x1104}, /* choseong gieug + dieud = ssangdieud */
		{phonemes: [0x1100,0x110B], char: 0x1101}, /* choseong gieug + ieung = ssanggieug */
		{phonemes: [0x1100,0x1112], char: 0x110F}, /* choseong gieug + hieuh = kieuk */
		{phonemes: [0x1102,0x1109], char: 0x110A}, /* choseong nieun + sieus = ssangsieus */
		{phonemes: [0x1103,0x110C], char: 0x110D}, /* choseong dieud + jieuj = ssangjieuj */
		{phonemes: [0x1103,0x1112], char: 0x1110}, /* choseong dieud + hieuh = tieut */
		{phonemes: [0x1107,0x110C], char: 0x1108}, /* choseong bieub + jieuj = ssangbieub */
		{phonemes: [0x1107,0x1112], char: 0x1111}, /* choseong bieub + hieuh = pieup */
		{phonemes: [0x110C,0x1112], char: 0x110E}, /* choseong jieuj + hieuh = chieuch */
		{phonemes: [0x1161,0x1175], char: 0x1162}, /* jungseong a   + i   = ae */
		{phonemes: [0x1163,0x1175], char: 0x1164}, /* jungseong ya  + i   = yae  */
		{phonemes: [0x1165,0x116E], char: 0x116F}, /* jungseong eo  + u   = weo */
		{phonemes: [0x1165,0x1175], char: 0x1166}, /* jungseong eo  + i   = e */
		{phonemes: [0x1166,0x116E], char: 0x1170}, /* jungseong e   + u   = we */
		{phonemes: [0x1167,0x1175], char: 0x1168}, /* jungseong yeo + i   = ye */
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong wo  + i   = we */
		{phonemes: [0x11A8,0x11BC], char: 0x11A9}, /* jongseong gieug + ieung = ssanggieug */
		{phonemes: [0x11A8,0x11C2], char: 0x11BF}, /* jongseong gieug + hieuh = kieuk */
		{phonemes: [0x11AB,0x11BA], char: 0x11BB}, /* jongseong nieun + sieus = ssangsieus */
		{phonemes: [0x11AE,0x11AF], char: 0x11ce}, /* jongseong dieud + lieul = lieul-dieud */
		{phonemes: [0x11AE,0x11C2], char: 0x11C0}, /* jongseong dieud + hieuh = tieut */
		{phonemes: [0x11B2,0x11C2], char: 0x11B5}, /* jongseong lieul-bieub + hieuh = lieul-pieup */
		{phonemes: [0x11B6,0x11AE], char: 0x11B4}, /* jongseong lieul-hieuh + dieud = lieul-tieut */
		{phonemes: [0x11B6,0x11B8], char: 0x11B5}, /* jongseong lieul-hieuh + bieub = lieul-pieup */
		{phonemes: [0x11B8,0x11C2], char: 0x11C1}, /* jongseong bieub + hieuh = pieup */
		{phonemes: [0x11BD,0x11C2], char: 0x11BE}, /* jongseong jieuj + hieuh = chieuch */
		{phonemes: [0x11CE,0x11C2], char: 0x11B4}  /* jongseong lieul-dieud + hieuh = lieul-tieut */
	].concat(moachigi_combination_table_default);

	K3_Semoe_2018_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116B}, /* jungseong o + a + i = wae */
		{phonemes: [0x11A8,0x11b7,0x11BB], char: 0x11AA}, /* jongseong gieug + mieum + ssangsieus = gieug-sieus */
		{phonemes: [0x11AF,0x11B8,0x11BB], char: 0x11C0}, /* jongseong lieul + bieub + ssangsieus = tieut */
		{phonemes: [0x11AF,0x11BA,0x11BB], char: 0x11A9}, /* jongseong lieul + sieus + ssangsieus = ssangegieug */
		{phonemes: [0x11B8,0x11BA,0x11BB], char: 0x11B1}, /* jongseong bieub + sieus + ssangsieus = lieul-mieum */
		{phonemes: [0x110B,0x1100], char: 0x1101}, /* choseong ieung + gieug = ssanggieug */
		{phonemes: [0x110B,0x1103], char: 0x1104}, /* choseong ieung + dieud = ssangdieud */
		{phonemes: [0x110B,0x1107], char: 0x1108}, /* choseong ieung + bieub = ssangbieub */
		{phonemes: [0x110B,0x1109], char: 0x110A}, /* choseong ieung + sieus = ssangsieus */
		{phonemes: [0x110B,0x110C], char: 0x110D}, /* choseong ieung + jieuj = ssangjieuj */
		{phonemes: [0x1112,0x1100], char: 0x110F}, /* choseong hieuh + gieug = kieuk */
		{phonemes: [0x1112,0x1103], char: 0x1110}, /* choseong hieuh + dieud = tieut */
		{phonemes: [0x1112,0x1107], char: 0x1111}, /* choseong hieuh + bieub = pieup */
		{phonemes: [0x1112,0x110C], char: 0x110E}, /* choseong hieuh + jieuj = chieuch */
		{phonemes: [0x1161,0x1175], char: 0x1162}, /* jungseong a   + i   = ae */
		{phonemes: [0x1161,0x1165], char: 0x116D}, /* jungseong a   + eo  = yo */
		{phonemes: [0x1165,0x1161], char: 0x116D}, /* jungseong eo  + a   = yo */
		{phonemes: [0x1166,0x1175], char: 0x1171}, /* jungseong e   + i   = wi */
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1165], char: 0x116F}, /* jungseong o   + eo  = wo */
		{phonemes: [0x1169,0x1169], char: 0x116D}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116E], char: 0x1172}, /* jungseong o   + u   = yu */
		{phonemes: [0x1169,0x1173], char: 0x1163}, /* jungseong o   + eu  = ya */		
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x11AB,0x11AB], char: 0x11AD}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11AB,0x11AF], char: 0x11AC}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11AB,0x11B7], char: 0x11C0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11AF,0x11BC], char: 0x11A8}, /* jongseong lieul + ieung = gieug */
		{phonemes: [0x11B7,0x11A8], char: 0x11B0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11BB,0x11A8], char: 0x11BF}, /* jongseong ssangsieus + gieug = kieuk */
		{phonemes: [0x11BB,0x11AB], char: 0x11C2}, /* jongseong ssangsieus + nieun = hieuh */
		{phonemes: [0x11BB,0x11AF], char: 0x11BD}, /* jongseong ssangsieus + lieul = jieuj */
		{phonemes: [0x11BB,0x11B7], char: 0x11AE}, /* jongseong ssangsieus + mieum = dieud */
		{phonemes: [0x11BB,0x11B8], char: 0x11C1}, /* jongseong ssangsieus + bieub = pieup */
		{phonemes: [0x11BB,0x11BA], char: 0x11BE}, /* jongseong ssangsieus + sieus = chieuch */
		{phonemes: [0x11BB,0x11BC], char: 0x11B6}, /* jongseong ssangsieus + ieung = lieul-hieuh */
		{phonemes: [0x11BC,0x11A8], char: 0x11A9}, /* jongseong ieung + gieug = ssangegieug */
		{phonemes: [0x11BC,0x11AB], char: 0x11AD}, /* jongseong ieung + nieun = nieun-hieuh */
		{phonemes: [0x11BC,0x11B7], char: 0x11B4}, /* jongseong ieung + mieum = lieul-tikeut */
		{phonemes: [0x11BC,0x11B8], char: 0x11B5}, /* jongseong ieung + bieub = lieul-pieup */
		{phonemes: [0x11BC,0x11BA], char: 0x11BB}, /* jongseong ieung + sieus = ssangsieus */
		{phonemes: [0x11BC,0x11BB], char: 0x11B6}, /* jongseong ieung + ssangsieus = lieul-hieuh */
		{phonemes: [0x11C2,0x11A8], char: 0x11BF}, /* jongseong hieuh + gieug = kieuk */
		{phonemes: [0x11C2,0x11AE], char: 0x11C0}, /* jongseong hieuh + dieud = tieut */
		{phonemes: [0x11C2,0x11B8], char: 0x11C1}  /* jongseong hieuh + bieub = pieup */
	].concat(moachigi_combination_table_default);

	K3_Semoe_2018_moachigi_multikey_abbreviation_table = [
		{keys: ['J','K'], chars: [-1]}, /* 기호 확장 상태 ① */
		{keys: ['J','L'], chars: [-2]}, /* 기호 확장 상태 ② */
		{keys: ['J',':'], chars: [-3]}, /* 기호 확장 상태 ③ */
		{keys: ['F','K'], chars: [0xAC00,0x3F,0x20]}, /* 가?  */
		{keys: ['K','S'], chars: [0xAD70,0x2E,0x20]}, /* 군.  */
		{keys: ['?','F'], chars: [0xAE4C,0x3F,0x20]}, /* 까?  */
		{keys: ['F','U'], chars: [0xB098,0x3F,0x20]}, /* 나?  */
		{keys: ['G','U'], chars: [0xB0D0,0x3F,0x20]}, /* 냐?  */
		{keys: ['C','U'], chars: [0xB124,0x2E,0x20]}, /* 네.  */
		{keys: ['D','U'], chars: [0xB2C8,0x3F,0x20]}, /* 니?  */
		{keys: ['F','I'], chars: [0xB2E4,0x2E,0x20]}, /* 다.  */
		{keys: ['F','M'], chars: [0xB77C,0x2E,0x20]}, /* 라.  */
		{keys: ['>','G'], chars: [0xC57C,0x3F,0x20]}, /* 야?  */
		{keys: ['G','V'], chars: [0xC57C,0x3F,0x20]}, /* 야?  */
		{keys: ['>','V'], chars: [0xC694,0x2E,0x20]}, /* 요.  */
		{keys: ['F','R'], chars: [0xC694,0x3F,0x20]}, /* 요?  */
		{keys: ['F','L'], chars: [0xC790,0x2E,0x20]}, /* 자.  */
		{keys: ['L','V'], chars: [0xC8E0,0x2E,0x20]}, /* 죠.  */
		{keys: ['D','L'], chars: [0xC9C0,0x2E,0x20]}, /* 지.  */
		{keys: ['k','u'], chars: [0xADF8,0xB7EC,0xB098]}, /* 그러나 */
		{keys: ['u','w'], chars: [0x11B8,0xB2C8,0xB2E4]}, /* ㅂ니다 */
		{keys: [',','u','w'], chars: [0x11B8,0xB2C8,0xB2E4,0x2E,0x20]}, /* ㅂ니다. */
		{keys: ['j','w'], chars: [0xC785,0xB2C8,0xB2E4,0x2E,0x20]}, /* 입니다. */
		{keys: ['h','w'], chars: [0xD569,0xB2C8,0xB2E4,0x2E,0x20]}, /* 합니다. */
		{keys: ['h','l','s'], chars: [0xD558,0xC9C0,0xB9CC,0x20]}, /* 하지만  */
		{keys: ['m','n'], chars: [0x21,0x20]}, /* !  */
		{keys: ['i','u'], chars: [0x2C,0x20]}, /* ,  */
		{keys: ['i','o'], chars: [0x2E,0x20]}, /* .  */
		{keys: ['u','y'], chars: [0x3F,0x20]}, /* ?  */
		/* 첫소리 ㄱ 조합 */
		{keys: ['k','x'], chars: [0xAD6D,0xAC00]}, /* 국가 */
		{keys: ['k','s','x'], chars: [0xAD6D,0xBBFC]}, /* 국민 */
		{keys: ['e','k','s'], chars: [0xAC74,0xBB3C]}, /* 건물 */
		{keys: ['a','k','s'], chars: [0xACF5,0xAC04]}, /* 공간 */
		{keys: ['e','k'], chars: [0xACB0,0xACFC]}, /* 결과 */
		{keys: ['k','x','z'], chars: [0xACB0,0xAD6D]}, /* 결국 */
		{keys: ['e','k','x'], chars: [0xACB0,0xAD6D]}, /* 결국 */
		{keys: ['k','z'], chars: [0xAC1C,0xB150]}, /* 개념 */
		{keys: ['c','g','k'], chars: [0xACC4,0xAE09]}, /* 계급 */
		{keys: ['k','q'], chars: [0xADF8,0xAC83]}, /* 그것 */
		{keys: ['a','k'], chars: [0xAD11,0xACE0]}, /* 광고 */
		{keys: [';','j','k','w'], chars: [0xAE4A,0xC774]}, /* 깊이 */
		{keys: ['g','k','t'], chars: [0xADF8,0xB140]}, /* 그녀 */
		{keys: ['b','f','k'], chars: [0xAD6C,0xB098]}, /* 구나 */
		{keys: ['b','f','k','x'], chars: [0xAD6D,0xB0B4]}, /* 국내 */
		{keys: ['g','k','v'], chars: [0xADF8,0xACF3]}, /* 그곳 */
		{keys: ['c','k','t'], chars: [0xACBD,0xACC4]}, /* 경계 */
		{keys: ['c','d','k','v'], chars: [0xAE30,0xACC4]}, /* 기계 */
		{keys: ['.','c','d','k'], chars: [0xAE30,0xACC4]}, /* 기계 */
		{keys: ['f','g','k','s'], chars: [0xADF8,0xB9CC]}, /* 그만 */
		{keys: ['j','k','x'], chars: [0xAD50,0xC721]}, /* 교육 */
		{keys: ['j','k','s','x'], chars: [0xC57D,0xAC04]}, /* 약간 */
		{keys: ['j','k','s'], chars: [0xC778,0xAC04]}, /* 인간 */
		{keys: ['a','j','k','s'], chars: [0xACF5,0xC5F0]}, /* 공연 */
		{keys: ['e','j','k'], chars: [0xC5BC,0xAD74]}, /* 얼굴 */
		{keys: ['a','j','k','w'], chars: [0xACF5,0xC5C5]}, /* 공업 */
		{keys: ['j','k','w'], chars: [0xAE30,0xC5C5]}, /* 기업 */
		{keys: ['j','k','q'], chars: [0xC774,0xAC83]}, /* 이것 */
		{keys: ['a','j','k'], chars: [0xACBD,0xC6B0]}, /* 경우 */
		{keys: ['j','k','s','z'], chars: [0xAC19,0xC774,0x20]}, /* 같이  */
		{keys: ['b','j','k','t'], chars: [0xC5F0,0xAD6C]}, /* 연구 */
		{keys: ['b','e','j','k','t'], chars: [0xACA8,0xC6B8]}, /* 겨울 */
		{keys: ['g','j','k','t'], chars: [0xC5F0,0xADF9]}, /* 연극 */
		{keys: ['g','j','k','s','t'], chars: [0xC758,0xACAC]}, /* 의견 */
		{keys: ['b','f','j','k'], chars: [0xC694,0xAD6C]}, /* 요구 */
		{keys: ['b','e','f','j','k'], chars: [0xAC1C,0xC6D4]}, /* 개월 */
		{keys: ['c','j','k','r'], chars: [0xAED8,0xC11C,0x20]}, /* 께서  */
		{keys: ['f','g','j','k'], chars: [0xC744,0xAE4C,0x3F,0x20]}, /* 을까?  */
		{keys: ['e','f','g','j','k'], chars: [0xAC00,0xC744]}, /* 가을 */
		{keys: ['f','g','j','k','z'], chars: [0xAC00,0xB054]}, /* 가끔  */
		{keys: ['g','j','k','r'], chars: [0xAC70,0xC758,0x20]}, /* 거의  */
		{keys: ['k','l','x'], chars: [0xC911,0xAD6D]}, /* 중국 */
		{keys: ['k','l','s'], chars: [0xCE5C,0xAD6C]}, /* 친구 */
		{keys: ['a','k','l','s'], chars: [0xAD1C,0xCC2E]}, /* 괜찮 */
		{keys: ['e','k','l'], chars: [0xACBD,0xCC30]}, /* 경찰 */
		{keys: ['k','l','z'], chars: [0xC9C0,0xAE08]}, /* 지금 */
		{keys: ['k','l','w'], chars: [0xAC11,0xC790,0xAE30,0x20]}, /* 갑자기  */
		{keys: ['k','l','q'], chars: [0xAC70,0xC9D3]}, /* 거짓 */
		{keys: ['a','k','l'], chars: [0xAC00,0xC7A5,0x20]}, /* 가장  */
		{keys: ['f','k','l'], chars: [0xC790,0xAE30]}, /* 자기 */
		{keys: ['f','k','l','x'], chars: [0xC791,0xAC00]}, /* 작가 */
		{keys: ['f','k','l','r','z'], chars: [0xAC10,0xC815]}, /* 감정 */
		{keys: ['a','f','k','l','s'], chars: [0xC7A5,0xAD00]}, /* 장관 */
		{keys: ['d','f','k','l'], chars: [0xAC00,0xC9C0]}, /* 가지 */
		{keys: ['a','d','f','k','l'], chars: [0xACBD,0xC7C1]}, /* 경쟁 */
		{keys: ['k','l','r','x'], chars: [0xAC71,0xC815]}, /* 걱정 */
		{keys: ['k','l','r','s'], chars: [0xC870,0xAC74]}, /* 조건 */
		{keys: ['k','l','r','z'], chars: [0xAC80,0xCC30]}, /* 검찰 */
		{keys: ['a','k','l','r'], chars: [0xAC00,0xC815]}, /* 가정 */
		{keys: ['c','k','l'], chars: [0xAD6C,0xCCB4,0xC801]}, /* 구체적 */
		{keys: ['k','l','t'], chars: [0xAC00,0xC838]}, /* 가져 */
		{keys: ['e','k','l','t'], chars: [0xACB0,0xC815]}, /* 결정 */
		{keys: ['a','k','l','t'], chars: [0xACBD,0xC81C]}, /* 경제 */
		{keys: ['c','k','l','v'], chars: [0xCCB4,0xACC4]}, /* 체계 */
		{keys: ['k','l','v'], chars: [0xCD5C,0xACE0]}, /* 최고 */
		{keys: ['k','l','v','x'], chars: [0xAC00,0xC871]}, /* 가족 */
		{keys: ['k','l','s','v'], chars: [0xAE30,0xC874]}, /* 기존 */
		{keys: ['a','k','l','v'], chars: [0xAC01,0xC885]}, /* 각종 */
		{keys: ['.','f','k','l'], chars: [0xACFC,0xC815]}, /* 과정 */
		{keys: ['f','k','l','v'], chars: [0xACFC,0xC815]}, /* 과정 */
		{keys: ['.','f','k','l','s'], chars: [0xAD00,0xC810]}, /* 관점 */
		{keys: ['f','k','l','s','v'], chars: [0xAD00,0xC810]}, /* 관점 */
		{keys: ['.','a','f','k','l'], chars: [0xAC15,0xC870]}, /* 강조 */
		{keys: ['a','f','k','l','v'], chars: [0xAC15,0xC870]}, /* 강조 */
		{keys: ['d','k','l','s','v'], chars: [0xCD5C,0xADFC,0x20]}, /* 최근  */
		{keys: ['.','d','k','l','s'], chars: [0xCD5C,0xADFC,0x20]}, /* 최근  */
		{keys: ['.','k','l','v'], chars: [0xC885,0xAD50]}, /* 종교 */
		{keys: ['f','k','l','r'], chars: [0xC885,0xAD50]}, /* 종교 */
		{keys: ['a','f','k','l','r'], chars: [0xAD50,0xC7A5]}, /* 교장 */
		{keys: ['.','a','k','l','v'], chars: [0xAD50,0xC7A5]}, /* 교장 */
		{keys: ['b','k','l'], chars: [0xAD6C,0xC870]}, /* 구조 */
		{keys: ['b','k','l','r'], chars: [0xC804,0xAD6D]}, /* 전국 */
		{keys: ['b','k','l','s'], chars: [0xAE30,0xC900]}, /* 기준 */
		{keys: ['b','k','l','r','s'], chars: [0xC815,0xAD8C]}, /* 정권 */
		{keys: ['.','k','l','r','s'], chars: [0xC815,0xAD8C]}, /* 정권 */
		{keys: ['b','c','k','l','x'], chars: [0xAD6D,0xC81C]}, /* 국제 */
		{keys: ['d','k','l','v','x'], chars: [0xADC0,0xC871]}, /* 귀족 */
		{keys: ['.','d','k','l','x'], chars: [0xADC0,0xC871]}, /* 귀족 */
		{keys: ['b','k','l','v'], chars: [0xADDC,0xC815]}, /* 규정 */
		{keys: ['d','g','k','l'], chars: [0xADF8,0xB807,0xC9C0]}, /* 그렇지 */
		{keys: ['g','k','l','s'], chars: [0xADFC,0xCC98]}, /* 근처 */
		{keys: ['g','k','l','z'], chars: [0xC790,0xAE08]}, /* 자금 */
		{keys: ['d','k','l'], chars: [0xAE4C,0xC9C0,0x20]}, /* 까지 */
		{keys: ['c','f','k','l'], chars: [0xACFC,0xC81C]}, /* 과제 */
		/* 첫소리 ㄴ 조합 */
		{keys: ['e','u'], chars: [0xADF8,0xB0A0]}, /* 그날 */
		{keys: ['u','z'], chars: [0xB0A8,0xC131]}, /* 남성 */
		{keys: ['b','f','u'], chars: [0xB204,0xB098]}, /* 누나 */
		{keys: ['g','u','v'], chars: [0xB290,0xB0D0,0x3F,0x20]}, /* 느냐?  */
		{keys: ['i','s','u'], chars: [0xB294,0xB370]}, /* 는데 */
		{keys: ['a','i','u'], chars: [0xB178,0xB3D9]}, /* 노동 */
		{keys: ['f','i','u'], chars: [0xB098,0xD0C0]}, /* 나타 */
		{keys: ['i','r','u'], chars: [0xB354,0xB2C8,0x20]}, /* 더니  */
		{keys: ['i','s','t','u'], chars: [0xB144,0xB300]}, /* 년대 */
		{keys: ['i','u','v'], chars: [0xB610,0xB294,0x20]}, /* 또는 */
		{keys: ['a','i','u','v'], chars: [0xB3D9,0xB124]}, /* 동네 */
		{keys: ['d','i','u'], chars: [0xB2C8,0xB2E4,0x2E,0x20]}, /* 니다.  */
		/* 첫소리 ㄷ 조합 */
		{keys: ['i','x'], chars: [0xB300,0xD559]}, /* 대학 */
		{keys: ['i','s'], chars: [0xB2E4,0xB978,0x20]}, /* 다른  */
		{keys: ['i','w'], chars: [0xB300,0xB2F5]}, /* 대답 */
		{keys: ['i','q'], chars: [0xB4EF,0xC774,0x20]}, /* 듯이  */
		{keys: ['a','i'], chars: [0xB2E4,0xC591]}, /* 다양 */
		{keys: ['b','f','i'], chars: [0xBB34,0xB300]}, /* 무대 */
		{keys: ['c','f','i','s'], chars: [0xB2E8,0xCCB4]}, /* 단체 */
		{keys: ['f','g','i'], chars: [0xB9CC,0xB4E4]}, /* 만들 */
		{keys: ['i','k','x'], chars: [0xAE30,0xB3C5,0xAD50]}, /* 기독교 */
		{keys: ['i','k','s'], chars: [0xAC00,0xC6B4,0xB370]}, /* 가운데 */
		{keys: ['i','k','x','z'], chars: [0xAE4C,0xB2ED]}, /* 까닭 */
		{keys: ['e','i','k','x'], chars: [0xAE4C,0xB2ED]}, /* 까닭 */
		{keys: ['i','k','z'], chars: [0xAC10,0xB3C5]}, /* 감독 */
		{keys: ['a','i','k'], chars: [0xACF5,0xB3D9]}, /* 공동 */
		{keys: ['f','i','k'], chars: [0xB2E4,0xAC00]}, /* 다가 */
		{keys: ['c','i','k','s'], chars: [0xB2E8,0xACC4]}, /* 단계 */
		{keys: ['e','i','k'], chars: [0xAC08,0xB4F1]}, /* 갈등 */
		{keys: ['f','g','i','k'], chars: [0xADF8,0xB54C]}, /* 그때 */
		{keys: ['g','i','k','r','s'], chars: [0xAC70,0xB4E0]}, /* 거든 */
		{keys: ['i','k','r','s'], chars: [0xB358,0xAC00,0x3F,0x20]}, /* 던가?  */
		{keys: ['c','i','k','v'], chars: [0xACC4,0xB2E8]}, /* 계단 */
		{keys: ['d','f','i','k','v'], chars: [0xACE0,0xB300]}, /* 고대 */
		{keys: ['.','d','f','i','k'], chars: [0xACE0,0xB300]}, /* 고대 */
		{keys: ['a','i','k','v'], chars: [0xACE0,0xB3D9]}, /* 고통 */
		{keys: ['f','i','k','v'], chars: [0xB2E4,0xACE0]}, /* 다고 */
		{keys: ['.','f','i','k'], chars: [0xB2E4,0xACE0]}, /* 다고 */
		{keys: ['d','i','k','v'], chars: [0xAE30,0xB3C4]}, /* 기도 */
		{keys: ['.','d','i','k'], chars: [0xAE30,0xB3C4]}, /* 기도 */
		{keys: ['g','i','k'], chars: [0xADF8,0xB300]}, /* 그대 */
		{keys: ['g','i','k','s'], chars: [0xADFC,0xB370,0x20]}, /* 근데 */
		{keys: ['d','i','k'], chars: [0xAE30,0xB2E4]}, /* 기다 */
		{keys: ['i','j','x'], chars: [0xB354,0xC6B1,0x20]}, /* 더욱  */
		{keys: ['i','j','s'], chars: [0xB54C,0xBB38]}, /* 때문 */
		{keys: ['a','i','j','s'], chars: [0xB3D9,0xC548]}, /* 동안 */
		{keys: ['e','i','j','x'], chars: [0xB3C5,0xC77C]}, /* 독일 */
		{keys: ['i','j','x','z'], chars: [0xB3C5,0xC77C]}, /* 독일 */
		{keys: ['i','z'], chars: [0xB2E4,0xC74C]}, /* 다음 */
		{keys: ['a','i','j'], chars: [0xC6B4,0xB3D9]}, /* 운동 */
		{keys: [';','i','j','s'], chars: [0xC5B4,0xB5BB]}, /* 어떻 */
		{keys: ['c','g','i','j'], chars: [0xC740,0xB370]}, /* 은데 */
		{keys: ['c','f','i','j'], chars: [0xC5D0,0xB2E4,0x20]}, /* 에다  */
		{keys: ['f','g','j'], chars: [0xC544,0xB4E4]}, /* 아들 */
		{keys: ['i','m','x'], chars: [0xB3C4,0xB85D,0x20]}, /* 도록  */
		{keys: ['e','i','m'], chars: [0xB2EC,0xB9AC]}, /* 달리 */
		{keys: ['f','i','m'], chars: [0xB530,0xB77C]}, /* 따라 */
		{keys: ['e','f','i','m'], chars: [0xB2EC,0xB77C]}, /* 달라 */
		{keys: ['d','f','i','m'], chars: [0xB300,0xB85C,0x20]}, /* 대로  */
		{keys: ['i','m','r'], chars: [0xB530,0xB77C,0xC11C,0x20]}, /* 따라서 */
		{keys: ['c','i','m'], chars: [0xD154,0xB808,0xBE44,0xC804]}, /* 텔레비전 */
		{keys: ['f','i','m','v'], chars: [0xB77C,0xB3C4,0x20]}, /* 라도  */
		{keys: ['f','i','m','r'], chars: [0xB354,0xB77C,0x2E,0x20]}, /* 더라.  */
		{keys: ['g','i','m'], chars: [0xADF8,0xB300,0xB85C,0x20]}, /* 그대로  */
		{keys: ['d','i','m'], chars: [0xB2E4,0xB9AC]}, /* 다리 */
		{keys: ['g','i','m','r'], chars: [0xB4DC,0xB7EC]}, /* 드러 */
		{keys: ['i','n','x'], chars: [0xC18D,0xB3C4]}, /* 속도 */
		{keys: ['i','n','s'], chars: [0xB2F9,0xC2E0]}, /* 당신 */
		{keys: ['a','i','n'], chars: [0xB2F9,0xC2DC]}, /* 당시 */
		{keys: ['f','i','n'], chars: [0xC2DC,0xB2E4,0x2E,0x20]}, /* 시다.  */
		{keys: ['a','f','i','n'], chars: [0xB300,0xC0C1]}, /* 대상 */
		{keys: ['d','f','i','n'], chars: [0xB2E4,0xC2DC,0x20]}, /* 다시  */
		{keys: ['a','d','f','i','n'], chars: [0xB3D9,0xC0DD]}, /* 동생 */
		{keys: ['i','n','v'], chars: [0xB3C4,0xC2DC]}, /* 도시 */
		{keys: ['a','i','n','v'], chars: [0xB3D9,0xC2DC]}, /* 동시 */
		{keys: ['b','i','n'], chars: [0xC218,0xB3C4]}, /* 수도 */
		{keys: ['d','i','n'], chars: [0xC2DC,0xB300]}, /* 시대 */
		{keys: ['d','i','n','s'], chars: [0xB300,0xC2E0]}, /* 대신 */
		{keys: ['d','f','i','l','x'], chars: [0xB300,0xCC45]}, /* 대책 */
		{keys: ['i','l','s'], chars: [0xB4E0,0xC9C0,0x20]}, /* 든지  */
		{keys: ['i','l','w'], chars: [0xC9D1,0xB2E8]}, /* 집단 */
		{keys: ['f','i','l','v'], chars: [0xCCAD,0xC640,0xB300]}, /* 청와대 */
		{keys: ['.','f','i','l'], chars: [0xCCAD,0xC640,0xB300]}, /* 청와대 */
		{keys: ['f','i','l'], chars: [0xC790,0xB3D9,0xCC28]}, /* 자동차 */
		{keys: ['f','i','l','s'], chars: [0xB2E8,0xC9C0]}, /* 단지 */
		{keys: ['d','f','i','l'], chars: [0xC81C,0xB300,0xB85C,0x20]}, /* 제대로  */
		{keys: ['i','l','r','s'], chars: [0xC804,0xB3D9]}, /* 전통 */
		{keys: ['a','i','l','r'], chars: [0xC815,0xB2F9]}, /* 정당 */
		{keys: ['c','i','l'], chars: [0xC81C,0xB3C4]}, /* 제도 */
		{keys: ['i','l','v'], chars: [0xD1A0,0xC9C0]}, /* 토지 */
		{keys: ['b','i','l'], chars: [0xD22C,0xC7C1]}, /* 투쟁 */
		{keys: ['a','b','i','l'], chars: [0xB300,0xC911]}, /* 대중 */
		{keys: ['b','f','i','l'], chars: [0xD22C,0xC790]}, /* 투자 */
		{keys: ['g','i','l','x'], chars: [0xD2B9,0xC9D5]}, /* 특징 */
		{keys: ['a','g','i','l'], chars: [0xB4F1,0xC7A5]}, /* 등장 */
		{keys: ['d','i','l'], chars: [0xC9C0,0xB3C4]}, /* 지도 */
		{keys: ['c','f','i','l'], chars: [0xB300,0xCCB4]}, /* 대체 */
		/* 첫소리 ㄹ 조합 */
		{keys: ['m','s'], chars: [0xC774,0xB7F0,0x20]}, /* 이런  */
		{keys: ['e','m'], chars: [0xB2EC,0xB7EC]}, /* 달러 */
		{keys: ['m','z'], chars: [0xC5EC,0xB984]}, /* 여름 */
		{keys: ['k','m','x'], chars: [0xAD8C,0xB825]}, /* 권력 */
		{keys: ['k','m','s'], chars: [0xADF8,0xB7F0,0x20]}, /* 그런  */
		{keys: ['e','k','m'], chars: [0xC774,0xB370,0xC62C,0xB85C,0xAE30]}, /* 이데올로기 */
		{keys: ['k','m','z'], chars: [0xADF8,0xB7A8]}, /* 그램 */
		{keys: ['k','m','w'], chars: [0xADF8,0xB8F9]}, /* 그룹 */
		{keys: [';','k','m','s'], chars: [0xADF8,0xB807]}, /* 그렇 */
		{keys: ['f','k','m'], chars: [0xADF8,0xB7EC,0xB098,0x20]}, /* 그러나 */
		{keys: ['f','k','m','x'], chars: [0xAC00,0xB77D]}, /* 가락 */
		{keys: ['d','f','k','m'], chars: [0xADF8,0xB798]}, /* 그래 */
		{keys: ['k','m','t','v'], chars: [0xACE0,0xB824]}, /* 고려 */
		{keys: ['.','k','m','t'], chars: [0xACE0,0xB824]}, /* 고려 */
		{keys: ['k','m','r'], chars: [0xADF8,0xB798,0xC11C,0x20]}, /* 그래서 */
		{keys: ['k','m','r','z'], chars: [0xADF8,0xB7FC,0x20]}, /* 그럼  */
		{keys: ['c','k','m'], chars: [0xADF8,0xB7F0,0xB370,0x20]}, /* 그런데 */
		{keys: ['k','m','t'], chars: [0xB824,0xACE0,0x20]}, /* 려고  */
		{keys: ['k','m','v'], chars: [0xADF8,0xB9AC,0xACE0,0x20]}, /* 그리고 */
		{keys: ['k','m','v','x'], chars: [0xAE30,0xB85D]}, /* 기록 */
		{keys: ['f','k','m','v'], chars: [0xB77C,0xACE0]}, /* 라고 */
		{keys: ['.','f','k','m'], chars: [0xB77C,0xACE0]}, /* 라고 */
		{keys: ['k','m','s','t'], chars: [0xAD00,0xB828]}, /* 관련 */
		{keys: ['f','k','m','s','v'], chars: [0xAD00,0xB9AC]}, /* 관리 */
		{keys: ['.','f','k','m','s'], chars: [0xAD00,0xB9AC]}, /* 관리 */
		{keys: ['b','k','m'], chars: [0xACE0,0xAD6C,0xB824]}, /* 고구려 */
		{keys: ['g','k','m'], chars: [0xADF8,0xB798,0xB3C4,0x20]}, /* 그래도 */
		{keys: ['d','g','k','m'], chars: [0xADF8,0xB9AC]}, /* 그리 */
		{keys: ['b','g','k','m'], chars: [0xAD6C,0xB984]}, /* 구름 */
		{keys: ['d','k','m','z'], chars: [0xADF8,0xB9BC]}, /* 그림 */
		{keys: ['f','g','k','m'], chars: [0xAC00,0xB974]}, /* 가르 */
		{keys: ['m','s','y'], chars: [0xBB3C,0xB860,0x20]}, /* 물론  */
		{keys: ['e','m','y'], chars: [0xBA40,0xB9AC,0x20]}, /* 멀리  */
		{keys: ['a','m','y'], chars: [0xBA85,0xB839]}, /* 명령 */
		{keys: ['f','m','s','y'], chars: [0xB9C8,0xB828]}, /* 마련 */
		{keys: ['e','f','m','y'], chars: [0xC57C,0xB9D0,0xB85C,0x20]}, /* 야말로  */
		{keys: ['m','r','y'], chars: [0xBA38,0xB9AC]}, /* 머리 */
		{keys: ['m','t','y'], chars: [0xB824,0xBA74,0x20]}, /* 려면  */
		{keys: ['m','s','t','y'], chars: [0xB77C,0xBA74]}, /* 라면 */
		{keys: ['m','r','s','y'], chars: [0xC544,0xBB34,0xB7F0,0x20]}, /* 아무런  */
		{keys: ['b','e','m','y'], chars: [0xBB3C,0xB9AC]}, /* 물리 */
		{keys: ['b','m','y'], chars: [0xBB34,0xB9AC]}, /* 무리 */
		{keys: ['g','m','y'], chars: [0xBBC0,0xB85C,0x20]}, /* 므로  */
		{keys: ['m','o','x'], chars: [0xBE44,0xB85D,0x20]}, /* 비록  */
		{keys: ['e','m','o'], chars: [0xBE68,0xB9AC,0x20]}, /* 빨리  */
		{keys: ['m','o','z'], chars: [0xBC14,0xB78C]}, /* 바람 */
		{keys: ['m','o','q'], chars: [0xBE44,0xB86F]}, /* 비롯 */
		{keys: ['a','m','o'], chars: [0xD504,0xB791,0xC2A4]}, /* 프랑스 */
		{keys: ['f','m','o'], chars: [0xBC14,0xB77C]}, /* 바라 */
		{keys: ['m','o','r','w'], chars: [0xBC95,0xB960]}, /* 법률 */
		{keys: ['e','m','o','t'], chars: [0xBCC4,0xB85C,0x20]}, /* 별로  */
		{keys: ['m','o','v'], chars: [0xBC14,0xB85C,0x20]}, /* 바로  */
		{keys: ['l','m','s'], chars: [0xC804,0xB7B5]}, /* 전략 */
		{keys: ['l','m','z'], chars: [0xCC98,0xB7FC,0x20]}, /* 처럼  */
		{keys: ['a','l','m'], chars: [0xC885,0xB958]}, /* 종류 */
		{keys: ['f','l','m'], chars: [0xC790,0xB8CC]}, /* 자료 */
		{keys: ['d','f','l','m'], chars: [0xC7AC,0xB8CC]}, /* 재료 */
		{keys: ['l','m','r'], chars: [0xCC98,0xB9AC]}, /* 처리 */
		{keys: ['c','l','m','v'], chars: [0xCC28,0xB840]}, /* 차례 */
		{keys: ['b','l','m'], chars: [0xC8FC,0xB85C,0x20]}, /* 주로  */
		{keys: ['d','l','m'], chars: [0xC790,0xB9AC]}, /* 자리 */
		{keys: ['a','h','m'], chars: [0xD6CC,0xB96D]}, /* 훌륭 */
		{keys: ['f','h','m'], chars: [0xD558,0xB8E8]}, /* 하루 */
		{keys: ['h','m','r'], chars: [0xD5C8,0xB9AC]}, /* 허리 */
		{keys: ['g','m','o'], chars: [0xD504,0xB85C]}, /* 프로 */
		{keys: ['d','h','m'], chars: [0xCC28,0xB77C,0xB9AC,0x20]}, /* 차라리  */
		{keys: ['m','u','x'], chars: [0xB178,0xB825]}, /* 노력 */
		{keys: ['a','m','u'], chars: [0xB2A5,0xB825]}, /* 능력 */
		{keys: ['f','m','u'], chars: [0xB098,0xB77C]}, /* 나라 */
		{keys: ['d','f','m','u'], chars: [0xB0B4,0xB824]}, /* 내려 */
		{keys: ['m','u','v'], chars: [0xB178,0xB798]}, /* 노래 */
		{keys: ['m','u','z'], chars: [0xB098,0xB984]}, /* 나름 */
		/* 첫소리 ㅁ 조합 */
		{keys: ['x','y'], chars: [0xBBF8,0xAD6D]}, /* 미국 */
		{keys: ['s','x','y'], chars: [0xB9CC,0xC57D]}, /* 만약 */
		{keys: ['s','y'], chars: [0xBB38,0xD654]}, /* 문화 */
		{keys: ['e','s','y'], chars: [0xBB3C,0xAC74]}, /* 물건 */
		{keys: ['a','s','y'], chars: [0xB9CE,0xC774,0x20]}, /* 많이  */
		{keys: [';','y','z'], chars: [0xBBFF,0xC74C]}, /* 믿음 */
		{keys: ['e','y'], chars: [0xBB3C,0xC9C8]}, /* 물질 */
		{keys: ['y','z'], chars: [0xB9C8,0xC74C]}, /* 마음 */
		{keys: ['w','y'], chars: [0xC5C5,0xBB34]}, /* 업무 */
		{keys: ['q','y'], chars: [0xBB34,0xC5C7]}, /* 무엇 */
		{keys: [';','y'], chars: [0xB9DB,0xC788]}, /* 맛있 */
		{keys: ['a','y'], chars: [0xBAA8,0xC591]}, /* 모양 */
		{keys: ['b','f','y'], chars: [0xB9E4,0xC6B0,0x20]}, /* 매우  */
		{keys: ['g','v','y'], chars: [0xBAA8,0xB4E0,0x20]}, /* 모든  */
		{keys: ['f','g','y'], chars: [0xB9C8,0xC744]}, /* 마을 */
		{keys: ['o','x','y'], chars: [0xBAA9,0xD45C]}, /* 목표 */
		{keys: ['a','o','y'], chars: [0xBD84,0xBA85]}, /* 분명 */
		{keys: ['o','s','y'], chars: [0xBC18,0xBA74]}, /* 반면 */
		{keys: ['b','o','y'], chars: [0xBD80,0xBAA8]}, /* 부모 */
		{keys: ['l','x','y'], chars: [0xBBFC,0xC871]}, /* 민족 */
		{keys: ['l','s','x','y'], chars: [0xB9CC,0xC871]}, /* 만족 */
		{keys: ['l','s','y'], chars: [0xC9C0,0xB9CC,0x20]}, /* 지만  */
		{keys: ['e','l','y'], chars: [0xC815,0xB9D0]}, /* 정말 */
		{keys: ['l','y','z'], chars: [0xB9C8,0xCE68,0x20]}, /* 마침  */
		{keys: ['f','l','s','y'], chars: [0xB9C8,0xCC2C,0xAC00,0xC9C0]}, /* 마찬가지 */
		{keys: ['f','l','x','y'], chars: [0xB9C8,0xC9C0,0xB9C9]}, /* 마지막 */
		{keys: ['d','f','l','y'], chars: [0xC7AC,0xBBF8]}, /* 재미 */
		{keys: ['l','r','y'], chars: [0xB9C8,0xC800,0x20]}, /* 마저  */
		{keys: ['l','r','s','y'], chars: [0xBA3C,0xC800]}, /* 먼저 */
		{keys: ['c','l','y'], chars: [0xBB38,0xC81C]}, /* 문제 */
		{keys: ['l','t','y'], chars: [0xBA70,0xCE60]}, /* 며칠 */
		{keys: ['l','s','t','y'], chars: [0xC790,0xBA74,0x20]}, /* 자면  */
		{keys: ['l','v','x','y'], chars: [0xBAA9,0xC801]}, /* 목적 */
		{keys: ['b','l','y'], chars: [0xC8FC,0xBBFC]}, /* 주민 */
		{keys: ['b','l','r','s','y'], chars: [0xC804,0xBB38]}, /* 전문 */
		{keys: ['d','l','y'], chars: [0xB9C8,0xCE58,0x20]}, /* 마치  */
		{keys: ['d','l','s','y'], chars: [0xBBFC,0xC8FC]}, /* 민주 */
		{keys: ['d','e','l','y'], chars: [0xC9C8,0xBB38]}, /* 질문 */
		{keys: ['a','b','l','y'], chars: [0xBBFC,0xC911]}, /* 민중 */
		{keys: ['e','u','y'], chars: [0xB208,0xBB3C]}, /* 눈물 */
		{keys: ['a','u','y'], chars: [0xB18D,0xBBFC]}, /* 농민 */
		{keys: ['b','f','u','y'], chars: [0xB098,0xBB34]}, /* 나무 */
		{keys: ['r','u','y'], chars: [0xB108,0xBB34,0x20]}, /* 너무  */
		{keys: ['b','u','y'], chars: [0xC8FC,0xBA38,0xB2C8]}, /* 주머니 */
		/* 첫소리 ㅂ 조합 */
		{keys: ['a','o','x'], chars: [0xBC16,0xC5D0,0x20]}, /* 밖에  */
		{keys: ['o','s'], chars: [0xBD80,0xBD84]}, /* 부분 */
		{keys: [';','o','z'], chars: [0xBC1B,0xC544]}, /* 받아 */
		{keys: ['e','o'], chars: [0xBC1C,0xD45C]}, /* 발표 */
		{keys: ['e','o','w'], chars: [0xBD88,0xBC95]}, /* 불법 */
		{keys: ['o','w'], chars: [0xBC29,0xBC95]}, /* 방법 */
		{keys: ['e','k','o'], chars: [0xAC1C,0xBC1C]}, /* 개발 */
		{keys: ['a','k','o'], chars: [0xACF5,0xBD80]}, /* 공부 */
		{keys: ['e','f','k','o'], chars: [0xBC1C,0xACAC]}, /* 발견 */
		{keys: ['k','o','r'], chars: [0xCEE4,0xD53C]}, /* 커피 */
		{keys: ['a','k','o','t'], chars: [0xD3C9,0xAC00]}, /* 평가 */
		{keys: ['k','o','s','v'], chars: [0xAE30,0xBCF8]}, /* 기본 */
		{keys: ['a','k','o','v'], chars: [0xACF5,0xD3EC]}, /* 공포 */
		{keys: ['f','k','o','v'], chars: [0xBD88,0xACFC]}, /* 불과 */
		{keys: ['.','f','k','o'], chars: [0xBD88,0xACFC]}, /* 불과 */
		{keys: ['b','k','o'], chars: [0xBD88,0xAD6C]}, /* 불구 */
		{keys: ['b','e','k','o'], chars: [0xBD88,0xAD50]}, /* 불교 */
		{keys: ['d','k','o'], chars: [0xAE30,0xBD84]}, /* 기분 */
		{keys: ['i','o','x'], chars: [0xD2B9,0xBCC4]}, /* 특별 */
		{keys: ['i','o','s'], chars: [0xB300,0xBD80,0xBD84]}, /* 대부분 */
		{keys: ['e','i','o'], chars: [0xBC1C,0xB2EC]}, /* 발달 */
		{keys: ['i','o','z'], chars: [0xB2F4,0xBC30]}, /* 담배 */
		{keys: ['a','i','o'], chars: [0xBC14,0xD0D5]}, /* 바탕 */
		{keys: ['f','i','o'], chars: [0xBC14,0xB2E4]}, /* 바다 */
		{keys: ['g','i','o','s'], chars: [0xBC18,0xB4DC,0xC2DC,0x20]}, /* 반드시  */
		{keys: ['d','f','i','o','s'], chars: [0xBC18,0xB300]}, /* 반대 */
		{keys: ['i','o','r'], chars: [0xD37C,0xC13C,0xD2B8]}, /* 퍼센트 */
		{keys: ['i','o','v'], chars: [0xBCF4,0xB2E4,0x20]}, /* 보다  */
		{keys: ['f','i','o','s','v'], chars: [0xBC18,0xB3C4]}, /* 반도 */
		{keys: ['.','f','i','o','s'], chars: [0xBC18,0xB3C4]}, /* 반도 */
		{keys: ['f','i','o','r'], chars: [0xB300,0xD45C]}, /* 대표 */
		{keys: ['.','i','o','v'], chars: [0xB300,0xD45C]}, /* 대표 */
		{keys: ['b','i','o'], chars: [0xBD80,0xD130,0x20]}, /* 부터  */
		{keys: ['g','i','o'], chars: [0xBD80,0xB4DC]}, /* 부드 */
		{keys: ['d','g','i','o'], chars: [0xD2F0,0xBE0C,0xC774]}, /* 티브이 */
		{keys: ['j','o','x'], chars: [0xD30C,0xC545]}, /* 파악 */
		{keys: ['j','o','s'], chars: [0xC774,0xBC88,0x20]}, /* 이번  */
		{keys: ['e','j','o','s'], chars: [0xC77C,0xBC18]}, /* 일반 */
		{keys: ['a','j','o','s'], chars: [0xBC29,0xC548]}, /* 방안 */
		{keys: ['e','j','o'], chars: [0xC77C,0xBCF8]}, /* 일본 */
		{keys: ['j','o','q'], chars: [0xBC97,0xC5B4]}, /* 벗어 */
		{keys: ['a','j','o'], chars: [0xBCD1,0xC6D0]}, /* 병원 */
		{keys: ['b','f','j','o'], chars: [0xBC30,0xC6B0]}, /* 배우 */
		{keys: ['n','o','x'], chars: [0xC0C8,0xBCBD]}, /* 새벽 */
		{keys: ['n','o','s'], chars: [0xBD80,0xC0B0]}, /* 부산 */
		{keys: ['e','n','o'], chars: [0xC0B4,0xD3B4]}, /* 살펴 */
		{keys: ['n','o','q'], chars: [0xBE44,0xC2B7]}, /* 비슷 */
		{keys: ['a','n','o'], chars: [0xBC29,0xC2DD]}, /* 방식 */
		{keys: ['e','f','n','o'], chars: [0xBC1C,0xC0DD]}, /* 발생 */
		{keys: ['a','f','n','o'], chars: [0xBC29,0xC1A1]}, /* 방송 */
		{keys: ['n','o','r','s'], chars: [0xC120,0xBC30]}, /* 선배 */
		{keys: ['e','n','o','r'], chars: [0xBC8C,0xC368,0x20]}, /* 벌써  */
		{keys: ['n','o','v'], chars: [0xC18C,0xBE44]}, /* 소비 */
		{keys: ['b','n','o'], chars: [0xBD80,0xC0C1]}, /* 부상 */
		{keys: ['b','n','o','s'], chars: [0xBD84,0xC11D]}, /* 분석 */
		{keys: ['g','n','o','r'], chars: [0xBC84,0xC2A4]}, /* 버스 */
		{keys: ['l','o','x'], chars: [0xC791,0xD488]}, /* 작품 */
		{keys: ['l','o','s'], chars: [0xC8FC,0xBCC0]}, /* 주변 */
		{keys: ['e','l','o'], chars: [0xBC1C,0xC804]}, /* 발전 */
		{keys: ['l','o','z'], chars: [0xBC29,0xCE68]}, /* 방침 */
		{keys: ['a','l','o'], chars: [0xC815,0xBD80]}, /* 정부 */
		{keys: ['f','l','o'], chars: [0xC544,0xBC84,0xC9C0]}, /* 아버지 */
		{keys: ['d','f','l','o'], chars: [0xC9C0,0xBC30]}, /* 지배 */
		{keys: ['d','f','l','o','x'], chars: [0xBC31,0xC81C]}, /* 백제 */
		{keys: ['l','o','r','s'], chars: [0xBC88,0xC9F8]}, /* 번째 */
		{keys: ['e','f','l','o','r'], chars: [0xC7AC,0xBC8C]}, /* 재벌 */
		{keys: ['l','o','v'], chars: [0xC815,0xBCF4]}, /* 정보 */
		{keys: ['c','l','o'], chars: [0xC81C,0xD488]}, /* 제품 */
		{keys: ['l','o','s','t'], chars: [0xD3B8,0xC9C0]}, /* 편지 */
		{keys: ['b','l','o','x'], chars: [0xBD80,0xC871]}, /* 부족 */
		{keys: ['l','o','s','v'], chars: [0xC790,0xBCF8]}, /* 자본 */
		{keys: ['b','l','o','s'], chars: [0xC900,0xBE44]}, /* 준비 */
		{keys: ['b','f','l','o'], chars: [0xBD80,0xC790]}, /* 부자 */
		{keys: ['b','l','o','r'], chars: [0xBD80,0xC815]}, /* 부정 */
		{keys: ['a','f','l','o'], chars: [0xC9C0,0xBC29]}, /* 지방 */
		{keys: ['o','u','z'], chars: [0xB0A8,0xD3B8]}, /* 남편 */
		/* 첫소리 ㅅ 조합 */
		{keys: ['n','x'], chars: [0xC2DD,0xC0AC]}, /* 식사 */
		{keys: ['n','s'], chars: [0xC120,0xC0DD]}, /* 선생 */
		{keys: ['a','n','s'], chars: [0xC0DD,0xC0B0]}, /* 생산 */
		{keys: ['e','n'], chars: [0xC0AC,0xC2E4]}, /* 사실 */
		{keys: ['n','z'], chars: [0xC0AC,0xB78C]}, /* 사람 */
		{keys: ['n','w'], chars: [0xC2B5,0xB2C8,0xB2E4,0x2E,0x20]}, /* 습니다.  */
		{keys: ['a','n'], chars: [0xC138,0xC0C1]}, /* 세상 */
		{keys: ['b','f','n'], chars: [0xC218,0xC0AC]}, /* 수사 */
		{keys: ['c','f','n'], chars: [0xC138,0xC694]}, /* 세요 */
		{keys: ['k','n','x'], chars: [0xC0DD,0xAC01]}, /* 생각 */
		{keys: ['k','n','s'], chars: [0xC2DC,0xAC04]}, /* 시간 */
		{keys: ['e','k','n'], chars: [0xAE30,0xC220]}, /* 기술 */
		{keys: ['k','n','x','z'], chars: [0xC0BC,0xAD6D]}, /* 삼국 */
		{keys: ['k','n','z'], chars: [0xAD00,0xC2EC]}, /* 관심 */
		{keys: ['a','k','n'], chars: [0xC131,0xACA9]}, /* 성격 */
		{keys: ['f','k','n','s'], chars: [0xC0AC,0xAC74]}, /* 사건 */
		{keys: ['f','k','n','z'], chars: [0xAC10,0xC0AC]}, /* 감사 */
		{keys: ['a','f','k','n'], chars: [0xC0C1,0xAD00]}, /* 상관 */
		{keys: ['f','k','n'], chars: [0xAE30,0xC0AC]}, /* 기사 */
		{keys: ['d','f','k','n','x'], chars: [0xC2DC,0xAC01]}, /* 시각 */
		{keys: ['a','d','f','k','n'], chars: [0xAE30,0xC0C1]}, /* 기상 */
		{keys: ['k','n','r'], chars: [0xACE0,0xC11C,0x20]}, /* 고서  */
		{keys: ['k','n','r','s'], chars: [0xC120,0xAC70]}, /* 선거 */
		{keys: ['e','k','n','r'], chars: [0xAC74,0xC124]}, /* 건설 */
		{keys: ['a','k','n','r'], chars: [0xC131,0xACBD]}, /* 성경 */
		{keys: ['c','k','n'], chars: [0xC138,0xACC4]}, /* 세계 */
		{keys: ['e','k','n','t'], chars: [0xACB0,0xC2EC]}, /* 결심 */
		{keys: ['a','k','n','t'], chars: [0xACBD,0xC0C1]}, /* 경상 */
		{keys: ['k','n','v','x'], chars: [0xACC4,0xC18D]}, /* 계속 */
		{keys: ['k','n','v'], chars: [0xC0AC,0xACE0]}, /* 사고 */
		{keys: ['a','k','n','v'], chars: [0xC131,0xACF5]}, /* 성공 */
		{keys: ['a','f','k','n','v'], chars: [0xACF5,0xC0AC]}, /* 공사 */
		{keys: ['.','a','f','k','n'], chars: [0xACF5,0xC0AC]}, /* 공사 */
		{keys: ['a','b','k','n'], chars: [0xAD6C,0xC131]}, /* 구성 */
		{keys: ['f','k','n','r'], chars: [0xAD50,0xC0AC]}, /* 교사 */
		{keys: ['.','k','n','v'], chars: [0xAD50,0xC0AC]}, /* 교사 */
		{keys: ['b','k','n','s'], chars: [0xC21C,0xAC04]}, /* 순간 */
		{keys: ['b','k','n','v'], chars: [0xC218,0xACE0]}, /* 수고 */
		{keys: ['.','b','k','n'], chars: [0xC218,0xACE0]}, /* 수고 */
		{keys: ['g','k','n'], chars: [0xC4F0,0xB808,0xAE30]}, /* 쓰레기 */
		{keys: ['e','g','k','n'], chars: [0xAE00,0xC384]}, /* 글쎄 */
		{keys: ['g','k','n','z'], chars: [0xAC00,0xC2B4]}, /* 가슴 */
		{keys: ['c','d','k','n'], chars: [0xC138,0xAE30]}, /* 세기 */
		{keys: ['d','k','n','s'], chars: [0xC2E0,0xACBD]}, /* 신경 */
		{keys: ['d','k','n','z'], chars: [0xC2EC,0xAC01]}, /* 심각 */
		{keys: ['c','k','n','r'], chars: [0xC5D0,0xAC8C,0xC11C,0x20]}, /* 에게서  */
		{keys: ['c','k','n','v'], chars: [0xC2DC,0xACC4]}, /* 시계 */
		{keys: ['n','s','u'], chars: [0xC544,0xB098,0xC6B4,0xC11C]}, /* 아나운서 */
		{keys: ['n','u','z'], chars: [0xC120,0xC0DD,0xB2D8]}, /* 선생님 */
		{keys: ['a','n','u'], chars: [0xAC00,0xB2A5,0xC131]}, /* 가능성 */
		{keys: ['f','n','u'], chars: [0xC0AC,0xB0B4]}, /* 사내 */
		{keys: ['d','f','n','u','z'], chars: [0xB0C4,0xC0C8]}, /* 냄새 */
		{keys: ['n','t','u'], chars: [0xC18C,0xB140]}, /* 소녀 */
		{keys: ['n','s','t','u'], chars: [0xC18C,0xB144]}, /* 소년 */
		{keys: ['n','s','u','v'], chars: [0xC190,0xB2D8]}, /* 손님 */
		{keys: ['a','n','u','v'], chars: [0xB18D,0xC0AC]}, /* 농사 */
		{keys: ['b','n','u','v'], chars: [0xB274,0xC2A4]}, /* 뉴스 */
		{keys: ['m','n','x'], chars: [0xC138,0xB825]}, /* 세력 */
		{keys: ['m','n','s'], chars: [0xC2E0,0xB77C]}, /* 신라 */
		{keys: ['a','m','n'], chars: [0xC0AC,0xB791]}, /* 사랑 */
		{keys: ['f','m','n'], chars: [0xC0AC,0xB77C]}, /* 사라 */
		{keys: ['d','f','m','n'], chars: [0xC0C8,0xB85C,0x20]}, /* 새로  */
		{keys: ['m','n','r','v'], chars: [0xC11C,0xB85C,0x20]}, /* 서로  */
		{keys: ['.','m','n','r'], chars: [0xC11C,0xB85C,0x20]}, /* 서로  */
		{keys: ['m','n','r'], chars: [0xB85C,0xC368,0x20]}, /* 로써  */
		{keys: ['m','n','s','t'], chars: [0xC18C,0xB828]}, /* 소련 */
		{keys: ['m','n','v'], chars: [0xB85C,0xC11C,0x20]}, /* 로서  */
		{keys: ['b','m','n'], chars: [0xC218,0xB85D,0x20]}, /* 수록  */
		{keys: ['b','d','m','n'], chars: [0xC218,0xB9AC]}, /* 수리 */
		{keys: ['g','m','n'], chars: [0xC2A4,0xC2A4,0xB85C]}, /* 스스로 */
		{keys: ['d','m','n'], chars: [0xC18C,0xB9AC]}, /* 소리 */
		{keys: ['n','x','y'], chars: [0xBAA9,0xC18C,0xB9AC]}, /* 목소리 */
		{keys: ['n','s','y'], chars: [0xBB34,0xC2A8,0x20]}, /* 무슨  */
		{keys: ['e','n','s','y'], chars: [0xC120,0xBB3C]}, /* 선물 */
		{keys: ['e','n','y'], chars: [0xB9D0,0xC500]}, /* 말씀 */
		{keys: ['n','x','y','z'], chars: [0xBAA9,0xC228]}, /* 목숨 */
		{keys: ['n','w','y'], chars: [0xBAA8,0xC2B5]}, /* 모습 */
		{keys: ['a','n','y'], chars: [0xC0DD,0xBA85]}, /* 생명 */
		{keys: ['e','n','r','y'], chars: [0xC124,0xBA85]}, /* 설명 */
		{keys: ['n','s','t','y'], chars: [0xBA74,0xC11C,0x20]}, /* 면서  */
		{keys: ['b','n','y'], chars: [0xBB34,0xC2DC]}, /* 무시 */
		{keys: ['d','n','y'], chars: [0xC2DC,0xBBFC]}, /* 시민 */
		{keys: ['d','n','x','y'], chars: [0xC2DD,0xBB3C]}, /* 식물 */
		{keys: ['d','n','s','y'], chars: [0xC2E0,0xBB38]}, /* 신문 */
		{keys: ['h','n','x'], chars: [0xD559,0xC0DD]}, /* 학생 */
		{keys: ['h','n','s'], chars: [0xD604,0xC0C1]}, /* 현상 */
		{keys: ['e','h','n'], chars: [0xD6E8,0xC52C,0x20]}, /* 훨씬  */
		{keys: ['e','h','n','x'], chars: [0xD655,0xC2E4]}, /* 확실 */
		{keys: ['h','n','x','z'], chars: [0xD655,0xC2E4]}, /* 확실 */
		{keys: ['h','n','z'], chars: [0xC2DC,0xD5D8]}, /* 시험 */
		{keys: ['a','h','n'], chars: [0xC0DD,0xD65C]}, /* 생활 */
		{keys: ['f','h','n'], chars: [0xC0AC,0xD68C]}, /* 사회 */
		{keys: ['d','f','h','n'], chars: [0xC0C1,0xD0DC]}, /* 상태 */
		{keys: ['a','d','f','h','n'], chars: [0xD589,0xC0AC]}, /* 행사 */
		{keys: ['c','h','n','s'], chars: [0xC13C,0xD2F0]}, /* 센티 */
		{keys: ['h','n','s','t'], chars: [0xD604,0xC2E4]}, /* 현실 */
		{keys: ['a','h','n','x'], chars: [0xD615,0xC2DD]}, /* 형식 */
		{keys: ['a','f','h','n','v'], chars: [0xC0C1,0xD669]}, /* 상황 */
		{keys: ['.','a','f','h','n'], chars: [0xC0C1,0xD669]}, /* 상황 */
		{keys: ['d','h','n','v'], chars: [0xD68C,0xC0AC]}, /* 회사 */
		{keys: ['.','d','h','n'], chars: [0xD68C,0xC0AC]}, /* 회사 */
		{keys: ['c','h','n','v'], chars: [0xC218,0xD61C]}, /* 수혜 */
		{keys: ['.','c','h','n'], chars: [0xC218,0xD61C]}, /* 수혜 */
		{keys: ['d','e','h','n'], chars: [0xC2E4,0xCC9C]}, /* 실천 */
		{keys: ['j','n','x'], chars: [0xC5ED,0xC0AC]}, /* 역사 */
		{keys: ['j','n','s','x'], chars: [0xC778,0xC2DD]}, /* 인식 */
		{keys: ['j','n','s'], chars: [0xC6B0,0xC120,0x20]}, /* 우선  */
		{keys: ['a','j','n','s'], chars: [0xC778,0xC0DD]}, /* 인생 */
		{keys: ['e','j','n'], chars: [0xC11C,0xC6B8]}, /* 서울 */
		{keys: ['e','j','n','z'], chars: [0xC5F4,0xC2EC]}, /* 열심 */
		{keys: ['j','n','s','w'], chars: [0xC0B0,0xC5C5]}, /* 산업 */
		{keys: ['a','j','n'], chars: [0xC774,0xC0C1]}, /* 이상 */
		{keys: ['b','f','j','n','z'], chars: [0xC2F8,0xC6C0]}, /* 싸움 */
		{keys: ['c','e','j','n','r'], chars: [0xC138,0xC6D4]}, /* 세월 */
		{keys: ['f','g','j','n'], chars: [0xC758,0xC0AC]}, /* 의사 */
		{keys: ['c','j','n','r'], chars: [0xC5D0,0xC11C,0x20]}, /* 에서  */
		{keys: ['l','n','x'], chars: [0xC2DC,0xC791]}, /* 시작 */
		{keys: ['l','n','s'], chars: [0xC790,0xC2E0]}, /* 자신 */
		{keys: ['e','l','n','s'], chars: [0xC9C4,0xC2E4]}, /* 진실 */
		{keys: ['e','l','n','r'], chars: [0xC9C8,0xC11C]}, /* 질서 */
		{keys: ['l','n','z'], chars: [0xC911,0xC2EC]}, /* 중심 */
		{keys: ['a','l','n'], chars: [0xC2DC,0xC7A5]}, /* 시장 */
		{keys: ['f','l','n'], chars: [0xC790,0xC2DD]}, /* 자식 */
		{keys: ['f','l','n','z'], chars: [0xC7A0,0xC2DC]}, /* 잠시 */
		{keys: ['a','f','l','n'], chars: [0xC131,0xC7A5]}, /* 성장 */
		{keys: ['d','f','l','n'], chars: [0xC7AC,0xC0B0]}, /* 재산 */
		{keys: ['a','d','f','l','n'], chars: [0xC9C0,0xC0C1]}, /* 지상 */
		{keys: ['l','n','r'], chars: [0xC544,0xC800,0xC528]}, /* 아저씨 */
		{keys: ['l','n','r','s'], chars: [0xC870,0xC120]}, /* 조선 */
		{keys: ['a','l','n','s'], chars: [0xC815,0xC2E0]}, /* 정신 */
		{keys: ['c','l','n'], chars: [0xC790,0xC138]}, /* 자세 */
		{keys: ['l','n','v'], chars: [0xC870,0xC0AC]}, /* 조사 */
		{keys: ['a','f','l','n','r'], chars: [0xC0AC,0xC815]}, /* 사정 */
		{keys: ['b','l','n'], chars: [0xC218,0xC900]}, /* 수준 */
		{keys: ['d','l','n','x'], chars: [0xC9C0,0xC2DD]}, /* 지식 */
		{keys: ['d','l','n','s'], chars: [0xC0AC,0xC9C4]}, /* 사진 */
		{keys: ['d','e','l','n'], chars: [0xC2E4,0xC81C]}, /* 실제 */
		{keys: ['c','d','l','n'], chars: [0xC81C,0xC2DC]}, /* 제시 */
		/* 첫소리 ㅇ 조합 */
		{keys: ['j','x'], chars: [0xC74C,0xC545]}, /* 음악 */
		{keys: ['j','s'], chars: [0xC5B4,0xB5A4,0x20]}, /* 어떤  */
		{keys: ['e','j','s'], chars: [0xC778,0xBB3C]}, /* 인물 */
		{keys: ['e','j'], chars: [0xC77C,0xC5B4]}, /* 일어 */
		{keys: ['j','x','z'], chars: [0xC6C0,0xC9C1]}, /* 움직 */
		{keys: ['j','z'], chars: [0xC74C,0xC2DD]}, /* 음식 */
		{keys: ['j','q','w'], chars: [0xC5C6,0xC774,0x20]}, /* 없이  */
		{keys: ['j','q','z'], chars: [0xC6C3,0xC74C]}, /* 웃음 */
		{keys: ['a','j'], chars: [0xC5EC,0xC131]}, /* 여성 */
		{keys: [';','j','s'], chars: [0xC774,0xB807]}, /* 이렇 */
		{keys: ['b','j','t'], chars: [0xC601,0xAD6D]}, /* 영국 */
		{keys: ['b','s','t','y'], chars: [0xC6B4,0xBA85]}, /* 운명 */
		{keys: ['g','j','t'], chars: [0xC73C,0xBA70,0x20]}, /* 으며  */
		{keys: ['g','j','s','t'], chars: [0xC73C,0xBA74,0x20]}, /* 으면  */
		{keys: ['b','f','j'], chars: [0xC544,0xBB34]}, /* 아무 */
		{keys: ['c','g','j'], chars: [0xC740,0xD61C]}, /* 은혜 */
		{keys: ['c','f','j'], chars: [0xC5D0,0xC694,0x2E,0x20]}, /* 에요.  */
		{keys: ['c','j','r'], chars: [0xC608,0xC694,0x2E,0x20]}, /* 예요.  */
		{keys: ['j','l','r','t'], chars: [0xC5EC,0xC804]}, /* 여전 */
		{keys: ['m','r','t'], chars: [0xC5EC,0xB7EC,0x20]}, /* 여러  */
		{keys: ['j','r','t'], chars: [0xC601,0xC5B4]}, /* 영어 */
		{keys: ['g','j','r'], chars: [0xC758,0xC6D0]}, /* 의원 */
		{keys: ['j','m','s'], chars: [0xC774,0xB860]}, /* 이론 */
		{keys: ['e','j','m'], chars: [0xC54C,0xB824]}, /* 알려 */
		{keys: ['j','m','z'], chars: [0xC774,0xB984]}, /* 이름 */
		{keys: ['j','m','w'], chars: [0xC720,0xB7FD]}, /* 유럽 */
		{keys: ['f','j','m'], chars: [0xC544,0xB77C]}, /* 아라 */
		{keys: ['f','j','m','s'], chars: [0xC774,0xB780]}, /* 이란 */
		{keys: ['d','f','j','m'], chars: [0xC544,0xB798]}, /* 아래 */
		{keys: ['j','m','r','s'], chars: [0xC5B8,0xB860]}, /* 언론 */
		{keys: ['e','j','m','r'], chars: [0xB9AC,0xC5BC]}, /* 리얼 */
		{keys: ['j','m','v'], chars: [0xC624,0xB798]}, /* 오래 */
		{keys: ['e','j','m','v'], chars: [0xC62C,0xB77C]}, /* 올라 */
		{keys: ['b','j','m'], chars: [0xC6B0,0xB9AC]}, /* 우리 */
		{keys: ['b','j','m','r','s'], chars: [0xC6D0,0xB9AC]}, /* 원리 */
		{keys: ['.','j','m','r','s'], chars: [0xC6D0,0xB9AC]}, /* 원리 */
		{keys: ['b','j','m','v'], chars: [0xC778,0xB958]}, /* 인류 */
		{keys: ['g','j','m'], chars: [0xC73C,0xB85C,0x20]}, /* 으로  */
		{keys: ['g','j','m','s'], chars: [0xC5BC,0xB978,0x20]}, /* 얼른  */
		{keys: ['f','g','j','m'], chars: [0xC544,0xB984]}, /* 아름 */
		{keys: ['b','f','m'], chars: [0xC544,0xBB34,0xB9AC,0x20]}, /* 아무리  */
		{keys: ['d','j','m','s'], chars: [0xC5B4,0xB9B0,0x20]}, /* 어린  */
		{keys: ['g','j','m','r'], chars: [0xC5B4,0xB978]}, /* 어른 */
		{keys: ['h','j','x'], chars: [0xC5ED,0xD560]}, /* 역할 */
		{keys: ['h','j','s','x'], chars: [0xD655,0xC778]}, /* 확인 */
		{keys: ['h','j','s'], chars: [0xCC28,0xC6D0]}, /* 차원 */
		{keys: ['e','h','j'], chars: [0xC62C,0xD574]}, /* 올해 */
		{keys: ['h','j','z'], chars: [0xCC45,0xC784]}, /* 책임 */
		{keys: ['c','h','j'], chars: [0xC5C5,0xCCB4]}, /* 업체 */
		{keys: ['a','h','j'], chars: [0xC601,0xD654]}, /* 영화 */
		{keys: ['f','h','j'], chars: [0xC544,0xD30C,0xD2B8]}, /* 아파트 */
		{keys: ['f','h','j','s'], chars: [0xB610,0xD55C,0x20]}, /* 또한 */
		{keys: ['d','f','h','j'], chars: [0xCC28,0xC774]}, /* 차이 */
		{keys: ['a','d','f','h','j'], chars: [0xD589,0xC704]}, /* 행위 */
		{keys: ['h','j','r','z'], chars: [0xC704,0xD5D8]}, /* 위험 */
		{keys: ['h','j','r','t'], chars: [0xC5EC,0xC804,0xD788]}, /* 여전히 */
		{keys: ['h','j','t','w'], chars: [0xC704,0xD611]}, /* 위협 */
		{keys: ['a','h','j','r'], chars: [0xC5C4,0xCCAD,0x20]}, /* 엄청  */
		{keys: ['a','h','j','t'], chars: [0xC601,0xD5A5]}, /* 영향 */
		{keys: ['h','j','v'], chars: [0xC624,0xD788,0xB824,0x20]}, /* 오히려  */
		{keys: ['h','j','v','x'], chars: [0xD639,0xC740,0x20]}, /* 혹은  */
		{keys: ['a','h','j','v'], chars: [0xB3D9,0xC77C]}, /* 통일 */
		{keys: ['f','h','j','s','v'], chars: [0xC644,0xC804,0xD788,0x20]}, /* 완전히  */
		{keys: ['.','f','h','j','s'], chars: [0xC644,0xC804,0xD788,0x20]}, /* 완전히  */
		{keys: ['d','h','j','v'], chars: [0xD68C,0xC758]}, /* 회의 */
		{keys: ['.','d','h','j'], chars: [0xD68C,0xC758]}, /* 회의 */
		{keys: ['b','h','j'], chars: [0xC774,0xD6C4]}, /* 이후 */
		{keys: ['b','h','j','r','s'], chars: [0xC6D0,0xD55C]}, /* 원한 */
		{keys: ['.','h','j','r','s'], chars: [0xC6D0,0xD55C]}, /* 원한 */
		{keys: ['b','d','h','j','s'], chars: [0xC704,0xC6D0,0xD68C]}, /* 위원회 */
		{keys: ['c','d','h','j','s'], chars: [0xC704,0xC6D0,0xD68C]}, /* 위원회 */
		{keys: ['b','h','j','v'], chars: [0xC624,0xD6C4]}, /* 오후 */
		{keys: ['.','b','h','j'], chars: [0xC624,0xD6C4]}, /* 오후 */
		{keys: ['g','h','j','s'], chars: [0xC740,0xD589]}, /* 은행 */
		{keys: ['d','h','j'], chars: [0xC774,0xD574]}, /* 이해 */
		{keys: ['j','r','s','u'], chars: [0xC5B8,0xB2C8]}, /* 언니 */
		{keys: ['e','j','u'], chars: [0xC5BC,0xB9C8,0xB098,0x20]}, /* 얼마나  */
		{keys: ['j','u','z'], chars: [0xB118,0xC5B4]}, /* 넘어 */
		{keys: ['a','j','u'], chars: [0xB0B4,0xC6A9]}, /* 내용 */
		{keys: ['f','j','u'], chars: [0xC774,0xB098,0x20]}, /* 이나  */
		{keys: ['e','f','j','u'], chars: [0xC774,0xB0A0]}, /* 이날 */
		{keys: ['d','f','j','u'], chars: [0xC544,0xB0B4]}, /* 아내 */
		{keys: ['j','r','u'], chars: [0xC5B4,0xBA38,0xB2C8]}, /* 어머니 */
		{keys: ['j','u','v'], chars: [0xC624,0xB298]}, /* 오늘 */
		{keys: ['a','j','u','v'], chars: [0xB18D,0xC5C5]}, /* 농업 */
		{keys: ['e','g','j','u'], chars: [0xB298,0xC5B4]}, /* 늘어 */
		{keys: ['d','g','j','u'], chars: [0xC73C,0xB2C8]}, /* 으니 */
		{keys: ['d','j','u'], chars: [0xB2C8,0xAE4C]}, /* 니까 */
		{keys: ['d','e','j','u'], chars: [0xB0B4,0xC77C]}, /* 내일 */
		{keys: ['d','j','u','z'], chars: [0xB290,0xB08C]}, /* 느낌 */
		/* 첫소리 ㅈ~ㅎ 조합 */
		{keys: ['l','x'], chars: [0xC870,0xC9C1]}, /* 조직 */
		{keys: ['a','l','x'], chars: [0xC9C1,0xC7A5]}, /* 직장 */
		{keys: ['l','w','x'], chars: [0xC9C1,0xC811,0x20]}, /* 직접  */
		{keys: ['l','s'], chars: [0xC874,0xC7AC]}, /* 존재 */
		{keys: ['a','l','s'], chars: [0xC804,0xC7C1]}, /* 전쟁 */
		{keys: ['e','l'], chars: [0xC2DC,0xC808]}, /* 시절 */
		{keys: ['l','z'], chars: [0xC870,0xAE08]}, /* 조금 */
		{keys: ['l','q'], chars: [0xC800,0xAC83]}, /* 저것 */
		{keys: ['a','l'], chars: [0xC815,0xB3C4]}, /* 정도 */
		{keys: [';','l','s'], chars: [0xC88B,0xC544]}, /* 좋아 */
		{keys: ['b','f','l'], chars: [0xC790,0xC8FC]}, /* 자주 */
		{keys: ['a','b','f','l'], chars: [0xC8FC,0xC7A5]}, /* 주장 */
		{keys: ['c','f','l'], chars: [0xC790,0xCCB4]}, /* 자체 */
		{keys: ['c','l','r'], chars: [0xC804,0xCCB4]}, /* 전체 */
		{keys: ['c','d','l','v'], chars: [0xC9C0,0xD61C]}, /* 지혜 */
		{keys: ['.','c','d','l'], chars: [0xC9C0,0xD61C]}, /* 지혜 */
		{keys: ['j','l','x'], chars: [0xC9C0,0xC5ED]}, /* 지역 */
		{keys: ['a','j','l','x'], chars: [0xC791,0xC6A9]}, /* 작용 */
		{keys: ['j','l','s'], chars: [0xC790,0xC5F0]}, /* 자연 */
		{keys: ['a','j','l','s'], chars: [0xC778,0xC815]}, /* 인정 */
		{keys: ['e','j','l'], chars: [0xC77C,0xC815]}, /* 일정 */
		{keys: ['j','l','x','z'], chars: [0xC8FD,0xC74C]}, /* 죽음 */
		{keys: ['a','j','l','w'], chars: [0xC785,0xC7A5]}, /* 입장 */
		{keys: ['j','l','z'], chars: [0xC544,0xCE68]}, /* 아침 */
		{keys: ['j','l','w'], chars: [0xC791,0xC5C5]}, /* 작업 */
		{keys: ['a','j','l'], chars: [0xC911,0xC694]}, /* 중요 */
		{keys: [';','e','j','l'], chars: [0xCC3E,0xC544]}, /* 찾아 */
		{keys: ['b','f','j','l'], chars: [0xC544,0xC8FC,0x20]}, /* 아주  */
		{keys: ['a','b','f','j','l'], chars: [0xC911,0xC559]}, /* 중앙 */
		{keys: ['b','g','j','l'], chars: [0xC8FC,0xC758]}, /* 주의 */
		{keys: ['c','j','l','r'], chars: [0xC5B4,0xC81C]}, /* 어제 */
		{keys: ['c','j','l','r','s'], chars: [0xC5B8,0xC81C]}, /* 언제 */
		{keys: ['a','c','j','l','r'], chars: [0xC608,0xC815]}, /* 예정 */
		{keys: ['f','g','j','l','z'], chars: [0xC694,0xC998]}, /* 요즘 */
		{keys: ['g','j','l','r'], chars: [0xC815,0xC758]}, /* 정의 */
		{keys: ['h','l','x'], chars: [0xC815,0xCC45]}, /* 정책 */
		{keys: ['a','h','l','x'], chars: [0xC815,0xD655]}, /* 정확 */
		{keys: ['a','h','l','s'], chars: [0xD604,0xC7A5]}, /* 현장 */
		{keys: ['e','h','l','s'], chars: [0xCD9C,0xC2E0]}, /* 출신 */
		{keys: ['h','l','z'], chars: [0xCC98,0xC74C]}, /* 처음 */
		{keys: ['h','l','w'], chars: [0xC870,0xD569]}, /* 조합 */
		{keys: ['a','h','l'], chars: [0xC815,0xCE58]}, /* 정치 */
		{keys: ['h','l','r','t'], chars: [0xC804,0xD600,0x20]}, /* 전혀  */
		{keys: ['h','k','x'], chars: [0xAC1C,0xD601]}, /* 개혁 */
		{keys: ['h','k','s'], chars: [0xD658,0xACBD]}, /* 환경 */
		{keys: ['e','h','k','s'], chars: [0xACB0,0xD63C]}, /* 결혼 */
		{keys: ['h','k','z'], chars: [0xCEF4,0xD4E8,0xD130]}, /* 컴퓨터 */
		{keys: ['a','k','r','t'], chars: [0xACBD,0xD5D8]}, /* 경험 */
		{keys: ['c','f','h','k'], chars: [0xD55C,0xACC4]}, /* 한계 */
		{keys: ['c','d','k','v','x'], chars: [0xACC4,0xD68D]}, /* 계획 */
		{keys: ['.','c','d','k','x'], chars: [0xACC4,0xD68D]}, /* 계획 */
		{keys: ['g','h','k','t'], chars: [0xACBD,0xD5A5]}, /* 경향 */
		{keys: ['f','g','h','k'], chars: [0xD55C,0xAE00]}, /* 한글 */
		{keys: ['h','i','x'], chars: [0xD2B9,0xD788,0x20]}, /* 특히  */
		{keys: ['a','i','n','x'], chars: [0xD2B9,0xC131]}, /* 특성 */
		{keys: ['h','i','s','x'], chars: [0xB300,0xD55C,0xBBFC,0xAD6D]}, /* 대한민국 */
		{keys: ['h','i','s'], chars: [0xB300,0xD55C]}, /* 대한 */
		{keys: ['a','h','i','s'], chars: [0xB3D9,0xC2E0]}, /* 통신 */
		{keys: ['e','h','i'], chars: [0xD65C,0xB3D9]}, /* 활동 */
		{keys: ['h','i','z'], chars: [0xD68C,0xB2F4]}, /* 회담 */
		{keys: ['a','i','m'], chars: [0xB300,0xB3D9,0xB839]}, /* 대통령 */
		{keys: ['c','f','h','i'], chars: [0xD55C,0xD14C,0x20]}, /* 한테  */
		{keys: ['a','h','o','x'], chars: [0xD589,0xBCF5]}, /* 행복 */
		{keys: ['h','o','s'], chars: [0xBD81,0xD55C]}, /* 북한 */
		{keys: ['e','h','o'], chars: [0xD544,0xC694]}, /* 필요 */
		{keys: ['n','o','z'], chars: [0xC0C1,0xD488]}, /* 상품 */
		{keys: ['a','h','o'], chars: [0xD45C,0xC815]}, /* 표정 */
		{keys: ['h','o','r','t'], chars: [0xD45C,0xD604]}, /* 표현 */
		{keys: ['l','u','x'], chars: [0xC791,0xB144]}, /* 작년 */
		{keys: ['l','s','u'], chars: [0xB294,0xC9C0,0x20]}, /* 는지  */
		{keys: ['l','u','z'], chars: [0xC8FC,0xB2D8]}, /* 주님 */
		{keys: ['a','l','u'], chars: [0xB098,0xC911]}, /* 나중 */
		{keys: ['f','l','s','u'], chars: [0xC9C0,0xB09C,0x20]}, /* 지난  */
		{keys: ['l','r','u'], chars: [0xC800,0xB141]}, /* 저녁 */
		{keys: ['d','l','u'], chars: [0xC9C0,0xB098]}, /* 지나 */
		{keys: ['h','x'], chars: [0xD559,0xAD50]}, /* 학교 */
		{keys: ['h','s'], chars: [0xD55C,0xAD6D]}, /* 한국 */
		{keys: ['e','h'], chars: [0xD560,0xBA38,0xB2C8]}, /* 할머니 */
		{keys: ['h','z'], chars: [0xD568,0xAED8,0x20]}, /* 함께  */
		{keys: ['a','h'], chars: [0xD56D,0xC0C1,0x20]}, /* 항상  */
		{keys: ['h','x','y'], chars: [0xBB38,0xD559]}, /* 문학 */
		{keys: ['h','y','z'], chars: [0xB9CC,0xD07C,0x20]}, /* 만큼  */
		{keys: ['a','h','y'], chars: [0xD76C,0xB9DD]}, /* 희망 */
		{keys: ['g','h','x','y'], chars: [0xCE21,0xBA74]}, /* 측면 */
		{keys: ['d','h','y'], chars: [0xBBF8,0xD130]}, /* 미터 */
		{keys: ['h','u','x'], chars: [0xD559,0xB144]}, /* 학년 */
		{keys: ['e','h','u'], chars: [0xD558,0xB298]}, /* 하늘 */
		{keys: ['h','u','z'], chars: [0xD558,0xB098,0xB2D8]}, /* 하나님 */
		{keys: ['f','h','u'], chars: [0xD558,0xB098]}, /* 하나 */
		{keys: ['a','h','r','u'], chars: [0xCCAD,0xC18C,0xB144]}, /* 청소년 */
		//160823 약어 추가
		{keys: ['a','b','f','j','l','s'], chars: [0xC704,0xC6D0,0xC7A5]}, /* 위원장 */
		{keys: ['a','h','i'], chars: [0xD589,0xB3D9]}, /* 행동 */
		{keys: ['a','i','k','s'], chars: [0xADF8,0xB3D9,0xC548]}, /* 그동안 */
		{keys: ['j','n','w'], chars: [0xC0AC,0xC5C5]}, /* 사업 */
		{keys: ['d','f','l','s','u'], chars: [0xC9C0,0xB09C,0xD574]}, /* 지난해 */
		{keys: ['d','k','n'], chars: [0xC2DC,0xAE30]}, /* 시기 */
		{keys: ['g','k','m','r'], chars: [0xADF8,0xB7EC]}, /* 그러 */
		{keys: ['e','f','l','o'], chars: [0xD560,0xC544,0xBC84,0xC9C0]}, /* 할아버지 */
		{keys: ['a','f','k','l'], chars: [0xACF5,0xC7A5]}, /* 공장 */
		{keys: ['i','j','z'], chars: [0xB3C4,0xC6C0]}, /* 도움 */
		{keys: ['f','j','u','v'], chars: [0xC624,0xB298,0xB0A0]}, /* 오늘날 */
		{keys: ['.','f','j','u'], chars: [0xC624,0xB298,0xB0A0]}, /* 오늘날 */
		{keys: ['e','h','k'], chars: [0xACB0,0xCF54,0x20]}, /* 결코  */
		{keys: ['f','n','o','v'], chars: [0xC18C,0xBE44,0xC790]}, /* 소비자 */
		{keys: ['.','f','n','o'], chars: [0xC18C,0xBE44,0xC790]}, /* 소비자 */
		{keys: ['a','f','i','u'], chars: [0xB178,0xB3D9,0xC790]}, /* 노동자 */
		{keys: ['b','d','h','j'], chars: [0xC704,0xCE58]}, /* 위치 */
		{keys: ['c','d','h','j'], chars: [0xC704,0xCE58]}, /* 위치 */
		{keys: ['j','q'], chars: [0xC774,0xC6C3]}, /* 이웃 */
		{keys: ['f','k','l','s'], chars: [0xAD00,0xACC4,0xC790]}, /* 관계자 */
		{keys: ['d','k','l','v'], chars: [0xCD08,0xAE30]}, /* 초기 */
		{keys: ['.','d','k','l'], chars: [0xCD08,0xAE30]}, /* 초기 */
		{keys: ['a','h','k'], chars: [0xACE0,0xD5A5]}, /* 고향 */
		{keys: [';','s','u'], chars: [0xB0B4,0xB193]}, /* 내놓 */
		{keys: ['b','g','k','l'], chars: [0xADF8,0xC911]}, /* 그중 */
		{keys: ['d','j','s','u'], chars: [0xB178,0xC778]}, /* 노인 */
		{keys: ['a','f','l','n'], chars: [0xC0AC,0xC7A5]}, /* 사장 */
		{keys: ['a','l','n','r'], chars: [0xC131,0xC7A5]}, /* 성장 */
		{keys: ['a','l','n','v'], chars: [0xC7A5,0xC18C]}, /* 장소 */
		{keys: ['f','i','o','s'], chars: [0xD310,0xB2E8]}, /* 판단 */
		{keys: ['d','k','m'], chars: [0xAC70,0xB9AC]}, /* 거리 */
		{keys: ['o','y','z'], chars: [0xBD80,0xBAA8,0xB2D8]}, /* 부모님 */
		{keys: ['b','e','l','n'], chars: [0xC218,0xCD9C]}, /* 수출 */
		{keys: ['d','m','y'], chars: [0xBBF8,0xB9AC,0x20]}, /* 미리  */
		{keys: ['f','m','y'], chars: [0xB9C8,0xB9AC]}, /* 마리 */
		{keys: ['d','f','m','y'], chars: [0xBBF8,0xB798]}, /* 미래 */
		{keys: ['l','r','x','y'], chars: [0xBB34,0xCC99,0x20]}, /* 무척  */
		{keys: ['a','d','k','o'], chars: [0xBE44,0xD589,0xAE30]}, /* 비행기 */
		{keys: ['d','f','j','m','s'], chars: [0xC6D0,0xB798]}, /* 원래 */
		{keys: ['b','m','o'], chars: [0xBFCC,0xB9AC]}, /* 뿌리 */
		{keys: ['g','k','m','t'], chars: [0xADF8,0xB9AC,0xD558,0xC5EC,0x20]}, /* 그리하여 */
		{keys: ['j','l','s','x'], chars: [0xC9C1,0xC6D0]}, /* 직원 */
		{keys: ['b','o','u'], chars: [0xB0B4,0xBD80]}, /* 내부 */
		{keys: ['f','i','n','v'], chars: [0xB2E4,0xC18C,0x20]}, /* 다소  */
		{keys: ['.','f','i','n'], chars: [0xB2E4,0xC18C,0x20]}, /* 다소  */
		{keys: ['c','f','k'], chars: [0xAC00,0xAC8C]}, /* 가게 */
		{keys: ['g','i','k','x'], chars: [0xAC00,0xB4DD,0x20]}, /* 가득  */
		{keys: ['b','f','k','l','s'], chars: [0xC7A5,0xAD70]}, /* 장군 */
		{keys: ['b','t','y'], chars: [0xBB34,0xC5ED]}, /* 무역 */
		{keys: ['b','f','i','o'], chars: [0xBD80,0xB2F4]}, /* 부담 */
		{keys: ['a','l','o','s'], chars: [0xCDA9,0xBD84]}, /* 충분 */
		{keys: ['a','d','l','o','s'], chars: [0xCDA9,0xBD84,0xD788,0x20]}, /* 충분히  */
		{keys: ['c','l','u'], chars: [0xC5D0,0xB108,0xC9C0]}, /* 에너지 */
		{keys: ['a','l','m','r'], chars: [0xC815,0xB9AC]}, /* 정리 */
		{keys: ['j','l','s','w'], chars: [0xC9D1,0xC548]}, /* 집안 */
		{keys: ['d','f','k','o'], chars: [0xBC30,0xACBD]}, /* 배경 */
		{keys: ['b','i','n','s'], chars: [0xB2E8,0xC21C]}, /* 단순 */
		{keys: ['d','h','n'], chars: [0xB2E8,0xC21C,0xD788,0x20]}, /* 단순히  */
		{keys: ['f','i','n','s'], chars: [0xC218,0xB2E8]}, /* 수단 */
		{keys: ['l','o','w'], chars: [0xBC95,0xCE59]}, /* 법칙 */
		{keys: ['k','n','v','z'], chars: [0xC18C,0xAE08]}, /* 소금 */
		{keys: ['f','k','l','r','s'], chars: [0xC790,0xC804,0xAC70]}, /* 자전거 */
		{keys: ['d','l','o','v'], chars: [0xBC94,0xC8C4]}, /* 범죄 */
		{keys: ['.','d','l','o'], chars: [0xBC94,0xC8C4]}, /* 범죄 */
		{keys: ['m','s','u'], chars: [0xB17C,0xB9AC]}, /* 논리 */
		{keys: ['f','g','i','m'], chars: [0xB4DC,0xB77C,0xB9C8]}, /* 드라마 */
		{keys: ['g','h','l','r'], chars: [0xC800,0xD76C]}, /* 저희 */
		{keys: ['g','h','r','u'], chars: [0xB108,0xD76C]}, /* 너희 */
		{keys: ['a','f','i','k','r'], chars: [0xAD50,0xB3D9]}, /* 교통 */
		{keys: ['.','a','i','k','v'], chars: [0xAD50,0xB3D9]}, /* 교통 */
		{keys: ['e','j','l','z'], chars: [0xC80A,0xC740]}, /* 젊은 */
		{keys: ['k','n','s','v'], chars: [0xC190,0xAC00,0xB77D]}, /* 손가락 */
		{keys: ['g','k','l','r'], chars: [0xC801,0xADF9]}, /* 적극 */
		{keys: ['g','k','l','r','x'], chars: [0xC801,0xADF9,0xC801]}, /* 적극적 */
		{keys: ['d','f','o','y'], chars: [0xD310,0xB9E4]}, /* 판매 */
		{keys: ['a','h','n','r','t'], chars: [0xD615,0xC131]}, /* 형성 */
		{keys: ['a','l','s','y'], chars: [0xC7A5,0xBA74]}, /* 장면 */
		{keys: ['d','u','y'], chars: [0xB098,0xBA38,0xC9C0]}, /* 나머지 */
		{keys: ['e','n','u'], chars: [0xB0A0,0xC528]}, /* 날씨 */
		{keys: ['a','d','f','k','o'], chars: [0xAC1C,0xBC29]}, /* 개방 */
		{keys: ['j','o','r','t'], chars: [0xC5EC,0xB7EC,0xBD84]}, /* 여러분 */
		{keys: ['d','f','h','u','v'], chars: [0xC65C,0xB0D0,0xD558,0xBA74,0x20]}, /* 왜냐하면  */
		{keys: ['.','d','f','h','u'], chars: [0xC65C,0xB0D0,0xD558,0xBA74,0x20]}, /* 왜냐하면  */
		{keys: ['d','f','i','k'], chars: [0xAE30,0xB300]}, /* 기대 */
		{keys: ['f','i','l','x'], chars: [0xB3C4,0xCC29]}, /* 도착 */
		{keys: ['c','n','o','r'], chars: [0xC18C,0xD504,0xD2B8,0xC6E8,0xC5B4]}, /* 소프트웨어 */
		{keys: ['f','g','i','j'], chars: [0xB530,0xB73B]}, /* 따뜻 */
		{keys: ['c','i','n'], chars: [0xC138,0xB300]}, /* 세대 */
		{keys: ['b','k','l','x'], chars: [0xCD95,0xAD6C]}, /* 축구 */
		{keys: ['a','h','t','u'], chars: [0xD615,0xB2D8]}, /* 형님 */
		{keys: ['a','f','i','l'], chars: [0xB2F9,0xC7A5]}, /* 당장 */
		{keys: ['b','t','w','y'], chars: [0xBB34,0xB835]}, /* 무렵 */
		{keys: ['e','f','n','y'], chars: [0xC0AC,0xBB3C]}, /* 사물 */
		{keys: ['e','l','o','r','s'], chars: [0xC77C,0xBC18,0xC801]}, /* 일반적 */
		{keys: ['f','i','o','x'], chars: [0xBC14,0xB2E5]}, /* 바닥 */
		{keys: ['b','k','n'], chars: [0xAD50,0xC218]}, /* 교수 */
		{keys: ['d','f','k','n'], chars: [0xC0C8,0xB07C]}, /* 새끼 */
		{keys: ['d','g','n','o'], chars: [0xC11C,0xBE44,0xC2A4]}, /* 서비스 */
		{keys: ['i','n','r','s'], chars: [0xC120,0xD0DD]}, /* 선택 */
		{keys: ['f','i','k','s'], chars: [0xAC04,0xB2E8]}, /* 간단 */
		{keys: ['c','f','i','k'], chars: [0xAC8C,0xB2E4,0xAC00,0x20]}, /* 게다가  */
		{keys: ['a','g','i','k'], chars: [0xACE0,0xB4F1]}, /* 고등 */
		{keys: ['c','h','y'], chars: [0xB9E4,0xCCB4]}, /* 매체 */
		{keys: ['f','l','o','w'], chars: [0xBCF5,0xC7A1]}, /* 복잡 */
		{keys: ['c','h','l','r'], chars: [0xCCB4,0xD5D8]}, /* 체험 */
		{keys: ['b','k','n','x'], chars: [0xAD6C,0xC18D]}, /* 구속 */
		{keys: ['d','f','i','m','v'], chars: [0xB54C,0xB85C,0x20]}, /* 때로  */
		{keys: ['.','d','f','i','m'], chars: [0xB54C,0xB85C,0x20]}, /* 때로  */
		{keys: ['l','r','t'], chars: [0xC5B4,0xCA4C,0xBA74,0x20]}, /* 어쩌면  */
		{keys: ['k','o','x'], chars: [0xADF9,0xBCF5]}, /* 극복 */
		{keys: ['e','o','y'], chars: [0xBE44,0xBC00]}, /* 비밀 */
		{keys: ['j','t','u'], chars: [0xC774,0xB150]}, /* 이념 */
		{keys: ['l','q','y'], chars: [0xC798,0xBABB]}, /* 잘못 */
		{keys: ['f','n','o','x'], chars: [0xBC15,0xC0AC]}, /* 박사 */
		{keys: ['b','l','r','s'], chars: [0xC804,0xBB38,0xAC00]}, /* 전문가 */
		{keys: ['b','f','k','l'], chars: [0xC790,0xAFB8,0x20]}, /* 자꾸  */
		{keys: ['d','f','h','j','v'], chars: [0xD574,0xC678]}, /* 해외 */
		{keys: ['.','d','f','h','j'], chars: [0xD574,0xC678]}, /* 해외 */
		{keys: ['d','n','v','y'], chars: [0xBBF8,0xC18C]}, /* 미소 */
		{keys: ['.','d','n','y'], chars: [0xBBF8,0xC18C]}, /* 미소 */
		{keys: ['a','i','o','v'], chars: [0xBCF4,0xB3D9]}, /* 보통 */
		{keys: ['d','i','n','x'], chars: [0xC2DD,0xB2F9]}, /* 식당 */
		{keys: ['d','j','m'], chars: [0xC774,0xB798]}, /* 이래 */
		{keys: ['b','c','h','j'], chars: [0xCCB4,0xC721]}, /* 체육 */
		{keys: ['g','i','v'], chars: [0xB3C5,0xD2B9]}, /* 독특 */
		{keys: ['c','m','n','v'], chars: [0xC0AC,0xB840]}, /* 사례 */
		{keys: ['a','k','o','s'], chars: [0xD3C9,0xADE0]}, /* 평균 */
		{keys: ['a','d','k','l','z'], chars: [0xAC10,0xC815]}, /* 김정 */
		{keys: ['h','m','s'], chars: [0xD6C8,0xB828]}, /* 훈련 */
		{keys: ['h','m','z'], chars: [0xD750,0xB984]}, /* 흐름 */
		{keys: ['s','u','y'], chars: [0xB17C,0xBB38]}, /* 논문 */
		{keys: ['a','j','s'], chars: [0xC624,0xB7AB,0xB3D9,0xC548]}, /* 오랫동안 */
		{keys: ['m','o','v','x'], chars: [0xD3ED,0xB825]}, /* 폭력 */
		{keys: ['h','n','v','x'], chars: [0xD639,0xC2DC,0x20]}, /* 혹시  */
		{keys: ['d','m','o','v','x'], chars: [0xC62C,0xB9BC,0xD53D]}, /* 올림픽 */
		{keys: ['.','d','m','o','x'], chars: [0xC62C,0xB9BC,0xD53D]}, /* 올림픽 */
		{keys: ['a','c','k','l'], chars: [0xC81C,0xACF5]}, /* 제공 */
		{keys: ['a','f','g','k','l'], chars: [0xC99D,0xAC00]}, /* 증가 */
		{keys: ['i','l','r','x'], chars: [0xC801,0xC5B4,0xB3C4,0x20]}, /* 적어도  */
		{keys: ['b','k','m','r','s'], chars: [0xAD8C,0xB9AC]}, /* 권리 */
		{keys: ['.','k','m','r','s'], chars: [0xAD8C,0xB9AC]}, /* 권리 */
		{keys: ['j','m','r','t','z'], chars: [0xC5B4,0xB824,0xC6C0]}, /* 어려움 */
		{keys: ['b','f','j','l','s'], chars: [0xC790,0xC6D0]}, /* 자원 */
		{keys: ['b','c','h','y'], chars: [0xBB3C,0xCCB4]}, /* 물체 */
		{keys: ['a','d','o','y'], chars: [0xBD84,0xBA85,0xD788,0x20]}, /* 분명히  */
		{keys: ['b','f','j','q'], chars: [0xC544,0xBB34,0xAC83]}, /* 아무것 */
		{keys: ['a','n','o','t'], chars: [0xD3C9,0xC18C]}, /* 평소 */
		{keys: ['b','f','i','k'], chars: [0xB354,0xAD6C,0xB098,0x20]}, /* 더구나  */
		{keys: ['g','i','l','r'], chars: [0xC5B4,0xCA0C,0xB4E0,0x20]}, /* 어쨌든  */
		{keys: ['b','i','l','x'], chars: [0xC8FC,0xD0DD]}, /* 주택 */
		{keys: ['e','s','u'], chars: [0xB208,0xAE38]}, /* 눈길 */
		{keys: ['g','i','n'], chars: [0xC2A4,0xD2B8,0xB808,0xC2A4]}, /* 스트레스 */
		{keys: ['e','m','u'], chars: [0xB110,0xB9AC,0x20]}, /* 널리  */
		{keys: ['h','s','u','v'], chars: [0xB18D,0xCD0C]}, /* 농촌 */
		{keys: ['d','f','l','n','v'], chars: [0xC18C,0xC7AC]}, /* 소재 */
		{keys: ['.','d','f','l','n'], chars: [0xC18C,0xC7AC]}, /* 소재 */
		{keys: ['a','f','l','y'], chars: [0xC804,0xB9DD]}, /* 전망 */
		{keys: ['d','k','o','v'], chars: [0xD3EC,0xAE30]}, /* 포기 */
		{keys: ['.','d','k','o'], chars: [0xD3EC,0xAE30]}, /* 포기 */
		{keys: ['k','o','v'], chars: [0xBCF4,0xACE0]}, /* 보고 */
		{keys: ['f','k','o','r'], chars: [0xBE44,0xAD50]}, /* 비교 */
		{keys: ['.','k','o','v'], chars: [0xBE44,0xAD50]}, /* 비교 */
		{keys: ['f','k','o','r','x'], chars: [0xBE44,0xAD50,0xC801]}, /* 비교적 */
		{keys: ['.','k','o','v','x'], chars: [0xBE44,0xAD50,0xC801]}, /* 비교적 */
		{keys: ['k','n','r','z'], chars: [0xAC80,0xC0AC]}, /* 검사 */
		{keys: ['k','m','s','v'], chars: [0xACB0,0xB860]}, /* 결론 */
		{keys: ['f','o','x','y'], chars: [0xBC15,0xBB3C,0xAD00]}, /* 박물관 */
		{keys: ['n','v','y'], chars: [0xC18C,0xBB38]}, /* 소문 */
		{keys: ['l','t','u'], chars: [0xC790,0xB140]}, /* 자녀 */
		{keys: ['c','l','v','y'], chars: [0xC81C,0xBAA9]}, /* 제목 */
		{keys: ['e','k','o','t'], chars: [0xD310,0xACB0]}, /* 판결 */
		{keys: ['a','f','k','o'], chars: [0xAC00,0xBC29]}, /* 가방 */
		{keys: ['b','i','k','s'], chars: [0xAD70,0xB300]}, /* 군대 */
		{keys: ['g','h','y','z'], chars: [0xADF8,0xB9CC,0xD07C]}, /* 그만큼 */
		{keys: ['a','d','f','i','o'], chars: [0xC0C1,0xB300,0xBC29]}, /* 상대방 */
		{keys: ['b','k','n','r'], chars: [0xC11C,0xAD6C]}, /* 서구 */
		{keys: ['e','k','n','v'], chars: [0xC2DC,0xACE8]}, /* 시골 */
		{keys: ['d','l','m','v'], chars: [0xCE58,0xB8CC]}, /* 치료 */
		{keys: ['.','d','l','m'], chars: [0xCE58,0xB8CC]}, /* 치료 */
		{keys: ['b','o','s','y'], chars: [0xBD80,0xBB38]}, /* 부문 */
		{keys: ['d','g','l','n'], chars: [0xC2DC,0xB9AC,0xC988]}, /* 시리즈 */
		{keys: ['j','n','s','z'], chars: [0xC784,0xC2E0]}, /* 임신 */
		{keys: ['d','k','n','x'], chars: [0xC2DD,0xAD6C]}, /* 식구 */
		{keys: ['d','f','k','n','s'], chars: [0xAC1C,0xC120]}, /* 개선 */
		{keys: ['m','o','x','z'], chars: [0xBC14,0xB78C,0xC9C1]}, /* 바람직 */
		{keys: ['d','j','m','v'], chars: [0xB77C,0xB514,0xC624]}, /* 라디오 */
		{keys: ['.','d','j','m'], chars: [0xB77C,0xB514,0xC624]}, /* 라디오 */
		{keys: ['a','i','o','s','v'], chars: [0xBD80,0xB3D9,0xC0B0]}, /* 부동산 */
		{keys: ['f','h','n','v'], chars: [0xC2E0,0xD654]}, /* 신화 */
		{keys: ['.','f','h','n'], chars: [0xC2E0,0xD654]}, /* 신화 */
		{keys: ['j','l','w','x'], chars: [0xC9C1,0xC5C5]}, /* 직업 */
		{keys: ['o','z'], chars: [0xBC94,0xC704]}, /* 범위 */
		{keys: ['a','f','l','n','v'], chars: [0xC870,0xC0C1]}, /* 조상 */
		{keys: ['.','a','f','l','n'], chars: [0xC870,0xC0C1]}, /* 조상 */
		{keys: ['e','h','l','x'], chars: [0xCCA0,0xD559]}, /* 철학 */
		{keys: ['g','k','o','x'], chars: [0xADFC,0xBCF8,0xC801]}, /* 근본적 */
		{keys: ['k','o','v','x'], chars: [0xBCF8,0xACA9,0xC801]}, /* 본격적 */
		{keys: ['d','k','o','x'], chars: [0xAE30,0xBCF8,0xC801]}, /* 기본적 */
		{keys: ['c','l','y','z'], chars: [0xBB38,0xC81C,0xC810]}, /* 문제점 */
		{keys: ['a','k','l','x'], chars: [0xCDA9,0xACA9]}, /* 충격 */
		{keys: ['g','k','o','z'], chars: [0xAE08,0xBC29,0x20]}, /* 금방  */
		{keys: ['b','e','n','y'], chars: [0xBBF8,0xC220]}, /* 미술 */
		{keys: ['d','f','n','o','x'], chars: [0xBC31,0xC131]}, /* 백성 */
		{keys: ['a','f','h','n'], chars: [0xC0C1,0xB2F9,0xD788,0x20]}, /* 상당히  */
		{keys: ['e','f','k','n'], chars: [0xC0C9,0xAE54]}, /* 색깔 */
		{keys: ['a','b','t','y'], chars: [0xC720,0xBA85]}, /* 유명 */
		{keys: ['j','k','s','v','x'], chars: [0xC678,0xAD6D,0xC778]}, /* 외국인 */
		{keys: ['.','j','k','s','x'], chars: [0xC678,0xAD6D,0xC778]}, /* 외국인 */
		{keys: ['h','l','s','z'], chars: [0xD55C,0xCC38]}, /* 한참 */
		{keys: ['b','f','k','n','s'], chars: [0xAD70,0xC0AC]}, /* 군사 */
		{keys: ['b','c','l','n','x'], chars: [0xC219,0xC81C]}, /* 숙제 */
		{keys: ['c','f','j','n','s'], chars: [0xC608,0xC0B0]}, /* 예산 */
		{keys: [';','e','j','k'], chars: [0xC628,0xAC16,0x20]}, /* 온갖  */
		{keys: ['b','m','t'], chars: [0xC6B0,0xB824]}, /* 우려 */
		{keys: ['b','f','j','n','s'], chars: [0xC6B0,0xC0B0]}, /* 우산 */
		{keys: ['b','f','j','n'], chars: [0xC218,0xC694]}, /* 수요 */
		{keys: ['d','g','k','o'], chars: [0xAE30,0xC068]}, /* 기쁨 */
		{keys: [';','w','y'], chars: [0xBB34,0xB98E]}, /* 무릎 */
		{keys: ['c','i','n','z'], chars: [0xC2DC,0xC2A4,0xD15C]}, /* 시스템 */
		{keys: ['d','e','f','l','u'], chars: [0xC9C0,0xB09C,0xB2EC]}, /* 지난달 */
		{keys: ['f','h','j','z'], chars: [0xCC38,0xC5EC]}, /* 참여 */
		{keys: ['e','g','j','k','r'], chars: [0xAC78,0xC74C]}, /* 걸음 */
		{keys: ['b','k','t'], chars: [0xACA8,0xC6B0,0x20]}, /* 겨우  */
		{keys: ['d','f','l','n','x'], chars: [0xCC45,0xC0C1]}, /* 책상 */
		{keys: ['g','i','n','x'], chars: [0xC18C,0xB4DD]}, /* 소득 */
		{keys: ['d','i','l','z'], chars: [0xCE68,0xB300]}, /* 침대 */
		{keys: ['f','g','i','n'], chars: [0xC2A4,0xD0C0]}, /* 스타 */
		{keys: ['e','j','n','w'], chars: [0xC785,0xC220]}, /* 입술 */
		{keys: ['a','b','k','l'], chars: [0xC911,0xAC04]}, /* 중간 */
		{keys: ['n','v','w','y'], chars: [0xBAB9,0xC2DC,0x20]}, /* 몹시  */
		{keys: ['b','g','i'], chars: [0xBB38,0xB4DD,0x20]}, /* 문득  */
		{keys: ['g','n','o'], chars: [0xC2A4,0xD3EC,0xCE20]}, /* 스포츠 */
		{keys: ['k','l','r'], chars: [0xC800,0xAE30]}, /* 저기 */
		{keys: ['g','k','l'], chars: [0xADF8,0xC800,0x20]}, /* 그저 */
		{keys: ['c','f','j','l','s'], chars: [0xC5B8,0xC820,0xAC00,0x20]}, /* 언젠가  */
		{keys: ['c','f','j','n'], chars: [0xC608,0xC220,0xAC00]}, /* 예술가 */
		{keys: ['g','i','j','v'], chars: [0xC758,0xB3C4]}, /* 의도 */
		{keys: ['f','h','s','y'], chars: [0xAC00,0xB9CC,0xD788,0x20]}, /* 가만히  */
		{keys: ['b','f','h','i','s'], chars: [0xD55C,0xB450,0x20]}, /* 한두  */
		{keys: ['d','f','h','j','s'], chars: [0xD55C,0xB54C]}, /* 한때 */
		{keys: ['a','d','f','i','n','x'], chars: [0xC0C1,0xB300,0xC801]}, /* 상대적 */
		{keys: ['d','n','o','x'], chars: [0xC2DD,0xD488]}, /* 식품 */
		{keys: ['.','d','h','j','s'], chars: [0xD68C,0xC6D0]}, /* 회원 */
		{keys: ['d','h','j','s','v'], chars: [0xD68C,0xC6D0]}, /* 회원 */
		{keys: ['i','n','r','v'], chars: [0xB3C4,0xC11C,0xAD00]}, /* 도서관 */
		{keys: ['.','i','n','r'], chars: [0xB3C4,0xC11C,0xAD00]}, /* 도서관 */
		{keys: ['d','l','v','y'], chars: [0xC870,0xBBF8,0xB8CC]}, /* 조미료 */
		{keys: ['.','d','l','y'], chars: [0xC870,0xBBF8,0xB8CC]}, /* 조미료 */
		{keys: ['a','f','k','m'], chars: [0xAC15,0xB825]}, /* 강력 */
		{keys: ['e','g','u','y'], chars: [0xB9C8,0xB298]}, /* 마늘 */
		{keys: ['g','k','n','w'], chars: [0xC2B5,0xAD00]}, /* 습관 */
		{keys: ['e','h','l'], chars: [0xC9C0,0xD558,0xCCA0]}, /* 지하철 */
		{keys: ['h','s','t','y'], chars: [0xD654,0xBA74]}, /* 화면 */
		{keys: ['f','i','o','r','x'], chars: [0xB300,0xD45C,0xC801]}, /* 대표적 */
		{keys: ['.','i','o','v','x'], chars: [0xB300,0xD45C,0xC801]}, /* 대표적 */
		{keys: ['b','l','o'], chars: [0xC8FC,0xBD80]}, /* 주부 */
		{keys: ['d','l','m','s'], chars: [0xC9C4,0xB9AC]}, /* 진리 */
		{keys: ['h','i','q','w'], chars: [0xD2C0,0xB9BC,0xC5C6]}, /* 틀림없 */
		{keys: ['a','k','w'], chars: [0xACF5,0xAE09]}, /* 공급 */
		{keys: ['a','i','m','v'], chars: [0xB3D9,0xB8CC]}, /* 동료 */
		{keys: ['a','h','k','s'], chars: [0xADE0,0xD615]}, /* 균형 */
		{keys: ['f','n','y'], chars: [0xC0AC,0xBB34]}, /* 사무 */
		{keys: ['k','l','r','w'], chars: [0xC811,0xADFC]}, /* 접근 */
		{keys: ['a','f','k','n','r'], chars: [0xAC1C,0xC131]}, /* 개성 */
		{keys: ['f','h','n','x'], chars: [0xC0AC,0xD68C,0xC801]}, /* 사회적 */
		{keys: ['d','f','h','n','x'], chars: [0xD575,0xC2EC]}, /* 핵심 */
		{keys: ['a','f','o','y'], chars: [0xBC29,0xBB38]}, /* 방문 */
		{keys: ['.','f','k','s','x'], chars: [0xAD00,0xAC1D]}, /* 관객 */
		{keys: ['f','k','s','v','x'], chars: [0xAD00,0xAC1D]}, /* 관객 */
		{keys: ['a','i','l','x'], chars: [0xB3D9,0xC791]}, /* 동작 */
		{keys: ['d','e','m','y'], chars: [0xBC00,0xB9AC]}, /* 밀리 */
		{keys: ['b','f','l','n'], chars: [0xC22B,0xC790]}, /* 숫자 */
		{keys: ['j','l','s','v','x'], chars: [0xC67C,0xCABD]}, /* 왼쪽 */
		{keys: ['.','j','l','s','x'], chars: [0xC67C,0xCABD]}, /* 왼쪽 */
		{keys: ['l','m','v','x'], chars: [0xC624,0xB978,0xCABD]}, /* 오른쪽 */
		{keys: ['b','c','l','n'], chars: [0xC911,0xC138]}, /* 중세 */
		{keys: ['d','f','i','n','x'], chars: [0xD0DD,0xC2DC]}, /* 택시 */
		{keys: ['a','h','i','w'], chars: [0xB3D9,0xD569]}, /* 통합 */
		{keys: ['c','k','n','s','v'], chars: [0xACC4,0xC0B0]}, /* 계산 */
		{keys: ['d','k','m','v'], chars: [0xAF2C,0xB9AC]}, /* 꼬리 */
		{keys: ['.','d','k','m'], chars: [0xAF2C,0xB9AC]}, /* 꼬리 */
		{keys: ['a','j','n','x'], chars: [0xC591,0xC2DD]}, /* 양식 */
		{keys: ['d','k','l','s'], chars: [0xC804,0xAE30]}, /* 전기 */
		{keys: ['b','l','n','x'], chars: [0xC8FC,0xC2DD]}, /* 주식 */
		{keys: ['j','k','q','w'], chars: [0xB04A,0xC784,0xC5C6]}, /* 끊임없 */
		{keys: ['a','n','x'], chars: [0xC0C1,0xC2DD]}, /* 상식 */
		{keys: ['b','g','k'], chars: [0xAD81,0xAE08]}, /* 궁금 */
		{keys: ['l','w'], chars: [0xC7A1,0xC9C0]}, /* 잡지 */
		{keys: ['b','k','o','r'], chars: [0xAC70,0xBD80]}, /* 거부 */
		{keys: ['f','k','o','s'], chars: [0xBC18,0xAC11]}, /* 반갑 */
		{keys: ['j','o','s','w'], chars: [0xBC95,0xC6D0]}, /* 법원 */
		{keys: ['d','i','o','v'], chars: [0xBE44,0xB514,0xC624]}, /* 비디오 */
		{keys: ['.','d','i','o'], chars: [0xBE44,0xB514,0xC624]}, /* 비디오 */
		{keys: ['g','j','n','t'], chars: [0xC5F0,0xC2B5]}, /* 연습 */
		{keys: ['d','e','f','l','n'], chars: [0xD654,0xC7A5,0xC2E4]}, /* 화장실 */
		{keys: ['d','m','n','x'], chars: [0xC2DD,0xB7C9]}, /* 식량 */
		{keys: ['e','h','n','z'], chars: [0xC2E4,0xD5D8]}, /* 실험 */
		{keys: ['i','m','s','v'], chars: [0xD1A0,0xB860]}, /* 토론 */
		{keys: ['k','w'], chars: [0xACE0,0xAE09]}, /* 고급 */
		{keys: ['e','l','x'], chars: [0xC801,0xC808]}, /* 적절 */
		{keys: ['d','f','l','n','z'], chars: [0xCC38,0xC0C8]}, /* 참새 */
		{keys: ['f','l','o','v'], chars: [0xD654,0xC7A5,0xD488]}, /* 화장품 */
		{keys: ['.','f','l','o'], chars: [0xD654,0xC7A5,0xD488]}, /* 화장품 */
		{keys: ['f','g','j','k','q'], chars: [0xAE68,0xB057]}, /* 깨끗 */
		{keys: ['f','s','u','y'], chars: [0xB18D,0xC0B0,0xBB3C]}, /* 농산물 */
		{keys: ['b','f','j','u'], chars: [0xB208,0xC55E]}, /* 눈앞 */
		{keys: ['b','f','i','m'], chars: [0xC544,0xBB34,0xB798,0xB3C4,0x20]}, /* 아무래도  */
		{keys: ['b','k','n','t'], chars: [0xC5F0,0xAD6C,0xC18C]}, /* 연구소 */
		{keys: ['a','d','f','k','n','v'], chars: [0xACE0,0xC0DD]}, /* 고생 */
		{keys: ['.','a','d','f','k','n'], chars: [0xACE0,0xC0DD]}, /* 고생 */
		{keys: ['a','k','m','t'], chars: [0xAC00,0xB839,0x20]}, /* 가령  */
		{keys: ['i','k','r'], chars: [0xAC70,0xB300]}, /* 거대 */
		{keys: ['g','k','m','s'], chars: [0xADFC,0xB85C]}, /* 근로 */
		{keys: ['l','o','r','z'], chars: [0xBC31,0xD654,0xC810]}, /* 백화점 */
		{keys: ['j','m','s','t'], chars: [0xC5EC,0xB860]}, /* 여론 */
		{keys: ['g','j','o','v'], chars: [0xC758,0xBCF5]}, /* 의복 */
		{keys: ['b','e','l','o'], chars: [0xCD9C,0xBC1C]}, /* 출발 */
		{keys: ['h','n','r','s','t'], chars: [0xD604,0xC2E4,0xC801]}, /* 현실적 */
		{keys: ['c','f','h','l'], chars: [0xD654,0xC81C]}, /* 화제 */
		{keys: ['a','k','x'], chars: [0xACF5,0xACA9]}, /* 공격 */
		{keys: ['b','e','f','y'], chars: [0xBB3C,0xAC00]}, /* 물가 */
		{keys: ['a','b','l','n'], chars: [0xC18C,0xC911]}, /* 소중 */
		{keys: ['b','g','j'], chars: [0xC758,0xBB38]}, /* 의문 */
		{keys: ['d','e','k','m'], chars: [0xD0AC,0xB85C]}, /* 킬로 */
		{keys: ['b','f','k','n'], chars: [0xAC00,0xC218]}, /* 가수 */
		{keys: ['a','n','o','x'], chars: [0xBC29,0xC1A1,0xAD6D]}, /* 방송국 */
		{keys: ['f','j','w','x'], chars: [0xC555,0xB825]}, /* 압력 */
		{keys: ['d','j','s','x'], chars: [0xC778,0xB825]}, /* 인력 */
		{keys: ['c','g','j','k'], chars: [0xC608,0xAE08]}, /* 예금 */
		{keys: ['d','h','j','w'], chars: [0xC785,0xD559]}, /* 입학 */
		{keys: ['.','a','g','l','m'], chars: [0xCC28,0xB7C9]}, /* 차량 */
		{keys: ['b','e','f','h','l'], chars: [0xCD9C,0xC0B0]}, /* 출산 */
		{keys: ['b','l','n','r'], chars: [0xC120,0xC9C4,0xAD6D]}, /* 선진국 */
		{keys: ['d','f','l','o','s'], chars: [0xC7AC,0xD310]}, /* 재판 */
		{keys: ['a','f','l','s','y'], chars: [0xCC3D,0xBB38]}, /* 창문 */
		{keys: ['l','n','r','x'], chars: [0xCC38,0xC11D]}, /* 참석 */
		{keys: ['b','e','f','h','o'], chars: [0xBC1C,0xD718]}, /* 발휘 */
		{keys: ['a','k','l','w'], chars: [0xC911,0xC18C,0xAE30,0xC5C5]}, /* 중소기업 */
		{keys: ['l','r','w','x'], chars: [0xC9C1,0xC811,0xC801]}, /* 직접적 */
		{keys: ['h','w','x'], chars: [0xD611,0xB825]}, /* 협력 */
		{keys: ['f','g','k','n'], chars: [0xAC00,0xC2A4]}, /* 가스 */
		{keys: ['f','h','v','y'], chars: [0xB9CC,0xD654]}, /* 만화 */
		{keys: ['.','f','h','y'], chars: [0xB9CC,0xD654]}, /* 만화 */
		{keys: ['e','l','n','x'], chars: [0xC0B4,0xC9DD,0x20]}, /* 살짝  */
		{keys: ['e','k','l','s'], chars: [0xAD00,0xCC30]}, /* 관찰 */
		{keys: ['u','x'], chars: [0xB140,0xC11D]}, /* 녀석 */
		{keys: ['g','i','j','r'], chars: [0xB4DC,0xB514,0xC5B4,0x20]}, /* 드디어  */
		{keys: ['g','k','l','x'], chars: [0xC790,0xADF9]}, /* 자극 */
		{keys: ['d','l','n'], chars: [0xC9C0,0xC2DC]}, /* 지시 */
		{keys: ['c','h','l','t'], chars: [0xD615,0xC81C]}, /* 형제 */
		{keys: ['f','h','m','v'], chars: [0xD654,0xB824]}, /* 화려 */
		{keys: ['.','f','h','m'], chars: [0xD654,0xB824]}, /* 화려 */
		{keys: ['c','k','n','x'], chars: [0xC138,0xACC4,0xC801]}, /* 세계적 */
		{keys: ['d','e','l','o'], chars: [0xBCF8,0xC9C8]}, /* 본질 */
		{keys: ['d','n','o','s'], chars: [0xC2E0,0xBD84]}, /* 신분 */
		{keys: ['d','n','o'], chars: [0xC2E0,0xBD80]}, /* 신부 */
		{keys: ['e','j','l','w'], chars: [0xC878,0xC5C5]}, /* 졸업 */
		{keys: ['h','o','z'], chars: [0xD3EC,0xD568]}, /* 포함 */
		{keys: ['a','f','h','m'], chars: [0xD638,0xB791,0xC774]}, /* 호랑이 */
		{keys: ['c','k','n','z'], chars: [0xC138,0xAE08]}, /* 세금 */
		{keys: ['a','j','r','t'], chars: [0xC601,0xC591]}, /* 영양 */
		{keys: ['d','i','m','w'], chars: [0xB3C5,0xB9BD]}, /* 독립 */
		{keys: ['d','f','i','n','v'], chars: [0xB610,0xB2E4,0xC2DC,0x20]}, /* 또다시  */
		{keys: ['.','d','f','i','n'], chars: [0xB610,0xB2E4,0xC2DC,0x20]}, /* 또다시  */
		{keys: ['b','f','j','o','s'], chars: [0xC704,0xBC18]}, /* 위반 */
		{keys: ['a','d','f','n','o'], chars: [0xD3C9,0xC0DD]}, /* 평생 */
		{keys: ['a','b','f','k','l'], chars: [0xAD11,0xC8FC]}, /* 광주 */
		{keys: ['f','j','m','r'], chars: [0xB7EC,0xC2DC,0xC544]}, /* 러시아 */
		{keys: ['f','h','s','u'], chars: [0xB0A8,0xD55C]}, /* 남한 */
		{keys: ['f','j','k','s','x'], chars: [0xAD00,0xC545]}, /* 관악 */
		{keys: ['a','h','s'], chars: [0xD55C,0xAC15]}, /* 한강 */
		{keys: ['g','j','m','t'], chars: [0xC73C,0xB824]}, /* 으려 */
		{keys: ['b','i','k','r','s'], chars: [0xB354,0xAD70,0x2E,0x20]}, /* 더군.  */
		{keys: ['d','f','i','u'], chars: [0xB2E4,0xB2C8]}, /* 다니 */
		{keys: ['g','s','u','v'], chars: [0xACE0,0xB294,0x20]}, /* 고는  */
		{keys: ['f','l','y'], chars: [0xB9C8,0xC790,0x20]}, /* 마자  */
		{keys: ['a','d','k','l','v'], chars: [0xAD49,0xC7A5]}, /* 굉장 */
		{keys: ['.','a','d','k','l'], chars: [0xAD49,0xC7A5]}, /* 굉장 */
		{keys: ['k','l','t','x'], chars: [0xC790,0xACA9]}, /* 자격 */
		{keys: ['c','f','l','x'], chars: [0xC81C,0xC791]}, /* 제작 */
		{keys: ['a','l','w'], chars: [0xC9D1,0xC911]}, /* 집중 */
		{keys: ['a','h','l','w'], chars: [0xC885,0xD569]}, /* 종합 */
		{keys: ['e','f','l','y'], chars: [0xC8FC,0xB9D0]}, /* 주말 */
		{keys: ['b','f','k','m'], chars: [0xAC00,0xB8E8]}, /* 가루 */
		{keys: ['f','j','m','x'], chars: [0xC5F0,0xB77D]}, /* 연락 */
		{keys: ['a','c','i','l','v'], chars: [0xB3D9,0xC81C]}, /* 통제 */
		{keys: ['c','f','h','l','s'], chars: [0xC81C,0xD55C]}, /* 제한 */
		{keys: ['c','h','j','r'], chars: [0xD5E4,0xC5B4]}, /* 헤어 */
		{keys: ['e','j','l','s'], chars: [0xCD9C,0xC5F0]}, /* 출연 */
		{keys: ['b','f','l','y'], chars: [0xB9C8,0xC8FC,0x20]}, /* 마주  */
		{keys: ['a','c','f','k','l'], chars: [0xAC15,0xC81C]}, /* 강제 */
		{keys: ['d','f','n','u'], chars: [0xB09A,0xC2DC]}, /* 낚시 */
		{keys: ['b','l','s','y'], chars: [0xBB38,0xC790]}, /* 문자 */
		{keys: ['k','s','z'], chars: [0xAD00,0xB150]}, /* 관념 */
		{keys: ['e','n','o','s'], chars: [0xC2E0,0xBC1C]}, /* 신발 */
		{keys: ['d','k','l','z'], chars: [0xAC10,0xCE58]}, /* 김치 */
		{keys: ['a','d','i','k'], chars: [0xB3D9,0xAE30]}, /* 동기 */
		{keys: ['e','f','g','i','n'], chars: [0xC2A4,0xD0C0,0xC77C]}, /* 스타일 */
		{keys: ['l','n','r','z'], chars: [0xC2DC,0xC810]}, /* 시점 */
		{keys: ['a','l','n','z'], chars: [0xC2EC,0xC7A5]}, /* 심장 */
		{keys: ['d','l','n','z'], chars: [0xC810,0xC2EC]}, /* 점심 */
		{keys: ['i','j','w'], chars: [0xB3C4,0xC785]}, /* 도입 */
		{keys: ['g','j','m','z'], chars: [0xC74C,0xB8CC]}, /* 음료 */
		{keys: ['f','g','j','l'], chars: [0xC758,0xC790]}, /* 의자 */
		{keys: ['c','f','h','y'], chars: [0xCE74,0xBA54,0xB77C]}, /* 카메라 */
		{keys: ['d','m','o'], chars: [0xD3B8,0xB9AC]}, /* 편리 */
		{keys: ['d','e','k','l'], chars: [0xAC70,0xCE60]}, /* 거칠 */
		{keys: ['f','u','y'], chars: [0xB098,0xB9C8,0x20]}, /* 나마  */
		{keys: ['f','o','u','z'], chars: [0xB0A8,0xBD80]}, /* 남부 */
		{keys: ['e','m','v','y'], chars: [0xBAB0,0xB798,0x20]}, /* 몰래  */
		{keys: ['g','k','l','v'], chars: [0xC870,0xADF8]}, /* 조그 */
		{keys: ['b','e','k','l'], chars: [0xC904,0xAE30]}, /* 줄기 */
		{keys: ['f','g','k','l','x'], chars: [0xADF9,0xC7A5]}, /* 극장 */
		{keys: ['d','g','k','o','x'], chars: [0xBE44,0xADF9]}, /* 비극 */
		{keys: [';','u','w'], chars: [0xB192,0xC774]}, /* 높이 */
		{keys: ['f','h','n','s'], chars: [0xD55C,0xC228]}, /* 한숨 */
		{keys: ['a','f','l','n','s'], chars: [0xC120,0xC7A5]}, /* 선장 */
		{keys: ['g','i','k','v'], chars: [0xCF54,0xB4DC]}, /* 코드 */
		{keys: ['h','r','t','u'], chars: [0xCCAD,0xB144]}, /* 청년 */
		{keys: ['d','n','u'], chars: [0xC2DC,0xB0B4]}, /* 시내 */
		{keys: ['d','e','n','u'], chars: [0xC2E4,0xB0B4]}, /* 실내 */
		{keys: ['e','j','k','s'], chars: [0xC5F0,0xACB0]}, /* 연결 */
		{keys: ['c','k','r'], chars: [0xACC4,0xC57D]}, /* 계약 */
		{keys: ['b','g','k','o'], chars: [0xBD80,0xB044]}, /* 부끄 */
		{keys: ['b','h','n'], chars: [0xC218,0xD589]}, /* 수행 */
		{keys: ['a','d','l','n','s'], chars: [0xC2E0,0xCCAD]}, /* 신청 */
		{keys: ['b','f','o'], chars: [0xBC14,0xC704]}, /* 바위 */
		{keys: ['c','l','r','x'], chars: [0xC804,0xCCB4,0xC801]}, /* 전체적 */
		{keys: ['h','j','s','t'], chars: [0xD3B8,0xC548]}, /* 편안 */
		{keys: ['d','f','m','x','y'], chars: [0xB9E4,0xB825]}, /* 매력 */
		{keys: ['a','b','f','l','o'], chars: [0xBD80,0xC7A5]}, /* 부장 */
		{keys: ['d','m','n','z'], chars: [0xC2EC,0xB9AC]}, /* 심리 */
		{keys: ['e','f','i','l'], chars: [0xC804,0xB2EC]}, /* 전달 */
		{keys: ['a','h','n','t'], chars: [0xD615,0xC0AC]}, /* 형사 */
		{keys: ['f','i','k','z'], chars: [0xAC10,0xB3D9]}, /* 감동 */
		{keys: ['b','f','m','y'], chars: [0xB9C8,0xB8E8]}, /* 마루 */
		{keys: ['a','l','n','x'], chars: [0xC131,0xC801]}, /* 성적 */
		{keys: ['e','l','n'], chars: [0xC194,0xC9C1]}, /* 솔직 */
		{keys: ['i','l','r','s','x'], chars: [0xC804,0xB3D9,0xC801]}, /* 전통적 */
		{keys: ['d','i','n','v'], chars: [0xC2DC,0xB3C4]}, /* 시도 */
		{keys: ['.','d','i','n'], chars: [0xC2DC,0xB3C4]}, /* 시도 */
		{keys: ['f','k','l','z'], chars: [0xCC38,0xAC00]}, /* 참가 */
		{keys: ['d','f','h','y'], chars: [0xCE58,0xB9C8]}, /* 치마 */
		{keys: ['a','h','i','x'], chars: [0xD2B9,0xC815]}, /* 특정 */
		{keys: ['d','k','n','v','x'], chars: [0xACF5,0xC2DD]}, /* 공식 */
		{keys: ['.','d','k','n','x'], chars: [0xACF5,0xC2DD]}, /* 공식 */
		{keys: ['a','d','k','l','s'], chars: [0xAE34,0xC7A5]}, /* 긴장 */
		{keys: ['a','k','l','s','v'], chars: [0xC8FC,0xC778,0xACF5]}, /* 주인공 */
		{keys: ['l','o','r'], chars: [0xBD80,0xCC98]}, /* 부처 */
		{keys: ['e','i','l'], chars: [0xC808,0xB300]}, /* 절대 */
		{keys: ['f','o','r','y'], chars: [0xD45C,0xBA74]}, /* 표면 */
		{keys: ['.','o','v','y'], chars: [0xD45C,0xBA74]}, /* 표면 */
		{keys: ['k','r','s','x'], chars: [0xAC1D,0xAD00,0xC801]}, /* 객관적 */
		{keys: ['a','k','l','r','t'], chars: [0xACBD,0xC81C,0xC801]}, /* 경제적 */
		{keys: ['k','n','r','x'], chars: [0xAD6C,0xC11D]}, /* 구석 */
		{keys: ['a','i','z'], chars: [0xB2F4,0xB2F9]}, /* 담당 */
		{keys: ['d','f','i','o'], chars: [0xBD80,0xB300]}, /* 부대 */
		{keys: ['h','n','v'], chars: [0xCCAD,0xC18C]}, /* 청소 */
		{keys: ['a','h','n','r'], chars: [0xC2DC,0xCCAD]}, /* 시청 */
		{keys: ['a','g','k','l','r'], chars: [0xC99D,0xAC70]}, /* 증거 */
		{keys: ['c','e','k','l','r'], chars: [0xACC4,0xC808]}, /* 계절 */
		{keys: ['e','g','o','u'], chars: [0xBC14,0xB298]}, /* 바늘 */
		{keys: ['d','f','k','l','s'], chars: [0xC804,0xAC1C]}, /* 전개 */
		{keys: ['l','v','w','x'], chars: [0xC811,0xCD09]}, /* 접촉 */
		{keys: ['.','l','w','x'], chars: [0xC811,0xCD09]}, /* 접촉 */
		{keys: ['b','f','h','o','s'], chars: [0xD6C4,0xBC18]}, /* 후반 */
		{keys: ['d','e','h','j'], chars: [0xC77C,0xCE58]}, /* 일치 */
		{keys: ['a','i','s'], chars: [0xB2F9,0xC5F0]}, /* 당연 */
		{keys: ['d','i','o'], chars: [0xB300,0xBE44]}, /* 대비 */
		{keys: ['l','u','v','x'], chars: [0xB0A8,0xCABD]}, /* 남쪽 */
		{keys: ['a','b','f','n'], chars: [0xC218,0xC0C1]}, /* 수상 */
		{keys: ['k','l','s','z'], chars: [0xC7A0,0xAE50]}, /* 잠깐 */
		{keys: ['i','l','x'], chars: [0xC801,0xB2F9]}, /* 적당 */
		{keys: ['l','n','v','x'], chars: [0xC9C0,0xC18D]}, /* 지속 */
		{keys: ['b','k','o','s'], chars: [0xAD6C,0xBD84]}, /* 구분 */
		{keys: ['d','g','k','l','z'], chars: [0xAE08,0xC9C0]}, /* 금지 */
		{keys: ['b','g','y'], chars: [0xC758,0xBB34]}, /* 의무 */
		{keys: ['h','o','s','x'], chars: [0xD55C,0xBCF5]}, /* 한복 */
		{keys: ['k','l','s','x'], chars: [0xAC74,0xCD95]}, /* 건축 */
		{keys: ['k','o','s','z'], chars: [0xBC14,0xAE65]}, /* 바깥 */
		{keys: ['d','l','o'], chars: [0xBC14,0xC9C0]}, /* 바지 */
		{keys: ['f','k','o','s','v'], chars: [0xBCF4,0xAD00]}, /* 보관 */
		{keys: ['.','f','k','o','s'], chars: [0xBCF4,0xAD00]}, /* 보관 */
		{keys: [';','e','i','o'], chars: [0xBD80,0xB52A]}, /* 부딪 */
		{keys: ['h','j','w'], chars: [0xC5F0,0xD569]}, /* 연합 */
		{keys: ['f','l','n','r','s'], chars: [0xC0AC,0xC804]}, /* 사전 */
		{keys: ['d','l','n','v','z'], chars: [0xC870,0xC2EC]}, /* 조심 */
		{keys: ['.','d','l','n','z'], chars: [0xC870,0xC2EC]}, /* 조심 */
		{keys: ['f','o','s','u'], chars: [0xBE44,0xB09C]}, /* 비난 */
		{keys: ['d','k','n','s','v'], chars: [0xC2E0,0xACE0]}, /* 신고 */
		{keys: ['.','d','k','n','s'], chars: [0xC2E0,0xACE0]}, /* 신고 */
		{keys: ['a','c','f','j','n'], chars: [0xC608,0xC0C1]}, /* 예상 */
		{keys: ['b','l','r','y'], chars: [0xC8FC,0xBA39]}, /* 주먹 */
		{keys: ['a','b','k','t'], chars: [0xAD6C,0xACBD]}, /* 구경 */
		{keys: ['b','g','k','s'], chars: [0xADFC,0xBB34]}, /* 근무 */
		{keys: ['g','n','v'], chars: [0xC18C,0xC2A4]}, /* 소스 */
		{keys: ['a','f','l','m'], chars: [0xC790,0xB791]}, /* 자랑 */
		{keys: ['k','l','r','v','x'], chars: [0xACFC,0xD559,0xC801]}, /* 과학적 */
		{keys: ['.','k','l','r','x'], chars: [0xACFC,0xD559,0xC801]}, /* 과학적 */
		{keys: ['f','k','l','v','x'], chars: [0xACFC,0xD559,0xC790]}, /* 과학자 */
		{keys: ['.','f','k','l','x'], chars: [0xACFC,0xD559,0xC790]}, /* 과학자 */
		{keys: ['a','g','m','n'], chars: [0xC2B9,0xB9AC]}, /* 승리 */
		{keys: ['d','f','k','l','x'], chars: [0xAC1C,0xC778,0xC801]}, /* 개인적 */
		{keys: ['b','l','n','v'], chars: [0xC18C,0xC8FC]}, /* 소주 */
		{keys: ['f','g','h','j'], chars: [0xC758,0xD559]}, /* 의학 */
		{keys: ['e','l','s'], chars: [0xC9C4,0xCD9C]}, /* 진출 */
		{keys: ['c','k','l','r'], chars: [0xC81C,0xAC70]}, /* 제거 */
		{keys: ['g','k','m','z'], chars: [0xAE30,0xB984]}, /* 기름 */
		{keys: ['b','g','i','n'], chars: [0xD2B9,0xC218]}, /* 특수 */
		{keys: ['e','x','y'], chars: [0xACE8,0xBAA9]}, /* 골목 */
		{keys: ['f','h','j','x'], chars: [0xC720,0xD559]}, /* 유학 */
		{keys: ['e','l','o','r'], chars: [0xCC98,0xBC8C]}, /* 처벌 */
		{keys: ['c','f','k','o'], chars: [0xCE74,0xD398]}, /* 카페 */
		{keys: ['i','k','v'], chars: [0xAC80,0xD1A0]}, /* 검토 */
		{keys: ['m','v','y'], chars: [0xBAA8,0xB798]}, /* 모래 */
		{keys: ['b','f','i','n'], chars: [0xB2E4,0xC218]}, /* 다수 */
		{keys: ['h','n','r','x'], chars: [0xD574,0xC11D]}, /* 해석 */
		{keys: ['g','j','k','r','s'], chars: [0xADFC,0xC6D0]}, /* 근원 */
		{keys: ['b','f','i','o','x'], chars: [0xBD80,0xD0C1]}, /* 부탁 */
		{keys: ['d','e','n','o'], chars: [0xC2E4,0xD328]}, /* 실패 */
		{keys: ['b','j','s','t'], chars: [0xC6B0,0xC5F0]}, /* 우연 */
		{keys: ['a','l','m','v'], chars: [0xCD1D,0xB9AC]}, /* 총리 */
		{keys: [';','q','u'], chars: [0xB208,0xBE5B]}, /* 눈빛 */
		{keys: ['j','s','u','v'], chars: [0xB17C,0xC758]}, /* 논의 */
		{keys: ['b','g','j','n'], chars: [0xC6B0,0xC2B9]}, /* 우승 */
		{keys: ['g','k','l','r','s'], chars: [0xC99D,0xAD8C]}, /* 증권 */
		{keys: ['a','g','h','y'], chars: [0xD765,0xBBF8]}, /* 흥미 */
		{keys: ['e','o','u'], chars: [0xBE44,0xB2D0]}, /* 비닐 */
		{keys: ['a','d','f','n','y'], chars: [0xC0DD,0xBB3C]}, /* 생물 */
		{keys: ['d','m','o','v'], chars: [0xD53C,0xB85C]}, /* 피로 */
		{keys: ['.','d','m','o'], chars: [0xD53C,0xB85C]}, /* 피로 */
		{keys: ['d','n','o','v'], chars: [0xBE44,0xB85C,0xC18C,0x20]}, /* 비로소  */
		{keys: ['.','d','n','o'], chars: [0xBE44,0xB85C,0xC18C,0x20]}, /* 비로소  */
		{keys: ['b','e','f','l'], chars: [0xC790,0xC728]}, /* 자율 */
		{keys: ['b','l','o','r','s'], chars: [0xC804,0xBD80]}, /* 전부 */
		{keys: ['d','i','l','s'], chars: [0xC9C4,0xB2E8]}, /* 진단 */
		{keys: ['b','i','k'], chars: [0xAD6C,0xB450]}, /* 구두 */
		{keys: ['a','f','l','o','v'], chars: [0xBCF4,0xC7A5]}, /* 보장 */
		{keys: ['.','a','f','l','o'], chars: [0xBCF4,0xC7A5]}, /* 보장 */
		{keys: ['f','k','n','v'], chars: [0xC0AC,0xACFC]}, /* 사과 */
		{keys: ['.','f','k','n'], chars: [0xC0AC,0xACFC]}, /* 사과 */
		{keys: ['b','d','j','m','v'], chars: [0xC720,0xB9AC]}, /* 유리 */
		{keys: ['.','b','d','j','m'], chars: [0xC720,0xB9AC]}, /* 유리 */
		{keys: ['a','g','i','m'], chars: [0xB4F1,0xB85D]}, /* 등록 */
		{keys: ['c','f','j','o'], chars: [0xC608,0xBC29]}, /* 예방 */
		{keys: ['d','f','h','m','w'], chars: [0xD569,0xB9AC]}, /* 합리 */
		{keys: ['g','i','k','r','w'], chars: [0xAC70,0xB4ED]}, /* 거듭 */
		{keys: ['a','l','o','r'], chars: [0xC815,0xBE44]}, /* 정비 */
		{keys: ['e','g','h','j'], chars: [0xC774,0xD2C0]}, /* 이틀 */
		{keys: ['e','o','s'], chars: [0xBD88,0xC548]}, /* 불안 */
		{keys: ['e','h','o','s'], chars: [0xBD88,0xD3B8]}, /* 불편 */
		{keys: ['e','f','o','y'], chars: [0xBD88,0xC548]}, /* 불만 */
		{keys: [';','h','s'], chars: [0xD558,0xC597]}, /* 하얗 */
		//1701 약어 추가
		{keys: ['g','h','u'], chars: [0xD558,0xB294,0x20]}, /* 하는  */
		{keys: ['g','i','k','r'], chars: [0xB728,0xAC70,0xC6B4,0x20]}, /* 뜨거운  */
		{keys: ['f','g','u'], chars: [0xB098,0xB294,0x20]}, /* 나는  */
		{keys: ['c','u','y'], chars: [0xB9CC,0xB098,0xAC8C,0x20]}, /* 만나게  */
		{keys: ['c','f','u'], chars: [0xB098,0xAC8C,0x20]}, /* 나게  */
		{keys: ['d','i','u','v'], chars: [0xB418,0xB294,0x20]}, /* 되는  */
		{keys: ['.','d','i','u'], chars: [0xB418,0xB294,0x20]}, /* 되는  */
		{keys: ['b','j','m','s'], chars: [0xB85C,0xC6B4,0x20]}, /* 로운  */
		{keys: ['g','u','y'], chars: [0xBAA8,0xB974,0xB294,0x20]}, /* 모르는  */
		{keys: ['g','m','u'], chars: [0xB974,0xB294,0x20]}, /* 르는  */
		{keys: ['d','g','m','u'], chars: [0xB9AC,0xB294,0x20]}, /* 리는  */
		{keys: ['q','j','u'], chars: [0xC788,0xB294,0x20]}, /* 있는  */
		{keys: ['j','q','u','w'], chars: [0xC5C6,0xB294,0x20]}, /* 없는  */
		{keys: ['g','h','s','u'], chars: [0xCE58,0xB294,0x20]}, /* 치는  */
		{keys: ['h','s','u'], chars: [0xD0A4,0xB294,0x20]}, /* 키는  */
		{keys: ['c','f','h'], chars: [0xD558,0xAC8C,0x20]}, /* 하게  */
		{keys: ['g','l','v'], chars: [0xC88B,0xC740,0x20]}, /* 좋은  */
		{keys: ['f','k','m','s'], chars: [0xCEE4,0xB2E4,0xB780,0x20]}, /* 커다란  */
		{keys: ['k','s'], chars: [0xAE30,0xB294,0x20]}, /* 기는  */
		{keys: ['f','g','k'], chars: [0xAC00,0xB294,0x20]}, /* 가는  */
		{keys: ['f','g','k','z'], chars: [0xAC19,0xC740,0x20]}, /* 같은  */
		{keys: ['b','g','j','k'], chars: [0xAFB8,0xB294,0x20]}, /* 꾸는  */
		{keys: ['d','f','g','u'], chars: [0xB0B4,0xB294,0x20]}, /* 내는  */
		{keys: ['g','i','u'], chars: [0xB4DC,0xB294,0x20]}, /* 드는  */
		{keys: ['f','g','m'], chars: [0xB77C,0xB294,0x20]}, /* 라는  */
		{keys: ['c','f','m'], chars: [0xB77C,0xAC8C,0x20]}, /* 라게  */
		{keys: ['j','m','r'], chars: [0xB7EC,0xC6B4,0x20]}, /* 러운  */
		{keys: ['j','m','t'], chars: [0xB824,0xC6B4,0x20]}, /* 려운  */
		{keys: ['d','f','m','n','s'], chars: [0xC0C8,0xB85C,0xC6B4,0x20]}, /* 새로운  */
		{keys: ['b','h','s','y'], chars: [0xD765,0xBBF8,0xB85C,0xC6B4,0x20]}, /* 흥미로운  */
		{keys: ['b','g','m'], chars: [0xB8E8,0xB294,0x20]}, /* 루는  */
		{keys: ['o','u','v'], chars: [0xBCF4,0xB294,0x20]}, /* 보는  */
		{keys: ['c','k','o'], chars: [0xC058,0xAC8C,0x20]}, /* 쁘게  */
		{keys: ['g','n','r'], chars: [0xC11C,0xB294,0x20]}, /* 서는  */
		{keys: ['k','n','w'], chars: [0xC27D,0xAC8C,0x20]}, /* 쉽게  */
		{keys: ['g','m','n','r'], chars: [0xC2A4,0xB7EC]}, /* 스러 */
		{keys: ['g','m','n','r','s'], chars: [0xC2A4,0xB7EC,0xC6B4,0x20]}, /* 스러운  */
		{keys: ['d','g','n','u'], chars: [0xC2DC,0xB294,0x20]}, /* 시는  */
		{keys: ['a','f','g','j'], chars: [0xC54A,0xC740,0x20]}, /* 않은  */
		{keys: ['a','f','g','u'], chars: [0xC54A,0xB294,0x20]}, /* 않는  */
		{keys: ['j','s','u'], chars: [0xC624,0xB294,0x20]}, /* 오는  */
		{keys: ['b','j','u'], chars: [0xC6B0,0xB294,0x20]}, /* 우는  */
		{keys: ['g','j','u'], chars: [0xC774,0xB294,0x20]}, /* 이는  */
		{keys: ['b','g','l'], chars: [0xC8FC,0xB294,0x20]}, /* 주는  */
		{keys: ['g','l','s','u'], chars: [0xC9C0,0xB294,0x20]}, /* 지는  */
		{keys: ['c','d','ks','l'], chars: [0xCE58,0xAC8C,0x20]}, /* 치게  */
		{keys: ['g','k','o'], chars: [0xD504,0xAC8C,0x20]}, /* 프게  */
		{keys: ['c','h','u'], chars: [0xD558,0xB294,0xB370]}, /* 하는데 */
		{keys: ['c','g','h','k'], chars: [0xD06C,0xAC8C,0x20]}, /* 크게  */
		{keys: ['f','g','o'], chars: [0xBC1B,0xC740,0x20]}, /* 받은  */
		{keys: ['f','g','n'], chars: [0xC0AC,0xB294,0x20]}, /* 사는  */
		{keys: ['g','r','y'], chars: [0xBA39,0xB294,0x20]}, /* 먹는  */
		{keys: [';','n','w'], chars: [0xC2F6,0xC740,0x20]}, /* 싶은  */
		{keys: ['f','g','l'], chars: [0xC791,0xC740,0x20]}, /* 작은  */
		{keys: ['g','j','u','v'], chars: [0xB192,0xC740,0x20]}, /* 높은  */
		{keys: ['b','f','i','s'], chars: [0xB2E4,0xC6B4,0x20]}, /* 다운  */
		{keys: ['c','k','m','v'], chars: [0xB86D,0xAC8C,0x20]}, /* 롭게  */
		{keys: ['g','s','u','y'], chars: [0xB9DE,0xB294,0x20]}, /* 맞는  */
		{keys: ['m','n','w'], chars: [0xC2A4,0xB7FD]}, /* 스럽 */
		{keys: ['g','n','u'], chars: [0xC4F0,0xB294,0x20]}, /* 쓰는  */
		{keys: ['f','g','h','u'], chars: [0xCC3E,0xB294,0x20]}, /* 찾는  */
		{keys: ['f','g','j','s'], chars: [0xC544,0xB294,0x20]}, /* 아는  */
		{keys: [';','k','w'], chars: [0xAE4A,0xC740,0x20]}, /* 깊은  */
		{keys: ['e','u','w'], chars: [0xB113,0xC740,0x20]}, /* 넓은  */
		{keys: ['e','f','g','j','l'], chars: [0xC9E7,0xC740,0x20]}, /* 짧은  */
		{keys: ['e','f','g','u'], chars: [0xB0AE,0xC740,0x20]}, /* 낮은  */
		{keys: ['j','q','r','u','w'], chars: [0xC5C6,0xC560,0xB294,0x20]}, /* 없애는  */
		{keys: ['g','k','r','z'], chars: [0xAC80,0xC740,0x20]}, /* 검은  */
		{keys: ['e','g','k','l'], chars: [0xC990,0xAC70,0xC6B4,0x20]}, /* 즐거운  */
		{keys: ['h','k','q'], chars: [0xD558,0xACA0]}, /* 하겠 */
		{keys: ['h','j','q'], chars: [0xD558,0xC600]}, /* 하였 */
		{keys: ['d','h','n','s'], chars: [0xD558,0xC2E0,0x20]}, /* 하신  */
		{keys: ['h','n','q'], chars: [0xD558,0xC168]}, /* 하셨 */
		{keys: ['i','k','q'], chars: [0xB418,0xACA0]}, /* 되겠 */
		{keys: ['i','j','q'], chars: [0xB418,0xC5C8]}, /* 되었 */
		{keys: ['e','i','j'], chars: [0xB4E4,0xC758,0x20]}, /* 들의  */
		{keys: ['e','i'], chars: [0xB4E4,0xC774,0x20]}, /* 들이  */
		{keys: ['e','i','s'], chars: [0xB4E4,0xC740,0x20]}, /* 들은  */
		{keys: ['g','l','m'], chars: [0xC801,0xC73C,0xB85C,0x20]}, /* 적으로  */
		{keys: ['l','s','x'], chars: [0xC801,0xC778,0x20]}, /* 적인  */
		{keys: ['e','f','h','n'], chars: [0xD560,0x20,0xC218]}, /* 할 수 */
		{keys: ['n','q'], chars: [0x20,0xC218,0x20,0xC788]}, /*  수 있 */
		{keys: ['n','q','w'], chars: [0x20,0xC218,0x20,0xC5C6]}, /*  수 없 */
		{keys: ['e','h','n','s'], chars: [0xD560,0x20,0xC218,0xB294,0x20]}, /* 할 수는  */
		{keys: ['f','i','o','v'], chars: [0xB3C4,0x20,0xBD88,0xAD6C,0xD558,0xACE0,0x20]}, /* 도 불구하고  */
		{keys: ['.','f','i','o'], chars: [0xB3C4,0x20,0xBD88,0xAD6C,0xD558,0xACE0,0x20]}, /* 도 불구하고  */
		{keys: ['i','k','q','r'], chars: [0xAC83,0xB3C4,0x20]}, /* 것도  */
		{keys: ['g','k','r'], chars: [0xAC83,0xC740,0x20]}, /* 것은  */
		{keys: ['e','g','k','r'], chars: [0xAC83,0xC744,0x20]}, /* 것을  */
		{keys: ['c','d','i','u'], chars: [0xB418,0xB294,0xB370]}, /* 되는데 */
		{keys: ['f','g','i','u'], chars: [0xB294,0xB2E4,0x2E,0x20]}, /* 는다.  */
		{keys: ['f','g','s','u'], chars: [0xB294,0xAC00]}, /* 는가 */
		{keys: ['g','i','s','u'], chars: [0xB2E4,0xB294,0x20]}, /* 다는  */
		{keys: ['f','o','u'], chars: [0xBC1B,0xB294,0x20]}, /* 받는  */
		{keys: ['d','f','o','u'], chars: [0xBCF4,0xB0B4]}, /* 보내 */
		{keys: ['d','f','o','s','u'], chars: [0xBCF4,0xB0B8,0x20]}, /* 보낸  */
		{keys: ['f','g','k','l'], chars: [0xAE00,0xC790]}, /* 글자 */
		{keys: ['c','d','h','n'], chars: [0xC790,0xC138,0xD788,0x20]}, /* 자세히  */
		{keys: ['a','f','h','j','r'], chars: [0xC870,0xC6A9,0xD788,0x20]}, /* 조용히  */
		{keys: ['.','a','h','j','v'], chars: [0xC870,0xC6A9,0xD788,0x20]}, /* 조용히  */
		//1701 약어 수정
		{keys: ['c','f','l','u'], chars: [0xC790,0xB124]}, /* 자네 */
		{keys: ['c','j','r','s'], chars: [0xC5B8,0xC81C,0xB098,0x20]}, /* 언제나  */
		{keys: ['d','h','n','s','v'], chars: [0xC2E0,0xD638]}, /* 신호 */
		{keys: ['.','d','h','n','s'], chars: [0xC2E0,0xD638]}, /* 신호 */
		{keys: ['e','g','i','r'], chars: [0xB4E4,0xC5B4]}, /* 들어 */
		{keys: ['e','i','j','s'], chars: [0xC77C,0xB2E8,0x20]}, /* 일단  */
		{keys: ['c','f','k','s'], chars: [0xAD00,0xACC4]}, /* 관계 */
		{keys: ['a','g','u','v'], chars: [0xADF8,0xB0E5,0x20]}, /* 그냥  */
		{keys: ['a','u'], chars: [0xAC00,0xB2A5]}, /* 가능 */
		{keys: ['j','k','z'], chars: [0xAE08,0xC735]}, /* 금융 */
		{keys: ['g','j','k','v'], chars: [0xC694,0xAE08]}, /* 요금 */
		{keys: ['a','j','s','u'], chars: [0xC548,0xB155]}, /* 안녕 */
		{keys: ['g','j','r','u'], chars: [0xC5B4,0xB290,0x20]}, /* 어느  */
		{keys: ['f','g','k','l','z'], chars: [0xADF8,0xB9BC,0xC790]}, /* 그림자 */
		{keys: ['g','k','r','s'], chars: [0xADFC,0xAC70]}, /* 근거 */
		{keys: ['k','o','s'], chars: [0xBD84,0xC704,0xAE30]}, /* 분위기 */
		{keys: ['i','l','z'], chars: [0xB2E4,0xC9D0]}, /* 다짐 */
		{keys: ['d','l','n','s','v'], chars: [0xCD5C,0xC18C,0xD55C]}, /* 최소한 */
		{keys: ['.','d','l','n','s'], chars: [0xCD5C,0xC18C,0xD55C]}, /* 최소한 */
		{keys: ['e','i','n','r'], chars: [0xC124,0xD0D5]}, /* 설탕 */
		{keys: ['b','f','h','s','y'], chars: [0xBB38,0xD654,0xC7AC]}, /* 문화재 */
		{keys: ['b','f','s','y'], chars: [0xB300,0xBB38]}, /* 대문 */
		{keys: ['g','m','r'], chars: [0xADF8,0xB7EC,0xBBC0,0xB85C,0x20]}, /* 그러므로  */
		{keys: ['c','d','j','v'], chars: [0xC608,0xC678]}, /* 예외 */
		{keys: ['.','c','d','j'], chars: [0xC608,0xC678]}, /* 예외 */
		{keys: ['e','j','q','u'], chars: [0xC61B,0xB0A0]}, /* 옛날 */
		{keys: ['i','q','u'], chars: [0xC778,0xD130,0xB137]}, /* 인터넷 */
		{keys: ['g','k','m','q'], chars: [0xADF8,0xB987]}, /* 그릇 */
		{keys: ['k','m','q'], chars: [0xADF8,0xB7AC]}, /* 그랬 */
		{keys: ['f','g','s','y'], chars: [0xB9CE,0xC740,0x20]}, /* 많은  */
		{keys: [';','e','j'], chars: [0xC788,0xC744,0x20]}, /* 있을  */
		{keys: ['h','j','t'], chars: [0xD558,0xC5EC,0x20]}, /* 하여  */
		{keys: ['c','i','u','v'], chars: [0xB294,0xB370,0xB3C4,0x20]}, /* 는데도  */
		{keys: ['.','c','i','u'], chars: [0xB294,0xB370,0xB3C4,0x20]}, /* 는데도  */
		{keys: ['f','g','j','u'], chars: [0xC5B4,0xB290,0xC0C8,0x20]}, /* 어느새  */
		{keys: ['d','m','u'], chars: [0xADF8,0xB7EC,0xB2C8]}, /* 그러니 */
		{keys: ['k','m','r','t'], chars: [0xADF8,0xB7EC,0xB824,0xACE0,0x20]}, /* 그러려고  */
		{keys: ['k','m','r','s','t'], chars: [0xADF8,0xB7EC,0xB824,0xBA74,0x20]}, /* 그러려면  */
		{keys: ['a','b','d','l','n'], chars: [0xC131,0xCDE8]}, /* 성취 */
		{keys: ['a','c','d','l','n'], chars: [0xC131,0xCDE8]}, /* 성취 */
		{keys: ['.','d','f','k','n'], chars: [0xC18C,0xAC1C]}, /* 소개 */
		{keys: ['d','f','k','n','v'], chars: [0xC18C,0xAC1C]}, /* 소개 */
		{keys: ['i','m','v'], chars: [0xB530,0xB85C,0x20]}, /* 따로  */
		{keys: ['d','f','l','u'], chars: [0xB0B4,0xC9C0,0x20]}, /* 내지  */
		{keys: ['d','e','f','l','o'], chars: [0xD544,0xC790]}, /* 필자 */
		{keys: ['b','f','n','y'], chars: [0xBB34,0xC0AC]}, /* 무사 */
		{keys: ['c','g','k','l'], chars: [0xACC4,0xCE35]}, /* 계층 */
		{keys: ['e','g','i','j','r'], chars: [0xB5A0,0xB4E4]}, /* 떠들 */
		{keys: ['n','v','x','y'], chars: [0xBB3C,0xC18D]}, /* 물속 */
		{keys: ['k','l','r','t'], chars: [0xC5EC,0xAE30,0xC800,0xAE30]}, /* 여기저기 */
		{keys: ['b','j','m','x'], chars: [0xC774,0xB8E9]}, /* 이룩 */
		{keys: ['e','l','o','t'], chars: [0xCC28,0xBCC4]}, /* 차별 */
		{keys: ['e','k','l','w'], chars: [0xAECD,0xC9C8]}, /* 껍질 */
		{keys: ['f','g','i','k','s'], chars: [0xB4E0,0xAC00]}, /* 든가 */
		{keys: ['b','e','f','j'], chars: [0xC544,0xC6B8,0xB7EC]}, /* 아울러 */
		{keys: ['i','l','v','x'], chars: [0xB3D9,0xCABD]}, /* 동쪽 */
		{keys: ['j','k','x','z'], chars: [0xC5C4,0xACA9]}, /* 엄격 */
		{keys: ['a','h','o','s'], chars: [0xD615,0xD3B8]}, /* 형편 */
		{keys: ['b','f','k','o'], chars: [0xAC04,0xBD80]}, /* 간부 */
		{keys: ['h','n','r'], chars: [0xC11C,0xC11C,0xD788]}, /* 서서히 */
		{keys: ['a','j','o','r','t'], chars: [0xD3C9,0xC591]}, /* 평양 */
		{keys: ['g','m','o','q'], chars: [0xBC84,0xB987]}, /* 버릇 */
		{keys: ['m','o','s','v'], chars: [0xBCF8,0xB798]}, /* 본래 */
		{keys: [';','o','x'], chars: [0xBD80,0xC5CC]}, /* 부엌 */
		{keys: ['a','d','l','n'], chars: [0xC2E4,0xC815]}, /* 실정 */
		{keys: ['b','c','h','j','x'], chars: [0xC721,0xCCB4]}, /* 육체 */
		{keys: ['f','g','i','l'], chars: [0xC794,0xB729]}, /* 잔뜩 */
		{keys: ['e','f','i','k'], chars: [0xB2EC,0xAC40]}, /* 달걀 */
		{keys: ['d','n','q','y'], chars: [0xBA38,0xB9BF,0xC18D]}, /* 머릿속 */
		{keys: ['a','f','l','o','s'], chars: [0xBC18,0xC7A5]}, /* 반장 */
		{keys: ['l','o','v','x'], chars: [0xBD81,0xCABD]}, /* 북쪽 */
		{keys: ['f','l','o','s'], chars: [0xC790,0xD310]}, /* 자판 */
		{keys: ['a','d','k','l'], chars: [0xC9C0,0xACBD]}, /* 지경 */
		{keys: ['d','h','y','z'], chars: [0xCE68,0xBB35]}, /* 침묵 */
		{keys: ['l','n','r','v','x'], chars: [0xC11C,0xCABD]}, /* 서쪽 */
		{keys: ['.','l','n','r','x'], chars: [0xC11C,0xCABD]}, /* 서쪽 */
		{keys: ['a','k','n','s'], chars: [0xACF5,0xC0B0]}, /* 공산 */
		{keys: ['j','r','s','t'], chars: [0xC601,0xC6D0]}, /* 영원 */
		{keys: [';','l','m','s'], chars: [0xC800,0xB807]}, /* 저렇 */
		{keys: ['b','m','t','y'], chars: [0xBB34,0xB824,0x20]}, /* 무려  */
		{keys: ['a','o','u'], chars: [0xB18D,0xBD80]}, /* 농부 */
		{keys: ['l','m','x','z'], chars: [0xCE68,0xB7B5]}, /* 침략 */
		{keys: ['j','m','x'], chars: [0xC5B4,0xB9AC,0xC11D]}, /* 어리석 */
		{keys: ['g','j','v'], chars: [0xC608,0xC758]}, /* 예의 */
		{keys: ['f','l','o','r','s'], chars: [0xC804,0xD30C]}, /* 전파 */
		{keys: ['j','n','z'], chars: [0xC608,0xC218,0xB2D8]}, /* 예수님 */
		{keys: ['b','i','o','v'], chars: [0xBD80,0xB3C4]}, /* 부도 */
		{keys: ['h','r','s','t'], chars: [0xD604,0xC800]}, /* 현저 */
		{keys: ['d','m','s','y'], chars: [0xBBF8,0xB828]}, /* 미련 */
		{keys: ['i','l','r','s','v'], chars: [0xC804,0xB3C4]}, /* 전도 */
		{keys: ['.','i','l','r','s'], chars: [0xC804,0xB3C4]}, /* 전도 */
		{keys: ['a','m','n','r'], chars: [0xC131,0xB839]}, /* 성령 */
		{keys: ['s','u'], chars: [0xB0B4,0xB144]} /* 내년 */
	];

} // input_combination_table_info()
