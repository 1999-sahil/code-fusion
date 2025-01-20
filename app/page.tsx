import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <ModeToggle />
      <Logo />
      <Link href="/blog">
      <Button>
        Blog
      </Button>
      </Link>
    </div>
  );
}
