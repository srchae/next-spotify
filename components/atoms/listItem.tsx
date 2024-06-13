import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
}

export default function ListItem({ children }: ListItemProps) {
  return <li className="mx-2 my-1">{children}</li>;
}
