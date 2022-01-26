import {css} from 'lit-element';

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
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
    }

    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    }

    h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
    h1, .h1 {
        font-size: 2.5rem;
    }
    }

    h2, .h2 {
    font-size: calc(1.325rem + 0.9vw);
    }
    @media (min-width: 1200px) {
    h2, .h2 {
        font-size: 2rem;
    }
    }

    h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
    }
    @media (min-width: 1200px) {
    h3, .h3 {
        font-size: 1.75rem;
    }
    }

    h4, .h4 {
    font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 1200px) {
    h4, .h4 {
        font-size: 1.5rem;
    }
    }

    h5, .h5 {
    font-size: 1.25rem;
    }

    h6, .h6 {
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

    small, .small {
    font-size: 0.875em;
    }

    mark, .mark {
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

    a:not([href]):not([class]), a:not([href]):not([class]):hover {
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

    [role=button] {
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
    [type=button],
    [type=reset],
    [type=submit] {
    -webkit-appearance: button;
    }
    button:not(:disabled),
    [type=button]:not(:disabled),
    [type=reset]:not(:disabled),
    [type=submit]:not(:disabled) {
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

    [type=search] {
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
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
    }
    .btn:hover {
    color: #212529;
    }
    .btn-check:focus + .btn, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    .btn:disabled, .btn.disabled, fieldset:disabled .btn {
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
    .btn-check:focus + .btn-primary, .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
    }
    .btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
    }
    .btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
    }
    .btn-primary:disabled, .btn-primary.disabled {
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
    .btn-check:focus + .btn-secondary, .btn-secondary:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
    }
    .btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e;
    }
    .btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
    }
    .btn-secondary:disabled, .btn-secondary.disabled {
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
    .btn-check:focus + .btn-success, .btn-success:focus {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
    }
    .btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #146c43;
    border-color: #13653f;
    }
    .btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
    }
    .btn-success:disabled, .btn-success.disabled {
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
    .btn-check:focus + .btn-info, .btn-info:focus {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
    }
    .btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
    color: #000;
    background-color: #3dd5f3;
    border-color: #25cff2;
    }
    .btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
    }
    .btn-info:disabled, .btn-info.disabled {
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
    .btn-check:focus + .btn-warning, .btn-warning:focus {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
    }
    .btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
    color: #000;
    background-color: #ffcd39;
    border-color: #ffc720;
    }
    .btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
    }
    .btn-warning:disabled, .btn-warning.disabled {
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
    .btn-check:focus + .btn-danger, .btn-danger:focus {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
    }
    .btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #b02a37;
    border-color: #a52834;
    }
    .btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
    }
    .btn-danger:disabled, .btn-danger.disabled {
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
    .btn-check:focus + .btn-light, .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
    }
    .btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    }
    .btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
    }
    .btn-light:disabled, .btn-light.disabled {
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
    .btn-check:focus + .btn-dark, .btn-dark:focus {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
    }
    .btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f;
    }
    .btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
    }
    .btn-dark:disabled, .btn-dark.disabled {
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
    .btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
    }
    .btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    }
    .btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
    }
    .btn-outline-primary:disabled, .btn-outline-primary.disabled {
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
    .btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
    }
    .btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    }
    .btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
    }
    .btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
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
    .btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
    }
    .btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
    }
    .btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
    }
    .btn-outline-success:disabled, .btn-outline-success.disabled {
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
    .btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
    }
    .btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    }
    .btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
    }
    .btn-outline-info:disabled, .btn-outline-info.disabled {
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
    .btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
    }
    .btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
    }
    .btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
    }
    .btn-outline-warning:disabled, .btn-outline-warning.disabled {
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
    .btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
    }
    .btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    }
    .btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
    }
    .btn-outline-danger:disabled, .btn-outline-danger.disabled {
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
    .btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
    }
    .btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    }
    .btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
    }
    .btn-outline-light:disabled, .btn-outline-light.disabled {
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
    .btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
    }
    .btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
    }
    .btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
    }
    .btn-outline-dark:disabled, .btn-outline-dark.disabled {
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
    .btn-link:disabled, .btn-link.disabled {
    color: #6c757d;
    }

    .btn-lg, .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    }

    .btn-sm, .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
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

    .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
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
    .btn-close:disabled, .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
    }

    .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
    }

    .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    }

    .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
    }
    .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
    }
    @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
        transition: none;
    }
    }
    .modal.show .modal-dialog {
    transform: none;
    }
    .modal.modal-static .modal-dialog {
    transform: scale(1.02);
    }

    .modal-dialog-scrollable {
    height: calc(100% - 1rem);
    }
    .modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
    }
    .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
    }

    .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
    }

    .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    }

    .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    }
    .modal-backdrop.fade {
    opacity: 0;
    }
    .modal-backdrop.show {
    opacity: 0.5;
    }

    .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    }
    .modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    }

    .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    }

    .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    }

    .modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
    }
    .modal-footer > * {
    margin: 0.25rem;
    }

    @media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }

    .modal-dialog-scrollable {
        height: calc(100% - 3.5rem);
    }

    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem);
    }

    .modal-sm {
        max-width: 300px;
    }
    }
    @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
        max-width: 800px;
    }
    }
    @media (min-width: 1200px) {
    .modal-xl {
        max-width: 1140px;
    }
    }
    .modal-fullscreen {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
    }
    .modal-fullscreen .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
    }
    .modal-fullscreen .modal-header {
    border-radius: 0;
    }
    .modal-fullscreen .modal-body {
    overflow-y: auto;
    }
    .modal-fullscreen .modal-footer {
    border-radius: 0;
    }

    @media (max-width: 575.98px) {
    .modal-fullscreen-sm-down {
        width: 100vw;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal-fullscreen-sm-down .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal-fullscreen-sm-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-sm-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-sm-down .modal-footer {
        border-radius: 0;
    }
    }
    @media (max-width: 767.98px) {
    .modal-fullscreen-md-down {
        width: 100vw;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal-fullscreen-md-down .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal-fullscreen-md-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-md-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-md-down .modal-footer {
        border-radius: 0;
    }
    }
    @media (max-width: 991.98px) {
    .modal-fullscreen-lg-down {
        width: 100vw;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal-fullscreen-lg-down .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal-fullscreen-lg-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-lg-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-lg-down .modal-footer {
        border-radius: 0;
    }
    }
    @media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down {
        width: 100vw;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal-fullscreen-xl-down .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal-fullscreen-xl-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-xl-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-xl-down .modal-footer {
        border-radius: 0;
    }
    }
    @media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down {
        width: 100vw;
        max-width: none;
        height: 100%;
        margin: 0;
    }
    .modal-fullscreen-xxl-down .modal-content {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .modal-fullscreen-xxl-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-xxl-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-xxl-down .modal-footer {
        border-radius: 0;
    }
    }
    
  `