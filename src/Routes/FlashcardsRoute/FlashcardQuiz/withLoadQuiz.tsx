import React, { FC } from "react";

type WithLoadQuizProps = {
  quizId: string;
};

export const withLoadQuiz = () => (Component: React.ComponentType) => {
  return ({ quizId, ...restProps }) => {
    return <Component {...restProps} />;
  };
};

// import React from 'reac'

// type PropsAreEqual<P> = (
//   prevProps: Readonly<P>,
//   nextProps: Readonly<P>
// ) => boolean;

// const withLoadQuiz = <P extends {}>(
//   component: {
//     (props: P): Exclude<React.ReactNode, undefined>;
//     displayName?: string;
//   },
//   memo?: PropsAreEqual<P> | false,

//   componentName = component.displayName ?? component.name
// ): {
//   (props: P): JSX.Element;
//   displayName: string;
// } => {

//   function WithSampleHoc(props: P) {
//     //Do something special to justify the HoC.
//     return component(props) as JSX.Element;
//   }

//   WithSampleHoc.displayName = `withSampleHoC(${componentName})`;

//   let wrappedComponent = memo === false ? WithSampleHoc : React.memo(WithSampleHoc, propsAreEqual);

//   //copyStaticProperties(component, wrappedComponent);

//   return wrappedComponent as typeof WithSampleHoc
// };
