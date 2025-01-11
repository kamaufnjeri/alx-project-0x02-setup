import Button from "@/components/common/Button2";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitModal = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1>Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {posts &&
            posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
        </div>

        <Button name="Create new post" color="blue" onClick={handleOpenModal} />
        {isModalOpen && (
          <PostModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleSubmitModal}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
