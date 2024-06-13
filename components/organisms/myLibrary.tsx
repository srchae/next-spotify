import MyLibraryContents from "../myLibraryContents";
import MyLibraryTop from "../myLibraryTop";

export default function MyLibrary() {
  return (
    <div className="bg-white rounded-lg bg-opacity-5">
      <MyLibraryTop />
      <MyLibraryContents />
    </div>
  );
}
