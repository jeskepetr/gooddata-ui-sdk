// (C) 2021-2022 GoodData Corporation

import React from "react";

import { IIconProps } from "../typings.js";

/**
 * @internal
 */
export const ArrowDown: React.FC<IIconProps> = ({ color, className, width = 10, height = 14 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M4.89746 13.2461L9.09473 9.04883C9.16309 8.98047 9.19727 8.89844 9.19727 8.80273C9.19727 8.70247 9.16309 8.61816 9.09473 8.5498C9.02637 8.48145 8.94434 8.44727 8.84863 8.44727C8.75293 8.44727 8.6709 8.48145 8.60254 8.5498L5 12.1523V0.75C5 0.654297 4.96582 0.572266 4.89746 0.503906C4.8291 0.435547 4.74707 0.401367 4.65137 0.401367C4.55566 0.401367 4.47363 0.435547 4.40527 0.503906C4.33691 0.572266 4.30273 0.654297 4.30273 0.75V12.1523L0.700195 8.5498C0.631836 8.48145 0.547526 8.44727 0.447266 8.44727C0.351562 8.44727 0.269531 8.48145 0.201172 8.5498C0.169271 8.58626 0.144206 8.62728 0.125977 8.67285C0.107747 8.71387 0.0986328 8.75716 0.0986328 8.80273C0.0986328 8.84375 0.107747 8.88704 0.125977 8.93262C0.144206 8.97363 0.169271 9.01237 0.201172 9.04883L4.40527 13.2461C4.47363 13.3145 4.55566 13.3486 4.65137 13.3486C4.74707 13.3486 4.8291 13.3145 4.89746 13.2461Z"
                fill={color ?? "#687581"}
            />
        </svg>
    );
};
