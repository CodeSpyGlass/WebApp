import {useState} from 'react';

/**
 * This hook starts its life as false, and once triggered, it becomes true and cannot go
 * back to being false.
 */
export function useTrigger(): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(false);
    const trigger = () => setValue(true);
    return [value, trigger];
}