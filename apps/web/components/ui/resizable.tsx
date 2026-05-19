"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  Group as ResizablePrimitiveGroup,
  Panel as ResizablePrimitivePanel,
  Separator as ResizablePrimitiveHandle,
} from "react-resizable-panels"

import { cn } from "~/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitiveGroup>) {
  return (
    <ResizablePrimitiveGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full [&[aria-orientation=vertical]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitivePanel>) {
  return <ResizablePrimitivePanel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitiveHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitiveHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden [&[aria-orientation=vertical]]:h-px [&[aria-orientation=vertical]]:w-full [&[aria-orientation=vertical]]:after:left-0 [&[aria-orientation=vertical]]:after:h-1 [&[aria-orientation=vertical]]:after:w-full [&[aria-orientation=vertical]]:after:translate-x-0 [&[aria-orientation=vertical]]:after:-translate-y-1/2 [&[aria-orientation=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitiveHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
