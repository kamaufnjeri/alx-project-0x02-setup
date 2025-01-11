import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-between items-center">
        <h1>About Page</h1>
        <Button size="medium" shape="rounded-md" />
        <Button size="small" shape="rounded-sm" />
        <Button size="large" shape="rounded-full" />
      </main>
    </div>
  );
};

export default About;
