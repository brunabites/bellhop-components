import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

const title = "Bellhop Experiments.";
const description = "Bellhop themed components.";

export default function Home() {
  return (
    <section>
      <div className="container-wrappe">
        <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
          <PageHeader>
            <PageHeaderHeading>{title}</PageHeaderHeading>
            <PageHeaderDescription>{description}</PageHeaderDescription>
          </PageHeader>

          <div className="flex gap-4 items-center flex-col sm:flex-row px-8 py-8">

            <Button variant="outline">
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            <Button variant="outline">
              <Link href="/mail">Email</Link>
            </Button>

            <Button variant="outline">
              <Link href="/tasks">Tasks</Link>
            </Button>

            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>

            <Button variant="outline">
              <Link href="/buttons">Buttons</Link>
            </Button>

            <Button variant="outline">
              <Link href="/showcase">Showcase</Link>
            </Button>

            <Button variant="outline">
              <Link href="/showcase-plus">Showcase +</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
