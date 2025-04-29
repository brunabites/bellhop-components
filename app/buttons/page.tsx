import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  BackHomeButton
} from "@/components/page-header"
import { 
    Info, 
    Check, 
    X, 
    ChevronRight, 
    ChevronLeft, 
    Plus, 
    Download, 
    ExternalLink,
    Loader2 } from "lucide-react"

const title = "Button styles."
const description =
  "Bellhop themed components."

export default function Home() {
  return (

    <section>
    <div className="container-wrapper">
      <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">

      <PageHeader>
      <BackHomeButton/>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="container-wrapper py-8 px-8">
        {/* Default Variants */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Default Variants</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button>Primary</Button>
            <Button variant="secondaryBrand">Secondary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outlineBrand">Tertiary</Button>
            <Button variant="outline">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link Button</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button startIcon={<Info />}>With Icon</Button>
            <Button variant="secondary" startIcon={<ChevronRight />}>With Icon</Button>
            <Button variant="outline" startIcon={<Plus />}>With Icon</Button>
            <Button variant="ghost" endIcon={<Plus />}>With Icon</Button>
            <Button variant="link" endIcon={<ExternalLink />}>Link With Icon</Button>
            <Button size="icon-sm" startIcon={<Info />} aria-label="Icon Onlye" />
          </div>
        </div>
        
        {/* Success Variants */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Success Variants</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="success">Primary</Button>
            <Button variant="successOutline">Secondary</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="success" startIcon={<Check />}>With Icon</Button>
            <Button variant="successOutline" startIcon={<Check />}>With Icon</Button>

            <Button size="sm" variant="success" endIcon={<Check />}>With Icon</Button>
            <Button size="sm" variant="successOutline" endIcon={<Check />}>With Icon</Button>
          </div>
        </div>
        
        {/* Destructive Variants */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Danger Variants</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="destructive">Primary</Button>
            <Button variant="destructiveOutline">Secondary</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="destructive" startIcon={<X />}>With Icon</Button>
            <Button variant="destructiveOutline" startIcon={<X />}>With Icon</Button>
            <Button size="sm" variant="destructive" endIcon={<X />}>With Icon</Button>
            <Button size="sm" variant="destructiveOutline" endIcon={<X />}>With Icon</Button>
          </div>
        </div>
        
        {/* Sizes */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon-sm" startIcon={<Download />} aria-label="Download" />
            <Button size="icon-md" startIcon={<Download />} aria-label="Download" />
            <Button size="icon-lg" startIcon={<Download />} aria-label="Download" />
          </div>
        </div>
        
        {/* States */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Button States</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button>Default</Button>
            <Button>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
            <Button disabled>Disabled</Button>
            <Button className="outline-none ring-2 ring-offset-2 ring-ring/90">Focused</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="secondary">Default</Button>
            <Button variant="secondary">
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="secondary" className="outline-none ring-2 ring-offset-2 ring-ring/90">Focused</Button>

          </div>
        </div>
        
        {/* Full Width */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Full Width Button</h3>
          <div className="space-y-4 max-w-md">
            <Button fullWidth>Full Width Button</Button>
            <Button fullWidth variant="secondary">Full Width Secondary</Button>
          </div>
        </div>
        
        {/* Icon Positions */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6">Icon Positions</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button startIcon={<ChevronLeft />}>Previous</Button>
            <Button endIcon={<ChevronRight />}>Next</Button>
          </div>
        </div>
        </div>
    </div>
    </div>
  </section>
  );
}
