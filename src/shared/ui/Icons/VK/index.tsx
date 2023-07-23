import {FC, HTMLAttributes} from 'react';

interface VKProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const VK: FC<VKProps> = ({className = '', width = 32, height = 32, fill = '#F3F3F0'}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 0.640015C7.51682 0.640015 0.640015 7.51682 0.640015 16C0.640015 24.4832 7.51682 31.36 16 31.36C24.4832 31.36 31.36 24.4832 31.36 16C31.36 7.51682 24.4832 0.640015 16 0.640015ZM21.9072 17.9696C21.9072 17.9696 23.2656 19.3104 23.6 19.9328C23.6096 19.9456 23.6144 19.9584 23.6176 19.9648C23.7536 20.1936 23.7856 20.3712 23.7184 20.504C23.6064 20.7248 23.2224 20.8336 23.0912 20.8432H20.6912C20.5248 20.8432 20.176 20.8 19.7536 20.5088C19.4288 20.2816 19.1088 19.9088 18.7968 19.5456C18.3312 19.0048 17.928 18.5376 17.5216 18.5376C17.47 18.5375 17.4187 18.5456 17.3696 18.5616C17.0624 18.6608 16.6688 19.0992 16.6688 20.2672C16.6688 20.632 16.3808 20.8416 16.1776 20.8416H15.0784C14.704 20.8416 12.7536 20.7104 11.0256 18.888C8.91041 16.656 7.00641 12.1792 6.99041 12.1376C6.87041 11.848 7.11841 11.6928 7.38881 11.6928H9.81281C10.136 11.6928 10.2416 11.8896 10.3152 12.064C10.4016 12.2672 10.7184 13.0752 11.2384 13.984C12.0816 15.4656 12.5984 16.0672 13.0128 16.0672C13.0905 16.0663 13.1668 16.0465 13.2352 16.0096C13.776 15.7088 13.6752 13.7808 13.6512 13.3808C13.6512 13.3056 13.6496 12.5184 13.3728 12.1408C13.1744 11.8672 12.8368 11.7632 12.632 11.7248C12.7149 11.6104 12.8241 11.5177 12.9504 11.4544C13.3216 11.2688 13.9904 11.2416 14.6544 11.2416H15.024C15.744 11.2512 15.9296 11.2976 16.1904 11.3632C16.7184 11.4896 16.7296 11.8304 16.6832 12.9968C16.6688 13.328 16.6544 13.7024 16.6544 14.144C16.6544 14.24 16.6496 14.3424 16.6496 14.4512C16.6336 15.0448 16.6144 15.7184 17.0336 15.9952C17.0883 16.0295 17.1515 16.0478 17.216 16.048C17.3616 16.048 17.8 16.048 18.9872 14.0112C19.3534 13.3556 19.6715 12.6744 19.9392 11.9728C19.9632 11.9312 20.0336 11.8032 20.1168 11.7536C20.1782 11.7223 20.2463 11.7064 20.3152 11.7072H23.1648C23.4752 11.7072 23.688 11.7536 23.728 11.8736C23.7984 12.064 23.7152 12.6448 22.4144 14.4064L21.8336 15.1728C20.6544 16.7184 20.6544 16.7968 21.9072 17.9696Z'
      fill={fill}
    />
  </svg>
);
