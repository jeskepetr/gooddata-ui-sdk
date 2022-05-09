// (C) 2021-2022 GoodData Corporation
import React from "react";

import { IIconProps } from "../typings";

/**
 * @internal
 */
export const Origin: React.FC<IIconProps> = ({ color, className, width, height }) => {
    return (
        <svg
            className={className}
            width={width ?? "14"}
            height={height ?? "14"}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.7031 2.30029C11.3887 1.98584 11.0492 1.70785 10.6846 1.46631C10.3245 1.22477 9.94401 1.02197 9.54297 0.85791C9.14648 0.68929 8.73405 0.563965 8.30566 0.481934C7.87728 0.395345 7.44206 0.352051 7 0.352051C6.55339 0.352051 6.11589 0.395345 5.6875 0.481934C5.26367 0.563965 4.85124 0.68929 4.4502 0.85791C4.05371 1.02197 3.67318 1.22477 3.30859 1.46631C2.94857 1.70785 2.61133 1.98584 2.29688 2.30029C1.98242 2.61475 1.70443 2.95426 1.46289 3.31885C1.22135 3.67887 1.01628 4.05941 0.847656 4.46045C0.683594 4.85693 0.558268 5.26937 0.47168 5.69775C0.389648 6.12158 0.348633 6.5568 0.348633 7.00342C0.348633 7.44548 0.389648 7.8807 0.47168 8.30908C0.558268 8.73747 0.683594 9.1499 0.847656 9.54639C1.01628 9.94287 1.22135 10.3234 1.46289 10.688C1.70443 11.0526 1.98242 11.3898 2.29688 11.6997C2.61133 12.0142 2.94857 12.2944 3.30859 12.5405C3.67318 12.7821 4.05371 12.9849 4.4502 13.1489C4.85124 13.313 5.26367 13.436 5.6875 13.5181C6.11589 13.6047 6.55339 13.6479 7 13.6479C7.44206 13.6479 7.87728 13.6047 8.30566 13.5181C8.73405 13.436 9.14648 13.313 9.54297 13.1489C9.94401 12.9849 10.3245 12.7821 10.6846 12.5405C11.0492 12.2944 11.3887 12.0142 11.7031 11.6997C12.0176 11.3898 12.2956 11.0526 12.5371 10.688C12.7786 10.3234 12.9814 9.94287 13.1455 9.54639C13.3096 9.1499 13.4349 8.73747 13.5215 8.30908C13.6081 7.8807 13.6514 7.44548 13.6514 7.00342C13.6514 6.5568 13.6081 6.12158 13.5215 5.69775C13.4349 5.26937 13.3096 4.85693 13.1455 4.46045C12.9814 4.05941 12.7786 3.67887 12.5371 3.31885C12.2956 2.95426 12.0176 2.61475 11.7031 2.30029ZM10.8418 6.64795C10.8372 6.4611 10.8281 6.27653 10.8145 6.09424C10.8008 5.90739 10.7826 5.7251 10.7598 5.54736C10.737 5.36507 10.7096 5.18734 10.6777 5.01416C10.6458 4.83643 10.6094 4.66325 10.5684 4.49463C10.696 4.54476 10.819 4.59945 10.9375 4.65869C11.056 4.71338 11.1722 4.77035 11.2861 4.82959C11.514 4.95719 11.7191 5.09391 11.9014 5.23975C12.0882 5.38102 12.25 5.52913 12.3867 5.68408C12.5234 5.83447 12.6351 5.9917 12.7217 6.15576C12.8128 6.31527 12.8766 6.47933 12.9131 6.64795H10.8418ZM10.1445 6.64795H7.34863V3.85889C7.56283 3.86344 7.77474 3.87484 7.98438 3.89307C8.19401 3.9113 8.40137 3.93636 8.60645 3.96826C8.81152 4.00016 9.00977 4.03662 9.20117 4.07764C9.39714 4.11865 9.58854 4.1665 9.77539 4.22119C9.83008 4.40804 9.87793 4.59945 9.91895 4.79541C9.96452 4.99137 10.001 5.19189 10.0283 5.39697C10.0602 5.59749 10.0853 5.80257 10.1035 6.01221C10.1217 6.22184 10.1354 6.43376 10.1445 6.64795ZM7.34863 3.15479V1.09033C7.51725 1.12679 7.68132 1.18831 7.84082 1.2749C8.00488 1.36149 8.16439 1.47542 8.31934 1.6167C8.47428 1.75342 8.6224 1.9152 8.76367 2.10205C8.90495 2.28434 9.03939 2.48942 9.16699 2.71729C9.23079 2.82666 9.29004 2.94287 9.34473 3.06592C9.39941 3.18441 9.4541 3.30518 9.50879 3.42822C9.33561 3.38721 9.16016 3.35303 8.98242 3.32568C8.80924 3.29378 8.63151 3.26644 8.44922 3.24365C8.27148 3.22087 8.08919 3.20264 7.90234 3.18896C7.72005 3.17074 7.53548 3.15934 7.34863 3.15479ZM6.65137 1.09033V3.15479C6.45996 3.15934 6.27311 3.17074 6.09082 3.18896C5.90853 3.20264 5.72624 3.22087 5.54395 3.24365C5.36165 3.26644 5.18164 3.29378 5.00391 3.32568C4.83073 3.35303 4.65983 3.38721 4.49121 3.42822C4.54134 3.30518 4.59375 3.18441 4.64844 3.06592C4.70768 2.94287 4.76921 2.82666 4.83301 2.71729C4.95605 2.48942 5.08822 2.28434 5.22949 2.10205C5.37533 1.9152 5.52344 1.75342 5.67383 1.6167C5.82878 1.47542 5.98828 1.36149 6.15234 1.2749C6.31641 1.18831 6.48275 1.12679 6.65137 1.09033ZM6.65137 3.85889V6.64795H3.85547C3.86003 6.43376 3.87142 6.22184 3.88965 6.01221C3.91243 5.80257 3.9375 5.59749 3.96484 5.39697C3.99674 5.19189 4.0332 4.99137 4.07422 4.79541C4.11523 4.59945 4.16309 4.40804 4.21777 4.22119C4.40462 4.1665 4.59603 4.11865 4.79199 4.07764C4.98796 4.03662 5.1862 4.00016 5.38672 3.96826C5.5918 3.93636 5.79915 3.9113 6.00879 3.89307C6.21842 3.87484 6.43262 3.86344 6.65137 3.85889ZM3.15137 6.64795H1.08691C1.12337 6.47933 1.1849 6.31527 1.27148 6.15576C1.36263 5.9917 1.47656 5.83447 1.61328 5.68408C1.75 5.52913 1.90951 5.38102 2.0918 5.23975C2.27865 5.09391 2.486 4.95719 2.71387 4.82959C2.8278 4.77035 2.94401 4.71338 3.0625 4.65869C3.18099 4.59945 3.30176 4.54476 3.4248 4.49463C3.38835 4.66325 3.35417 4.83643 3.32227 5.01416C3.29036 5.18734 3.26302 5.36507 3.24023 5.54736C3.21745 5.7251 3.19922 5.90739 3.18555 6.09424C3.17188 6.27653 3.16048 6.4611 3.15137 6.64795ZM3.15137 7.35205C3.16048 7.5389 3.17188 7.72575 3.18555 7.9126C3.19922 8.09489 3.21745 8.27718 3.24023 8.45947C3.26302 8.63721 3.29036 8.81494 3.32227 8.99268C3.35417 9.16585 3.38835 9.33675 3.4248 9.50537C3.30176 9.45524 3.18099 9.40283 3.0625 9.34814C2.94401 9.29346 2.8278 9.23421 2.71387 9.17041C2.486 9.04281 2.27865 8.90837 2.0918 8.76709C1.90951 8.62581 1.75 8.4777 1.61328 8.32275C1.47656 8.16781 1.36263 8.01058 1.27148 7.85107C1.1849 7.68701 1.12337 7.52067 1.08691 7.35205H3.15137ZM3.85547 7.35205H6.65137V10.1479C6.43262 10.1388 6.21842 10.1252 6.00879 10.1069C5.79915 10.0887 5.5918 10.0636 5.38672 10.0317C5.1862 9.99984 4.98796 9.96338 4.79199 9.92236C4.59603 9.88135 4.40462 9.8335 4.21777 9.77881C4.16309 9.59196 4.11523 9.40055 4.07422 9.20459C4.0332 9.00863 3.99674 8.81038 3.96484 8.60986C3.9375 8.40479 3.91243 8.19743 3.88965 7.98779C3.87142 7.77816 3.86003 7.56624 3.85547 7.35205ZM6.65137 10.8452V12.9097C6.48275 12.8732 6.31641 12.8117 6.15234 12.7251C5.98828 12.6385 5.82878 12.5269 5.67383 12.3901C5.52344 12.2534 5.37533 12.0939 5.22949 11.9116C5.08822 11.7248 4.95605 11.5151 4.83301 11.2827C4.76921 11.1733 4.70768 11.0594 4.64844 10.9409C4.59375 10.8224 4.54134 10.6994 4.49121 10.5718C4.65983 10.6128 4.83073 10.6493 5.00391 10.6812C5.18164 10.7131 5.36165 10.7404 5.54395 10.7632C5.72624 10.786 5.90853 10.8042 6.09082 10.8179C6.27311 10.8315 6.45996 10.8407 6.65137 10.8452ZM7.34863 12.9097V10.8452C7.53548 10.8407 7.72005 10.8315 7.90234 10.8179C8.08919 10.8042 8.27148 10.786 8.44922 10.7632C8.63151 10.7404 8.80924 10.7131 8.98242 10.6812C9.16016 10.6493 9.33561 10.6128 9.50879 10.5718C9.45866 10.6994 9.40397 10.8224 9.34473 10.9409C9.29004 11.0594 9.23079 11.1733 9.16699 11.2827C9.03939 11.5151 8.90495 11.7248 8.76367 11.9116C8.6224 12.0939 8.47428 12.2534 8.31934 12.3901C8.16439 12.5269 8.00488 12.6385 7.84082 12.7251C7.68132 12.8117 7.51725 12.8732 7.34863 12.9097ZM7.34863 10.1479V7.35205H10.1445C10.1354 7.56624 10.1217 7.77816 10.1035 7.98779C10.0853 8.19743 10.0602 8.40479 10.0283 8.60986C10.001 8.81038 9.96452 9.00863 9.91895 9.20459C9.87793 9.40055 9.83008 9.59196 9.77539 9.77881C9.58854 9.8335 9.39714 9.88135 9.20117 9.92236C9.00977 9.96338 8.81152 9.99984 8.60645 10.0317C8.40137 10.0636 8.19401 10.0887 7.98438 10.1069C7.77474 10.1252 7.56283 10.1388 7.34863 10.1479ZM10.8418 7.35205H12.9131C12.8766 7.52067 12.8128 7.68701 12.7217 7.85107C12.6351 8.01058 12.5234 8.16781 12.3867 8.32275C12.25 8.4777 12.0882 8.62581 11.9014 8.76709C11.7191 8.90837 11.514 9.04281 11.2861 9.17041C11.1722 9.23421 11.056 9.29346 10.9375 9.34814C10.819 9.40283 10.696 9.45524 10.5684 9.50537C10.6094 9.33675 10.6458 9.16585 10.6777 8.99268C10.7096 8.81494 10.737 8.63721 10.7598 8.45947C10.7826 8.27718 10.8008 8.09489 10.8145 7.9126C10.8281 7.72575 10.8372 7.5389 10.8418 7.35205ZM12.5508 4.86377C12.4186 4.74528 12.2751 4.63363 12.1201 4.52881C11.9652 4.41943 11.7988 4.31689 11.6211 4.22119C11.4251 4.11182 11.2201 4.01156 11.0059 3.92041C10.7917 3.82471 10.5684 3.73812 10.3359 3.66064C10.2585 3.42822 10.1719 3.20492 10.0762 2.99072C9.98503 2.77653 9.88704 2.57145 9.78223 2.37549C9.68197 2.19775 9.57715 2.03141 9.46777 1.87646C9.36296 1.72152 9.25358 1.57796 9.13965 1.4458C9.52702 1.60075 9.89388 1.79215 10.2402 2.02002C10.5911 2.24788 10.9124 2.50765 11.2041 2.79932C11.4958 3.08643 11.7555 3.40544 11.9834 3.75635C12.2113 4.1027 12.4004 4.47184 12.5508 4.86377ZM4.86035 1.4458C4.74642 1.57796 4.63477 1.72152 4.52539 1.87646C4.42057 2.03141 4.31803 2.19775 4.21777 2.37549C4.1084 2.57145 4.00586 2.77653 3.91016 2.99072C3.81901 3.20492 3.7347 3.42822 3.65723 3.66064C3.42936 3.73812 3.20605 3.82471 2.9873 3.92041C2.77311 4.01156 2.56803 4.11182 2.37207 4.22119C2.19889 4.31689 2.03483 4.41943 1.87988 4.52881C1.72493 4.63363 1.58138 4.74528 1.44922 4.86377C1.59961 4.47184 1.78874 4.1027 2.0166 3.75635C2.24447 3.40544 2.50423 3.08643 2.7959 2.79932C3.08757 2.50765 3.40658 2.24788 3.75293 2.02002C4.09928 1.79215 4.46842 1.60075 4.86035 1.4458ZM1.44922 9.13623C1.58138 9.25472 1.72493 9.36865 1.87988 9.47803C2.03483 9.58285 2.19889 9.68311 2.37207 9.77881C2.56803 9.88818 2.77311 9.99072 2.9873 10.0864C3.20605 10.1776 3.42936 10.2619 3.65723 10.3394C3.7347 10.5718 3.81901 10.7951 3.91016 11.0093C4.00586 11.2235 4.1084 11.4285 4.21777 11.6245C4.31803 11.8022 4.42057 11.9686 4.52539 12.1235C4.63477 12.2785 4.74642 12.422 4.86035 12.5542C4.46842 12.4038 4.09928 12.2147 3.75293 11.9868C3.40658 11.759 3.08757 11.4992 2.7959 11.2075C2.50423 10.9159 2.24447 10.5968 2.0166 10.2505C1.78874 9.89958 1.59961 9.52816 1.44922 9.13623ZM9.13965 12.5542C9.25358 12.422 9.36296 12.2785 9.46777 12.1235C9.57715 11.9686 9.68197 11.8022 9.78223 11.6245C9.88704 11.4285 9.98503 11.2235 10.0762 11.0093C10.1719 10.7951 10.2585 10.5718 10.3359 10.3394C10.5684 10.2619 10.7917 10.1776 11.0059 10.0864C11.2201 9.99072 11.4251 9.88818 11.6211 9.77881C11.7988 9.68311 11.9652 9.58285 12.1201 9.47803C12.2751 9.36865 12.4186 9.25472 12.5508 9.13623C12.4004 9.52816 12.2113 9.89958 11.9834 10.2505C11.7555 10.5968 11.4958 10.9159 11.2041 11.2075C10.9124 11.4992 10.5911 11.759 10.2402 11.9868C9.89388 12.2147 9.52702 12.4038 9.13965 12.5542Z"
                fill={color ?? "#94A1AD"}
            />
        </svg>
    );
};
