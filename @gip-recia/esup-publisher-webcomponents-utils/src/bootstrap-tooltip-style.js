import { css } from 'lit'

export const bootstrapToolTipStyle = css`
  @charset "UTF-8";
  /*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors
    * Copyright 2011-2021 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    --bs-gradient: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
  }

  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
  }
  .tooltip.show {
    opacity: 0.9;
  }
  .tooltip .tooltip-arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }
  .tooltip .tooltip-arrow::before {
    position: absolute;
    content: '';
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[data-popper-placement^='top'] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-top .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow {
    bottom: 0;
  }
  .bs-tooltip-top .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow::before {
    top: -1px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
  }

  .bs-tooltip-end,
  .bs-tooltip-auto[data-popper-placement^='right'] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-end .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-end .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow::before {
    right: -1px;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[data-popper-placement^='bottom'] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-bottom .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow {
    top: 0;
  }
  .bs-tooltip-bottom .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow::before {
    bottom: -1px;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
  }

  .bs-tooltip-start,
  .bs-tooltip-auto[data-popper-placement^='left'] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-start .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-start .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow::before {
    left: -1px;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }
`
