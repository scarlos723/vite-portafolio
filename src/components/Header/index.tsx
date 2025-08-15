import { GithubIcon, LinkedinIcon } from "../Icons";

export const Header = () => {
  return (
    <header className="sticky top-0 container py-4 flex justify-between gap-2">
      <h2 className="font-bold">Carlos Sánchez</h2>
      <div className="flex gap-2">
        <GithubIcon size={20} />
        <LinkedinIcon size={20} />
      </div>
    </header>
  );
};
