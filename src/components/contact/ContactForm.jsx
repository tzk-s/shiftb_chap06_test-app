import { useForm } from "react-hook-form";
import { CONTACT_VALIDATION } from "../../constants/validate";
import useContactSubmit from "../../hooks/useContactSubmit";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import FormField from "../ui/FormField";

export default function ContactPage() {
  const { submitForm, error } = useContactSubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async data => {
    const { success } = await submitForm(data);
    if (success) {
      alert("送信しました。");
      reset();
    } else {
      alert("送信に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && (
        <div className="mb-6 p-4 mb-10 bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
          {error}
        </div>
      )}
      <div
        className={`flex flex-col gap-8 w-full ${
          isSubmitting ? "opacity-50" : ""
        }`}
      >
        <FormField htmlFor="name" label="お名前" error={errors.name}>
          <Input
            id="name"
            autoComplete="name"
            disabled={isSubmitting}
            error={errors.name}
            {...register("name", CONTACT_VALIDATION.name)}
          />
        </FormField>
        <FormField htmlFor="email" label="メールアドレス" error={errors.email}>
          <Input
            type="email"
            id="email"
            autoComplete="email"
            disabled={isSubmitting}
            error={errors.email}
            {...register("email", CONTACT_VALIDATION.email)}
          />
        </FormField>
        <FormField htmlFor="message" label="本文" error={errors.message}>
          <TextArea
            id="message"
            rows="8"
            disabled={isSubmitting}
            error={errors.message}
            {...register("message", CONTACT_VALIDATION.message)}
          />
        </FormField>
      </div>
      <div className="mt-12 flex flex-row gap-4 justify-center">
        <Button type="submit" disabled={isSubmitting} variant="submit">
          {isSubmitting ? "送信中..." : "送信"}
        </Button>
        <Button
          type="button"
          onClick={() => reset()}
          disabled={isSubmitting}
          variant="clear"
        >
          クリア
        </Button>
      </div>
    </form>
  );
}
