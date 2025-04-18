import JoinPage from "./join";

export const metadata = {
  title: "Apply as a Designer -  Graphic, Web & Motion",
  description:
    "We are actively hiring designers. Apply if you are a creative individual who works on social media post, reels, tiktok video, canva, capcut, logo, graphics, motion, web design, UI UX design, ",
};

async function loader() {
  const path = "/api/about";
  const BASE_URL = "https://salicha-db.onrender.com/";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);
  return { ...data.data };
}
export default async function Page() {
  const data = await loader();

  return (
    <>
      <JoinPage />
      <h1>{data.title}</h1>
    </>
  );
}
