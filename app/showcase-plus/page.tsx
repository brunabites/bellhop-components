import { componentsList } from "@/app/showcase-plus/components/components-list";
import ComponentWrapper from "@/app/showcase-plus/components/component-wrapper";
import React from "react";

export default function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      {componentsList.map((component) => {
        const DemoComponent = React.lazy(async () => {
          try {
            const importedModule = await import(`./components/${component.demo}`); // Renamed variable
            return { default: importedModule.default }; // Ensure default export
          } catch (error) {
            console.error(`Failed to load component: ${component.demo}`, error);
            return { default: () => <div>Error loading component</div> };
          }
        });

        return (
          <ComponentWrapper key={component.name} name={component.name}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <DemoComponent />
            </React.Suspense>
          </ComponentWrapper>
        );
      })}
    </div>
  );
}