import type { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode | Array<ReactNode> }) {
  return (
    <div className="h-full m-auto max-w-[1440px] py-16 md:py-24 px-8">
      {children}
    </div>
  )
}