import { css } from 'lit'

export const bootstrapStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h4,
  .h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
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

  ul {
    padding-left: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul ul {
    margin-bottom: 0;
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
  select {
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

  button,
  [type='button'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }

  [hidden] {
    display: none !important;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
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

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .g-3 {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
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
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
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
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
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

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(
      .invalid-feedback
    ) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled,
  .btn.disabled {
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
  .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:active,
  .btn-primary.active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
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

  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:active,
  .btn-outline-secondary.active,
  .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
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

  .btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn {
    position: relative;
    flex: 1 1 auto;
  }
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active {
    z-index: 1;
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

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
  }

  .card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  .card-footer {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-link {
    position: relative;
    display: block;
    color: #0d6efd;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .page-link {
      transition: none;
    }
  }
  .page-link:hover {
    z-index: 2;
    color: #0a58ca;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 3;
    color: #0a58ca;
    background-color: #e9ecef;
    outline: 0;
  }

  .page-item:not(:first-child) .page-link {
    margin-left: -1px;
  }
  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .page-link {
    padding: 0.375rem 0.75rem;
  }

  .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
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
  }
  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  .align-items-center {
    align-items: center !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }
`
