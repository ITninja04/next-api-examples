import React from "react";
import ErrorBoundary from '@/components/ErrorBoundary';

export interface SkeletonGeneratorProps {
  minLines: number;
  maxLines: number;
  minLength: number;
  baseGap: number;
  baseColCount: number;

}

const SkeletonGeneratorDefaults:SkeletonGeneratorProps = {
  minLines: 3,
  maxLines: 12,
  minLength: 5,
  baseGap: 4,
  baseColCount: 12,
};

const SkeletonGenerator:React.FC<Partial<SkeletonGeneratorProps>> = (args) => {
  const props = {
    ...SkeletonGeneratorDefaults,
    ...args,
  }
  const numLines = Array.from(Array(Math.floor(Math.random() * props.maxLines)).keys());

  const LineMaker = () => {
    const lineLength = Math.floor((Math.random() * (props.maxLines - props.minLength)) + props.minLength);

    return (
      <div className={`"h-2 bg-slate-700 rounded col-span-${lineLength} mb-2"`}></div>
    )
  }
  return (
    <div className={`grid grid-cols-${props.baseColCount} gap-${props.baseGap}`}>
      {numLines && numLines.map((_p, index) => (
        <ErrorBoundary key={`d_${index}`} hideNotice={true}>
          <LineMaker />
        </ErrorBoundary>
      ))}
    </div>
  )
}

export default SkeletonGenerator
