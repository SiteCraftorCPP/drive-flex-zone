import React from 'react';

const YandexLogo = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[45%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[1em] h-[1em] min-w-[16px] min-h-[16px] max-w-[20px] max-h-[20px]"
    >
        <circle cx="12" cy="12" r="10" fill="hsl(var(--primary))" stroke="white" strokeWidth="1.5" />
        <text
            x="12"
            y="14"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
        >
            Я
        </text>
    </svg>
);

export default YandexLogo;
