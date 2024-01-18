import { FC } from 'react';

interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  return <h2 className="text-center text-xl ">{title}</h2>;
};
