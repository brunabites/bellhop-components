import { CardsDemo } from "@/app/showcase/components"

export default function Page() {
  return (
    <main className="flex flex-1 flex-col">
    
    <div className="mx-auto flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
      <CardsDemo />
    </div>
    </main>
  )
}
