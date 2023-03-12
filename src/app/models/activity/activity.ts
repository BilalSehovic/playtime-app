import { Review } from "./review";

export class Activity {
    /** Activity name. */
    name: string = '';
    /** Activity age group, for ex. [0-3] meaning activity designed for children between birth and the age of 3. OR [4-4] meaning activity only for 4-year-olds. */
    ageGroup: number[] = [];
    reviews: Review[] = [];
}