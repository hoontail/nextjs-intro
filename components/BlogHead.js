import { useRouter } from "next/router";
import Link from "next/link";
export default function Top() {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <>
      {router.asPath === "/BlogMain" ? (
        <div className={"Head"}>
          <h1 className={"Head_title"}>hoontail`s Blog</h1>
          <Link href={"/"}>
            <button> 포트폴리오 </button>
          </Link>
        </div>
      ) : (
        <div className={"Head"}>
        <h1 className={"Head_title"}>hoontail`s Portfolio</h1>
        <Link href={"/BlogMain"}>
          <button> 블로그 </button>
        </Link>
      </div>
      )}
      <style jsx>
        {`
          .Head {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 16px 24px;
          }
          .Head_title {
            color: #191919;
            font-size: 24px;

            font-weight: bold;

            margin: 0px;
          }
          .Head_title:hover {
            color: brown;
          }
        `}
      </style>
    </>
  );
}
