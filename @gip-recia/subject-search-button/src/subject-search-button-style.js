import { css } from 'lit'

export const subjectSearchButtonStyle = css`
  .icon {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin: 0px 2px;
  }
  .icon-plus {
    font-family: var(--icon-plus-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-plus-font-weight, 900);
  }
  .icon-plus:before {
    content: var(--icon-plus-content, '\\f067');
  }
  .icon-cancel {
    font-family: var(--icon-cancel-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-cancel-font-weight, 900);
  }
  .icon-cancel:before {
    content: var(--icon-cancel-content, '\\f00d');
  }
  .icon-validate {
    font-family: var(--icon-validate-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-validate-font-weight, 900);
  }
  .icon-validate:before {
    content: var(--icon-validate-content, '\\f00c');
  }
  .icon-question {
    font-family: var(--icon-question-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-question-font-weight, 900);
  }
  .icon-question:before {
    content: var(--icon-question-content, '\\f059');
  }
  .icon-search {
    font-family: var(--icon-search-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-search-font-weight, 900);
  }
  .icon-search:before {
    content: var(--icon-search-content, '\\f002');
  }
  ul.pagination li .page-link,
  ul.pagination li.disabled .page-link {
    color: var(--text-color-pagination, #25b2f3);
    border-color: #d0d0d0;
  }
  ul.pagination li.page-item.active .page-link {
    color: var(--selected-text-color-pagination, #fff);
    background-color: var(--selected-background-color-pagination, #25b2f3);
    border-color: #d0d0d0;
  }
  button:disabled,
  .page-item.disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
  button.btn-primary.validate {
    color: var(--validate-button-text-color, #fff);
    background-color: var(--validate-button-background-color, #0d6efd);
    border-color: var(--validate-button-border-color, #0d6efd);
  }
  button.btn-primary.validate:not(:disabled):hover {
    opacity: 0.75;
  }
  [data-tooltip] {
    position: relative;
  }
`
