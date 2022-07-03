import { FC } from "react";
import clsx from "clsx";

type ResponsiveLinkProps = JSX.IntrinsicElements["a"];
export const ResponsiveLink: FC<ResponsiveLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      className={clsx(
        "hover:cursor-pointer transition duration-300 rounded select-none",
        "hover:bg-stone-900 hover:bg-opacity-10 focus:ring-slate-600",
        "dark:selection:bg-stone-600 dark:hover:bg-stone-50 dark:hover:bg-opacity-[0.15]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
