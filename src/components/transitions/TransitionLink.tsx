"use client";

import Link, { LinkProps } from "next/link";
import { usePageTransition } from "./TransitionProvider";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    target?: string;
}

export const TransitionLink = ({
    href,
    children,
    className,
    onClick,
    ...props
}: TransitionLinkProps) => {
    const { transitionTo } = usePageTransition();

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If it's an external link or has target="_blank", don't transition
        if (href.toString().startsWith("http") || props.target === "_blank") {
            return;
        }

        // Handle internal hash links (scrolls) separate from page transitions
        if (href.toString().includes("#")) {
            if (onClick) onClick(e);
            return;
        }

        e.preventDefault();
        if (onClick) onClick(e);
        transitionTo(href.toString());
    };

    return (
        <Link
            href={href}
            className={className}
            onClick={handleTransition}
            {...props}
        >
            {children}
        </Link>
    );
};
