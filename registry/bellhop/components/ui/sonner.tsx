"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

import { Info, LoaderCircle, CircleCheck, TriangleAlert, OctagonAlert } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'bg-popover text-popover-foreground shadow-lg  rounded-lg border p-4',
          title: 'text-color-fg text-sm/5 font-semibold',
          description: 'text-color-fg/80 text-sm/5 font-medium',
          actionButton:
              "!h-8 !whitespace-nowrap !bg-primary ! rounded-lg !px-3 !font-medium !text-sm hover:bg-primary/90",
          cancelButton:
              "!h-8 !whitespace-nowrap ! rounded-lg !px-3 !font-medium !text-sm hover:bg-color-fg/10",
          loader: 'bg-color-fg/10',
          closeButton: 'bg-color-fg/10 hover:bg-color-fg/20',
        },
      }}
      icons={{
        success: <CircleCheck size={20} />,
        info: <Info size={20} />,
        warning: <TriangleAlert size={20} />,
        error: <OctagonAlert size={20} />,
        loading: <LoaderCircle size={20} />,
      }}
      style={
        {
          "--normal-bg": "var(--color-popover)",
          "--normal-text": "var(--color-popover-foreground)",
          "--normal-border": "var(--border-input)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
