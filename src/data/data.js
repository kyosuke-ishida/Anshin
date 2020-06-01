// 文言はここで管理

/** 
 * 全画面共通 
 * 
 * */ 
// ナビゲーション
export const navigations = [
  { label: 'ホーム'   , url: '/' },
  { label: '事業内容' , url: '/BusinessPage' },
  { label: '会社概要' , url: '/CorporatePage' },
  { label: '採用情報' , url: '/RecruitPage' },
];

// リンク先
// 事業内容ページ
export const businessPage = '/BusinessPage';
// 会社概要
export const corporatePage = '/CorporatePage';
// 採用ページ
export const recruitPage = '/RecruitPage';
// 問い合わせページ
export const contactPage = '/ContactPage';

// 住所
export const direction = '岐阜県岐阜市西川手6丁目62番地1';

// コンテンツヘッダー
export const corporateHeading = {
  title: '会社概要', eng: 'Corporate Information'
};

/**
 * ホーム画面
 * 
 * */
// メインコピー
export const heading = '地域の安全は我々が守ります。';

// サブコピー
export const items = [
  {text: '任せてください'},
  {text: '事故の防止に努めます。'}
];

/*
 * 事業内容
 * 
 * */
// 事業内容コピー
export const businessHeading = {
  title: '事業内容', eng: 'Business'
};  

/*
 * 会社情報
 * 
 * */
// コンテンツヘッダー　代表メッセージ
export const greetingHeading = {title: '挨拶', eng: 'Greeting'};
// 代表取締役
export const ceoName= '石田　孝也';
// 会社情報
export const table = [
  {header: '社名', data: '株式会社あんしんセキュリティー'},
  {header: '代表', data: '代表取締役　石田 孝也'},
  {header: '所在地', data: direction},
  {header: 'TEL', data: '058-213-7821'},
  {header: 'FAX', data: '058-213-8712'},
  // {header: 'URL', data: ''},
  // {header: 'E-MAIL', data: ''},
  {header: '資本金', data: '300万円'},
  {header: '設立年月表', data: '2014年12月'},
  {header: '従業員', data: '45名（2020年5月現在）'},
  {header: '取引銀行', data: '十六銀行、大垣共立銀行、岐阜信用金庫'}
];

// コンテンツヘッダー　アクセス
export const accessHeading = {title: 'アクセス', eng: 'Access'};
// 最寄り駅情報
export const nearestStation = '名鉄名古屋本線 岐南駅 徒歩14分';

/**
 * 採用ページ
 * 
 * */ 
// コンテンツヘッダー　採用
export const recruitHeading = {title: '採用情報', eng: 'Recruitment'}
// 募集要項
export const applicantGuideline = [
    {term: '業務内容', description: '水道工事警備、道路の舗装工事警備、駐車場警備、イベント警備'},
    {term: '契約', description: '正社員またはアルバイト'},
    {term: 'その他', description: '週休二日制、制服・備品貸し出し'},
    {term: '応募方法', description: '弊社電話番号に問い合わせていただくか、等サイトの問い合わせ画面よりご応募ください。'},
];

/*
 * 問い合わせ
 * 
 * */
// 問い合わせコピー
export const contactHeading = {
  title: 'お問い合せ', eng: 'Contact'
};  
