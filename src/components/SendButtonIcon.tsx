const SendButtonIcon = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0439 9.028L18.0381 9.02544L2.466 2.56661C2.33502 2.51179 2.1925 2.49029 2.05118 2.50403C1.90986 2.51778 1.77414 2.56634 1.65618 2.64537C1.53156 2.72703 1.42918 2.8384 1.35828 2.96945C1.28738 3.1005 1.25017 3.24712 1.25 3.39612V7.52687C1.25007 7.73056 1.32119 7.92785 1.45112 8.08473C1.58104 8.24161 1.76162 8.34825 1.96173 8.38627L10.4548 9.95668C10.4881 9.963 10.5183 9.98078 10.5399 10.0069C10.5616 10.0331 10.5734 10.066 10.5734 10.1C10.5734 10.1339 10.5616 10.1668 10.5399 10.193C10.5183 10.2192 10.4881 10.2369 10.4548 10.2433L1.9621 11.8137C1.76204 11.8516 1.58147 11.9581 1.45149 12.1148C1.32151 12.2716 1.25026 12.4687 1.25 12.6723V16.8038C1.2499 16.9461 1.28513 17.0862 1.35253 17.2115C1.41992 17.3368 1.51737 17.4434 1.63613 17.5218C1.77899 17.6167 1.94664 17.6674 2.11815 17.6676C2.23739 17.6675 2.35541 17.6436 2.46527 17.5972L18.037 11.1752L18.0439 11.1719C18.2535 11.0819 18.4321 10.9323 18.5576 10.7418C18.6831 10.5513 18.75 10.3281 18.75 10.1C18.75 9.87183 18.6831 9.64869 18.5576 9.45816C18.4321 9.26763 18.2535 9.11808 18.0439 9.028Z"
        fill={fill || "#E2E8F0"}
      />
    </svg>
  );
};

export default SendButtonIcon;