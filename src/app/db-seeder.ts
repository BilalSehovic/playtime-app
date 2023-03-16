import { Activity } from "./models/activity/activity";
import { Review } from "./models/activity/review";
import { Child } from "./models/child";
import { User } from "./models/user";
import { UserRole } from "./models/user-role.enum";
import { LocalStorageService } from "./services/local-storage.service";

export function dbSeeder(localStorageService: LocalStorageService): void {
    /**
     * Users
     */
    let users: User[] = [];

    let u = new User();
    u.id = 1;
    u.email = 'parent';
    u.password = 'parent';
    u.role = UserRole.Parent;
    u.children = [];
    let child = new Child();
    child.id = 1;
    child.name = 'Bob';
    child.age = 5;
    child.interests = ['auta', 'crtici', 'citanje'];
    u.children.push(JSON.parse(JSON.stringify(child)));
    child.id = 2;
    child.name = 'Alice';
    child.age = 3;
    child.interests = ['lutke', 'balet', 'dinosauri'];
    u.children.push(JSON.parse(JSON.stringify(child)));
    users.push(JSON.parse(JSON.stringify(u)));

    u.id = 1;
    u.email = 'moderator';
    u.password = 'moderator';
    u.role = UserRole.Moderator;
    u.children = [];
    users.push(JSON.parse(JSON.stringify(u)));

    u.id = 1;
    u.email = 'guest';
    u.password = 'guest';
    u.role = UserRole.Guest;
    u.children = [];
    users.push(JSON.parse(JSON.stringify(u)));

    localStorageSetItem(localStorageService, 'users', users);

    /**
     * Activities
     */
    let activities: Activity[] = [];

    let a = new Activity();
    a.id = 1;
    a.name = 'Connetix Tiles';
    a.description = 'Sa jedinstvenim dizajnom zakošenog oblika, izdržljivim i netoksičnim materijalima, Connetix nudi beskrajne mogućnosti igranja. Uživajte u jasnijim refrakcijama, snažnim magnetima i živim bojama dok stvarate neograničene strukture - od dvoraca i kula, do životinja i vozila.';
    a.ageGroup = [2, 10];
    a.pictures = [
        './assets/images/activities/connetix-1.jpg',
        './assets/images/activities/connetix-2.jpg',
        './assets/images/activities/connetix-3.jpg',
        './assets/images/activities/connetix-4.jpg',
        './assets/images/activities/connetix-5.jpg'
    ];
    a.links = [
        'https://connetixtiles.com/',
        'https://connetixtiles.com/product/connetix-tiles-au-62-piece-set/'
    ];
    a.keywords = ['rad rukama', 'magneti'];
    a.reviews = [];
    let r = new Review();
    r.id = 1;
    r.rating = 5;
    r.description = 'Bilo odlicno, sin se stvarno aktivirao pri gradnji kule od magnetnih kockica.';
    r.addedBy = 'parent';
    a.reviews.push(JSON.parse(JSON.stringify(r)));
    activities.push(JSON.parse(JSON.stringify(a)));

    a.id = 2;
    a.name = 'Kinderland Igraonica';
    a.description = 'U Kinderland igraonici mogu uživati svi članovi porodice, veliki I mali zajedno mogu istraživati svijet zabave I uživati u atrakcijama.';
    a.ageGroup = [2, 14];
    a.pictures = [
        './assets/images/activities/kinderland-1.jpg',
        './assets/images/activities/kinderland-2.jpg',
        './assets/images/activities/kinderland-3.jpg'
    ];
    a.links = ['http://kinderland.ba/'];
    a.keywords = ['veliki prostor', 'tobogan', 'trcanje'];
    a.reviews = [];
    activities.push(JSON.parse(JSON.stringify(a)));
    
    a.id = 3;
    a.name = 'DIY: Voćni rolati';
    a.description = 'Svako dijete voli voćne rolade, ali svi znamo da nisu najzdravija grickalica.';
    a.ageGroup = [3, 9];
    a.pictures = [
        './assets/images/activities/fruitroll-1.jpg',
        './assets/images/activities/fruitroll-2.jpg'
    ];
    a.links = ['https://indyschild.com/diy-fruit-roll-ups/'];
    a.keywords = ['rad rukama', 'kuhinja'];
    a.reviews = [];
    r.id = 1;
    r.rating = 4;
    r.description = 'Ok je bilo, zahtjeva malo vise posla u kuhinji nego ocekivano.';
    r.addedBy = 'parent';
    a.reviews.push(JSON.parse(JSON.stringify(r)));
    activities.push(JSON.parse(JSON.stringify(a)));

    localStorageSetItem(localStorageService, 'activities', activities)
}

export function localStorageSetItem(localStorageService: LocalStorageService, key: string, value: any): void {
    if (!localStorageService.getItem(key)) {
        localStorageService.setItem(key, value);
    }
}