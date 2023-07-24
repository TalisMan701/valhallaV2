import {FC, HTMLAttributes} from 'react';

interface WorldProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const World: FC<WorldProps> = ({
  className = '',
  width = 24,
  height = 24,
  fill = '#291132',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 0.75C5.78681 0.75 0.75 5.78681 0.75 12C0.75 18.2132 5.78681 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.78681 18.2132 0.75 12 0.75ZM8.20533 20.9844C5.82417 19.976 3.94038 18.0641 2.9674 15.6682C1.99442 13.2724 2.01176 10.5884 3.01561 8.20533C3.06343 8.09272 3.11344 7.98106 3.16561 7.87041L5.625 10.084V13.0482L9.23906 16.875H11.0625V19.1741L8.85694 21.2326C8.6375 21.1578 8.4203 21.075 8.20533 20.9844ZM18.8943 18.8943C17.9901 19.8012 16.9155 20.5204 15.7323 21.0105C14.5491 21.5006 13.2807 21.7519 12 21.75C11.5338 21.75 11.0683 21.717 10.6068 21.6512L12.5625 19.8259V15.375H9.88594L7.125 12.4518V9.41597L3.92344 6.53475C4.98271 4.9745 6.46929 3.75267 8.20514 3.01561C9.69051 2.38727 11.3087 2.1376 12.9143 2.289C14.52 2.44041 16.063 2.98816 17.4047 3.88308L15.2689 6.62911L15.995 8.44434L15.5035 8.93583L11.8183 8.19881L9.75 9.75V13.875H18L20.3599 17.0215C19.9496 17.7032 19.4574 18.3321 18.8943 18.8943ZM21.75 12C21.7522 13.1995 21.5317 14.389 21.0997 15.508L18.75 12.375H11.25V10.5L12.1817 9.80119L15.9965 10.5642L17.755 8.80566L16.9811 6.87089L18.5842 4.80947C18.6893 4.90584 18.7926 5.00459 18.8941 5.10572C19.8011 6.00992 20.5203 7.08452 21.0104 8.26771C21.5005 9.4509 21.7519 10.7193 21.75 12Z'
      fill={fill}
    />
  </svg>
);
