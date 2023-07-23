import {FC, HTMLAttributes} from 'react';

interface YoutubeProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Youtube: FC<YoutubeProps> = ({
  className = '',
  width = 32,
  height = 32,
  fill = '#F3F3F0',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.5648 15.7328L14.9712 14.056C14.6576 13.9104 14.4 14.0736 14.4 14.4208V17.5792C14.4 17.9264 14.6576 18.0896 14.9712 17.944L18.5632 16.2672C18.8784 16.12 18.8784 15.88 18.5648 15.7328ZM16 0.640015C7.51682 0.640015 0.640015 7.51682 0.640015 16C0.640015 24.4832 7.51682 31.36 16 31.36C24.4832 31.36 31.36 24.4832 31.36 16C31.36 7.51682 24.4832 0.640015 16 0.640015ZM16 22.24C8.13762 22.24 8.00001 21.5312 8.00001 16C8.00001 10.4688 8.13762 9.76001 16 9.76001C23.8624 9.76001 24 10.4688 24 16C24 21.5312 23.8624 22.24 16 22.24Z'
      fill={fill}
    />
  </svg>
);
