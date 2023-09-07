import { css } from 'lit'

export const colorPaletteStyle = css`
  .color-palette-picker {
    text-align: center;
  }

  @media (min-width: 576px) {
    .color-palette-picker .modal-dialog {
      max-width: 350px;
    }
  }

  .color-palette-picker .color-palette div.transparent-color {
    border-color: rgb(224, 224, 224);
  }

  .color-palette-picker .selected-color,
  .color-palette-picker .color-palette div {
    box-sizing: border-box;
    border-radius: 50%;
    height: 52px;
    width: 52px;
    opacity: 1;
    cursor: pointer;
    display: inline-block;
    border: 2px solid transparent;
    outline: none !important;
  }
  .color-palette-picker .color-palette div {
    margin: 10px;
  }

  .color-palette-picker .selected-color,
  .color-palette-picker .color-palette div:hover,
  .color-palette-picker .color-palette div:focus {
    border-color: rgba(0, 0, 0, 0.4);
  }

  .color-palette-picker .selected-color:hover,
  .color-palette-picker .selected-color:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }

  .color-palette-picker .color-palette div.palette-selected-color:after {
    content: '\\2713';
    font-size: 32px;
    line-height: inherit;
    color: white;
    position: absolute;
    margin-left: -10px;
  }

  .color-palette-picker .color-palette div.transparent-color.palette-selected-color:after {
    color: black;
  }

  .color-palette-picker .icon {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin: 0px 2px;
  }
  .color-palette-picker .icon-cancel {
    font-family: var(--icon-cancel-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-cancel-font-weight, 900);
  }
  .color-palette-picker .icon-cancel:before {
    content: var(--icon-cancel-content, '\\f00d');
  }
  .color-palette-picker .icon-validate {
    font-family: var(--icon-validate-font-family, 'Font Awesome 6 Free');
    font-weight: var(--icon-validate-font-weight, 900);
  }
  .color-palette-picker .icon-validate:before {
    content: var(--icon-validate-content, '\\f00c');
  }
`
