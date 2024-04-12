import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import { motion } from "framer-motion";
interface ButtonProps {
  className: string;
  type: "submit" | "button";
  children: string;
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>((ButtonProps, ref) => {
  const router = useRouter();
  return (
    <button
      ref={ref}
      onClick={() => router.push("/contact-us", { scroll: true })}
      className={ButtonProps.className}
      type={ButtonProps.type}
    >
      {ButtonProps.children}
    </button>
  );
});
export const MButton = motion(Button);
