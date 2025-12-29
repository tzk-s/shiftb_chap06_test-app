import DOMPurify from 'dompurify';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) return "日付不明";
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

export const formatContent = (content, maxLength = 65) => {
  if (!content) return { __html: "" };
  const truncatedText = content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;
  return { __html: DOMPurify.sanitize(truncatedText) };
};
