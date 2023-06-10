import * as React from "react";

const Breadcrumbs = ({ children }: React.PropsWithChildren) => (
  <nav className="w-full" aria-label="breadcrumb">
    <ol className="flex items-center">
      {React.Children.map(children, (child, index) => (
        <>
          {index !== 0 && (
            <li>
              <span className="mx-2 text-sm">/</span>
            </li>
          )}
          <li className="text-sm">{child}</li>
        </>
      ))}
    </ol>
  </nav>
);

export { Breadcrumbs };
