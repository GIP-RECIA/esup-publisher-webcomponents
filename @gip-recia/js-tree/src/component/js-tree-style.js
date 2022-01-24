import {css} from 'lit-element'

export const jsTreeStyle = css`
    /* tree */
    .root-tree {
        padding-left: 0;
    }
    .root-tree li {
        list-style-type:none;
    }
    .root-tree .row-data:focus,
    .root-tree .row-data:hover{
        color: var(--text-color, black);
    }
    .root-tree li {
        margin-bottom: 2px;
        margin-top: 2px;
    }
    .root-tree .row-data.jstree-clicked,
    .root-tree .row-data.jstree-clicked span {
        background-color: var(--selected-background-color, white);
        color: var(--selected-text-color, black);
    }
    .root-tree .row,
    .root-tree .row-data {
        display: inline-block;
    }
    .root-tree .row-data span {
        margin-right: 3px;
    }
    .root-tree .subtree {
        display:none;
    }
    .root-tree .subtree-active {
        display:block;
    }
    .row {
        width: calc(100% - 20px);
        cursor: pointer;
        position: relative;
        padding-left: 20px;
    }
    .icon-indicator {
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .row-data {
        width: 100%;
    }
    i.icon {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        margin: 0px 2px;
        font-family: var(--icon-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-font-weight, 900);
    }
    i.icon:before {
        content: var(--icon-content, '\\f07b');
    }
    .item-subtree > div > .icon-indicator {
        font-family: var(--icon-fold-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-fold-font-weight, 900);
    }
    .item-subtree > div > .icon-indicator:before {
        content: var(--icon-fold-content, '\\f0da');
    }
    .item-active > div > .icon-indicator {
        font-family: var(--icon-unfold-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-unfold-font-weight, 900);
    }
    .item-active > div > .icon-indicator:before {
        content: var(--icon-unfold-content, '\\f0d7');
    }
    i.icon-0 {
        font-family: var(--icon-0-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-0-font-weight, 900);
    }
    i.icon-0:before {
        content: var(--icon-0-content, '\\f07b');
    }
    i.icon-1 {
        font-family: var(--icon-1-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-1-font-weight, 900);
    }
    i.icon-1:before {
        content: var(--icon-1-content, '\\f07b');
    }
    i.icon-2 {
        font-family: var(--icon-2-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-2-font-weight, 900);
    }
    i.icon-2:before {
        content: var(--icon-2-content, '\\f07b');
    }
    i.icon-3 {
        font-family: var(--icon-3-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-3-font-weight, 900);
    }
    i.icon-3:before {
        content: var(--icon-3-content, '\\f07b');
    }
    i.icon-4 {
        font-family: var(--icon-4-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-4-font-weight, 900);
    }
    i.icon-4:before {
        content: var(--icon-4-content, '\\f07b');
    }
    i.icon-5 {
        font-family: var(--icon-5-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-5-font-weight, 900);
    }
    i.icon-5:before {
        content: var(--icon-5-content, '\\f07b');
    }
    i.icon-6 {
        font-family: var(--icon-6-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-6-font-weight, 900);
    }
    i.icon-6:before {
        content: var(--icon-6-content, '\\f07b');
    }
    i.icon-7 {
        font-family: var(--icon-7-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-7-font-weight, 900);
    }
    i.icon-7:before {
        content: var(--icon-7-content, '\\f07b');
    }
    i.icon-8 {
        font-family: var(--icon-8-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-8-font-weight, 900);
    }
    i.icon-8:before {
        content: var(--icon-8-content, '\\f07b');
    }
    i.icon-9 {
        font-family: var(--icon-9-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-9-font-weight, 900);
    }
    i.icon-9:before {
        content: var(--icon-9-content, '\\f07b');
    }
    i.icon-10 {
        font-family: var(--icon-10-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-10-font-weight, 900);
    }
    i.icon-10:before {
        content: var(--icon-10-content, '\\f07b');
    }
  `