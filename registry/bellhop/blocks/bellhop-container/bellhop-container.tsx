"use client";

import * as React from "react";
import { SideMenu } from "@/components/sidemenu-legacy";
import HeaderLegacy from "@/components/header-legacy";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { z } from "zod";

import { Task, columns } from "@/components/data-table.tsx"

export default function Page() {

  return (
    <div className="flex flex-col h-screen bg-muted/80">
      <HeaderLegacy logoVariant="psSymbol" />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-none bg-sidebar-background shadow-md">
          <SideMenu variant="ps" />
        </div>

        <div className="flex-1 p-4 md:gap-6 md:p-6 overflow-y-auto">
          <div className="flex flex-col p-4 lg:p-6 gap-4 bg-card rounded-xl shadow-md">
            <div className="page-header relative flex flex-row items-center justify-between gap-4">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold">Tasks</h1>
              </div>
              <div className="flex-shrink-0 flex gap-2">
                <Button variant="default"
                onClick={() => toast("Task has been created")}>
                  Create Task
                </Button>
              </div>
            </div>
            <div>
              <DataTable columns={columns} data={data} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}