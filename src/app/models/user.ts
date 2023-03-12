import { Child } from './child';
import { UserRole } from './user-role.enum';

export class User {
    id: number = -1;
    email: string = '';
    password: string = '';
    role: UserRole = UserRole.Parent;
    children: Child[] = [];
    imageUrl?: string;
}