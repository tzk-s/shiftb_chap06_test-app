export const CONTACT_VALIDATION = {
  name: {
    required: "お名前は必須です。",
    maxLength: { value: 30, message: "お名前は30文字以内で入力してください。" },
  },
  email: {
    required: "メールアドレスは必須です。",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "メールアドレスの形式が正しくありません。",
    },
  },
  message: {
    required: "本文は必須です。",
    maxLength: { value: 500, message: "本文は500文字以内で入力してください。" },
  },
};
