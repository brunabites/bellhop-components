import { Metadata } from "next"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  BackHomeButton
} from "@/components/page-header"
import { Button } from "@/components/ui/button"

const title = "Preview with colors."
const description = "Bellhop themed components."


export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <BackHomeButton />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="container-wrapper py-8 px-8">
        
          <section className="scroll-mt-10">
            {children}
          </section>
        
      </div>
    </>
  )
}
