import { PostModalProps } from "@/interfaces";
import Button from "./Button2";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  if (!isOpen) return null;

  return (
    <div className="absolute bottom-0 top-0 left-0 right-0 bg-black opacity-90 flex justify-center items-center z-10">
      <div className="bg-white border-2 rounded-md w-[50%] h-[400px] p-2 flex justify-center items-center relative">
        <span
          onClick={onClose}
          className="absolute top-5 right-5 font-bold text-xl h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200  cursor-pointer"
        >
          &#x2715;
        </span>
        <form className="flex flex-col gap-2 items-center w-[80%]">
          <h2 className="text-xl font-semibold">Create new post</h2>
          <span className="flex flex-row gap-4 w-full">
            <label htmlFor="title" className="w-[30%]">
              Title
            </label>
            <input
              type="text"
              className="p-1 rounded-md outline-none border-2 border-slate-950 w-[60%]"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Enter title"
            />
          </span>
          <span className="flex flex-row gap-4 w-full">
            <label htmlFor="content" className="w-[30%]">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              required
              className="h-52 p-1 rounded-md outline-none border-2 border-slate-950 w-[60%]"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </span>
          <Button name="Post" color="blue" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default PostModal;
