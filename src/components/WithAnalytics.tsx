import React from "react";

export interface AnalyticsProps {
  page: string;
  url: string;
};

const withAnalytics = () => {}

// const withAnalytics =
//   <T extends object>(
//     Component: React.ComponentType<T>
//   ): React.FC<T & AnalyticsProps> =>
//   ({ page, url, ...props }: AnalyticsProps) => {
//     const currentDateTime = new Date().toLocaleString();
//     if (page && url) {
//       const content = `[PAGE]: ${page}, [URL]: ${url}, [DATE-TIME]: ${currentDateTime}`;
//       console.log("-->", content);
//     }

//     return <Component {...props as T} />;
//   };

  export default withAnalytics;
