import type { LanguageKey } from './languages';

/**
 * English is the source of truth. Every other dictionary is a `Partial` of
 * this shape — anything missing falls back to the English string, so a
 * half-translated key can never blank out the UI.
 */
const en = {
  'login.welcome': 'Welcome to Roov',
  'login.tagline': 'Your People. Your Roads. Your Chaos.',
  'login.title': 'Login',
  'login.subtitle':
    'Enter your mobile number and we’ll text you a one-time code.',
  'login.phonePlaceholder': '00000 00000',
  'login.divider': 'Or Use:',
  'login.emailA11y': 'Continue with email',
  'login.googleA11y': 'Continue with Google',
  'login.newToRoov': 'New to Roov? ',
  'login.register': 'Register',
  'login.proceed': 'Proceed',
  'login.disclaimer':
    'By logging in, you agree to our Terms of Service and Privacy Policy.',

  'language.select': 'Select language',
  'language.close': 'Close',

  'walkthrough.skip': 'Skip',
  'walkthrough.letsRide': "Let's Ride",
  'walkthrough.next': 'Next',
  'walkthrough.titleLead': 'Your',
  'walkthrough.people.word': 'People',
  'walkthrough.people.description':
    'Your crew, your riders, your circle — all in one place.',
  'walkthrough.road.word': 'Road',
  'walkthrough.road.description':
    'Plan routes, track rides, and relive every mile.',
  'walkthrough.chaos.word': 'Chaos',
  'walkthrough.chaos.description':
    'The detours and last-minute meetups that make the ride.',

  'home.liveRide': 'Live ride',
  'home.riding': '{count} riding',
} as const;

export type TranslationKey = keyof typeof en;
export type TranslationVars = Record<string, string | number>;

const hi: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Roov में आपका स्वागत है',
  'login.tagline': 'आपके लोग। आपकी सड़कें। आपकी अफ़रा-तफ़री।',
  'login.title': 'लॉगिन',
  'login.subtitle':
    'अपना मोबाइल नंबर दर्ज करें और हम आपको एक बार का कोड भेजेंगे।',
  'login.divider': 'या इसका उपयोग करें:',
  'login.emailA11y': 'ईमेल से जारी रखें',
  'login.googleA11y': 'Google से जारी रखें',
  'login.newToRoov': 'Roov पर नए हैं? ',
  'login.register': 'रजिस्टर करें',
  'login.proceed': 'आगे बढ़ें',
  'login.disclaimer':
    'लॉगिन करके, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत होते हैं।',
  'language.select': 'भाषा चुनें',
  'language.close': 'बंद करें',
  'walkthrough.skip': 'छोड़ें',
  'walkthrough.letsRide': 'चलो चलें',
  'walkthrough.next': 'आगे',
  'walkthrough.titleLead': 'आपके',
  'walkthrough.people.word': 'लोग',
  'walkthrough.people.description':
    'आपकी टोली, आपके सवार, आपका दायरा — सब एक जगह।',
  'walkthrough.road.word': 'सड़क',
  'walkthrough.road.description':
    'मार्ग बनाएं, राइड ट्रैक करें, और हर मील को फिर से जिएं।',
  'walkthrough.chaos.word': 'अफ़रा-तफ़री',
  'walkthrough.chaos.description':
    'चक्कर और आख़िरी पल की मुलाक़ातें जो राइड को यादगार बनाती हैं।',
  'home.liveRide': 'लाइव राइड',
  'home.riding': '{count} सवार',
};

const kn: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Roov ಗೆ ಸ್ವಾಗತ',
  'login.tagline': 'ನಿಮ್ಮ ಜನ. ನಿಮ್ಮ ದಾರಿಗಳು. ನಿಮ್ಮ ಗೊಂದಲ.',
  'login.title': 'ಲಾಗಿನ್',
  'login.subtitle':
    'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ, ನಾವು ಒಂದು ಬಾರಿಯ ಕೋಡ್ ಕಳುಹಿಸುತ್ತೇವೆ.',
  'login.divider': 'ಅಥವಾ ಬಳಸಿ:',
  'login.emailA11y': 'ಇಮೇಲ್ ಮೂಲಕ ಮುಂದುವರಿಸಿ',
  'login.googleA11y': 'Google ಮೂಲಕ ಮುಂದುವರಿಸಿ',
  'login.newToRoov': 'Roov ಗೆ ಹೊಸಬರೇ? ',
  'login.register': 'ನೋಂದಣಿ',
  'login.proceed': 'ಮುಂದುವರಿಸಿ',
  'login.disclaimer':
    'ಲಾಗಿನ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಸೇವಾ ನಿಯಮಗಳು ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಪ್ಪುತ್ತೀರಿ.',
  'language.select': 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
  'language.close': 'ಮುಚ್ಚಿ',
  'walkthrough.skip': 'ಬಿಟ್ಟುಬಿಡಿ',
  'walkthrough.letsRide': 'ಹೊರಡೋಣ',
  'walkthrough.next': 'ಮುಂದೆ',
  'walkthrough.titleLead': 'ನಿಮ್ಮ',
  'walkthrough.people.word': 'ಜನ',
  'walkthrough.people.description':
    'ನಿಮ್ಮ ತಂಡ, ನಿಮ್ಮ ಸವಾರರು, ನಿಮ್ಮ ವಲಯ — ಎಲ್ಲವೂ ಒಂದೇ ಕಡೆ.',
  'walkthrough.road.word': 'ದಾರಿ',
  'walkthrough.road.description':
    'ಮಾರ್ಗಗಳನ್ನು ಯೋಜಿಸಿ, ಸವಾರಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ, ಪ್ರತಿ ಮೈಲಿಯನ್ನೂ ಮತ್ತೆ ಅನುಭವಿಸಿ.',
  'walkthrough.chaos.word': 'ಗೊಂದಲ',
  'walkthrough.chaos.description':
    'ಸವಾರಿಯನ್ನು ವಿಶೇಷವಾಗಿಸುವ ತಿರುವುಗಳು ಮತ್ತು ಕೊನೆಯ ಕ್ಷಣದ ಭೇಟಿಗಳು.',
  'home.liveRide': 'ಲೈವ್ ರೈಡ್',
  'home.riding': '{count} ಸವಾರಿ',
};

const ta: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Roov க்கு வரவேற்கிறோம்',
  'login.tagline': 'உங்கள் மக்கள். உங்கள் சாலைகள். உங்கள் குழப்பம்.',
  'login.title': 'உள்நுழைவு',
  'login.subtitle':
    'உங்கள் மொபைல் எண்ணை உள்ளிடுங்கள், ஒரு முறை பயன்படுத்தும் குறியீட்டை அனுப்புவோம்.',
  'login.divider': 'அல்லது இதைப் பயன்படுத்தவும்:',
  'login.emailA11y': 'மின்னஞ்சல் மூலம் தொடரவும்',
  'login.googleA11y': 'Google மூலம் தொடரவும்',
  'login.newToRoov': 'Roov இல் புதியவரா? ',
  'login.register': 'பதிவு செய்யவும்',
  'login.proceed': 'தொடரவும்',
  'login.disclaimer':
    'உள்நுழைவதன் மூலம், எங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறீர்கள்.',
  'language.select': 'மொழியைத் தேர்ந்தெடுக்கவும்',
  'language.close': 'மூடு',
  'walkthrough.skip': 'தவிர்',
  'walkthrough.letsRide': 'புறப்படலாம்',
  'walkthrough.next': 'அடுத்து',
  'walkthrough.titleLead': 'உங்கள்',
  'walkthrough.people.word': 'மக்கள்',
  'walkthrough.people.description':
    'உங்கள் குழு, உங்கள் சவாரிக்காரர்கள், உங்கள் வட்டம் — அனைத்தும் ஒரே இடத்தில்.',
  'walkthrough.road.word': 'சாலை',
  'walkthrough.road.description':
    'பாதைகளைத் திட்டமிடுங்கள், சவாரிகளைக் கண்காணியுங்கள், ஒவ்வொரு மைலையும் மீண்டும் வாழுங்கள்.',
  'walkthrough.chaos.word': 'குழப்பம்',
  'walkthrough.chaos.description':
    'சவாரியை சிறப்பாக்கும் திசைமாற்றங்களும் கடைசி நேர சந்திப்புகளும்.',
  'home.liveRide': 'நேரடி சவாரி',
  'home.riding': '{count} சவாரி',
};

const te: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Roov కు స్వాగతం',
  'login.tagline': 'మీ వాళ్ళు. మీ దారులు. మీ గందరగోళం.',
  'login.title': 'లాగిన్',
  'login.subtitle':
    'మీ మొబైల్ నంబర్‌ను నమోదు చేయండి, మేము మీకు ఒకసారి కోడ్ పంపుతాము.',
  'login.divider': 'లేదా వీటిని ఉపయోగించండి:',
  'login.emailA11y': 'ఇమెయిల్‌తో కొనసాగించండి',
  'login.googleA11y': 'Googleతో కొనసాగించండి',
  'login.newToRoov': 'Roovకు కొత్తవారా? ',
  'login.register': 'నమోదు చేసుకోండి',
  'login.proceed': 'కొనసాగించండి',
  'login.disclaimer':
    'లాగిన్ చేయడం ద్వారా, మీరు మా సేవా నిబంధనలు మరియు గోప్యతా విధానానికి అంగీకరిస్తున్నారు.',
  'language.select': 'భాషను ఎంచుకోండి',
  'language.close': 'మూసివేయి',
  'walkthrough.skip': 'దాటవేయి',
  'walkthrough.letsRide': 'బయలుదేరదాం',
  'walkthrough.next': 'తర్వాత',
  'walkthrough.titleLead': 'మీ',
  'walkthrough.people.word': 'వాళ్ళు',
  'walkthrough.people.description':
    'మీ బృందం, మీ రైడర్లు, మీ వర్గం — అన్నీ ఒకే చోట.',
  'walkthrough.road.word': 'దారి',
  'walkthrough.road.description':
    'మార్గాలను ప్లాన్ చేయండి, రైడ్‌లను ట్రాక్ చేయండి, ప్రతి మైలును మళ్లీ అనుభవించండి.',
  'walkthrough.chaos.word': 'గందరగోళం',
  'walkthrough.chaos.description':
    'రైడ్‌ను ప్రత్యేకంగా చేసే మలుపులు మరియు చివరి నిమిష సమావేశాలు.',
  'home.liveRide': 'లైవ్ రైడ్',
  'home.riding': '{count} రైడింగ్',
};

const bn: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Roov-এ স্বাগতম',
  'login.tagline': 'আপনার মানুষ। আপনার পথ। আপনার বিশৃঙ্খলা।',
  'login.title': 'লগইন',
  'login.subtitle':
    'আপনার মোবাইল নম্বর দিন, আমরা আপনাকে একটি এককালীন কোড পাঠাব।',
  'login.divider': 'অথবা ব্যবহার করুন:',
  'login.emailA11y': 'ইমেল দিয়ে চালিয়ে যান',
  'login.googleA11y': 'Google দিয়ে চালিয়ে যান',
  'login.newToRoov': 'Roov-এ নতুন? ',
  'login.register': 'নিবন্ধন করুন',
  'login.proceed': 'এগিয়ে যান',
  'login.disclaimer':
    'লগইন করে, আপনি আমাদের পরিষেবার শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হচ্ছেন।',
  'language.select': 'ভাষা নির্বাচন করুন',
  'language.close': 'বন্ধ করুন',
  'walkthrough.skip': 'এড়িয়ে যান',
  'walkthrough.letsRide': 'চলো যাই',
  'walkthrough.next': 'পরবর্তী',
  'walkthrough.titleLead': 'আপনার',
  'walkthrough.people.word': 'মানুষ',
  'walkthrough.people.description':
    'আপনার দল, আপনার রাইডার, আপনার বৃত্ত — সব এক জায়গায়।',
  'walkthrough.road.word': 'পথ',
  'walkthrough.road.description':
    'রুট পরিকল্পনা করুন, রাইড ট্র্যাক করুন, প্রতিটি মাইল আবার অনুভব করুন।',
  'walkthrough.chaos.word': 'বিশৃঙ্খলা',
  'walkthrough.chaos.description':
    'যে বাঁক আর শেষ মুহূর্তের সাক্ষাৎ রাইডটাকে স্মরণীয় করে তোলে।',
  'home.liveRide': 'লাইভ রাইড',
  'home.riding': '{count} জন রাইডিং',
};

const zh: Partial<Record<TranslationKey, string>> = {
  'login.welcome': '欢迎来到 Roov',
  'login.tagline': '你的伙伴。你的道路。你的热闹。',
  'login.title': '登录',
  'login.subtitle': '输入你的手机号码，我们将向你发送一次性验证码。',
  'login.divider': '或使用：',
  'login.emailA11y': '使用电子邮件继续',
  'login.googleA11y': '使用 Google 继续',
  'login.newToRoov': '第一次使用 Roov？ ',
  'login.register': '注册',
  'login.proceed': '继续',
  'login.disclaimer': '登录即表示你同意我们的服务条款和隐私政策。',
  'language.select': '选择语言',
  'language.close': '关闭',
  'walkthrough.skip': '跳过',
  'walkthrough.letsRide': '出发吧',
  'walkthrough.next': '下一步',
  'walkthrough.titleLead': '你的',
  'walkthrough.people.word': '伙伴',
  'walkthrough.people.description': '你的团队、你的骑友、你的圈子——尽在一处。',
  'walkthrough.road.word': '道路',
  'walkthrough.road.description': '规划路线、记录骑行，重温每一英里。',
  'walkthrough.chaos.word': '热闹',
  'walkthrough.chaos.description': '那些让旅程难忘的绕道和临时相聚。',
  'home.liveRide': '实时骑行',
  'home.riding': '{count} 人骑行',
};

const es: Partial<Record<TranslationKey, string>> = {
  'login.welcome': 'Te damos la bienvenida a Roov',
  'login.tagline': 'Tu gente. Tus caminos. Tu caos.',
  'login.title': 'Iniciar sesión',
  'login.subtitle':
    'Introduce tu número de móvil y te enviaremos un código de un solo uso.',
  'login.divider': 'O usa:',
  'login.emailA11y': 'Continuar con correo electrónico',
  'login.googleA11y': 'Continuar con Google',
  'login.newToRoov': '¿Nuevo en Roov? ',
  'login.register': 'Regístrate',
  'login.proceed': 'Continuar',
  'login.disclaimer':
    'Al iniciar sesión, aceptas nuestros Términos del servicio y la Política de privacidad.',
  'language.select': 'Selecciona el idioma',
  'language.close': 'Cerrar',
  'walkthrough.skip': 'Omitir',
  'walkthrough.letsRide': 'A rodar',
  'walkthrough.next': 'Siguiente',
  'walkthrough.titleLead': 'Tu',
  'walkthrough.people.word': 'Gente',
  'walkthrough.people.description':
    'Tu grupo, tus conductores, tu círculo, todo en un solo lugar.',
  'walkthrough.road.word': 'Camino',
  'walkthrough.road.description':
    'Planifica rutas, registra trayectos y revive cada kilómetro.',
  'walkthrough.chaos.word': 'Caos',
  'walkthrough.chaos.description':
    'Los desvíos y los encuentros de última hora que hacen el viaje.',
  'home.liveRide': 'Ruta en vivo',
  'home.riding': '{count} rodando',
};

const DICTIONARIES: Record<
  LanguageKey,
  Partial<Record<TranslationKey, string>>
> = { en, hi, kn, ta, te, bn, zh, es };

/**
 * Look up `key` in `lang`'s dictionary, falling back to English, then to the
 * raw key. `{name}` placeholders are filled from `vars`.
 */
export function translate(
  lang: LanguageKey,
  key: TranslationKey,
  vars?: TranslationVars,
): string {
  const template = DICTIONARIES[lang]?.[key] ?? en[key] ?? key;
  if (!vars) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (_match, name: string) =>
    name in vars ? String(vars[name]) : `{${name}}`,
  );
}
