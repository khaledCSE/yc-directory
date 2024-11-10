import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: Readonly<IProps>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  )
}