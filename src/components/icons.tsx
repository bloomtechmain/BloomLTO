import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 28 28",
  fill: "none",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TapeReelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="10" stroke="currentColor" />
      <circle cx="14" cy="14" r="3.4" stroke="currentColor" />
      <circle cx="9" cy="10.5" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="19" cy="10.5" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="14" cy="19.2" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12.2" cy="12.2" r="7" stroke="currentColor" />
      <path d="M21 21L17.4 17.4" stroke="currentColor" />
    </svg>
  );
}

export function ScheduleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="6" width="20" height="17" rx="4" stroke="currentColor" />
      <path d="M4 11.5H24" stroke="currentColor" />
      <path d="M9 3.5V8" stroke="currentColor" />
      <path d="M19 3.5V8" stroke="currentColor" />
      <path d="M9.5 16L12 18.3L18 13.2" stroke="currentColor" />
    </svg>
  );
}

export function LibraryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="21" height="19" rx="3.5" stroke="currentColor" />
      <path d="M3.5 10H24.5" stroke="currentColor" />
      <rect x="7" y="13.2" width="4.4" height="6.6" rx="1" stroke="currentColor" />
      <rect x="13.2" y="13.2" width="4.4" height="6.6" rx="1" stroke="currentColor" />
      <rect x="19.4" y="13.2" width="2.6" height="6.6" rx="1" stroke="currentColor" />
      <circle cx="7.2" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TicketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 10.2C4 8.4 5.4 7 7.2 7H20.8C22.6 7 24 8.4 24 10.2V11.4C22.6 11.4 21.5 12.5 21.5 14C21.5 15.5 22.6 16.6 24 16.6V17.8C24 19.6 22.6 21 20.8 21H7.2C5.4 21 4 19.6 4 17.8V16.6C5.4 16.6 6.5 15.5 6.5 14C6.5 12.5 5.4 11.4 4 11.4V10.2Z"
        stroke="currentColor"
      />
      <path d="M14 8.5V19.5" stroke="currentColor" strokeDasharray="1 3.2" />
    </svg>
  );
}

export function PreviewIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3.5 14C6 9.2 9.8 6.8 14 6.8C18.2 6.8 22 9.2 24.5 14C22 18.8 18.2 21.2 14 21.2C9.8 21.2 6 18.8 3.5 14Z"
        stroke="currentColor"
      />
      <circle cx="14" cy="14" r="3.4" stroke="currentColor" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14 3.8L23 7.4V13.4C23 18.9 19.4 23 14 24.8C8.6 23 5 18.9 5 13.4V7.4L14 3.8Z"
        stroke="currentColor"
      />
      <path d="M9.8 14.1L12.6 16.9L18.2 11.1" stroke="currentColor" />
    </svg>
  );
}

export function RestoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3.5V17.5" stroke="currentColor" />
      <path d="M8.5 12L14 17.5L19.5 12" stroke="currentColor" />
      <path d="M4.5 21.3C4.5 22.9 5.8 24.2 7.4 24.2H20.6C22.2 24.2 23.5 22.9 23.5 21.3" stroke="currentColor" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 19V13C8 9.4 10.7 6.5 14 6.5C17.3 6.5 20 9.4 20 13V19L22.5 21.5H5.5L8 19Z"
        stroke="currentColor"
      />
      <path d="M11.5 21.5C11.5 23 12.6 24.2 14 24.2C15.4 24.2 16.5 23 16.5 21.5" stroke="currentColor" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="3.6" stroke="currentColor" />
      <path d="M3.6 22.5C3.6 18.6 6.7 16 10.5 16C14.3 16 17.4 18.6 17.4 22.5" stroke="currentColor" />
      <circle cx="19.5" cy="11.3" r="2.7" stroke="currentColor" />
      <path d="M17.9 16.2C20.9 16.6 23.2 18.9 23.6 22" stroke="currentColor" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4L24.5 10L14 16L3.5 10L14 4Z" stroke="currentColor" />
      <path d="M3.5 15L14 21L24.5 15" stroke="currentColor" />
      <path d="M3.5 20L14 26L24.5 20" stroke="currentColor" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 23.5H23.5" stroke="currentColor" />
      <rect x="7" y="14" width="3.6" height="9" rx="1" stroke="currentColor" />
      <rect x="13" y="9" width="3.6" height="14" rx="1" stroke="currentColor" />
      <rect x="19" y="4.5" width="3.6" height="18.5" rx="1" stroke="currentColor" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 8.4C4 7.1 5.1 6 6.4 6H11.6L14 8.6H21.6C22.9 8.6 24 9.7 24 11V19.6C24 20.9 22.9 22 21.6 22H6.4C5.1 22 4 20.9 4 19.6V8.4Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6.5" width="21" height="15" rx="3" stroke="currentColor" />
      <path d="M4.5 8L14 15L23.5 8" stroke="currentColor" />
    </svg>
  );
}

export function OpenLockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="13" width="16" height="11" rx="2.5" stroke="currentColor" />
      <path d="M9.5 13V9.5C9.5 6.7 11.5 4.5 14.3 4.7C16.7 4.9 18.5 6.9 18.5 9.3V10.3" stroke="currentColor" />
      <circle cx="14" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 14H23" stroke="currentColor" />
      <path d="M16.5 7.5L23 14L16.5 20.5" stroke="currentColor" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 14.5L10.5 20.5L23.5 7.5" stroke="currentColor" />
    </svg>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4.5" width="20" height="7.4" rx="2.2" stroke="currentColor" />
      <rect x="4" y="16.1" width="20" height="7.4" rx="2.2" stroke="currentColor" />
      <circle cx="8.2" cy="8.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8.2" cy="19.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
