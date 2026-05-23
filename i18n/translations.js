// EAT-INN Website Translations
// 38 languages matching the iOS app

const translations = {
  // Language metadata
  languages: {
    en: { name: "English (U.S.)", native: "English (U.S.)", flag: "EN-US" },
    "en-GB": { name: "English (U.K.)", native: "English (U.K.)", flag: "EN-GB" },
    "en-AU": { name: "English (Australia)", native: "English (Australia)", flag: "EN-AU" },
    "en-CA": { name: "English (Canada)", native: "English (Canada)", flag: "EN-CA" },
    ar: { name: "Arabic", native: "العربية", flag: "AR", rtl: true },
    ca: { name: "Catalan", native: "Català", flag: "CA" },
    "zh-Hans": { name: "Chinese (Simplified)", native: "简体中文", flag: "ZH-CN" },
    "zh-Hant": { name: "Chinese (Traditional)", native: "繁體中文", flag: "ZH-TW" },
    hr: { name: "Croatian", native: "Hrvatski", flag: "HR" },
    cs: { name: "Czech", native: "Čeština", flag: "CS" },
    da: { name: "Danish", native: "Dansk", flag: "DA" },
    nl: { name: "Dutch", native: "Nederlands", flag: "NL" },
    fi: { name: "Finnish", native: "Suomi", flag: "FI" },
    fr: { name: "French", native: "Français", flag: "FR" },
    "fr-CA": { name: "French (Canada)", native: "Français (Canada)", flag: "FR-CA" },
    de: { name: "German", native: "Deutsch", flag: "DE" },
    el: { name: "Greek", native: "Ελληνικά", flag: "EL" },
    he: { name: "Hebrew", native: "עברית", flag: "HE", rtl: true },
    hi: { name: "Hindi", native: "हिन्दी", flag: "HI" },
    hu: { name: "Hungarian", native: "Magyar", flag: "HU" },
    id: { name: "Indonesian", native: "Bahasa Indonesia", flag: "ID" },
    it: { name: "Italian", native: "Italiano", flag: "IT" },
    ja: { name: "Japanese", native: "日本語", flag: "JA" },
    ko: { name: "Korean", native: "한국어", flag: "KO" },
    ms: { name: "Malay", native: "Bahasa Melayu", flag: "MS" },
    nb: { name: "Norwegian", native: "Norsk", flag: "NB" },
    pl: { name: "Polish", native: "Polski", flag: "PL" },
    pt: { name: "Portuguese (Brazil)", native: "Português (Brasil)", flag: "PT-BR" },
    "pt-PT": { name: "Portuguese (Portugal)", native: "Português (Portugal)", flag: "PT-PT" },
    ro: { name: "Romanian", native: "Română", flag: "RO" },
    ru: { name: "Russian", native: "Русский", flag: "RU" },
    sk: { name: "Slovak", native: "Slovenčina", flag: "SK" },
    es: { name: "Spanish (Mexico)", native: "Español (México)", flag: "ES-MX" },
    "es-ES": { name: "Spanish (Spain)", native: "Español (España)", flag: "ES-ES" },
    sv: { name: "Swedish", native: "Svenska", flag: "SV" },
    th: { name: "Thai", native: "ไทย", flag: "TH" },
    tr: { name: "Turkish", native: "Türkçe", flag: "TR" },
    uk: { name: "Ukrainian", native: "Українська", flag: "UK" },
    vi: { name: "Vietnamese", native: "Tiếng Việt", flag: "VI" }
  },

  // Translation strings
  strings: {
    // Common
    getApp: {
      en: "Get App", ar: "احصل على التطبيق", ca: "Obtenir l'App", "zh-Hans": "获取应用", "zh-Hant": "取得應用程式",
      hr: "Preuzmi", cs: "Stáhnout", da: "Hent App", nl: "Download App", fi: "Lataa sovellus",
      fr: "Télécharger", de: "App laden", el: "Λήψη", he: "הורד אפליקציה", hi: "ऐप डाउनलोड करें",
      hu: "Letöltés", id: "Dapatkan Aplikasi", it: "Scarica App", ja: "アプリを入手", ko: "앱 다운로드",
      ms: "Dapatkan Aplikasi", nb: "Last ned", pl: "Pobierz", pt: "Baixar App", ro: "Descarcă",
      ru: "Скачать", sk: "Stiahnuť", es: "Descargar", sv: "Hämta App", th: "ดาวน์โหลด",
      tr: "Uygulamayı Al", uk: "Завантажити", vi: "Tải ứng dụng"
    },
    support: {
      en: "Support", ar: "الدعم", ca: "Suport", "zh-Hans": "支持", "zh-Hant": "支援",
      hr: "Podrška", cs: "Podpora", da: "Support", nl: "Ondersteuning", fi: "Tuki",
      fr: "Support", de: "Support", el: "Υποστήριξη", he: "תמיכה", hi: "सहायता",
      hu: "Támogatás", id: "Dukungan", it: "Supporto", ja: "サポート", ko: "지원",
      ms: "Sokongan", nb: "Støtte", pl: "Wsparcie", pt: "Suporte", ro: "Suport",
      ru: "Поддержка", sk: "Podpora", es: "Soporte", sv: "Support", th: "ฝ่ายช่วยเหลือ",
      tr: "Destek", uk: "Підтримка", vi: "Hỗ trợ"
    },
    contact: {
      en: "Contact", ar: "اتصل", ca: "Contacte", "zh-Hans": "联系", "zh-Hant": "聯絡",
      hr: "Kontakt", cs: "Kontakt", da: "Kontakt", nl: "Contact", fi: "Yhteystiedot",
      fr: "Contact", de: "Kontakt", el: "Επικοινωνία", he: "צור קשר", hi: "संपर्क करें",
      hu: "Kapcsolat", id: "Kontak", it: "Contatto", ja: "お問い合わせ", ko: "연락처",
      ms: "Hubungi", nb: "Kontakt", pl: "Kontakt", pt: "Contato", ro: "Contact",
      ru: "Контакты", sk: "Kontakt", es: "Contacto", sv: "Kontakt", th: "ติดต่อ",
      tr: "İletişim", uk: "Контакт", vi: "Liên hệ"
    },
    termsOfService: {
      en: "Terms of Service", ar: "شروط الخدمة", ca: "Termes del servei", "zh-Hans": "服务条款", "zh-Hant": "服務條款",
      hr: "Uvjeti korištenja", cs: "Podmínky služby", da: "Servicevilkår", nl: "Servicevoorwaarden", fi: "Käyttöehdot",
      fr: "Conditions d'utilisation", de: "Nutzungsbedingungen", el: "Όροι χρήσης", he: "תנאי שירות", hi: "सेवा की शर्तें",
      hu: "Szolgáltatási feltételek", id: "Ketentuan Layanan", it: "Termini di servizio", ja: "利用規約", ko: "이용약관",
      ms: "Syarat Perkhidmatan", nb: "Tjenestevilkår", pl: "Regulamin", pt: "Termos de serviço", ro: "Termeni și condiții",
      ru: "Условия использования", sk: "Podmienky služby", es: "Términos de servicio", sv: "Användarvillkor", th: "ข้อกำหนดการให้บริการ",
      tr: "Hizmet Şartları", uk: "Умови використання", vi: "Điều khoản dịch vụ"
    },
    privacyPolicy: {
      en: "Privacy Policy", ar: "سياسة الخصوصية", ca: "Política de privacitat", "zh-Hans": "隐私政策", "zh-Hant": "隱私政策",
      hr: "Pravila privatnosti", cs: "Zásady ochrany soukromí", da: "Privatlivspolitik", nl: "Privacybeleid", fi: "Tietosuojakäytäntö",
      fr: "Politique de confidentialité", de: "Datenschutzrichtlinie", el: "Πολιτική απορρήτου", he: "מדיניות פרטיות", hi: "गोपनीयता नीति",
      hu: "Adatvédelmi irányelvek", id: "Kebijakan Privasi", it: "Informativa sulla privacy", ja: "プライバシーポリシー", ko: "개인정보 처리방침",
      ms: "Dasar Privasi", nb: "Personvernerklæring", pl: "Polityka prywatności", pt: "Política de privacidade", ro: "Politica de confidențialitate",
      ru: "Политика конфиденциальности", sk: "Zásady ochrany súkromia", es: "Política de privacidad", sv: "Integritetspolicy", th: "นโยบายความเป็นส่วนตัว",
      tr: "Gizlilik Politikası", uk: "Політика конфіденційності", vi: "Chính sách bảo mật"
    },
    terms: {
      en: "Terms", ar: "الشروط", ca: "Termes", "zh-Hans": "条款", "zh-Hant": "條款",
      hr: "Uvjeti", cs: "Podmínky", da: "Vilkår", nl: "Voorwaarden", fi: "Ehdot",
      fr: "Conditions", de: "AGB", el: "Όροι", he: "תנאים", hi: "शर्तें",
      hu: "Feltételek", id: "Ketentuan", it: "Termini", ja: "利用規約", ko: "약관",
      ms: "Terma", nb: "Vilkår", pl: "Regulamin", pt: "Termos", ro: "Termeni",
      ru: "Условия", sk: "Podmienky", es: "Términos", sv: "Villkor", th: "ข้อกำหนด",
      tr: "Şartlar", uk: "Умови", vi: "Điều khoản"
    },
    privacy: {
      en: "Privacy", ar: "الخصوصية", ca: "Privacitat", "zh-Hans": "隐私", "zh-Hant": "隱私",
      hr: "Privatnost", cs: "Soukromí", da: "Privatliv", nl: "Privacy", fi: "Yksityisyys",
      fr: "Confidentialité", de: "Datenschutz", el: "Απόρρητο", he: "פרטיות", hi: "गोपनीयता",
      hu: "Adatvédelem", id: "Privasi", it: "Privacy", ja: "プライバシー", ko: "개인정보",
      ms: "Privasi", nb: "Personvern", pl: "Prywatność", pt: "Privacidade", ro: "Confidențialitate",
      ru: "Конфиденциальность", sk: "Súkromie", es: "Privacidad", sv: "Integritet", th: "ความเป็นส่วนตัว",
      tr: "Gizlilik", uk: "Конфіденційність", vi: "Quyền riêng tư"
    },
    loading: {
      en: "Loading...", ar: "جار التحميل...", ca: "Carregant...", "zh-Hans": "加载中...", "zh-Hant": "載入中...",
      hr: "Učitavanje...", cs: "Načítání...", da: "Indlæser...", nl: "Laden...", fi: "Ladataan...",
      fr: "Chargement...", de: "Laden...", el: "Φόρτωση...", he: "טוען...", hi: "लोड हो रहा है...",
      hu: "Betöltés...", id: "Memuat...", it: "Caricamento...", ja: "読み込み中...", ko: "로딩 중...",
      ms: "Memuatkan...", nb: "Laster...", pl: "Ładowanie...", pt: "Carregando...", ro: "Se încarcă...",
      ru: "Загрузка...", sk: "Načítava sa...", es: "Cargando...", sv: "Laddar...", th: "กำลังโหลด...",
      tr: "Yükleniyor...", uk: "Завантаження...", vi: "Đang tải..."
    },
    error: {
      en: "Error", ar: "خطأ", ca: "Error", "zh-Hans": "错误", "zh-Hant": "錯誤",
      hr: "Pogreška", cs: "Chyba", da: "Fejl", nl: "Fout", fi: "Virhe",
      fr: "Erreur", de: "Fehler", el: "Σφάλμα", he: "שגיאה", hi: "त्रुटि",
      hu: "Hiba", id: "Kesalahan", it: "Errore", ja: "エラー", ko: "오류",
      ms: "Ralat", nb: "Feil", pl: "Błąd", pt: "Erro", ro: "Eroare",
      ru: "Ошибка", sk: "Chyba", es: "Error", sv: "Fel", th: "ข้อผิดพลาด",
      tr: "Hata", uk: "Помилка", vi: "Lỗi"
    },
    success: {
      en: "Success", ar: "نجاح", ca: "Èxit", "zh-Hans": "成功", "zh-Hant": "成功",
      hr: "Uspjeh", cs: "Úspěch", da: "Succes", nl: "Succes", fi: "Onnistui",
      fr: "Succès", de: "Erfolg", el: "Επιτυχία", he: "הצלחה", hi: "सफलता",
      hu: "Siker", id: "Berhasil", it: "Successo", ja: "成功", ko: "성공",
      ms: "Berjaya", nb: "Suksess", pl: "Sukces", pt: "Sucesso", ro: "Succes",
      ru: "Успех", sk: "Úspech", es: "Éxito", sv: "Klart", th: "สำเร็จ",
      tr: "Başarılı", uk: "Успіх", vi: "Thành công"
    },
    save: {
      en: "Save", ar: "حفظ", ca: "Desar", "zh-Hans": "保存", "zh-Hant": "儲存",
      hr: "Spremi", cs: "Uložit", da: "Gem", nl: "Opslaan", fi: "Tallenna",
      fr: "Enregistrer", de: "Speichern", el: "Αποθήκευση", he: "שמור", hi: "सहेजें",
      hu: "Mentés", id: "Simpan", it: "Salva", ja: "保存", ko: "저장",
      ms: "Simpan", nb: "Lagre", pl: "Zapisz", pt: "Salvar", ro: "Salvează",
      ru: "Сохранить", sk: "Uložiť", es: "Guardar", sv: "Spara", th: "บันทึก",
      tr: "Kaydet", uk: "Зберегти", vi: "Lưu"
    },
    cancel: {
      en: "Cancel", ar: "إلغاء", ca: "Cancel·lar", "zh-Hans": "取消", "zh-Hant": "取消",
      hr: "Odustani", cs: "Zrušit", da: "Annuller", nl: "Annuleren", fi: "Peruuta",
      fr: "Annuler", de: "Abbrechen", el: "Ακύρωση", he: "ביטול", hi: "रद्द करें",
      hu: "Mégse", id: "Batal", it: "Annulla", ja: "キャンセル", ko: "취소",
      ms: "Batal", nb: "Avbryt", pl: "Anuluj", pt: "Cancelar", ro: "Anulează",
      ru: "Отмена", sk: "Zrušiť", es: "Cancelar", sv: "Avbryt", th: "ยกเลิก",
      tr: "İptal", uk: "Скасувати", vi: "Hủy"
    },
    back: {
      en: "Back", ar: "رجوع", ca: "Enrere", "zh-Hans": "返回", "zh-Hant": "返回",
      hr: "Natrag", cs: "Zpět", da: "Tilbage", nl: "Terug", fi: "Takaisin",
      fr: "Retour", de: "Zurück", el: "Πίσω", he: "חזרה", hi: "वापस",
      hu: "Vissza", id: "Kembali", it: "Indietro", ja: "戻る", ko: "뒤로",
      ms: "Kembali", nb: "Tilbake", pl: "Wstecz", pt: "Voltar", ro: "Înapoi",
      ru: "Назад", sk: "Späť", es: "Atrás", sv: "Tillbaka", th: "ย้อนกลับ",
      tr: "Geri", uk: "Назад", vi: "Quay lại"
    },
    tryAgain: {
      en: "Try Again", ar: "حاول مرة أخرى", ca: "Torna-ho a provar", "zh-Hans": "重试", "zh-Hant": "重試",
      hr: "Pokušaj ponovo", cs: "Zkusit znovu", da: "Prøv igen", nl: "Opnieuw proberen", fi: "Yritä uudelleen",
      fr: "Réessayer", de: "Erneut versuchen", el: "Δοκιμάστε ξανά", he: "נסה שוב", hi: "पुन: प्रयास करें",
      hu: "Újra", id: "Coba Lagi", it: "Riprova", ja: "再試行", ko: "다시 시도",
      ms: "Cuba Lagi", nb: "Prøv igjen", pl: "Spróbuj ponownie", pt: "Tentar novamente", ro: "Încearcă din nou",
      ru: "Повторить", sk: "Skúsiť znova", es: "Reintentar", sv: "Försök igen", th: "ลองอีกครั้ง",
      tr: "Tekrar Dene", uk: "Спробувати знову", vi: "Thử lại"
    },

    // Auth pages
    email: {
      en: "Email", ar: "البريد الإلكتروني", ca: "Correu electrònic", "zh-Hans": "邮箱", "zh-Hant": "電子郵件",
      hr: "E-pošta", cs: "E-mail", da: "E-mail", nl: "E-mail", fi: "Sähköposti",
      fr: "E-mail", de: "E-Mail", el: "Email", he: "אימייל", hi: "ईमेल",
      hu: "E-mail", id: "Email", it: "Email", ja: "メール", ko: "이메일",
      ms: "E-mel", nb: "E-post", pl: "E-mail", pt: "Email", ro: "E-mail",
      ru: "Электронная почта", sk: "E-mail", es: "Correo Electrónico", sv: "E-post", th: "อีเมล",
      tr: "E-posta", uk: "Електронна пошта", vi: "Email"
    },
    password: {
      en: "Password", ar: "كلمة المرور", ca: "Contrasenya", "zh-Hans": "密码", "zh-Hant": "密碼",
      hr: "Lozinka", cs: "Heslo", da: "Adgangskode", nl: "Wachtwoord", fi: "Salasana",
      fr: "Mot de passe", de: "Passwort", el: "Κωδικός", he: "סיסמה", hi: "पासवर्ड",
      hu: "Jelszó", id: "Kata Sandi", it: "Password", ja: "パスワード", ko: "비밀번호",
      ms: "Kata Laluan", nb: "Passord", pl: "Hasło", pt: "Senha", ro: "Parolă",
      ru: "Пароль", sk: "Heslo", es: "Contraseña", sv: "Lösenord", th: "รหัสผ่าน",
      tr: "Şifre", uk: "Пароль", vi: "Mật khẩu"
    },
    confirmPassword: {
      en: "Confirm Password", ar: "تأكيد كلمة المرور", ca: "Confirmar contrasenya", "zh-Hans": "确认密码", "zh-Hant": "確認密碼",
      hr: "Potvrdi lozinku", cs: "Potvrzení hesla", da: "Bekræft adgangskode", nl: "Bevestig wachtwoord", fi: "Vahvista salasana",
      fr: "Confirmer le mot de passe", de: "Passwort bestätigen", el: "Επιβεβαίωση κωδικού", he: "אשר סיסמה", hi: "पासवर्ड की पुष्टि करें",
      hu: "Jelszó megerősítése", id: "Konfirmasi Kata Sandi", it: "Conferma password", ja: "パスワードを確認", ko: "비밀번호 확인",
      ms: "Sahkan Kata Laluan", nb: "Bekreft passord", pl: "Potwierdź hasło", pt: "Confirmar senha", ro: "Confirmă parola",
      ru: "Подтвердите пароль", sk: "Potvrďte heslo", es: "Confirmar contraseña", sv: "Bekräfta lösenord", th: "ยืนยันรหัสผ่าน",
      tr: "Şifreyi Onayla", uk: "Підтвердьте пароль", vi: "Xác nhận mật khẩu"
    },
    newPassword: {
      en: "New Password", ar: "كلمة مرور جديدة", ca: "Nova contrasenya", "zh-Hans": "新密码", "zh-Hant": "新密碼",
      hr: "Nova lozinka", cs: "Nové heslo", da: "Nyt password", nl: "Nieuw wachtwoord", fi: "Uusi salasana",
      fr: "Nouveau mot de passe", de: "Neues Passwort", el: "Νέος κωδικός", he: "סיסמה חדשה", hi: "नया पासवर्ड",
      hu: "Új jelszó", id: "Kata Sandi Baru", it: "Nuova password", ja: "新しいパスワード", ko: "새 비밀번호",
      ms: "Kata Laluan Baharu", nb: "Nytt passord", pl: "Nowe hasło", pt: "Nova senha", ro: "Parolă nouă",
      ru: "Новый пароль", sk: "Nové heslo", es: "Nueva contraseña", sv: "Nytt lösenord", th: "รหัสผ่านใหม่",
      tr: "Yeni Şifre", uk: "Новий пароль", vi: "Mật khẩu mới"
    },
    createPassword: {
      en: "Create Password", ar: "إنشاء كلمة المرور", ca: "Crear contrasenya", "zh-Hans": "创建密码", "zh-Hant": "建立密碼",
      hr: "Kreiraj lozinku", cs: "Vytvořit heslo", da: "Opret adgangskode", nl: "Wachtwoord maken", fi: "Luo salasana",
      fr: "Créer un mot de passe", de: "Passwort erstellen", el: "Δημιουργία κωδικού", he: "צור סיסמה", hi: "पासवर्ड बनाएं",
      hu: "Jelszó létrehozása", id: "Buat Kata Sandi", it: "Crea password", ja: "パスワードを作成", ko: "비밀번호 만들기",
      ms: "Cipta Kata Laluan", nb: "Opprett passord", pl: "Utwórz hasło", pt: "Criar senha", ro: "Creează parolă",
      ru: "Создать пароль", sk: "Vytvoriť heslo", es: "Crear contraseña", sv: "Skapa lösenord", th: "สร้างรหัสผ่าน",
      tr: "Şifre Oluştur", uk: "Створити пароль", vi: "Tạo mật khẩu"
    },
    resetPassword: {
      en: "Reset Password", ar: "إعادة تعيين كلمة المرور", ca: "Restablir contrasenya", "zh-Hans": "重置密码", "zh-Hant": "重設密碼",
      hr: "Resetiraj lozinku", cs: "Obnovit heslo", da: "Nulstil adgangskode", nl: "Wachtwoord resetten", fi: "Nollaa salasana",
      fr: "Réinitialiser le mot de passe", de: "Passwort zurücksetzen", el: "Επαναφορά κωδικού", he: "איפוס סיסמה", hi: "पासवर्ड रीसेट करें",
      hu: "Jelszó visszaállítása", id: "Atur Ulang Kata Sandi", it: "Reimposta password", ja: "パスワードをリセット", ko: "비밀번호 재설정",
      ms: "Tetapkan Semula Kata Laluan", nb: "Tilbakestill passord", pl: "Zresetuj hasło", pt: "Redefinir senha", ro: "Resetează parola",
      ru: "Сбросить пароль", sk: "Obnoviť heslo", es: "Restablecer contraseña", sv: "Återställ lösenord", th: "รีเซ็ตรหัสผ่าน",
      tr: "Şifreyi Sıfırla", uk: "Скинути пароль", vi: "Đặt lại mật khẩu"
    },
    signIn: {
      en: "Sign In", ar: "تسجيل الدخول", ca: "Iniciar sessió", "zh-Hans": "登录", "zh-Hant": "登入",
      hr: "Prijava", cs: "Přihlásit se", da: "Log ind", nl: "Inloggen", fi: "Kirjaudu sisään",
      fr: "Se connecter", de: "Anmelden", el: "Σύνδεση", he: "התחברות", hi: "साइन इन करें",
      hu: "Bejelentkezés", id: "Masuk", it: "Accedi", ja: "サインイン", ko: "로그인",
      ms: "Log Masuk", nb: "Logg inn", pl: "Zaloguj się", pt: "Entrar", ro: "Autentificare",
      ru: "Войти", sk: "Prihlásiť sa", es: "Iniciar sesión", sv: "Logga in", th: "เข้าสู่ระบบ",
      tr: "Giriş Yap", uk: "Увійти", vi: "Đăng nhập"
    },
    emailConfirmed: {
      en: "Email Confirmed", ar: "تم تأكيد البريد الإلكتروني", ca: "Correu confirmat", "zh-Hans": "邮箱已确认", "zh-Hant": "電子郵件已確認",
      hr: "E-pošta potvrđena", cs: "E-mail potvrzen", da: "E-mail bekræftet", nl: "E-mail bevestigd", fi: "Sähköposti vahvistettu",
      fr: "E-mail confirmé", de: "E-Mail bestätigt", el: "Email επιβεβαιώθηκε", he: "אימייל אושר", hi: "ईमेल की पुष्टि हो गई",
      hu: "E-mail megerősítve", id: "Email Dikonfirmasi", it: "Email confermata", ja: "メール確認済み", ko: "이메일 확인됨",
      ms: "E-mel Disahkan", nb: "E-post bekreftet", pl: "E-mail potwierdzony", pt: "Email confirmado", ro: "E-mail confirmat",
      ru: "Email подтвержден", sk: "E-mail potvrdený", es: "Correo confirmado", sv: "E-post bekräftad", th: "ยืนยันอีเมลแล้ว",
      tr: "E-posta Onaylandı", uk: "Email підтверджено", vi: "Email đã xác nhận"
    },
    verifyingEmail: {
      en: "Verifying your email...", ar: "جارٍ التحقق من بريدك الإلكتروني...", ca: "Verificant el teu correu...", "zh-Hans": "正在验证您的邮箱...", "zh-Hant": "正在驗證您的電子郵件...",
      hr: "Provjera vaše e-pošte...", cs: "Ověřování vašeho e-mailu...", da: "Bekræfter din e-mail...", nl: "Je e-mail verifiëren...", fi: "Vahvistetaan sähköpostiasi...",
      fr: "Vérification de votre e-mail...", de: "Ihre E-Mail wird verifiziert...", el: "Επαλήθευση του email σας...", he: "מאמת את האימייל שלך...", hi: "आपका ईमेल सत्यापित हो रहा है...",
      hu: "E-mail ellenőrzése...", id: "Memverifikasi email Anda...", it: "Verifica della tua email...", ja: "メールを確認中...", ko: "이메일 확인 중...",
      ms: "Mengesahkan e-mel anda...", nb: "Verifiserer e-posten din...", pl: "Weryfikacja e-maila...", pt: "Verificando seu email...", ro: "Se verifică e-mailul...",
      ru: "Проверка вашей почты...", sk: "Overovanie vášho e-mailu...", es: "Verificando tu correo...", sv: "Verifierar din e-post...", th: "กำลังยืนยันอีเมลของคุณ...",
      tr: "E-postanız doğrulanıyor...", uk: "Перевірка вашої пошти...", vi: "Đang xác minh email của bạn..."
    },
    goToAppStore: {
      en: "Go to App Store", ar: "الذهاب إلى متجر التطبيقات", ca: "Anar a l'App Store", "zh-Hans": "前往 App Store", "zh-Hant": "前往 App Store",
      hr: "Idi na App Store", cs: "Přejít do App Store", da: "Gå til App Store", nl: "Ga naar App Store", fi: "Siirry App Storeen",
      fr: "Aller sur l'App Store", de: "Zum App Store", el: "Μετάβαση στο App Store", he: "עבור ל-App Store", hi: "App Store पर जाएं",
      hu: "Ugrás az App Store-ba", id: "Buka App Store", it: "Vai all'App Store", ja: "App Storeへ", ko: "App Store로 이동",
      ms: "Pergi ke App Store", nb: "Gå til App Store", pl: "Przejdź do App Store", pt: "Ir para a App Store", ro: "Mergi la App Store",
      ru: "Перейти в App Store", sk: "Prejsť do App Store", es: "Ir a la App Store", sv: "Gå till App Store", th: "ไปที่ App Store",
      tr: "App Store'a Git", uk: "Перейти до App Store", vi: "Đi đến App Store"
    },
    acceptInvitation: {
      en: "Accept Invitation", ar: "قبول الدعوة", ca: "Acceptar invitació", "zh-Hans": "接受邀请", "zh-Hant": "接受邀請",
      hr: "Prihvati pozivnicu", cs: "Přijmout pozvánku", da: "Accepter invitation", nl: "Uitnodiging accepteren", fi: "Hyväksy kutsu",
      fr: "Accepter l'invitation", de: "Einladung annehmen", el: "Αποδοχή πρόσκλησης", he: "קבל הזמנה", hi: "आमंत्रण स्वीकार करें",
      hu: "Meghívó elfogadása", id: "Terima Undangan", it: "Accetta invito", ja: "招待を承諾", ko: "초대 수락",
      ms: "Terima Jemputan", nb: "Godta invitasjon", pl: "Zaakceptuj zaproszenie", pt: "Aceitar convite", ro: "Acceptă invitația",
      ru: "Принять приглашение", sk: "Prijať pozvánku", es: "Aceptar invitación", sv: "Acceptera inbjudan", th: "ยอมรับคำเชิญ",
      tr: "Daveti Kabul Et", uk: "Прийняти запрошення", vi: "Chấp nhận lời mời"
    },
    identityVerification: {
      en: "Identity Verification", ar: "التحقق من الهوية", ca: "Verificació d'identitat", "zh-Hans": "身份验证", "zh-Hant": "身份驗證",
      hr: "Provjera identiteta", cs: "Ověření identity", da: "Identitetsbekræftelse", nl: "Identiteitsverificatie", fi: "Henkilöllisyyden vahvistus",
      fr: "Vérification d'identité", de: "Identitätsprüfung", el: "Επαλήθευση ταυτότητας", he: "אימות זהות", hi: "पहचान सत्यापन",
      hu: "Személyazonosság ellenőrzése", id: "Verifikasi Identitas", it: "Verifica dell'identità", ja: "本人確認", ko: "본인 인증",
      ms: "Pengesahan Identiti", nb: "Identitetsbekreftelse", pl: "Weryfikacja tożsamości", pt: "Verificação de identidade", ro: "Verificare identitate",
      ru: "Подтверждение личности", sk: "Overenie identity", es: "Verificación de identidad", sv: "Identitetsverifiering", th: "ยืนยันตัวตน",
      tr: "Kimlik Doğrulama", uk: "Перевірка особи", vi: "Xác minh danh tính"
    },
    updateEmail: {
      en: "Update Email", ar: "تحديث البريد الإلكتروني", ca: "Actualitzar correu", "zh-Hans": "更新邮箱", "zh-Hant": "更新電子郵件",
      hr: "Ažuriraj e-poštu", cs: "Aktualizovat e-mail", da: "Opdater e-mail", nl: "E-mail bijwerken", fi: "Päivitä sähköposti",
      fr: "Mettre à jour l'e-mail", de: "E-Mail aktualisieren", el: "Ενημέρωση email", he: "עדכן אימייל", hi: "ईमेल अपडेट करें",
      hu: "E-mail frissítése", id: "Perbarui Email", it: "Aggiorna email", ja: "メールを更新", ko: "이메일 업데이트",
      ms: "Kemas Kini E-mel", nb: "Oppdater e-post", pl: "Zaktualizuj e-mail", pt: "Atualizar email", ro: "Actualizează e-mail",
      ru: "Обновить email", sk: "Aktualizovať e-mail", es: "Actualizar correo", sv: "Uppdatera e-post", th: "อัปเดตอีเมล",
      tr: "E-postayı Güncelle", uk: "Оновити email", vi: "Cập nhật email"
    },

    // Recipe page
    ingredients: {
      en: "Ingredients", ar: "المكونات", ca: "Ingredients", "zh-Hans": "食材", "zh-Hant": "食材",
      hr: "Sastojci", cs: "Ingredience", da: "Ingredienser", nl: "Ingrediënten", fi: "Ainekset",
      fr: "Ingrédients", de: "Zutaten", el: "Υλικά", he: "מרכיבים", hi: "सामग्री",
      hu: "Hozzávalók", id: "Bahan", it: "Ingredienti", ja: "材料", ko: "재료",
      ms: "Bahan", nb: "Ingredienser", pl: "Składniki", pt: "Ingredientes", ro: "Ingrediente",
      ru: "Ингредиенты", sk: "Ingrediencie", es: "Ingredientes", sv: "Ingredienser", th: "ส่วนผสม",
      tr: "Malzemeler", uk: "Інгредієнти", vi: "Nguyên liệu"
    },
    instructions: {
      en: "Instructions", ar: "التعليمات", ca: "Instruccions", "zh-Hans": "步骤", "zh-Hant": "步驟",
      hr: "Upute", cs: "Instrukce", da: "Instruktioner", nl: "Instructies", fi: "Ohjeet",
      fr: "Instructions", de: "Anweisungen", el: "Οδηγίες", he: "הוראות", hi: "निर्देश",
      hu: "Utasítások", id: "Instruksi", it: "Istruzioni", ja: "手順", ko: "조리법",
      ms: "Arahan", nb: "Instruksjoner", pl: "Instrukcje", pt: "Instruções", ro: "Instrucțiuni",
      ru: "Инструкции", sk: "Inštrukcie", es: "Instrucciones", sv: "Instruktioner", th: "วิธีทำ",
      tr: "Talimatlar", uk: "Інструкції", vi: "Hướng dẫn"
    },
    nutritionPerServing: {
      en: "Nutrition per Serving", ar: "القيمة الغذائية لكل حصة", ca: "Nutrició per porció", "zh-Hans": "每份营养", "zh-Hant": "每份營養",
      hr: "Prehrana po porciji", cs: "Nutriční hodnoty na porci", da: "Ernæring per portion", nl: "Voeding per portie", fi: "Ravinto per annos",
      fr: "Nutrition par portion", de: "Nährwerte pro Portion", el: "Θρεπτική αξία ανά μερίδα", he: "ערכים תזונתיים למנה", hi: "प्रति सर्विंग पोषण",
      hu: "Táplálkozási értékek adagonként", id: "Nutrisi per Porsi", it: "Valori nutrizionali per porzione", ja: "1人前あたりの栄養", ko: "1인분 영양 정보",
      ms: "Nutrisi per Hidangan", nb: "Ernæring per porsjon", pl: "Wartości odżywcze na porcję", pt: "Nutrição por porção", ro: "Nutriție per porție",
      ru: "Пищевая ценность на порцию", sk: "Výživové hodnoty na porciu", es: "Nutrición por porción", sv: "Näring per portion", th: "โภชนาการต่อหนึ่งเสิร์ฟ",
      tr: "Porsiyon başına besin değeri", uk: "Харчова цінність на порцію", vi: "Dinh dưỡng mỗi phần"
    },
    calories: {
      en: "Calories", ar: "السعرات الحرارية", ca: "Calories", "zh-Hans": "卡路里", "zh-Hant": "卡路里",
      hr: "Kalorije", cs: "Kalorie", da: "Kalorier", nl: "Calorieën", fi: "Kalorit",
      fr: "Calories", de: "Kalorien", el: "Θερμίδες", he: "קלוריות", hi: "कैलोरी",
      hu: "Kalória", id: "Kalori", it: "Calorie", ja: "カロリー", ko: "칼로리",
      ms: "Kalori", nb: "Kalorier", pl: "Kalorie", pt: "Calorias", ro: "Calorii",
      ru: "Калории", sk: "Kalórie", es: "Calorías", sv: "Kalorier", th: "แคลอรี่",
      tr: "Kalori", uk: "Калорії", vi: "Calo"
    },
    protein: {
      en: "Protein", ar: "البروتين", ca: "Proteïna", "zh-Hans": "蛋白质", "zh-Hant": "蛋白質",
      hr: "Proteini", cs: "Bílkoviny", da: "Protein", nl: "Eiwitten", fi: "Proteiini",
      fr: "Protéines", de: "Protein", el: "Πρωτεΐνη", he: "חלבון", hi: "प्रोटीन",
      hu: "Fehérje", id: "Protein", it: "Proteine", ja: "タンパク質", ko: "단백질",
      ms: "Protein", nb: "Protein", pl: "Białko", pt: "Proteína", ro: "Proteine",
      ru: "Белок", sk: "Bielkoviny", es: "Proteína", sv: "Protein", th: "โปรตีน",
      tr: "Protein", uk: "Білок", vi: "Protein"
    },
    carbs: {
      en: "Carbs", ar: "الكربوهيدرات", ca: "Carbohidrats", "zh-Hans": "碳水化合物", "zh-Hant": "碳水化合物",
      hr: "Ugljikohidrati", cs: "Sacharidy", da: "Kulhydrater", nl: "Koolhydraten", fi: "Hiilihydraatit",
      fr: "Glucides", de: "Kohlenhydrate", el: "Υδατάνθρακες", he: "פחמימות", hi: "कार्ब्स",
      hu: "Szénhidrátok", id: "Karbohidrat", it: "Carboidrati", ja: "炭水化物", ko: "탄수화물",
      ms: "Karbohidrat", nb: "Karbohydrater", pl: "Węglowodany", pt: "Carboidratos", ro: "Carbohidrați",
      ru: "Углеводы", sk: "Sacharidy", es: "Carbohidratos", sv: "Kolhydrater", th: "คาร์โบไฮเดรต",
      tr: "Karbonhidratlar", uk: "Вуглеводи", vi: "Carb"
    },
    fat: {
      en: "Fat", ar: "الدهون", ca: "Greix", "zh-Hans": "脂肪", "zh-Hant": "脂肪",
      hr: "Masti", cs: "Tuky", da: "Fedt", nl: "Vet", fi: "Rasva",
      fr: "Lipides", de: "Fett", el: "Λιπαρά", he: "שומן", hi: "वसा",
      hu: "Zsír", id: "Lemak", it: "Grassi", ja: "脂質", ko: "지방",
      ms: "Lemak", nb: "Fett", pl: "Tłuszcz", pt: "Gordura", ro: "Grăsimi",
      ru: "Жиры", sk: "Tuky", es: "Grasa", sv: "Fett", th: "ไขมัน",
      tr: "Yağ", uk: "Жири", vi: "Chất béo"
    },
    fiber: {
      en: "Fiber", ar: "الألياف", ca: "Fibra", "zh-Hans": "纤维", "zh-Hant": "纖維",
      hr: "Vlakna", cs: "Vláknina", da: "Fibre", nl: "Vezels", fi: "Kuitu",
      fr: "Fibres", de: "Ballaststoffe", el: "Φυτικές ίνες", he: "סיבים", hi: "फाइबर",
      hu: "Rost", id: "Serat", it: "Fibre", ja: "食物繊維", ko: "식이섬유",
      ms: "Serat", nb: "Fiber", pl: "Błonnik", pt: "Fibra", ro: "Fibre",
      ru: "Клетчатка", sk: "Vláknina", es: "Fibra", sv: "Fiber", th: "ไฟเบอร์",
      tr: "Lif", uk: "Клітковина", vi: "Chất xơ"
    },
    sugar: {
      en: "Sugar", ar: "السكر", ca: "Sucre", "zh-Hans": "糖", "zh-Hant": "糖",
      hr: "Šećer", cs: "Cukr", da: "Sukker", nl: "Suiker", fi: "Sokeri",
      fr: "Sucre", de: "Zucker", el: "Ζάχαρη", he: "סוכר", hi: "चीनी",
      hu: "Cukor", id: "Gula", it: "Zucchero", ja: "糖分", ko: "당류",
      ms: "Gula", nb: "Sukker", pl: "Cukier", pt: "Açúcar", ro: "Zahăr",
      ru: "Сахар", sk: "Cukor", es: "Azúcar", sv: "Socker", th: "น้ำตาล",
      tr: "Şeker", uk: "Цукор", vi: "Đường"
    },
    servings: {
      en: "Servings", ar: "الحصص", ca: "Racions", "zh-Hans": "份量", "zh-Hant": "份量",
      hr: "Porcije", cs: "Porcí", da: "Portioner", nl: "Porties", fi: "Annosta",
      fr: "Portions", de: "Portionen", el: "Μερίδες", he: "מנות", hi: "सर्विंग्स",
      hu: "Adag", id: "Porsi", it: "Porzioni", ja: "人前", ko: "인분",
      ms: "Hidangan", nb: "Porsjoner", pl: "Porcje", pt: "Porções", ro: "Porții",
      ru: "Порций", sk: "Porcií", es: "Porciones", sv: "Portioner", th: "เสิร์ฟ",
      tr: "Porsiyon", uk: "Порцій", vi: "Khẩu phần"
    },
    saveThisRecipe: {
      en: "Save this recipe", ar: "حفظ هذه الوصفة", ca: "Desar aquesta recepta", "zh-Hans": "保存此食谱", "zh-Hant": "儲存此食譜",
      hr: "Spremi ovaj recept", cs: "Uložit tento recept", da: "Gem denne opskrift", nl: "Bewaar dit recept", fi: "Tallenna tämä resepti",
      fr: "Enregistrer cette recette", de: "Dieses Rezept speichern", el: "Αποθήκευση συνταγής", he: "שמור מתכון זה", hi: "यह रेसिपी सहेजें",
      hu: "Recept mentése", id: "Simpan resep ini", it: "Salva questa ricetta", ja: "このレシピを保存", ko: "이 레시피 저장",
      ms: "Simpan resipi ini", nb: "Lagre denne oppskriften", pl: "Zapisz ten przepis", pt: "Salvar esta receita", ro: "Salvează această rețetă",
      ru: "Сохранить этот рецепт", sk: "Uložiť tento recept", es: "Guardar esta receta", sv: "Spara detta recept", th: "บันทึกสูตรนี้",
      tr: "Bu tarifi kaydet", uk: "Зберегти цей рецепт", vi: "Lưu công thức này"
    },
    saveToEatInn: {
      en: "Save to Eat-Inn", ar: "حفظ في Eat-Inn", ca: "Desar a Eat-Inn", "zh-Hans": "保存到 Eat-Inn", "zh-Hant": "儲存到 Eat-Inn",
      hr: "Spremi u Eat-Inn", cs: "Uložit do Eat-Inn", da: "Gem i Eat-Inn", nl: "Opslaan in Eat-Inn", fi: "Tallenna Eat-Inniin",
      fr: "Enregistrer dans Eat-Inn", de: "In Eat-Inn speichern", el: "Αποθήκευση στο Eat-Inn", he: "שמור ב-Eat-Inn", hi: "Eat-Inn में सहेजें",
      hu: "Mentés az Eat-Innbe", id: "Simpan ke Eat-Inn", it: "Salva in Eat-Inn", ja: "Eat-Innに保存", ko: "Eat-Inn에 저장",
      ms: "Simpan ke Eat-Inn", nb: "Lagre i Eat-Inn", pl: "Zapisz w Eat-Inn", pt: "Salvar no Eat-Inn", ro: "Salvează în Eat-Inn",
      ru: "Сохранить в Eat-Inn", sk: "Uložiť do Eat-Inn", es: "Guardar en Eat-Inn", sv: "Spara i Eat-Inn", th: "บันทึกใน Eat-Inn",
      tr: "Eat-Inn'e Kaydet", uk: "Зберегти в Eat-Inn", vi: "Lưu vào Eat-Inn"
    },
    keepInCollection: {
      en: "Keep it in your collection", ar: "احتفظ بها في مجموعتك", ca: "Guarda-la a la teva col·lecció", "zh-Hans": "保存到您的收藏", "zh-Hant": "保存到您的收藏",
      hr: "Zadržite je u svojoj zbirci", cs: "Uložte si ji do sbírky", da: "Behold den i din samling", nl: "Bewaar het in je collectie", fi: "Pidä se kokoelmassasi",
      fr: "Gardez-la dans votre collection", de: "In Ihrer Sammlung behalten", el: "Κρατήστε τη στη συλλογή σας", he: "שמור באוסף שלך", hi: "इसे अपने संग्रह में रखें",
      hu: "Tartsa meg a gyűjteményében", id: "Simpan di koleksi Anda", it: "Conservala nella tua collezione", ja: "コレクションに保存", ko: "컬렉션에 보관",
      ms: "Simpan dalam koleksi anda", nb: "Behold den i samlingen din", pl: "Zachowaj w kolekcji", pt: "Guarde na sua coleção", ro: "Păstrează în colecția ta",
      ru: "Сохраните в своей коллекции", sk: "Uchovajte vo svojej zbierke", es: "Guárdala en tu colección", sv: "Spara i din samling", th: "เก็บไว้ในคอลเลกชันของคุณ",
      tr: "Koleksiyonunuzda saklayın", uk: "Збережіть у своїй колекції", vi: "Giữ trong bộ sưu tập của bạn"
    },
    viewOriginalRecipe: {
      en: "View Original Recipe", ar: "عرض الوصفة الأصلية", ca: "Veure recepta original", "zh-Hans": "查看原始食谱", "zh-Hant": "查看原始食譜",
      hr: "Pogledaj originalni recept", cs: "Zobrazit původní recept", da: "Se original opskrift", nl: "Bekijk origineel recept", fi: "Näytä alkuperäinen resepti",
      fr: "Voir la recette originale", de: "Originalrezept anzeigen", el: "Προβολή αρχικής συνταγής", he: "צפה במתכון המקורי", hi: "मूल रेसिपी देखें",
      hu: "Eredeti recept megtekintése", id: "Lihat Resep Asli", it: "Visualizza ricetta originale", ja: "元のレシピを見る", ko: "원본 레시피 보기",
      ms: "Lihat Resipi Asal", nb: "Se original oppskrift", pl: "Zobacz oryginalny przepis", pt: "Ver receita original", ro: "Vezi rețeta originală",
      ru: "Посмотреть оригинал рецепта", sk: "Zobraziť pôvodný recept", es: "Ver receta original", sv: "Visa originalrecept", th: "ดูสูตรต้นฉบับ",
      tr: "Orijinal Tarifi Görüntüle", uk: "Переглянути оригінальний рецепт", vi: "Xem công thức gốc"
    },
    recipeNotFound: {
      en: "Recipe Not Found", ar: "الوصفة غير موجودة", ca: "Recepta no trobada", "zh-Hans": "未找到食谱", "zh-Hant": "找不到食譜",
      hr: "Recept nije pronađen", cs: "Recept nenalezen", da: "Opskrift ikke fundet", nl: "Recept niet gevonden", fi: "Reseptiä ei löydy",
      fr: "Recette introuvable", de: "Rezept nicht gefunden", el: "Η συνταγή δεν βρέθηκε", he: "המתכון לא נמצא", hi: "रेसिपी नहीं मिली",
      hu: "Recept nem található", id: "Resep Tidak Ditemukan", it: "Ricetta non trovata", ja: "レシピが見つかりません", ko: "레시피를 찾을 수 없음",
      ms: "Resipi Tidak Dijumpai", nb: "Oppskrift ikke funnet", pl: "Przepis nie znaleziony", pt: "Receita não encontrada", ro: "Rețetă negăsită",
      ru: "Рецепт не найден", sk: "Recept nenájdený", es: "Receta no encontrada", sv: "Recept hittades inte", th: "ไม่พบสูตร",
      tr: "Tarif Bulunamadı", uk: "Рецепт не знайдено", vi: "Không tìm thấy công thức"
    },
    recipeExpired: {
      en: "This shared recipe has expired. Shared links are only valid for 5 minutes.",
      ar: "انتهت صلاحية هذه الوصفة المشاركة. الروابط المشتركة صالحة لمدة 5 دقائق فقط.",
      ca: "Aquesta recepta compartida ha caducat. Els enllaços compartits només són vàlids durant 5 minuts.",
      "zh-Hans": "此共享食谱已过期。共享链接仅有效5分钟。",
      "zh-Hant": "此共享食譜已過期。共享連結僅有效5分鐘。",
      hr: "Ovaj dijeljeni recept je istekao. Dijeljene poveznice vrijede samo 5 minuta.",
      cs: "Tento sdílený recept vypršel. Sdílené odkazy jsou platné pouze 5 minut.",
      da: "Denne delte opskrift er udløbet. Delte links er kun gyldige i 5 minutter.",
      nl: "Dit gedeelde recept is verlopen. Gedeelde links zijn slechts 5 minuten geldig.",
      fi: "Tämä jaettu resepti on vanhentunut. Jaetut linkit ovat voimassa vain 5 minuuttia.",
      fr: "Cette recette partagée a expiré. Les liens partagés ne sont valides que pendant 5 minutes.",
      de: "Dieses geteilte Rezept ist abgelaufen. Geteilte Links sind nur 5 Minuten gültig.",
      el: "Αυτή η κοινόχρηστη συνταγή έχει λήξει. Οι κοινόχρηστοι σύνδεσμοι ισχύουν μόνο για 5 λεπτά.",
      he: "מתכון משותף זה פג תוקף. קישורים משותפים תקפים ל-5 דקות בלבד.",
      hi: "यह साझा रेसिपी समाप्त हो गई है। साझा लिंक केवल 5 मिनट के लिए मान्य हैं।",
      hu: "Ez a megosztott recept lejárt. A megosztott linkek csak 5 percig érvényesek.",
      id: "Resep yang dibagikan ini telah kedaluwarsa. Link yang dibagikan hanya berlaku selama 5 menit.",
      it: "Questa ricetta condivisa è scaduta. I link condivisi sono validi solo per 5 minuti.",
      ja: "この共有レシピの有効期限が切れました。共有リンクは5分間のみ有効です。",
      ko: "이 공유된 레시피가 만료되었습니다. 공유 링크는 5분 동안만 유효합니다.",
      ms: "Resipi kongsi ini telah tamat tempoh. Pautan kongsi hanya sah selama 5 minit.",
      nb: "Denne delte oppskriften er utløpt. Delte lenker er kun gyldige i 5 minutter.",
      pl: "Ten udostępniony przepis wygasł. Udostępnione linki są ważne tylko przez 5 minut.",
      pt: "Esta receita compartilhada expirou. Links compartilhados são válidos apenas por 5 minutos.",
      ro: "Această rețetă partajată a expirat. Linkurile partajate sunt valide doar 5 minute.",
      ru: "Срок действия этого общего рецепта истёк. Общие ссылки действительны только 5 минут.",
      sk: "Tento zdieľaný recept vypršal. Zdieľané odkazy sú platné len 5 minút.",
      es: "Esta receta compartida ha caducado. Los enlaces compartidos solo son válidos por 5 minutos.",
      sv: "Detta delade recept har gått ut. Delade länkar är endast giltiga i 5 minuter.",
      th: "สูตรที่แชร์นี้หมดอายุแล้ว ลิงก์ที่แชร์ใช้ได้เพียง 5 นาที",
      tr: "Bu paylaşılan tarifin süresi doldu. Paylaşılan bağlantılar yalnızca 5 dakika geçerlidir.",
      uk: "Термін дії цього спільного рецепту закінчився. Спільні посилання дійсні лише 5 хвилин.",
      vi: "Công thức được chia sẻ này đã hết hạn. Liên kết chia sẻ chỉ có hiệu lực trong 5 phút."
    },
    loadingSharedRecipe: {
      en: "Loading shared recipe...", ar: "جارٍ تحميل الوصفة المشتركة...", ca: "Carregant recepta compartida...", "zh-Hans": "正在加载共享食谱...", "zh-Hant": "正在載入共享食譜...",
      hr: "Učitavanje dijeljenog recepta...", cs: "Načítání sdíleného receptu...", da: "Indlæser delt opskrift...", nl: "Gedeeld recept laden...", fi: "Ladataan jaettua reseptiä...",
      fr: "Chargement de la recette partagée...", de: "Geteiltes Rezept wird geladen...", el: "Φόρτωση κοινής συνταγής...", he: "טוען מתכון משותף...", hi: "साझा रेसिपी लोड हो रही है...",
      hu: "Megosztott recept betöltése...", id: "Memuat resep yang dibagikan...", it: "Caricamento ricetta condivisa...", ja: "共有レシピを読み込み中...", ko: "공유된 레시피 로딩 중...",
      ms: "Memuatkan resipi yang dikongsi...", nb: "Laster delt oppskrift...", pl: "Ładowanie udostępnionego przepisu...", pt: "Carregando receita compartilhada...", ro: "Se încarcă rețeta partajată...",
      ru: "Загрузка общего рецепта...", sk: "Načítava sa zdieľaný recept...", es: "Cargando receta compartida...", sv: "Laddar delat recept...", th: "กำลังโหลดสูตรที่แชร์...",
      tr: "Paylaşılan tarif yükleniyor...", uk: "Завантаження спільного рецепту...", vi: "Đang tải công thức được chia sẻ..."
    },

    // Grocery List page
    sharedGroceryList: {
      en: "Shared Grocery List", ar: "قائمة التسوق المشتركة", ca: "Llista de compra compartida", "zh-Hans": "共享购物清单", "zh-Hant": "共享購物清單",
      hr: "Dijeljena lista za kupovinu", cs: "Sdílený nákupní seznam", da: "Delt indkøbsliste", nl: "Gedeelde boodschappenlijst", fi: "Jaettu ostoslista",
      fr: "Liste de courses partagée", de: "Geteilte Einkaufsliste", el: "Κοινή λίστα αγορών", he: "רשימת קניות משותפת", hi: "साझा किराने की सूची",
      hu: "Megosztott bevásárlólista", id: "Daftar Belanja Bersama", it: "Lista della spesa condivisa", ja: "共有買い物リスト", ko: "공유 장보기 목록",
      ms: "Senarai Runcit Dikongsi", nb: "Delt handleliste", pl: "Udostępniona lista zakupów", pt: "Lista de compras compartilhada", ro: "Listă de cumpărături partajată",
      ru: "Общий список покупок", sk: "Zdieľaný nákupný zoznam", es: "Lista de compras compartida", sv: "Delad inköpslista", th: "รายการของชำที่แชร์",
      tr: "Paylaşılan Alışveriş Listesi", uk: "Спільний список покупок", vi: "Danh sách mua sắm được chia sẻ"
    },
    listNotFound: {
      en: "List Not Found", ar: "القائمة غير موجودة", ca: "Llista no trobada", "zh-Hans": "未找到列表", "zh-Hant": "找不到清單",
      hr: "Lista nije pronađena", cs: "Seznam nenalezen", da: "Liste ikke fundet", nl: "Lijst niet gevonden", fi: "Listaa ei löydy",
      fr: "Liste introuvable", de: "Liste nicht gefunden", el: "Η λίστα δεν βρέθηκε", he: "הרשימה לא נמצאה", hi: "सूची नहीं मिली",
      hu: "Lista nem található", id: "Daftar Tidak Ditemukan", it: "Lista non trovata", ja: "リストが見つかりません", ko: "목록을 찾을 수 없음",
      ms: "Senarai Tidak Dijumpai", nb: "Liste ikke funnet", pl: "Lista nie znaleziona", pt: "Lista não encontrada", ro: "Listă negăsită",
      ru: "Список не найден", sk: "Zoznam nenájdený", es: "Lista no encontrada", sv: "Lista hittades inte", th: "ไม่พบรายการ",
      tr: "Liste Bulunamadı", uk: "Список не знайдено", vi: "Không tìm thấy danh sách"
    },
    listExpired: {
      en: "This shared grocery list has expired. Shared links are only valid for 5 minutes.",
      ar: "انتهت صلاحية قائمة التسوق المشتركة. الروابط المشتركة صالحة لمدة 5 دقائق فقط.",
      ca: "Aquesta llista de compra compartida ha caducat. Els enllaços compartits només són vàlids durant 5 minuts.",
      "zh-Hans": "此共享购物清单已过期。共享链接仅有效5分钟。",
      "zh-Hant": "此共享購物清單已過期。共享連結僅有效5分鐘。",
      hr: "Ova dijeljena lista za kupovinu je istekla. Dijeljene poveznice vrijede samo 5 minuta.",
      cs: "Tento sdílený nákupní seznam vypršel. Sdílené odkazy jsou platné pouze 5 minut.",
      da: "Denne delte indkøbsliste er udløbet. Delte links er kun gyldige i 5 minutter.",
      nl: "Deze gedeelde boodschappenlijst is verlopen. Gedeelde links zijn slechts 5 minuten geldig.",
      fi: "Tämä jaettu ostoslista on vanhentunut. Jaetut linkit ovat voimassa vain 5 minuuttia.",
      fr: "Cette liste de courses partagée a expiré. Les liens partagés ne sont valides que pendant 5 minutes.",
      de: "Diese geteilte Einkaufsliste ist abgelaufen. Geteilte Links sind nur 5 Minuten gültig.",
      el: "Αυτή η κοινή λίστα αγορών έχει λήξει. Οι κοινόχρηστοι σύνδεσμοι ισχύουν μόνο για 5 λεπτά.",
      he: "רשימת קניות משותפת זו פגה תוקף. קישורים משותפים תקפים ל-5 דקות בלבד.",
      hi: "यह साझा किराने की सूची समाप्त हो गई है। साझा लिंक केवल 5 मिनट के लिए मान्य हैं।",
      hu: "Ez a megosztott bevásárlólista lejárt. A megosztott linkek csak 5 percig érvényesek.",
      id: "Daftar belanja yang dibagikan ini telah kedaluwarsa. Link yang dibagikan hanya berlaku selama 5 menit.",
      it: "Questa lista della spesa condivisa è scaduta. I link condivisi sono validi solo per 5 minuti.",
      ja: "この共有買い物リストの有効期限が切れました。共有リンクは5分間のみ有効です。",
      ko: "이 공유된 장보기 목록이 만료되었습니다. 공유 링크는 5분 동안만 유효합니다.",
      ms: "Senarai runcit kongsi ini telah tamat tempoh. Pautan kongsi hanya sah selama 5 minit.",
      nb: "Denne delte handlelisten er utløpt. Delte lenker er kun gyldige i 5 minutter.",
      pl: "Ta udostępniona lista zakupów wygasła. Udostępnione linki są ważne tylko przez 5 minut.",
      pt: "Esta lista de compras compartilhada expirou. Links compartilhados são válidos apenas por 5 minutos.",
      ro: "Această listă de cumpărături partajată a expirat. Linkurile partajate sunt valide doar 5 minute.",
      ru: "Срок действия этого общего списка покупок истёк. Общие ссылки действительны только 5 минут.",
      sk: "Tento zdieľaný nákupný zoznam vypršal. Zdieľané odkazy sú platné len 5 minút.",
      es: "Esta lista de compras compartida ha caducado. Los enlaces compartidos solo son válidos por 5 minutos.",
      sv: "Denna delade inköpslista har gått ut. Delade länkar är endast giltiga i 5 minuter.",
      th: "รายการของชำที่แชร์นี้หมดอายุแล้ว ลิงก์ที่แชร์ใช้ได้เพียง 5 นาที",
      tr: "Bu paylaşılan alışveriş listesinin süresi doldu. Paylaşılan bağlantılar yalnızca 5 dakika geçerlidir.",
      uk: "Термін дії цього спільного списку покупок закінчився. Спільні посилання дійсні лише 5 хвилин.",
      vi: "Danh sách mua sắm được chia sẻ này đã hết hạn. Liên kết chia sẻ chỉ có hiệu lực trong 5 phút."
    },
    saveThisList: {
      en: "Save this list", ar: "حفظ هذه القائمة", ca: "Desar aquesta llista", "zh-Hans": "保存此列表", "zh-Hant": "儲存此清單",
      hr: "Spremi ovu listu", cs: "Uložit tento seznam", da: "Gem denne liste", nl: "Bewaar deze lijst", fi: "Tallenna tämä lista",
      fr: "Enregistrer cette liste", de: "Diese Liste speichern", el: "Αποθήκευση λίστας", he: "שמור רשימה זו", hi: "यह सूची सहेजें",
      hu: "Lista mentése", id: "Simpan daftar ini", it: "Salva questa lista", ja: "このリストを保存", ko: "이 목록 저장",
      ms: "Simpan senarai ini", nb: "Lagre denne listen", pl: "Zapisz tę listę", pt: "Salvar esta lista", ro: "Salvează această listă",
      ru: "Сохранить этот список", sk: "Uložiť tento zoznam", es: "Guardar esta lista", sv: "Spara denna lista", th: "บันทึกรายการนี้",
      tr: "Bu listeyi kaydet", uk: "Зберегти цей список", vi: "Lưu danh sách này"
    },
    keepSyncedAcrossDevices: {
      en: "Keep it synced across your devices", ar: "احتفظ بالمزامنة عبر أجهزتك", ca: "Mantingues-la sincronitzada als teus dispositius", "zh-Hans": "在您的设备间保持同步", "zh-Hant": "在您的裝置間保持同步",
      hr: "Održavajte sinkronizaciju na svim uređajima", cs: "Udržujte synchronizaci mezi zařízeními", da: "Hold den synkroniseret på tværs af dine enheder", nl: "Houd het gesynchroniseerd op al je apparaten", fi: "Pidä se synkronoituna kaikilla laitteillasi",
      fr: "Gardez-la synchronisée sur tous vos appareils", de: "Halten Sie es auf allen Ihren Geräten synchron", el: "Κρατήστε τη συγχρονισμένη σε όλες τις συσκευές σας", he: "שמור על סנכרון בכל המכשירים שלך", hi: "इसे अपने सभी उपकरणों में सिंक रखें",
      hu: "Tartsa szinkronban az összes eszközén", id: "Jaga sinkronisasi di seluruh perangkat Anda", it: "Mantienila sincronizzata su tutti i tuoi dispositivi", ja: "すべてのデバイス間で同期", ko: "모든 기기에서 동기화 유지",
      ms: "Kekalkan penyegerakan merentas peranti anda", nb: "Hold den synkronisert på tvers av enhetene dine", pl: "Synchronizuj na wszystkich urządzeniach", pt: "Mantenha sincronizado em todos os seus dispositivos", ro: "Păstrează sincronizată pe toate dispozitivele tale",
      ru: "Синхронизируйте на всех устройствах", sk: "Udržiavajte synchronizáciu na všetkých zariadeniach", es: "Mantenla sincronizada en todos tus dispositivos", sv: "Håll den synkroniserad på alla dina enheter", th: "ซิงค์ข้ามอุปกรณ์ของคุณ",
      tr: "Tüm cihazlarınızda senkronize tutun", uk: "Тримайте синхронізованим на всіх пристроях", vi: "Giữ đồng bộ trên các thiết bị của bạn"
    },
    copyForNotes: {
      en: "Copy for Notes", ar: "نسخ للملاحظات", ca: "Copiar per Notes", "zh-Hans": "复制到备忘录", "zh-Hant": "複製到備忘錄",
      hr: "Kopiraj za Bilješke", cs: "Kopírovat do Poznámek", da: "Kopier til Noter", nl: "Kopiëren voor Notities", fi: "Kopioi Muistiinpanoihin",
      fr: "Copier pour Notes", de: "Für Notizen kopieren", el: "Αντιγραφή για Σημειώσεις", he: "העתק לפתקים", hi: "नोट्स के लिए कॉपी करें",
      hu: "Másolás a Jegyzetekhez", id: "Salin untuk Catatan", it: "Copia per Note", ja: "メモにコピー", ko: "메모용 복사",
      ms: "Salin untuk Nota", nb: "Kopier til Notater", pl: "Skopiuj do Notatek", pt: "Copiar para Notas", ro: "Copiază pentru Note",
      ru: "Скопировать в Заметки", sk: "Kopírovať do Poznámok", es: "Copiar para Notas", sv: "Kopiera till Anteckningar", th: "คัดลอกไปยังโน้ต",
      tr: "Notlar için Kopyala", uk: "Скопіювати для Нотаток", vi: "Sao chép cho Ghi chú"
    },
    items: {
      en: "items", ar: "عناصر", ca: "articles", "zh-Hans": "项目", "zh-Hant": "項目",
      hr: "stavke", cs: "položek", da: "varer", nl: "items", fi: "tuotetta",
      fr: "articles", de: "Artikel", el: "αντικείμενα", he: "פריטים", hi: "आइटम",
      hu: "tétel", id: "item", it: "articoli", ja: "アイテム", ko: "항목",
      ms: "item", nb: "varer", pl: "pozycji", pt: "itens", ro: "articole",
      ru: "товаров", sk: "položiek", es: "artículos", sv: "varor", th: "รายการ",
      tr: "öğe", uk: "товарів", vi: "mục"
    },
    copied: {
      en: "Copied", ar: "تم النسخ", ca: "Copiat", "zh-Hans": "已复制", "zh-Hant": "已複製",
      hr: "Kopirano", cs: "Zkopírováno", da: "Kopieret", nl: "Gekopieerd", fi: "Kopioitu",
      fr: "Copié", de: "Kopiert", el: "Αντιγράφηκε", he: "הועתק", hi: "कॉपी किया गया",
      hu: "Másolva", id: "Disalin", it: "Copiato", ja: "コピーしました", ko: "복사됨",
      ms: "Disalin", nb: "Kopiert", pl: "Skopiowano", pt: "Copiado", ro: "Copiat",
      ru: "Скопировано", sk: "Skopírované", es: "Copiado", sv: "Kopierat", th: "คัดลอกแล้ว",
      tr: "Kopyalandı", uk: "Скопійовано", vi: "Đã sao chép"
    },
    loadingSharedGroceryList: {
      en: "Loading shared grocery list...", ar: "جارٍ تحميل قائمة التسوق المشتركة...", ca: "Carregant llista de compra compartida...", "zh-Hans": "正在加载共享购物清单...", "zh-Hant": "正在載入共享購物清單...",
      hr: "Učitavanje dijeljene liste za kupovinu...", cs: "Načítání sdíleného nákupního seznamu...", da: "Indlæser delt indkøbsliste...", nl: "Gedeelde boodschappenlijst laden...", fi: "Ladataan jaettua ostoslistaa...",
      fr: "Chargement de la liste de courses partagée...", de: "Geteilte Einkaufsliste wird geladen...", el: "Φόρτωση κοινής λίστας αγορών...", he: "טוען רשימת קניות משותפת...", hi: "साझा किराने की सूची लोड हो रही है...",
      hu: "Megosztott bevásárlólista betöltése...", id: "Memuat daftar belanja yang dibagikan...", it: "Caricamento lista della spesa condivisa...", ja: "共有買い物リストを読み込み中...", ko: "공유된 장보기 목록 로딩 중...",
      ms: "Memuatkan senarai runcit yang dikongsi...", nb: "Laster delt handleliste...", pl: "Ładowanie udostępnionej listy zakupów...", pt: "Carregando lista de compras compartilhada...", ro: "Se încarcă lista de cumpărături partajată...",
      ru: "Загрузка общего списка покупок...", sk: "Načítava sa zdieľaný nákupný zoznam...", es: "Cargando lista de compras compartida...", sv: "Laddar delad inköpslista...", th: "กำลังโหลดรายการของชำที่แชร์...",
      tr: "Paylaşılan alışveriş listesi yükleniyor...", uk: "Завантаження спільного списку покупок...", vi: "Đang tải danh sách mua sắm được chia sẻ..."
    },

    // Language selector
    selectLanguage: {
      en: "Select Language", ar: "اختر اللغة", ca: "Seleccionar idioma", "zh-Hans": "选择语言", "zh-Hant": "選擇語言",
      hr: "Odaberi jezik", cs: "Vybrat jazyk", da: "Vælg sprog", nl: "Taal selecteren", fi: "Valitse kieli",
      fr: "Sélectionner la langue", de: "Sprache auswählen", el: "Επιλέξτε γλώσσα", he: "בחר שפה", hi: "भाषा चुनें",
      hu: "Nyelv kiválasztása", id: "Pilih Bahasa", it: "Seleziona lingua", ja: "言語を選択", ko: "언어 선택",
      ms: "Pilih Bahasa", nb: "Velg språk", pl: "Wybierz język", pt: "Selecionar idioma", ro: "Selectează limba",
      ru: "Выберите язык", sk: "Vybrať jazyk", es: "Seleccionar idioma", sv: "Välj språk", th: "เลือกภาษา",
      tr: "Dil Seçin", uk: "Виберіть мову", vi: "Chọn ngôn ngữ"
    },

    // Delete data page
    deleteYourData: {
      en: "Delete Your Data", ar: "حذف بياناتك", ca: "Eliminar les teves dades", "zh-Hans": "删除您的数据", "zh-Hant": "刪除您的資料",
      hr: "Izbriši svoje podatke", cs: "Smazat vaše data", da: "Slet dine data", nl: "Verwijder je gegevens", fi: "Poista tietosi",
      fr: "Supprimer vos données", de: "Ihre Daten löschen", el: "Διαγράψτε τα δεδομένα σας", he: "מחק את הנתונים שלך", hi: "अपना डेटा हटाएं",
      hu: "Törölje adatait", id: "Hapus Data Anda", it: "Elimina i tuoi dati", ja: "データを削除", ko: "데이터 삭제",
      ms: "Padam Data Anda", nb: "Slett dataene dine", pl: "Usuń swoje dane", pt: "Excluir seus dados", ro: "Șterge-ți datele",
      ru: "Удалить ваши данные", sk: "Odstrániť vaše údaje", es: "Eliminar tus datos", sv: "Radera dina uppgifter", th: "ลบข้อมูลของคุณ",
      tr: "Verilerinizi Silin", uk: "Видалити ваші дані", vi: "Xóa dữ liệu của bạn"
    },
    howToRequestDataDeletion: {
      en: "How to request data deletion", ar: "كيفية طلب حذف البيانات", ca: "Com sol·licitar l'eliminació de dades", "zh-Hans": "如何请求删除数据", "zh-Hant": "如何請求刪除資料",
      hr: "Kako zatražiti brisanje podataka", cs: "Jak požádat o smazání dat", da: "Sådan anmoder du om sletning af data", nl: "Hoe gegevensverwijdering aan te vragen", fi: "Kuinka pyytää tietojen poistoa",
      fr: "Comment demander la suppression des données", de: "So fordern Sie die Datenlöschung an", el: "Πώς να ζητήσετε διαγραφή δεδομένων", he: "איך לבקש מחיקת נתונים", hi: "डेटा हटाने का अनुरोध कैसे करें",
      hu: "Hogyan kérje az adatok törlését", id: "Cara meminta penghapusan data", it: "Come richiedere la cancellazione dei dati", ja: "データ削除のリクエスト方法", ko: "데이터 삭제 요청 방법",
      ms: "Cara meminta pemadaman data", nb: "Slik ber du om sletting av data", pl: "Jak poprosić o usunięcie danych", pt: "Como solicitar a exclusão de dados", ro: "Cum să soliciți ștergerea datelor",
      ru: "Как запросить удаление данных", sk: "Ako požiadať o vymazanie údajov", es: "Cómo solicitar la eliminación de datos", sv: "Hur man begär radering av data", th: "วิธีร้องขอการลบข้อมูล",
      tr: "Veri silme nasıl talep edilir", uk: "Як запросити видалення даних", vi: "Cách yêu cầu xóa dữ liệu"
    },
    lastUpdated: {
      en: "Last Updated", ar: "آخر تحديث", ca: "Última actualització", "zh-Hans": "最后更新", "zh-Hant": "最後更新",
      hr: "Zadnja izmjena", cs: "Naposledy aktualizováno", da: "Sidst opdateret", nl: "Laatst bijgewerkt", fi: "Viimeksi päivitetty",
      fr: "Dernière mise à jour", de: "Zuletzt aktualisiert", el: "Τελευταία ενημέρωση", he: "עודכן לאחרונה", hi: "अंतिम अपडेट",
      hu: "Utoljára frissítve", id: "Terakhir Diperbarui", it: "Ultimo aggiornamento", ja: "最終更新", ko: "마지막 업데이트",
      ms: "Kemas Kini Terakhir", nb: "Sist oppdatert", pl: "Ostatnia aktualizacja", pt: "Última atualização", ro: "Ultima actualizare",
      ru: "Последнее обновление", sk: "Naposledy aktualizované", es: "Última actualización", sv: "Senast uppdaterad", th: "อัปเดตล่าสุด",
      tr: "Son Güncelleme", uk: "Останнє оновлення", vi: "Cập nhật lần cuối"
    },

    // Connection errors
    connectionError: {
      en: "Connection Error", ar: "خطأ في الاتصال", ca: "Error de connexió", "zh-Hans": "连接错误", "zh-Hant": "連線錯誤",
      hr: "Greška veze", cs: "Chyba připojení", da: "Forbindelsesfejl", nl: "Verbindingsfout", fi: "Yhteysvirhe",
      fr: "Erreur de connexion", de: "Verbindungsfehler", el: "Σφάλμα σύνδεσης", he: "שגיאת חיבור", hi: "कनेक्शन त्रुटि",
      hu: "Kapcsolódási hiba", id: "Kesalahan Koneksi", it: "Errore di connessione", ja: "接続エラー", ko: "연결 오류",
      ms: "Ralat Sambungan", nb: "Tilkoblingsfeil", pl: "Błąd połączenia", pt: "Erro de conexão", ro: "Eroare de conexiune",
      ru: "Ошибка соединения", sk: "Chyba pripojenia", es: "Error de conexión", sv: "Anslutningsfel", th: "ข้อผิดพลาดในการเชื่อมต่อ",
      tr: "Bağlantı Hatası", uk: "Помилка з'єднання", vi: "Lỗi kết nối"
    },
    checkInternetConnection: {
      en: "Please check your internet connection and try again.",
      ar: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
      ca: "Comproveu la vostra connexió a internet i torneu-ho a provar.",
      "zh-Hans": "请检查您的网络连接并重试。",
      "zh-Hant": "請檢查您的網路連線並重試。",
      hr: "Provjerite internetsku vezu i pokušajte ponovno.",
      cs: "Zkontrolujte prosím připojení k internetu a zkuste to znovu.",
      da: "Kontroller din internetforbindelse og prøv igen.",
      nl: "Controleer je internetverbinding en probeer het opnieuw.",
      fi: "Tarkista internet-yhteytesi ja yritä uudelleen.",
      fr: "Veuillez vérifier votre connexion internet et réessayer.",
      de: "Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      el: "Ελέγξτε τη σύνδεσή σας στο διαδίκτυο και δοκιμάστε ξανά.",
      he: "אנא בדוק את חיבור האינטרנט שלך ונסה שוב.",
      hi: "कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
      hu: "Ellenőrizze az internetkapcsolatát, és próbálja újra.",
      id: "Silakan periksa koneksi internet Anda dan coba lagi.",
      it: "Controlla la tua connessione internet e riprova.",
      ja: "インターネット接続を確認して、もう一度お試しください。",
      ko: "인터넷 연결을 확인하고 다시 시도하세요.",
      ms: "Sila semak sambungan internet anda dan cuba lagi.",
      nb: "Vennligst sjekk internettforbindelsen din og prøv igjen.",
      pl: "Sprawdź połączenie internetowe i spróbuj ponownie.",
      pt: "Verifique sua conexão com a internet e tente novamente.",
      ro: "Vă rugăm să verificați conexiunea la internet și să încercați din nou.",
      ru: "Пожалуйста, проверьте подключение к интернету и попробуйте снова.",
      sk: "Skontrolujte internetové pripojenie a skúste to znova.",
      es: "Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
      sv: "Kontrollera din internetanslutning och försök igen.",
      th: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้ง",
      tr: "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.",
      uk: "Будь ласка, перевірте підключення до інтернету та спробуйте знову.",
      vi: "Vui lòng kiểm tra kết nối internet của bạn và thử lại."
    },

    // Footer
    copyright: {
      en: "POKHREL DEVELOPMENT LLC",
      ar: "POKHREL DEVELOPMENT LLC",
      ca: "POKHREL DEVELOPMENT LLC",
      "zh-Hans": "POKHREL DEVELOPMENT LLC",
      "zh-Hant": "POKHREL DEVELOPMENT LLC",
      hr: "POKHREL DEVELOPMENT LLC",
      cs: "POKHREL DEVELOPMENT LLC",
      da: "POKHREL DEVELOPMENT LLC",
      nl: "POKHREL DEVELOPMENT LLC",
      fi: "POKHREL DEVELOPMENT LLC",
      fr: "POKHREL DEVELOPMENT LLC",
      de: "POKHREL DEVELOPMENT LLC",
      el: "POKHREL DEVELOPMENT LLC",
      he: "POKHREL DEVELOPMENT LLC",
      hi: "POKHREL DEVELOPMENT LLC",
      hu: "POKHREL DEVELOPMENT LLC",
      id: "POKHREL DEVELOPMENT LLC",
      it: "POKHREL DEVELOPMENT LLC",
      ja: "POKHREL DEVELOPMENT LLC",
      ko: "POKHREL DEVELOPMENT LLC",
      ms: "POKHREL DEVELOPMENT LLC",
      nb: "POKHREL DEVELOPMENT LLC",
      pl: "POKHREL DEVELOPMENT LLC",
      pt: "POKHREL DEVELOPMENT LLC",
      ro: "POKHREL DEVELOPMENT LLC",
      ru: "POKHREL DEVELOPMENT LLC",
      sk: "POKHREL DEVELOPMENT LLC",
      es: "POKHREL DEVELOPMENT LLC",
      sv: "POKHREL DEVELOPMENT LLC",
      th: "POKHREL DEVELOPMENT LLC",
      tr: "POKHREL DEVELOPMENT LLC",
      uk: "POKHREL DEVELOPMENT LLC",
      vi: "POKHREL DEVELOPMENT LLC"
    },
    dontHaveApp: {
      en: "Don't have the app?",
      ar: "لا تملك التطبيق؟",
      ca: "No tens l'aplicació?",
      "zh-Hans": "没有应用程序？",
      "zh-Hant": "沒有應用程式？",
      hr: "Nemate aplikaciju?",
      cs: "Nemáte aplikaci?",
      da: "Har du ikke appen?",
      nl: "Heb je de app niet?",
      fi: "Eikö sinulla ole sovellusta?",
      fr: "Vous n'avez pas l'appli?",
      de: "Keine App?",
      el: "Δεν έχετε την εφαρμογή;",
      he: "אין לך את האפליקציה?",
      hi: "ऐप नहीं है?",
      hu: "Nincs meg az alkalmazás?",
      id: "Belum punya aplikasi?",
      it: "Non hai l'app?",
      ja: "アプリをお持ちでない方",
      ko: "앱이 없으신가요?",
      ms: "Tiada aplikasi?",
      nb: "Har du ikke appen?",
      pl: "Nie masz aplikacji?",
      pt: "Não tem o app?",
      ro: "Nu ai aplicația?",
      ru: "Нет приложения?",
      sk: "Nemáte aplikáciu?",
      es: "¿No tienes la app?",
      sv: "Har du inte appen?",
      th: "ไม่มีแอป?",
      tr: "Uygulamanız yok mu?",
      uk: "Немає програми?",
      vi: "Chưa có ứng dụng?"
    },
    downloadEatInn: {
      en: "Download Eat-Inn",
      ar: "تنزيل Eat-Inn",
      ca: "Descarregar Eat-Inn",
      "zh-Hans": "下载 Eat-Inn",
      "zh-Hant": "下載 Eat-Inn",
      hr: "Preuzmi Eat-Inn",
      cs: "Stáhnout Eat-Inn",
      da: "Download Eat-Inn",
      nl: "Download Eat-Inn",
      fi: "Lataa Eat-Inn",
      fr: "Télécharger Eat-Inn",
      de: "Eat-Inn herunterladen",
      el: "Κατεβάστε το Eat-Inn",
      he: "הורד את Eat-Inn",
      hi: "Eat-Inn डाउनलोड करें",
      hu: "Eat-Inn letöltése",
      id: "Unduh Eat-Inn",
      it: "Scarica Eat-Inn",
      ja: "Eat-Innをダウンロード",
      ko: "Eat-Inn 다운로드",
      ms: "Muat turun Eat-Inn",
      nb: "Last ned Eat-Inn",
      pl: "Pobierz Eat-Inn",
      pt: "Baixar Eat-Inn",
      ro: "Descarcă Eat-Inn",
      ru: "Скачать Eat-Inn",
      sk: "Stiahnuť Eat-Inn",
      es: "Descargar Eat-Inn",
      sv: "Ladda ner Eat-Inn",
      th: "ดาวน์โหลด Eat-Inn",
      tr: "Eat-Inn'i İndir",
      uk: "Завантажити Eat-Inn",
      vi: "Tải xuống Eat-Inn"
    }
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
