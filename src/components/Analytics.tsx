import React from "react";

interface AnalyticsProps {
    name: string;
};
const withAnalytics = () => {}
// const withAnalytics = <P extends object>(Component: React.ComponentType<P>) => 
//     class WithAnalytics extends React.Component<P & AnalyticsProps> {
//         render() {
//             const { name, ...props } = this.props;

//             if (name) console.log(name);

//             return <Component {...props as P} />
//         }
//     };

export default withAnalytics;