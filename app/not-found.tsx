import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative">
      <h2 className="text-3xl sm:text-6dl lg:text-7xl font-Inter font-bold leading-[1] lg:leading-[1.1]">
        404 page Not Found
      </h2>
      <p className="max-w-3xl md-auto font-Inter lg:text-2xl ">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        href="/"
        className="px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 dark:bg-transparent  bg-black w-[180px]"
      >
        Return Home
      </Link>
    </div>
  );
}
