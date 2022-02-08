import { css } from 'lit'

export const editEvaluatorStyle = css`
    .evaluator {
        list-style: none;
    }

    [data-tooltip] {
        position: relative;
    }

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
    .icon-remove {
        font-family: var(--icon-remove-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-remove-font-weight, 900);
    }
    .icon-remove:before {
        content: var(--icon-remove-content, '\\f057');
    }
  `