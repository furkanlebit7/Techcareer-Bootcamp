import React, { useState } from "react";
import { toast } from "react-toastify";

const Comments = () => {
  const suc = () => toast.success("Yorum başarılı bir şekilde gönderildi.");
  const er = () => toast.error("Yorum alanını boş bırakmayınız.");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,hic?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,hic?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!",
    "Lorem ipsum dolor sit amet.",
  ]);
  const handleComment = () => {
    if (comment.length > 0) {
      setComments([...comments, comment]);
      suc();
      setComment("");
    } else {
      er();
    }
  };
  return (
    <div>
      <ul className="max-h-[50vh] overflow-y-scroll scrolllll">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-4 mb-4 text-sm  rounded-lg bg-whiteMain dark:bg-darkMain"
          >
            {comment}
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row items-center mt-10 gap-5">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="3"
          type="text"
          placeholder="Yorumunuzu Buraya Yazınız "
          className="flex-1 w-full sm:w-auto dark:bg-darkMain rounded-lg focus:outline-none focus:ring-0  ring-0 outline-none border-0 bg-whiteMain"
        ></textarea>
        <button
          className="p-2 px-3 bg-pinky text-white rounded-lg w-full sm:w-auto"
          onClick={() => {
            handleComment();
          }}
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default Comments;
