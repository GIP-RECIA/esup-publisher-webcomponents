import { css } from 'lit'

export const bootstrapToolTipStyle = css`
  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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
