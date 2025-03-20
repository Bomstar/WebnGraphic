import BlogPosts from "./BlogLists";
import BlogHeader from "./BlogHeader";
import BottomForm from "../component/BottomForm";

export default function Page() {
  return (
    <div>
      <BlogHeader></BlogHeader>
      <BlogPosts></BlogPosts>
      <BottomForm></BottomForm>
    </div>
  );
}
