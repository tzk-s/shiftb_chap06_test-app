import { useForm } from "react-hook-form";
import { CONTACT_VALIDATION } from "../../constants/validate";
import useContactSubmit from "../../hooks/useContactSubmit";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";

export default function ContactPage() {
  const { submitForm, isSubmitting } = useContactSubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
      <div className={`flex flex-col gap-8 w-full ${isSubmitting ? "opacity-50" : ""}`}>
        <Input
          label="お名前"
          id="name"
          autoComplete="name"
          disabled={isSubmitting}
          error={errors.name}
          {...register("name", CONTACT_VALIDATION.name)}
        />
        <Input
          label="メールアドレス"
          type="email"
          id="email"
          autoComplete="email"
          disabled={isSubmitting}
          error={errors.email}
          {...register("email", CONTACT_VALIDATION.email)}
        />
        <TextArea
          label="本文"
          id="message"
          disabled={isSubmitting}
          error={errors.message}
          {...register("message", CONTACT_VALIDATION.message)}
        />
      </div>
      <div className="mt-12 flex flex-row gap-4 justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="submit"
        >
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
