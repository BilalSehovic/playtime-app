import { Review } from "./review";

export class Activity {
    public id: number = 0;
    /** Activity name. */
    public name: string = '';
    /** Activity description. */
    public description: string = '';
    /** Activity age group, for ex. [0-3] meaning activity designed for children between birth and the age of 3. OR [4-4] meaning activity only for 4-year-olds. */
    public ageGroup: number[] = [];
    /** Pictures, base64 encoded. */
    public pictures: string[] = [];
    public reviews: Review[] = [];
}