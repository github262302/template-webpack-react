// / <reference path="postcss.config.js" />
declare module "*.less";
declare module "*.css";

declare type ReactProps = {
    dispatch(a: { type: string } & any): void;
    state: { init: number };
};
