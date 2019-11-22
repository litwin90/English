import { remSize } from '../../configs/constants';

export function pxToRem(size: number): number {
    return size / remSize;
}
