import DOMPurify from 'dompurify';

export const formatDate = dateString => {
  const date = new Date(dateString);
  if (isNaN(date)) return "日付不明";
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

export const sanitizeContent = content => {
  if (!content) return "";
  return DOMPurify.sanitize(content);
};
