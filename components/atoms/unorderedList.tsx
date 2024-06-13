import { ReactNode } from "react";

interface UnorderedListProps {
  children: ReactNode;
}

export default function UnorderedList({ children }: UnorderedListProps) {
  return <ul className="mx-2 my-1">{children}</ul>;
}
