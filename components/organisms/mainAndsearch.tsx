import HomeIcon from "@/public/icons/home";
import Search from "@/public/icons/search";
import Link from "next/link";
import ListItem from "../atoms/listItem";
import UnorderedList from "../atoms/unorderedList";
export default function MainAndSearch() {
  return (
    <div className="bg-white rounded-lg bg-opacity-5 gap-2 flex flex-col">
      <UnorderedList>
        <ListItem>
          <Link href="/" className="flex gap-2 items-center">
            <HomeIcon />
            <span>홈</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/search" className="flex gap-2 items-center">
            <Search />
            <span>검색하기</span>
          </Link>
        </ListItem>
      </UnorderedList>
    </div>
  );
}
