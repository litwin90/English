import { remSize } from '../constants';

export function pxToRem(size: number): number {
    return size / remSize;
}
