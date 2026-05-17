import type { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode | Array<ReactNode> }) {
  return (
    <div className="h-full m-auto max-w-[1440px] p-8">
      {children}
    </div>
  )
}