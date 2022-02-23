import { Story, Meta } from '@storybook/react'
import React, { useCallback, useRef } from 'react';
import ErrorBoundary from '.'
import Card from '.'

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary
} as Meta

export const Default: Story = () => {
  const errorFunction = () => {
    throw new Error('Error test')
  }

  const [state, setState] = React.useState<number>(0);
  const [hasFinished, SetHasFinished] = React.useState<boolean>();

  let intervalRef = useRef<any>();
  const increaseNumber = () => setState((prev) => prev = 1);

  React.useEffect(() => {
    intervalRef.current = setInterval(increaseNumber, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);


  const ErrorMaker = ({breakMe, count}: {breakMe: boolean, count: number}) => {
    if(breakMe) {
      SetHasFinished(true);
      clearInterval(intervalRef.current);
      throw new Error("I was told to break!");
    }
    else {
      return (
        <span>
          {count}
        </span>
      )
    }
  }

  const reset = () => {
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
    }
    setState(0);
    SetHasFinished(false);
  }

  const ErrorThing = () => {
    return (
      <>
        <span>Count: {state}</span>
        <ErrorBoundary>
          <ErrorMaker breakMe={state >= 10} count={state} />
        </ErrorBoundary>

        {hasFinished && (
          <>
            <p>
              If everything wen to plan, this message will appear, and the counts above should differ.
            </p>
            <button onClick={reset}>
              Start over?
            </button>
          </>
        )}

      </>
    )
  }

  return (
  <div className="flex flex-col w-full lg:flex-row">
    <ErrorBoundary>
      <ErrorThing />
    </ErrorBoundary>
  </div>
  )
}
