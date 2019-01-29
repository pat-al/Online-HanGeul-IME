/*
※ additional_layouts.js : 이제는 쓰이지 않거나 개선판이 나왔거나 연구 중인 자판 배열들을 모음
※ keyboard_layouts.js : 널리 쓰이거나 대표성이 있거나 기능·배열에 주목할 면이 있는 자판 배열들을 모음

※ 첫가끝 방식으로 옛한글을 조합하는 자판은 type_name 끝에 '-y'를 붙인다.
※ 신세벌식 자판은 type_name 앞에 'Sin3-'를 붙인다.
※ 갈마들이 방식을 쓰는 공병우식 자판은 type_name 끝에 '_gm'을 붙인다.
※ 모아치기 방식으로 쓰는 세벌식 자판은 type_name 앞에 '3m-'를 붙인다.
※ 타자기 자판은 벌 수 다음에 't-'를 붙인다. ('3t-', 4t-')
※ 모아치기 자판의 보조 배열(sublayout)은 입력에 반영되지 않고 배열표에만 나타남
*/

input_additional_keyboard_layout_info();
input_additional_combination_table_info();

var additional_layouts = [];
additional_layouts[0] = new keyboard_layout_info();

additional_layouts.push({KE: 'Ko', type_name: '2-GJS', full_name: '김준성 풀어쓰기 수동 타자기 (1940년대)', layout: K2_GimJunseong_typewriter_layout, link: 'https://pat.im/1024'});
additional_layouts.push({KE: 'Ko', type_name: '2-HGS_1952', full_name: '한당욱·김철수·신한종 풀어쓰기 전신 타자기 (1952)', layout: K2_HGS_1952_teletypewriter_layout, link: 'https://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Jang_1953', full_name: '장봉선 풀어쓰기 전신 타자기 (1953) (체신부 통신용)', layout: K2_Jang_1953_teletypewriter_layout, link: 'https://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Bag_Song_1968', full_name: '박영효·송계범 전신 타자기 자판 설계안 (1968)', layout: K2_Bag_Song_1968_layout, link: 'https://pat.im/1025'});
additional_layouts.push({KE: 'Ko', type_name: '2-Gaon26KM', full_name: '가온한글26KM', layout: K2_Gaon_KSX5002_layout, link: 'http://cafe.daum.net/kbd-p/8OTK/10'});

additional_layouts.push({KE: 'Ko', type_name: '4t-1969', full_name: '1969 네벌식 타자기 표준 (과학기술처)', layout: K4_1969_Typewriter_layout, link: 'https://pat.im/965'});
additional_layouts.push({KE: 'Ko', type_name: '3t-Oesol', full_name: '외솔 타자기 (1981, 최동식·김광성)', layout: K3_Oesol_Typewriter_layout, hangeul_combination_table: K3_Oesol_Typewriter_combination_table, link: 'https://pat.im/1026'});
additional_layouts.push({KE: 'Ko', type_name: '4t-1985', full_name: '1985 두벌식 배열 호환형 타자기 (과학기술처)', layout: K4_1985_Typewriter_layout, link: 'https://pat.im/1026'});

additional_layouts.push({KE: 'Ko', type_name: '3t-Gong_Munjang', full_name: '공병우 문장용 타자기', layout: K3_Gong_Munjang_layout, link: 'https://pat.im/960#5'});

additional_layouts.push({KE: 'Ko', type_name: '3-87', full_name: '3-87', layout: K3_87_layout, extended_sign_layout: K3_87_extended_layout, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3-89', full_name: '3-89', layout: K3_89_layout, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3-95', full_name: '3-95 자판안 (김창용)', layout: K3_95_proposal_layout, extended_sign_layout: K3_95_extended_layout, link: 'https://bbs.pat.im/viewtopic.php?f=15&t=931'});

additional_layouts.push({KE: 'Ko', type_name: '3-sun1990', full_name: '안종혁 순아래 1990 (한 손 자판, no-shift)  (3-90 응용)', layout: K3_sun1990_layout, link: ''});
additional_layouts.push({KE: 'Ko', type_name: '3-GimGug_38A', full_name: '김국 38A', layout: K3_GimGug_38A_layout, hangeul_combination_table: GimGug_38A_combination_table, link: 'http://cafe.daum.net/kbd-p/8k2B/1'});

additional_layouts.push({KE: 'Ko', type_name: '3-2011', full_name: '3-2011 (문장 입력용)', layout: K3_2011_layout, extended_sign_layout: K3_2011_extended_sign_layout, old_hangeul_layout_type_name: '3-2011-y', link: 'https://pat.im/855'});
additional_layouts.push({KE: 'Ko', type_name: '3-2011-y', full_name: '3-2011 옛한글', layout: K3_2011_layout, extended_sign_layout: K3_2011y_extended_sign_layout, extended_hangeul_layout: K3_2012y_extended_hangeul_layout, link: 'https://pat.im/908'});
additional_layouts.push({KE: 'Ko', type_name: '3-2012', full_name: '3-2012', layout: K3_2012_layout, extended_sign_layout: K3_2012_extended_sign_layout, old_hangeul_layout_type_name: '3-2012-y', link: 'https://pat.im/938'});
additional_layouts.push({KE: 'Ko', type_name: '3-2012-y', full_name: '3-2012 옛한글', layout: K3_2012_layout, extended_sign_layout: K3_2012y_extended_sign_layout, extended_hangeul_layout: K3_2012y_extended_hangeul_layout, link: 'https://pat.im/938#4-2'});
additional_layouts.push({KE: 'Ko', type_name: '314', full_name: '한글문화원 314 자판안', layout: K3_14_proposal_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/4'});
additional_layouts.push({KE: 'Ko', type_name: '314_gm', full_name: '한글문화원 314 자판안 (+ 갈마들이)', layout: K3_14_proposal_layout, link: 'http://cafe.daum.net/3bulsik/JMKX/4'});
additional_layouts.push({KE: 'Ko', type_name: '3-2014', full_name: '3-2014', layout: K3_2014_layout, sublayout: K3_2014_sublayout, extended_sign_layout: K3_2012y_extended_sign_layout, old_hangeul_layout_type_name: '3-2014-y', link: 'https://pat.im/1088'});
additional_layouts.push({KE: 'Ko', type_name: '3-2014-y', full_name: '3-2014 옛한글', layout: K3_2014_layout, extended_sign_layout: K3_2012y_extended_sign_layout, extended_hangeul_layout: K3_2012y_extended_hangeul_layout, link: 'https://pat.im/1090'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015', full_name: '3-2015', layout: K3_2015_layout, sublayout: K3_2015_sublayout, hangeul_combination_table: K3_2015_combination_table, hangeul_convenience_combination_table: K3_2015_additional_combination_table, old_hangeul_layout_type_name: '3-2015-y', link: 'http://cafe.daum.net/3bulsik/JMKX/34'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015-y', full_name: '3-2015 옛한글', layout: K3_2015y_layout, hangeul_combination_table: K3_2015y_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/36'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015M', full_name: '3-2015M', layout: K3_2015M_layout, sublayout: K3_2015M_sublayout, hangeul_combination_table: K3_2015M_combination_table, link: 'http://cafe.daum.net/3bulsik/JMKX/46'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015P', full_name: '3-2015P', layout: K3_2015P_layout, sublayout: K3_2015P_sublayout, extended_sign_layout: K3_2012y_extended_sign_layout, old_hangeul_layout_type_name: '3-2015P-y', link: 'https://pat.im/1090'});
additional_layouts.push({KE: 'Ko', type_name: '3-2015P-y', full_name: '3-2015P 옛한글', layout: K3_2015P_layout, extended_sign_layout: K3_2012y_extended_sign_layout, extended_hangeul_layout: K3_2012y_extended_hangeul_layout, link: 'https://pat.im/1090'});
additional_layouts.push({KE: 'Ko', type_name: '3-P2', full_name: '3-P2', layout: K3_P2_layout, sublayout: K3_P2_sublayout, extended_sign_layout: K3_2012y_extended_sign_layout, link: 'https://pat.im/1128'});

additional_layouts.push({KE: 'Ko', type_name: '3-18Na', full_name: '3-18Na', layout: K3_18Na_layout, sublayout: K3_18Na_sublayout, hangeul_combination_table: K3_18Na_combination_table, link: 'https://kldp.org/node/160815'});

additional_layouts.push({KE: 'Ko', type_name: 'Sin3-1995', full_name: '신세벌식 1995 (신광조 원안)', layout: K3_Sin3_1995_layout, link:'https://pat.im/1104'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-BGN', full_name: '박경남 신세벌식', layout: K3_Sin3_BGN_layout});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-2003', full_name: '박경남 수정 신세벌식 (2003)', layout: K3_Sin3_2003_layout, sublayout: K3_Sin3_2003_sublayout});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-2012', full_name: '신세벌식 2012', layout: K3_Sin3_2012_layout, sublayout: K3_Sin3_2012_sublayout, link: 'https://pat.im/978'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-2015', full_name: '신세벌식 2015', layout: K3_Sin3_2015_layout, hangeul_combination_table: K3_Sin3_2015_combination_table, link: 'http://sebeol.org/gnuboard/bbs/board.php?bo_table=lab&wr_id=28'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-P', full_name: '신세벌식 P', layout: K3_Sin3_P_layout, sublayout: K3_Sin3_P_sublayout, extended_hangeul_layout: K3_Sin3_P_y_layout, extended_sign_layout: K3_Sin3_extended_sign_layout, extended_hangeul_combination_table: K3_Sin3_P_extended_combination_table, link: 'https://pat.im/1110'});
additional_layouts.push({KE: 'Ko', type_name: 'Sin3-Gongdong', full_name: '신세벌식 공동개발안 (연구)', layout: K3_Sin3_Gongdong_layout, sublayout: K3_Sin3_Gongdong_sublayout, ieochigi_hangeul_abbreviation_table: K3_Sin3_Gongdong_abbreviation_table, hangeul_convenience_combination_table: K3_Sin3_Gongdong_additional_combination_table, link: 'http://cafe.daum.net/3bulsikmini0A0/JYgd/31'});

additional_layouts.push({KE: 'Ko', type_name: '3m-Semoe2014', full_name: '세모이 2014 (옛 배열)', layout: K3_Semoe_2014_layout, sublayout: K3_Semoe_2014_sublayout, moachigi_hangeul_combination_table: K3_Semoe_2014_combination_table});
additional_layouts.push({KE: 'Ko', type_name: '3m-Semoe2015', full_name: '세모이 2015 (옛 배열)', layout: K3_Semoe_2015_layout, sublayout: K3_Semoe_2015_sublayout, moachigi_hangeul_combination_table: K3_Semoe_2015_combination_table});
additional_layouts.push({KE: 'Ko', type_name: '3m-Semoe2016', full_name: '세모이 2016 (옛 배열)', layout: K3_Semoe_2016_layout, sublayout: K3_Semoe_2016_sublayout, moachigi_hangeul_combination_table: K3_Semoe_2016_combination_table, extended_sign_layout: K3_Semoe_extended_sign_layout});
additional_layouts.push({KE: 'Ko', type_name: '3m-Semoe2017', full_name: '세모이 2017 (옛 배열)', layout: K3_Semoe_2017_layout, sublayout: K3_Semoe_2017_sublayout, extended_sign_layout: K3_Semoe_extended_sign_layout, moachigi_hangeul_combination_table: K3_Semoe_2017_combination_table, moachigi_multikey_abbreviation_table: K3_Semoe_2017_moachigi_multikey_abbreviation_table, link: 'http://ssg.wo.tc/220526834927'});

additional_layouts.push({KE: 'Ko', type_name: '3m-test', full_name: '모아치기 시험', layout: K3_Semoe_2017_layout, sublayout: K3_Semoe_2017_sublayout, extended_sign_layout: K3_Semoe_extended_sign_layout, moachigi_hangeul_combination_table: K3_Semoe_2017_combination_table, moachigi_multikey_abbreviation_table: K3_test_multikey_abbreviation_table, link: ''});


function input_additional_keyboard_layout_info() {

	// 김준성 두벌식 타자기 (1940년대 미군정 때)
	K2_GimJunseong_typewriter_layout = [
		0x0000, /* 0x21 exclam: exclamation mark */
		0x003A, /* 0x22 quotedbl: colon */
		0x0033, /* 0x23 numbersign: 3 */
		0x0034, /* 0x24 dollar: 4 */
		0x0035, /* 0x25 percent: 5 */
		0x0037, /* 0x26 ampersand: 7 */
		0x116C, /* 0x27 apostrophe: jungseong oe */
		0x0039, /* 0x28 parenleft: 9 */
		0x0028, /* 0x29 parenright: left parenthesis */
		0x0038, /* 0x2A asterisk: 8 */
		0x002B, /* 0x2B plus: plus sign */
		0x116E, /* 0x2C comma: jungseong u */
		0x1170,	/* 0x2D minus: jungseong we */
		0x1172,	/* 0x2E period: jungseong yu */
		0x1171,	/* 0x2F slash: jungseong wi */
		0x116F,	/* 0x30 0: jungseong weo */
		0x0000,	/* 0x31 1: */
		0x0022, /* 0x32 2: quotation mark */
		0x0040,	/* 0x33 3: commertial at */
		0x0027,	/* 0x34 4: apostrophe */
		0x0025,	/* 0x35 5: percent */
		0x002E,	/* 0x36 6: period */
		0x002C,	/* 0x37 7: comma */
		0x116A,	/* 0x38 8: jungseong wa */
		0x116B,	/* 0x39 9: jungseong wae */
		0x003F,	/* 0x3A colon: question mark */
		0x1168,	/* 0x3B semicolon: jungseong ye */
		0x007E,	/* 0x3C less: tilde */
		0x003D,	/* 0x3D equal: equals sign */
		0x002F,	/* 0x3E greater: slash */
		0x005F,	/* 0x3F question: underscore */
		0x0032,	/* 0x40 at: 2 */
		0x0041,	/* 0x41 A */
		0x0042,	/* 0x42 B */
		0x0043,	/* 0x43 C */
		0x0044,	/* 0x44 D */
		0x0045,	/* 0x45 E */
		0x0046,	/* 0x46 F */
		0x0047,	/* 0x47 G */
		0x0048,	/* 0x48 H */
		0x0049,	/* 0x49 I */
		0x004A,	/* 0x4A J */
		0x004B,	/* 0x4B K */
		0x004C,	/* 0x4C L */
		0x004D,	/* 0x4D M */
		0x004E,	/* 0x4E N */
		0x004F,	/* 0x4F O */
		0x0050,	/* 0x50 P */
		0x0051,	/* 0x51 Q */
		0x0052,	/* 0x52 R */
		0x0053,	/* 0x53 S */
		0x0054,	/* 0x54 T */
		0x0055,	/* 0x55 U */
		0x0056,	/* 0x56 V */
		0x0057,	/* 0x57 W */
		0x0058,	/* 0x58 X */
		0x0059,	/* 0x59 Y */
		0x005A,	/* 0x5A Z */
		0x1164,	/* 0x5B bracketleft: jungseong yae */
		0x005C,	/* 0x5C backslash: backslash */
		0x0000,	/* 0x5D bracketright: */
		0x0036,	/* 0x5E asciicircum: 6 */
		0x0029,	/* 0x5F underscore: right parenthesis */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1105,	/* 0x61 a: choseong lieul */
		0x110C,	/* 0x62 b: choseong jieuj */
		0x110F,	/* 0x63 c: choseong kieuk */
		0x1102,	/* 0x64 d: choseong nieun */
		0x1107,	/* 0x65 e: choseong bieub */
		0x1100,	/* 0x66 f: choseong gieug */
		0x1112,	/* 0x67 g: choseong hieuh */
		0x1163,	/* 0x68 h: jungseong ya */
		0x1175,	/* 0x69 i: jungseong i */
		0x1161,	/* 0x6A j: jungseong a */
		0x1165,	/* 0x6B k: jungseong eo */
		0x1167,	/* 0x6C l: jungseong yeo */
		0x1169,	/* 0x6D m: jungseong o */
		0x116D,	/* 0x6E n: jungseong yo */
		0x1166,	/* 0x6F o: jungseong e */
		0x1162,	/* 0x70 p: jungseong ae */
		0x00B0,	/* 0x71 q: degree sign */
		0x1109,	/* 0x72 r: choseong sieus */
		0x1103,	/* 0x73 s: choseong dieud */
		0x110B,	/* 0x74 t: choseong ieung */
		0x1173,	/* 0x75 u: jungseong eu */
		0x110E,	/* 0x76 v: choseong chieuch */
		0x1106,	/* 0x77 w: choseong mieum */
		0x1110,	/* 0x78 x: choseong tieut */
		0x1174,	/* 0x79 y: jungseong eui */
		0x1111,	/* 0x7A z: choseong pieup */
		0x002D,	/* 0x7B braceleft: minus sign */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x0000,	/* 0x7D braceright: */
		0x0000 	/* 0x7E asciitilde: */
	];

	// 한당욱·김철수·신한종 전신 타자기 (1952년)
	K2_HGS_1952_teletypewriter_layout = [
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
		0x002D,	/* 0x41 A: minus sign */
		0x003F,	/* 0x42 B: question mark */
		0x003A,	/* 0x43 C: colon */
		0x0024,	/* 0x44 D: dollar sign */
		0x0033,	/* 0x45 E: 3 */
		0x0021,	/* 0x46 F: exclamation mark */
		0x0026,	/* 0x47 G: ampersand */
		0x23F9,	/* 0x48 H: stop */
		0x0038,	/* 0x49 I: 8 */
		0x0022,	/* 0x4A J: quotatioin mark */
		0x0028,	/* 0x4B K: left parenthesis */
		0x0029,	/* 0x4C L: right parenthesis */
		0x002E,	/* 0x4D M: period */
		0x002C,	/* 0x4E N: comma */
		0x0039,	/* 0x4F O: 9 */
		0x0030,	/* 0x50 P: 0 */
		0x0031,	/* 0x51 Q: 1 */
		0x0034,	/* 0x52 R: 4 */
		0x237E,	/* 0x53 S: bell */
		0x0035,	/* 0x54 T: 5 */
		0x0037,	/* 0x55 U: 7 */
		0x003B,	/* 0x56 V: semicolon */
		0x0032,	/* 0x57 W: 2 */
		0x002F,	/* 0x58 X: slash */
		0x0036,	/* 0x59 Y: 6 */
		0x3003,	/* 0x5A Z: ditto mark */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1100,	/* 0x61 a: choseong gieug */
		0x116D,	/* 0x62 b: jungseong yo */
		0x1111,	/* 0x63 c: choseong pieup */
		0x1109,	/* 0x64 d: choseong sieus */
		0x1106,	/* 0x65 e: choseong mieum */
		0x1102,	/* 0x66 f: choseong nieun */
		0x110B,	/* 0x67 g: choseong ieung */
		0x1169,	/* 0x68 h: jungseong o */
		0x116E,	/* 0x69 i: jungseong u */
		0x1161,	/* 0x6A j: jungseong a */
		0x1165,	/* 0x6B k: jungseong eo */
		0x1175,	/* 0x6C l: jungseong i */
		0x1173,	/* 0x6D m: jungseong yu */
		0x1172,	/* 0x6E n: jungseong eu */
		0x1162,	/* 0x6F o: jungseong ae */
		0x1166,	/* 0x70 p: jungseong e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x110C,	/* 0x72 r: choseong jieuj */
		0x1105,	/* 0x73 s: choseong lieul */
		0x1112,	/* 0x74 t: choseong hieuh */
		0x1167,	/* 0x75 u: jungseong yeo */
		0x1110,	/* 0x76 v: choseong tieut */
		0x1103,	/* 0x77 w: choseong dieud */
		0x110E,	/* 0x78 x: choseong chieuch */
		0x1163,	/* 0x79 y: jungseong ya */
		0x110F,	/* 0x7A z: choseong kieuk */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 장봉선 두벌식 (1953년 체신부 전신용)
	K2_Jang_1953_teletypewriter_layout = [
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
		0x002D,	/* 0x41 A: minus sign */
		0x003F,	/* 0x42 B: question mark */
		0x003A,	/* 0x43 C: colon */
		0x271C,	/* 0x44 D: Who are you? (ENQ, WRU) */
		0x0033,	/* 0x45 E: 3 */
		0x0025,	/* 0x46 F: percent sign */
		0x0022,	/* 0x47 G: quotatioin mark */
		0x0021,	/* 0x48 H: exclamation mark */
		0x0038,	/* 0x49 I: 8 */
		0x237E,	/* 0x4A J: bell */
		0x0028,	/* 0x4B K: left parenthesis */
		0x0029,	/* 0x4C L: right parenthesis */
		0x002E,	/* 0x4D M: period */
		0x002C,	/* 0x4E N: comma */
		0x0039,	/* 0x4F O: 9 */
		0x0030,	/* 0x50 P: 0 */
		0x0031,	/* 0x51 Q: 1 */
		0x0034,	/* 0x52 R: 4 */
		0x0027,	/* 0x53 S: apostrophe */
		0x0035,	/* 0x54 T: 5 */
		0x0037,	/* 0x55 U: 7 */
		0x003D,	/* 0x56 V: equals sign */
		0x0032,	/* 0x57 W: 2 */
		0x002F,	/* 0x58 X: slash */
		0x0036,	/* 0x59 Y: 6 */
		0x002B,	/* 0x5A Z: plus sign */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1112,	/* 0x61 a: choseong hieuh */
		0x1111,	/* 0x62 b: choseong pieup */
		0x110E,	/* 0x63 c: choseong chieuch */
		0x1100,	/* 0x64 d: choseong gieug */
		0x1109,	/* 0x65 e: choseong sieus */
		0x1102,	/* 0x66 f: choseong nieun */
		0x110B,	/* 0x67 g: choseong ieung */
		0x1173,	/* 0x68 h: jungseong eu */
		0x1169,	/* 0x69 i: jungseong o */
		0x1161,	/* 0x6A j: jungseong a */
		0x1175,	/* 0x6B k: jungseong i */
		0x1165,	/* 0x6C l: jungseong eo */
		0x116D,	/* 0x6D m: jungseong yo */
		0x1172,	/* 0x6E n: jungseong yu */
		0x1163,	/* 0x6F o: jungseong ya */
		0x1166,	/* 0x70 p: jungseong e */
		0x1110,	/* 0x71 q: choseong tieut */
		0x1103,	/* 0x72 r: choseong dieud */
		0x1105,	/* 0x73 s: choseong lieul */
		0x1106,	/* 0x74 t: choseong mieum */
		0x116E,	/* 0x75 u: jungseong u */
		0x1107,	/* 0x76 v: choseong bieub */
		0x110C,	/* 0x77 w: choseong jieuj */
		0x110F,	/* 0x78 x: choseong kieuk */
		0x1167,	/* 0x79 y: jungseong yeo */
		0x1162,	/* 0x7A z: jungseong ae */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 박영효·송계범 두벌식 (1968년 전신 타자기용)
	K2_Bag_Song_1968_layout = [
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
		0x1104,	/* 0x41 A: choseong ssangdieud */
		0x1163,	/* 0x42 B: jungseong ya*/
		0x1112,	/* 0x43 C: choseong hieuh*/
		0x110B,	/* 0x44 D: choseong ieung*/
		0x1108,	/* 0x45 E: choseong ssangbieub */
		0x1102,	/* 0x46 F: choseong nieun */
		0x1105,	/* 0x47 G: choseong lieul */
		0x1169,	/* 0x48 H: jungseong o */
		0x1168,	/* 0x49 I: jungseong ye */
		0x1173,	/* 0x4A J: jungseong eu */
		0x1161,	/* 0x4B K: jungseong a */
		0x1175,	/* 0x4C L: jungseong i */
		0x1172,	/* 0x4D M: jungseong yu */
		0x116D,	/* 0x4E N: jungseong yo */
		0x1165,	/* 0x4F O: jungseong eo */
		0x1164,	/* 0x50 P: jungseong yae */
		0x110E,	/* 0x51 Q: choseong chieuch */
		0x110A,	/* 0x52 R: choseong ssangsieus */
		0x1101,	/* 0x53 S: choseong ssanggieug */
		0x1106,	/* 0x54 T: choseong mieum*/
		0x116E,	/* 0x55 U: jungseong u */
		0x1110,	/* 0x56 V: choseong tieut */
		0x110D,	/* 0x57 W: choseong ssangjieuj */
		0x1111,	/* 0x58 X: choseong pieup */
		0x1167,	/* 0x59 Y: jungseong yeo */
		0x110F,	/* 0x5A Z: choseong kieuk */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1103,	/* 0x61 a: choseong dieud */
		0x1163,	/* 0x62 b: jungseong ya */
		0x1112,	/* 0x63 c: choseong hieuh */
		0x110B,	/* 0x64 d: choseong ieung */
		0x1107,	/* 0x65 e: choseong bieub */
		0x1102,	/* 0x66 f: choseong nieun */
		0x1105,	/* 0x67 g: choseong lieul */
		0x1169,	/* 0x68 h: jungseong o */
		0x1166,	/* 0x69 i: jungseong e */
		0x1173,	/* 0x6A j: jungseong eu */
		0x1161,	/* 0x6B k: jungseong a */
		0x1175,	/* 0x6C l: jungseong i */
		0x1172,	/* 0x6D m: jungseong yu */
		0x116D,	/* 0x6E n: jungseong yo */
		0x1165,	/* 0x6F o: jungseong eo */
		0x1162,	/* 0x70 p: jungseong ae */
		0x110E,	/* 0x71 q: choseong chieuch */
		0x1109,	/* 0x72 r: choseong sieus */
		0x1100,	/* 0x73 s: choseong gieug */
		0x1106,	/* 0x74 t: choseong mieum */
		0x116E,	/* 0x75 u: jungseong u */
		0x1110,	/* 0x76 v: choseong tieut */
		0x110C,	/* 0x77 w: choseong jieuj */
		0x1111,	/* 0x78 x: choseong pieup */
		0x1167,	/* 0x79 y: jungseong yeo */
		0x110F,	/* 0x7A z: choseong kieuk */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 가온한글 두벌식
	K2_Gaon_KSX5002_layout = [
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
		0x0041, /* 0x41 A */
		0x0042, /* 0x42 B */
		0x0043, /* 0x43 C */
		0x0044, /* 0x44 D */
		0x0045, /* 0x45 E */
		0x0046, /* 0x46 F */
		0x0047, /* 0x47 G */
		0x0048, /* 0x48 H */
		0x0049, /* 0x49 I */
		0x004A, /* 0x4A J */
		0x004B, /* 0x4B K */
		0x004C, /* 0x4C L */
		0x004D, /* 0x4D M */
		0x004E, /* 0x4E N */
		0x004F, /* 0x4F O */
		0x0050, /* 0x50 P */
		0x0051, /* 0x51 Q */
		0x0052, /* 0x52 R */
		0x0053, /* 0x53 S */
		0x0054, /* 0x54 T */
		0x0055, /* 0x55 U */
		0x0056, /* 0x56 V */
		0x0057, /* 0x57 W */
		0x0058, /* 0x58 X */
		0x0059, /* 0x59 Y */
		0x005A, /* 0x5A Z */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106, /* 0x61 a: choseong mieum */
		0x1172, /* 0x62 b: jungseong yu */
		0x110E, /* 0x63 c: choseong cieuc */
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

	// 1969 옛 표준 네벌식 타자기
	K4_1969_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x11AE,	/* 0x22 quotedbl: jongseong dieud */
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003A,	/* 0x26 ampersand: colon */
		0x11B8,	/* 0x27 apostrophe: jongseong bieub */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x0027,	/* 0x2A asterisk: apostrophe */
		0x002B,	/* 0x2B plus: plus sign */
		0x3161,	/* 0x2C comma: hangeul letter eu */
		0x002D,	/* 0x2D minus: minus sign */
		0x11BA,	/* 0x2E period: jongseong sieus */
		0x11BB,	/* 0x2F slash: jongseong ssangsieus */
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
		0x3156,	/* 0x3A colon: hangeul letter ye */
		0x3154,	/* 0x3B semicolon: hangeul letter e */
		0x002C,	/* 0x3C less: comma */
		0x003D,	/* 0x3D equal: equals sign */
		0x11B9,	/* 0x3E greater: jongseong bieubsieus */
		0x11AD,	/* 0x3F question: jongseong nieunhieuh */
		0x0022,	/* 0x40 at: quotation mark */
		0x110F,	/* 0x41 A: choseong kieuk */
		0x3160,	/* 0x42 B: hangeul letter yu */
		0x11BE,	/* 0x43 C: jongseong chieuch */
		0x110E,	/* 0x44 D: choseong chieuch */
		0x1104,	/* 0x45 E: choseong ssangdieud */
		0x1111,	/* 0x46 F: choseong pieup */
		0x002F,	/* 0x47 G: slash */
		0x315B,	/* 0x48 H: hangeul letter yo */
		0x1163,	/* 0x49 I: jungseong ya */
		0x3155,	/* 0x4A J: hangeul letter yeo */
		0x3151,	/* 0x4B K: hangeul letter ya */
		0x3150,	/* 0x4C L: hangeul lteer ae */
		0x002E,	/* 0x4D M: period */
		0x1172,	/* 0x4E N: jungseong yu */
		0x1162,	/* 0x4F O: jungseong ae */
		0x003F,	/* 0x50 P: question mark */
		0x1108,	/* 0x51 Q: choseong ssangbieub */
		0x1101,	/* 0x52 R: choseong ssanggieug */
		0x1110,	/* 0x53 S: choseong tieut */
		0x110A,	/* 0x54 T: choseong ssangsieus*/
		0x1167,	/* 0x55 U: jungseong yeo */
		0x11C1,	/* 0x56 V: jongseong pieup */
		0x110D,	/* 0x57 W: choseong ssangjieuj */
		0x11C0,	/* 0x58 X: jongseong tieut */
		0x116D,	/* 0x59 Y: jungseong yo */
		0x11C2,	/* 0x5A Z: jongseong hieuh */
		0x11A8,	/* 0x5B bracketleft: jongseong gieug */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x005F,	/* 0x5E asciicircum: underscore */
		0x00D7,	/* 0x5F underscore: multiplication sign */
		0x0000,	/* 0x60 quoteleft: */
		0x1106,	/* 0x61 a: choseong mieum */
		0x315C,	/* 0x62 b: hangeul letter u */
		0x11BC,	/* 0x63 c: jongseong ieung */
		0x110B,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul*/
		0x1112,	/* 0x67 g: choseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x1161,	/* 0x69 i: jungseong a */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */
		0x1173,	/* 0x6D m: jungseong eu */
		0x116E,	/* 0x6E n: jungseong u */
		0x1175,	/* 0x6F o: jungseong i */
		0x1166,	/* 0x70 p: jungseong e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x1165,	/* 0x75 u: jungseong u */
		0x11AF,	/* 0x76 v: jongseong lieul */
		0x110C,	/* 0x77 w: choseong jieuj */
		0x11AB,	/* 0x78 x: jongseong nieun */
		0x1169,	/* 0x79 y: jungseong o */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x11BD,	/* 0x7B braceleft: jongseong jieuj */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000,	/* 0x7E asciitilde: */
	];

	// 외솔 타자기 (두벌식 호환형 세벌식)
	K3_Oesol_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x00B0,	/* 0x22 quotedbl: degree sign */
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003A,	/* 0x26 ampersand: colon */
		0x116E,	/* 0x27 apostrophe: jungseong u */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x0027,	/* 0x2A asterisk: apostrophe */
		0x002B,	/* 0x2B plus: plus sign */
		0x002C,	/* 0x2C comma: comma */
		0x002D,	/* 0x2D minus: minus sign */
		0x002E,	/* 0x2E period: period */
		0x1169,	/* 0x2F slash: jungseong o */
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
		0x11AC,	/* 0x3A colon: jongseong nieun-jieuj */
		0x3162,	/* 0x3B semicolon: hangeul letter eui */
		0x002F,	/* 0x3C less: slash */
		0x003D,	/* 0x3D equal: equals sign */
		0x003F,	/* 0x3E greater: question mark */
		0x0040,	/* 0x3F question: commertial at */
		0x0022,	/* 0x40 at: quotatioin mark */
		0x11B7,	/* 0x41 A: jongseong mieum */
		0x11AA,	/* 0x42 B: jongseong gieug-sieus */
		0x11BE,	/* 0x43 C: jongseong chieuch */
		0x11BC,	/* 0x44 D: jongseong ieung */
		0x11AE,	/* 0x45 E: jongseong dieud */
		0x11AF,	/* 0x46 F: jongseong lieul */
		0x11C2,	/* 0x47 G: jongseong hieuh */
		0x11AD,	/* 0x48 H: jongseong nieun-hieuh */
		0x11B0,	/* 0x49 I: jongseong lieul-gieug */
		0x11B9,	/* 0x4A J: jongseong bieub-sieus */
		0x11BB,	/* 0x4B K: jongseong ssangsieus */
		0x11A9,	/* 0x4C L: jongseong ssanggieug */
		0x11B2,	/* 0x4D M: jongseong lieul-bieub */
		0x11B3,	/* 0x4E N: jongseong lieul-sieus */
		0x11B4,	/* 0x4F O: jongseong lieul-tieut */
		0x11B5,	/* 0x50 P: jongseong lieul-pieup */
		0x11B8,	/* 0x51 Q: jongseong bieub */
		0x11A8,	/* 0x52 R: jongseong gieug */
		0x11AB,	/* 0x53 S: jongseong nieun */
		0x11BA,	/* 0x54 T: jongseong sieus */
		0x11B1,	/* 0x55 U: jongseong lieul-mieum */
		0x11C1,	/* 0x56 V: jongseong pieup */
		0x11BD,	/* 0x57 W: jongseong jieuj */
		0x11C0,	/* 0x58 X: jongseong tieut */
		0x11B6,	/* 0x59 Y: jongseong lieul-hieuh */
		0x110F,	/* 0x5A Z: choseong kieuk */
		0x3156,	/* 0x5B bracketleft: hangeul letter ye */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x005F,	/* 0x5E asciicircum: underscore */
		0x00D7,	/* 0x5F underscore: multiplication sign */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106,	/* 0x61 a: choseong mieum */
		0x3160,	/* 0x62 b: hangeul letter yu */
		0x110E,	/* 0x63 c: choseong chieu */
		0x110B,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul */
		0x1112,	/* 0x67 g: chchoseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x3151,	/* 0x69 i: hangeul letter ya */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */
		0x3161,	/* 0x6D m: hangeul letter eu */
		0x315C,	/* 0x6E n: hangeul letter u */
		0x3150,	/* 0x6F o: hangeul lteer ae */
		0x3154,	/* 0x70 p: hangeul letter e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x3155,	/* 0x75 u: hangeul letter yeo */
		0x1111,	/* 0x76 v: choseong pieup */
		0x110C,	/* 0x77 w: choseong jieuj */
		0x1110,	/* 0x78 x: choseong tieut */
		0x315B,	/* 0x79 y: hangeul letter yo */
		0x110F,	/* 0x7A z: choseong kieuk */
		0x3152,	/* 0x7B braceleft: hangeul letter yae */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 1985 표준 타자기 (2벌식 호환형 4벌식)
	K4_1985_Typewriter_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x11BB,	/* 0x22 quotedbl: jongseong ssangsieus */
		0xFFE6,	/* 0x23 numbersign: won sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x003A,	/* 0x26 ampersand: colon */
		0x1174,	/* 0x27 apostrophe: jungseong eui */
		0x0029,	/* 0x28 parenleft: right parenthesis */
		0x002D,	/* 0x29 parenright: minus sign */
		0x0028,	/* 0x2A asterisk: left parenthesis *///0x0027 apostrophe
		0x11B5,	/* 0x2B plus: jongseong lieul-pieup */
		0x002C,	/* 0x2C comma: comma */
		0x00D7,	/* 0x2D minus: multiplication sign */
		0x116E,	/* 0x2E period: jungseong u */
		0x1169,	/* 0x2F slash: jungseong o */
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
		0x11AD,	/* 0x3A colon: jongseong nieun-jieuj */
		0x1168,	/* 0x3B semicolon: jungseong ye */
		0x11B9,	/* 0x3C less: jongseong bieub-sieus */
		0x002B,	/* 0x3D equal: plus sign */
		0x002E,	/* 0x3E greater: period */
		0x003F,	/* 0x3F question: question mark */
		0x0022,	/* 0x40 at: quotatioin mark */
		0x11B7,	/* 0x41 A: jongseong mieum */
		0x1172, /* 0x42 B: jungseong yu */
		0x11BE,	/* 0x43 C: jongseong chieuch */
		0x11BC,	/* 0x44 D: jongseong ieung */
		0x11AE,	/* 0x45 E: jongseong dieud */
		0x11AF,	/* 0x46 F: jongseong lieul */
		0x11C2,	/* 0x47 G: jongseong hieuh */
		0x1169, /* 0x48 H: jungseong o */
		0x1163, /* 0x49 I: jungseong ya */
		0x1165, /* 0x4A J: jungseong eo */
		0x1161, /* 0x4B K: jungseong a */
		0x1175, /* 0x4C L: jungseong i */
		0x1173, /* 0x4D M: jungseong eu */
		0x116E, /* 0x4E N: jungseong u */
		0x1162, /* 0x4F O: jungseong ae */
		0x1166, /* 0x50 P: jungseong e */
		0x11B8,	/* 0x51 Q: jongseong bieub */
		0x11A8,	/* 0x52 R: jongseong gieug */
		0x11AB,	/* 0x53 S: jongseong nieun */
		0x11BA,	/* 0x54 T: jongseong sieus */
		0x1167, /* 0x55 U: jungseong yeo */
		0x11C1,	/* 0x56 V: jongseong pieup */
		0x11BD,	/* 0x57 W: jongseong jieuj */
		0x11C0,	/* 0x58 X: jongseong tieut */
		0x116D, /* 0x59 Y: jungseong yo */
		0x110F,	/* 0x5A Z: choseong kieuk */
		0x1164,	/* 0x5B bracketleft: jungseong yae */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x002F,	/* 0x5E asciicircum: slash */
		0x11A9,	/* 0x5F underscore: jongseong ssanggieug */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x1106,	/* 0x61 a: choseong mieum */
		0x3160,	/* 0x62 b: hangeul letter yu */
		0x110E,	/* 0x63 c: choseong chieu */
		0x110B,	/* 0x64 d: choseong ieung */
		0x1103,	/* 0x65 e: choseong dieud */
		0x1105,	/* 0x66 f: choseong lieul */
		0x1112,	/* 0x67 g: chchoseong hieuh */
		0x3157,	/* 0x68 h: hangeul letter o */
		0x3151,	/* 0x69 i: hangeul letter ya */
		0x3153,	/* 0x6A j: hangeul letter eo */
		0x314F,	/* 0x6B k: hangeul letter a */
		0x3163,	/* 0x6C l: hangeul letter i */
		0x3161,	/* 0x6D m: hangeul letter eu */
		0x315C,	/* 0x6E n: hangeul letter u */
		0x3150,	/* 0x6F o: hangeul lteer ae */
		0x3154,	/* 0x70 p: hangeul letter e */
		0x1107,	/* 0x71 q: choseong bieub */
		0x1100,	/* 0x72 r: choseong gieug */
		0x1102,	/* 0x73 s: choseong nieun */
		0x1109,	/* 0x74 t: choseong sieus */
		0x3155,	/* 0x75 u: hangeul letter yeo */
		0x1111,	/* 0x76 v: choseong pieup */
		0x110C,	/* 0x77 w: choseong jieuj */
		0x1110,	/* 0x78 x: choseong tieut */
		0x315B,	/* 0x79 y: hangeul letter yo */
		0x110F,	/* 0x7A z: choseong kieuk */
		0x11B0,	/* 0x7B braceleft: jongseong lieul-gieug */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 공병우 문장용 타자기
	K3_Gong_Munjang_layout = [
		0x11BE,	/* 0x21 exclam: jongseong chieuch */
		0x0021,	/* 0x22 quotedbl: exclam */
		0x11C1,	/* 0x23 numbersign: jongseong pieup */
		0x11BD,	/* 0x24 dollar: jongseong jieuj */
		0x3152,	/* 0x25 percent: hangeul letter yae */
		0x00B7,	/* 0x26 ampersand: middle dot */
		0x3162,	/* 0x27 apostrophe: hangeul letter eui */
		0x004B,	/* 0x28 parenleft: K */
		0x004D,	/* 0x29 parenright: M */
		0x002F,	/* 0x2A asterisk: slash */
		0x004C,	/* 0x2B plus: L */
		0x002C,	/* 0x2C comma */
		0x3156,	/* 0x2D minus: hangeul letter ye */
		0x002E,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x3151,	/* 0x30 0: hangeul letter ya */
		0x11AD,	/* 0x31 1: jongseong nieun-hieuh */
		0x11C2,	/* 0x32 2: jongseong hieuh */
		0x11BB,	/* 0x33 3: jongseong ssangsieus */
		0x11B9,	/* 0x34 4: jongseong bieub-sieus */
		0x3150,	/* 0x35 5: hangeul lteer ae */
		0x3155,	/* 0x36 6: hangeul letter yeo */
		0x1111,	/* 0x37 7: choseong pieup */
		0x1110,	/* 0x38 8: choseong tieuh */
		0x110F,	/* 0x39 9: choseong kieuk */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less: less-than sign */
		0x3160,	/* 0x3D equal: hangeul letter yu */
		0x003E,	/* 0x3E greater: greater-than sign */
		0x0023,	/* 0x3F question: number sign */
		0x11AE,	/* 0x40 at: jongseong dieud */
		0x11B2,	/* 0x41 A: jongseong lieul-bieub */
		0x300D,	/* 0x42 B: right corner bracket 」 */
		0x002A,	/* 0x43 C: aterisk */
		0x11B0, /* 0x44 D: jongseong lieul-gieug */
		0x11A9,	/* 0x45 E: jongseong ssanggieug */
		0x0022,	/* 0x46 F: quotatioin mark */
		0x003D,	/* 0x47 G: equals sign */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0029,	/* 0x4D M: parenright */
		0x0028,	/* 0x4E N: parenleft */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11AA,	/* 0x51 Q: jongseong gieug-sieus */
		0x003F,	/* 0x52 R: question mark */
		0x11B6,	/* 0x53 S: jongseong lieul-hieuh */
		0x00D7,	/* 0x54 T: multiplication sign × */
		0x0036,	/* 0x55 U: 6 */
		0x300C,	/* 0x56 V: left corner bracket 「 */
		0x11B1,	/* 0x57 W: jongseong lieul-mieum */
		0x11AC,	/* 0x58 X: jongseong nieun-jieuj */
		0x0035,	/* 0x59 Y: 5 */
		0x11BF,	/* 0x5A Z: jongseong kieuk */
		0x116E,	/* 0x5B bracketleft: jungseong u */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x003A,	/* 0x5E asciicircum: middle colon */
		0x0047,	/* 0x5F underscore: G */
		0x0000,	/* 0x60 quoteleft: */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x315C,	/* 0x62 b: hangeul letter u */
		0x3154,	/* 0x63 c: hangeul letter e */
		0x11AB,	/* 0x64 d: jongseong nieun */
		0x11A8,	/* 0x65 e: jongseong gieug */
		0x314F,	/* 0x66 f: hangeul letter a */
		0x3161,	/* 0x67 g: hangeul letter eu */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1103,	/* 0x6B k: choseong dieud */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x315B,	/* 0x70 p: hangeul letter yo */
		0x11C0,	/* 0x71 q: jongseong tieut */
		0x3163,	/* 0x72 r: hangeul letter i */
		0x11AF,	/* 0x73 s: jongseong lieul */
		0x3153,	/* 0x74 t: hangeul letter eo */
		0x1100,	/* 0x75 u: choseong gieug */
		0x3157,	/* 0x76 v: hangeul letter o */
		0x11B7,	/* 0x77 w: jongseong mieum */
		0x11BA,	/* 0x78 x: jongseong sieus */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B8,	/* 0x7A z: jongseong bieub */
		0x002D,	/* 0x7B braceleft: minus sign */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000	/* 0x7E asciitilde: */
	];

	// 3-87 자판
	K3_87_layout = [
		0x11BF,	/* 0x21 exclam: jongseong kieuk */
		0x201D,	/* 0x22 quotedbl: right double quotation mark ” */
		0x11AC,	/* 0x23 numbersign: jongseong nieun-jieuj */
		0x11B1,	/* 0x24 dollar: jongseong lieul-mieum */
		0x11B4,	/* 0x25 percent: jongseong lieul-tieut */
		0x0037,	/* 0x26 ampersand: 7 */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0039,	/* 0x28 parenleft: 9 */
		0x002F,	/* 0x29 parenright: slash */
		0x0038,	/* 0x2A asterisk: 8 */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x300C,	/* 0x2D minus: left corner bracket 「 */
		0x002E,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0029,	/* 0x30 0: parenright */
		0x11B8,	/* 0x31 1: jongseong bieub */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x116D,	/* 0x33 3: jungseong yo */
		0x1168,	/* 0x34 4: jungseong ye */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x0028,	/* 0x37 7: parenleft */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x201C,	/* 0x3A colon : left double quotation mark “ */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x002C,	/* 0x3C less: comma */
		0x300D,	/* 0x3D equal: right corner bracket 」 */
		0x002E,	/* 0x3E greater: period */
		0x00B7,	/* 0x3F question: middle dot */
		0x11BD,	/* 0x40 at: jongseong jieuj */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x11B2,	/* 0x42 B: jongseong lieul-bieub */
		0x203B,	/* 0x43 C: reference mark */
		0x1164, /* 0x44 D: jungseong yae */
		0x0000,	/* 0x45 E: */
		0x11A9,	/* 0x46 F: jongseong ssanggieug */
		0x11B0,	/* 0x47 G: jongseong lieul-gieug */
		0x0022,	/* 0x48 H: quotatioin mark */
		0x0035,	/* 0x49 I: 5 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0030,	/* 0x4D M: 0 */
		0x002D,	/* 0x4E N: minus sign */
		0x0036,	/* 0x4F O: 6 */
		0x003C,	/* 0x50 P: less-than sign */
		0x11C1,	/* 0x51 Q: jongseong pieup */
		0x11C2,	/* 0x52 R: jongseong hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x11B6,	/* 0x54 T: jongseong lieul-hieuh */
		0x0034,	/* 0x55 U: 4 */
		0x0021,	/* 0x56 V: exclam */
		0x11C0,	/* 0x57 W: jongseong tieut */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x0027,	/* 0x59 Y: apostrophe */
		0x11BE,	/* 0x5A Z: jongseong chieuch */
		0x110F,	/* 0x5B bracketleft: choseong kieuk */
		0x003A,	/* 0x5C backslash: colon */
		0x003F,	/* 0x5D bracketright: question mark */
		0x0000,	/* 0x5E asciicircum: */
		0x0025,	/* 0x5F underscore: percent */
		0x11B3,	/* 0x60 quoteleft: jongseong lieul-sieus */
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
		0x1103,	/* 0x6B k: choseong dieud */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11BA,	/* 0x71 q: jongseong sieus */
		0x1162,	/* 0x72 r: jungseong ae */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x1165,	/* 0x74 t: jungseong eo */
		0x1100,	/* 0x75 u: choseong gieug */
		0x1169,	/* 0x76 v: jungseong o */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x003E,	/* 0x7B braceleft: greater-than sign */
		0x003B,	/* 0x7C bar: semicolon */
		0x005C,	/* 0x7D braceright : backslash */
		0x11AA	/* 0x7E asciitilde: jongseong gieug-sieus */
	];

	// 3-87 자판 확장 배열
	K3_87_extended_layout = [
		[[0x0000],[0x0000]],	/* 0x21 exclam: */
		[[0x0000],[0x0000]],	/* 0x22 quotedbl: */
		[[0x0000],[0x0000]],	/* 0x23 numbersign */
		[[0x0000],[0x0000]],	/* 0x24 dollar */
		[[0x0000],[0x0000]],	/* 0x25 percent: */
		[[0x0000],[0x0000]],	/* 0x26 ampersand: */
		[[0x2019],[0x2193]],	/* 0x27 apostrophe: right single quotation mark ’, downwards arrow ↓ */
		[[0x0000],[0x0000]],	/* 0x28 parenleft: */
		[[0x0000],[0x0000]],	/* 0x29 parenright: */
		[[0x0000],[0x0000]],	/* 0x2A asterisk */
		[[0x0000],[0x0000]],	/* 0x2B plus: */
		[[0x2192],[0x2198]],	/* 0x2C comma: rightwards arrow →, south-east arrow ↘ */
		[[0x2610],[0x007E]],	/* 0x2D minus: ballot box ☐, tilde */
		[[0x2190],[0x2015]],	/* 0x2E period: leftwards arrow ←, horizontal bar ― */
		[[0x25FE],[0x00B1]],	/* 0x2F slash: black medium small square ◾, plus minus sign ± */
		[[0x2070],[0x00B0]],	/* 0x30 0: superscript zero ⁰, degree sign ° */
		[[0x00B9],[0x11B5]],	/* 0x31 1: superscript one ¹, jongseong lieul-pieup */
		[[0x00B2],[0x0040]],	/* 0x32 2: superscript two ², at */
		[[0x00B3],[0x0023]],	/* 0x33 3: superscript three ³, number sign */
		[[0x2074],[0x0024]],	/* 0x34 4: superscript four ⁴, dollar */
		[[0x2075],[0x00A9]],	/* 0x35 5: superscript five ⁵, copyright sign © */
		[[0x2076],[0x00AE]],	/* 0x36 6: superscript six ⁶, registerd sign ® */
		[[0x2077],[0x2122]],	/* 0x37 7: superscript seven ⁷, trademark ™ */
		[[0x2078],[0x002A]],	/* 0x38 8: superscript eight ⁸, aterisk */
		[[0x2079],[0x25B2]],	/* 0x39 9: superscript nine ⁹, parenleft: black up-pointing ▲ */
		[[0x0000],[0x0000]],	/* 0x3A colon: */
		[[0x2018],[0x2191]],	/* 0x3B semicolon: left single quotation mark ‘, upwards arrow ↑ */
		[[0x0000],[0x0000]],	/* 0x3C less: */
		[[0x2713],[0x003D]],	/* 0x3D equal: check mark ✓, equal sign */
		[[0x0000],[0x0000]],	/* 0x3E greater: */
		[[0x0000],[0x0000]],	/* 0x3F question: */
		[[0x0000],[0x0000]],	/* 0x40 at */
		[[0x0000],[0x0000]],	/* 0x41 A: */
		[[0x0000],[0x0000]],	/* 0x42 B: */
		[[0x0000],[0x0000]],	/* 0x43 C: */
		[[0x0000],[0x0000]],	/* 0x44 D: */
		[[0x0000],[0x0000]],	/* 0x45 E: */
		[[0x0000],[0x0000]],	/* 0x46 F: */
		[[0x0000],[0x0000]],	/* 0x47 G: */
		[[0x0000],[0x0000]],	/* 0x48 H: */
		[[0x0000],[0x0000]],	/* 0x49 I: */
		[[0x0000],[0x0000]],	/* 0x4A J: */
		[[0x0000],[0x0000]],	/* 0x4B K: */
		[[0x0000],[0x0000]],	/* 0x4C L: */
		[[0x0000],[0x0000]],	/* 0x4D M: */
		[[0x0000],[0x0000]],	/* 0x4E N: */
		[[0x0000],[0x0000]],	/* 0x4F O: */
		[[0x0000],[0x0000]],	/* 0x50 P: */
		[[0x0000],[0x0000]],	/* 0x51 Q: */
		[[0x0000],[0x0000]],	/* 0x52 R: */
		[[0x0000],[0x0000]],	/* 0x53 S: */
		[[0x0000],[0x0000]],	/* 0x54 T: */
		[[0x0000],[0x0000]],	/* 0x55 U: */
		[[0x0000],[0x0000]],	/* 0x56 V: */
		[[0x0000],[0x0000]],	/* 0x57 W: */
		[[0x0000],[0x0000]],	/* 0x58 X: */
		[[0x0000],[0x0000]],	/* 0x59 Y: */
		[[0x0000],[0x0000]],	/* 0x5A Z: */
		[[0x005B],[0x007B]],	/* 0x5B bracketleft: bracketleft, braceleft */
		[[0x005C],[0x007C]],	/* 0x5C backslash: backslash, braceright */
		[[0x005D],[0x007D]],	/* 0x5D bracketright: bracketright, braceright */
		[[0x0000],[0x0000]],	/* 0x5E asciicircum: */
		[[0x0000],[0x0000]],	/* 0x5F underscore: */
		[[0x11B3],[0x11AA]],	/* 0x60 quoteleft: jongseong lieul-sieus, jongseong gieug-sieus */
		[[0x0061],[0x0041]],	/* 0x61 a: */
		[[0x0062],[0x0042]],	/* 0x62 b: */
		[[0x0063],[0x0043]],	/* 0x63 c: */
		[[0x0064],[0x0044]],	/* 0x64 d: */
		[[0x0065],[0x0045]],	/* 0x65 e: */
		[[0x0066],[0x0046]],	/* 0x66 f: */
		[[0x0067],[0x0047]],	/* 0x67 g: */
		[[0x0068],[0x0048]],	/* 0x68 h: */
		[[0x0069],[0x0049]],	/* 0x69 i: */
		[[0x006A],[0x004A]],	/* 0x6A j: */
		[[0x006B],[0x004B]],	/* 0x6B k: */
		[[0x006C],[0x004C]],	/* 0x6C l: */
		[[0x006D],[0x004D]],	/* 0x6D m: */
		[[0x006E],[0x004E]],	/* 0x6E n: */
		[[0x006F],[0x004F]],	/* 0x6F o: */
		[[0x0070],[0x0050]],	/* 0x70 p: */
		[[0x0071],[0x0051]],	/* 0x71 q: */
		[[0x0072],[0x0052]],	/* 0x72 r: */
		[[0x0073],[0x0053]],	/* 0x73 s: */
		[[0x0074],[0x0054]],	/* 0x74 t: */
		[[0x0075],[0x0055]],	/* 0x75 u: */
		[[0x0076],[0x0056]],	/* 0x76 v: */
		[[0x0077],[0x0057]],	/* 0x77 w: */
		[[0x0078],[0x0058]],	/* 0x78 x: */
		[[0x0079],[0x0059]],	/* 0x79 y: */
		[[0x007A],[0x005A]],	/* 0x7A z: */
		[[0x0000],[0x0000]],	/* 0x7B braceleft: */
		[[0x0000],[0x0000]],	/* 0x7C bar: */
		[[0x0000],[0x0000]],	/* 0x7D braceright: */
		[[0x0000],[0x0000]]	/* 0x7E asciitilde:  */
	];

	// 3-89 자판
	K3_89_layout = [
		0x11C2,	/* 0x21 exclam: jongseong hieuh */
		0x0023,	/* 0x22 quotedbl: number sign */
		0x11BF,	/* 0x23 numbersign: jongseong kieuk */
		0x11B5,	/* 0x24 dollar: jongseong lieul-pieup */
		0x11B4,	/* 0x25 percent: jongseong lieul-tieut */
		0x0037,	/* 0x26 ampersand: 7 */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0039,	/* 0x28 parenleft: 9 */
		0x0025,	/* 0x29 parenright: percent */
		0x0038,	/* 0x2A asterisk: 8 */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x002A,	/* 0x2D minus: aterisk */
		0x002E,	/* 0x2E period */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0029,	/* 0x30 0: parenright */
		0x11B8,	/* 0x31 1: jongseong bieub */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x116D,	/* 0x33 3: jungseong yo */
		0x1168,	/* 0x34 4: jungseong ye */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x0028,	/* 0x37 7: parenleft */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x002C,	/* 0x3C less: comma */
		0x003D,	/* 0x3D equal */
		0x002E,	/* 0x3E greater: period */
		0x0021,	/* 0x3F question: exclam */
		0x11BD,	/* 0x40 at: jongseong jieuj */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x003F,	/* 0x42 B: question mark */
		0x11B1,	/* 0x43 C: jongseong lieul-mieum */
		0x11B0, /* 0x44 D: jongseong lieul-gieug */
		0x11AC,	/* 0x45 E: jongseong nieun-jieuj */
		0x11A9,	/* 0x46 F: jongseong ssanggieug */
		0x11AA,	/* 0x47 G: jongseong gieug-sieus */
		0x0022,	/* 0x48 H: quotatioin mark */
		0x0035,	/* 0x49 I: 5 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0030,	/* 0x4D M: 0 */
		0x002D,	/* 0x4E N: minus sign */
		0x0036,	/* 0x4F O: 6 */
		0x007E,	/* 0x50 P: tilde */
		0x11C1,	/* 0x51 Q: jongseong pieup */
		0x11B6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x11B3,	/* 0x54 T: jongseong lieul-sieus */
		0x0034,	/* 0x55 U: 4 */
		0x11B2,	/* 0x56 V: jongseong lieul-bieub */
		0x11C0,	/* 0x57 W: jongseong tieut */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x0027,	/* 0x59 Y: apostrophe */
		0x11BE,	/* 0x5A Z: jongseong chieuch */
		0x110F,	/* 0x5B bracketleft: choseong kieuk */
		0x005C,	/* 0x5C backslash */
		0x003B,	/* 0x5D bracketright: semicolon */
		0x1164,	/* 0x5E asciicircum: jungseong yae */
		0x002F,	/* 0x5F underscore: slash */
		0x005B,	/* 0x60 quoteleft: bracketleft */
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
		0x0040,	/* 0x7C bar: commertial at */
		0x007D,	/* 0x7D braceright */
		0x005D	/* 0x7E asciitilde: bracketright */
	];

	// 3-95 자판안 (김창용)
	K3_95_proposal_layout = [
		0x11A9, /* 0x21 exclam: jongseong ssanggieug */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x11BD, /* 0x23 numbersign: jognseong jieuj */
		0x11B5, /* 0x24 dollar: jongseong lieul-pieup */
		0x11B4, /* 0x25 percent: jongseong lieul-tieut */
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
		0x003A, /* 0x3A colon: colon */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x0032, /* 0x3C less: 2 */
		0x003D, /* 0x3D equal: euals sign */
		0x0033, /* 0x3E greater: 3 */
		0x003F, /* 0x3F question: question mark */
		0x11B0, /* 0x40 at: jongseong lieul-gieug */
		0x11AE, /* 0x41 A: jongseong dieud */
		0x0021, /* 0x42 B: exclamation mark */
		0x11BF, /* 0x43 C: jongseong kieuk */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11AC, /* 0x45 E: jongseong nieun-jieuj */
		0x11B1, /* 0x46 F: jongseong lieul-mieum */
		0x1164, /* 0x47 G: jungseong yae */
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
		0x11B6, /* 0x52 R: jongseong lieul-hieuh */
		0x11AD, /* 0x53 S: jongseong nieun-hieuh */
		0x11B3, /* 0x54 T: jongseong lieul-sieus */
		0x0037, /* 0x55 U: 7 */
		0x11AA, /* 0x56 V: jongseong gieug-sieus */
		0x11C0, /* 0x57 W: jongseong tieut */
		0x11B9, /* 0x58 X: jongseong bieub-sieus */
		0x003C, /* 0x59 Y: less-than sign */
		0x11BE, /* 0x5A Z: jongseong chieuch */
		0x005B, /* 0x5B bracketleft: left bracket */
		0x003B, /* 0x5C backslash: semicolon */
		0x005D, /* 0x5D bracketright: right bracket */
		0x005E, /* 0x5E asciicircum: circumflex accent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
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
		0x00B7, /* 0x7C bar: middle dot */
		0x007D, /* 0x7D braceright: right brace */
		0x007E, /* 0x7E asciitilde: tilde */
	];

	K3_95_extended_layout = [ // 3-95 김창용 자판안 확장 배열
		[[0x0000],[0x0000]], /* 0x21 exclam: */
		[[0x0000],[0x0000]], /* 0x22 quotedbl: */
		[[0x0000],[0x0000]], /* 0x23 numbersign */
		[[0x0000],[0x0000]], /* 0x24 dollar */
		[[0x0000],[0x0000]], /* 0x25 percent: */
		[[0x0000],[0x0000]], /* 0x26 ampersand: */
		[[0x0000],[0x0000]], /* 0x27 apostrophe: */
		[[0x0000],[0x0000]], /* 0x28 parenleft: */
		[[0x0000],[0x0000]], /* 0x29 parenright: */
		[[0x0000],[0x0000]], /* 0x2A asterisk */
		[[0x0000],[0x0000]], /* 0x2B plus: */
		[[0x2026],[0x0000]], /* 0x2C comma: horizontal epllipsis … */
		[[0x00F7],[0x0000]], /* 0x2D minus: division sign ÷ */
		[[0x00B7],[0x0000]], /* 0x2E period: middle dot · */
		[[0x0000],[0x0000]], /* 0x2F slash: */
		[[0x300B],[0x0000]], /* 0x30 0: right double angle bracket 》 */
		[[0xF8FF],[0x0000]], /* 0x31 1: apple logo (PUA) */
		[[0x0040],[0x0000]], /* 0x32 2: commercial at */
		[[0x0023],[0x0000]], /* 0x33 3: number sign # */
		[[0x0024],[0x0000]], /* 0x34 4: dollar sign $ */
		[[0x0025],[0x0000]], /* 0x35 5: percent sign % */
		[[0x005E],[0x0000]], /* 0x36 6: circumflex accent ^ */
		[[0x26AB],[0x0000]], /* 0x37 7: medium black circle ⚫ */
		[[0x203B],[0x0000]], /* 0x38 8: reference mark ※ */
		[[0x300A],[0x0000]], /* 0x39 9: left double angle bracket 《 */
		[[0x0000],[0x0000]], /* 0x3A colon: */
		[[0x1108],[0x0000]], /* 0x3B semicolon: choseong ssangbieup */
		[[0x0000],[0x0000]], /* 0x3C less: */
		[[0x2260],[0x0000]], /* 0x3D equal: not equal to */
		[[0x0000],[0x0000]], /* 0x3E greater: */
		[[0x0000],[0x0000]], /* 0x3F question: */
		[[0x0000],[0x0000]], /* 0x40 at */
		[[0x0000],[0x0000]], /* 0x41 A: */
		[[0x0000],[0x0000]], /* 0x42 B: */
		[[0x0000],[0x0000]], /* 0x43 C: */
		[[0x0000],[0x0000]], /* 0x44 D: */
		[[0x0000],[0x0000]], /* 0x45 E: */
		[[0x0000],[0x0000]], /* 0x46 F: */
		[[0x0000],[0x0000]], /* 0x47 G: */
		[[0x0000],[0x0000]], /* 0x48 H: */
		[[0x0000],[0x0000]], /* 0x49 I: */
		[[0x0000],[0x0000]], /* 0x4A J: */
		[[0x0000],[0x0000]], /* 0x4B K: */
		[[0x0000],[0x0000]], /* 0x4C L: */
		[[0x0000],[0x0000]], /* 0x4D M: */
		[[0x0000],[0x0000]], /* 0x4E N: */
		[[0x0000],[0x0000]], /* 0x4F O: */
		[[0x0000],[0x0000]], /* 0x50 P: */
		[[0x0000],[0x0000]], /* 0x51 Q: */
		[[0x0000],[0x0000]], /* 0x52 R: */
		[[0x0000],[0x0000]], /* 0x53 S: */
		[[0x0000],[0x0000]], /* 0x54 T: */
		[[0x0000],[0x0000]], /* 0x55 U: */
		[[0x0000],[0x0000]], /* 0x56 V: */
		[[0x0000],[0x0000]], /* 0x57 W: */
		[[0x0000],[0x0000]], /* 0x58 X: */
		[[0x0000],[0x0000]], /* 0x59 Y: */
		[[0x0000],[0x0000]], /* 0x5A Z: */
		[[0x201C],[0x0000]], /* 0x5B bracketleft: left double quotation mark “ */
		[[0x003A],[0x0000]], /* 0x5C backslash: colon */
		[[0x201D],[0x0000]], /* 0x5D bracketright: right double quotation mark ” */
		[[0x0000],[0x0000]], /* 0x5E asciicircum: */
		[[0x0000],[0x0000]], /* 0x5F underscore: */
		[[0x007E],[0x0000]], /* 0x60 quoteleft: tilde */
		[[0x11BC],[0x0000]], /* 0x61 a: jongseong ieung */
		[[0x116E],[0x0000]], /* 0x62 b: jungseong u */
		[[0x1166],[0x0000]], /* 0x63 c: jungseong e */
		[[0x1175],[0x0000]], /* 0x64 d: jungseong i */
		[[0x1167],[0x0000]], /* 0x65 e: jungseong yeo */
		[[0x1161],[0x0000]], /* 0x66 f: jungseong a */
		[[0x1173],[0x0000]], /* 0x67 g: jungseong eu */
		[[0x1102],[0x0000]], /* 0x68 h: choseong nieun */
		[[0x1106],[0x0000]], /* 0x69 i: choseong mieum */
		[[0x110B],[0x0000]], /* 0x6A j: choseong ieung */
		[[0x1101],[0x0000]], /* 0x6B k: choseong ssanggieug */
		[[0x110D],[0x0000]], /* 0x6C l: choseong ssangjieuj */
		[[0x1112],[0x0000]], /* 0x6D m: choseong hieuh */
		[[0x110A],[0x0000]], /* 0x6E n: choseong ssangsieus */
		[[0x2018],[0x0000]], /* 0x6F o: left single quotation mark ‘ */
		[[0x2019],[0x0000]], /* 0x70 p: right single quotation mark ’ */
		[[0x11BA],[0x0000]], /* 0x71 q: jongseong sieus */
		[[0x1162],[0x0000]], /* 0x72 r: jungseong ae */
		[[0x11AB],[0x0000]], /* 0x73 s: jongseong nieun */
		[[0x1165],[0x0000]], /* 0x74 t: jungseong eo */
		[[0x1104],[0x0000]], /* 0x75 u: choseong ssangdieud */
		[[0x1169],[0x0000]], /* 0x76 v: jungseong o */
		[[0x11AF],[0x0000]], /* 0x77 w: jongseong lieul */
		[[0x11A8],[0x0000]], /* 0x78 x: jongseong gieug */
		[[0x1105],[0x0000]], /* 0x79 y: choseong lieul */
		[[0x11B7],[0x0000]], /* 0x7A z: jongseong mieum */
		[[0x0000],[0x0000]], /* 0x7B braceleft: */
		[[0x0000],[0x0000]], /* 0x7C bar: */
		[[0x0000],[0x0000]], /* 0x7D braceright: */
		[[0x0000],[0x0000]]  /* 0x7E asciitilde: */
	];

	// 순아래 자판
	K3_sun1990_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
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
		0x11BD, /* 0x2D minus: jongseong jieuj */
		0x002E, /* 0x2E period: period */
		0x11AE, /* 0x2F slash: jongseong dieud */
		0x1164, /* 0x30 0: choseong yae */
		0x11C2, /* 0x31 1: jongseong hieuh */
		0x11BB, /* 0x32 2: jongseong ssangsieus */
		0x11B8, /* 0x33 3: jongseong bieub */
		0x116D, /* 0x34 4: jungseong yo */
		0x1172, /* 0x35 5: jungseong yu */
		0x1163, /* 0x36 6: jungseong ya */
		0x1168, /* 0x37 7: jungseong ye */
		0x1174, /* 0x38 8: jungseong yi */
		0x110F, /* 0x39 9: choseong kieuk */
		0x003A, /* 0x3A colon: colon */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x0032, /* 0x3C less: 2 */
		0x11BE, /* 0x3D equal: jongseong chieuch */
		0x0033, /* 0x3E greater: 3 */
		0x003F, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x11BC, /* 0x41 A: jongseong ieung */
		0x0021, /* 0x42 B: exclamation mark */
		0x005C, /* 0x43 C: backslash */
		0x005D, /* 0x44 D: right bracket */
		0x1167, /* 0x45 E: jungseong yeo */
		0x1161, /* 0x46 F: jungseong a */
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
		0x11BA, /* 0x51 Q: jongseong sieus */
		0x1162, /* 0x52 R: jungseong ae */
		0x005B, /* 0x53 S: left bracket */
		0x003B, /* 0x54 T: semicolon */
		0x0037, /* 0x55 U: 7 */
		0x1169, /* 0x56 V: jungseong o */
		0x11AF, /* 0x57 W: jongseong lieul */
		0x003D, /* 0x58 X: equals sign */
		0x003C, /* 0x59 Y: less-than sign */
		0x002D, /* 0x5A Z: minus sign */
		0x11C0, /* 0x5B bracketleft: jongseong tieut */
		0x11BF, /* 0x5C backslash: jongseong kieuk */
		0x11C1, /* 0x5D bracketright: jongseong pieup */
		0x005E, /* 0x5E asciicircum: circumflex accent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
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
		0x007E, /* 0x7E asciitilde: tilde */
	];

	K3_GimGug_38A_layout = [
		0x0021,	/* 0x21 exclam: */
		0x0022,	/* 0x22 quotedbl: */
		0x0023,	/* 0x23 numbersign: */
		0x0024,	/* 0x24 dollar: */
		0x0025,	/* 0x25 percent: */
		0x0026,	/* 0x26 ampersand: */
		0x0027,	/* 0x27 apostrophe: */
		0x0028,	/* 0x28 parenleft: */
		0x0029,	/* 0x29 parenright: */
		0x002A,	/* 0x2A asterisk: */
		0x002B,	/* 0x2B plus: */
		0x002C,	/* 0x2C comma: */
		0x002D,	/* 0x2D minus: */
		0x002E,	/* 0x2E period: */
		0x1110,	/* 0x2F slash: */
		0x110F,	/* 0x30 0: */
		0x11BF,	/* 0x31 1: */
		0x11BE,	/* 0x32 2: */
		0x11C1,	/* 0x33 3: */
		0x116D,	/* 0x34 4: */
		0x1172,	/* 0x35 5: */
		0x1163,	/* 0x36 6: */
		0x11C0,	/* 0x37 7: */
		0x11BD,	/* 0x38 8: */
		0x11AE,	/* 0x39 9: */
		0x003A,	/* 0x3A colon: */
		0x1107,	/* 0x3B semicolon: */
		0x003C,	/* 0x3C less: */
		0x003D,	/* 0x3D equal: */
		0x003E,	/* 0x3E greater: */
		0x003F,	/* 0x3F question: */
		0x0040,	/* 0x40 at: */
		0x0000, //0x11F0,	/* 0x41 A: */
		0x0000, //0x113E,	/* 0x42 B: */
		0x0000, //0x11EB,	/* 0x43 C: */
		0x00D7,	/* 0x44 D: */
		0x0033,	/* 0x45 E: */
		0x119E,	/* 0x46 F: */
		0x203B,	/* 0x47 G: */
		0x300C,	/* 0x48 H: */
		0x0038,	/* 0x49 I: */
		0x0000, //0x114C,	/* 0x4A J: */
		0x300D,	/* 0x4B K: */
		0xFFE6,	/* 0x4C L: */
		0x0000, //0x1159,	/* 0x4D M: */
		0x0000, //0x1140,	/* 0x4E N: */
		0x0039,	/* 0x4F O: */
		0x0030,	/* 0x50 P: */
		0x0031,	/* 0x51 Q: */
		0x0034,	/* 0x52 R: */
		0x0000, //0x11F9,	/* 0x53 S: */
		0x0035,	/* 0x54 T: */
		0x0037,	/* 0x55 U: */
		0x00AF, //0x113C,	/* 0x56 V: */
		0x0032,	/* 0x57 W: */
		0x003B,	/* 0x58 X: */
		0x0036,	/* 0x59 Y: */
		0x002F,	/* 0x5A Z: */
		0x005B,	/* 0x5B bracketleft: */
		0x005C,	/* 0x5C backslash: */
		0x005D,	/* 0x5D bracketright: */
		0x005E,	/* 0x5E asciicircum: */
		0x005F,	/* 0x5F underscore: */
		0x0060,	/* 0x60 quoteleft: */
		0x11BC,	/* 0x61 a: */
		0x116E,	/* 0x62 b: */
		0x11A8,	/* 0x63 c: */
		0x1175,	/* 0x64 d: */
		0x11AF,	/* 0x65 e: */
		0x1161,	/* 0x66 f: */
		0x1173,	/* 0x67 g: */
		0x1102,	/* 0x68 h: */
		0x1106,	/* 0x69 i: */
		0x110B,	/* 0x6A j: */
		0x1100,	/* 0x6B k: */
		0x110C,	/* 0x6C l: */
		0x1112,	/* 0x6D m: */
		0x1109,	/* 0x6E n: */
		0x110E,	/* 0x6F o: */
		0x1111,	/* 0x70 p: */
		0x11B8,	/* 0x71 q: */
		0x1167,	/* 0x72 r: */
		0x11AB,	/* 0x73 s: */
		0x1165,	/* 0x74 t: */
		0x1103,	/* 0x75 u: */
		0x1169,	/* 0x76 v: */
		0x11BA,	/* 0x77 w: */
		0x11B7,	/* 0x78 x: */
		0x1105,	/* 0x79 y: */
		0x11C2,	/* 0x7A z: */
		0x007B,	/* 0x7B braceleft: */
		0x007C,	/* 0x7C bar: */
		0x007D,	/* 0x7D braceright: */
		0x007E	/* 0x7E asciitilde: */
	];

	// 3-2011 자판
	K3_2011_layout = [
		0x11A9,	/* 0x21 exclam: jongseong ssanggieug */
		0x0025,	/* 0x22 quotedbl: percent sign */
		0x11AC,	/* 0x23 numbersign: jongseong nieun-jieuj */
		0x0024,	/* 0x24 dollar */
		0x0023,	/* 0x25 percent: number sign */
		0x0026,	/* 0x26 ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft */
		0x0029,	/* 0x29 parenright */
		0x007E,	/* 0x2A asterisk: tilde */
		0x002B,	/* 0x2B plus */
		0x002C,	/* 0x2C comma */
		0x005B,	/* 0x2D minus: left bracket */
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
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x005D,	/* 0x3D equal: right bracket */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x11B0,	/* 0x40 at: jongseong lieul-gieug */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x0040,	/* 0x42 B: commertial at */
		0x11BF,	/* 0x43 C: jongseong kieuk */
		0x11B2,	/* 0x44 D: jongseong lieul-bieub */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11B1,	/* 0x46 F: jongseong lieul-mieum */
		0x0021,	/* 0x47 G: exclamation mark */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11C1,	/* 0x51 Q: jongseong pieup */
		0x11B6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11AA,	/* 0x56 V: jongseong gieug-sieus */
		0x11C0,	/* 0x57 W: jongseong tieut */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x0035,	/* 0x59 Y: 5 */
		0x11BE,	/* 0x5A Z: jongseong chieuch */
		0x00B7,	/* 0x5B bracketleft: middle dot */
		0x003D,	/* 0x5C backslash: equals sign */
		0x003A,	/* 0x5D bracketright: colon */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x002A,	/* 0x5F underscore: asterisk */
		0x003B,	/* 0x60 quoteleft: semicolon */
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
		0x1100,	/* 0x6B k: choseong giueg */
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
		0x002D,	/* 0x7B braceleft: minus sign */
		0x005C,	/* 0x7C bar: backslash */
		0x002F,	/* 0x7D braceright: slash */
		0x005F	/* 0x7E asciitilde: underscore */
	];
	
	// 3-2012 자판
	K3_2012_layout = [
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
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at:commertial at */
		0x11AE,	/* 0x41 A: jongseong dieud */
		0x003B,	/* 0x42 B: semicolon */
		0x11BF,	/* 0x43 C: jongseong kieuk */
		0x11B0,	/* 0x44 D: jongseong lieul-gieug */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11B1,	/* 0x46 F: jongseong lieul-mieum */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11C1,	/* 0x51 Q: jongseong pieup */
		0x11B6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11A9,	/* 0x56 V: jongseong ssanggieug */
		0x11C0,	/* 0x57 W: jongseong tieut */
		0x11B9,	/* 0x58 X: jongseong bieub-sieus */
		0x0035,	/* 0x59 Y: 5 */
		0x11BE,	/* 0x5A Z: jongseong chieuch */
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

	K3_14_proposal_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
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
		0x1174, /* 0x38 8: jungseong eui */
		0x116E, /* 0x39 9: jungseong u */
		0x003A, /* 0x3A colon: colon */
		0x1107, /* 0x3B semicolon: choseong bieub */
		0x0032, /* 0x3C less: 2 */
		0x003D, /* 0x3D equal: euals sign */
		0x0033, /* 0x3E greater: 3 */
		0x003F, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x11AE, /* 0x41 A: jongseong dieud */
		0x002F, /* 0x42 B: slash */
		0x11B5, /* 0x43 C: jongseong lieul-pieup */
		0x1164, /* 0x44 D: jungseong yae */
		0x11BD, /* 0x45 E: jongseong jieuj */
		0x11B4, /* 0x46 F: jongseong lieul-tiuet */
		0x11B0, /* 0x47 G: jongseong lieul-gieug */
		0x0027, /* 0x48 H: apostrophe */
		0x0038, /* 0x49 I: 8 */
		0x0034, /* 0x4A J: 4 */
		0x0035, /* 0x4B K: 5 */
		0x0036, /* 0x4C L: 6 */
		0x0031, /* 0x4D M: 1 */
		0x0030, /* 0x4E N: 0 */
		0x0039, /* 0x4F O: 9 */
		0x003B, /* 0x50 P: semicolon */
		0x11C1, /* 0x51 Q: jongseong pieup */
		0x11AC, /* 0x52 R: jongseong nieun-jieuj */
		0x11AD, /* 0x53 S: jongseong nieun-hieuh */
		0x003C, /* 0x54 T: less-than sign */
		0x0037, /* 0x55 U: 7 */
		0x11BF, /* 0x56 V: jongseong kieuk */
		0x11C0, /* 0x57 W: jongseong tieut */
		0x11B9, /* 0x58 X: jongseong bieub-sieus */
		0x003E, /* 0x59 Y: greater-than sign */
		0x11BE, /* 0x5A Z: jongseong chieuch */
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
		0x007E, /* 0x7E asciitilde: tilde */
		0x0000  /* 0x7F delete */
	];

	K3_2014_layout = [
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
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B9,	/* 0x41 A: jongseong bieub-sieus */
		0x003B,	/* 0x42 B: semicolon */
		0x11BF,	/* 0x43 C: jongseong kieuk */
		0x11AE, /* 0x44 D: jongseong dieud */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11C0,	/* 0x46 F: jongseong tieut */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11B6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11C1,	/* 0x56 V: jongseong pieup */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0035,	/* 0x59 Y: 5 */
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

	K3_2014_sublayout = [
		0x0000,	/* 0x21 exclam: */
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
		0x11AC,	/* 0x45 E: jongseong nieun-jieuj */
		0x11B4,	/* 0x46 F: jongseong lieul-tieut */
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
		0x11B5,	/* 0x56 V: jongseong lieul-pieup */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0000,	/* 0x59 Y */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11B9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b */
		0x11AA,	/* 0x63 c: jongseong gieug-sieus */
		0x11B2,	/* 0x64 d: jongseong lieul-bieub */
		0x11AC,	/* 0x65 e: jongseong nieun-jieuj */
		0x11B4,	/* 0x66 f: jongseong lieul-tieut */
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
		0x11B6,	/* 0x71 q: jongseong lieul-hieuh */
		0x11B3,	/* 0x72 r: jongseong lieul-sieus */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x11B5,	/* 0x76 v: jongseong lieul-pieup */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11A9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y */
		0x11B1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_2015_layout = [
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
		0x1169,	/* 0x2F slash: jungseong o */
		0x110F,	/* 0x30 0: choseong kieuk */
		0x11AE,	/* 0x31 1: jongseong dieud */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x11B8,	/* 0x33 3: jongseong bieub */
		0x116D,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B4,	/* 0x41 A: jongseong lieul-tieut */
		0x003B,	/* 0x42 B: semicolon */
		0x11C0,	/* 0x43 C: jongseong tieut */
		0x11C2, /* 0x44 D: jongseong hieuh */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11A9,	/* 0x51 Q: jongseong ssanggieug */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11BF,	/* 0x56 V: jongseong kieuk */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11B9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0035,	/* 0x59 Y: 5 */
		0x11B3,	/* 0x5A Z: jongseong lieul-sieus */
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

	K3_2015_sublayout = [
		0x0000,	/* 0x21 exclam: */
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
		0x11B4,	/* 0x41 A: jongseong lieul-tieut */
		0x0000,	/* 0x42 B */
		0x11B5,	/* 0x43 C: jongseong lieul-pieup */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11AC,	/* 0x45 E: jongseong nieun-jieuj */
		0x11B1,	/* 0x46 F: jongseong lieul-mieum */
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
		0x11A9,	/* 0x51 Q: jongseong ssanggieug */
		0x11B6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11AA,	/* 0x56 V: jongseong gieug-sieus */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11B9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0000,	/* 0x59 Y */
		0x11B3,	/* 0x5A Z: jongseong lieul-sieus */
		0x0000,	/* 0x5B bracketleft */
		0x0000,	/* 0x5C backslash */
		0x0000,	/* 0x5D bracketright */
		0x0000,	/* 0x5E asciicircum */
		0x0000,	/* 0x5F underscore */
		0x0000,	/* 0x60 quoteleft */
		0x0000,	/* 0x61 a */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x0000,	/* 0x65 e */
		0x0000,	/* 0x66 f */
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
		0x0000,	/* 0x71 q */
		0x0000,	/* 0x72 r */
		0x0000,	/* 0x73 s */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x0000,	/* 0x77 w */
		0x0000,	/* 0x78 x */
		0x0000,	/* 0x79 y */
		0x0000,	/* 0x7A z */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_2015y_layout = [
		0x11F9,	/* 0x21 exclam: jongseong yeolin-hieuh */
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
		0x0040,	/* 0x40 at */
		0x11f0,	/* 0x41 A: jongseong yes-ieung */
		0x0021,	/* 0x42 B: exclam */
		0x11C0,	/* 0x43 C: jongseong tieut */
		0x11AE, /* 0x44 D: jongseong dieud */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0X119E,	/* 0x47 G: jungseong araea */
		0x00B7,	/* 0x48 H: middle dot */
		0x1154,	/* 0x49 I: choseong ap-chieuch */
		0x114C,	/* 0x4A J: choseong yes-ieung */
		0x114E,	/* 0x4B K: choseong ap-jieuj */
		0x1150,	/* 0x4C L: choseong dwits-jieuj */
		0x1159,	/* 0x4D M: choseong yeolin-hieuh */
		0x1140,	/* 0x4E N: choseong yeolin-sieus */
		0x1155,	/* 0x4F O: choseong dwits-chieuch */
		0x003B,	/* 0x50 P: semicolon */
		0x11EB,	/* 0x51 Q: jongseong yeolin-sieus */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x0000,	/* 0x53 S: */
		0x1164,	/* 0x54 T: jungseong yae */
		0x302E,	/* 0x55 U: hangeul single dot tone mark */
		0x11BF,	/* 0x56 V: jongseong kieuk */
		0x0000,	/* 0x57 W: */
		0x0000,	/* 0x58 X: */
		0X302F,	/* 0x59 Y: hangeul double dot tone mark */
		0x0000,	/* 0x5A Z: */
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
		0x0027,	/* 0x7B braceleft: apostrophe */
		0x007C,	/* 0x7C bar */
		0x0022,	/* 0x7D braceright: quotatioin mark */
		0x007E	/* 0x7E asciitilde */
	];

	K3_2015M_layout = [
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
		0x1169,	/* 0x2F slash: jungseong o */
		0x110F,	/* 0x30 0: choseong kieuk */
		0x11AE,	/* 0x31 1: jongseong dieud */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x11B8,	/* 0x33 3: jongseong bieub */
		0x116D,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B4,	/* 0x41 A: jongseong lieul-tieut */
		0x003B,	/* 0x42 B: semicolon */
		0x11C0,	/* 0x43 C: jongseong tieut */
		0x11C2, /* 0x44 D: jongseong hieuh */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11A9,	/* 0x51 Q: jongseong ssanggieug */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11BF,	/* 0x56 V: jongseong kieuk */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11B9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0035,	/* 0x59 Y: 5 */
		0x11B3,	/* 0x5A Z: jongseong lieul-sieus */
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
		0x007E	/* 0x7E asciitilde */
	];

	K3_2015M_sublayout = [
		0x0000,	/* 0x21 exclam: */
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
		0x11B4,	/* 0x41 A: jongseong lieul-tieut */
		0x0000,	/* 0x42 B */
		0x11B5,	/* 0x43 C: jongseong lieul-pieup */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11AC,	/* 0x45 E: jongseong nieun-jieuj */
		0x11B1,	/* 0x46 F: jongseong lieul-mieum */
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
		0x11A9,	/* 0x51 Q: jongseong ssanggieug */
		0x11B6,	/* 0x52 R: jongseong lieul-hieuh */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0000,	/* 0x55 U */
		0x11AA,	/* 0x56 V: jongseong gieug-sieus */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11B9,	/* 0x58 X: jongseong bieub-sieuh */
		0x0000,	/* 0x59 Y */
		0x11B3	/* 0x5A Z: jongseong lieul-sieus */
	];

	K3_2015P_layout = [
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
		0x1169,	/* 0x2F slash: jungseong o */
		0x110F,	/* 0x30 0: choseong kieuk */
		0x11AE,	/* 0x31 1: jongseong dieud */
		0x11BB,	/* 0x32 2: jongseong ssangsieus */
		0x11B8,	/* 0x33 3: jongseong bieub */
		0x116D,	/* 0x34 4: jungseong yo */
		0x1172,	/* 0x35 5: jungseong yu */
		0x1163,	/* 0x36 6: jungseong ya */
		0x1168,	/* 0x37 7: jungseong ye */
		0x1174,	/* 0x38 8: jungseong eui */
		0x116E,	/* 0x39 9: jungseong u */
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B9,	/* 0x41 A: jongseong bieub-sieuh */
		0x003B,	/* 0x42 B: semicolon */
		0x11C0,	/* 0x43 C: jongseong tieut */
		0x11C2, /* 0x44 D: jongseong hieuh */
		0x11BD,	/* 0x45 E: jongseong jieuj */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11B6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11BF,	/* 0x56 V: jongseong kieuk */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0035,	/* 0x59 Y: 5 */
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
		0x11B9,	/* 0x41 A: jongseong bieub-sieuh */
		0x0000,	/* 0x42 B */
		0x11B4,	/* 0x43 C: jongseong lieul-tieut */
		0x11B2, /* 0x44 D: jongseong lieul-bieub */
		0x11AC,	/* 0x45 E: jongseong nieun-jieuj */
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
		0x11AA,	/* 0x56 V: jongseong gieug-sieus */
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
		0x11B9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b */
		0x11B4,	/* 0x63 c: jongseong lieul-tieut */
		0x11B2,	/* 0x64 d: jongseong lieul-bieub */
		0x11AC,	/* 0x65 e: jongseong nieun-jieuj */
		0x11B5,	/* 0x66 f: jongseong lieul-pieup */
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
		0x11B6,	/* 0x71 q: jongseong lieul-hieuh */
		0x11B3,	/* 0x72 r: jongseong lieul-sieus */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x11AA,	/* 0x76 v: jongseong gieug-sieus */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11A9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y */
		0x11B1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_P2_layout = [
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
		0x0034,	/* 0x3A colon: 4 */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at */
		0x11B9,	/* 0x41 A: jongseong bieub-sieuh */
		0x003B,	/* 0x42 B: semicolon */
		0x11AE,	/* 0x43 C: jongseong dieud */
		0x11C2, /* 0x44 D: jongseong hieuh */
		0x11C0,	/* 0x45 E: jongseong tieut */
		0x11C1,	/* 0x46 F: jongseong pieup */
		0x003A,	/* 0x47 G: colon */
		0x0030,	/* 0x48 H: 0 */
		0x0037,	/* 0x49 I: 7 */
		0x0031,	/* 0x4A J: 1 */
		0x0032,	/* 0x4B K: 2 */
		0x0033,	/* 0x4C L: 3 */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x0038,	/* 0x4F O: 8 */
		0x0039,	/* 0x50 P: 9 */
		0x11B6,	/* 0x51 Q: jongseong lieul-hieuh */
		0x11BE,	/* 0x52 R: jongseong chieuch */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x1164,	/* 0x54 T: jungseong yae */
		0x0036,	/* 0x55 U: 6 */
		0x11BD,	/* 0x56 V: jongseong jieuj */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0035,	/* 0x59 Y: 5 */
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

	K3_P2_sublayout = [
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

	K3_18Na_layout = [
		0x0021, /* 0x21 exclam:       exclamation mark */
		0x0022, /* 0x22 quotedbl:     quotation mark */
		0x0023, /* 0x23 numbersign:   number sign */
		0x0024, /* 0x24 dollar:       dollar sign */
		0x0025, /* 0x25 percent:      percent sign */
		0x0026, /* 0x26 ampersand:    ampersand */
		0x0027, /* 0x27 apostrophe:   apostrophe */
		0x0028, /* 0x28 parenleft:    left parenthesis */
		0x0029, /* 0x29 parenright:   right parenthesis */
		0x002A, /* 0x2A asterisk:     asterisk */
		0x002B, /* 0x2B plus:         plus sign */
		0x002C, /* 0x2C comma:        comma */
		0x002D, /* 0x2D minus:        minus sign */
		0x002E, /* 0x2E period:       period */
		0x002F, /* 0x2F slash:        slash */
		0x0030, /* 0x30 0:            0 */
		0x0031, /* 0x31 1:            1 */
		0x0032, /* 0x32 2:            2 */
		0x0033, /* 0x33 3:            3 */
		0x0034, /* 0x34 4:            4 */
		0x0035, /* 0x35 5:            5 */
		0x0036, /* 0x36 6:            6 */
		0x0037, /* 0x37 7:            7 */
		0x0038, /* 0x38 8:            8 */
		0x0039, /* 0x39 9:            9 */
		0x003A, /* 0x3A colon:        colon */
		0x11BD, /* 0x3B semicolon:    jongseong jieuj */
		0x003C, /* 0x3C less:         less-than sign */
		0x003D, /* 0x3D equal:        equals sign */
		0x003E, /* 0x3E greater:      greater-than sign */
		0x003F, /* 0x3F question:     question mark */
		0x0040, /* 0x40 at:           commercial at */
		0x1106, /* 0x41 A:            choseong mieum */
		0x11B8, /* 0x42 B:            jongseong bieub */
		0x110E, /* 0x43 C:            choseong chieuch */
		0x110B, /* 0x44 D:            choseong ieung */
		0x1104, /* 0x45 E:            choseong ssangdieud */
		0x1105, /* 0x46 F:            choseong lieul */
		0x1112, /* 0x47 G:            choseong hieuh */
		0x11AB, /* 0x48 H:            jongseong nieun */
		0x11BC, /* 0x49 I:            jongseong ieung */
		0x1165, /* 0x4A J:            jungseong eo */
		0x1161, /* 0x4B K:            jungseong a */
		0x003B, /* 0x4C L:            semicolon */
		0x11B7, /* 0x4D M:            jungseong mieum */
		0x11AF, /* 0x4E N:            jongseong rieul */
		0x1164, /* 0x4F O:            jungseong yae */
		0x1168, /* 0x50 P:            jungseong ye */
		0x1108, /* 0x51 Q:            choseong ssangpieup */
		0x1101, /* 0x52 R:            choseong ssanggieug */
		0x1102, /* 0x53 S:            choseong nieun */
		0x110A, /* 0x54 T:            choseong ssangsios */
		0x11BA, /* 0x55 U:            jongseong sieus */
		0x1111, /* 0x56 V:            choseong pieup */
		0x110D, /* 0x57 W:            choseong ssangjieuj */
		0x1110, /* 0x58 X:            choseong tieut */
		0x11A8, /* 0x59 Y:            jongseong gieug */
		0x110F, /* 0x5A Z:            choseong kieuk */
		0x005B, /* 0x5B bracketleft:  left bracket */
		0x005C, /* 0x5C backslash:    backslash */
		0x005D, /* 0x5D bracketright: right bracket */
		0x005E, /* 0x5E asciicircum:  circumflex accent */
		0x005F, /* 0x5F underscore:   underscore */
		0x0060, /* 0x60 quoteleft:    grave accent */
		0x1106, /* 0x61 a:            choseong  mieum */
		0x1172, /* 0x62 b:            jungseong yu */
		0x110E, /* 0x63 c:            choseong  chieuch */
		0x110B, /* 0x64 d:            choseong  ieung */
		0x1103, /* 0x65 e:            choseong  dieud */
		0x1105, /* 0x66 f:            choseong  lieul */
		0x1112, /* 0x67 g:            choseong  hieuh */
		0x1169, /* 0x68 h:            jungseong o */
		0x1163, /* 0x69 i:            jungseong ya */
		0x1165, /* 0x6A j:            jungseong eo */
		0x1161, /* 0x6B k:            jungseong a */
		0x1175, /* 0x6C l:            jungseong i */
		0x1173, /* 0x6D m:            jungseong eu */
		0x116E, /* 0x6E n:            jungseong u */
		0x1162, /* 0x6F o:            jungseong ae */
		0x1166, /* 0x70 p:            jungseong e */
		0x1107, /* 0x71 q:            choseong  pieup */
		0x1100, /* 0x72 r:            choseong  gieug */
		0x1102, /* 0x73 s:            choseong  nieun */
		0x1109, /* 0x74 t:            choseong  sieus */
		0x1167, /* 0x75 u:            jungseong yeo */
		0x1111, /* 0x76 v:            choseong  pieup */
		0x110c, /* 0x77 w:            choseong  cieuc */
		0x1110, /* 0x78 x:            choseong  tieut */
		0x116D, /* 0x79 y:            jungseong yo */
		0x110F, /* 0x7A z:            choseong  kieuk */
		0x007B, /* 0x7B braceleft:    left brace */
		0x007C, /* 0x7C bar:          vertical bar */
		0x007D, /* 0x7D braceright:   right brace */
		0x007E  /* 0x7E asciitilde:   tilde */
 ];

	K3_18Na_sublayout = [
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
		0x11BE,	/* 0x3B semicolon: jongseong chieut */
		0x0000,	/* 0x3C less */
		0x0000,	/* 0x3D equal */
		0x0000,	/* 0x3E greater */
		0x0000,	/* 0x3F question */
		0x0000,	/* 0x40 at */
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000,	/* 0x44 D */
		0x0000,	/* 0x45 E */
		0x0000,	/* 0x46 F */
		0x0000,	/* 0x47 G */
		0x0000,	/* 0x48 H */
		0x0000,	/* 0x49 I */
		0x11B9,	/* 0x4A J: jongseong bieup-sieus */
		0x11B0,	/* 0x4B K: jongseong lieul-gieug */
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
		0x0000,	/* 0x5B bracketleft */
		0x0000,	/* 0x5C backslash */
		0x0000,	/* 0x5D bracketright */
		0x0000,	/* 0x5E asciicircum */
		0x0000,	/* 0x5F underscore */
		0x0000,	/* 0x60 quoteleft */
		0x0000,	/* 0x61 a */
		0x11C1,	/* 0x62 b: jongseong pieup */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x0000,	/* 0x65 e */
		0x0000,	/* 0x66 f */
		0x0000,	/* 0x67 g */
		0x11C0,	/* 0x68 h: jongseong tieut */
		0x11C2,	/* 0x69 i: jongseong hieuh */
		0x0000,	/* 0x6A j */
		0x0000,	/* 0x6B k */
		0x0000,	/* 0x6C l */
		0x11AE,	/* 0x6D m: jongseong dieud */
		0x11BF,	/* 0x6E n: jongseong kieuk */
		0x0000,	/* 0x6F o */
		0x0000,	/* 0x70 p */
		0x0000,	/* 0x71 q */
		0x0000,	/* 0x72 r */
		0x0000,	/* 0x73 s */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x0000,	/* 0x77 w */
		0x0000,	/* 0x78 x */
		0x0000,	/* 0x79 y */
		0x0000,	/* 0x5A z */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000	/* 0x7E asciitilde: */
	];


	K3_Sin3_1995_layout = [
		0x0021,	/* 0x21 exclam: exclamation mark */
		0x0022,	/* 0x22 quotedbl: quotatioin mark */
		0x0023,	/* 0x23 numbersign: number sign */
		0x0024,	/* 0x24 dollar: dollar sign */
		0x0025,	/* 0x25 percent: percent sign */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 parenleft: left parenthesis */
		0x0029,	/* 0x29 parenright: right parenthesis */
		0x002A,	/* 0x2A asterisk: asterisk */
		0x002B,	/* 0x2B plus: plus sign */
		0x002C,	/* 0x2C comma: comma */
		0x002D,	/* 0x2D minus: minus sign */
		0x002E,	/* 0x2E period: period */
		0x110F,	/* 0x2F slash: choseong kieuk */
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
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less: less-than sign */
		0x003D,	/* 0x3D equal: equals sign */
		0x003E,	/* 0x3E greater: greater-than sign */
		0x003F,	/* 0x3F question: question mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1164,	/* 0x41 A: jungseong yae */
		0x116E,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x0000,	/* 0x48 H: */
		0x116E,	/* 0x49 I: jungseong o */
		0x003B,	/* 0x4A J: semicolon */
		0x0027,	/* 0x4B K: apostrophe */
		0x0000,	/* 0x4C L: */
		0x002F,	/* 0x4D M: slash */
		0x0000,	/* 0x4E N: */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1174,	/* 0x51 Q: jungseong eui */
		0x1162,	/* 0x52 R: jungseong ae */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1165,	/* 0x54 T: jungseong eo */
		0x0000,	/* 0x55 U: */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116D,	/* 0x58 X: jungseong yo */
		0x0000,	/* 0x59 Y: */
		0x1172,	/* 0x5A Z: jungseong yu */
		0x005B,	/* 0x5B bracketleft: left bracket */
		0x005C,	/* 0x5C backslash: backslash */
		0x005D,	/* 0x5D bracketright: right bracket */
		0x005E,	/* 0x5E asciicircum: circumflex accent */
		0x005F,	/* 0x5F underscore: underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BB,	/* 0x62 b: jongseong ssangsieus */
		0x11BE,	/* 0x63 c: jongseong chieuch */
		0x11C2,	/* 0x64 d: jongseong hieuh */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11BD,	/* 0x66 f: jongseong jieuj */
		0x11C1,	/* 0x67 g: jongseong pieup */
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
		0x11AE,	/* 0x72 r: jongseong dieud */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x11C0,	/* 0x74 t: jongseong tieut */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11BF,	/* 0x76 v: jongseong kieuk */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft: left brace */
		0x007C,	/* 0x7C bar: vertical line(bar) */
		0x007D,	/* 0x7D braceright: right brace */
		0x007E	/* 0x7E asciitilde: tilde */
	];

	// 박경남 신세벌식 자판
	K3_Sin3_BGN_layout = [
		0x203B,	/* 0x21 exclam: reference mark */
		0x00B7,	/* 0x22 quotedbl: middle dot */
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
		0x0021,	/* 0x3F question: exclamation mark */
		0x0040,	/* 0x40 at: commertial at */
		0x1172,	/* 0x41 A: jungseong yu */
		0x116E,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x0000, /* 0x48 H: */
		0x1174,	/* 0x49 I: jungseong eui */
		0x0022, /* 0x4A J: quotatioin mark */
		0x003B, /* 0x4B K: semicolon */
		0x0027, /* 0x4C L: apostrophe */
		0x002F, /* 0x4D M: slash */
		0x0000, /* 0x4E N: */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1162,	/* 0x52 R: jungseong ae */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1165,	/* 0x54 T: jungseong eo */
		0x0000, /* 0x55 U: */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116D,	/* 0x58 X: jungseong yo */
		0x0000,	/* 0x59 Y: */
		0x003F,	/* 0x5A Z: question mark */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BF,	/* 0x62 b: jongseong kieuk */
		0x11BE,	/* 0x63 c: jongseong chieuch */
		0x11AE,	/* 0x64 d: jongseong dieud */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11BB,	/* 0x66 f: jongseong ssangsieus */
		0x11BD,	/* 0x67 g: jongseong jieuj */
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
		0x11C1,	/* 0x74 t: jongseong pieup */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11C2,	/* 0x76 v: jongseong hieuh */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E	/* 0x7E asciitilde */
	];

	// 박경남 수정 신세벌식 자판 (2003)
	K3_Sin3_2003_layout = [
		0x0021,	/* 0x21 exclam */
		0x0022,	/* 0x22 quotedbl */
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
		0x003A,	/* 0x3A colon */
		0x1107,	/* 0x3B semicolon: choseong bieub */
		0x003C,	/* 0x3C less: */
		0x003D,	/* 0x3D equal */
		0x003E,	/* 0x3E greater */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 at:commertial at */
		0x1172,	/* 0x41 A: jungseong yu */
		0x116E,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x2018, /* 0x48 H: left single quoatation mark */
		0x1174,	/* 0x49 I: jungseong eui */
		0x2019, /* 0x4A J: right single quoatation mark */
		0x003B, /* 0x4B K: semicolon */
		0x0027, /* 0x4C L: apostrophe */
		0x002F, /* 0x4D M: slash */
		0x00B7, /* 0x4E N: middle dot */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1162,	/* 0x52 R: jungseong ae */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1165,	/* 0x54 T: jungseong eo */
		0x201D, /* 0x55 U: right double quoatation mark */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116D,	/* 0x58 X: jungseong yo */
		0x201C,	/* 0x59 Y: left single quoatation mark */
		0x203B,	/* 0x5A Z: reference mark */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BF,	/* 0x62 b: jongseong kieuk */
		0x11BE,	/* 0x63 c: jongseong chieuch */
		0x11AE,	/* 0x64 d: jongseong dieud */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11BB,	/* 0x66 f: jongseong ssangsieus */
		0x11BD,	/* 0x67 g: jongseong jieuj */
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
		0x11C1,	/* 0x74 t: jongseong pieup */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11C2,	/* 0x76 v: jongseong hieuh */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E	/* 0x7E asciitilde */
	];

	// 신세벌식 2003 자판 겹받침 확장 배열
	K3_Sin3_2003_sublayout = [
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
		0x11AC,	/* 0x41 A: jongseong nieun-jieuj */
		0x0000,	/* 0x42 B */
		0x11AA,	/* 0x43 C: jongseong gieug-sieus */
		0x11B9,	/* 0x44 D: jongseong bieub-sieus */
		0x11B2,	/* 0x45 E: jongseong lieul-bieub */
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
		0x11B3,	/* 0x51 Q: jongseong lieul-sieus */
		0x11B4,	/* 0x52 R: jongseong lieul-tieut */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x11B5,	/* 0x54 T: jongseong lieul-pieup */
		0x0000,	/* 0x55 U */
		0x11B6,	/* 0x56 V: jongseong lieul-hieuh */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0000,	/* 0x59 Y */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x119E,	/* 0x5B bracketleft: jungseong araea */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x0000,	/* 0x5E asciicircum: */
		0x0000,	/* 0x5F underscore: */
		0x0000,	/* 0x60 quoteleft: */
		0x11AC,	/* 0x61 a; jongseong nieun-jieuj */
		0x0000,	/* 0x62 b */
		0x11AA,	/* 0x63 c: jongseong gieug-sieus */
		0x11B9,	/* 0x64 d: jongseong bieub-sieus */
		0x11B2,	/* 0x65 e: jongseong lieul-bieub */
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
		0x11B3,	/* 0x71 q: jongseong lieul-sieus */
		0x11B4,	/* 0x72 r: jongseong lieul-tieut */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x11B5,	/* 0x74 t: jongseong lieul-pieup */
		0x0000,	/* 0x75 u */
		0x11B6,	/* 0x76 v: jongseong lieul-hieuh */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11A9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y */
		0x11B1,	/* 0x5A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000  /* 0x7E asciitilde: */
	];

	K3_Sin3_2012_layout = [
		0x0021,	/* 0x21 exclamation */
		0x002F,	/* 0x22 quotedbl: slash */
		0x0023,	/* 0x23 number */
		0x0024,	/* 0x24 dollar */
		0x0025,	/* 0x25 percent */
		0x0026,	/* 0x26 ampersand: ampersand */
		0x1110,	/* 0x27 apostrophe: choseong tieuh */
		0x0028,	/* 0x28 left parenthesis */
		0x0029,	/* 0x29 right parenthesis */
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
		0x003C,	/* 0x3C less-than */
		0x003D,	/* 0x3D equals */
		0x003E,	/* 0x3E greater-than */
		0x003F,	/* 0x3F question */
		0x0040,	/* 0x40 commertial at */
		0x1172,	/* 0x41 A: jungseong yu*/
		0x116E,	/* 0x42 B: jungseong u */
		0x1166,	/* 0x43 C: jungseong e */
		0x1175,	/* 0x44 D: jungseong i */
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu*/
		0x25A1,	/* 0x48 H: white squre */
		0x1174,	/* 0x49 I: jungseong eui */
		0x2015,	/* 0x4A J: horizontal bar */
		0x00B7,	/* 0x4B K: middle dot */
		0x003B,	/* 0x4C L: semicolon */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x0027,	/* 0x4E N: apostrophe */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1165,	/* 0x52 R: jungseong eo */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1162,	/* 0x54 T: jungseong ae */
		0x25CB,	/* 0x55 U: white circle */
		0x1169,	/* 0x56 V: jungseong o */
		0x1163,	/* 0x57 W: jungseong ya */
		0x116D,	/* 0x58 X: jungseong yo */
		0x00D7,	/* 0x59 Y: multiplication */
		0x119E,	/* 0x5A Z: jungseong araea*/
		0x005B,	/* 0x5B left bracket */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D right bracket */
		0x005E,	/* 0x5E circumflex accent */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft: grave accent */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BF,	/* 0x62 b: jongseong kieuk */
		0x11C2,	/* 0x63 c: jongseong hieuh */
		0x11BB,	/* 0x64 d: jongseong ssangsieus */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11BE,	/* 0x66 f: jongseong chieuch */
		0x11BD,	/* 0x67 g: jongseong jieuj */
		0x1102,	/* 0x68 h: choseong nieun */
		0x1106,	/* 0x69 i: choseong mieum */
		0x110B,	/* 0x6A j: choseong ieung */
		0x1100,	/* 0x6B k: choseong gieug */
		0x110C,	/* 0x6C l: choseong jieuc */
		0x1112,	/* 0x6D m: choseong hieuh */
		0x1109,	/* 0x6E n: choseong sieus */
		0x110E,	/* 0x6F o: choseong chieuch */
		0x1111,	/* 0x70 p: choseong pieup */
		0x11BA,	/* 0x71 q: jongseong sios */
		0x11C0,	/* 0x72 r: jongseong tieut */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x11AE,	/* 0x74 t: jongseong dieud */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11C1,	/* 0x76 v: jongseong pieup */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B left brace */
		0x007C,	/* 0x7C vertical line(bar) */
		0x007D,	/* 0x7D right brace */
		0x007E,	/* 0x7E tilde */
	];

	K3_Sin3_2012_sublayout = [
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
		0x0000,	/* 0x30 0: */
		0x0000,	/* 0x31 1: */
		0x0000,	/* 0x32 2: */
		0x0000,	/* 0x33 3: */
		0x0000,	/* 0x34 4: */
		0x0000,	/* 0x35 5: */
		0x0000,	/* 0x36 6: */
		0x0000,	/* 0x37 7: */
		0x0000,	/* 0x38 8: */
		0x0000,	/* 0x39 9: */
		0x0000,	/* 0x3A colon: */
		0x0000,	/* 0x3B semicolon: */
		0x0000,	/* 0x3C less: */
		0x0000,	/* 0x3D equal: */
		0x0000,	/* 0x3E greater: */
		0x0000,	/* 0x3F question: */
		0x0000,	/* 0x40 at: */
		0x11B9,	/* 0x41 A: jongseong bieub-sieus */
		0x0000,	/* 0x42 B: */
		0x11B6,	/* 0x43 C: jongseong lieul-hieuh */
		0x11AC,	/* 0x44 D: jongseong nieun-jieuj */
		0x11B2,	/* 0x45 E: jongseong lieul-bieub */
		0x11AA,	/* 0x46 F: jongseong gieug-sieus */
		0x0000,	/* 0x47 G: */
		0x0000,	/* 0x48 H: */
		0x0000,	/* 0x49 I: */
		0x0000,	/* 0x4A J: */
		0x0000,	/* 0x4B K: */
		0x0000,	/* 0x4C L: */
		0x0000,	/* 0x4D M: */
		0x0000,	/* 0x4E N: */
		0x0000,	/* 0x4F O: */
		0x0000,	/* 0x50 P: */
		0x11B3,	/* 0x51 Q: jongseong lieul-sieus */
		0x11B4,	/* 0x52 R: jongseong lieul-tieut */
		0x11AD,	/* 0x53 S: jongseong nieun-hieuh */
		0x0000,	/* 0x54 T: */
		0x0000,	/* 0x55 U: */
		0x11B5,	/* 0x56 V: jongseong lieul-pieup */
		0x11B0,	/* 0x57 W: jongseong lieul-gieug */
		0x11A9,	/* 0x58 X: jongseong ssanggieug */
		0x0000,	/* 0x59 Y: */
		0x11B1,	/* 0x5A Z: jongseong lieul-mieum */
		0x119E,	/* 0x5B bracketleft: jungseong araea */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x0000,	/* 0x5E asciicircum: */
		0x0000,	/* 0x5F underscore: */
		0x0000,	/* 0x60 quoteleft: */
		0x11B9,	/* 0x61 a: jongseong bieub-sieus */
		0x0000,	/* 0x62 b: */
		0x11B6,	/* 0x63 c: jongseong lieul-hieuh */
		0x11AC,	/* 0x64 d: jongseong nieun-jieuj */
		0x11B2,	/* 0x65 e: jongseong lieul-bieub */
		0x11AA,	/* 0x66 f: jongseong gieug-sieus */
		0x0000,	/* 0x67 g: */
		0x0000,	/* 0x68 h: */
		0x0000,	/* 0x69 i: */
		0x0000,	/* 0x6A j: */
		0x0000,	/* 0x6B k: */
		0x0000,	/* 0x6C l: */
		0x0000,	/* 0x6D m: */
		0x0000,	/* 0x6E n: */
		0x0000,	/* 0x6F o: */
		0x0000,	/* 0x70 p: */
		0x11B3,	/* 0x71 q: jongseong lieul-sieus */
		0x11B4,	/* 0x72 r: jongseong lieul-tieut */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x0000,	/* 0x74 t: */
		0x0000,	/* 0x75 u: */
		0x11B5,	/* 0x76 v: jongseong lieul-pieup */
		0x11B0,	/* 0x77 w: jongseong lieul-gieug */
		0x11A9,	/* 0x78 x: jongseong ssanggieug */
		0x0000,	/* 0x79 y: */
		0x11B1,	/* 0x7A z: jongseong lieul-mieum */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000,	/* 0x7E asciitilde: */
	];

	// 신세벌식 2015 자판
	K3_Sin3_2015_layout = [/*!*/33,/*"*/47,/*#*/35,/*$*/36,/*%*/37,/*&*/38,/*'*/0x1110/*ㅌ*/,/*(*/40,
	/*)*/41,/***/42,/*+*/43,/*,*/44,/*-*/45,/*.*/46,/*/*/0x110F/*ㅋ*/,/*0*/48,
	/*1*/49,/*2*/50,/*3*/51,/*4*/52,/*5*/53,/*6*/54,/*7*/55,/*8*/56,/*9*/57,
	/*:*/58,/*;*/0x1107/*ㅂ*/,/*<*/60,/*=*/61,/*>*/62,/*?*/63,/*@*/64,
	/*A*/0x11BB/*ㅆ*/,/*B*/0x11BF/*ㅋ*/,/*C*/0x11BA/*ㅅ*/,/*D*/0x11AF/*ㄹ*/,/*E*/0x11BC/*ㅇ*/,/*F*/0x11C0/*ㅌ*/,/*G*/0x11AE/*ㄷ*/,
	/*H*/0x3008,/*I*/0x2026,/*J*/0x3009,/*K*/183,/*L*/59,/*M*/34,/*N*/39,/*O*/0x116E/*ㅜ*/,/*P*/0x1169/*ㅗ*/,
	/*Q*/0x11C2/*ㅎ*/,/*R*/0x11BD/*ㅈ*/,/*S*/0x11AB/*ㄴ*/,/*T*/0x11C1/*ㅍ*/,/*U*/0x300B,/*V*/0x11BE/*ㅊ*/,/*W*/0x11B7/*ㅁ*/,/*X*/0x11A8/*ㄱ*/,
	/*Y*/0x300A,/*Z*/0x11B8/*ㅂ*/,/*[*/91,/*\*/92,/*]*/93,/*^*/94,/*_*/95,/*`*/96,
	/*a*/0x1163/*ㅑ*/,/*b*/0x116E/*ㅜ*/,/*c*/0x1166/*ㅔ*/,/*d*/0x1175/*ㅣ*/,/*e*/0x1167/*ㅕ*/,/*f*/0x1161/*ㅏ*/,/*g*/0x1173/*ㅡ*/,
	/*h*/0x1102/*ㄴ*/,/*i*/0x1106,/*j*/0x110B/*―*/,/*k*/0x1100/*·*/,/*l*/0x110C/*;*/,/*m*/0x1112,/*n*/0x1109,/*o*/0x110E,/*p*/0x1111/*ㅍ*/,
	/*q*/0x1164/*ㅒ*/,/*r*/0x1162/*ㅐ*/,/*s*/0x1174/*ㅢ*/,/*t*/0x1165/*ㅓ*/,/*u*/0x1103/*ㄷ*/,/*v*/0x1169/*ㅗ*/,/*w*/0x1168/*ㅖ*/,/*x*/0x116D/*ㅛ*/,
	/*y*/0x1105/*ㄹ*/,/*z*/0x1172/*ㅠ*/,/*{*/123,/*|*/124,/*}*/125,/*~*/126];
	
	// 신세벌식 P
	K3_Sin3_P_layout = [
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
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x25A1,	/* 0x48 H: white squre */
		0x1173,	/* 0x49 I: jungseong eu */
		0x0027,	/* 0x4A J: apostrophe */
		0x00B7,	/* 0x4B K: middle dot */
		0x003B,	/* 0x4C L: semicolon */
		0x0022,	/* 0x4D M: quotatioin mark */
		0x2015,	/* 0x4E N: horizontal bar */
		0x116E,	/* 0x4F O: jungseong u */
		0x119E,	/* 0x50 P: jungseong araea */
		0x1164,	/* 0x51 Q: jungseong yae */
		0x1165,	/* 0x52 R: jungseong eo */
		0x1168,	/* 0x53 S: jungseong ye */
		0x1162,	/* 0x54 T: jungseong ae */
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
		0x11BF,	/* 0x62 b: jongseong kieuk */
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
		0x11BE,	/* 0x74 t: jongseong chieuch */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11BD,	/* 0x76 v: jongseong jieuj */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11BB,	/* 0x78 x: jongseong ssangsieus */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E  /* 0x7E asciitilde */
	];

	// 신세벌식 P 겹낱자 확장 배열
	K3_Sin3_P_sublayout = [
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
		0x11AA,	/* 0x61 a; jongseong gieug-sieus */
		0x0000,	/* 0x62 b */
		0x11A9,	/* 0x63 c: jongseong ssanggieug */
		0x11B6,	/* 0x64 d: jongseong lieul-hieuh */
		0x11B2,	/* 0x65 e: jongseong lieul-bieub */
		0x11B5,	/* 0x66 f: jongseong lieul-pieup */
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

	// 신세벌식 P 옛한글
	K3_Sin3_P_y_layout = K3_Sin3_P_layout.slice(0);
	K3_Sin3_P_y_layout[52]=0x302E; /* 0x55 U: hangeul single dot tone mark */
	K3_Sin3_P_y_layout[56]=0x302F; /* 0x59 Y: hangeul double dot tone mark */
	
	// 신세벌식 공동개발안
	K3_Sin3_Gongdong_layout = [
		0x0021,	/* 0x21 exclam */
		0x0022,	/* 0x22 quotedbl */
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
		0x1167,	/* 0x45 E: jungseong yeo */
		0x1161,	/* 0x46 F: jungseong a */
		0x1173,	/* 0x47 G: jungseong eu */
		0x300E, /* 0x48 H: left white corner bracket */
		0x1174,	/* 0x49 I: jungseong eui */
		0x300F, /* 0x4A J: right white corner bracket */
		0x003B, /* 0x4B K: semicolon */
		0x0027, /* 0x4C L: apostrophe */
		0x002F, /* 0x4D M: slash */
		0x00B7, /* 0x4E N: middle dot */
		0x116E,	/* 0x4F O: jungseong u */
		0x1169,	/* 0x50 P: jungseong o */
		0x203B,	/* 0x51 Q: reference mark */
		0x1162,	/* 0x52 R: jungseong ae */
		0x116D,	/* 0x53 S: jungseong yo */
		0x1165,	/* 0x54 T: jungseong eo */
		0x300B, /* 0x55 U: right double angle bracket */
		0x1169,	/* 0x56 V: jungseong o */
		0x1168,	/* 0x57 W: jungseong ye */
		0x1163,	/* 0x58 X: jungseong ya */
		0x300A,	/* 0x59 Y: left single angle bracket */
		0x1164,	/* 0x5A Z: jungseong yae */
		0x005B,	/* 0x5B bracketleft */
		0x005C,	/* 0x5C backslash */
		0x005D,	/* 0x5D bracketright */
		0x005E,	/* 0x5E asciicircum */
		0x005F,	/* 0x5F underscore */
		0x0060,	/* 0x60 quoteleft */
		0x11BC,	/* 0x61 a: jongseong ieung */
		0x11BE,	/* 0x62 b: jongseong chieuch */
		0x11C2,	/* 0x63 c: jongseong hieuh */
		0x11BB,	/* 0x64 d: jongseong ssangsieus */
		0x11B8,	/* 0x65 e: jongseong bieub */
		0x11C0,	/* 0x66 f: jongseong tieut */
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
		0x11BD,	/* 0x72 r: jongseong jieuj */
		0x11AB,	/* 0x73 s: jongseong nieun */
		0x11BF,	/* 0x74 t: jongseong kieuk */
		0x1103,	/* 0x75 u: choseong dieud */
		0x11C1,	/* 0x76 v: jongseong pieup */
		0x11AF,	/* 0x77 w: jongseong lieul */
		0x11A8,	/* 0x78 x: jongseong gieug */
		0x1105,	/* 0x79 y: choseong lieul */
		0x11B7,	/* 0x7A z: jongseong mieum */
		0x007B,	/* 0x7B braceleft */
		0x007C,	/* 0x7C bar */
		0x007D,	/* 0x7D braceright */
		0x007E  /* 0x7E asciitilde */
	];

	// 신세벌식 공동개발안 겹낱자 확장 배열
	K3_Sin3_Gongdong_sublayout = [
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
		0x116F,	/* 0x2C comma: jungseong weo */
		0x0000,	/* 0x2D minus: */
		0x116A,	/* 0x2E period: jungseong wa */
		0x1169,	/* 0x2F slash: jungseong o */
		0x0000,	/* 0x30 0 */
		0x0000,	/* 0x31 1 */
		0x1171,	/* 0x32 2: jungseong wi */
		0x116C,	/* 0x33 3: jungseong oe */
		0x0000,	/* 0x34 4 */
		0x0000,	/* 0x35 5 */
		0x0000,	/* 0x36 6 */
		0x0000,	/* 0x37 7 */
		0x116B,	/* 0x38 8: jungseong wae */
		0x1170,	/* 0x39 9: jungseong we */
		0x0000,	/* 0x3A colon: */
		0x0000,	/* 0x3B semicolon: */
		0x0000,	/* 0x3C less: */
		0x0000,	/* 0x3D equal: */
		0x0000,	/* 0x3E greater: */
		0x0000,	/* 0x3F question: */
		0x0000,	/* 0x40 at: */
		0x0000,	/* 0x41 A */
		0x0000,	/* 0x42 B */
		0x0000,	/* 0x43 C */
		0x0000,	/* 0x44 D */
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
		0x0000,	/* 0x5B bracketleft: */
		0x0000,	/* 0x5C backslash: */
		0x0000,	/* 0x5D bracketright: */
		0x0000,	/* 0x5E asciicircum: */
		0x0000,	/* 0x5F underscore: */
		0x0000,	/* 0x60 quoteleft: */
		0x0000,	/* 0x61 a */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x0000,	/* 0x65 e */
		0x0000,	/* 0x66 f */
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
		0x0000,	/* 0x71 q */
		0x0000,	/* 0x72 r */
		0x0000,	/* 0x73 s */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x0000,	/* 0x77 w */
		0x0000,	/* 0x78 x */
		0x0000,	/* 0x79 y */
		0x0000,	/* 0x5A z */
		0x0000,	/* 0x7B braceleft: */
		0x0000,	/* 0x7C bar: */
		0x0000,	/* 0x7D braceright: */
		0x0000	/* 0x7E asciitilde: */
	];


	// 3-2011 옛한글, 3-2012 옛한글, 3-2014, 3-2015P 자판의 한글 확장 배열
	K3_2012y_extended_hangeul_layout = [
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x21 exclam: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x22 quotedbl: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x23 numbersign: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x24 dollar: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x25 percent: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x26 ampersand: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x27 apostrophe: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x28 parenleft: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x29 parenright: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2A asterisk: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2B plus: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2C comma: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2D minus: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2E period: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x2F slash: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x30 0: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x31 1: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x32 2: jongseong ap-sieus(non-standard), jongseong ssang-ap-sieus(non-standard), jongseong dwits-sieus(non-standard), jongseong ssang-dwits-sieus(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x33 3: */
		[[0xD7C2,0x0000], [0x0000,0x0000]], /* 0x34 4: i+yo */
		[[0xD7C3,0x0000], [0x0000,0x0000]], /* 0x35 5: i+yu */
		[[0x1199,0x0000], [0x0000,0x0000]], /* 0x36 6: i+ya */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x37 7: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x38 8: */
		[[0x113C,0x113D], [0x113E,0x113F]], /* 0x39 9: choseong ap-sieus, choseong ssang-ap-sieus, choseong dwits-sieus, choseong ssang-dwits-sieus */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3A colon: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3B semicolon: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3C less: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3D equal: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3E greater: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x3F question: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x40 at: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x41 A: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x42 B: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x43 C: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x44 D: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x45 E: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x46 F: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x47 G: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x48 H: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x49 I: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4A J: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4B K: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4C L: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4D M: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4E N: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x4F O: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x50 P: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x51 Q: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x52 R: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x53 S: */
		[[0xD7BE,0x0000], [0x0000,0x0000]], /* 0x54 T: i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x55 U: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x56 V: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x57 W: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x58 X: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x59 Y: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x5A Z: */
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
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x69 i: */
		[[0x0000,0x0000], [0x114C,0x0000]], /* 0x6A j: choseong yes-ieung, choseong ssang-yes-ieung(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6B k: */
		[[0x114E,0x114F], [0x1150,0x1151]], /* 0x6C l: choseong ap-jieuj, choseong ssang-ap-jieuj, choseong dwits-jieuj, choseong ssang-dwits-jieuj */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x6D m: */
		[[0x0000,0x0000], [0x1140,0x0000]], /* 0x6E n: choseong yeorin-sieus*/
		[[0x1154,0x0000], [0x1155,0x0000]], /* 0x6F o: choseong ap-chieuch, choseong dwits-chieuch */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x70 p: */
		[[0x0000,0x0000], [0x11EB,0x0000]], /* 0x71 q: jongseong yeorin-sieus */
		[[0x0000,0x0000], [0xD7BA,0x0000]], /* 0x72 r: eu+eo */
		[[0x0000,0x0000], [0x11F9,0x0000]], /* 0x73 s: jongseong yeorin-hieuh, jongseong yeorin-ssang-hieuh(non-standard) */
		[[0x1164,0xD7BE], [0x0000,0x0000]], /* 0x74 t: yae, i+yae */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x75 u: */
		[[0x119A,0x0000], [0xD7BC,0x0000]], /* 0x76 v: i+o, eu+o */
		[[0x0000,0x0000], [0xD7DD,0x0000]], /* 0x77 w: jongseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x78 x: jongseong ap-jieuj(non-standard), jongseong ssang-ap-jieuj(non-standard), jongseong dwits-jieuj(non-standard), jongseong ssang-dwits-jieuj(non-standard) */
		[[0x0000,0x0000], [0x111B,0x0000]], /* 0x79 y: choseong lieul-ieung */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7A z: jongseong ap-chieuch(non-standard), jongseong dwits-chieuch(non-standard) */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7B braceleft: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7C bar: */
		[[0x0000,0x0000], [0x0000,0x0000]], /* 0x7D braceright: */
		[[0x0000,0x0000], [0x0000,0x0000]]  /* 0x7E asciitilde: */
	];

	// 3-2011 자판 기호 확장 배열
	K3_2011_extended_sign_layout = [/*!*/[0,0,0], /*"*/[0x266A,0x266C,0], /*#*/[0,0,0], /*$*/[0xFFE0,0,0], /*%*/[0,0,0],
	/*&*/[0,0,0],	/*'*/[0x326B,0x2030,0x2031], /*(*/[0,0,0], /*)*/[0,0,0], /***/[0,0,0], /*+*/[0x2640,0,0],
	/*,*/[0x3001,0x3008,0x2266], /*-*/[0x3010,0x3014,0x2601], /*.*/[0x3002,0x3009,0x2267], /*/*/[0x2026,0x203B,0x2504],
	/*0*/[0x326A,0x300D,0],	/*1*/[0x3BC,0x2122,0], /*2*/[0xB2,0x2109,0], /*3*/[0xB3,0x2103,0], /*4*/[0xFFE6,0xFFE5,0],
	/*5*/[0x20AC,0xFFE1,0], /*6*/[0x327E,0x2702,0], /*7*/[0xA7,0x300E,0], /*8*/[0,0x300F,0],	/*9*/[0,0x300C,0],
	/*:*/[0x2463,0x246D,0x3254], /*;*/[0x3265,0x2463,0x246D],
	/*<*/[0,0,0], /*=*/[0x3011,0x3015,0x2603], /*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
	/*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0], /*E*/[0x2715,0,0], /*F*/[0,0,0], /*G*/[0xA6,0x2506,0],
	/*H*/[0x2469,0x2473,0x325A], /*I*/[0x2466,0x2470,0x3257], /*J*/[0x2460,0x246A,0x3251], /*K*/[0x2461,0x246B,0x3252],
	/*L*/[0x2462,0x246C,0x3253], /*M*/[0x201D,0x2019,0], /*N*/[0x201C,0x2018,0], /*O*/[0x2467,0x2471,0x3258],
	/*P*/[0x2468,0x2472,0x3259], /*Q*/[0x2199,0x2196,0x261F], /*R*/[0xB4,0,0], /*S*/[0,0,0], /*T*/[0,0,0x2610],
	/*U*/[0x2465,0x246F,0x3256], /*V*/[0,0,0], /*W*/[0x2198,0x2197,0x261D], /*X*/[0,0,0],
	/*Y*/[0x2464,0x246E,0x3255], /*Z*/[0,0,0], /*[*/[0x7B,0xB1,0x2600], /*\*/[0x2260,0x2252,0xB6],
	/*]*/[0x7D,0xF7,0x2602], /*^*/[0x321C,0,0], /*_*/[0x2642,0,0], /*`*/[0xA9,0xAE,0x2117],
	/*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0x2D0,0x25C1,0x25C0], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
	/*e*/[0xD7,0x2194,0x2195], /*f*/[0x2015,0x25B3,0x25B2],	/*g*/[0x7C,0x25BD,0x25BC], /*h*/[0x3261,0x2469,0x2473],
	/*i*/[0x3264,0x2466,0x2470], /*j*/[0x3267,0x2460,0x246A], /*k*/[0x3260,0x2461,0x246B], /*l*/[0x3268,0x2462,0x246C],
	/*m*/[0x326D,0x300B,0], /*n*/[0x3266,0x300A,0], /*o*/[0x3269,0x2467,0x2471], /*p*/[0x326C,0x2468,0x2472],
	/*q*/[0x2190,0x2193,0x261C], /*r*/[0x60,0x2022,0x25E6], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x3003,0x2713,0x2611],
	/*u*/[0x3262,0x2465,0x246F], /*v*/[0,0x25B7,0x25B6], /*w*/[0x2192,0x2191,0x261E], /*x*/[0x2032,0x2606,0x2605],
	/*y*/[0x3263,0x2464,0x246E], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0xF7,0,0], /*~*/[0x327F,0,0]];

	// 3-2012 자판 기호 확장 배열
	K3_2012_extended_sign_layout = [/*!*/[0,0,0], /*"*/[0x266A,0x266C,0], /*#*/[0,0,0], /*$*/[0xFFE0,0,0],
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
	/*y*/[0x3263,0x2464,0x246E], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0,0,0], /*~*/[0x327F,0,0]];

	K3_2011y_extended_sign_layout = [
		[[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
		[[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
		[[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
		[[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
		[[0x326B,0x3279,0x0000], [0x2030,0x2031,0x0000]], /* 0x27 apostrophe */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
		[[0x3001,0x0000,0x0000], [0x2266,0x226A,0x0000]], /* 0x2C comma */
		[[0x2642,0x2600,0x2601], [0x0000,0x0000,0x0000]], /* 0x2D minus */
		[[0x3002,0x0000,0x0000], [0x2267,0x226B,0x0000]], /* 0x2E period */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2F slash */
		[[0x326A,0x3278,0x0000], [0x2713,0x2611,0x2610]], /* 0x30 0 */
		[[0x2195,0x21C5,0x21F3], [0x03BC,0x0000,0x0000]], /* 0x31 1 */
		[[0x2194,0x21C4,0x2B04], [0x2109,0x0000,0x0000]], /* 0x32 2 */
		[[0xFFE5,0x04B0,0x0000], [0x2103,0x0000,0x0000]], /* 0x33 3 */
		[[0xFFE6,0x0000,0x0000], [0xFFE0,0x0000,0x0000]], /* 0x34 4 */
		[[0x20AC,0xFFE1,0x0000], [0x0000,0x0000,0x0000]], /* 0x35 5 */
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
		[[0x0000,0x0000,0x0000], [0xFE38,0xFE3C,0xFE3A]], /* 0x54 T */
		[[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x55 U */
		[[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
 		[[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
		[[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x59 Y */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5A Z */
		[[0x2022,0x25B3,0x25B2], [0x00B1,0x25B7,0x25B6]], /* 0x5B bracketleft */
		[[0x00B6,0x23CE,0x0000], [0x2252,0x2248,0x0000]], /* 0x5C backslash */
		[[0x2025,0x25BD,0x25BC], [0x00F7,0x25C1,0x25C0]], /* 0x5D bracketright */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5E asciicircum */
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5F underscore */
		[[0x00A9,0x00AE,0x2117], [0x2122,0x0000,0x0000]], /* 0x60 quoteleft */
		[[0x2026,0x2504,0x0000], [0x25C7,0x25C8,0x25C6]], /* 0x61 a */
		[[0x00A7,0x0000,0x0000], [0x3009,0x300B,0x0000]], /* 0x62 b */
		[[0x00B0,0x0000,0x0000], [0x260E,0x2668,0x0000]], /* 0x63 c */
		[[0x302E,0x0000,0x0000], [0x25CB,0x25C9,0x25CF]], /* 0x64 d */
		[[0x00D7,0x2715,0x0000], [0x203B,0x327C,0x327D]], /* 0x65 e */
		[[0x2015,0x00AF,0xFFE3], [0x300C,0x300E,0x0000]], /* 0x66 f */
		[[0x007C,0x00A6,0x2506], [0x300D,0x300F,0x0000]], /* 0x67 g */
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
		[[0x0060,0x00B4,0x0000], [0x007B,0x3010,0x3014]], /* 0x72 r */
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
		[[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]] /* 0x7E asciitilde */
	];

	K3_2012y_extended_sign_layout = [ // 3-2012 옛한글, 3-2014, 3-2015P, 3-P2 자판의 기호 확장 배열
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

	K3_Semoe_2014_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x1169, /* 0x27 apostrophe: jungseong o */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x002D, /* 0x2D minus: minus sign */
		0x002E, /* 0x2E period: period */
		0x002F, /* 0x2F slash: slash */
		0x0030, /* 0x30 0: 0 */
		0x11B9, /* 0x31 1: jongseong bieub-sieus */
		0x11AE, /* 0x32 2: jongseong dieud */
		0x11B8, /* 0x33 3: jongseong bieub */
		0x116D, /* 0x34 4: jungseong yo */
		0x1163, /* 0x35 5: jungseong ya */
		0x119E, /* 0x36 6: jungseong araea */
		0x11A2, /* 0x37 7: jungseong ssangaraea */
		0x0038, /* 0x38 8: 8 */
		0x0039, /* 0x39 9: 9 */
		0x0034, /* 0x3A colon: 4 */
		0x11BB, /* 0x3B semicolon: jongseong ssangsieus */
		0x003C, /* 0x3C less: less-than sign */
		0x003D, /* 0x3D equal: euals sign */
		0x003E, /* 0x3E greater: greater-than sign */
		0x003F, /* 0x3F question: question mark */
		0x0040, /* 0x40 at: commertial at */
		0x2606, /* 0x41 A: ☆ white star */
		0x003B, /* 0x42 B: semicolon */
		0x300C, /* 0x43 C: 「 left corner bracket */
		0x25B2, /* 0x44 D: ▲ black up-pointing triangle */
		0x2192, /* 0x45 E: → rightwards arrow */
		0x00B7, /* 0x46 F: middle dot */
		0x003A, /* 0x47 G: colon */
		0x0030, /* 0x48 H: 0 */
		0x0037, /* 0x49 I: 7 */
		0x0031, /* 0x4A J: 1 */
		0x0032, /* 0x4B K: 2 */
		0x0033, /* 0x4C L: 3 */
		0x0022, /* 0x4D M: quotatioin mark */
		0x0027, /* 0x4E N: apostrophe */
		0x0038, /* 0x4F O: 8 */
		0x0039, /* 0x50 P: 9 */
		0x2661, /* 0x51 Q: ♡ white heart suit */
		0x2194, /* 0x52 R: ↔ left right arrow */
		0x25BD, /* 0x53 S: ▽ white down-pointing triangle */
		0x203B, /* 0x54 T: ※ reference mark */
		0x0036, /* 0x55 U: 6 */
		0x300D, /* 0x56 V: 」 right corner bracket */
		0x2190, /* 0x57 W: ← leftwards arrow */
		0x25CE, /* 0x58 X: ◎ bullseye */
		0x0035, /* 0x59 Y: 5 */
		0x25A1, /* 0x5A Z: □ white square */
		0x005B, /* 0x5B bracketleft: left bracket */
		0x005C, /* 0x5C backslash: backslash */
		0x005D, /* 0x5D bracketright: right bracket */
		0x005E, /* 0x5E asciicircum: circumflex accent */
		0x005F, /* 0x5F underscore: underscore */
		0x0060, /* 0x60 quoteleft: grave accent */
		0x11BC, /* 0x61 a: jongseong ieung */
		0x1166, /* 0x62 b: jungseong e */
		0x116E, /* 0x63 c: jungseong u */
		0x1175, /* 0x64 d: jungseong i */
		0x11AF, /* 0x65 e: jongseong lieul */
		0x1161, /* 0x66 f: jungseong a */
		0x1173, /* 0x67 g: jungseong eu */
		0x1102, /* 0x68 h: choseong nieun */
		0x1106, /* 0x69 i: choseong mieum */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1112, /* 0x6D m: choseong hieuh */
		0x1109, /* 0x6E n: choseong sieus */
		0x1107, /* 0x6F o: choseong bieub */
		0x116E, /* 0x70 p: jungseong u */
		0x11C2, /* 0x71 q: jongseong hieuh */
		0x1165, /* 0x72 r: jungseong eo */
		0x11AB, /* 0x73 s: jongseong nieun */
		0x1167, /* 0x74 t: jungseong yeo */
		0x1103, /* 0x75 u: choseong dieud */
		0x1169, /* 0x76 v: jungseong o */
		0x11BA, /* 0x77 w: jongseong sieus */
		0x11A8, /* 0x78 x: jongseong gieug */
		0x1105, /* 0x79 y: choseong lieul */
		0x11B7, /* 0x7A z: jongseong mieum */
		0x007B, /* 0x7B braceleft: left brace */
		0x007C, /* 0x7C bar: vertical line(bar) */
		0x007D, /* 0x7D braceright: right brace */
		0x007E  /* 0x7E asciitilde: tilde */
	];

	K3_Semoe_2014_sublayout = [
		0x0000,	/* 0x21 exclam: */
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
		0x11B3,	/* 0x31 1: jongseong lieul-sieus */
		0x11C0,	/* 0x32 2: jongseong tieut */
		0x11C1,	/* 0x33 3: jongseong pieup */
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
		0x11B8,	/* 0x61 a: jongseong bieub */
		0x0000,	/* 0x62 b */
		0x0000,	/* 0x63 c */
		0x0000,	/* 0x64 d */
		0x11BD,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
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
		0x11B6,	/* 0x71 q: jongseong lieul-hieuh */
		0x0000,	/* 0x72 r */
		0x11AD,	/* 0x73 s: jongseong nieun-hieuh */
		0x0000,	/* 0x74 t */
		0x0000,	/* 0x75 u */
		0x0000,	/* 0x76 v */
		0x11BE,	/* 0x77 w: jongseong chieuch */
		0x11BF,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11AE,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];
	
	K3_Semoe_2015_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x116E, /* 0x27 apostrophe: jungseong u */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x002D, /* 0x2D minus: minus sign */
		0x002E, /* 0x2E period: period */
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
		0x0027, /* 0x42 B: apostrophe */
		0x300C, /* 0x43 C: 「 left corner bracket */
		0x2192, /* 0x44 D: → rightwards arrow */
		0x2661, /* 0x45 E: ♡ white heart suit */
		0x25CB, /* 0x46 F: ○ */
		0x00D7, /* 0x47 G: × */
		0x3008, /* 0x48 H: 〈 */
		0x2026, /* 0x49 I: … */
		0x3009, /* 0x4A J: 〉 */
		0x00B7, /* 0x4B K: · */
		0x003B, /* 0x4C L: colon */
		0x300F, /* 0x4D M: 』 */
		0x300E, /* 0x4E N: 『 */
		0x25B3, /* 0x4F O: △ white up-pointing triangle */
		0x25BD, /* 0x50 P: ▽ white down-pointing triangle */
		0x2194, /* 0x51 Q: ↔ left right arrow */
		0x2606, /* 0x52 R: ☆ white star */
		0x2193, /* 0x53 S: ↓ */
		0x203B, /* 0x54 T: ※ reference mark */
		0x300B, /* 0x55 U: 》 */
		0x300D, /* 0x56 V: 」 right corner bracket */
		0x2191, /* 0x57 W: ↑ */
		0x25CE, /* 0x58 X: ◎ bullseye */
		0x300A, /* 0x59 Y: 《 */
		0x25A1, /* 0x5A Z: □ white square */
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
		0x1109, /* 0x68 h: choseong sieus */
		0x1103, /* 0x69 i: choseong dieud */
		0x110B, /* 0x6A j: choseong ieung */
		0x1100, /* 0x6B k: choseong gieug */
		0x110C, /* 0x6C l: choseong jieuj */
		0x1105, /* 0x6D m: choseong lieul */
		0x1112, /* 0x6E n: choseong hieuh */
		0x1107, /* 0x6F o: choseong pieup */
		0x1169, /* 0x70 p: jungseong o */
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

	K3_Semoe_2015_sublayout = [
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
		0x11B6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11BD,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
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
		0x11BE,	/* 0x71 q: jongseong chieuch */
		0x1163,	/* 0x72 r: jongseong ya */
		0x11C2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116D,	/* 0x76 v: jungseong yo */
		0x11C1,	/* 0x77 w: jongseong pieup */
		0x11BF,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11AE,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_Semoe_2016_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x005B, /* 0x27 apostrophe: left bracket */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002C, /* 0x2C comma: comma */
		0x002D, /* 0x2D minus: minus sign */
		0x002E, /* 0x2E period: period */
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
		0x25CB, /* 0x46 F: ○ */
		0x00D7, /* 0x47 G: × */
		0x00B7, /* 0x48 H: · */
		0x2015, /* 0x49 I: ― */
		-100,   /* 0x4A J: */
		0x0027, /* 0x4B K: apostrophe */
		0x003B, /* 0x4C L: colon */
		0x300F, /* 0x4D M: 』 */
		0x300E, /* 0x4E N: 『 */
		0x25B3, /* 0x4F O: △ white up-pointing triangle */
		0x25BD, /* 0x50 P: ▽ white down-pointing triangle */
		0x2194, /* 0x51 Q: ↔ left right arrow */
		0x2606, /* 0x52 R: ☆ white star */
		0x2193, /* 0x53 S: ↓ */
		0x203B, /* 0x54 T: ※ reference mark */
		0x3009, /* 0x55 U: 〉 */
		0x300D, /* 0x56 V: 」 right corner bracket */
		0x2191, /* 0x57 W: ↑ */
		0x25CE, /* 0x58 X: ◎ bullseye */
		0x3008, /* 0x59 Y: 〈 */
		0x25A1, /* 0x5A Z: □ white square */
		0x1169, /* 0x5B bracketleft: jungseong o */
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
		0x116E, /* 0x70 p: jungseong u */
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

	K3_Semoe_2016_sublayout = [
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
		0x11B6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11BD,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
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
		0x11BE,	/* 0x71 q: jongseong chieuch */
		0x1163,	/* 0x72 r: jongseong ya */
		0x11C2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116D,	/* 0x76 v: jungseong yo */
		0x11C1,	/* 0x77 w: jongseong pieup */
		0x11BF,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11AE,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];

	K3_Semoe_2017_layout = [
		0x0021, /* 0x21 exclam: exclamation mark */
		0x0022, /* 0x22 quotedbl: quotatioin mark */
		0x0023, /* 0x23 numbersign: number sign */
		0x0024, /* 0x24 dollar: dollar sign */
		0x0025, /* 0x25 percent: percent sign */
		0x0026, /* 0x26 ampersand: ampersand */
		0x002C, /* 0x27 apostrophe: comma */
		0x0028, /* 0x28 parenleft: left parenthesis */
		0x0029, /* 0x29 parenright: right parenthesis */
		0x002A, /* 0x2A asterisk: asterisk */
		0x002B, /* 0x2B plus: plus sign */
		0x002E, /* 0x2C comma: period */
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
		0x25CB, /* 0x46 F: ○ */
		0x00D7, /* 0x47 G: × */
		0x00B7, /* 0x48 H: · */
		0x2015, /* 0x49 I: ― */
		0x0000, /* 0x4A J: */
		0x0027, /* 0x4B K: apostrophe */
		0x003B, /* 0x4C L: colon */
		0x300F, /* 0x4D M: 』 */
		0x300E, /* 0x4E N: 『 */
		0x25B3, /* 0x4F O: △ white up-pointing triangle */
		0x25BD, /* 0x50 P: ▽ white down-pointing triangle */
		0x2194, /* 0x51 Q: ↔ left right arrow */
		0x2606, /* 0x52 R: ☆ white star */
		0x2193, /* 0x53 S: ↓ */
		0x203B, /* 0x54 T: ※ reference mark */
		0x3009, /* 0x55 U: 〉 */
		0x300D, /* 0x56 V: 」 right corner bracket */
		0x2191, /* 0x57 W: ↑ */
		0x25CE, /* 0x58 X: ◎ bullseye */
		0x3008, /* 0x59 Y: 〈 */
		0x25A1, /* 0x5A Z: □ white square */
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
		0x116E, /* 0x70 p: jungseong u */
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

	K3_Semoe_2017_sublayout = [
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
		0x11B6,	/* 0x61 a: jongseong lieul-hieuh */
		0x1172,	/* 0x62 b: jungseong yu */
		0x1168,	/* 0x63 c: jungseong ye */
		0x0000,	/* 0x64 d */
		0x11BD,	/* 0x65 e: jongseong jieuj */
		0x0000,	/* 0x66 f */
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
		0x11BE,	/* 0x71 q: jongseong chieuch */
		0x1163,	/* 0x72 r: jongseong ya */
		0x11C2,	/* 0x73 s: jongseong hieuh */
		0x1164,	/* 0x74 t: jungseong yae */
		0x0000,	/* 0x75 u */
		0x116D,	/* 0x76 v: jungseong yo */
		0x11C1,	/* 0x77 w: jongseong pieup */
		0x11BF,	/* 0x78 x: jongseong kieuk */
		0x0000,	/* 0x79 y */
		0x11AE,	/* 0x7A z: jongseong dieud */
		0x0000,	/* 0x7B braceleft */
		0x0000,	/* 0x7C bar */
		0x0000,	/* 0x7D braceright */
		0x0000	/* 0x7E asciitilde */
	];	

} // input_additional_keyboard_layout_info()


function input_additional_combination_table_info() {

	K3_Oesol_Typewriter_combination_table = [
		[0x11001100,0x1101], /* choseong gieug + gieug = ssanggieug */
		[0x11031103,0x1104], /* choseong dieud + dieud = ssangdieud */
		[0x11071107,0x1108], /* choseong bieup + bieup = ssangbieup */
		[0x11091109,0x110A], /* choseong sieus + sieus = ssangsieus */
		[0x110C110C,0x110D], /* choseong jieuj + jieuj = ssangjieuj */
		[0x11691161,0x116A], /* jungseong o  + a  = wa */
		[0x11691162,0x116B], /* jungseong o  + ae = wae */
		[0x11691175,0x116C], /* jungseong o  + i  = oe */
		[0x116E1165,0x116F], /* jungseong u  + eo = weo */
		[0x116E1166,0x1170], /* jungseong u  + e  = we */
		[0x116E1175,0x1171], /* jungseong u  + i  = wi */
		[0x11731175,0x1174]  /* jungseong eu + i  = eui */
	];

	GimGug_38A_combination_table = hangeul_combination_table_default.concat([
		[0x11611175,0x1162], /* jungseong a + i = ae */
		[0x11631175,0x1164], /* jungseong ya + i = yae */
		[0x11651175,0x1166], /* jungseong eo + i = e */
		[0x11671175,0x1168], /* jungseong yeo + i = ye */
		[0x116A1175,0x116B], /* jungseong wa + i = wae */
		[0x116F1175,0x1170], /* jungseong weo + i  = we */
	]);

	GimGug_38Ay_combination_table = hangeul_combination_table_full.concat([
		[0x110C113C,0x114E], /* jieuj + ap-sieus = ap-jieuj */
		[0x110C113E,0x1150], /* jieuj + dwit-sieus = dwit-jieuj */
		[0x110D113C,0x114F], /* ssang-jieuj + ap-sieus = ssang-ap-jieuj */
		[0x110D113E,0x1151], /* ssang-jieuj + dwit-sieus = ssang-dwit-jieuj */
		[0x110E113C,0x1154], /* chieuch + ap-sieus = ap-chieuch */
		[0x110E113E,0x1155], /* chieuch + dwit-sieus = dwit-chieuch */
		[0x11991175,0xD7BE], /* i-ya + i = i-yae */
		[0xD7BF1175,0xD7C0], /* i-yeo + i = i-ye */
		[0xD7BA1175,0xD7BB], /* eu-eo + i = eu-e */
		[0x117F1175,0x1180], /* o-eo + i = o-e */
		[0x11A61175,0x11A7], /* o-ya + i = o-yae */
		[0xD7B21175,0xD7B3], /* yo-a + i = yo-ae */
		[0x11841175,0x1185], /* yo-ya + i = yo-yae */
		[0x11891175,0x118A], /* u-a + i = u-ae */
		[0xD7B51175,0x118C], /* u-yeo + i = u-ye */
		[0x118F1175,0x1190], /* yu-eo + i = yu-e */
		[0x118E1175,0xD7B7], /* yu-a + i = yu-ae */
		[0x119F1175,0xD7C6], /* araea-eo + i = aeara-e */
	]);

	K3_additional_fortis_combination_table = [	// 3-2015 자판의 된소리 추가 조합
		[0x1100110B,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x110B1100,0x1101], /* choseong ieung + gieug = ssanggieug */
		[0x11031106,0x1104], /* choseong dieud + mieum = ssangdieud */
		[0x11061103,0x1104], /* choseong mieum + dieud = ssangdieud */
		[0x1107110C,0x1108], /* choseong bieub + jieuj = ssangbieub */
		[0x110C1107,0x1108], /* choseong jieuj + bieub = ssangbieub */
		[0x11091112,0x110A], /* choseong sieus + hieuh = ssangsieus */
		[0x11121109,0x110A], /* choseong hieuh + sieus = ssangsieus */
		[0x110C1100,0x110D], /* choseong jieuj + gieug = ssangjieuj */
		[0x1100110C,0x110D]  /* choseong gieug + jieuj = ssangjieuj */
	];
		
	K3_reverse_compound_sound_combination_table = [ // 겹받침 거꿀차례 조합		
		[0x11A811b7,0x11A9], /* jongseong gieug + mieum = ssanggieug */
		[0x11B711A8,0x11A9], /* jongseong gieug + mieum = ssanggieug */
		[0x11BA11A8,0x11AA], /* jongseong sieus + gieug = gieug-sieus */
		[0x11BD11AB,0x11AC], /* jongseong jieuj + nieun = jieun-cieuj */
		[0x11C211AB,0x11AD], /* jongseong hieuh + nieun = nieun-hieuh */
		[0x11A811AF,0x11B0], /* jongseong gieug + lieul = lieul-gieug */
		[0x11B711AF,0x11B1], /* jongseong mieum + lieul = lieul-mieum */
		[0x11B811AF,0x11B2], /* jongseong bieub + lieul = lieul-bieub */
		[0x11BA11AF,0x11B3], /* jongseong sieus + lieul = lieul-sieus */
		[0x11C011AF,0x11B4], /* jongseong tieut + lieul = lieul-tieut */
		[0x11C111AF,0x11B5], /* jongseong pieup + lieul = lieul-pieup */
		[0x11C211AF,0x11B6], /* jongseong hieuh + lieul = lieul-hieuh */
		[0x11BA11B8,0x11B9]  /* jongseong sieus + bieub = bieub-sieus */
	];

	K3_2015_combination_table = hangeul_combination_table_default.slice(0);
	K3_2015_additional_combination_table = K3_additional_fortis_combination_table.concat(K3_reverse_compound_sound_combination_table);

	K3_2015y_combination_table = hangeul_combination_table_full.slice(0);
	K3_2015y_combination_table.unshift(
		[0x11BC11A8,0x11EC], /* jongseong ieung + gieug = yesieung-gieug */
		[0x11BC11A9,0x11ED], /* jongseong ieung + ssanggieug = yesieung-ssanggieug */
		[0x11BC11B7,0xD7F5], /* jongseong ieung + mieum = yesieung-mieum */
		[0x11BC11BA,0x11F1], /* jongseong ieung + sieus = yesieung-sieus */
		[0x11BC11BC,0x11EE], /* jongseong ieung + ieung = ssangyesieung */
		[0x11BC11BF,0x11EF], /* jongseong ieung + kieuk = yesieung-kieuk */
		[0x11BC11C2,0xD7F6], /* jongseong ieung + hieuh = yesieung-hieuh */
		[0x11BC11EB,0x11F2], /* jongseong ieung + yeolinsieus = yesieung-yeolinsieus */
		[0x11BC11F0,0x11EE], /* jongseong ieung + yesieung = ssangyesieung */
		[0x11F011BC,0x11EE]  /* jongseong yesieung + ieung = ssangyesieung */
	);	

	K3_Sin3_2015_combination_table = hangeul_combination_table_default.concat(K3_2015_additional_combination_table);
	
	K3_Sin3_P_extended_combination_table = hangeul_combination_table_full.slice(0);
	K3_Sin3_P_extended_combination_table.unshift(
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
	
	K3_2015M_combination_table = hangeul_combination_table_default.slice(0);
	// K3_2015M_combination_table.unshift(K3_2015_additional_compound_sound_combination_table);
	K3_2015M_combination_table.unshift(
		[0x11651165,0x1164], /* jungseong eo + eo = yae */
		[0x11621165,0x1164]  /* jungseong ae + eo = yae */
	);

	K3_Semoe_2014_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116B}, /* jungseong o + a + i = wae */
		{phonemes: [0x110B,0x1100], char: 0x1101}, /* choseong ieung + gieug = ssanggieug */
		{phonemes: [0x110B,0x1103], char: 0x1104}, /* choseong ieung + dieud = ssangdieud */
		{phonemes: [0x110B,0x1106], char: 0x1104}, /* choseong mieum + ieung = ssangdieud */
		{phonemes: [0x110B,0x1107], char: 0x1108}, /* choseong ieung + bieub = ssangbieub */
		{phonemes: [0x110B,0x1109], char: 0x110A}, /* choseong ieung + sieus = ssangsieus */
		{phonemes: [0x110B,0x110C], char: 0x110D}, /* choseong ieung + jieuj = ssangjieuj */
		{phonemes: [0x1112,0x1100], char: 0x110F}, /* choseong hieuh + gieug = kieuk */
		{phonemes: [0x1112,0x1103], char: 0x1110}, /* choseong hieuh + dieud = tieut */
		{phonemes: [0x1112,0x1107], char: 0x1111}, /* choseong hieuh + bieub = pieup */
		{phonemes: [0x1112,0x1109], char: 0x110E}, /* choseong hieuh + sieus = chieuch */
		{phonemes: [0x1112,0x110C], char: 0x110E}, /* choseong hieuh + jieuj = chieuch */
		{phonemes: [0x1161,0x1175], char: 0x1162}, /* jungseong a   + i   = ae */
		{phonemes: [0x1161,0x1165], char: 0x116D}, /* jungseong a   + eo  = yo */
		{phonemes: [0x1161,0x1166], char: 0x1163}, /* jungseong a   + e   = ya */
		{phonemes: [0x1161,0x116E], char: 0x1172}, /* jungseong a   + u   = yu */
		{phonemes: [0x1165,0x1161], char: 0x116D}, /* jungseong eo  + a   = yo */
		{phonemes: [0x1165,0x1167], char: 0x1164}, /* jungseong eo  + yeo = yae */
		{phonemes: [0x1166,0x1175], char: 0x1168}, /* jungseong e   + i   = ye */
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1161], char: 0x116A}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1169], char: 0x116D}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116E], char: 0x116D}, /* jungseong o   + u   = yo */
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x116E,0x1165], char: 0x116F}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116E,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116E,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x1175,0x119E], char: 0x11A1}, /* jungseong i   + araea = araeae */
		{phonemes: [0x11A8,0x11BA], char: 0x11AA}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11AB,0x11AB], char: 0x11AD}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11AB,0x11AF], char: 0x11AC}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11AB,0x11BB], char: 0x11AD}, /* jongseong nieun + ssangsieus = nieun-hieuh */
		{phonemes: [0x11AB,0x11B7], char: 0x11C0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11AB,0x11C2], char: 0x11AD}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11AE,0x11AF], char: 0x11B4}, /* jongseong dieud + lieul = lieul-tieut */
		{phonemes: [0x11AE,0x11B8], char: 0x11B5}, /* jongseong dieud + bieub = lieul-pieup */
		{phonemes: [0x11AE,0x11BB], char: 0x11C0}, /* jongseong dieud + ssangsieus = tikeut */
		{phonemes: [0x11AE,0x11C2], char: 0x11C0}, /* jongseong dieud + hieuh = tieut */
		{phonemes: [0x11AF,0x11A8], char: 0x11B0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11AF,0x11B7], char: 0x11B1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11AF,0x11B8], char: 0x11B5}, /* jongseong lieul + bieub = lieul-pieup */
		{phonemes: [0x11AF,0x11BA], char: 0x11B9}, /* jongseong lieul + sieus = bieub-sieus */
		{phonemes: [0x11AF,0x11BC], char: 0x11B2}, /* jongseong lieul + ieung = lieul-bieub */
		{phonemes: [0x11B7,0x11A8], char: 0x11B0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11B7,0x11BB], char: 0x11AE}, /* jongseong mieum + ssangsieus = dieud */
		{phonemes: [0x11B7,0x11C2], char: 0x11B4}, /* jongseong mieum + hieuh = lieul-tieut */
		{phonemes: [0x11B8,0x11BA], char: 0x11B9}, /* jongseong bieub + sieus = bieub-sieus */
		{phonemes: [0x11B8,0x11C2], char: 0x11C1}, /* jongseong bieub + hieuh = pieup */
		{phonemes: [0x11B9,0x11BB], char: 0x11B3}, /* jongseong bieub-sieus + ssangsieus = lieul-sieus */
		{phonemes: [0x11BA,0x11BB], char: 0x11BE}, /* jongseong sieus + ssangsieus = chieuch */
		{phonemes: [0x11BA,0x11BC], char: 0x11BB}, /* jongseong sieus + ieung = ssangsieus */
		{phonemes: [0x11BA,0x11C2], char: 0x11B3}, /* jongseong sieus + hieuh = lieul-sieus */
		{phonemes: [0x11BB,0x11A8], char: 0x11BF}, /* jongseong ssangsieus + gieug = kieuk */
		{phonemes: [0x11BB,0x11AB], char: 0x11C2}, /* jongseong ssangsieus + nieun = hieuh */
		{phonemes: [0x11BB,0x11AF], char: 0x11BD}, /* jongseong ssangsieus + lieul = jieuj */
		{phonemes: [0x11BB,0x11B7], char: 0x11AE}, /* jongseong ssangsieus + mieum = dieud */
		{phonemes: [0x11BB,0x11B8], char: 0x11C1}, /* jongseong ssangsieus + bieub = pieup */
		{phonemes: [0x11BB,0x11BA], char: 0x11BE}, /* jongseong ssangsieus + sieus = chieuch */
		{phonemes: [0x11BB,0x11BC], char: 0x11B8}, /* jongseong ssangsieus + ieung = bieub */
		{phonemes: [0x11BB,0x11C2], char: 0x11B6}, /* jongseong ssangsieus + hieuh = lieul-hieuh */
		{phonemes: [0x11BC,0x11A8], char: 0x11A9}, /* jongseong ieung + gieug = ssangegieug */
		{phonemes: [0x11BC,0x11AB], char: 0x11C1}, /* jongseong ieung + nieun = pieup */
		{phonemes: [0x11BC,0x11B7], char: 0x11B4}, /* jongseong ieung + mieum = lieul-tikeut */
		{phonemes: [0x11BC,0x11B8], char: 0x11B5}, /* jongseong ieung + bieub = lieul-pieup */
		{phonemes: [0x11BC,0x11BA], char: 0x11BB}, /* jongseong ieung + sieus = ssangsieus */
		{phonemes: [0x11BC,0x11BB], char: 0x11B6}, /* jongseong ieung + ssangsieus = lieul-hieuh */
		{phonemes: [0x11BC,0x11C2], char: 0x11B5}, /* jongseong ieung + hieuh = lieul-pieup */
		{phonemes: [0x11C2,0x11A8], char: 0x11BF}, /* jongseong hieuh + gieug = kieuk */
		{phonemes: [0x11C2,0x11AE], char: 0x11C0}, /* jongseong hieuh + dieud = tieut */
		{phonemes: [0x11C2,0x11B8], char: 0x11C1}  /* jongseong hieuh + bieub = pieup */
	];

	K3_Semoe_2015_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116A}, /* jungseong o + a + i = wae */
		{phonemes: [0x116E,0x1165,0x1175], char: 0x1170}, /* jungseong u + eo + i = we */
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
		{phonemes: [0x1165,0x1167], char: 0x1164}, /* jungseong eo  + yeo = yae */
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1161], char: 0x116A}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1165], char: 0x1163}, /* jungseong o   + eo  = ya */
		{phonemes: [0x1169,0x1169], char: 0x116D}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116E], char: 0x1172}, /* jungseong o   + u   = yu */
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x116E,0x1165], char: 0x116F}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116E,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116E,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x119E,0x119E], char: 0x11A2}, /* jungseong araea + araea = ssangaraea */
		{phonemes: [0x11A8,0x11BA], char: 0x11AA}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11AB,0x11AB], char: 0x11AD}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11AB,0x11AF], char: 0x11AC}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11AB,0x11B7], char: 0x11C0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11AB,0x11C2], char: 0x11AD}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11AF,0x11A8], char: 0x11B0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11AF,0x11B7], char: 0x11B1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11AF,0x11B8], char: 0x11B2}, /* jongseong lieul + bieub = lieul-bieub */
		{phonemes: [0x11AF,0x11BA], char: 0x11B3}, /* jongseong lieul + sieus = lieul-sieus */
		{phonemes: [0x11B7,0x11A8], char: 0x11B0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11B8,0x11BA], char: 0x11B9}, /* jongseong bieub + sieus = bieub-sieus */
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
	];
	
	K3_Semoe_2016_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116B}, /* jungseong o + a + i = wae */
		{phonemes: [0x11A8,0x11B7,0x11BB], char: 0x11AA}, /* jongseong gieug + mieum + ssangsieus = gieug-sieus */
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
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1161], char: 0x116A}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1165], char: 0x1163}, /* jungseong o   + eo  = ya */
		{phonemes: [0x1169,0x1169], char: 0x116D}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116E], char: 0x1172}, /* jungseong o   + u   = yu */
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x116E,0x1165], char: 0x116F}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116E,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116E,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x11A8,0x11BA], char: 0x11AA}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11AB,0x11AB], char: 0x11AD}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11AB,0x11AF], char: 0x11AC}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11AB,0x11B7], char: 0x11C0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11AB,0x11C2], char: 0x11AD}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11AF,0x11A8], char: 0x11B0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11AF,0x11B7], char: 0x11B1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11AF,0x11B8], char: 0x11B2}, /* jongseong lieul + bieub = lieul-bieub */
		{phonemes: [0x11AF,0x11BA], char: 0x11B3}, /* jongseong lieul + sieus = lieul-sieus */
		{phonemes: [0x11AF,0x11BC], char: 0x11A8}, /* jongseong lieul + ieung = gieug */
		{phonemes: [0x11B7,0x11A8], char: 0x11B0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11B8,0x11BA], char: 0x11B9}, /* jongseong bieub + sieus = bieub-sieus */
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
	];	

	K3_Semoe_2017_combination_table = [
		{phonemes: [0x1169,0x1161,0x1175], char: 0x116B}, /* jungseong o + a + i = wae */
		{phonemes: [0x11A8,0x11B7,0x11BB], char: 0x11AA}, /* jongseong gieug + mieum + ssangsieus = gieug-sieus */
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
		{phonemes: [0x1169,0x1175], char: 0x116C}, /* jungseong o   + i   = oe */
		{phonemes: [0x1169,0x1161], char: 0x116A}, /* jungseong o   + a   = wa */
		{phonemes: [0x1169,0x1166], char: 0x1168}, /* jungseong o   + e   = ye */
		{phonemes: [0x1169,0x1165], char: 0x1163}, /* jungseong o   + eo  = ya */
		{phonemes: [0x1169,0x1169], char: 0x116D}, /* jungseong o   + o   = yo */
		{phonemes: [0x1169,0x116E], char: 0x1172}, /* jungseong o   + u   = yu */
		{phonemes: [0x116A,0x1175], char: 0x116B}, /* jungseong wa  + i   = wae */
		{phonemes: [0x1169,0x1167], char: 0x1164}, /* jungseong o   + yeo = yae */
		{phonemes: [0x116F,0x1175], char: 0x1170}, /* jungseong weo + i   = we */
		{phonemes: [0x116E,0x1165], char: 0x116F}, /* jungseong u   + eo  = weo */
		{phonemes: [0x116E,0x1166], char: 0x1170}, /* jungseong u   + e   = we */
		{phonemes: [0x116E,0x1175], char: 0x1171}, /* jungseong u   + i   = wi */
		{phonemes: [0x1173,0x1175], char: 0x1174}, /* jungseong eu  + i   = eui */
		{phonemes: [0x11A8,0x11BA], char: 0x11AA}, /* jongseong gieug + sieus = gieug-sieus */
		{phonemes: [0x11AB,0x11AB], char: 0x11AD}, /* jongseong nieun + nieun = nieun-hieuh */
		{phonemes: [0x11AB,0x11AF], char: 0x11AC}, /* jongseong nieun + lieul = nieun-jieuj */
		{phonemes: [0x11AB,0x11B7], char: 0x11C0}, /* jongseong nieun + mieum = tieut */
		{phonemes: [0x11AB,0x11C2], char: 0x11AD}, /* jongseong nieun + hieuh = nieun-hieuh */
		{phonemes: [0x11AF,0x11A8], char: 0x11B0}, /* jongseong lieul + gieug = lieul-gieug */
		{phonemes: [0x11AF,0x11B7], char: 0x11B1}, /* jongseong lieul + mieum = lieul-mieum */
		{phonemes: [0x11AF,0x11B8], char: 0x11B2}, /* jongseong lieul + bieub = lieul-bieub */
		{phonemes: [0x11AF,0x11BA], char: 0x11B3}, /* jongseong lieul + sieus = lieul-sieus */
		{phonemes: [0x11AF,0x11BC], char: 0x11A8}, /* jongseong lieul + ieung = gieug */
		{phonemes: [0x11B7,0x11A8], char: 0x11B0}, /* jongseong mieum + gieug = lieul-gieug */
		{phonemes: [0x11B8,0x11BA], char: 0x11B9}, /* jongseong bieub + sieus = bieub-sieus */
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
	];

	K3_Semoe_2017_moachigi_multikey_abbreviation_table = [
		{keys: ['J','K'], chars: [-1]}, /* 기호 확장 상태 ① */
		{keys: ['J','L'], chars: [-2]}, /* 기호 확장 상태 ② */
		{keys: ['J',':'], chars: [-3]}, /* 기호 확장 상태 ③ */
		{keys: ['k','u'], chars: [0xADF8,0xB7EC,0xB098]}, /* 그러나 */
		{keys: ['u','w'], chars: [0x11B8,0xB2C8,0xB2E4]}, /* ㅂ니다 */
		{keys: [',','u','w'], chars: [0x11B8,0xB2C8,0xB2E4,0x2E,0x20]}, /* ㅂ니다. */
		{keys: ['j','w'], chars: [0xC785,0xB2E4,0x2E,0x20]}, /* 입니다. */
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
		{keys: ['f','k','p'], chars: [0xAD6C,0xB098]}, /* 구나 */
		{keys: ['b','f','k','x'], chars: [0xAD6D,0xB0B4]}, /* 국내 */
		{keys: ['f','k','p','x'], chars: [0xAD6D,0xB0B4]}, /* 국내 */
		{keys: ['g','k','v'], chars: [0xADF8,0xACF3]}, /* 그곳 */
		{keys: ['.','g','k'], chars: [0xADF8,0xACF3]}, /* 그곳 */
		{keys: ['c','k','t'], chars: [0xACBD,0xACC4]}, /* 경계 */
		{keys: ['c','d','k'], chars: [0xAE30,0xACC4]}, /* 기계 */
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
		{keys: ['j','k','p','t'], chars: [0xC5F0,0xAD6C]}, /* 연구 */
		{keys: ['b','e','j','k','t'], chars: [0xACA8,0xC6B8]}, /* 겨울 */
		{keys: ['e','j','k','p','t'], chars: [0xACA8,0xC6B8]}, /* 겨울 */
		{keys: ['g','j','k','t'], chars: [0xC5F0,0xADF9]}, /* 연극 */
		{keys: ['g','j','k','s','t'], chars: [0xC758,0xACAC]}, /* 의견 */
		{keys: ['b','f','j','k'], chars: [0xC694,0xAD6C]}, /* 요구 */
		{keys: ['f','j','k','p'], chars: [0xC694,0xAD6C]}, /* 요구 */
		{keys: ['b','e','f','j','k'], chars: [0xAC1C,0xC6D4]}, /* 개월 */
		{keys: ['e','f','j','k','p'], chars: [0xAC1C,0xC6D4]}, /* 개월 */
		{keys: ['c','j','k','r'], chars: [0xAED8,0xC11C,0x20]}, /* 께서  */
		{keys: ['c','d','j','k','z'], chars: [0xAC8C,0xC784]}, /* 게임 */
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
		{keys: ['k','l','p','r'], chars: [0xC804,0xAD6D]}, /* 전국 */
		{keys: ['b','k','l','s'], chars: [0xAE30,0xC900]}, /* 기준 */
		{keys: ['b','k','l','r','s'], chars: [0xC815,0xAD8C]}, /* 정권 */
		{keys: ['k','l','p','r','s'], chars: [0xC815,0xAD8C]}, /* 정권 */
		{keys: ['b','c','k','l','x'], chars: [0xAD6D,0xC81C]}, /* 국제 */
		{keys: ['c','k','l','p','x'], chars: [0xAD6D,0xC81C]}, /* 국제 */
		{keys: ['d','k','l','v','x'], chars: [0xADC0,0xC871]}, /* 귀족 */
		{keys: ['.','d','k','l','x'], chars: [0xADC0,0xC871]}, /* 귀족 */
		{keys: ['b','k','l','v'], chars: [0xADDC,0xC815]}, /* 규정 */
		{keys: ['k','l','p','v'], chars: [0xADDC,0xC815]}, /* 규정 */
		{keys: ['.','b','k','l'], chars: [0xADDC,0xC815]}, /* 규정 */
		{keys: ['d','g','k','l'], chars: [0xADF8,0xB807,0xC9C0]}, /* 그렇지 */
		{keys: ['g','k','l','s'], chars: [0xADFC,0xCC98]}, /* 근처 */
		{keys: ['g','k','l','z'], chars: [0xC790,0xAE08]}, /* 자금 */
		{keys: ['d','k','l'], chars: [0xAE4C,0xC9C0,0x20]}, /* 까지 */
		{keys: ['c','f','k','l'], chars: [0xACFC,0xC81C]}, /* 과제 */
		/* 첫소리 ㄴ 조합 */
		{keys: ['e','u'], chars: [0xADF8,0xB0A0]}, /* 그날 */
		{keys: ['u','z'], chars: [0xB0A8,0xC131]}, /* 남성 */
		{keys: ['b','f','u'], chars: [0xB204,0xB098]}, /* 누나 */
		{keys: ['f','p','u'], chars: [0xB204,0xB098]}, /* 누나 */
		{keys: ['g','r','u'], chars: [0xB290,0xB0D0,0x3F,0x20]}, /* 느냐?  */
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
		{keys: ['f','i','p'], chars: [0xBB34,0xB300]}, /* 무대 */
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
		{keys: ['f','i','m'], chars: [0xB530,0xB77C,0x20]}, /* 따라  */
		{keys: ['e','f','i','m'], chars: [0xB2EC,0xB77C]}, /* 달라 */
		{keys: ['d','f','i','m'], chars: [0xB300,0xB85C,0x20]}, /* 대로  */
		{keys: ['i','m','r'], chars: [0xB530,0xB77C,0xC11C,0x20]}, /* 따라서 */
		{keys: ['c','i','m'], chars: [0xD154,0xB808,0xBE44,0xC804]}, /* 텔레비전 */
		{keys: ['i','m','v'], chars: [0xB77C,0xB3C4,0x20]}, /* 라도  */
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
		{keys: ['f','i','l','p'], chars: [0xD22C,0xC790]}, /* 투자 */
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
		{keys: ['g','k','m','p'], chars: [0xAD6C,0xB984]}, /* 구름 */
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
		{keys: ['b','m','y'], chars: [0xC544,0xBB34,0xB7F0,0x20]}, /* 아무런  */
		{keys: ['b','e','m','y'], chars: [0xBB3C,0xB9AC]}, /* 물리 */
		{keys: ['b','d','m','y'], chars: [0xBB34,0xB9AC]}, /* 무리 */
		{keys: ['d','m','p','y'], chars: [0xBB34,0xB9AC]}, /* 무리 */
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
		{keys: ['f','p','y'], chars: [0xB9E4,0xC6B0,0x20]}, /* 매우  */
		{keys: ['g','v','y'], chars: [0xBAA8,0xB4E0,0x20]}, /* 모든  */
		{keys: ['.','g','y'], chars: [0xBAA8,0xB4E0,0x20]}, /* 모든  */
		{keys: ['c','d','y'], chars: [0xBA54,0xC77C]}, /* 메일 */
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
		{keys: ['l','p','r','s','y'], chars: [0xC804,0xBB38]}, /* 전문 */
		{keys: ['d','l','y'], chars: [0xB9C8,0xCE58,0x20]}, /* 마치  */
		{keys: ['d','l','s','y'], chars: [0xBBFC,0xC8FC]}, /* 민주 */
		{keys: ['d','e','l','y'], chars: [0xC9C8,0xBB38]}, /* 질문 */
		{keys: ['a','b','l','y'], chars: [0xBBFC,0xC911]}, /* 민중 */
		{keys: ['e','u','y'], chars: [0xB208,0xBB3C]}, /* 눈물 */
		{keys: ['a','u','y'], chars: [0xB18D,0xBBFC]}, /* 농민 */
		{keys: ['b','f','u','y'], chars: [0xB098,0xBB34]}, /* 나무 */
		{keys: ['f','p','u','y'], chars: [0xB098,0xBB34]}, /* 나무 */
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
		{keys: ['f','j','o','p'], chars: [0xBC30,0xC6B0]}, /* 배우 */
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
		{keys: ['f','l','o','p'], chars: [0xBD80,0xC790]}, /* 부자 */
		{keys: ['b','l','o','r'], chars: [0xBD80,0xC815]}, /* 부정 */
		{keys: ['l','o','p','r'], chars: [0xBD80,0xC815]}, /* 부정 */
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
		{keys: ['f','n','p'], chars: [0xC218,0xC0AC]}, /* 수사 */
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
		{keys: ['f','k','n','r'], chars: [0xAD50,0xC218]}, /* 교수 */
		{keys: ['.','k','n','v'], chars: [0xAD50,0xC218]}, /* 교수 */
		{keys: ['a','b','k','n'], chars: [0xAD6C,0xC131]}, /* 구성 */
		{keys: ['f','k','n','r'], chars: [0xAD50,0xC0AC]}, /* 교사 */
		{keys: ['.','k','n','v'], chars: [0xAD50,0xC0AC]}, /* 교사 */
		{keys: ['b','k','n','s'], chars: [0xC21C,0xAC04]}, /* 순간 */
		{keys: ['b','k','n','v'], chars: [0xC218,0xACE0]}, /* 수고 */
		{keys: ['k','n','p','v'], chars: [0xC218,0xACE0]}, /* 수고 */
		{keys: ['.','b','k','n'], chars: [0xC218,0xACE0]}, /* 수고 */
		{keys: ['g','k','n'], chars: [0xC4F0,0xB808,0xAE30]}, /* 쓰레기 */
		{keys: ['e','g','k','n'], chars: [0xAE00,0xC384]}, /* 글쎄 */
		{keys: ['g','k','n','z'], chars: [0xAC00,0xC2B4]}, /* 가슴 */
		{keys: ['c','d','k','n'], chars: [0xC138,0xAE30]}, /* 세기 */
		{keys: ['d','k','n','s'], chars: [0xC2E0,0xACBD]}, /* 신경 */
		{keys: ['d','k','n','z'], chars: [0xC2EC,0xAC01]}, /* 심각 */
		{keys: ['c','k','n','r'], chars: [0xC5D0,0xAC8C,0xC11C,0x20]}, /* 에게서  */
		{keys: ['c','k','n','v'], chars: [0xC2DC,0xACC4]}, /* 시계 */
		{keys: ['.','c','k','n'], chars: [0xC2DC,0xACC4]}, /* 시계 */
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
		{keys: ['.','b','n','u'], chars: [0xB274,0xC2A4]}, /* 뉴스 */
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
		{keys: ['d','m','n','p'], chars: [0xC218,0xB9AC]}, /* 수리 */
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
		{keys: ['b','d','n','y'], chars: [0xBB34,0xC2DC]}, /* 무시 */
		{keys: ['d','n','p','y'], chars: [0xBB34,0xC2DC]}, /* 무시 */
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
		{keys: ['f','j','n','p','z'], chars: [0xC2F8,0xC6C0]}, /* 싸움 */
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
		{keys: ['j','p','t'], chars: [0xC601,0xAD6D]}, /* 영국 */
		{keys: ['b','s','t','y'], chars: [0xC6B4,0xBA85]}, /* 운명 */
		{keys: ['p','s','t','y'], chars: [0xC6B4,0xBA85]}, /* 운명 */
		{keys: ['g','j','t'], chars: [0xC73C,0xBA70,0x20]}, /* 으며  */
		{keys: ['g','j','s','t'], chars: [0xC73C,0xBA74,0x20]}, /* 으면  */
		{keys: ['b','f','j'], chars: [0xC544,0xBB34]}, /* 아무 */
		{keys: ['f','j','p'], chars: [0xC544,0xBB34]}, /* 아무 */
		{keys: ['c','g','j'], chars: [0xC740,0xD61C]}, /* 은혜 */
		{keys: ['c','f','j'], chars: [0xC5D0,0xC694,0x2E,0x20]}, /* 에요.  */
		{keys: ['c','j','r'], chars: [0xC608,0xC694,0x2E,0x20]}, /* 예요.  */
		{keys: ['c','d','j','l'], chars: [0xC774,0xC81C]}, /* 이제 */
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
		{keys: ['j','m','p','r','s'], chars: [0xC6D0,0xB9AC]}, /* 원리 */
		{keys: ['b','j','m','v'], chars: [0xC778,0xB958]}, /* 인류 */
		{keys: ['g','j','m'], chars: [0xC73C,0xB85C,0x20]}, /* 으로  */
		{keys: ['g','j','m','s'], chars: [0xC5BC,0xB978,0x20]}, /* 얼른  */
		{keys: ['f','g','j','m'], chars: [0xC544,0xB984]}, /* 아름 */
		{keys: ['b','f','m'], chars: [0xC544,0xBB34,0xB9AC,0x20]}, /* 아무리  */
		{keys: ['f','m','p'], chars: [0xC544,0xBB34,0xB9AC,0x20]}, /* 아무리  */
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
		{keys: ['h','j','t'], chars: [0xC5EC,0xC804,0xD788]}, /* 여전히 */
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
		{keys: ['h','j','p','r','s'], chars: [0xC6D0,0xD55C]}, /* 원한 */
		{keys: ['b','d','h','j','s'], chars: [0xC704,0xC6D0,0xD68C]}, /* 위원회 */
		{keys: ['d','h','j','p','s'], chars: [0xC704,0xC6D0,0xD68C]}, /* 위원회 */
		{keys: ['b','h','j','v'], chars: [0xC624,0xD6C4]}, /* 오후 */
		{keys: ['.','b','h','j'], chars: [0xC624,0xD6C4]}, /* 오후 */
		{keys: ['h','j','p','v'], chars: [0xC624,0xD6C4]}, /* 오후 */
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
		{keys: ['f','l','p'], chars: [0xC790,0xC8FC]}, /* 자주 */
		{keys: ['a','b','f','l'], chars: [0xC8FC,0xC7A5]}, /* 주장 */
		{keys: ['a','f','l','p'], chars: [0xC8FC,0xC7A5]}, /* 주장 */
		{keys: ['c','f','l'], chars: [0xC790,0xCCB4]}, /* 자체 */
		{keys: ['c','l','r'], chars: [0xC804,0xCCB4]}, /* 전체 */
		{keys: ['c','d','l'], chars: [0xC9C0,0xD61C]}, /* 지혜 */
		{keys: ['j','l','x'], chars: [0xC9C0,0xC5ED]}, /* 지역 */
		{keys: ['a','j','l','x'], chars: [0xC791,0xC6A9]}, /* 작용 */
		{keys: ['j','l','s'], chars: [0xC790,0xC5F0]}, /* 자연 */
		{keys: ['a','j','l','s'], chars: [0xC778,0xC815]}, /* 인정 */
		{keys: ['e','j','l'], chars: [0xC81C,0xC77C]}, /* 제일 */
		{keys: ['j','l','x','z'], chars: [0xC8FD,0xC74C]}, /* 죽음 */
		{keys: ['a','j','l','w'], chars: [0xC785,0xC7A5]}, /* 입장 */
		{keys: ['j','l','z'], chars: [0xC544,0xCE68]}, /* 아침 */
		{keys: ['j','l','w'], chars: [0xC791,0xC5C5]}, /* 작업 */
		{keys: ['a','j','l'], chars: [0xC911,0xC694]}, /* 중요 */
		{keys: [';','e','j','l'], chars: [0xCC3E,0xC544]}, /* 찾아 */
		{keys: ['b','f','j','l'], chars: [0xC544,0xC8FC,0x20]}, /* 아주  */
		{keys: ['f','j','l','p'], chars: [0xC544,0xC8FC,0x20]}, /* 아주  */
		{keys: ['a','b','f','j','l'], chars: [0xC911,0xC559]}, /* 중앙 */
		{keys: ['a','f','j','l','p'], chars: [0xC911,0xC559]}, /* 중앙 */
		{keys: ['b','g','j','l'], chars: [0xC8FC,0xC758]}, /* 주의 */
		{keys: ['g','j','l','p'], chars: [0xC8FC,0xC758]}, /* 주의 */
		{keys: ['b','g','j','l'], chars: [0xC8FC,0xC758]}, /* 주의 */
		{keys: ['g','j','l','p'], chars: [0xC8FC,0xC758]}, /* 주의 */
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
		{keys: ['c','d','h','k'], chars: [0xCF00,0xC774]}, /* 케이 */
		{keys: ['c','d','h','k','x'], chars: [0xACC4,0xD68D]}, /* 계획 */
		{keys: ['h','k','r','t'], chars: [0xACBD,0xD5A5]}, /* 경향 */
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
		{keys: ['a','f','j','l','p','s'], chars: [0xC704,0xC6D0,0xC7A5]}, /* 위원장 */
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
		{keys: ['c','d','e','j','l'], chars: [0xC81C,0xC77C]}, /* 제일 */
		{keys: ['e','h','k'], chars: [0xACB0,0xCF54,0x20]}, /* 결코  */
		{keys: ['b','d','k','l'], chars: [0xC9C0,0xAD6C]}, /* 지구 */
		{keys: ['d','k','l','p'], chars: [0xC9C0,0xAD6C]}, /* 지구 */
		{keys: ['f','n','o','v'], chars: [0xC18C,0xBE44,0xC790]}, /* 소비자 */
		{keys: ['.','f','n','o'], chars: [0xC18C,0xBE44,0xC790]}, /* 소비자 */
		{keys: ['a','f','i','u'], chars: [0xB178,0xB3D9,0xC790]}, /* 노동자 */
		{keys: ['b','d','h','j'], chars: [0xC704,0xCE58]}, /* 위치 */
		{keys: ['d','h','j','p'], chars: [0xC704,0xCE58]}, /* 위치 */
		{keys: ['j','q'], chars: [0xC774,0xC6C3]}, /* 이웃 */
		{keys: ['f','k','l','s'], chars: [0xAD00,0xACC4,0xC790]}, /* 관계자 */
		{keys: ['d','k','l','v'], chars: [0xCD08,0xAE30]}, /* 초기 */
		{keys: ['.','d','k','l'], chars: [0xCD08,0xAE30]}, /* 초기 */
		{keys: ['a','h','k'], chars: [0xACE0,0xD5A5]}, /* 고향 */
		{keys: [';','s','u'], chars: [0xB0B4,0xB193]}, /* 내놓 */
		{keys: ['b','g','k','l'], chars: [0xADF8,0xC911]}, /* 그중 */
		{keys: ['g','k','l','p'], chars: [0xADF8,0xC911]}, /* 그중 */
		{keys: ['d','j','s','u'], chars: [0xB178,0xC778]}, /* 노인 */
		{keys: ['a','f','l','n'], chars: [0xC0AC,0xC7A5]}, /* 사장 */
		{keys: ['a','l','n','r'], chars: [0xC131,0xC7A5]}, /* 성장 */
		{keys: ['a','l','n','v'], chars: [0xC7A5,0xC18C]}, /* 장소 */
		{keys: ['f','i','o','s'], chars: [0xD310,0xB2E8]}, /* 판단 */
		{keys: ['d','k','m'], chars: [0xAC70,0xB9AC]}, /* 거리 */
		{keys: ['b','o','y','z'], chars: [0xBD80,0xBAA8,0xB2D8]}, /* 부모님 */
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
		{keys: ['f','k','l','p','s'], chars: [0xC7A5,0xAD70]}, /* 장군 */
		{keys: ['b','t','y'], chars: [0xBB34,0xC5ED]}, /* 무역 */
		{keys: ['p','t','y'], chars: [0xBB34,0xC5ED]}, /* 무역 */
		{keys: ['b','f','i','o'], chars: [0xBD80,0xB2F4]}, /* 부담 */
		{keys: ['f','i','o','p'], chars: [0xBD80,0xB2F4]}, /* 부담 */
		{keys: ['a','l','o','s'], chars: [0xCDA9,0xBD84]}, /* 충분 */
		{keys: ['a','d','l','o','s'], chars: [0xCDA9,0xBD84,0xD788,0x20]}, /* 충분히  */
		{keys: ['c','l','u'], chars: [0xC5D0,0xB108,0xC9C0]}, /* 에너지 */
		{keys: ['a','l','m','r'], chars: [0xC815,0xB9AC]}, /* 정리 */
		{keys: ['j','l','s','w'], chars: [0xC9D1,0xC548]}, /* 집안 */
		{keys: ['d','f','k','o'], chars: [0xBC30,0xACBD]}, /* 배경 */
		{keys: ['b','i','n','s'], chars: [0xB2E8,0xC21C]}, /* 단순 */
		{keys: ['b','d','i','n','s'], chars: [0xB2E8,0xC21C,0xD788,0x20]}, /* 단순히  */
		{keys: ['d','i','n','p','s'], chars: [0xB2E8,0xC21C,0xD788,0x20]}, /* 단순히  */
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
		{keys: ['p','t','w','y'], chars: [0xBB34,0xB835]}, /* 무렵 */
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
		{keys: ['l','p','r','s'], chars: [0xC804,0xBB38,0xAC00]}, /* 전문가 */
		{keys: ['b','f','k','l'], chars: [0xC790,0xAFB8,0x20]}, /* 자꾸  */
		{keys: ['f','k','l','p'], chars: [0xC790,0xAFB8,0x20]}, /* 자꾸  */
		{keys: ['d','f','h','j','v'], chars: [0xD574,0xC678]}, /* 해외 */
		{keys: ['.','d','f','h','j'], chars: [0xD574,0xC678]}, /* 해외 */
		{keys: ['d','n','v','y'], chars: [0xBBF8,0xC18C]}, /* 미소 */
		{keys: ['.','d','n','y'], chars: [0xBBF8,0xC18C]}, /* 미소 */
		{keys: ['a','i','o','v'], chars: [0xBCF4,0xB3D9]}, /* 보통 */
		{keys: ['d','i','n','x'], chars: [0xC2DD,0xB2F9]}, /* 식당 */
		{keys: ['d','j','m'], chars: [0xC774,0xB798]}, /* 이래 */
		{keys: ['b','c','h','j'], chars: [0xCCB4,0xC721]}, /* 체육 */
		{keys: ['c','h','j','p'], chars: [0xCCB4,0xC721]}, /* 체육 */
		{keys: ['g','i','v'], chars: [0xB3C5,0xD2B9]}, /* 독특 */
		{keys: ['.','g','i'], chars: [0xB3C5,0xD2B9]}, /* 독특 */
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
		{keys: ['k','m','p','r','s'], chars: [0xAD8C,0xB9AC]}, /* 권리 */
		{keys: ['j','m','r','t','z'], chars: [0xC5B4,0xB824,0xC6C0]}, /* 어려움 */
		{keys: ['b','f','j','l','s'], chars: [0xC790,0xC6D0]}, /* 자원 */
		{keys: ['f','j','l','p','s'], chars: [0xC790,0xC6D0]}, /* 자원 */
		{keys: ['b','c','h','y'], chars: [0xBB3C,0xCCB4]}, /* 물체 */
		{keys: ['c','h','p','y'], chars: [0xBB3C,0xCCB4]}, /* 물체 */
		{keys: ['a','d','o','y'], chars: [0xBD84,0xBA85,0xD788,0x20]}, /* 분명히  */
		{keys: ['b','f','j','q'], chars: [0xC544,0xBB34,0xAC83]}, /* 아무것 */
		{keys: ['f','j','p','q'], chars: [0xC544,0xBB34,0xAC83]}, /* 아무것 */
		{keys: ['a','n','o','t'], chars: [0xD3C9,0xC18C]}, /* 평소 */
		{keys: ['b','f','i','k'], chars: [0xB354,0xAD6C,0xB098,0x20]}, /* 더구나  */
		{keys: ['f','i','k','p'], chars: [0xB354,0xAD6C,0xB098,0x20]}, /* 더구나  */
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
		{keys: ['k','n','p','r'], chars: [0xC11C,0xAD6C]}, /* 서구 */
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
		{keys: ['c','d','j','s'], chars: [0xC778,0xC81C,0x20]}, /* 인제  */
		{keys: ['a','k','l','x'], chars: [0xCDA9,0xACA9]}, /* 충격 */
		{keys: ['g','k','o','z'], chars: [0xAE08,0xBC29,0x20]}, /* 금방  */
		{keys: ['b','e','n','y'], chars: [0xBBF8,0xC220]}, /* 미술 */
		{keys: ['d','f','n','o','x'], chars: [0xBC31,0xC131]}, /* 백성 */
		{keys: ['a','f','h','n'], chars: [0xC0C1,0xB2F9,0xD788,0x20]}, /* 상당히  */
		{keys: ['e','f','k','n'], chars: [0xC0C9,0xAE54]}, /* 색깔 */
		{keys: ['a','b','t','y'], chars: [0xC720,0xBA85]}, /* 유명 */
		{keys: ['a','p','t','y'], chars: [0xC720,0xBA85]}, /* 유명 */
		{keys: ['j','k','s','v','x'], chars: [0xC678,0xAD6D,0xC778]}, /* 외국인 */
		{keys: ['h','l','s','z'], chars: [0xD55C,0xCC38]}, /* 한참 */
		{keys: ['b','f','k','n','s'], chars: [0xAD70,0xC0AC]}, /* 군사 */
		{keys: ['f','k','n','p','s'], chars: [0xAD70,0xC0AC]}, /* 군사 */
		{keys: ['b','c','l','n','x'], chars: [0xC219,0xC81C]}, /* 숙제 */
		{keys: ['c','l','n','p','x'], chars: [0xC219,0xC81C]}, /* 숙제 */
		{keys: ['c','f','j','n','s'], chars: [0xC608,0xC0B0]}, /* 예산 */
		{keys: [';','e','j','k'], chars: [0xC628,0xAC16,0x20]}, /* 온갖  */
		{keys: ['b','m','t'], chars: [0xC6B0,0xB824]}, /* 우려 */
		{keys: ['m','p','t'], chars: [0xC6B0,0xB824]}, /* 우려 */
		{keys: ['b','f','j','n','s'], chars: [0xC6B0,0xC0B0]}, /* 우산 */
		{keys: ['f','j','n','p','s'], chars: [0xC6B0,0xC0B0]}, /* 우산 */
		{keys: ['b','f','j','n'], chars: [0xC218,0xC694]}, /* 수요 */
		{keys: ['f','j','n','p'], chars: [0xC218,0xC694]}, /* 수요 */
		{keys: ['d','g','k','o'], chars: [0xAE30,0xC068]}, /* 기쁨 */
		{keys: [';','w','y'], chars: [0xBB34,0xB98E]}, /* 무릎 */
		{keys: ['c','i','n','z'], chars: [0xC2DC,0xC2A4,0xD15C]}, /* 시스템 */
		{keys: ['d','e','f','l','u'], chars: [0xC9C0,0xB09C,0xB2EC]}, /* 지난달 */
		{keys: ['f','h','j','z'], chars: [0xCC38,0xC5EC]}, /* 참여 */
		{keys: ['e','g','j','k','r'], chars: [0xAC78,0xC74C]}, /* 걸음 */
		{keys: ['b','k','t'], chars: [0xACA8,0xC6B0,0x20]}, /* 겨우  */
		{keys: ['k','p','t'], chars: [0xACA8,0xC6B0,0x20]}, /* 겨우  */
		{keys: ['d','f','l','n','x'], chars: [0xCC45,0xC0C1]}, /* 책상 */
		{keys: ['g','i','n','x'], chars: [0xC18C,0xB4DD]}, /* 소득 */
		{keys: ['d','i','l','z'], chars: [0xCE68,0xB300]}, /* 침대 */
		{keys: ['f','g','i','n'], chars: [0xC2A4,0xD0C0]}, /* 스타 */
		{keys: ['e','j','n','w'], chars: [0xC785,0xC220]}, /* 입술 */
		{keys: ['a','b','k','l'], chars: [0xC911,0xAC04]}, /* 중간 */
		{keys: ['n','v','w','y'], chars: [0xBAB9,0xC2DC,0x20]}, /* 몹시  */
		{keys: ['b','g','i'], chars: [0xBB38,0xB4DD,0x20]}, /* 문득  */
		{keys: ['g','i','p'], chars: [0xBB38,0xB4DD,0x20]}, /* 문득  */
		{keys: ['g','n','o'], chars: [0xC2A4,0xD3EC,0xCE20]}, /* 스포츠 */
		{keys: ['k','l','r'], chars: [0xC800,0xAE30]}, /* 저기 */
		{keys: ['g','k','l'], chars: [0xADF8,0xC800,0x20]}, /* 그저 */
		{keys: ['c','f','j','l','s'], chars: [0xC5B8,0xC820,0xAC00,0x20]}, /* 언젠가  */
		{keys: ['c','f','j','n'], chars: [0xC608,0xC220,0xAC00]}, /* 예술가 */
		{keys: ['g','i','j','v'], chars: [0xC758,0xB3C4]}, /* 의도 */
		{keys: ['.','g','i','j'], chars: [0xC758,0xB3C4]}, /* 의도 */
		{keys: ['f','h','s','y'], chars: [0xAC00,0xB9CC,0xD788,0x20]}, /* 가만히  */
		{keys: ['b','f','h','i','s'], chars: [0xD55C,0xB450,0x20]}, /* 한두  */
		{keys: ['f','h','i','p','s'], chars: [0xD55C,0xB450,0x20]}, /* 한두  */
		{keys: ['d','f','h','j','s'], chars: [0xD55C,0xB54C]}, /* 한때 */
		{keys: ['a','d','f','i','n','x'], chars: [0xC0C1,0xB300,0xC801]}, /* 상대적 */
		{keys: ['d','n','o','x'], chars: [0xC2DD,0xD488]}, /* 식품 */
		{keys: ['.','h','j','r','s'], chars: [0xD68C,0xC6D0]}, /* 회원 */
		{keys: ['h','j','r','s','v'], chars: [0xD68C,0xC6D0]}, /* 회원 */
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
		{keys: ['b','f','n','y'], chars: [0xC0AC,0xBB34]}, /* 사무 */
		{keys: ['f','n','p','y'], chars: [0xC0AC,0xBB34]}, /* 사무 */
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
		{keys: ['f','l','n','p'], chars: [0xC22B,0xC790]}, /* 숫자 */
		{keys: ['j','l','s','v','x'], chars: [0xC67C,0xCABD]}, /* 왼쪽 */
		{keys: ['.','j','l','s','x'], chars: [0xC67C,0xCABD]}, /* 왼쪽 */
		{keys: ['l','m','v','x'], chars: [0xC624,0xB978,0xCABD]}, /* 오른쪽 */
		{keys: ['b','c','l','n'], chars: [0xC911,0xC138]}, /* 중세 */
		{keys: ['c','l','n','p'], chars: [0xC911,0xC138]}, /* 중세 */
		{keys: ['d','f','i','n','x'], chars: [0xD0DD,0xC2DC]}, /* 택시 */
		{keys: ['a','h','i','w'], chars: [0xB3D9,0xD569]}, /* 통합 */
		{keys: ['c','k','n','s','v'], chars: [0xACC4,0xC0B0]}, /* 계산 */
		{keys: ['d','k','m','v'], chars: [0xAF2C,0xB9AC]}, /* 꼬리 */
		{keys: ['.','d','k','m'], chars: [0xAF2C,0xB9AC]}, /* 꼬리 */
		{keys: ['a','j','n','x'], chars: [0xC591,0xC2DD]}, /* 양식 */
		{keys: ['d','k','l','s'], chars: [0xC804,0xAE30]}, /* 전기 */
		{keys: ['b','d','l','n','x'], chars: [0xC8FC,0xC2DD]}, /* 주식 */
		{keys: ['d','l','n','p','x'], chars: [0xC8FC,0xC2DD]}, /* 주식 */
		{keys: ['j','k','q','w'], chars: [0xB04A,0xC784,0xC5C6]}, /* 끊임없 */
		{keys: ['a','n','x'], chars: [0xC0C1,0xC2DD]}, /* 상식 */
		{keys: ['b','g','k'], chars: [0xAD81,0xAE08]}, /* 궁금 */
		{keys: ['g','k','p'], chars: [0xAD81,0xAE08]}, /* 궁금 */
		{keys: ['l','w'], chars: [0xC7A1,0xC9C0]}, /* 잡지 */
		{keys: ['b','k','o','r'], chars: [0xAC70,0xBD80]}, /* 거부 */
		{keys: ['k','o','p','r'], chars: [0xAC70,0xBD80]}, /* 거부 */
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
		{keys: ['d','f','l','n','z'], chars: [0xCC38,0xC0AC]}, /* 참새 */
		{keys: ['f','l','o','v'], chars: [0xD654,0xC7A5,0xD488]}, /* 화장품 */
		{keys: ['.','f','l','o'], chars: [0xD654,0xC7A5,0xD488]}, /* 화장품 */
		{keys: ['f','g','k','j','q'], chars: [0xAE68,0xB057]}, /* 깨끗 */
		{keys: ['f','s','u','y'], chars: [0xB18D,0xC0B0,0xBB3C]}, /* 농산물 */
		{keys: ['b','f','j','u'], chars: [0xB208,0xC55E]}, /* 눈앞 */
		{keys: ['f','j','p','u'], chars: [0xB208,0xC55E]}, /* 눈앞 */
		{keys: ['b','f','i','m'], chars: [0xC544,0xBB34,0xB798,0xB3C4,0x20]}, /* 아무래도  */
		{keys: ['f','i','m','p'], chars: [0xC544,0xBB34,0xB798,0xB3C4,0x20]}, /* 아무래도  */
		{keys: ['b','k','n','t'], chars: [0xC5F0,0xAD6C,0xC18C]}, /* 연구소 */
		{keys: ['k','n','p','t'], chars: [0xC5F0,0xAD6C,0xC18C]}, /* 연구소 */
		{keys: ['a','d','f','k','n','v'], chars: [0xACE0,0xC0DD]}, /* 고생 */
		{keys: ['.','a','d','f','k','n'], chars: [0xACE0,0xC0DD]}, /* 고생 */
		{keys: ['a','k','m','t'], chars: [0xAC00,0xB839,0x20]}, /* 가령  */
		{keys: ['i','k','r'], chars: [0xAC70,0xB300]}, /* 거대 */
		{keys: ['g','k','m','s'], chars: [0xADFC,0xB85C]}, /* 근로 */
		{keys: ['l','o','r','z'], chars: [0xBC31,0xD654,0xC810]}, /* 백화점 */
		{keys: ['j','m','s','t'], chars: [0xC5EC,0xB860]}, /* 여론 */
		{keys: ['g','j','o','v'], chars: [0xC758,0xBCF5]}, /* 의복 */
		{keys: ['.','g','j','o'], chars: [0xC758,0xBCF5]}, /* 의복 */
		{keys: ['b','e','l','o'], chars: [0xCD9C,0xBC1C]}, /* 출발 */
		{keys: ['h','n','r','s','t'], chars: [0xD604,0xC2E4,0xC801]}, /* 현실적 */
		{keys: ['c','f','h','l'], chars: [0xD654,0xC81C]}, /* 화제 */
		{keys: ['a','k','x'], chars: [0xACF5,0xACA9]}, /* 공격 */
		{keys: ['b','e','f','y'], chars: [0xBB3C,0xAC00]}, /* 물가 */
		{keys: ['e','f','p','y'], chars: [0xBB3C,0xAC00]}, /* 물가 */
		{keys: ['a','b','l','n'], chars: [0xC18C,0xC911]}, /* 소중 */
		{keys: ['b','g','j'], chars: [0xC758,0xBB38]}, /* 의문 */
		{keys: ['g','j','p'], chars: [0xC758,0xBB38]}, /* 의문 */
		{keys: ['d','e','k','m'], chars: [0xD0AC,0xB85C]}, /* 킬로 */
		{keys: ['b','f','k','n'], chars: [0xAC00,0xC218]}, /* 가수 */
		{keys: ['f','k','n','p'], chars: [0xAC00,0xC218]}, /* 가수 */
		{keys: ['a','n','o','x'], chars: [0xBC29,0xC1A1,0xAD6D]}, /* 방송국 */
		{keys: ['f','j','w','x'], chars: [0xC555,0xB825]}, /* 압력 */
		{keys: ['d','j','s','x'], chars: [0xC778,0xB825]}, /* 인력 */
		{keys: ['c','g','j','k'], chars: [0xC608,0xAE08]}, /* 예금 */
		{keys: ['d','h','j','w'], chars: [0xC785,0xD559]}, /* 입학 */
		{keys: ['a','l','m','r','v'], chars: [0xCC28,0xB7C9]}, /* 차량 */
		{keys: ['.','a','l','m','r'], chars: [0xCC28,0xB7C9]}, /* 차량 */
		{keys: ['b','e','f','h','l'], chars: [0xCD9C,0xC0B0]}, /* 출산 */
		{keys: ['e','f','h','l','p'], chars: [0xCD9C,0xC0B0]}, /* 출산 */
		{keys: ['b','l','n','x'], chars: [0xC120,0xC9C4,0xAD6D]}, /* 선진국 */
		{keys: ['d','f','l','o','s'], chars: [0xC7AC,0xD310]}, /* 재판 */
		{keys: ['a','f','l','s','y'], chars: [0xCC3D,0xBB38]}, /* 창문 */
		{keys: ['l','n','r','x'], chars: [0xCC38,0xC11D]}, /* 참석 */
		{keys: ['b','e','f','h','o'], chars: [0xBC1C,0xD718]}, /* 발휘 */
		{keys: ['e','f','h','o','p'], chars: [0xBC1C,0xD718]}, /* 발휘 */
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
		{keys: ['b','d','n','o'], chars: [0xC2E0,0xBD80]}, /* 신부 */
		{keys: ['d','n','o','p'], chars: [0xC2E0,0xBD80]}, /* 신부 */
		{keys: ['e','j','l','w'], chars: [0xC878,0xC5C5]}, /* 졸업 */
		{keys: ['h','o','z'], chars: [0xD3EC,0xD568]}, /* 포함 */
		{keys: ['a','f','h','m'], chars: [0xD638,0xB791,0xC774]}, /* 호랑이 */
		{keys: ['c','k','n','z'], chars: [0xC138,0xAE08]}, /* 세금 */
		{keys: ['a','j','r','t'], chars: [0xC601,0xC591]}, /* 영양 */
		{keys: ['d','i','m','w'], chars: [0xB3C5,0xB9BD]}, /* 독립 */
		{keys: ['d','f','i','n','v'], chars: [0xB610,0xB2E4,0xC2DC,0x20]}, /* 또다시  */
		{keys: ['.','d','f','i','n'], chars: [0xB610,0xB2E4,0xC2DC,0x20]}, /* 또다시  */
		{keys: ['b','f','j','o','s'], chars: [0xC704,0xBC18]}, /* 위반 */
		{keys: ['f','j','o','p','s'], chars: [0xC704,0xBC18]}, /* 위반 */
		{keys: ['a','d','f','n','o'], chars: [0xD3C9,0xC0DD]}, /* 평생 */
		{keys: ['a','b','f','k','l'], chars: [0xAD11,0xC8FC]}, /* 광주 */
		{keys: ['a','f','k','l','p'], chars: [0xAD11,0xC8FC]}, /* 광주 */
		{keys: ['f','j','m','r'], chars: [0xB7EC,0xC2DC,0xC544]}, /* 러시아 */
		{keys: ['f','h','u','z'], chars: [0xB0A8,0xD55C]}, /* 남한 */
		{keys: ['f','j','k','s','x'], chars: [0xAD00,0xC545]}, /* 관악 */
		{keys: ['a','h','s'], chars: [0xD55C,0xAC15]}, /* 한강 */
		{keys: ['g','j','m','t'], chars: [0xC73C,0xB824]}, /* 으려 */
		{keys: ['c','d','j','k'], chars: [0xAE30,0xC5D0,0x20]}, /* 기에  */
		{keys: ['b','i','k','r','s'], chars: [0xB354,0xAD70,0x2E,0x20]}, /* 더군.  */
		{keys: ['i','k','p','r','s'], chars: [0xB354,0xAD70,0x2E,0x20]}, /* 더군.  */
		{keys: ['d','f','i','u'], chars: [0xB2E4,0xB2C8]}, /* 다니 */
		{keys: ['g','s','u','v'], chars: [0xACE0,0xB294,0x20]}, /* 고는  */
		{keys: ['.','g','s','u'], chars: [0xACE0,0xB294,0x20]}, /* 고는  */
		{keys: ['f','l','y'], chars: [0xB9C8,0xC790,0x20]}, /* 마자  */
		{keys: ['a','d','k','l','v'], chars: [0xAD49,0xC7A5]}, /* 굉장 */
		{keys: ['.','a','d','k','l'], chars: [0xAD49,0xC7A5]}, /* 굉장 */
		{keys: ['k','l','t','x'], chars: [0xC790,0xACA9]}, /* 자격 */
		{keys: ['c','f','l','x'], chars: [0xC81C,0xC791]}, /* 제작 */
		{keys: ['a','l','w'], chars: [0xC9D1,0xC911]}, /* 집중 */
		{keys: ['a','h','l','w'], chars: [0xC885,0xD569]}, /* 종합 */
		{keys: ['e','f','l','y'], chars: [0xC8FC,0xB9D0]}, /* 주말 */
		{keys: ['b','f','k','m'], chars: [0xAC00,0xB8E8]}, /* 가루 */
		{keys: ['f','k','m','p'], chars: [0xAC00,0xB8E8]}, /* 가루 */
		{keys: ['f','j','m','x'], chars: [0xC5F0,0xB77D]}, /* 연락 */
		{keys: ['a','c','i','l','v'], chars: [0xB3D9,0xC81C]}, /* 통제 */
		{keys: ['c','f','h','l','s'], chars: [0xC81C,0xD55C]}, /* 제한 */
		{keys: ['c','h','j','r'], chars: [0xD5E4,0xC5B4]}, /* 헤어 */
		{keys: ['e','j','l','s'], chars: [0xCD9C,0xC5F0]}, /* 출연 */
		{keys: ['b','f','l','y'], chars: [0xB9C8,0xC8FC,0x20]}, /* 마주  */
		{keys: ['f','l','p','y'], chars: [0xB9C8,0xC8FC,0x20]}, /* 마주  */
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
		{keys: ['j','i','w'], chars: [0xB3C4,0xC785]}, /* 도입 */
		{keys: ['g','j','m','z'], chars: [0xC74C,0xB8CC]}, /* 음료 */
		{keys: ['f','g','j','l'], chars: [0xC758,0xC790]}, /* 의자 */
		{keys: ['f','g','j','l'], chars: [0xC758,0xC790]}, /* 의자 */
		{keys: ['c','f','h','y'], chars: [0xCE74,0xBA54,0xB77C]}, /* 카메라 */
		{keys: ['d','m','o'], chars: [0xD3B8,0xB9AC]}, /* 편리 */
		{keys: ['d','e','k','l'], chars: [0xAC70,0xCE60]}, /* 거칠 */
		{keys: ['f','u','y'], chars: [0xB098,0xB9C8,0x20]}, /* 나마  */
		{keys: ['f','o','u','z'], chars: [0xB0A8,0xBD80]}, /* 남부 */
		{keys: ['e','m','v','y'], chars: [0xBAB0,0xB798,0x20]}, /* 몰래  */
		{keys: ['g','k','l','v'], chars: [0xC870,0xADF8]}, /* 조그 */
		{keys: ['.','g','k','l'], chars: [0xC870,0xADF8]}, /* 조그 */
		{keys: ['b','e','k','l'], chars: [0xC904,0xAE30]}, /* 줄기 */
		{keys: ['f','g','k','l','x'], chars: [0xADF9,0xC7A5]}, /* 극장 */
		{keys: ['d','g','k','o','x'], chars: [0xBE44,0xADF9]}, /* 비극 */
		{keys: [';','u','w'], chars: [0xB192,0xC774]}, /* 높이 */
		{keys: ['f','h','n','s'], chars: [0xD55C,0xC228]}, /* 한숨 */
		{keys: ['a','f','l','n','s'], chars: [0xC120,0xC7A5]}, /* 선장 */
		{keys: ['g','i','k','v'], chars: [0xCF54,0xB4DC]}, /* 코드 */
		{keys: ['.','g','i','k'], chars: [0xCF54,0xB4DC]}, /* 코드 */
		{keys: ['h','r','t','u'], chars: [0xCCAD,0xB144]}, /* 청년 */
		{keys: ['d','n','u'], chars: [0xC2DC,0xB0B4]}, /* 시내 */
		{keys: ['d','e','n','u'], chars: [0xC2E4,0xB0B4]}, /* 실내 */
		{keys: ['e','j','k','s'], chars: [0xC5F0,0xACB0]}, /* 연결 */
		{keys: ['c','k','r'], chars: [0xACC4,0xC57D]}, /* 계약 */
		{keys: ['b','g','k','o'], chars: [0xBD80,0xB044]}, /* 부끄 */
		{keys: ['g','k','o','p'], chars: [0xBD80,0xB044]}, /* 부끄 */
		{keys: ['b','h','n'], chars: [0xC218,0xD589]}, /* 수행 */
		{keys: ['a','d','l','n','s'], chars: [0xC2E0,0xCCAD]}, /* 신청 */
		{keys: ['b','f','o'], chars: [0xBC14,0xC704]}, /* 바위 */
		{keys: ['f','o','p'], chars: [0xBC14,0xC704]}, /* 바위 */
		{keys: ['c','l','r','x'], chars: [0xC804,0xCCB4,0xC801]}, /* 전체적 */
		{keys: ['h','j','s','t'], chars: [0xD3B8,0xC548]}, /* 편안 */
		{keys: ['d','f','m','x','y'], chars: [0xB9E4,0xB825]}, /* 매력 */
		{keys: ['a','b','f','l','o'], chars: [0xBD80,0xC7A5]}, /* 부장 */
		{keys: ['a','f','l','o','p'], chars: [0xBD80,0xC7A5]}, /* 부장 */
		{keys: ['d','m','n','z'], chars: [0xC2EC,0xB9AC]}, /* 심리 */
		{keys: ['e','f','i','l'], chars: [0xC804,0xB2EC]}, /* 전달 */
		{keys: ['a','h','n','t'], chars: [0xD615,0xC0AC]}, /* 형사 */
		{keys: ['f','i','k','z'], chars: [0xAC10,0xB3D9]}, /* 감동 */
		{keys: ['b','f','m','y'], chars: [0xB9C8,0xB8E8]}, /* 마루 */
		{keys: ['f','m','p','y'], chars: [0xB9C8,0xB8E8]}, /* 마루 */
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
		{keys: ['f','h','o','p','s'], chars: [0xD6C4,0xBC18]}, /* 후반 */
		{keys: ['d','e','h','j'], chars: [0xC77C,0xCE58]}, /* 일치 */
		{keys: ['a','i','s'], chars: [0xB2F9,0xC5F0]}, /* 당연 */
		{keys: ['d','i','o'], chars: [0xB300,0xBE44]}, /* 대비 */
		{keys: ['l','u','v','x'], chars: [0xB0A8,0xCABD]}, /* 남쪽 */
		{keys: ['a','b','f','n'], chars: [0xC218,0xC0C1]}, /* 수상 */
		{keys: ['a','f','n','p'], chars: [0xC218,0xC0C1]}, /* 수상 */
		{keys: ['k','l','s','z'], chars: [0xC7A0,0xAE50]}, /* 잠깐 */
		{keys: ['i','l','x'], chars: [0xC801,0xB2F9]}, /* 적당 */
		{keys: ['l','n','v','x'], chars: [0xC9C0,0xC18D]}, /* 지속 */
		{keys: ['b','k','o','s'], chars: [0xAD6C,0xBD84]}, /* 구분 */
		{keys: ['d','g','k','l','z'], chars: [0xAE08,0xC9C0]}, /* 금지 */
		{keys: ['b','g','y'], chars: [0xC758,0xBB34]}, /* 의무 */
		{keys: ['g','p','y'], chars: [0xC758,0xBB34]}, /* 의무 */
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
		{keys: ['l','p','r','y'], chars: [0xC8FC,0xBA39]}, /* 주먹 */
		{keys: ['a','b','k','t'], chars: [0xAD6C,0xACBD]}, /* 구경 */
		{keys: ['a','k','p','t'], chars: [0xAD6C,0xACBD]}, /* 구경 */
		{keys: ['b','g','k','s'], chars: [0xADFC,0xBB34]}, /* 근무 */
		{keys: ['g','k','p','s'], chars: [0xADFC,0xBB34]}, /* 근무 */
		{keys: ['g','n','v'], chars: [0xC18C,0xC2A4]}, /* 소스 */
		{keys: ['.','g','n'], chars: [0xC18C,0xC2A4]}, /* 소스 */
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
		{keys: ['g','i','n','p'], chars: [0xD2B9,0xC218]}, /* 특수 */
		{keys: ['e','x','y'], chars: [0xACE8,0xBAA9]}, /* 골목 */
		{keys: ['f','h','j','x'], chars: [0xC720,0xD559]}, /* 유학 */
		{keys: ['e','l','o','r'], chars: [0xCC98,0xBC8C]}, /* 처벌 */
		{keys: ['c','f','k','o'], chars: [0xCE74,0xD398]}, /* 카페 */
		{keys: ['i','k','v'], chars: [0xAC80,0xD1A0]}, /* 검토 */
		{keys: ['m','v','y'], chars: [0xBAA8,0xB798]}, /* 모래 */
		{keys: ['b','f','i','n'], chars: [0xB2E4,0xC218]}, /* 다수 */
		{keys: ['f','i','n','p'], chars: [0xB2E4,0xC218]}, /* 다수 */
		{keys: ['h','n','r','x'], chars: [0xD574,0xC11D]}, /* 해석 */
		{keys: ['g','j','k','r','s'], chars: [0xADFC,0xC6D0]}, /* 근원 */
		{keys: ['b','f','i','o','x'], chars: [0xBD80,0xD0C1]}, /* 부탁 */
		{keys: ['f','i','o','p','x'], chars: [0xBD80,0xD0C1]}, /* 부탁 */
		{keys: ['d','e','n','o'], chars: [0xC2E4,0xD328]}, /* 실패 */
		{keys: ['b','j','s','t'], chars: [0xC6B0,0xC5F0]}, /* 우연 */
		{keys: ['j','p','s','t'], chars: [0xC6B0,0xC5F0]}, /* 우연 */
		{keys: ['a','l','m','v'], chars: [0xCD1D,0xB9AC]}, /* 총리 */
		{keys: [';','q','u'], chars: [0xB208,0xBE5B]}, /* 눈빛 */
		{keys: ['j','s','u','v'], chars: [0xB17C,0xC758]}, /* 논의 */
		{keys: ['b','g','j','n'], chars: [0xC6B0,0xC2B9]}, /* 우승 */
		{keys: ['g','j','n','p'], chars: [0xC6B0,0xC2B9]}, /* 우승 */
		{keys: ['g','k','l','r','s'], chars: [0xC99D,0xAD8C]}, /* 증권 */
		{keys: ['g','k','l','r','s'], chars: [0xC99D,0xAD8C]}, /* 증권 */
		{keys: ['a','g','h','y'], chars: [0xD765,0xBBF8]}, /* 흥미 */
		{keys: ['e','o','u'], chars: [0xBE44,0xB2D0]}, /* 비닐 */
		{keys: ['a','d','f','n','y'], chars: [0xC0DD,0xBB3C]}, /* 생물 */
		{keys: ['e','j','l'], chars: [0xC77C,0xC815]}, /* 일정 */
		{keys: ['d','m','o','v'], chars: [0xD53C,0xB85C]}, /* 피로 */
		{keys: ['.','d','m','o'], chars: [0xD53C,0xB85C]}, /* 피로 */
		{keys: ['d','n','o','v'], chars: [0xBE44,0xB85C,0xC18C,0x20]}, /* 비로소  */
		{keys: ['.','d','n','o'], chars: [0xBE44,0xB85C,0xC18C,0x20]}, /* 비로소  */
		{keys: ['b','e','f','l'], chars: [0xC790,0xC728]}, /* 자율 */
		{keys: ['e','f','l','p'], chars: [0xC790,0xC728]}, /* 자율 */
		{keys: ['b','l','o','r','s'], chars: [0xC804,0xBD80]}, /* 전부 */
		{keys: ['l','o','p','r','s'], chars: [0xC804,0xBD80]}, /* 전부 */
		{keys: ['d','i','l','s'], chars: [0xC9C4,0xB2E8]}, /* 진단 */
		{keys: ['b','i','k'], chars: [0xAD6C,0xB450]}, /* 구두 */
		{keys: ['a','f','l','o','v'], chars: [0xBCF4,0xC7A5]}, /* 보장 */
		{keys: ['.','a','f','l','o'], chars: [0xBCF4,0xC7A5]}, /* 보장 */
		{keys: ['f','k','n','v'], chars: [0xC0AC,0xACFC]}, /* 사과 */
		{keys: ['.','f','k','n'], chars: [0xC0AC,0xACFC]}, /* 사과 */
		{keys: ['b','d','j','m'], chars: [0xC720,0xB9AC]}, /* 유리 */
		{keys: ['d','j','m','p'], chars: [0xC720,0xB9AC]}, /* 유리 */
		{keys: ['a','g','i','m'], chars: [0xB4F1,0xB85D]}, /* 등록 */
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
		{keys: [';','c','d','j'], chars: [0xC788,0xAC8C,0x20]}, /* 있게  */
		{keys: ['j','q','u','w'], chars: [0xC5C6,0xB294,0x20]}, /* 없는  */
		{keys: ['g','h','s','u'], chars: [0xCE58,0xB294,0x20]}, /* 치는  */
		{keys: ['h','s','u'], chars: [0xD0A4,0xB294,0x20]}, /* 키는  */
		{keys: ['c','f','h'], chars: [0xD558,0xAC8C,0x20]}, /* 하게  */
		{keys: ['g','l','v'], chars: [0xC88B,0xC740,0x20]}, /* 좋은  */
		{keys: ['.','g','l'], chars: [0xC88B,0xC740,0x20]}, /* 좋은  */
		{keys: ['f','k','m','s'], chars: [0xCEE4,0xB2E4,0xB780,0x20]}, /* 커다란  */
		{keys: ['k','s'], chars: [0xAE30,0xB294,0x20]}, /* 기는  */
		{keys: ['f','g','k'], chars: [0xAC00,0xB294,0x20]}, /* 가는  */
		{keys: ['f','g','k','z'], chars: [0xAC19,0xC740,0x20]}, /* 같은  */
		{keys: ['b','g','j','k'], chars: [0xAFB8,0xB294,0x20]}, /* 꾸는  */
		{keys: ['g','j','k','p'], chars: [0xAFB8,0xB294,0x20]}, /* 꾸는  */
		{keys: ['d','f','g','u'], chars: [0xB0B4,0xB294,0x20]}, /* 내는  */
		{keys: ['g','i','u'], chars: [0xB4DC,0xB294,0x20]}, /* 드는  */
		{keys: ['f','g','m'], chars: [0xB77C,0xB294,0x20]}, /* 라는  */
		{keys: ['c','f','m'], chars: [0xB77C,0xAC8C,0x20]}, /* 라게  */
		{keys: ['j','m','r'], chars: [0xB7EC,0xC6B4,0x20]}, /* 러운  */
		{keys: ['j','m','t'], chars: [0xB824,0xC6B4,0x20]}, /* 려운  */
		{keys: ['d','f','m','n','s'], chars: [0xC0C8,0xB85C,0xC6B4,0x20]}, /* 새로운  */
		{keys: ['b','h','s','y'], chars: [0xD765,0xBBF8,0xB85C,0xC6B4,0x20]}, /* 흥미로운  */
		{keys: ['b','g','m'], chars: [0xB8E8,0xB294,0x20]}, /* 루는  */
		{keys: ['g','m','p'], chars: [0xB8E8,0xB294,0x20]}, /* 루는  */
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
		{keys: ['g','l','p'], chars: [0xC8FC,0xB294,0x20]}, /* 주는  */
		{keys: ['g','l','s','u'], chars: [0xC9C0,0xB294,0x20]}, /* 지는  */
		{keys: ['c','d','h','l'], chars: [0xCE58,0xAC8C,0x20]}, /* 치게  */
		{keys: ['g','k','o'], chars: [0xD504,0xAC8C,0x20]}, /* 프게  */
		{keys: ['c','h','u'], chars: [0xD558,0xB294,0xB370]}, /* 하는데 */
		{keys: ['c','g','h','k'], chars: [0xD06C,0xAC8C,0x20]}, /* 크게  */
		{keys: ['f','g','o'], chars: [0xBC1B,0xC740,0x20]}, /* 받은  */
		{keys: ['f','g','n'], chars: [0xC0AC,0xB294,0x20]}, /* 사는  */
		{keys: ['g','r','y'], chars: [0xBA39,0xB294,0x20]}, /* 먹는  */
		{keys: [';','n','w'], chars: [0xC2F6,0xC740,0x20]}, /* 싶은  */
		{keys: ['f','g','l'], chars: [0xC791,0xC740,0x20]}, /* 작은  */
		{keys: ['g','u','v'], chars: [0xB192,0xC740,0x20]}, /* 높은  */
		{keys: ['.','g','u'], chars: [0xB192,0xC740,0x20]}, /* 높은  */
		{keys: ['b','f','i','s'], chars: [0xB2E4,0xC6B4]}, /* 다운 */
		{keys: ['f','i','p','s'], chars: [0xB2E4,0xC6B4]}, /* 다운 */
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
		{keys: ['q','h','k'], chars: [0xD558,0xACA0]}, /* 하겠 */
		{keys: ['q','h','j'], chars: [0xD558,0xC600]}, /* 하였 */
		{keys: ['d','h','n','s'], chars: [0xD558,0xC2E0,0x20]}, /* 하신  */
		{keys: ['q','h','n'], chars: [0xD558,0xC168]}, /* 하셨 */
		{keys: ['q','i','k'], chars: [0xB418,0xACA0]}, /* 되겠 */
		{keys: ['q','i','j'], chars: [0xB418,0xC5C8]}, /* 되었 */
		{keys: ['e','i','j'], chars: [0xB4E4,0xC758,0x20]}, /* 들의  */
		{keys: ['e','i'], chars: [0xB4E4,0xC774,0x20]}, /* 들이  */
		{keys: ['e','i','s'], chars: [0xB4E4,0xC740,0x20]}, /* 들은  */
		{keys: ['g','l','m'], chars: [0xC801,0xC73C,0xB85C,0x20]}, /* 적으로  */
		{keys: ['l','s','x'], chars: [0xC801,0xC778,0x20]}, /* 적인  */
		{keys: ['e','f','h','n'], chars: [0xD560,0x20,0xC218]}, /* 할 수 */
		{keys: ['q','n'], chars: [0xC218,0x20,0xC788]}, /* 수 있 */
		{keys: ['n','q','w'], chars: [0xC218,0x20,0xC5C6]}, /* 수 없 */
		{keys: ['e','h','n','s'], chars: [0xD560,0x20,0xC218,0xB294,0x20]}, /* 할 수는  */
		{keys: ['c','i','o','v'], chars: [0xB3C4,0x20,0xBD88,0xAD6C,0xD558,0xACE0,0x20]}, /* 도 불구하고  */
		{keys: ['i','k','r','q'], chars: [0xAC83,0xB3C4,0x20]}, /* 것도  */
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
		{keys: ['c','d','k','l'], chars: [0xC9C0,0xAC8C,0x20]}, /* 지게  */
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
		{keys: ['a','g','r','u'], chars: [0xADF8,0xB0E5,0x20]}, /* 그냥  */
		{keys: ['a','u'], chars: [0xAC00,0xB2A5]}, /* 가능 */
		{keys: ['j','k','z'], chars: [0xAE08,0xC735]}, /* 금융 */
		{keys: ['g','j','k','v'], chars: [0xC694,0xAE08]}, /* 요금 */
		{keys: ['.','g','j','k'], chars: [0xC694,0xAE08]}, /* 요금 */
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
		{keys: ['f','h','p','s','y'], chars: [0xBB38,0xD654,0xC7AC]}, /* 문화재 */
		{keys: ['b','f','s','y'], chars: [0xB300,0xBB38]}, /* 대문 */
		{keys: ['f','p','s','y'], chars: [0xB300,0xBB38]}, /* 대문 */
		{keys: ['g','m','r'], chars: [0xADF8,0xB7EC,0xBBC0,0xB85C,0x20]}, /* 그러므로  */
		{keys: ['c','d','j'], chars: [0xC608,0xC678]}, /* 예외 */
		{keys: ['e','j','q','u'], chars: [0xC61B,0xB0A0]}, /* 옛날 */

		{keys: ['i','q','u'], chars: [0xC778,0xD130,0xB137]}, /* 인터넷 */
		{keys: ['g','k','m','q'], chars: [0xADF8,0xB987]}, /* 그릇 */
		{keys: ['k','m','q'], chars: [0xADF8,0xB7AC]}, /* 그랬 */
		{keys: ['s','u'], chars: [0xB0B4,0xB144]} /* 내년 */
	];

	K3_Sin3_Gongdong_additional_combination_table = [
		[0x1100110B,0x1101], /* choseong gieug + ieung = ssanggieug */
		[0x11061103,0x1104], /* choseong mieum + dieud = ssangdieud */
		[0x1107110C,0x1108], /* choseong bieub + jieuj = ssangbieub */
		[0x1107110B,0x1108], /* choseong bieub + ieung = ssangbieub */
		[0x11121109,0x110A], /* choseong hieuh + sieus = ssangsieus */
		[0x1109110C,0x110A], /* choseong sieus + jieuj = ssangsieus */
		[0x110C1100,0x110D]  /* choseong jieuj + gieug = ssangjieuj */
	];

	K3_Sin3_Gongdong_abbreviation_table = [
		{phonemes: [0x1100,0x11BA], chars: [0xAC12]}, /* ㄱ *ㅅ : 값 */
		{phonemes: [0x1102,0x11BA], chars: [0xB299]}, /* ㄴ *ㅅ : 늙 */
		{phonemes: [0x1103,0x11BA], chars: [0xB2ED]}, /* ㄷ *ㅅ : 닭 */
		{phonemes: [0x1105,0x11BA], chars: [0xB97C]}, /* ㄹ *ㅅ : 를 */
		{phonemes: [0x1106,0x11BA], chars: [0xB9CE]}, /* ㅁ *ㅅ : 많 */
		{phonemes: [0x1107,0x11BA], chars: [0xBC23]}, /* ㅂ *ㅅ : 밝 */
		{phonemes: [0x1109,0x11BA], chars: [0xC0B6]}, /* ㅅ *ㅅ : 삶 */
		{phonemes: [0x110B,0x11BA], chars: [0xC54A]}, /* ㅇ *ㅅ : 않 */
		{phonemes: [0x110C,0x11BA], chars: [0xC796]}, /* ㅈ *ㅅ : 잖 */
		{phonemes: [0x110E,0x11BA], chars: [0xCC2E]}, /* ㅊ *ㅅ : 찮 */
		{phonemes: [0x1112,0x11BA], chars: [0xD759]}, /* ㅎ *ㅅ : 흙 */
		{phonemes: [0x1100,0x1109], chars: [0xAC19]}, /* ㄱ ㅅ : 같 */
		{phonemes: [0x1100,0x110C], chars: [0xACA0]}, /* ㄱ ㅈ : 겠 */
		{phonemes: [0x1106,0x1109], chars: [0xB9D1]}, /* ㅁ ㅅ : 맑 */
		{phonemes: [0x110B,0x1100], chars: [0xC788]}, /* ㅇ ㄱ : 있 */
		{phonemes: [0x110B,0x1107], chars: [0xC785]}, /* ㅇ ㅂ : 입 */
		{phonemes: [0x110B,0x110B], chars: [0xC600]}, /* ㅇ ㅇ : 였 */
		{phonemes: [0x110B,0x1109], chars: [0xC77D]}, /* ㅇ ㅅ : 읽 */
		{phonemes: [0x110B,0x110C], chars: [0xC5C6]}, /* ㅇ ㅈ : 없 */
		{phonemes: [0x110B,0x1112], chars: [0xC783]}, /* ㅇ ㅎ : 잃 */
		{phonemes: [0x110C,0x110B], chars: [0xC815]}, /* ㅈ ㅇ : 정 */
		{phonemes: [0x1109,0x1107], chars: [0xC2B5]}, /* ㅅ ㅂ : 습 */
		{phonemes: [0x1112,0x1107], chars: [0xD569]} /* ㅎ ㅂ : 합 */
	];

	K3_18Na_combination_table = hangeul_combination_table_default.concat([
		[0x11AB11BC,0x11AD], /* jongseong nieun + ieung = jongseong nieun-hieuh */
		[0x11AF11AB,0x11B4], /* jongseong lieul + nieun = jongseong lieul-tieut */
		[0x11AF11BC,0x11B6], /* jongseong lieul + ieung = jongseong lieul-hieuh */
		[0x11B211B8,0x11B5], /* jongseong lieul-bieub + bieub = jongseong lieul-pieup */
		[0x11BD11BD,0x11BE]  /* jongseong jieuj + jieuj = jongseong chieuch */
	]);

	K3_test_abbreviation_table = [
		{phonemes: [0x1109,0x11B8], chars: [0x1109,0x1173,0x11B8,0x1102,0x1175,0x1103,0x1161,0x2E,0x20]}, /* ㅅ *ㅂ : 습니다.  */
		{phonemes: [0x110B,0x11B8], chars: [0xC785,0x1102,0x1175,0x1103,0x1161,0x2E,0x20]}, /* ㅇ *ㅂ : 입니다.  */
		{phonemes: [0x1112,0x11B8], chars: [0x1112,0x1161,0x11B8,0x1102,0x1175,0x1103,0x1161,0x2E,0x20]}, /* ㅎ *ㅂ : 합니다.  */
		{phonemes: [0x1112,0x11AB], chars: [0x1112,0x1161,0x110C,0x1175,0xB9CC,0x20]}, /* ㅎ *ㄴ : 하지만  */
		{phonemes: [0x110C,0x1107], chars: [0x110C,0x1165,0x11BC,0x1107,0x116E]} /* ㅈㅂ : 정부 */
	];

	K3_test_moachigi_hangeul_abbreviation_table = [
		//{phonemes: [0x1109,0x11B8], chars: [0x1109,0x1173,0x11B8,0x1102,0x1175,0x1103,0x1161,0x2E,0x20]}, /* ㅅ *ㅂ : 습니다.  */
	];
	
	K3_test_multikey_abbreviation_table = [
		{class: ['이름1'], keys: ['e','k'], chars: [0xACB0,0xACFC]}, /* 결과 */
		{class: ['이름1'], keys: ['k','x'], chars: [0xAD6D,0xAC00]}, /* 국가 */
		{class: ['이름1'], keys: ['f','l','s','y'], chars: [0xB9C8,0xCC2C,0xAC00,0xC9C0]}, /* 마찬가지 */
		{class: ['이름2'], keys: ['k','z'], chars: [0xAC1C,0xB150]}, /* 개념 */
		{class: ['이름2'], keys: ['s','u'], chars: [0xB0B4,0xB144]}, /* 내년 */
		{class: ['이름2'], keys: ['m','s','t','y'], chars: [0xB77C,0xBA74]}, /* 라면 */
		{class: ['이름3'], keys: ['i','k','r'], chars: [0xAC70,0xB300]}, /* 거대 */
		{class: ['이름3'], keys: ['l','m','r'], chars: [0xCC98,0xB9AC]}, /* 처리 */
		{class: ['이름4'], keys: ['k','o','x'], chars: [0xADF9,0xBCF5]}, /* 극복 */
		{class: ['이름4'], keys: ['a','f','o','y'], chars: [0xBC29,0xBB38]}, /* 방문 */	
		{class: ['풀이1'], keys: ['j','q','r','w'], chars: [0xC5C6,0xC560]}, /* 없애 */
		{class: ['풀이2'], keys: ['j','k','q','w'], chars: [0xB04A,0xC784,0xC5C6]}, /* 끊임없 */

		{prev_class: ['이름1','이름2','이름3'], keys: ['c'], chars: [0xC5D0,0x20]}, /* 에  */
		{prev_class: ['이름1','이름3'], keys: ['e','y'], chars: [0xC57C,0xB9D0,0xB85C,0x20]}, /* 야말로  */
		{prev_class: ['이름2','이름4'], keys: ['e','y'], chars: [0xC774,0xC57C,0xB9D0,0xB85C,0x20]}, /* 이야말로  */
		{prev_class: ['이름1','이름2','이름3','이름4'], class: ['토2'], keys: ['l','m','z'], chars: [0xCC98,0xB7FC]}, /* 처럼 */
		{prev_class: ['이름1','이름3'], class: ['토2'], keys: ['m','s','t'], chars: [0xB77C,0xBA74]}, /* 라면 */
		{prev_class: ['이름2','이름4'], class: ['토2'], keys: ['m','s','t'], chars: [0xC774,0xB77C,0xBA74]}, /* 이라면 */
		{prev_class: ['풀이1'], keys: ['u','w'], chars: [0x11B8,0xB2C8,0xB2E4,0x2E,0x20]}, /* ㅂ니다.  */
		{prev_class: ['풀이2'], keys: ['u','w'], chars: [0xC2B5,0xB2C8,0xB2E4,0x2E,0x20]}, /* 습니다.  */
		{prev_class: ['풀이1'], keys: ['u'], chars: [0xC73C,0xB2C8,0x20]}, /* 니  */
		{prev_class: ['풀이2'], keys: ['u'], chars: [0xC73C,0xB2C8,0x20]}, /* 으니 */
		{prev_class: ['풀이1'], class: ['끝1'], keys: ['d','f','u','k'], chars: [0xB2C8,0xAE4C]}, /* 니까 */
		{prev_class: ['풀이2'], class: ['끝2'],  keys: ['d','f','u','k'], chars: [0xC73C,0xB2C8,0xAE4C]}, /* 으니까 */
		{prev_class: ['이름3','이름4'], keys: ['g','h','u'], chars: [0xD558,0xB294,0x20]}, /* 하는  */
		{prev_class: ['이름1','이름3','풀이1','풀이2'], keys: ['l','s','y'], chars: [0xC9C0,0xB9CC,0x20]}, /* 지만  */
		{prev_class: ['이름2','이름4'], keys: ['l','s','y'], chars: [0xC774,0xC9C0,0xB9CC,0x20]}, /* 이지만  */
		
		{prev_class: ['토1','끝1'], keys: ['s'], chars: [0x11AB,0x20]}, /* ㄴ */
		{prev_class: ['토2','끝2'], keys: ['s'], chars: [0xC740,0x20]}, /* 은 */
	];

} // input_additional_combination_table_info()