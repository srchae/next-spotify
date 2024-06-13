import MainAndSearch from "../organisms/mainAndsearch";
import MyLibrary from "../organisms/myLibrary";

export default function AsideBar() {
  return (
    <nav className="flex flex-col gap-2">
      <MainAndSearch />
      <MyLibrary />
    </nav>
  );
}
