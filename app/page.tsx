import Image from "next/image";


export default function Home() {
  return (
    <div>
      Landing page
      <div>
        <Image src="/cf-logo.svg" alt="" width={24} height={24} />
        Code.Fusion
      </div>
    </div>
  );
}
