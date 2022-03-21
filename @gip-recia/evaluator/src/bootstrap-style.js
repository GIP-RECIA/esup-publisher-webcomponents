import { css } from 'lit'

export const bootstrapStyle = css`
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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(220, 53, 69, var(--bs-text-opacity)) !important;
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h6,
  .h6,
  h5,
  .h5,
  h4,
  .h4,
  h3,
  .h3,
  h2,
  .h2,
  h1,
  .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1,
  .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1,
    .h1 {
      font-size: 2.5rem;
    }
  }

  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2,
    .h2 {
      font-size: 2rem;
    }
  }

  h3,
  .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3,
    .h3 {
      font-size: 1.75rem;
    }
  }

  h4,
  .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4,
    .h4 {
      font-size: 1.5rem;
    }
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  h6,
  .h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small,
  .small {
    font-size: 0.875em;
  }

  mark,
  .mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }
  a:hover {
    color: #0a58ca;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }
  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  /* rtl:raw:
    [type="tel"],
    [type="url"],
    [type="email"],
    [type="number"] {
    direction: ltr;
    }
    */
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-1 {
      font-size: 5rem;
    }
  }

  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-2 {
      font-size: 4.5rem;
    }
  }

  .display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-3 {
      font-size: 4rem;
    }
  }

  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-4 {
      font-size: 3.5rem;
    }
  }

  .display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-5 {
      font-size: 3rem;
    }
  }

  .display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  @media (min-width: 1200px) {
    .display-6 {
      font-size: 2.5rem;
    }
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }

  .initialism {
    font-size: 0.875em;
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  .blockquote > :last-child {
    margin-bottom: 0;
  }

  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 0.875em;
    color: #6c757d;
  }
  .blockquote-footer::before {
    content: '—';
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 0.875em;
    color: #6c757d;
  }

  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container-sm,
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container-md,
    .container-sm,
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1320px;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .col {
    flex: 1 0 0%;
  }

  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.33333333%;
  }

  .offset-2 {
    margin-left: 16.66666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333333%;
  }

  .offset-5 {
    margin-left: 41.66666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333333%;
  }

  .offset-8 {
    margin-left: 66.66666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333333%;
  }

  .offset-11 {
    margin-left: 91.66666667%;
  }

  .g-0,
  .gx-0 {
    --bs-gutter-x: 0;
  }

  .g-0,
  .gy-0 {
    --bs-gutter-y: 0;
  }

  .g-1,
  .gx-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-1,
  .gy-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-2,
  .gx-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-2,
  .gy-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-3,
  .gx-3 {
    --bs-gutter-x: 1rem;
  }

  .g-3,
  .gy-3 {
    --bs-gutter-y: 1rem;
  }

  .g-4,
  .gx-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-4,
  .gy-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-5,
  .gx-5 {
    --bs-gutter-x: 3rem;
  }

  .g-5,
  .gy-5 {
    --bs-gutter-y: 3rem;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }

    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-sm-0 {
      margin-left: 0;
    }

    .offset-sm-1 {
      margin-left: 8.33333333%;
    }

    .offset-sm-2 {
      margin-left: 16.66666667%;
    }

    .offset-sm-3 {
      margin-left: 25%;
    }

    .offset-sm-4 {
      margin-left: 33.33333333%;
    }

    .offset-sm-5 {
      margin-left: 41.66666667%;
    }

    .offset-sm-6 {
      margin-left: 50%;
    }

    .offset-sm-7 {
      margin-left: 58.33333333%;
    }

    .offset-sm-8 {
      margin-left: 66.66666667%;
    }

    .offset-sm-9 {
      margin-left: 75%;
    }

    .offset-sm-10 {
      margin-left: 83.33333333%;
    }

    .offset-sm-11 {
      margin-left: 91.66666667%;
    }

    .g-sm-0,
    .gx-sm-0 {
      --bs-gutter-x: 0;
    }

    .g-sm-0,
    .gy-sm-0 {
      --bs-gutter-y: 0;
    }

    .g-sm-1,
    .gx-sm-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-sm-1,
    .gy-sm-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-sm-2,
    .gx-sm-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-sm-2,
    .gy-sm-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-sm-3,
    .gx-sm-3 {
      --bs-gutter-x: 1rem;
    }

    .g-sm-3,
    .gy-sm-3 {
      --bs-gutter-y: 1rem;
    }

    .g-sm-4,
    .gx-sm-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-sm-4,
    .gy-sm-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-sm-5,
    .gx-sm-5 {
      --bs-gutter-x: 3rem;
    }

    .g-sm-5,
    .gy-sm-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }

    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-md-0 {
      margin-left: 0;
    }

    .offset-md-1 {
      margin-left: 8.33333333%;
    }

    .offset-md-2 {
      margin-left: 16.66666667%;
    }

    .offset-md-3 {
      margin-left: 25%;
    }

    .offset-md-4 {
      margin-left: 33.33333333%;
    }

    .offset-md-5 {
      margin-left: 41.66666667%;
    }

    .offset-md-6 {
      margin-left: 50%;
    }

    .offset-md-7 {
      margin-left: 58.33333333%;
    }

    .offset-md-8 {
      margin-left: 66.66666667%;
    }

    .offset-md-9 {
      margin-left: 75%;
    }

    .offset-md-10 {
      margin-left: 83.33333333%;
    }

    .offset-md-11 {
      margin-left: 91.66666667%;
    }

    .g-md-0,
    .gx-md-0 {
      --bs-gutter-x: 0;
    }

    .g-md-0,
    .gy-md-0 {
      --bs-gutter-y: 0;
    }

    .g-md-1,
    .gx-md-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-md-1,
    .gy-md-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-md-2,
    .gx-md-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-md-2,
    .gy-md-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-md-3,
    .gx-md-3 {
      --bs-gutter-x: 1rem;
    }

    .g-md-3,
    .gy-md-3 {
      --bs-gutter-y: 1rem;
    }

    .g-md-4,
    .gx-md-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-md-4,
    .gy-md-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-md-5,
    .gx-md-5 {
      --bs-gutter-x: 3rem;
    }

    .g-md-5,
    .gy-md-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }

    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-lg-0 {
      margin-left: 0;
    }

    .offset-lg-1 {
      margin-left: 8.33333333%;
    }

    .offset-lg-2 {
      margin-left: 16.66666667%;
    }

    .offset-lg-3 {
      margin-left: 25%;
    }

    .offset-lg-4 {
      margin-left: 33.33333333%;
    }

    .offset-lg-5 {
      margin-left: 41.66666667%;
    }

    .offset-lg-6 {
      margin-left: 50%;
    }

    .offset-lg-7 {
      margin-left: 58.33333333%;
    }

    .offset-lg-8 {
      margin-left: 66.66666667%;
    }

    .offset-lg-9 {
      margin-left: 75%;
    }

    .offset-lg-10 {
      margin-left: 83.33333333%;
    }

    .offset-lg-11 {
      margin-left: 91.66666667%;
    }

    .g-lg-0,
    .gx-lg-0 {
      --bs-gutter-x: 0;
    }

    .g-lg-0,
    .gy-lg-0 {
      --bs-gutter-y: 0;
    }

    .g-lg-1,
    .gx-lg-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-lg-1,
    .gy-lg-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-lg-2,
    .gx-lg-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-lg-2,
    .gy-lg-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-lg-3,
    .gx-lg-3 {
      --bs-gutter-x: 1rem;
    }

    .g-lg-3,
    .gy-lg-3 {
      --bs-gutter-y: 1rem;
    }

    .g-lg-4,
    .gx-lg-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-lg-4,
    .gy-lg-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-lg-5,
    .gx-lg-5 {
      --bs-gutter-x: 3rem;
    }

    .g-lg-5,
    .gy-lg-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }

    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xl-0 {
      margin-left: 0;
    }

    .offset-xl-1 {
      margin-left: 8.33333333%;
    }

    .offset-xl-2 {
      margin-left: 16.66666667%;
    }

    .offset-xl-3 {
      margin-left: 25%;
    }

    .offset-xl-4 {
      margin-left: 33.33333333%;
    }

    .offset-xl-5 {
      margin-left: 41.66666667%;
    }

    .offset-xl-6 {
      margin-left: 50%;
    }

    .offset-xl-7 {
      margin-left: 58.33333333%;
    }

    .offset-xl-8 {
      margin-left: 66.66666667%;
    }

    .offset-xl-9 {
      margin-left: 75%;
    }

    .offset-xl-10 {
      margin-left: 83.33333333%;
    }

    .offset-xl-11 {
      margin-left: 91.66666667%;
    }

    .g-xl-0,
    .gx-xl-0 {
      --bs-gutter-x: 0;
    }

    .g-xl-0,
    .gy-xl-0 {
      --bs-gutter-y: 0;
    }

    .g-xl-1,
    .gx-xl-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-xl-1,
    .gy-xl-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-xl-2,
    .gx-xl-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-xl-2,
    .gy-xl-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-xl-3,
    .gx-xl-3 {
      --bs-gutter-x: 1rem;
    }

    .g-xl-3,
    .gy-xl-3 {
      --bs-gutter-y: 1rem;
    }

    .g-xl-4,
    .gx-xl-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-xl-4,
    .gy-xl-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-xl-5,
    .gx-xl-5 {
      --bs-gutter-x: 3rem;
    }

    .g-xl-5,
    .gy-xl-5 {
      --bs-gutter-y: 3rem;
    }
  }
  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }

    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xxl-0 {
      margin-left: 0;
    }

    .offset-xxl-1 {
      margin-left: 8.33333333%;
    }

    .offset-xxl-2 {
      margin-left: 16.66666667%;
    }

    .offset-xxl-3 {
      margin-left: 25%;
    }

    .offset-xxl-4 {
      margin-left: 33.33333333%;
    }

    .offset-xxl-5 {
      margin-left: 41.66666667%;
    }

    .offset-xxl-6 {
      margin-left: 50%;
    }

    .offset-xxl-7 {
      margin-left: 58.33333333%;
    }

    .offset-xxl-8 {
      margin-left: 66.66666667%;
    }

    .offset-xxl-9 {
      margin-left: 75%;
    }

    .offset-xxl-10 {
      margin-left: 83.33333333%;
    }

    .offset-xxl-11 {
      margin-left: 91.66666667%;
    }

    .g-xxl-0,
    .gx-xxl-0 {
      --bs-gutter-x: 0;
    }

    .g-xxl-0,
    .gy-xxl-0 {
      --bs-gutter-y: 0;
    }

    .g-xxl-1,
    .gx-xxl-1 {
      --bs-gutter-x: 0.25rem;
    }

    .g-xxl-1,
    .gy-xxl-1 {
      --bs-gutter-y: 0.25rem;
    }

    .g-xxl-2,
    .gx-xxl-2 {
      --bs-gutter-x: 0.5rem;
    }

    .g-xxl-2,
    .gy-xxl-2 {
      --bs-gutter-y: 0.5rem;
    }

    .g-xxl-3,
    .gx-xxl-3 {
      --bs-gutter-x: 1rem;
    }

    .g-xxl-3,
    .gy-xxl-3 {
      --bs-gutter-y: 1rem;
    }

    .g-xxl-4,
    .gx-xxl-4 {
      --bs-gutter-x: 1.5rem;
    }

    .g-xxl-4,
    .gy-xxl-4 {
      --bs-gutter-y: 1.5rem;
    }

    .g-xxl-5,
    .gx-xxl-5 {
      --bs-gutter-x: 3rem;
    }

    .g-xxl-5,
    .gy-xxl-5 {
      --bs-gutter-y: 3rem;
    }
  }
  .table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
  }
  .table > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  .table > tbody {
    vertical-align: inherit;
  }
  .table > thead {
    vertical-align: bottom;
  }
  .table > :not(:first-child) {
    border-top: 2px solid currentColor;
  }

  .caption-top {
    caption-side: top;
  }

  .table-sm > :not(caption) > * > * {
    padding: 0.25rem 0.25rem;
  }

  .table-bordered > :not(caption) > * {
    border-width: 1px 0;
  }
  .table-bordered > :not(caption) > * > * {
    border-width: 0 1px;
  }

  .table-borderless > :not(caption) > * > * {
    border-bottom-width: 0;
  }
  .table-borderless > :not(:first-child) {
    border-top-width: 0;
  }

  .table-striped > tbody > tr:nth-of-type(odd) > * {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color);
  }

  .table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color);
  }

  .table-hover > tbody > tr:hover > * {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color);
  }

  .table-primary {
    --bs-table-bg: #cfe2ff;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bacbe6;
  }

  .table-secondary {
    --bs-table-bg: #e2e3e5;
    --bs-table-striped-bg: #d7d8da;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #cbccce;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d1d2d4;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #cbccce;
  }

  .table-success {
    --bs-table-bg: #d1e7dd;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bcd0c7;
  }

  .table-info {
    --bs-table-bg: #cff4fc;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #badce3;
  }

  .table-warning {
    --bs-table-bg: #fff3cd;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #e6dbb9;
  }

  .table-danger {
    --bs-table-bg: #f8d7da;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfc2c4;
  }

  .table-light {
    --bs-table-bg: #f8f9fa;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfe0e1;
  }

  .table-dark {
    --bs-table-bg: #212529;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #373b3e;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 767.98px) {
    .table-responsive-md {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 991.98px) {
    .table-responsive-lg {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media (max-width: 1399.98px) {
    .table-responsive-xxl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  .form-label {
    margin-bottom: 0.5rem;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
  }

  .form-text {
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #6c757d;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control[type='file'] {
    overflow: hidden;
  }
  .form-control[type='file']:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
    .form-control::file-selector-button {
      transition: none;
    }
  }
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }
  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
  }
  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
  }
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  .form-control-sm::-webkit-file-upload-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }
  .form-control-sm::file-selector-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }
  .form-control-sm::-webkit-file-upload-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }

  .form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  .form-control-lg::-webkit-file-upload-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }
  .form-control-lg::file-selector-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }
  .form-control-lg::-webkit-file-upload-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }

  textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
  }
  textarea.form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
  }
  textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
  }

  .form-control-color {
    width: 3rem;
    height: auto;
    padding: 0.375rem;
  }
  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control-color::-moz-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }
  .form-control-color::-webkit-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none;
    }
  }
  .form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-select[multiple],
  .form-select[size]:not([size='1']) {
    padding-right: 0.75rem;
    background-image: none;
  }
  .form-select:disabled {
    background-color: #e9ecef;
  }
  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }

  .form-select-sm {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .form-select-lg {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
  .form-check-input[type='checkbox'] {
    border-radius: 0.25em;
  }
  .form-check-input[type='radio'] {
    border-radius: 50%;
  }
  .form-check-input:active {
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .form-check-input:checked[type='checkbox'] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  .form-check-input:checked[type='radio'] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  .form-check-input[type='checkbox']:indeterminate {
    background-color: #0d6efd;
    border-color: #0d6efd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }
  .form-check-input[disabled] ~ .form-check-label,
  .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }

  .form-switch {
    padding-left: 2.5em;
  }
  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }
  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
  }
  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }

  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }
  .btn-check[disabled] + .btn,
  .btn-check:disabled + .btn {
    pointer-events: none;
    filter: none;
    opacity: 0.65;
  }

  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .form-range:focus {
    outline: 0;
  }
  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-range::-moz-focus-outer {
    border: 0;
  }
  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
      -webkit-transition: none;
      transition: none;
    }
  }
  .form-range::-webkit-slider-thumb:active {
    background-color: #b6d4fe;
  }
  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
      -moz-transition: none;
      transition: none;
    }
  }
  .form-range::-moz-range-thumb:active {
    background-color: #b6d4fe;
  }
  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .form-range:disabled {
    pointer-events: none;
  }
  .form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd;
  }
  .form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd;
  }

  .form-floating {
    position: relative;
  }
  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
  }
  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-floating > label {
      transition: none;
    }
  }
  .form-floating > .form-control {
    padding: 1rem 0.75rem;
  }
  .form-floating > .form-control::-moz-placeholder {
    color: transparent;
  }
  .form-floating > .form-control::placeholder {
    color: transparent;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:focus,
  .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
    padding-right: 3rem;
  }

  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #198754;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(25, 135, 84, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated :valid ~ .valid-feedback,
  .was-validated :valid ~ .valid-tooltip,
  .is-valid ~ .valid-feedback,
  .is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-control:valid,
  .form-control.is-valid {
    border-color: #198754;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }

  .was-validated textarea.form-control:valid,
  textarea.form-control.is-valid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right
      calc(0.375em + 0.1875rem);
  }

  .was-validated .form-select:valid,
  .form-select.is-valid {
    border-color: #198754;
  }
  .was-validated .form-select:valid:not([multiple]):not([size]),
  .was-validated .form-select:valid:not([multiple])[size='1'],
  .form-select.is-valid:not([multiple]):not([size]),
  .form-select.is-valid:not([multiple])[size='1'] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-select:valid:focus,
  .form-select.is-valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }

  .was-validated .form-check-input:valid,
  .form-check-input.is-valid {
    border-color: #198754;
  }
  .was-validated .form-check-input:valid:checked,
  .form-check-input.is-valid:checked {
    background-color: #198754;
  }
  .was-validated .form-check-input:valid:focus,
  .form-check-input.is-valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  .was-validated .form-check-input:valid ~ .form-check-label,
  .form-check-input.is-valid ~ .form-check-label {
    color: #198754;
  }

  .form-check-inline .form-check-input ~ .valid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:valid,
  .input-group .form-control.is-valid,
  .was-validated .input-group .form-select:valid,
  .input-group .form-select.is-valid {
    z-index: 1;
  }
  .was-validated .input-group .form-control:valid:focus,
  .input-group .form-control.is-valid:focus,
  .was-validated .input-group .form-select:valid:focus,
  .input-group .form-select.is-valid:focus {
    z-index: 3;
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #dc3545;
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(220, 53, 69, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated :invalid ~ .invalid-feedback,
  .was-validated :invalid ~ .invalid-tooltip,
  .is-invalid ~ .invalid-feedback,
  .is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-control:invalid,
  .form-control.is-invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }

  .was-validated textarea.form-control:invalid,
  textarea.form-control.is-invalid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right
      calc(0.375em + 0.1875rem);
  }

  .was-validated .form-select:invalid,
  .form-select.is-invalid {
    border-color: #dc3545;
  }
  .was-validated .form-select:invalid:not([multiple]):not([size]),
  .was-validated .form-select:invalid:not([multiple])[size='1'],
  .form-select.is-invalid:not([multiple]):not([size]),
  .form-select.is-invalid:not([multiple])[size='1'] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-select:invalid:focus,
  .form-select.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }

  .was-validated .form-check-input:invalid,
  .form-check-input.is-invalid {
    border-color: #dc3545;
  }
  .was-validated .form-check-input:invalid:checked,
  .form-check-input.is-invalid:checked {
    background-color: #dc3545;
  }
  .was-validated .form-check-input:invalid:focus,
  .form-check-input.is-invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  .was-validated .form-check-input:invalid ~ .form-check-label,
  .form-check-input.is-invalid ~ .form-check-label {
    color: #dc3545;
  }

  .form-check-inline .form-check-input ~ .invalid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:invalid,
  .input-group .form-control.is-invalid,
  .was-validated .input-group .form-select:invalid,
  .input-group .form-select.is-invalid {
    z-index: 2;
  }
  .was-validated .input-group .form-control:invalid:focus,
  .input-group .form-control.is-invalid:focus,
  .was-validated .input-group .form-select:invalid:focus,
  .input-group .form-select.is-invalid:focus {
    z-index: 3;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
  .btn-check:focus + .btn,
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    pointer-events: none;
    opacity: 0.65;
  }

  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  .btn-check:focus + .btn-primary,
  .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-check:checked + .btn-primary,
  .btn-check:active + .btn-primary,
  .btn-primary:active,
  .btn-primary.active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
  .btn-check:checked + .btn-primary:focus,
  .btn-check:active + .btn-primary:focus,
  .btn-primary:active:focus,
  .btn-primary.active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:disabled,
  .btn-primary.disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }
  .btn-check:focus + .btn-secondary,
  .btn-secondary:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-check:checked + .btn-secondary,
  .btn-check:active + .btn-secondary,
  .btn-secondary:active,
  .btn-secondary.active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e;
  }
  .btn-check:checked + .btn-secondary:focus,
  .btn-check:active + .btn-secondary:focus,
  .btn-secondary:active:focus,
  .btn-secondary.active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-secondary:disabled,
  .btn-secondary.disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-success {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }
  .btn-check:focus + .btn-success,
  .btn-success:focus {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-check:checked + .btn-success,
  .btn-check:active + .btn-success,
  .btn-success:active,
  .btn-success.active,
  .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #146c43;
    border-color: #13653f;
  }
  .btn-check:checked + .btn-success:focus,
  .btn-check:active + .btn-success:focus,
  .btn-success:active:focus,
  .btn-success.active:focus,
  .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-success:disabled,
  .btn-success.disabled {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }

  .btn-info {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-info:hover {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
  }
  .btn-check:focus + .btn-info,
  .btn-info:focus {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-check:checked + .btn-info,
  .btn-check:active + .btn-info,
  .btn-info:active,
  .btn-info.active,
  .show > .btn-info.dropdown-toggle {
    color: #000;
    background-color: #3dd5f3;
    border-color: #25cff2;
  }
  .btn-check:checked + .btn-info:focus,
  .btn-check:active + .btn-info:focus,
  .btn-info:active:focus,
  .btn-info.active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-info:disabled,
  .btn-info.disabled {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }

  .btn-warning {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:hover {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
  }
  .btn-check:focus + .btn-warning,
  .btn-warning:focus {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-check:checked + .btn-warning,
  .btn-check:active + .btn-warning,
  .btn-warning:active,
  .btn-warning.active,
  .show > .btn-warning.dropdown-toggle {
    color: #000;
    background-color: #ffcd39;
    border-color: #ffc720;
  }
  .btn-check:checked + .btn-warning:focus,
  .btn-check:active + .btn-warning:focus,
  .btn-warning:active:focus,
  .btn-warning.active:focus,
  .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-warning:disabled,
  .btn-warning.disabled {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }

  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
  .btn-check:focus + .btn-danger,
  .btn-danger:focus {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-check:checked + .btn-danger,
  .btn-check:active + .btn-danger,
  .btn-danger:active,
  .btn-danger.active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #b02a37;
    border-color: #a52834;
  }
  .btn-check:checked + .btn-danger:focus,
  .btn-check:active + .btn-danger:focus,
  .btn-danger:active:focus,
  .btn-danger.active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-danger:disabled,
  .btn-danger.disabled {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-light:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-check:focus + .btn-light,
  .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-check:checked + .btn-light,
  .btn-check:active + .btn-light,
  .btn-light:active,
  .btn-light.active,
  .show > .btn-light.dropdown-toggle {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-check:checked + .btn-light:focus,
  .btn-check:active + .btn-light:focus,
  .btn-light:active:focus,
  .btn-light.active:focus,
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:disabled,
  .btn-light.disabled {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-dark:hover {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
  }
  .btn-check:focus + .btn-dark,
  .btn-dark:focus {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-check:checked + .btn-dark,
  .btn-check:active + .btn-dark,
  .btn-dark:active,
  .btn-dark.active,
  .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f;
  }
  .btn-check:checked + .btn-dark:focus,
  .btn-check:active + .btn-dark:focus,
  .btn-dark:active:focus,
  .btn-dark.active:focus,
  .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-dark:disabled,
  .btn-dark.disabled {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }

  .btn-outline-primary {
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-check:focus + .btn-outline-primary,
  .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-check:checked + .btn-outline-primary,
  .btn-check:active + .btn-outline-primary,
  .btn-outline-primary:active,
  .btn-outline-primary.active,
  .btn-outline-primary.dropdown-toggle.show {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-check:checked + .btn-outline-primary:focus,
  .btn-check:active + .btn-outline-primary:focus,
  .btn-outline-primary:active:focus,
  .btn-outline-primary.active:focus,
  .btn-outline-primary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-outline-primary:disabled,
  .btn-outline-primary.disabled {
    color: #0d6efd;
    background-color: transparent;
  }

  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-check:focus + .btn-outline-secondary,
  .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-check:checked + .btn-outline-secondary,
  .btn-check:active + .btn-outline-secondary,
  .btn-outline-secondary:active,
  .btn-outline-secondary.active,
  .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-check:checked + .btn-outline-secondary:focus,
  .btn-check:active + .btn-outline-secondary:focus,
  .btn-outline-secondary:active:focus,
  .btn-outline-secondary.active:focus,
  .btn-outline-secondary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:disabled,
  .btn-outline-secondary.disabled {
    color: #6c757d;
    background-color: transparent;
  }

  .btn-outline-success {
    color: #198754;
    border-color: #198754;
  }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-check:focus + .btn-outline-success,
  .btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-check:checked + .btn-outline-success,
  .btn-check:active + .btn-outline-success,
  .btn-outline-success:active,
  .btn-outline-success.active,
  .btn-outline-success.dropdown-toggle.show {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-check:checked + .btn-outline-success:focus,
  .btn-check:active + .btn-outline-success:focus,
  .btn-outline-success:active:focus,
  .btn-outline-success.active:focus,
  .btn-outline-success.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-outline-success:disabled,
  .btn-outline-success.disabled {
    color: #198754;
    background-color: transparent;
  }

  .btn-outline-info {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-outline-info:hover {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-check:focus + .btn-outline-info,
  .btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-check:checked + .btn-outline-info,
  .btn-check:active + .btn-outline-info,
  .btn-outline-info:active,
  .btn-outline-info.active,
  .btn-outline-info.dropdown-toggle.show {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-check:checked + .btn-outline-info:focus,
  .btn-check:active + .btn-outline-info:focus,
  .btn-outline-info:active:focus,
  .btn-outline-info.active:focus,
  .btn-outline-info.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-outline-info:disabled,
  .btn-outline-info.disabled {
    color: #0dcaf0;
    background-color: transparent;
  }

  .btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:hover {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-check:focus + .btn-outline-warning,
  .btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-check:checked + .btn-outline-warning,
  .btn-check:active + .btn-outline-warning,
  .btn-outline-warning:active,
  .btn-outline-warning.active,
  .btn-outline-warning.dropdown-toggle.show {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-check:checked + .btn-outline-warning:focus,
  .btn-check:active + .btn-outline-warning:focus,
  .btn-outline-warning:active:focus,
  .btn-outline-warning.active:focus,
  .btn-outline-warning.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning:disabled,
  .btn-outline-warning.disabled {
    color: #ffc107;
    background-color: transparent;
  }

  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
  }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-check:focus + .btn-outline-danger,
  .btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-check:checked + .btn-outline-danger,
  .btn-check:active + .btn-outline-danger,
  .btn-outline-danger:active,
  .btn-outline-danger.active,
  .btn-outline-danger.dropdown-toggle.show {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-check:checked + .btn-outline-danger:focus,
  .btn-check:active + .btn-outline-danger:focus,
  .btn-outline-danger:active:focus,
  .btn-outline-danger.active:focus,
  .btn-outline-danger.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-outline-danger:disabled,
  .btn-outline-danger.disabled {
    color: #dc3545;
    background-color: transparent;
  }

  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:focus + .btn-outline-light,
  .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-check:checked + .btn-outline-light,
  .btn-check:active + .btn-outline-light,
  .btn-outline-light:active,
  .btn-outline-light.active,
  .btn-outline-light.dropdown-toggle.show {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-check:checked + .btn-outline-light:focus,
  .btn-check:active + .btn-outline-light:focus,
  .btn-outline-light:active:focus,
  .btn-outline-light.active:focus,
  .btn-outline-light.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-light:disabled,
  .btn-outline-light.disabled {
    color: #f8f9fa;
    background-color: transparent;
  }

  .btn-outline-dark {
    color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:focus + .btn-outline-dark,
  .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-check:checked + .btn-outline-dark,
  .btn-check:active + .btn-outline-dark,
  .btn-outline-dark:active,
  .btn-outline-dark.active,
  .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:checked + .btn-outline-dark:focus,
  .btn-check:active + .btn-outline-dark:focus,
  .btn-outline-dark:active:focus,
  .btn-outline-dark.active:focus,
  .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:disabled,
  .btn-outline-dark.disabled {
    color: #212529;
    background-color: transparent;
  }

  .btn-link {
    font-weight: 400;
    color: #0d6efd;
    text-decoration: underline;
  }
  .btn-link:hover {
    color: #0a58ca;
  }
  .btn-link:disabled,
  .btn-link.disabled {
    color: #6c757d;
  }

  .btn-lg,
  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .btn-sm,
  .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }
  .collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
      transition: none;
    }
  }

  .dropup,
  .dropend,
  .dropdown,
  .dropstart {
    position: relative;
  }

  .dropdown-toggle {
    white-space: nowrap;
  }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
  }

  .dropdown-menu-start {
    --bs-position: start;
  }
  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-end {
    --bs-position: end;
  }
  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto;
  }

  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
      right: auto;
      left: 0;
    }

    .dropdown-menu-sm-end {
      --bs-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
      right: auto;
      left: 0;
    }

    .dropdown-menu-md-end {
      --bs-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
      right: auto;
      left: 0;
    }

    .dropdown-menu-lg-end {
      --bs-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }

    .dropdown-menu-xl-end {
      --bs-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }

    .dropdown-menu-xxl-end {
      --bs-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  .dropup .dropdown-menu[data-bs-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem;
  }
  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }
  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropend .dropdown-menu[data-bs-popper] {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem;
  }
  .dropend .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .dropend .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropend .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem;
  }
  .dropstart .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
  }
  .dropstart .dropdown-toggle::after {
    display: none;
  }
  .dropstart .dropdown-toggle::before {
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }
  .dropstart .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle::before {
    vertical-align: 0;
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #1e2125;
    background-color: #e9ecef;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #0d6efd;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #adb5bd;
    pointer-events: none;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #6c757d;
    white-space: nowrap;
  }

  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1rem;
    color: #212529;
  }

  .dropdown-menu-dark {
    color: #dee2e6;
    background-color: #343a40;
    border-color: rgba(0, 0, 0, 0.15);
  }
  .dropdown-menu-dark .dropdown-item {
    color: #dee2e6;
  }
  .dropdown-menu-dark .dropdown-item:hover,
  .dropdown-menu-dark .dropdown-item:focus {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
  }
  .dropdown-menu-dark .dropdown-item.active,
  .dropdown-menu-dark .dropdown-item:active {
    color: #fff;
    background-color: #0d6efd;
  }
  .dropdown-menu-dark .dropdown-item.disabled,
  .dropdown-menu-dark .dropdown-item:disabled {
    color: #adb5bd;
  }
  .dropdown-menu-dark .dropdown-divider {
    border-color: rgba(0, 0, 0, 0.15);
  }
  .dropdown-menu-dark .dropdown-item-text {
    color: #dee2e6;
  }
  .dropdown-menu-dark .dropdown-header {
    color: #adb5bd;
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 1 1 auto;
  }
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn-check:checked + .btn,
  .btn-group-vertical > .btn-check:focus + .btn,
  .btn-group-vertical > .btn:hover,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
  }
  .dropdown-toggle-split::after,
  .dropup .dropdown-toggle-split::after,
  .dropend .dropdown-toggle-split::after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle-split::before {
    margin-right: 0;
  }

  .btn-sm + .dropdown-toggle-split,
  .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  .btn-lg + .dropdown-toggle-split,
  .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group {
    width: 100%;
  }
  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) {
    margin-top: -1px;
  }
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn-group-vertical > .btn ~ .btn,
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
  }
  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }
  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
  }

  .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .align-items-center {
    align-items: center !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }
`
