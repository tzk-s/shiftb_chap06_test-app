import { useState } from "react"

export default function useContactSubmit() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const submitForm = async data => {
		setIsSubmitting(true);
		setError(null);
		try {
		const res = await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		});
			if(!res.ok) throw new Error('通信が失敗しました。');
			return { success: true };
		} catch (error) {
			console.error('エラー詳細:', error);
      const errorMsg = !navigator.onLine
        ? "インターネットに接続されていません。"
        : "通信に失敗しました。時間をおいて再度お試しください。";
      setError(errorMsg);
      return { success: false };
		} finally {
			setIsSubmitting(false);
		}
	};
	return { submitForm, isSubmitting, error };
};
