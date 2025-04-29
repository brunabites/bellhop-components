import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Home } from "lucide-react"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section>
      <div className="container-wrapper px-8 py-8">
        <div className="container flex flex-col items-start gap-1">
          {children}
        </div>
      </div>
    </section>
  )
}

function BackHomeButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Button variant="ghost" size="sm" startIcon={<Home />}>
    <Link href="/">back</Link>
    </Button>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-balance text-base font-light text-foreground sm:text-lg",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 pt-2",
        className
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, BackHomeButton }
